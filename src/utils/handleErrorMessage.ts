import { AxiosError } from "axios";

export const handleAxiosErrorMessage = (
  error: unknown,
  defaultMessage = "مشکلی پیش آمده است. لطفاً لحظاتی بعد دوباره تلاش کنید."
): string => {
  if (error instanceof AxiosError) {
    return error.response?.data?.message || defaultMessage;
  }
  return defaultMessage;
};
