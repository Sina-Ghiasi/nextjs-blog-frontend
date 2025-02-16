import { CategoryType } from "@/types/category";
import { PostType } from "@/types/post";
import { UserType } from "./user";

/* ------------------------ Auth and User ------------------------ */
export type ApiAuthResponseType = {
  statusCode: number;
  data: {
    message: string;
    user: UserType;
  };
};
export type ApiUserProfileResponseType = {
  statusCode: number;
  data: {
    user: UserType;
  };
};

export type ApiSigninRequestType = {
  email: string;
  password: string;
};

export type ApiSignupRequestType = {
  name: string;
  email: string;
  password: string;
};

export type ApiUserListResponseType = {
  statusCode: number;
  data: {
    users: UserType[];
  };
};

/* ------------------------ Post ------------------------ */
export type ApiPostListResponseType = {
  statusCode: number;
  data: {
    message: string;
    posts: PostType[];
    totalPages: number;
  };
};

export type ApiPostResponseType = {
  statusCode: number;
  data: { post: PostType };
};
export type ApiPostLikeResponseType = {
  statusCode: number;
  data: {
    message: string;
  };
};

export type ApiPostBookmarkResponseType = {
  statusCode: number;
  data: {
    message: string;
  };
};

export type ApiCreatePostRequestType = {
  title: string;
  briefText: string;
  text: string;
  slug: string;
  readingTime: number;
  category: string;
  coverImage?: File;
};

export type ApiCreatePostResponseType = {
  statusCode: number;
  data: {
    message: string;
    post: PostType;
  };
};

export type ApiUpdatePostResponseType = {
  statusCode: number;
  data: {
    message: string;
  };
};

export type ApiDeletePostResponseType = {
  statusCode: number;
  data: {
    message: string;
  };
};

/* ------------------------ Category ------------------------ */
export type ApiCategoryListResponseType = {
  status: number;
  data: { categories: CategoryType[] };
};

/* ------------------------ Comment ------------------------ */
export type ApiAddCommentResponse = {
  statusCode: number;
  data: {
    message: string;
  };
};

export type ApiCommentListResponseType = {
  statusCode: number;
  data: {
    comments: Comment[];
    commentsCount: number;
  };
};
