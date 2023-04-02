import { PostTypeEnum, PostStatusEnum } from '@project/shared/app-types';

export class CreatePostDto {
  public type: PostTypeEnum;
  public status: PostStatusEnum;
  public tags?: string[];
}
