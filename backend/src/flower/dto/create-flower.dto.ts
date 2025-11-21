import { IsNotEmpty, IsString, IsInt, Min, MaxLength } from 'class-validator';

export class CreateFlowerDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name_uk: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name_en: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  color_uk: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  color_en: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  price: number;

  // @IsOptional()
  // @IsArray()
  // @ArrayUnique()
  // @IsString({
  //   each: true,
  // })
  // bouquetIds?: string[]; // масив id букетів, до яких належить квітка
}
