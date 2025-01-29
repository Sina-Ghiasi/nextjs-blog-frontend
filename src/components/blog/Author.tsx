import { PostAuthorType } from "@/types/post";
import Avatar from "../ui/Avatar";

export default function Author({ name, avatarUrl }: PostAuthorType) {
  return (
    <div className="flex items-center gap-x-1">
      <Avatar src={avatarUrl} alt={name} />
      <span className="text-sm text-secondary-500">{name}</span>
    </div>
  );
}
