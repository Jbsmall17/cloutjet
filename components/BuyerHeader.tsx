import { useContextValue } from "@/context";
import { Bell, Menu, Search, Settings, User, X } from "lucide-react";
import Link from "next/link";
import React from "react";

interface BuyerHeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function BuyerHeader({ isOpen, setIsOpen }: BuyerHeaderProps) {
  const { user } = useContextValue();
  return (
    <header className="px-4 md:px-6 lg:px-8 py-2 flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-3 lg:gap-10">
        {!isOpen ? (
          <Menu
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="size-6 lg:hidden"
          />
        ) : (
          <X
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="size-6 lg:hidden"
          />
        )}
        <Link href="/marketplace">
        <img
          src="/cloutjet-removebg.png"
          alt="cloutjet logo"
          width={40}
          height={40}
        />
        </Link>
        <div className="relative hidden md:inline w-[275px] lg:w-[400px]">
          <Search className="absolute top-[50%] left-4 -translate-y-[50%]" />
          <input
            type="text"
            placeholder="Search here.."
            className="bg-white rounded-xl h-full w-full pl-14 pr-3 py-2"
          />
        </div>
      </div>
      <div className="flex flx-row items-center gap-4 md:gap-6 lg:gap-10">
        <div className="hidden md:flex flex-row items-center gap-2 lg:gap-3">
          <Link
            href="/buyer/account-settings"
            className="bg-[#d0caca] w-8 h-8 flex justify-center items-center rounded-full"
          >
            <Settings className="size-4" />
          </Link>
          <Link
            href="/buyer/notifications"
            className="bg-[#d0caca] w-8 h-8 flex justify-center items-center rounded-full"
          >
            <Bell className="size-4" />
          </Link>
        </div>
        <div className="flex flex-row items-center gap-3 p-2 bg-[#17233b] rounded-lg text-white">
          {user.profileImage !== "" ? (
            <img
              src={user.profileImage}
              alt="Profile Picture"
              className="size-8 rounded-full object-cover"
            />
          ) : (
            <User className="size-8" />
          )}
          <div className="text-xs hidden md:block">
            <p>{user.fullName}</p>
            <p>adetunjiidan@gmail.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}
