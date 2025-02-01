import {
  ApiAuthResponseType,
  ApiUserProfileResponseType,
} from "@/types/global";
import http from "./httpService";

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
