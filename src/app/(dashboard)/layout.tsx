import Header from "@/components/dashboard/Header";
import SideBar from "@/components/dashboard/SideBar";

export const metadata = {
  title: "پروفایل",
  description: "پروفایل",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-secondary-0">
      <div className="grid grid-cols-12">
        <aside className="col-span-12 lg:col-span-3 xl:col-span-2 hidden lg:block h-screen">
          <SideBar />
        </aside>
        <div className="col-span-12 lg:col-span-9 xl:col-span-10 flex flex-col h-screen">
          <Header />
          <main className="flex justify-center flex-1 bg-secondary-100 rounded-tr-3xl p-4 md:px-6 md:py-3 lg:px-10 lg:py-5 overflow-y-auto">
            <div className="w-full xl:max-w-screen-xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
