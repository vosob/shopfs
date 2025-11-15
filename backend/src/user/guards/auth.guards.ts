import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext, Injectable } from '@nestjs/common';

// @Injectable()
// export class JwtGuard extends AuthGuard('jwt') {}

// Обов'язковий guard - для захищених роутів
@Injectable()
export class JwtCookieGuard extends AuthGuard('jwt-cookie') {}

// Опціональний guard - для роутів, що працюють з/без авторизації
@Injectable()
export class OptionalJwtCookieGuard extends AuthGuard('jwt-cookie') {
  handleRequest<TUser = any>(
    err: any,
    user: any,
    info: any,
    context: ExecutionContext,
    status?: any,
  ): TUser {
    // Якщо токен протермінований або є будь-яка інша помилка - просто повертаємо undefined
    // Це дозволить незалогіненим користувачам або користувачам з протермінованим токеном продовжити
    if (err || !user || info) {
      return undefined as TUser;
    }
    return user;
  }
}
