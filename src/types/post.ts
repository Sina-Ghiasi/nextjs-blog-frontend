export type PostAuthorType = {
  _id: string;
  name: string;
  avatar: string;
  avatarUrl: string;
};

export type PostCategoryType = {
  _id: string;
  title: string;
  slug: string;
};

export type PostCommentType = {
  _id: string;
  user: PostAuthorType;
  content: {
    text: string;
  };
  status: number;
  openToComment: boolean;
  createdAt: string;
  answers: PostCommentAnswerType[];
};

export type PostCommentAnswerType = {
  _id: string;
  content: {
    text: string;
  };
  status: number;
  openToComment: boolean;
  createdAt: string;
  user: PostAuthorType;
};

export type PostType = {
  _id: string;
  title: string;
  slug: string;
  category: PostCategoryType;
  type: string;
  briefText: string;
  text: string;
  coverImage: string;
  coverImageUrl: string;
  readingTime: number;
  tags: string[];
  author: PostAuthorType;
  related: PostType[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
  likesCount: number;
  isLiked: boolean;
  isBookmarked: boolean;
  comments: PostCommentType[];
  commentsCount: number;
};
