import { Metadata } from "next";

type LayoutProps = {
  children: React.ReactNode;
};
export const metadata: Metadata = {
  title: "لیست بلاگ ها",
  description: "یک برنامه مدیریت بلاگ ساده ولی مدرن با نکست",
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <h1 className="text-lg font-bold mb-8">لیست بلاگ ها</h1>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 text-secondary-500 space-y-4">
          لیست دسته بندی ها
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
