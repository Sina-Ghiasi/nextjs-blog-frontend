import PostForm from "@/components/dashboard/post/PostForm";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getPostById } from "@/services/postService";
import { notFound } from "next/navigation";

export default async function page({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  const { post } = await getPostById(postId);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "پست ها",
            href: "/profile/posts",
          },
          {
            label: "ویرایش پست",
            href: `/profile/posts/${postId}`,
            active: true,
          },
        ]}
      />

      <PostForm existingPost={post} />
    </>
  );
}
