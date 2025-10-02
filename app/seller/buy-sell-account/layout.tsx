"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
  const pathname = usePathname()
  return (
    <main className='flex-1 lg:h-[calc(100vh-80.5px)] overflow-y-auto pr-[2%]'>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6 md:mb-8 lg:mb-10">
        <Link
            href="/seller/buy-sell-account/buy"
        >
        <Button             
            variant={"outline"}
            className={`border border-[#f7a01e]  ${pathname.includes("buy-sell-account/buy") ? 'bg-[#f7a01e]' : 'bg-white'} text-black hover:bg-[#f7a01e] px-8 cursor-pointer`} 
        >
          Buy Account
        </Button>
        </Link>
        <Link
            href="/seller/buy-sell-account/sell"
        >
        <Button
            className={`border border-[#f7a01e]  ${pathname.includes("buy-sell-account/sell") ? 'bg-[#f7a01e]' : 'bg-white'} text-black hover:bg-[#f7a01e] px-8 cursor-pointer`}
            >
            Sell Account
        </Button>
        </Link>
      </div>
      {children}
    </main>
  )
}
