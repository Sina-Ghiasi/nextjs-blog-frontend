import {
  ApiPostBookmarkResponseType,
  ApiPostLikeResponseType,
  ApiPostListResponseType,
  ApiPostResponseType,
} from "@/types/global";
import http from "./httpService";

export async function getPostListApi(queries = "", options = {}) {
  return http
    .get<ApiPostListResponseType>(`/post/list?${queries}`, options)
    .then(({ data }) => data.data)
    .catch(() => null);
}

export async function getPostBySlugApi(slug: string) {
  return http
    .get<ApiPostResponseType>(`/post/slug/${slug}`)
    .then(({ data }) => data.data)
    .catch(() => null);
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
