import Category from "@/types/category";
import Post from "@/types/post";

export type ApiCategoryListResponseType = {
  status: number;
  data: { categories: Category[] };
};

export type ApiPostListResponseType = {
  statusCode: number;
  data: {
    message: string;
    posts: Post[];
    totalPages: number;
  };
};

export type ApiPostResponseType = {
  statusCode: number;
  data: { post: Post };
};
