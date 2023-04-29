import { Module } from '@nestjs/common';
import { BlogPostLikeController } from './blog-post-like.controller';
import { BlogPostLikeService } from './blog-post-like.service';

@Module({
  controllers: [BlogPostLikeController],
  providers: [BlogPostLikeService],
})
export class BlogPostLikeModule {}
