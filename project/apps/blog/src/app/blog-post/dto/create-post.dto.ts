export class CreatePostDto {
  public userId: string;
  public authorUserId: string;
  public creationDate: string;
  public publicationDate: string;
  public likesCount: number;
  public commentsCount: number;
  public type: string;
  public status: string;
  public isReposted: boolean;
  public tags?: string[];
}
