import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// * у контролерах зазвичай містяться ендпоінти і тут ми зв'язуємо сервіси

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //* http://localhost:3000/user, якщо дадати у @Get('some-path'), тоді буде http://localhost:3000/user/some-path
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  //* http://localhost:3000/user/userId/1
  @Get('userId/:id')
  getById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  // * тут ми приймаємо parans у вигляді об'єкта dto
  @Post('create')
  createUser(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  @Put('update/:id')
  updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.updateUser(id, dto);
  }

  @Delete('delete/:id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
