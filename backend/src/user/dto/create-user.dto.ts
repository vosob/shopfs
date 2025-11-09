import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Email cannot be empty' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name cannot be empty' })
  @MinLength(2, { message: 'Name must be at least 2 characters long' })
  name: string;

  @IsString({ message: 'Phone must be a string' })
  @IsNotEmpty({ message: 'Phone cannot be empty' })
  phone: string;

  @IsString({ message: 'City must be a string' })
  @IsNotEmpty({ message: 'City cannot be empty' })
  city: string;

  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password cannot be empty' })
  @MinLength(6)
  password: string;
}
