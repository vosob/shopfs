import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Req,
  // UseGuards,
} from '@nestjs/common';
import type { Request } from 'express';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
// import { JwtCookieGuard } from 'src/user/guards/auth.guards';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  // @UseGuards(JwtCookieGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createOrder(@Body() dto: CreateOrderDto, @Req() req: Request) {
    const userId = req.user?.id;
    return this.orderService.createOrder(dto, userId);
  }
}
