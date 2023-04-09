import { Comment, CommentStatusEnum } from '@project/shared/app-types';

export class BlogPostCommentEntity implements Comment {
  public _id?: string;
  public userId: string;
  public postId: string;
  public text: string;
  public status: CommentStatusEnum;
  public creationDate: number;
  public publicationDate: number;

  constructor(blogPost: Comment) {
    this.fillEntity(blogPost);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(blogPost: Comment) {
    this._id = blogPost._id;
    this.userId = blogPost.userId;
    this.postId = blogPost.postId;
    this.text = blogPost.text;
    this.status = blogPost.status;
    this.creationDate = blogPost.creationDate;
    this.publicationDate = blogPost.publicationDate;
  }
}
