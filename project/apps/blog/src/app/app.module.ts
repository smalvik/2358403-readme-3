import { Module } from '@nestjs/common';
import { BlogPostModule } from './blog-post/blog-post.module';
import { BlogPostCommentModule } from './blog-post-comment/blog-post-comment.module';

@Module({
  imports: [BlogPostModule, BlogPostCommentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
