import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10">
          <div>
            <h1 className="text-xl font-bold text-secondary-700 mb-8">
              پستی که دنبالش بودید، پیدا نشد
            </h1>
            <Link
              href="/blog/"
              className="flex items-center gap-x-2 text-secondary-500"
            >
              <ArrowRightIcon className="w-6 h-6 text-primary-900" />
              <span>برگشت به صفحه بلاگ</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
