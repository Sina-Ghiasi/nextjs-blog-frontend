"use client";

import Header from "@/components/Header";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="h-screen">
      <Header />
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10">
          <div>
            <h1 className="text-xl font-bold text-red-500 mb-8">
              {error.message}
            </h1>
            <button
              onClick={reset}
              className="flex items-center gap-x-2 text-secondary-500"
            >
              تلاش مجدد
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
