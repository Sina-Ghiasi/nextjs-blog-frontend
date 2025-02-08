import {
  ChatBubbleBottomCenterIcon,
  DocumentIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const iconMap = {
  users: UserGroupIcon,
  posts: DocumentIcon,
  comments: ChatBubbleBottomCenterIcon,
} as const;

type CardType = keyof typeof iconMap;

export function Card({
  title,
  count,
  type,
}: {
  title: string;
  count: number;
  type: CardType;
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-secondary-50 p-2 shadow-sm">
      <div className="flex p-4 text-secondary-600">
        {Icon ? <Icon className="h-5 w-5" /> : null}
        <h3 className="mr-2 text-sm font-medium">{title}</h3>
      </div>
      <p className="truncate rounded-xl bg-secondary-0 px-4 py-8 text-center text-2xl text-secondary-500">
        {count}
      </p>
    </div>
  );
}
