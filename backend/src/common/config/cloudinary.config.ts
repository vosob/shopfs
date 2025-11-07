import { v2 as cloudinary, ConfigOptions } from 'cloudinary';
import { ConfigService } from '@nestjs/config';

export const CloudinaryProvider = {
  provide: 'CLOUDINARY',
  useFactory: (configService: ConfigService) => {
    const options: ConfigOptions = {
      cloud_name: configService.get<string>('CLOUDINARY_API_NAME')!,
      api_key: configService.get<string>('CLOUDINARY_API_KEY')!,
      api_secret: configService.get<string>('CLOUDINARY_API_SECRET')!,
    };

    cloudinary.config(options);
    return cloudinary;
  },
  inject: [ConfigService],
};
