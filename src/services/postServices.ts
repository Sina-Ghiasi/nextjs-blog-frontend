import { CategoryType } from "@/types/category";
import {
  ApiCategoryListResponseType,
  ApiPostListResponseType,
  ApiPostResponseType,
} from "@/types/global";
import { PostType } from "@/types/post";

export async function getPostBySlug(slug: string): Promise<PostType> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/slug/${slug}`
  );
  const { data }: ApiPostResponseType = await res.json();
  const { post } = data || {};
  console.log(data);
  return post;
}
export async function getPostList(): Promise<PostType[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/list`);
  const {
    data: { posts },
  }: ApiPostListResponseType = await res.json();
  return posts;
}

export async function getPostCategoryList(): Promise<CategoryType[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/list`);
  const {
    data: { categories },
  }: ApiCategoryListResponseType = await res.json();
  return categories;
}
