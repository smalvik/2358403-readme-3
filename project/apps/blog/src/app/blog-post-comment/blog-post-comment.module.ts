import { Module } from '@nestjs/common';
import { BlogPostCommentController } from './blog-post-comment.controller';
import { BlogPostCommentService } from './blog-post-comment.service';

@Module({
  controllers: [BlogPostCommentController],
  providers: [BlogPostCommentService],
})
export class BlogPostCommentModule {}
