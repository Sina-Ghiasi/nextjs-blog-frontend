import { getUserListApi } from "@/services/authService";
import { getCommentListApi } from "@/services/commentService";
import { getPostListApi } from "@/services/postService";
import getAuthCookies from "@/utils/getAuthCookies";
import { handleAxiosErrorMessage } from "@/utils/handleErrorMessage";
import { cookies } from "next/headers";

export async function fetchDashboardStats() {
  const cookieStore = await cookies();
  const authCookies = getAuthCookies(cookieStore);
  const config = {
    headers: {
      Cookie: authCookies,
    },
  };
  try {
    const data = await Promise.all([
      getUserListApi(config),
      getPostListApi(config),
      getCommentListApi(config),
    ]);

    return {
      users: data[0].users.length ?? 0,
      posts: data[1].posts.length ?? 0,
      comments: data[2].commentsCount ?? 0,
    };
  } catch (error) {
    const errorMessage = handleAxiosErrorMessage(error);
    throw new Error(errorMessage);
  }
}
