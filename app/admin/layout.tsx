"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cloutjetImg from "@/components/imgs/cloutjet.png";
import dashboardImg from "@/components/imgs/dashboard.png";
import merchantImg from "@/components/imgs/merchant.png";
import financesImg from "@/components/imgs/finances.png";
import supportImg from "@/components/imgs/support.png";
import settingsImg from "@/components/imgs/settings.png";
import markImg from "@/components/imgs/mark.png";
import filterImg from "@/components/imgs/filter.png";
import { Search, Bell, LogOut, Menu } from "lucide-react";
import { useState } from "react";

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const today = new Date();
  const dateString = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen w-full flex bg-[#EAE6E6]">
      {/* Hamburger for mobile */}
      <button
        className="fixed top-4 left-4 z-40 md:hidden bg-white border border-[#8A8A8A] rounded-lg p-2"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <Menu size={24} />
      </button>
      {/* Sidebar */}
      <aside
        className={`
          fixed z-30 left-0 top-0 h-screen w-64 bg-[#EAE6E6] border border-[#8A8A8A] flex flex-col items-start pt-6 pl-4 pr-2 pb-6
          transition-transform duration-200
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0 md:w-72 md:pt-8 md:pl-6 md:pb-8
          lg:w-72
        `}
        style={{ minHeight: "100vh" }}
      >
        {/* Close button for mobile */}
        <div className="w-full flex justify-end md:hidden mb-2">
          <button
            className="p-1 rounded hover:bg-gray-200"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <span className="text-2xl font-bold">&times;</span>
          </button>
        </div>
        {/* Cloutjet Logo */}
        <div className="mb-8 md:mb-10 flex justify-center md:justify-start w-full">
          <Image src={cloutjetImg} alt="Cloutjet" width={81} height={77} />
        </div>
        {/* Sidebar Links */}
        <nav className="flex flex-col w-full">
          <Link href="/admin-dashboard" className="w-full" onClick={() => setSidebarOpen(false)}>
            <div
              className={`flex items-center w-full h-[48px] rounded-lg mb-2 md:mb-3 pl-5 cursor-pointer transition
                ${pathname === "/admin-dashboard" ? "bg-[#F5A21B]" : "bg-[#EAE6E6]"}
              `}
            >
              <Image src={dashboardImg} alt="Dashboard" width={24} height={24} className="mr-4" />
              <span
                className={`font-semibold text-sm ${
                  pathname === "/admin-dashboard" ? "text-white" : "text-[#626262]"
                }`}
              >
                Dashboard
              </span>
            </div>
          </Link>
          <Link href="/admin-dashboard/merchant-management" className="w-full" onClick={() => setSidebarOpen(false)}>
            <div
              className={`flex items-center w-full h-[48px] rounded-lg mb-2 md:mb-3 pl-5 cursor-pointer transition
                ${pathname === "/admin-dashboard/merchant-management" ? "bg-[#F5A21B]" : "bg-[#EAE6E6]"}
              `}
            >
              <Image src={merchantImg} alt="Merchant Management" width={24} height={24} className="mr-4" />
              <span
                className={`font-semibold text-sm ${
                  pathname === "/admin-dashboard/merchant-management" ? "text-white" : "text-[#626262]"
                }`}
              >
                Merchant management
              </span>
            </div>
          </Link>
          <div className="flex items-center w-full h-[48px] bg-[#EAE6E6] rounded-lg mb-2 md:mb-3 pl-5">
            <Image src={financesImg} alt="Payments & Finances" width={24} height={24} className="mr-4" />
            <span className="text-[#626262] font-semibold text-sm">Payments & Finances</span>
          </div>
          <div className="flex items-center w-full h-[48px] bg-[#EAE6E6] rounded-lg mb-2 md:mb-3 pl-5">
            <Image src={supportImg} alt="Supports & Complaints" width={24} height={24} className="mr-4" />
            <span className="text-[#626262] font-semibold text-sm">Supports & Complaints</span>
          </div>
          <div className="flex items-center w-full h-[48px] bg-[#EAE6E6] rounded-lg mb-2 md:mb-3 pl-5">
            <Image src={settingsImg} alt="Settings" width={24} height={24} className="mr-4" />
            <span className="text-[#626262] font-semibold text-sm">Settings</span>
          </div>
        </nav>
      </aside>
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* Main content area */}
      <main className="flex-1 transition-all duration-200 bg-[#EAE6E6] min-h-screen overflow-x-auto">
        {/* Navbar-like section */}
        <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-col lg:flex-row items-center justify-between mb-8 md:mb-10 gap-4 px-3 md:px-8 pt-4 md:pt-10">
          {/* Left: Mark and Greeting */}
          <div className="flex items-center">
            <Image src={markImg} alt="Mark" width={48} height={48} className="rounded-xl mr-2" />
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-semibold text-[#131313]">Good Morning Mack!</span>
              <span className="text-xs text-[#00000099] mt-1">{dateString}</span>
            </div>
          </div>
          {/* Center: Search Input */}
          <div className="flex-1 flex justify-center w-full mt-3 md:mt-0">
            <div className="relative w-full max-w-[485px]">
              <span className="absolute left-4 top-1/2 -translate-y-1/2">
                <Search size={20} className="text-[#D9911A]" />
              </span>
              <input
                type="text"
                placeholder="Search by file, address, reference number"
                className="w-full h-[42px] md:h-[45px] pl-12 pr-12 rounded-xl border border-[#00000066] bg-white text-sm placeholder:text-center placeholder:text-[#888] focus:outline-none"
                style={{ borderWidth: "0.8px" }}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2">
                <Image src={filterImg} alt="Filter" width={20} height={20} />
              </span>
            </div>
          </div>
          {/* Right: Notification and Log Out */}
          <div className="flex items-center gap-2 md:gap-4 mt-3 md:mt-0">
            <div className="flex items-center justify-center border border-[#626262] rounded-lg w-8 h-9">
              <Bell size={20} className="text-[#976F30]" />
            </div>
            <button
              className="flex items-center justify-center gap-2 border border-[#626262] rounded-lg w-[70px] md:w-[85px] h-9 text-[#000000] font-semibold text-xs md:text-sm hover:bg-[#f4f4f4] transition"
              style={{ borderWidth: "1.6px" }}
            >
              <LogOut size={16} className="text-[#000000]" />
              <span className="hidden sm:inline">Log Out</span>
            </button>
          </div>
        </div>
        {/* Main content goes here */}
        <div className="w-full min-h-[calc(100vh-80px)] flex flex-col px-2 md:px-8 pb-8">
          <div className="w-full h-full bg-[#EAE6E6] rounded-xl shadow-none flex flex-col">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}