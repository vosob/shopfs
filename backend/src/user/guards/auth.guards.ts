import { AuthGuard } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

// @Injectable()
// export class JwtGuard extends AuthGuard('jwt') {}

@Injectable()
export class JwtCookieGuard extends AuthGuard('jwt-cookie') {}

//@UseGuards(JwtGuard)
