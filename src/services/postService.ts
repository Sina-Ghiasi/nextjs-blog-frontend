import {
  ApiCreatePostResponseType,
  ApiDeletePostResponseType,
  ApiPostBookmarkResponseType,
  ApiPostLikeResponseType,
  ApiPostListResponseType,
  ApiPostResponseType,
  ApiUpdatePostResponseType,
} from "@/types/global";
import http from "./httpService";
import { AxiosRequestConfig } from "axios";

export async function getPostListApi(
  config: AxiosRequestConfig = {},
  queries: string = ""
) {
  return http
    .get<ApiPostListResponseType>(`/post/list?${queries}`, config)
    .then(({ data }) => data.data);
}

export async function getPostBySlugApi(slug: string) {
  return http
    .get<ApiPostResponseType>(`/post/slug/${slug}`)
    .then(({ data }) => data.data);
}

export async function getPostById(id: string) {
  return http
    .get<ApiPostResponseType>(`/post/${id}`)
    .then(({ data }) => data.data);
}

export async function likePostApi(postId: string) {
  return http
    .post<ApiPostLikeResponseType>(`/post/like/${postId}`)
    .then(({ data }) => data.data);
}

export async function bookmarkPostApi(postId: string) {
  return http
    .post<ApiPostBookmarkResponseType>(`/post/bookmark/${postId}`)
    .then(({ data }) => data.data);
}

export async function createPostApi(data: FormData) {
  return http
    .post<ApiCreatePostResponseType>("/post/create", data)
    .then(({ data }) => data.data);
}

export async function updatePostApi({
  id,
  data,
}: {
  id: string;
  data: FormData;
}) {
  return http
    .patch<ApiUpdatePostResponseType>(`/post/update/${id}`, data)
    .then(({ data }) => data.data);
}

export async function deletePostApi(id: string) {
  return http
    .delete<ApiDeletePostResponseType>(`/post/remove/${id}`)
    .then(({ data }) => data.data);
}
