import { ApiPostListResponseType, ApiPostResponseType } from "@/types/global";
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
