import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { hash, verify } from 'argon2';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user.dto';
import type { Response, Request } from 'express';
import { isDev } from 'src/common/utils/is-dev.utils';
// import { JwtPayloadType } from './jwt.interface';

// * у сервісах зазвичай міститься вся логіка

export interface JwtPayloadType {
  id: string;
}

export interface AuthTokens {
  accessToken: string;
}

@Injectable()
export class UserService {
  private readonly JWT_SECRET: string;
  private readonly JWT_ACCESS_TOKEN_TTL: number;
  private readonly JWT_REFRESH_TOKEN_TTL: number;
  private readonly COOKIE_DOMAIN: string;

  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {
    this.JWT_SECRET = configService.getOrThrow<string>('JWT_SECRET');
    this.JWT_ACCESS_TOKEN_TTL = configService.getOrThrow<number>(
      'JWT_ACCESS_TOKEN_TTL',
    );
    this.JWT_REFRESH_TOKEN_TTL = configService.getOrThrow<number>(
      'JWT_REFRESH_TOKEN_TTL',
    );
    this.COOKIE_DOMAIN = configService.getOrThrow<string>('COOKIE_DOMAIN');
  }

  async getAllUsers() {
    return await this.prismaService.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  }

  async getUserById(
    id: string,
  ): Promise<Pick<User, 'id' | 'name' | 'email' | 'city' | 'phone'>> {
    const user = await this.prismaService.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        city: true,
        phone: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`User with id "${id}" not found`);
    }

    return user;
  }

  // register
  async createUser(res: Response, dto: CreateUserDto): Promise<AuthTokens> {
    const { name, email, password, city, phone } = dto;

    const existingUser = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    const newUser = await this.prismaService.user.create({
      data: {
        name,
        email,
        password: await hash(password),
        city,
        phone,
      },
    });

    return this.auth(res, newUser.id);
  }

  // login
  async loginUser(res: Response, dto: LoginUserDto) {
    const { email, password } = dto;

    const user = await this.prismaService.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        password: true,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await verify(user.password, password);

    if (!isPasswordValid) {
      throw new Error('User not found');
    }

    return this.auth(res, user.id);
  }

  logout(res: Response): { message: string } {
    // Видаляємо accessToken
    res.clearCookie('accessToken', {
      domain: this.COOKIE_DOMAIN,
      httpOnly: true,
      secure: !isDev(this.configService),
      sameSite: isDev(this.configService) ? 'lax' : 'none',
    });

    // Видаляємо refreshToken
    res.clearCookie('refreshToken', {
      domain: this.COOKIE_DOMAIN,
      httpOnly: true,
      secure: !isDev(this.configService),
      sameSite: isDev(this.configService) ? 'lax' : 'none',
    });

    return { message: 'Logout successful' };
  }

  async validate(id: string) {
    const user = await this.prismaService.user.findUnique({ where: { id } });

    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async deleteUser(id: string): Promise<{ message: string }> {
    await this.prismaService.user.delete({
      where: { id },
    });

    return { message: 'User deleted successfully' };
  }

  async updateUser(id: string, dto: UpdateUserDto): Promise<User> {
    const { name, email } = dto;

    const updatedUser = await this.prismaService.user.update({
      where: { id },
      data: { name, email },
    });

    return updatedUser;
  }

  async refresh(req: Request, res: Response): Promise<AuthTokens> {
    const refreshToken = req.cookies['refreshToken'] as string | undefined;

    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token not found');
    }

    try {
      const payload = await this.jwtService.verifyAsync<JwtPayloadType>(
        refreshToken,
        {
          secret: this.JWT_SECRET,
        },
      );

      const user = await this.prismaService.user.findUnique({
        where: { id: payload.id },
        select: {
          id: true,
        },
      });

      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      return this.auth(res, user.id);
    } catch (error) {
      throw new UnauthorizedException(`Invalid refresh token, ${error}`);
    }
  }

  private auth(res: Response, id: string) {
    const { accessToken, refreshToken } = this.generateTokens(id);

    this.setCookies(
      res,
      accessToken,
      refreshToken,

      // new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    );

    return { accessToken };
  }

  private generateTokens(id: string) {
    const payload: JwtPayloadType = { id };

    const accessToken = this.jwtService.sign(payload, {
      secret: this.JWT_SECRET,
      expiresIn: this.JWT_ACCESS_TOKEN_TTL,
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: this.JWT_SECRET,
      expiresIn: this.JWT_REFRESH_TOKEN_TTL,
    });

    return { accessToken, refreshToken };
  }

  private setCookies(
    res: Response,
    accessToken: string,
    refreshToken: string,
    // value: string,
    // expires: Date,
  ) {
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      domain: this.COOKIE_DOMAIN,
      secure: !isDev(this.configService),
      sameSite: !isDev(this.configService) ? 'none' : 'lax',
    });
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      domain: this.COOKIE_DOMAIN,
      secure: !isDev(this.configService),
      sameSite: !isDev(this.configService) ? 'none' : 'lax',
    });
    // res.cookie('refreshToken', value, {
    //   httpOnly: true,
    //   domain: this.COOKIE_DOMAIN,
    //   expires,
    //   secure: !isDev(this.configService),
    //   sameSite: isDev(this.configService) ? 'none' : 'lax',
    // });
  }
}
