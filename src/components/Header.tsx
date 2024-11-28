import React from "react";
import { HomeIcon, File, UserRound } from "lucide-react";
import NavButton from "./NavButton";
import Link from "next/link";
import { ModeToggle, Toggle } from "./ModeToggle";
import LoginPage from "@/app/login/page";
import LogoutPage from "@/app/logout/page";
export default function Header() {
  return (
    <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
      <div className="flex h-8 items-center justify-between w-full">
        {" "}
        <div className="flex items-center gap-2">
          <NavButton href="/home" label="home" icon={HomeIcon} />
          <Link
            className="flex justify-center items-center gap-2 ml-0"
            title="home"
            href="/home"
          >
            <h1 className="hidden sm:block text-xl font-bold mt-1 m-0">
              Computer Repair Shop
            </h1>
          </Link>
        </div>
        <div className="flex items-center">
          <NavButton href="/tickets" label="Tickets" icon={File} />
          <NavButton href="/customers" label="Customers" icon={UserRound} />
          <ModeToggle />
          <LoginPage />
          <LogoutPage />
        </div>
      </div>
    </header>
  );
}
