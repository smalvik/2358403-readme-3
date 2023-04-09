import { Body, Controller, Post } from '@nestjs/common';
import { BlogPostCommentService } from './blog-post-comment.service';
import { CreatePostCommentDto } from './dto/create-post-comment.dto';
import { BlogPostCommentRdo } from './rdo/blog-post-comment.rdo';
import { fillObject } from '@project/util/util-core';

@Controller('blog-post-comment')
export class BlogPostCommentController {
  constructor(
    private readonly blogPostCommentService: BlogPostCommentService
  ) {}

  @Post('create')
  public async create(@Body() dto: CreatePostCommentDto) {
    const newBlogPostComment = await this.blogPostCommentService.create(dto);
    return fillObject(BlogPostCommentRdo, newBlogPostComment);
  }
}
