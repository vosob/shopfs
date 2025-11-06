import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNewCategoryDto } from './dto/create-new-category.dto';
import { Category } from '@prisma/client';
@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllCategories(): Promise<
    Pick<Category, 'id' | 'name' | 'description'>[]
  > {
    return await this.prismaService.category.findMany({
      select: {
        id: true,
        name: true,
        description: true,
      },
    });
  }

  async createNewCategory(dto: CreateNewCategoryDto): Promise<Category> {
    const { name, description } = dto;

    const newCategory = await this.prismaService.category.create({
      data: {
        name,
        description,
      },
    });
    return newCategory;
  }
}
