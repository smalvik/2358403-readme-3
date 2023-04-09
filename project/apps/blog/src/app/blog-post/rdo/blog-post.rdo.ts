import { Expose } from 'class-transformer';
import { PostTypeEnum, PostStatusEnum } from '@project/shared/app-types';

export class BlogPostBaseRdo {
  @Expose({ name: '_id' })
  public id: string;

  @Expose()
  public userId: string;

  @Expose()
  public authorUserId: string;

  @Expose()
  public creationDate: string;

  @Expose()
  public publicationDate: string;

  @Expose()
  public likesCount: number;

  @Expose()
  public commentsCount: number;

  @Expose()
  public type: PostTypeEnum;

  @Expose()
  public status: PostStatusEnum;

  @Expose()
  public isReposted: boolean;

  @Expose()
  public tags?: string[];
}
