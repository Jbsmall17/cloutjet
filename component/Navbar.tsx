import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header className="navbar max-w-screen-xl mx-auto px-[5%] xl:px-0">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a>Home</a></li>
                    <li><a>Features</a></li>
                    <li><a>About</a></li>
                    <li><a>Services</a></li>
                    <li><a>Become a Merchant</a></li>
                </ul>
            </div>
            <Image 
                src="/cloudjet-logo.svg"
                alt="Cloudjet Logo"
                className='w-[36px] h-[36px] lg:w-[48px] lg:h-[48px]'
                width={48}
                height={48}
            />
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><a>Home</a></li>
                <li><a>Features</a></li>
                <li><a>About</a></li>
                <li><a>Services</a></li>
                <li><a>Become a Merchant</a></li>
            </ul>
        </div>
        <div className="navbar-end">
            <Link href="/signup" className="btn bg-[#17223b] text-white px-8 rounded-md outline-none shadow-none border-none">Register</Link>
        </div>
    </header>
  )
}
