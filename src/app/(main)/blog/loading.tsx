import Spinner from "@/components/ui/Spinner";

export default function Loading() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <Spinner />
      <span className="text-lg text-secondary-500">در حال بارگذاری</span>
    </div>
  );
}
