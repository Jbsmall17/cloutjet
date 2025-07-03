import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header className="navbar max-w-screen-2xl mx-auto px-[5%] 2xl:px-0">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a>Home</a></li>
                    <li><a>Become a Merchantt</a></li>
                    <li><a>Services</a></li>
                    <li><a>Features</a></li>
                    <li><a>Accounts</a></li>
                    <li><a>Testimonials</a></li>
                </ul>
            </div>
            <Image 
                src="/cloutjet-logo.svg"
                alt="Cloudjet Logo"
                className='w-[44px] h-[44px] lg:w-[56px] lg:h-[56px]'
                width={48}
                height={48}
            />
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><a>Home</a></li>
                <li><a>Become a Merchant</a></li>
                <li><a>Services</a></li>
                <li><a>Features</a></li>
                <li><a>Accounts</a></li>
                <li><a>Testimonials</a></li>
            </ul>
        </div>
        <div className="navbar-end">
            <Link href="/signup" className="btn bg-[#17223b] text-white px-8 rounded-md outline-none shadow-none border-none">Register</Link>
        </div>
    </header>
  )
}
