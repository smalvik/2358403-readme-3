import { Module } from '@nestjs/common';
import { BlogPostMemoryRepository } from './blog-post-memory.repository';

// import { BlogPostController } from './blog-post.controller';
import { BlogPostService } from './blog-post.service';

@Module({
  // controllers: [],
  providers: [BlogPostMemoryRepository, BlogPostService],
  exports: [BlogPostMemoryRepository],
})
export class BlogPostModule {}
