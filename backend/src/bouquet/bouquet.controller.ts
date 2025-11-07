import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { BouquetService } from './bouquet.service';
import { CreateBouquetDto } from './dto/create-bouquet.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('bouquet')
export class BouquetController {
  constructor(private readonly bouquetService: BouquetService) {}

  @Get()
  getAllBouquets() {
    return this.bouquetService.getAllBouquets();
  }

  @Get('bouquetId/:id')
  getBouquetsByIds(@Param('id') id: string) {
    return this.bouquetService.getBouquetsByIds(id);
  }

  @Post('add')
  addBouquet(@Body() dto: CreateBouquetDto) {
    return this.bouquetService.addBouquet(dto);
  }

  @Post('upload/:id')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(
    @Param('id') bouquetId: string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 }), // 5MB
          new FileTypeValidator({ fileType: /(jpg|jpeg|png|webp)$/ }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.bouquetService.uploadImage(bouquetId, file);
  }
}
