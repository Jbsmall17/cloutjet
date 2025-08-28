import { LayoutDashboard, ListOrdered, Settings, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname} from "next/navigation";
import React from "react";

interface SellerNavbarType {
  isOpen: boolean;
}

export default function SellerNavbar({ isOpen }: SellerNavbarType) {
  const pathname = usePathname();

  // const handleLogout = () => {
  //   sessionStorage.clear();
  //   router.push("/login");
  // };

  return (
    <section
      className={`${
        isOpen ? "block" : "hidden lg:block"
      } absolute top-0 left-0 z-index lg:static bg-white py-10 px-2 w-[210px]`}
    >
      <ul className="flex flex-col gap-3 rounded-lg">
        <Link href="/seller/dashboard">
          <li
            className={`cursor-pointer pl-4 py-2 flex flex-row items-center gap-4 rounded-lg hover:bg-[#f8a11e] hover:text-white ${
              pathname === "/seller/dashboard"
                ? "bg-[#f8a11e] text-white"
                : "text-black"
            }`}
          >
            <LayoutDashboard className="size-6" />
            <span className="font-semibold">Dashboard</span>
          </li>
        </Link>
        <Link href="/seller/buy-sell-account">
          <li
            className={`cursor-pointer pl-4 py-2 flex flex-row items-center gap-4 rounded-lg hover:bg-[#f8a11e] hover:text-white ${
              pathname === "/seller/buy-sell-account"
                ? "bg-[#f8a11e] text-white"
                : "text-black"
            }`}
          >
            <Image
              className="size-6"
              src="/buy-sell.svg"
              alt="buy/sell icon"
              width={40}
              height={40}
            />
            <span className="font-semibold">Buy/sell accounts</span>
          </li>
        </Link>
        <Link href="/grow-media">
          <li
            className={`cursor-pointer pl-4 py-2 flex flex-row items-center gap-4 rounded-lg hover:bg-[#f8a11e] hover:text-white ${
              pathname === "/grow-media"
                ? "bg-[#f8a11e] text-white"
                : "text-black"
            }`}
          >
            <Image
              className="size-6"
              src="/grow.svg"
              alt="messages icon"
              width={40}
              height={40}
            />
            <span className="font-semibold">Grow my account</span>
          </li>
        </Link>
        <li className="cursor-pointer pl-4 py-2 flex flex-row items-center gap-4 rounded-lg hover:bg-[#f8a11e] hover:text-white">
          <ListOrdered className="size-6" />
          <span className="font-semibold">My orders</span>
        </li>
        <li className="cursor-pointer pl-4 py-2 flex flex-row items-center gap-4 rounded-lg hover:bg-[#f8a11e] hover:text-white">
          <Image
            className="size-6"
            src="/messages.svg"
            alt="messages icon"
            width={40}
            height={40}
          />
          <span className="font-semibold">Messages</span>
        </li>
        <Link href="/wallet">
          <li className="cursor-pointer pl-4 py-2 flex flex-row items-center gap-4 rounded-lg hover:bg-[#f8a11e] hover:text-white">
            <Wallet className="size-6" />
            <span className="font-semibold">Wallet</span>
          </li>
        </Link>
        <li className="cursor-pointer pl-4 py-2 flex flex-row items-center gap-4 rounded-lg hover:bg-[#f8a11e] hover:text-white">
          <Settings className="size-6" />
          <span className="font-semibold">Settings</span>
        </li>
        <li className="cursor-pointer pl-4 py-2 flex flex-row items-center gap-4 rounded-lg hover:bg-[#f8a11e] hover:text-white">
          <Image
            className="size-6"
            src="/customer-care.svg"
            alt="messages icon"
            width={40}
            height={40}
          />
          <span className="font-semibold">Help/Support</span>
        </li>
      </ul>
    </section>
  );
}
