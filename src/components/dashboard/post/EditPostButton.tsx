"use client";
import ButtonIcon from "@/components/ui/ButtonIcon";
import { PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function EditPostButton({ postId }: { postId: string }) {
  return (
    <Link href={`/profile/posts/${postId}`}>
      <ButtonIcon variant="outline">
        <PencilIcon />
      </ButtonIcon>
    </Link>
  );
}
