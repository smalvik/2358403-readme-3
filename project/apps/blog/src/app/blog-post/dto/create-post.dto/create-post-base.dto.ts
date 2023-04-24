// import { PostTypeEnum, PostStatusEnum } from '@project/shared/app-types';

export class CreatePostBaseDto {
  public type: string;
  public status: string;
  public tags?: string[];
}
