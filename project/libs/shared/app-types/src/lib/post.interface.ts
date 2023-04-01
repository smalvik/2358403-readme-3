import { PostTypeEnum } from './post-type.enum';
import { PostStatusEnum } from './post-status.enum';

export interface Post {
  _id?: string;
  userId: string;
  authorUserId: string;
  creationDate: string;
  publicationDate: string;
  likesCount: number;
  commentsCount: number;
  type: PostTypeEnum;
  status: PostStatusEnum;
  isReposted: boolean;
  tags?: string[];
}
