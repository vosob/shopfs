import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBouquetDto } from './dto/create-bouquet.dto';
import { Bouquet } from '@prisma/client';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class BouquetService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async getAllBouquets(): Promise<Bouquet[]> {
    return this.prismaService.bouquet.findMany({
      include: {
        flowers: {
          include: { flower: true },
        },
        images: true,
      },
    });
  }

  async getBouquetsByIds(
    id: string,
  ): Promise<Pick<Bouquet, 'id' | 'name' | 'size' | 'price'>> {
    const bouquet = await this.prismaService.bouquet.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        size: true,
        price: true,
        images: true,
        flowers: { include: { flower: true } },
      },
    });

    if (!bouquet) {
      throw new Error('Bouquet not found');
    }

    return bouquet;
  }

  async addBouquet(dto: CreateBouquetDto): Promise<Bouquet> {
    const { name, size, price, flowers } = dto;

    const newBouquet = await this.prismaService.bouquet.create({
      data: {
        name,
        size,
        price,
        flowers: {
          create: flowers.map((flower) => ({
            flowerId: flower.flowerId,
            quantity: flower.quantity,
          })),
        },
      },
      include: {
        flowers: {
          include: {
            flower: true,
          },
        },
      },
    });
    return newBouquet;
  }

  async uploadImage(bouquetId: string, file: Express.Multer.File) {
    const isBouquetExist = await this.prismaService.bouquet.findUnique({
      where: { id: bouquetId },
    });

    if (!isBouquetExist) {
      throw new Error(`Bouquet with ${bouquetId} not found`);
    }

    const uploadResult = await this.cloudinaryService.uploadImage(file);

    const image = await this.prismaService.bouquetImage.create({
      data: {
        url: uploadResult.secure_url as string,
        bouquetId: bouquetId,
      },
    });

    return image;
  }
}
