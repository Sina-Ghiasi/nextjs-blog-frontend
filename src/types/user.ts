import { PostType } from "./post";

export type UserType = {
  _id: string;
  name: string;
  email: string;
  avatar: string | null;
  createdAt: string;
  updatedAt: string;
  avatarUrl: string | null;
  bookmarkedPosts: PostType[];
  likedPosts: PostType[];
  __v: number;
};
