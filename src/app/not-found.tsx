"use client";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const NotFound: React.FC = () => {
  const router = useRouter();
  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10">
          <div>
            <h1 className="text-xl font-bold text-secondary-700 mb-8">
              صفحه ای که دنبالش بودید، پیدا نشد
            </h1>

            <button
              className="flex items-center gap-x-2 text-secondary-500"
              onClick={() => router.back()}
            >
              <ArrowRightIcon className="w-6 h-6 text-primary-900" />
              <span> برگشت به صفحه قبلی</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
