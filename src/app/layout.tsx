import "@/styles/globals.css";
import vazirFont from "@/constants/vazirFont";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/contexts/AuthContext";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`min-h-screen ${vazirFont.variable} font-sans`}>
        <Toaster />
        <ReactQueryProvider>
          <AuthProvider>{children}</AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
