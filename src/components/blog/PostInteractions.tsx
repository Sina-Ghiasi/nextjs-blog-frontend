"use client";

import { PostType } from "@/types/post";
import ButtonIcon from "../ui/ButtonIcon";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import {
  BookmarkIcon as SolidBookmarkIcon,
  HeartIcon as SolidHeartIcon,
} from "@heroicons/react/24/solid";
import { toPersianDigits } from "@/utils/numberFormatter";
import { bookmarkPostApi, likePostApi } from "@/services/postService";
import toast from "react-hot-toast";
import { handleAxiosErrorMessage } from "@/utils/handleErrorMessage";
import { useRouter } from "next/navigation";

export default function PostInteractions({ post }: { post: PostType }) {
  const router = useRouter();
  const likeHandler = async (postId: string) => {
    try {
      const { message } = await likePostApi(postId);
      router.refresh();
      toast.success(message);
    } catch (error) {
      const errorMessage = handleAxiosErrorMessage(error);
      toast.error(errorMessage);
    }
  };
  const bookmarkHandler = async (postId: string) => {
    try {
      const { message } = await bookmarkPostApi(postId);

      router.refresh();
      toast.success(message);
    } catch (error) {
      const errorMessage = handleAxiosErrorMessage(error);
      toast.error(errorMessage);
    }
  };
  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant="secondary">
        <ChatBubbleOvalLeftEllipsisIcon />
        {toPersianDigits(post.commentsCount)}
      </ButtonIcon>
      <ButtonIcon variant="red" onClick={() => likeHandler(post._id)}>
        {post.isLiked ? <SolidHeartIcon /> : <HeartIcon />}
        <span>{toPersianDigits(post.likesCount)}</span>
      </ButtonIcon>
      <ButtonIcon variant="primary" onClick={() => bookmarkHandler(post._id)}>
        {post.isBookmarked ? <SolidBookmarkIcon /> : <BookmarkIcon />}
      </ButtonIcon>
    </div>
  );
}
