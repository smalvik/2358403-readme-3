import { Injectable } from '@nestjs/common';
import { BlogPostCommentMemoryRepository } from './blog-post-comment-memory.repository';

@Injectable()
export class BlogPostCommentService {
  constructor(
    private readonly blogPostCommentRepository: BlogPostCommentMemoryRepository
  ) {}
}
