import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ type: String, required: true, description: 'User name' })
  @IsString()
  @IsNotEmpty()
  @MinLength(2, { message: 'Name must be at least 2 characters long' })
  name: string;

  @ApiProperty({ type: String, required: true, description: 'User email' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ type: String, required: true, description: 'User phone' })
  @IsString({ message: 'Phone must be a string' })
  @IsNotEmpty({ message: 'Phone cannot be empty' })
  phone: string;

  @ApiProperty({ type: String, required: true, description: 'User city' })
  @IsString({ message: 'City must be a string' })
  @IsNotEmpty({ message: 'City cannot be empty' })
  city: string;

  @ApiProperty({ type: String, required: true, description: 'User password' })
  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password cannot be empty' })
  @MinLength(6)
  password: string;
}
