import { LayoutDashboard, ListOrdered, Settings, Wallet } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface SellerNavbarType {
    isOpen: boolean
}

export default function SellerNavbar({isOpen}: SellerNavbarType) {
  return (
    <section className={`${isOpen ? "block" : "hidden lg:block"} absolute top-0 left-0 z-index lg:static bg-white py-10 px-2 w-[210px]`}>
      <ul className='space-y-3 rounded-lg'>
        <li className='cursor-pointer pl-4 py-2 flex flex-row iems-center gap-4 rounded-lg hover:bg-[#f8a11e]'>
            <LayoutDashboard className='size-6' />
            <span className='font-semibold'>Dashboard</span>
        </li>
        <li className='cursor-pointer pl-4 py-2 flex flex-row iems-center gap-4 rounded-lg hover:bg-[#f8a11e]'>
            <Image
                className='size-6'
                src="/buy-sell.svg"
                alt='buy/sell icon'
                width={40}
                height={40}
            />
            <span className='font-semibold'>Buy/sell accounts</span>
        </li>
        <li className='cursor-pointer pl-4 py-2 flex flex-row iems-center gap-4 rounded-lg hover:bg-[#f8a11e]'>
            <Image
                className='size-6'
                src="/grow.svg"
                alt='messages icon'
                width={40}
                height={40}
            />
            <span className='font-semibold'>Grow my account</span>
        </li>
        <li className='cursor-pointer pl-4 py-2 flex flex-row iems-center gap-4 rounded-lg hover:bg-[#f8a11e]'>
            <ListOrdered className='size-6' />
            <span className='font-semibold'>My orders</span>
        </li>
        <li className='cursor-pointer pl-4 py-2 flex flex-row iems-center gap-4 rounded-lg hover:bg-[#f8a11e]'>
            <Image
                className='size-6'
                src="/messages.svg"
                alt='messages icon'
                width={40}
                height={40}
            />
            <span className='font-semibold'>Messages</span>
        </li>
        <li className='cursor-pointer pl-4 py-2 flex flex-row iems-center gap-4 rounded-lg hover:bg-[#f8a11e]'>
            <Wallet className='size-6' />
            <span className='font-semibold'>Wallet</span>
        </li>
        <li className='cursor-pointer pl-4 py-2 flex flex-row iems-center gap-4 rounded-lg hover:bg-[#f8a11e]'>
            <Settings className='size-6' />
            <span className='font-semibold'>Settings</span>
        </li>
        <li className='cursor-pointer pl-4 py-2 flex flex-row iems-center gap-4 rounded-lg hover:bg-[#f8a11e]'>
            <Image
                className='size-6' 
                src="/customer-care.svg"
                alt='messages icon'
                width={40}
                height={40}
            />
            <span className='font-semibold'>Help/Support</span>
        </li>
      </ul>
    </section>
  )
}
