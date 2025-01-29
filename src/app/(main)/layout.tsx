import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: {
    template: "%s | برنامه بلاگ",
    default: "برنامه بلاگ",
  },
  description: "یک برنامه مدیریت بلاگ ساده ولی مدرن با نکست",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="container xl:max-w-screen-xl">{children}</div>
    </>
  );
}
