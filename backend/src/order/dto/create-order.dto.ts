// create-order.dto.ts
import {
  IsString,
  IsBoolean,
  IsOptional,
  IsArray,
  ValidateNested,
  IsInt,
  Min,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

export class OrderItemDto {
  @IsString()
  id: string; // ID з фронту (UUID)

  @IsString()
  productId: string; // це bouquetId в БД

  @IsString()
  name: string;

  @IsString()
  size: string; // "big", "medium", "small"

  @IsNumber()
  price: number;

  @IsInt()
  @Min(1)
  quantity: number;

  @IsArray()
  images: any[]; // можна детальніше типізувати якщо потрібно
}

export class CreateOrderDto {
  // Доставка (всі optional, бо можуть бути null)

  @IsString()
  deliveryMethod?: string;

  @IsOptional()
  @IsString()
  deliveryDate?: string | null;

  @IsString()
  deliveryTimeOrDate: string;

  @IsOptional()
  @IsString()
  deliveryExactTime?: string | null;

  @IsBoolean()
  incognito: boolean;

  // Отримувач (всі optional)

  @IsString()
  Recipient?: string;

  @IsString()
  recipientMobile?: string;

  @IsString()
  recipientName?: string;

  @IsString()
  recipientCity?: string;

  @IsString()
  recipientAddress?: string;

  @IsOptional()
  @IsString()
  recipientNote?: string | null;

  // Відправник (всі optional)

  @IsString()
  senderName?: string;

  @IsString()
  senderMobile?: string;

  @IsString()
  senderCity?: string;

  // Оплата (optional)

  @IsString()
  selfPickupCash: string;

  // Товари
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  orders: OrderItemDto[];
}
