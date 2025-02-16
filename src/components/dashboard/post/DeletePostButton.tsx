"use client";
import ButtonIcon from "@/components/ui/ButtonIcon";
import ConfirmDelete from "@/components/ui/ConfirmDelete";
import Modal from "@/components/ui/Modal";
import { useDeletePost } from "@/hooks/usePost";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeletePostButton({
  postId,
  postTitle,
}: {
  postId: string;
  postTitle: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { isDeletingPost, deletePost } = useDeletePost();
  const router = useRouter();
  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setIsOpen(true)}>
        <TrashIcon className="text-error" />
      </ButtonIcon>
      <Modal
        title={`حذف پست ${postTitle}`}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <ConfirmDelete
          resourceName={postTitle}
          onClose={() => setIsOpen(false)}
          disabled={isDeletingPost}
          onConfirm={(e) => {
            e.preventDefault();
            deletePost(postId, {
              onSuccess: () => {
                setIsOpen(false);
                router.refresh();
              },
            });
          }}
        />
      </Modal>
    </>
  );
}
