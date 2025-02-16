import { ApiCategoryListResponseType } from "@/types/global";
import http from "./httpService";

export async function getCategoryListApi() {
  return http
    .get<ApiCategoryListResponseType>(`/category/list`)
    .then(({ data }) => data.data);
}
