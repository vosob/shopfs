import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { JwtCookieGuard } from 'src/user/guards/auth.guards';
import { CurrentUser } from 'src/order/decorators/current-user.decorator';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get('all')
  getAllComments() {
    return this.commentService.getAllComments();
  }

  @Post('create')
  @UseGuards(JwtCookieGuard)
  addComment(@Body() dto: CreateCommentDto, @CurrentUser('id') userId: string) {
    return this.commentService.addComment(dto, userId);
  }
}
