import CategoryList from "@/components/blog/CategoryList";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../loading";
import Search from "@/components/ui/Search";

export const metadata: Metadata = {
  title: "لیست پست ها",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 text-secondary-700 mb-10">
        <h1 className="text-lg font-bold ">دسته بندی ها</h1>
        <Search />
      </div>

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
