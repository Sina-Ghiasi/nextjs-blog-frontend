"use server";

import { createCommentApi } from "@/services/commentService";
import getAuthCookies from "@/utils/getAuthCookies";
import { handleAxiosErrorMessage } from "@/utils/handleErrorMessage";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createComment(
  prevState: { message?: string; error?: string },
  formData: FormData,
  postId: string,
  parentId: string | null
) {
  const rawFormData = {
    postId,
    parentId,
    text: formData.get("text") as string,
  };

  try {
    const cookieStore = await cookies();
    const { message } = await createCommentApi(rawFormData, {
      headers: {
        Cookie: getAuthCookies(cookieStore),
      },
    });
    revalidatePath("/blogs/[slug]", "page");
    return {
      message,
    };
  } catch (error) {
    const errorMessage = handleAxiosErrorMessage(error);
    return {
      error: errorMessage,
    };
  }
}
