import { PostType } from "@/types/post";
import Author from "./Author";
import CoverImage from "./CoverImage";
import truncateText from "@/utils/truncateText";

export default function RelatedPosts({ postList }: { postList: PostType[] }) {
  return (
    <div className=" mb-10">
      <h3 className="text-xl mb-4">پست های مرتبط</h3>
      <div className="grid gap-4 grid-cols-12">
        {postList.map((post) => {
          return (
            <div
              key={post._id}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <CoverImage {...post} />
              <div className="flex items-center justify-between">
                <h4 className="text-xs">{truncateText(post.title, 18)}</h4>
                <Author {...post.author} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
