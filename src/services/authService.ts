import {
  ApiAuthResponseType,
  ApiUserListResponseType,
  ApiUserProfileResponseType,
} from "@/types/global";
import http from "./httpService";
import { AxiosRequestConfig } from "axios";

export async function signupApi(data: {
  name: string;
  email: string;
  password: string;
}) {
  return http
    .post<ApiAuthResponseType>("/user/signup", data)
    .then(({ data }) => data.data);
}

export async function signinApi(data: { email: string; password: string }) {
  return http
    .post<ApiAuthResponseType>("/user/signin", data)
    .then(({ data }) => data.data);
}

export async function getUserApi() {
  return http
    .get<ApiUserProfileResponseType>("/user/profile")
    .then(({ data }) => data.data);
}
export async function getUserListApi(config: AxiosRequestConfig) {
  return http
    .get<ApiUserListResponseType>("/user/list", config)
    .then(({ data }) => data.data);
}
