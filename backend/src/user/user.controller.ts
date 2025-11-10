import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from './dto/login-user.dto';
import type { Response, Request } from 'express';
// import { Authorization } from './decorators/auth.decorator';
import { JwtCookieGuard } from './guards/auth.guards';

@ApiTags('Authorization')
@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Get all users' })
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @ApiOperation({ summary: 'Get user by id' })
  @Get('userId/:id')
  getById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Register user' })
  @Post('register')
  createUser(
    @Res({ passthrough: true }) res: Response,
    @Body() dto: CreateUserDto,
  ) {
    return this.userService.createUser(res, dto);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login user' })
  @Post('login')
  loginUser(
    @Res({ passthrough: true }) res: Response,
    @Body() dto: LoginUserDto,
  ) {
    return this.userService.loginUser(res, dto);
  }

  @ApiOperation({ summary: 'Refresh token' })
  @Post('refresh')
  refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    return this.userService.refresh(req, res);
  }

  @ApiOperation({ summary: 'Logout user' })
  @Post('logout')
  logout(@Res({ passthrough: true }) res: Response) {
    return this.userService.logout(res);
  }

  // @Authorization()
  @UseGuards(JwtCookieGuard)
  @Get('me')
  getMe(@Req() req: Request) {
    return req.user;
  }

  @ApiOperation({ summary: 'Update user' })
  @Put('update/:id')
  updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.updateUser(id, dto);
  }

  @ApiOperation({ summary: 'Delete user' })
  @Delete('delete/:id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
