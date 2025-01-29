import PostList from "@/components/blog/PostList";
import { Suspense } from "react";
import Loading from "../loading";

export default function BlogPage() {
  return (
    <>
      <p className="mb-5">
        لیست بلاگ های منتشرشده را در این بخش مشاهده کنید. برای جزئیات بیشتر روی
        هر بلاگ کلیک کنید.
      </p>
      <Suspense fallback={<Loading />}>
        <PostList />
      </Suspense>
    </>
  );
}
