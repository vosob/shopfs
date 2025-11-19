import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Comment } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllComments(): Promise<Comment[]> {
    return this.prismaService.comment.findMany();
  }

  async addComment(dto: CreateCommentDto, userId: string): Promise<Comment> {
    const { text, rating } = dto;

    if (!userId) {
      throw new UnauthorizedException('User not logged in');
    }

    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const newComment = await this.prismaService.comment.create({
      data: {
        text,
        rating,
        userId,
      },
      include: {
        user: {
          select: {
            name: true,
            city: true,
          },
        },
      },
    });
    return newComment;
  }
}
