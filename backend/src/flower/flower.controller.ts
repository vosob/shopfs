import { Body, Controller, Get, Post } from '@nestjs/common';
import { FlowerService } from './flower.service';
import { CreateFlowerDto } from './dto/create-flower.dto';

@Controller('flower')
export class FlowerController {
  constructor(private readonly flowerService: FlowerService) {}

  @Get()
  getAllFlowers() {
    return this.flowerService.getAllFlowers();
  }

  @Post('add')
  addFlower(@Body() dto: CreateFlowerDto) {
    return this.flowerService.addFlower(dto);
  }
}
