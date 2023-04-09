import { Expose } from 'class-transformer';
import { CommentStatusEnum } from '@project/shared/app-types';

export class BlogPostBaseRdo {
  @Expose({ name: '_id' })
  public id: string;

  @Expose()
  public userId: string;

  @Expose()
  public postId: string;

  @Expose()
  public text: number;

  @Expose()
  public status: CommentStatusEnum;

  @Expose()
  public creationDate: number;

  @Expose()
  public publicationDate: number;
}
