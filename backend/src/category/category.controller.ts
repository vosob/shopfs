import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateNewCategoryDto } from './dto/create-new-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('all-categories')
  getAllCategories() {
    return this.categoryService.getAllCategories();
  }

  @Post('create-new')
  postCreateCategory(@Body() dto: CreateNewCategoryDto) {
    return this.categoryService.createNewCategory(dto);
  }
}
