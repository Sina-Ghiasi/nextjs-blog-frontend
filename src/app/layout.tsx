import type { Metadata } from "next";
import "@/styles/globals.css";
import vazirFont from "@/constants/vazirFont";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: {
    template: "%s | برنامه بلاگ",
    default: "برنامه بلاگ",
  },
  description: "یک برنامه مدیریت بلاگ ساده ولی مدرن با نکست",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <Header />
        <div className="container xl:max-w-screen-xl">{children}</div>
      </body>
    </html>
  );
}
