import {
  ApiAddCommentResponse,
  ApiCommentListResponseType,
} from "@/types/global";
import http from "./httpService";
import { AxiosRequestConfig } from "axios";

export async function createCommentApi(
  data: {
    postId: string;
    parentId: string | null;
    text: string;
  },
  config: AxiosRequestConfig
) {
  return http
    .post<ApiAddCommentResponse>("/comment/add", data, config)
    .then(({ data }) => data.data);
}

export async function getCommentListApi(config: AxiosRequestConfig) {
  return http
    .get<ApiCommentListResponseType>("/comment/list", config)
    .then(({ data }) => data.data);
}
