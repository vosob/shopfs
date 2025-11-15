import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OptionalJwtCookieGuard } from '../guards/auth.guards';

export function Authorization() {
  return applyDecorators(UseGuards(AuthGuard('jwt')));
}

// Для опціональної авторизації (працює з/без токена)
export function OptionalAuthorization() {
  return applyDecorators(UseGuards(OptionalJwtCookieGuard));
}
