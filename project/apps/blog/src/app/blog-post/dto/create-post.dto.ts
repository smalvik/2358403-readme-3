import { PostTypeEnum, PostStatusEnum } from '@project/shared/app-types';

export class CreatePostBaseDto {
  public type: PostTypeEnum;
  public status: PostStatusEnum;
  public tags?: string[];
}

export class CreatePostVideoDto extends CreatePostBaseDto {
  public title: string;
  public link: string;
}

export class CreatePostTextDto extends CreatePostBaseDto {
  public title: string;
  public announcement: string;
  public text: string;
}

export class CreatePostQuoteDto extends CreatePostBaseDto {
  public quote: string;
  public author: string;
}

export class CreatePostPhotoDto extends CreatePostBaseDto {
  public photo: string;
}

export class CreatePostLinkDto extends CreatePostBaseDto {
  public link: string;
  public description?: string;
}

export type CreatePostDto =
  | CreatePostBaseDto
  | CreatePostVideoDto
  | CreatePostTextDto
  | CreatePostQuoteDto
  | CreatePostPhotoDto
  | CreatePostLinkDto;
