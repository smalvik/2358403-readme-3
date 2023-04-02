import { Expose } from 'class-transformer';

export class BlogPostRdo {
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
  public isReposted: boolean;

  @Expose()
  public tags?: string[];
}
