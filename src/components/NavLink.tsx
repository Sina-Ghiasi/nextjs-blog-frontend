"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  path: string;
  children: React.ReactNode;
  className?: string;
};

function NavLink({ path, children, className }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      className={`${className} block py-2 hover:text-secondary-900 transition-all ease-out
        ${pathname === path ? "text-primary-900" : ""}`}
      href={path}
    >
      {children}
    </Link>
  );
}

export default NavLink;
