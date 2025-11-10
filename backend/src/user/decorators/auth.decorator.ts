import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export function Authorization() {
  return applyDecorators(UseGuards(AuthGuard('jwt')));
}
