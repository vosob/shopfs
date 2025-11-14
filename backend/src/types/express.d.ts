// import 'express';

// declare module 'express' {
//   interface Request {
//     cookies: {
//       accessToken?: string;
//       refreshToken?: string;
//       [key: string]: string | undefined;
//     };
//   }
// }

import 'express';
import { User } from '@prisma/client';

declare module 'express' {
  interface Request {
    cookies: {
      accessToken?: string;
      refreshToken?: string;
      [key: string]: string | undefined;
    };
    user?: User;
  }
}
