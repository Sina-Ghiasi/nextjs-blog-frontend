"use client";
import Link from "next/link";
import Avatar from "@/components/ui/Avatar";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import ButtonIcon from "../ui/ButtonIcon";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SideBar from "./SideBar";
import Drawer from "../ui/Drawer";

export default function Header() {
  const { user, isLoading } = useAuth();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <header
      className={`bg-secondary-0 ${isLoading ? "bg-opacity-30 blur-md" : ""}`}
    >
      <div className="flex items-center justify-between py-5 px-4 lg:px-8">
        <ButtonIcon
          className="block lg:hidden"
          variant="outline"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          {isDrawerOpen ? <XMarkIcon /> : <Bars3Icon />}
        </ButtonIcon>

        <span className="text-sm lg:text-lg font-bold text-secondary-700">
          سلام؛ {user?.name}
        </span>
        <Link href="/profile">
          <Avatar src={user?.avatarUrl} />
        </Link>
        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <SideBar onClose={() => setIsDrawerOpen(false)} />
        </Drawer>
      </div>
    </header>
  );
}
