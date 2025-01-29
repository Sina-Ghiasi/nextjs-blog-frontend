import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | برنامه بلاگ",
    default: "برنامه بلاگ",
  },
  description: "یک برنامه مدیریت بلاگ ساده ولی مدرن با نکست",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex ic justify-center mt-20">
      <div className="w-full max-w-md p-2">{children}</div>
    </div>
  );
}
