import { Injectable } from '@nestjs/common';
import { BlogPostMemoryRepository } from './blog-post-memory.repository';
import {
  BlogPostBaseEntity,
  // BlogPostVideoEntity,
  // BlogPostTextEntity
} from './blog-post.entity';
// import { PostConnectionsTypes } from './posts-connections-types';
// import { Post } from '@project/shared/app-types';
import {
  CreatePostDto,
  // CreatePostVideoDto,
  // CreatePostTextDto,
} from './dto/create-post.dto';
// import { PostTypeEnum } from '@project/shared/app-types';

@Injectable()
export class BlogPostService {
  constructor(private readonly blogPostRepository: BlogPostMemoryRepository) {}

  // private getConnectionType(type: string) {
  //   return PostConnectionsTypes.find(
  //     (connectionType) => connectionType.type === type
  //   );
  // }

  // Create post
  // public async create(postData: CreatePostDto): Promise<Post> {

  //   if (postData.type === PostTypeEnum.Video) {
  //     const { type, status, tags, title, link } = postData;

  //     const blogPost = {
  //       userId: '',
  //       authorUserId: '',
  //       creationDate: Date.now(),
  //       publicationDate: Date.now(),
  //       likesCount: 0,
  //       commentsCount: 0,
  //       isReposted: false,
  //       type,
  //       status,
  //       tags,
  //       title,
  //       link,
  //     };

  //     const postEntity = new BlogPostVideoEntity(blogPost);
  //   }

  //   return null;
  // }

  public async create(postData: CreatePostDto) {
    const { type, status, tags } = postData;

    const blogPost = {
      userId: '',
      authorUserId: '',
      creationDate: Date.now(),
      publicationDate: Date.now(),
      likesCount: 0,
      commentsCount: 0,
      type,
      status,
      isReposted: false,
      tags,
    };

    const postEntity = new BlogPostBaseEntity(blogPost);

    return this.blogPostRepository.create(postEntity);
  }
}
