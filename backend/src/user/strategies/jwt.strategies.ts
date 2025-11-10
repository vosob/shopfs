import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayloadType, UserService } from '../user.service';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';

// // @Injectable()
// // export class JwtStrategy extends PassportStrategy(Strategy) {
// //   constructor(
// //     private readonly configService: ConfigService,
// //     private readonly authService: UserService,
// //   ) {
// //     super({
// //       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
// //       ignoreExpiration: false,
// //       secretOrKey: configService.getOrThrow<string>('JWT_SECRET'),
// //       algorithms: ['HS256'],
// //     });
// //   }

// //   async validate(payload: JwtPayloadType) {
// //     return await this.authService.validate(payload.id);
// //   }
// // }

@Injectable()
export class JwtCookieStrategy extends PassportStrategy(
  Strategy,
  'jwt-cookie',
) {
  constructor(
    private readonly configService: ConfigService,
    private readonly authService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => req?.cookies?.accessToken as string | null,
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.getOrThrow<string>('JWT_SECRET'),
      algorithms: ['HS256'],
    });
  }

  async validate(payload: JwtPayloadType) {
    return this.authService.validate(payload.id);
  }
}
