"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (path: string) => {
    return `${
      path === pathname ? "border-b-2 border-b-[#f7a21b] rounded-none" : ""
    }`;
  };
  return (
    <header className="navbar max-w-screen-2xl mx-auto px-[5%] 2xl:px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow bg-white dark:bg-white space-y-1 text-base"
          >
            <li>
              <Link href="/" className="text-base">
                Home
              </Link>
            </li>
            <li>
              <Link href="/signup" className="text-base">
                Become a Merchant
              </Link>
            </li>
            {/* <li><a>Services</a></li> */}
            <li
              // onClick={() => setOpen(true)}
              className="relative"
            >
              <p
                onClick={() => setOpen((prev) => !prev)}
                className={`text-base bg-transparent hover:bg-transparent hover:border-b-2 hover:border-b-transparent rounded-none`}
              >
                Influencer
              </p>
              <ul
                className={`text-sm bg-white absolute top-full -left-2 px-2 rounded-md shadow-md z-10 w-full ${
                  open ? "" : "hidden"
                }`}
              >
                <li className="py-2 border-b border-[#f6a21b]">
                  <Link href="/influencer/register">
                    Register as Influencer
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="/influencer/login">Login as a Influencer</Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="text-base">Features</a>
            </li>
            <li>
              <a className="text-base">Accounts</a>
            </li>
            <li>
              <a className="text-base">Testimonials</a>
            </li>
          </ul>
        </div>
        <Image
          src="/cloutjet-removebg.png"
          alt="Cloudjet Logo"
          className="w-[40px] sm:w-[48px] h-[40px] sm:h-[48px] lg:w-[56px] lg:h-[56px] object-contain"
          width={48}
          height={48}
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              className={`bg-transparent hover:bg-transparent active:bg-red hover:border-b-2 hover:border-b-[#f7a21b] ${isActive(
                "/"
              )}`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`bg-transparent hover:bg-transparent hover:border-b-2 hover:border-b-[#f7a21b] rounded-none`}
              href="/signup"
            >
              Become a Merchant
            </Link>
          </li>
          <li className="group relative">
            <p
              className={`bg-transparent hover:bg-transparent hover:border-b-2 hover:border-b-transparent rounded-none`}
            >
              Influencer
            </p>
            <ul className="hidden group-hover:block bg-white absolute top-[100%] left-0 px-2 rounded-md shadow-md">
              <li className="py-2 border-b border-[#f6a21b]">
                <Link href="/influencer/register" className="whitespace-nowrap">Register as Influencer</Link>
              </li>
              <li className="py-2">
                <Link href="/influencer/login" className="whitespace-nowrap">Login as a Influencer</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              className={`bg-transparent hover:bg-transparent hover:border-b-2 hover:border-b-[#f7a21b] rounded-none`}
              href="/"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              className={`bg-transparent hover:bg-transparent hover:border-b-2 hover:border-b-[#f7a21b] rounded-none`}
              href="/"
            >
              Accounts
            </Link>
          </li>
          <li>
            <Link
              className={`bg-transparent hover:bg-transparent hover:border-b-2 hover:border-b-[#f7a21b] rounded-none`}
              href="/"
            >
              Testimonials
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <Link href="/login">
          <Button
            className="h-8 sm:h-9 px-4 sm:px-6 md:px-8 cursor-pointer"
            variant={"outline"}
          >
            Login
          </Button>
        </Link>
        <Link
          href="/signup"
          className="h-8 sm:h-9 btn bg-[#17223b] text-white px-4 sm:px-6 md:px-8 rounded-md outline-none shadow-none border-none hover:opacity-80"
        >
          Register
        </Link>
      </div>
    </header>
  );
}
