import Table from "@/components/ui/Table";
import { getPostListApi } from "@/services/postService";
import PostRow from "./PostRow";
import Empty from "@/components/ui/Empty";
import Pagination from "@/components/ui/Pagination";

export default async function PostTable({
  query = "",
  pagination = false,
}: {
  query?: string;
  pagination?: boolean;
}) {
  const { posts: postList, totalPages } = await getPostListApi({}, query);

  if (!postList.length) return <Empty resourceName="پستی" />;

  return (
    <>
      <Table>
        <Table.Head>
          <th>#</th>
          <th>عنوان</th>
          <th>دسته بندی</th>
          <th>نویسنده</th>
          <th>تاریخ ایجاد</th>
          <th>نوع</th>
          <th>عملیات</th>
        </Table.Head>
        <Table.Body>
          {postList.map((post, index) => (
            <PostRow key={post._id} post={post} index={index} />
          ))}
        </Table.Body>
      </Table>
      {pagination && (
        <div className="flex justify-center w-full mt-5">
          <Pagination totalPages={totalPages} />
        </div>
      )}
    </>
  );
}
