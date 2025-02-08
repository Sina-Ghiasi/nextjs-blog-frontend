import PostList from "@/components/blog/PostList";
import { cookies } from "next/headers";
import { getPostListApi } from "@/services/postService";
import queryString from "query-string";
import { toPersianDigits } from "@/utils/numberFormatter";
import getAuthCookies from "@/utils/getAuthCookies";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const searchQuery = queryString.stringify(resolvedSearchParams);
  const cookieStore = await cookies();

  const data = await getPostListApi(
    {
      headers: {
        Cookie: getAuthCookies(cookieStore),
      },
    },
    searchQuery
  );
  const postList = data?.posts;
  const { search } = resolvedSearchParams;

  return (
    <>
      {search ? (
        <p className="mb-4 text-secondary-700">
          {!postList?.length
            ? "هیج پستی با این مشخصات یافت نشد ."
            : `نشان دادن ${toPersianDigits(postList?.length)} نتیجه برای`}
          &nbsp;
          <span className="font-bold">&quot;{search}&quot;</span>
        </p>
      ) : null}
      <PostList postList={postList} />
    </>
  );
}
