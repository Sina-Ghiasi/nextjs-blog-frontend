"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(searchParams.get("search") || "");
  }, [searchParams]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newParams = new URLSearchParams(searchParams.toString());

    if (search.trim()) {
      newParams.set("search", search.trim());
    } else {
      newParams.delete("search");
    }

    router.replace(`${pathname}?${newParams.toString()}`, { scroll: false });
  }

  return (
    <form className="relative" onSubmit={onSubmit}>
      <input
        type="text"
        name="search"
        placeholder="جستجو ..."
        autoComplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="textField__input py-3 text-xs bg-secondary-0"
      />
      <button
        type="submit"
        className="absolute left-0 top-0 ml-3 flex h-full items-center"
      >
        <MagnifyingGlassIcon className="h-4 text-secondary-400" />
      </button>
    </form>
  );
}
