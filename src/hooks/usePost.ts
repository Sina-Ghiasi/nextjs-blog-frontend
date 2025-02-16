import {
  createPostApi,
  deletePostApi,
  updatePostApi,
} from "@/services/postService";
import { handleAxiosErrorMessage } from "@/utils/handleErrorMessage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useCreatePost() {
  const queryClient = useQueryClient();
  const { isPending: isCreatingPost, mutate: createPost } = useMutation({
    mutationFn: createPostApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      const errorMessage = handleAxiosErrorMessage(error);
      toast.error(errorMessage);
    },
  });
  return { isCreatingPost, createPost };
}

export function useUpdatePost() {
  const queryClient = useQueryClient();
  const { isPending: isUpdatingPost, mutate: updatePost } = useMutation({
    mutationFn: updatePostApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      const errorMessage = handleAxiosErrorMessage(error);
      toast.error(errorMessage);
    },
  });
  return { isUpdatingPost, updatePost };
}

export function useDeletePost() {
  const queryClient = useQueryClient();
  const { isPending: isDeletingPost, mutate: deletePost } = useMutation({
    mutationFn: deletePostApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      const errorMessage = handleAxiosErrorMessage(error);
      toast.error(errorMessage);
    },
  });
  return { isDeletingPost, deletePost };
}
