import CategoryList from "@/components/blog/CategoryList";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../loading";

export const metadata: Metadata = {
  title: "لیست بلاگ ها",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="text-lg font-bold mb-8">دسته بندی ها</h1>
      <div className="grid grid-cols-12 gap-4 mb-4">
        <div className="col-span-12 md:col-span-3 lg:col-span-2 text-secondary-500 space-y-4">
          <Suspense fallback={<Loading />}>
            <CategoryList />
          </Suspense>
        </div>
        <div className="col-span-12 md:col-span-9 lg:col-span-10">
          {children}
        </div>
      </div>
    </div>
  );
}
