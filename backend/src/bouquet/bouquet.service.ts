import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBouquetDto } from './dto/create-bouquet.dto';
import { Bouquet, Prisma } from '@prisma/client';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class BouquetService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async getAllBouquets(filters?: {
    search?: string;
    sortByPrise?: string;
    sortBySize?: number;
  }): Promise<Bouquet[]> {
    const where: Prisma.BouquetWhereInput = {};

    // Якщо є пошуковий запит
    if (filters?.search) {
      where.name = {
        contains: filters.search,
        mode: 'insensitive', // регістронезалежний пошук
      };
    }
    // Якщо є сортування за ціною
    // lte - менше або дорівнює
    // gte - більше або дорівнює
    // gt - більше ніж

    if (filters?.sortByPrise === '700') {
      where.price = { lte: 700 };
    } else if (filters?.sortByPrise === '700/800') {
      where.price = { gte: 700, lte: 800 };
    } else if (filters?.sortByPrise === '800/900') {
      where.price = { gte: 800, lte: 900 };
    } else if (filters?.sortByPrise === '900/1000') {
      where.price = { gte: 900, lte: 1000 };
    } else if (filters?.sortByPrise === '1000/1200') {
      where.price = { gte: 1000, lte: 1200 };
    } else if (filters?.sortByPrise === '1200+') {
      where.price = { gte: 1200 };
    }

    // Якщо є сортування за розміром
    if (Number(filters?.sortBySize)) {
      where.size = Number(filters?.sortBySize);
    }

    return this.prismaService.bouquet.findMany({
      where,
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
