import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar2() {
  return (
    <div className="navbar max-w-screen-2xl mx-auto px-[5%] 2xl:px-0 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href='/marketplace'>Market Place</Link></li>
        <li><Link href="/grow-media">Grow media</Link></li>
        <li><a>Messages</a></li>
        <li><a>Wallet</a></li>
        <li><a>Sell Products</a></li>
        <li><Link href='/buyer/dashboard'>Dashboard</Link></li>
      </ul>
    </div>
    <Image 
        src="/cloutjet-logo.svg"
        alt="Cloutjet Logo"
        className='w-[44px] h-[44px] lg:w-[56px] lg:h-[56px]'
        width={48}
        height={48}
    />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><Link href='/marketplace'>Market Place</Link></li>
        <li><Link href="/grow-media">Grow media</Link></li>
        <li><a>Messages</a></li>
        <li><a>Wallet</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <a className="hidden lg:flex btn bg-white text-black border border-black rounded-md">Sell Product</a>
    <Link href='/buyer/dashboard' className='hidden lg:flex btn bg-[#17223b] text-white border-none'>Dashboard</Link>
    <div className='relative'>
        <p className='absolute top-0 right-0 -translate-y-[50%] translate-x-[50%] size-4 text-black bg-[#f6a21b] text-xs font-semibold rounded-full flex justify-center itmes-center'>2</p>
        <img 
            src="/cart.svg" 
            alt='Cart Icon'
            className='size-6'
            width={16}
            height={16}
        />
    </div>
  </div>
</div>
  )
}
