import { getPostBySlugApi } from "@/services/postService";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const data = await getPostBySlugApi(slug);
  const post = data?.post;

  return { title: `بلاگ ${post ? post.title : "پیدا نشد"}` };
}

export default async function SinglePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const data = await getPostBySlugApi(slug);
  const post = data?.post;

  if (!post) notFound();

  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">
        {post.title}
      </h1>
      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8">{post.text}</p>
      <div className="relative aspect-[16/9] mb-8">
        <Image
          src={post.coverImageUrl}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 100vw"
          className="object-cover object-center rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
