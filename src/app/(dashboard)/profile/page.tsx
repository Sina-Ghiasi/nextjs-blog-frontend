import CardGrid from "@/components/dashboard/CardGrid";
import PostTable from "@/components/dashboard/post/PostTable";
import Fallback from "@/components/ui/Fallback";
import { Suspense } from "react";

export default function ProfilePage() {
  return (
    <>
      <h1 className="text-lg text-secondary-700 mb-6 ">داشبورد</h1>
      <Suspense fallback={<Fallback size="mini" />}>
        <CardGrid />
      </Suspense>

      <h2 className="text-lg text-secondary-700 mb-6 ">آخرین پست ها</h2>
      <Suspense fallback={<Fallback size="mini" />}>
        <PostTable query="sort=latest&limit=3" />
      </Suspense>
    </>
  );
}
