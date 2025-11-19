import {
  IsNotEmpty,
  IsString,
  IsInt,
  Min,
  MaxLength,
  Max,
} from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(300)
  text: string;

  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;
}
