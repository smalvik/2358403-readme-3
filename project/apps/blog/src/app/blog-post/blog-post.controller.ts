import { Body, Controller, Post } from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { BlogPostRdo } from './rdo/blog-post.rdo';
import { fillObject } from '@project/util/util-core';

@Controller('blog-post')
export class BlogPostController {
  constructor(private readonly blogPostService: BlogPostService) {}

  @Post('create')
  public async create(@Body() dto: CreatePostDto) {
    const newPost = await this.blogPostService.create(dto);
    return fillObject(BlogPostRdo, newPost);
  }
}
