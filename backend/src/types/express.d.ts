import 'express';

declare module 'express' {
  interface Request {
    cookies: {
      accessToken?: string;
      refreshToken?: string;
      [key: string]: string | undefined;
    };
  }
}
