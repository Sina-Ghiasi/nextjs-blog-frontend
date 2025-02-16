import MiniSpinner from "./MiniSpinner";
import Spinner from "./Spinner";

export default function Fallback({
  size = "normal",
}: {
  size?: "mini" | "normal";
}) {
  if (size === "mini") {
    return (
      <div className="flex flex-col items-center gap-y-4">
        <MiniSpinner />
        <span className="text-sm text-secondary-500">در حال بارگذاری</span>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center gap-y-4">
      <Spinner />
      <span className="text-lg text-secondary-500">در حال بارگذاری</span>
    </div>
  );
}
