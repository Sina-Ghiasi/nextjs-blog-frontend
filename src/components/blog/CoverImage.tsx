import { PostType } from "@/types/post";
import Image from "next/image";
import Link from "next/link";

export default function CoverImage({ title, coverImageUrl, slug }: PostType) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="relative aspect-[16/9] rounded-lg mb-6">
        <Image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center brightness-90 hover:brightness-100"
          src={coverImageUrl}
          alt={title}
        />
      </div>
    </Link>
  );
}
