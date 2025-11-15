import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Req,
  Get,
  UnauthorizedException,
  Query,
  UseGuards,
  // UseGuards,
} from '@nestjs/common';
import type { Request } from 'express';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { OptionalAuthorization } from 'src/user/decorators/auth.decorator';
import { OrderStatus } from '@prisma/client';
import { JwtCookieGuard } from 'src/user/guards/auth.guards';
// import { JwtCookieGuard } from 'src/user/guards/auth.guards';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @OptionalAuthorization()
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createOrder(@Body() dto: CreateOrderDto, @Req() req: Request) {
    const userId = req.user?.id;
    return this.orderService.createOrder(dto, userId);
  }

  @UseGuards(JwtCookieGuard)
  @Get('my')
  @HttpCode(HttpStatus.OK)
  async getMyOrders(
    @Req() req: Request,
    @Query('status') status?: OrderStatus,
  ) {
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedException('User not logged in');
    }

    return this.orderService.getUserOrders(userId, status);
  }
}
