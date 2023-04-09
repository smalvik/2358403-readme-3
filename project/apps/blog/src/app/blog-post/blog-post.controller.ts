import { Body, Controller, Post } from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { BlogPostBaseRdo } from './rdo/blog-post.rdo';
import { fillObject } from '@project/util/util-core';

@Controller('blog-post')
export class BlogPostController {
  constructor(private readonly blogPostService: BlogPostService) {}

  @Post('create')
  public async create(
    @Body()
    postData: CreatePostDto
  ) {
    console.log(postData);
    const newPost = await this.blogPostService.create(postData);
    return fillObject(BlogPostBaseRdo, newPost);
  }
}
