import { Injectable } from '@nestjs/common';
import { BlogPostMemoryRepository } from './blog-post-memory.repository';
import { CreatePostDto } from './dto/create-post.dto';
import dayjs from 'dayjs';
import { BlogPostEntity } from './blog-post.entity';

@Injectable()
export class BlogPostService {
  constructor(private readonly blogPostRepository: BlogPostMemoryRepository) {}

  public async create(dto: CreatePostDto) {
    const { type, status, tags } = dto;

    const blogPost = {
      userId: '',
      authorUserId: '',
      creationDate: dayjs().toISOString(),
      publicationDate: dayjs().toISOString(),
      likesCount: 0,
      commentsCount: 0,
      type,
      status,
      isReposted: false,
      tags,
    };

    const postEntity = await new BlogPostEntity(blogPost);

    return this.blogPostRepository.create(postEntity);
  }
}
