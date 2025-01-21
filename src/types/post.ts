export type AuthorType = {
  _id: string;
  name: string;
  avatar: string;
  avatarUrl: string;
};

export type CategoryType = {
  _id: string;
  title: string;
  slug: string;
};

export type CommentType = {
  _id: string;
  user: AuthorType;
  content: {
    text: string;
  };
  status: number;
  openToComment: boolean;
  createdAt: string;
  answers: CommentAnswerType[];
};

export type CommentAnswerType = {
  _id: string;
  content: {
    text: string;
  };
  status: number;
  openToComment: boolean;
  createdAt: string;
  user: AuthorType;
};

export type PostType = {
  _id: string;
  title: string;
  slug: string;
  category: CategoryType;
  type: string;
  briefText: string;
  text: string;
  coverImage: string;
  coverImageUrl: string;
  readingTime: number;
  tags: string[];
  author: AuthorType;
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
