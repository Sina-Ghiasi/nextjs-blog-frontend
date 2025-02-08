import Avatar from "../ui/Avatar";

export default function Author({
  name,
  avatarUrl,
}: {
  _id: string;
  name: string;
  avatar: string;
  avatarUrl: string;
}) {
  return (
    <div className="flex items-center gap-x-3">
      <Avatar src={avatarUrl} alt={name} />
      <span className="text-xs text-secondary-500">{name}</span>
    </div>
  );
}
