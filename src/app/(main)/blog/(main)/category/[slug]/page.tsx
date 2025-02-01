import PostList from "@/components/blog/PostList";
import { getPostListApi } from "@/services/postService";
import { toPersianDigits } from "@/utils/numberFormatter";
import { cookies } from "next/headers";
import queryString from "query-string";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ search: string }>;
}) {
  const categorySlug = (await params).slug;
  const resolvedSearchParams = await searchParams;
  const searchQuery = queryString.stringify(resolvedSearchParams);
  const queries = `categorySlug=${categorySlug}&${searchQuery}`;
  const cookieStore = await cookies();

  const data = await getPostListApi(queries, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

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
