import { CategoryType } from "@/types/category";
import { PostType } from "@/types/post";
import { UserType } from "./user";

export type ApiCategoryListResponseType = {
  status: number;
  data: { categories: CategoryType[] };
};

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
