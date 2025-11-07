import { Injectable } from '@nestjs/common';
import { Flower } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFlowerDto } from './dto/create-flower.dto';

@Injectable()
export class FlowerService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllFlowers(): Promise<Flower[]> {
    return this.prismaService.flower.findMany();
  }

  async addFlower(dto: CreateFlowerDto): Promise<Flower> {
    const { name, color, price } = dto;

    const newFlower = await this.prismaService.flower.create({
      data: {
        name,
        color,
        price,
      },
    });
    return newFlower;
  }
}
