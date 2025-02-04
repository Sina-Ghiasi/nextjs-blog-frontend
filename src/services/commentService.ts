import { ApiAddCommentResponse } from "@/types/global";
import http from "./httpService";

export async function createCommentApi(
  data: {
    postId: string;
    parentId: string | null;
    text: string;
  },
  options = {}
) {
  return http
    .post<ApiAddCommentResponse>("/comment/add", data, options)
    .then(({ data }) => data.data);
}
