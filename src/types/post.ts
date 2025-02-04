import { CommentType } from "./comment";

export type PostType = {
  _id: string;
  title: string;
  slug: string;
  category: { _id: string; title: string; slug: string };
  type: string;
  briefText: string;
  text: string;
  coverImage: string;
  coverImageUrl: string;
  readingTime: number;
  tags: string[];
  author: { _id: string; name: string; avatar: string; avatarUrl: string };
  related: PostType[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
  likesCount: number;
  isLiked: boolean;
  isBookmarked: boolean;
  comments: CommentType[];
  commentsCount: number;
};
