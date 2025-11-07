import { Module } from '@nestjs/common';
import { BouquetService } from './bouquet.service';
import { BouquetController } from './bouquet.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
// import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

@Module({
  imports: [PrismaModule, CloudinaryModule],
  controllers: [BouquetController],
  providers: [BouquetService],
})
export class BouquetModule {}
