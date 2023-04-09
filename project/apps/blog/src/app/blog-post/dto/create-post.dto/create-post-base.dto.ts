import { PostTypeEnum, PostStatusEnum } from '@project/shared/app-types';

export class CreatePostBaseDto {
  public type: PostTypeEnum;
  public status: PostStatusEnum;
  public tags?: string[];
}
