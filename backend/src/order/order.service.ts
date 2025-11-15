import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderStatus, Prisma } from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(private readonly prismaService: PrismaService) {}

  async createOrder(dto: CreateOrderDto, userId?: string) {
    console.log(userId);
    if (!dto.orders || dto.orders.length === 0) {
      throw new BadRequestException(
        'Замовлення повинно містити хоча б один товар',
      );
    }

    const bouquetIds = dto.orders.map((item) => item.productId);

    const bouquets = await this.prismaService.bouquet.findMany({
      where: { id: { in: bouquetIds } },
      include: {
        images: true,
      },
    });

    if (bouquets.length !== bouquetIds.length) {
      throw new NotFoundException('Деякі букети не знайдено в базі даних');
    }

    // Валідація обов'язкових полів
    if (!dto.deliveryMethod) {
      throw new BadRequestException("Метод доставки є обов'язковим");
    }
    if (!dto.deliveryTimeOrDate) {
      throw new BadRequestException("Час доставки є обов'язковим");
    }
    if (!dto.Recipient) {
      throw new BadRequestException("Тип отримувача є обов'язковим");
    }
    if (!dto.recipientMobile) {
      throw new BadRequestException("Телефон отримувача є обов'язковим");
    }
    if (!dto.recipientName) {
      throw new BadRequestException("Ім'я отримувача є обов'язковим");
    }
    if (!dto.recipientCity) {
      throw new BadRequestException("Місто отримувача є обов'язковим");
    }
    if (!dto.recipientAddress) {
      throw new BadRequestException("Адреса отримувача є обов'язковою");
    }

    if (!dto.selfPickupCash) {
      throw new BadRequestException("Метод оплати є обов'язковим");
    }

    const order = await this.prismaService.order.create({
      data: {
        userId: userId || null,

        // Доставка
        deliveryMethod: dto.deliveryMethod ?? null,
        deliveryDate: dto.deliveryDate ?? null,
        deliveryTimePreference: dto.deliveryTimeOrDate ?? null,
        deliveryExactTime: dto.deliveryExactTime ?? null,
        incognito: dto.incognito,

        // Отримувач
        isRecipientSender: dto.Recipient,
        recipientMobile: dto.recipientMobile ?? null,
        recipientName: dto.recipientName ?? null,
        recipientCity: dto.recipientCity ?? null,
        recipientAddress: dto.recipientAddress ?? null,
        recipientNote: dto.recipientNote ?? null,

        // Відправник
        senderName: dto.senderName ?? null,
        senderMobile: dto.senderMobile ?? null,
        senderCity: dto.senderCity ?? null,

        // Оплата
        paymentMethod: dto.selfPickupCash ?? null,

        // Товари
        items: {
          create: dto.orders.map((item) => ({
            bouquetId: item.productId,
            quantity: item.quantity,
            price: item.price,
            size: item.size,
          })),
        },
      },
      include: {
        items: {
          include: {
            bouquet: {
              include: {
                images: true,
                flowers: {
                  include: {
                    flower: true,
                  },
                },
              },
            },
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            city: true,
            phone: true,
          },
        },
      },
    });

    return {
      success: true,
      orderId: order.id,
      order,
    };
  }

  async getUserOrders(userId: string, status?: OrderStatus) {
    const where: Prisma.OrderWhereInput = {
      userId,
      ...(status && { status }),
    };

    return this.prismaService.order.findMany({
      where,
      include: {
        items: {
          include: {
            bouquet: {
              include: {
                images: true,
              },
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}
