"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NewPostButton() {
  return (
    <Link
      href="/profile/posts/new"
      className="flex justify-self-end w-full sm:w-auto gap-x-4 py-3 items-center justify-center rounded-lg bg-primary-900 px-4 text-sm font-medium text-secondary-0 
  transition-colors hover:bg-primary-700"
    >
      <span>ایجاد پست</span>
      <PlusIcon className="w-5" />
    </Link>
  );
}
