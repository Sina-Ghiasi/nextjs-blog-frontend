import { PostType } from "@/types/post";
import Table from "../../ui/Table";
import truncateText from "@/utils/truncateText";
import { toLocaleDateAndTime } from "@/utils/dateFormatter";
import { toPersianDigits } from "@/utils/numberFormatter";
import EditPostButton from "./EditPostButton";
import DeletePostButton from "./DeletePostButton";

const postTypes = {
  free: {
    label: "رایگان",
    className: "badge--success",
  },
  premium: {
    label: "پولی",
    className: "badge--secondary",
  },
};
export default function PostRow({
  post,
  index,
}: {
  post: PostType;
  index: number;
}) {
  const { _id, title, category, author, createdAt, type } = post;
  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td title={title}>{truncateText(title, 20)}</td>
      <td>{category.title}</td>
      <td>{author.name}</td>
      <td>{toLocaleDateAndTime(createdAt, "fa-IR")}</td>
      <td>
        <span className={`badge ${postTypes[type].className}`}>
          {postTypes[type].label}
        </span>
      </td>
      <td>
        <div className="flex items-center gap-x-3">
          <EditPostButton postId={_id} />
          <DeletePostButton postId={_id} postTitle={title} />
        </div>
      </td>
    </Table.Row>
  );
}
