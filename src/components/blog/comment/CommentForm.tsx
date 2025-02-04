"use client";

import SubmitButton from "@/components/ui/SubmitButton";
import TextArea from "@/components/ui/TextArea";
import { createComment } from "@/lib/actions";
import { ActionStateType } from "@/types/action";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";

const initialState: ActionStateType = {
  message: "",
};
export default function CommentForm({
  postId,
  parentId,
  onClose,
}: {
  postId: string;
  parentId: string | null;
  onClose: () => void;
}) {
  const [text, setText] = useState("");
  const boundCreateComment = (prevState: ActionStateType, formData: FormData) =>
    createComment(prevState, formData, postId, parentId);
  const [state, formAction] = useActionState(boundCreateComment, initialState);

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      onClose();
    }
    if (state?.error) toast.error(state.error);
  }, [state, onClose]);

  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form className="space-y-7" action={formAction}>
            <TextArea
              name="text"
              label="متن نظر"
              value={text}
              isRequired
              onChange={(e) => setText(e.target.value)}
            />

            <SubmitButton type="submit" className="w-full mt-8">
              {parentId ? "ثبت پاسخ" : "ثبت نظر"}
            </SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
}
