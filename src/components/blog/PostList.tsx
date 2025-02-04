import { PostType } from "@/types/post";
import CoverImage from "./CoverImage";
import Link from "next/link";
import Author from "./Author";
import { ClockIcon } from "@heroicons/react/24/outline";
import PostInteractions from "./PostInteractions";
import truncateText from "@/utils/truncateText";

export default async function PostList({
  postList,
}: {
  postList: PostType[] | undefined;
}) {
  if (!postList) return null;

  return (
    <div className="grid grid-cols-12 gap-4">
      {postList.map((post) => (
        <div
          key={post._id}
          className="col-span-12 md:col-span-6 lg:col-span-4 border border-secondary-300 p-2 rounded-lg"
        >
          <CoverImage {...post} />
          {/* post body */}
          <div>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="mb-4 font-bold text-secondary-700">
                {truncateText(post.title, 28)}
              </h2>
            </Link>
            {/* post author - reading time */}
            <div className="flex items-center justify-between mb-4">
              <Author {...post.author} />
              <div className="flex items-center text-[12px] text-secondary-500">
                <ClockIcon className="w-4 h-4 stroke-secondary-500 ml-1" />
                <span className="ml-1"> خواندن :</span>
                <span className="ml-1 leading-3">{post.readingTime}</span>
                <span>دقیقه</span>
              </div>
            </div>
            <PostInteractions post={post} />
          </div>
        </div>
      ))}
    </div>
  );
}
