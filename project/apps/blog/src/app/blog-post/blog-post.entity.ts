import { Post, PostTypeEnum, PostStatusEnum } from '@project/shared/app-types';

export class BlogPostEntity implements Post {
  public _id: string;
  public userId: string;
  public authorUserId: string;
  public creationDate: string;
  public publicationDate: string;
  public likesCount: number;
  public commentsCount: number;
  public type: PostTypeEnum;
  public status: PostStatusEnum;
  public isReposted: boolean;
  public tags?: string[];

  constructor(blogPost: Post) {
    this.fillEntity(blogPost);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(blogPost: Post) {
    this._id = blogPost._id;
    this.userId = blogPost.userId;
    this.authorUserId = blogPost.authorUserId;
    this.creationDate = blogPost.creationDate;
    this.publicationDate = blogPost.publicationDate;
    this.likesCount = blogPost.likesCount;
    this.commentsCount = blogPost.commentsCount;
    this.type = blogPost.type;
    this.status = blogPost.status;
    this.isReposted = blogPost.isReposted;
    this.tags = blogPost.tags;
  }
}
