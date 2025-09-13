import { useContextValue } from "@/context";
import {
  Folder,
  LayoutDashboard,
  ListOrdered,
  LogOut,
  Settings,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface SellerNavbarType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function SellerNavbar({ isOpen, setIsOpen }: SellerNavbarType) {
  const router = useRouter();
  const pathname = usePathname();
  const {setUser, setRefferalObj,setSellerStats,setListedAccount, setListedAccounts,setPurchasedAccount, setSelectedAccount, setIsCartOpen,setNoOfPages, setCurrentPage } = useContextValue()

  const handleLogout = () => {
    sessionStorage.clear();
    setUser({
      id: "",
      fullName: "",
      phoneNumber: "",
      profileImage: "",
      email: "",
      userType: "",
    })
    setRefferalObj({
      referralCode: "",
      numberOfReferrals: 0,
      totalCoinEarnings: "",  
    })
    setSellerStats({
      engagementGrowth: "",
      purchasesCount: 0,
      recentActivities: [],
      recentTransactions: [],
      totalOrders: 0,
    })
    setListedAccounts([])
    setListedAccount({
      listingId: "",
      account: {
      accountAge: "",
      accountPassword: "",
      accountUsername: "",
      countryOfCreation: "",
      createdAt: "",
      description: "",
      engagementRate: 0,
      estimatedPrice: 0,
      followersCount: 0,
      isInEscrow: false,
      isSold: false,
      likesCount: 0,
      listingFee: 0,
      logo: "",
      niche: "",
      platform: "",
      preferredPrice: 0,
      profileLink: "",
      proofScreenshotUrl: "",
      recoveryPhoneNumber: "",
      status: "",
      twoFAEnabled: false,
      twoFAMethod: "",
      updatedAt: "",
      user: "",
      _id: "",
      seller: {
        fullName: ""
      }
    },
    paymentSummary: {
      accountPrice: "",
      serviceFee: "",
      totalCost: "",
    } 
    })
    setPurchasedAccount([])
    setSelectedAccount([])
    setIsCartOpen(false)
    setNoOfPages(0)
    setCurrentPage(0)
    router.push("/login");
  };

  const handleClick = () => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <section
      className={`${
        isOpen
          ? "flex flex-col justify-between gap-8"
          : "hidden lg:flex flex-col justify-between"
      } absolute top-0 left-0 z-20 lg:static bg-white py-10 px-2 w-[210px]`}
    >
      <ul className="flex flex-col gap-3 rounded-lg">
        <Link 
          onClick={handleClick}
          href="/seller/dashboard">
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
        <Link
          onClick={handleClick} 
          href="/seller/buy-sell-account/buy">
          <li
            className={`cursor-pointer pl-4 py-2 flex flex-row items-center gap-4 rounded-lg hover:bg-[#f8a11e] hover:text-white ${
              pathname.includes("/seller/buy-sell-account")
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
        <Link
          onClick={handleClick} 
          href="/grow-media">
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
        <Link onClick={handleClick} href="/buyer/dashboard">
          <li
            className={`cursor-pointer pl-4 py-2 flex flex-row items-center gap-4 rounded-lg hover:bg-[#f8a11e] hover:text-white ${
              pathname === "/buyer/dashboard"
                ? "bg-[#f8a11e] text-white"
                : "text-black"
            }`}
          >
            <Folder />
            <span className="font-semibold">My Accounts</span>
          </li>
        </Link>
        <li onClick={handleClick} className="cursor-pointer pl-4 py-2 flex flex-row items-center gap-4 rounded-lg hover:bg-[#f8a11e] hover:text-white">
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
        <Link onClick={handleClick} href="/wallet">
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
      <button
        onClick={handleLogout}
        className="cursor-pointer rounded-lg p-2 flex flex-row items-center gap-4 hover:bg-[#f8a11e] hover:text-white"
      >
        <LogOut />
        <span>Log Out</span>
      </button>
    </section>
  );
}
