import NewPostButton from "@/components/dashboard/post/NewPostButton";
import PostTable from "@/components/dashboard/post/PostTable";
import Fallback from "@/components/ui/Fallback";
import Search from "@/components/ui/Search";
import queryString from "query-string";
import { Suspense } from "react";

export default async function PostsPage({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const query = queryString.stringify(resolvedSearchParams);
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center mb-6">
        <h1 className="text-xl text-secondary-700">پست ها</h1>
        <Search />
        <NewPostButton />
      </div>
      <Suspense fallback={<Fallback />} key={query}>
        <PostTable query={query} pagination={true} />
      </Suspense>
    </>
  );
}
