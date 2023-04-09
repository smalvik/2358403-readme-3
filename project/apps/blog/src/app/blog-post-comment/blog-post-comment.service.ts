import { Injectable } from '@nestjs/common';
import { BlogPostCommentMemoryRepository } from './blog-post-comment-memory.repository';
import { CreatePostCommentDto } from './dto/create-post-comment.dto';
import { CommentStatusEnum } from '@project/shared/app-types';
import { BlogPostCommentEntity } from './blog-post-comment.entity';

@Injectable()
export class BlogPostCommentService {
  constructor(
    private readonly blogPostCommentRepository: BlogPostCommentMemoryRepository
  ) {}

  public async register(dto: CreatePostCommentDto) {
    const { userId, postId, text } = dto;

    const blogPostComment = {
      userId,
      postId,
      text,
      status: CommentStatusEnum.Moderation,
      creationDate: Date.now(),
      publicationDate: Date.now(),
    };

    const blogPostEntity = new BlogPostCommentEntity(blogPostComment);

    return this.blogPostCommentRepository.create(blogPostEntity);
  }
}
