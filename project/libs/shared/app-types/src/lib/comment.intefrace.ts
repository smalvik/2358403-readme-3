import { CommentStatusEnum } from './comment-status.enum';

export interface Comment {
  _id?: string;
  userId: string;
  postId: string;
  text: string;
  status: CommentStatusEnum;
  creationDate: number;
  publicationDate: number;
}
