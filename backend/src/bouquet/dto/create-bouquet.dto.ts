import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsInt,
  Min,
  MaxLength,
  IsArray,
  ArrayMinSize,
  ValidateNested,
} from 'class-validator';

export class BouquetFlowerDto {
  @IsNotEmpty()
  @IsString()
  flowerId: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  quantity: number;
}

export class CreateBouquetDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  size: number;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  price: number;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => BouquetFlowerDto)
  flowers: BouquetFlowerDto[];
}
