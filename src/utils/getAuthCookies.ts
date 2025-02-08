import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export default function getAuthCookies(
  cookies: ReadonlyRequestCookies
): string {
  return (
    [
      cookies.get("accessToken") &&
        `accessToken=${cookies.get("accessToken")?.value}`,
      cookies.get("refreshToken") &&
        `refreshToken=${cookies.get("refreshToken")?.value}`,
    ]
      .filter(Boolean)
      .join("; ") || "-"
  );
}
