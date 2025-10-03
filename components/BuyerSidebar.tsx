import {
  LogOut,
  ArrowUpDown,
  LayoutDashboard,
  Bell,
  Settings,
  Store,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useContextValue } from "@/context";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";

interface BuyerSidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function BuyerSidebar({ isOpen, setIsOpen }: BuyerSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const {
    setUser,
    setRefferalObj,
    setSellerStats,
    setListedAccount,
    setListedAccounts,
    setPurchasedAccount,
    setSelectedAccount,
    setIsCartOpen,
    setNoOfPages,
    setCurrentPage,
  } = useContextValue();

  const handleLogout = () => {
    router.push("/login");
    sessionStorage.clear();
    setUser({
      id: "",
      fullName: "",
      phoneNumber: "",
      profileImage: "",
      email: "",
      userType: "",
    });
    setRefferalObj({
      referralCode: "",
      numberOfReferrals: 0,
      totalCoinEarnings: "",
    });
    setSellerStats({
      engagementGrowth: "",
      purchasesCount: 0,
      recentActivities: [],
      recentTransactions: [],
      totalOrders: 0,
    });
    setListedAccounts([]);
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
          fullName: "",
        },
      },
      paymentSummary: {
        accountPrice: "",
        serviceFee: "",
        totalCost: "",
      },
    });
    setPurchasedAccount([]);
    setSelectedAccount([]);
    setIsCartOpen(false);
    setNoOfPages(0);
    setCurrentPage(0);
  };

  const handleClick = () => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`${
        !isOpen ? "hidden lg:flex" : "flex"
      } h-full absolute left-0 top-0 z-20 lg:relative pt-6 pb-12 px-6 bg-white flex flex-col justify-between`}
    >
      <ul className="flex flex-col gap-4">
        <Link onClick={handleClick} href="/buyer/dashboard">
          <li
            className={`p-2 flex flex-row items-center gap-3 rounded-md hover:text-white hover:bg-[#f6a21b] ${
              pathname === "/buyer/dashboard"
                ? "bg-[#f6a21b] text-white"
                : "text-black"
            }`}
          >
            <LayoutDashboard />
            <p>Dashboard</p>
          </li>
        </Link>
        <Link onClick={handleClick} href="/buyer/refferal">
          <li
            className={`p-2 flex flex-row items-center gap-3 rounded-md hover:text-white hover:bg-[#f6a21b] ${
              pathname === "/buyer/refferal"
                ? "bg-[#f6a21b] text-white"
                : "text-black"
            }`}
          >
            <ArrowUpDown />
            <p>Referrals</p>
          </li>
        </Link>
        <Link onClick={handleClick} href="/buyer/notifications">
          <li
            className={`p-2 flex flex-row items-center gap-3 rounded-md hover:text-white hover:bg-[#f6a21b] ${
              pathname === "/buyer/notifications"
                ? "bg-[#f6a21b] text-white"
                : "text-black"
            }`}
          >
            <Bell />
            <p>Notifications</p>
          </li>
        </Link>
        <Link onClick={handleClick} href="/seller/dashboard">
          <li
            className={`p-2 flex flex-row items-center gap-3 rounded-md hover:text-white hover:bg-[#f6a21b] ${
              pathname === "/seller/dashboard"
                ? "bg-[#f6a21b] text-white"
                : "text-black"
            }`}
          >
            <Store />
            <p>Sell / Buy Accounts</p>
          </li>
        </Link>
        <Link onClick={handleClick} href="/buyer/account-settings">
          <li
            className={`p-2 flex flex-row items-center gap-3 rounded-md hover:text-white hover:bg-[#f6a21b] ${
              pathname === "/buyer/account-settings"
                ? "bg-[#f6a21b] text-white"
                : "text-black"
            }`}
          >
            <Settings />
            <p>Account Settings</p>
          </li>
        </Link>
      </ul>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button
            // onClick={handleLogout}
            className="p-2 flex flex-row items-center gap-4 hover:text-white hover:bg-[#f6a21b] rounded-md"
          >
            <LogOut />
            <span>Log Out</span>
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you absolutely sure you want to logout?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will log you out of your
              account
            </AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="bg-[#f8a11e]"
                onClick={handleLogout}
              >
                Log out
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </nav>
  );
}
