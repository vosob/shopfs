import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

// * у сервісах зазвичай міститься вся логіка

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllUsers() {
    return await this.prismaService.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  }

  async getUserById(id: string): Promise<Pick<User, 'id' | 'name' | 'email'>> {
    const user = await this.prismaService.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`User with id "${id}" not found`);
    }

    return user;
  }

  async createUser(dto: CreateUserDto): Promise<User> {
    const { name, email, password } = dto;

    const newUser = await this.prismaService.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return newUser;
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
}
