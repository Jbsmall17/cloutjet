import { LogOut,ArrowUpDown,LayoutDashboard,Bell,Settings } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

interface BuyerSidebarProps{
    isOpen: boolean
}

export default function BuyerSidebar({isOpen}: BuyerSidebarProps) {
    const pathname = usePathname()

    return (
    <nav className={`${!isOpen ? 'hidden lg:flex': 'flex'} h-full absolute left-0 top-0 lg:relative pt-6 pb-12 px-6 bg-white flex flex-col justify-between`}>
        <ul className='flex flex-col gap-4'>
            <Link href="/buyer/dashboard">
            <li className={`p-2 flex flex-row items-center gap-3 rounded-md hover:text-white hover:bg-[#f6a21b] ${pathname === '/buyer/dashboard' ? 'bg-[#f6a21b] text-white' : 'text-black'}`}>
                <LayoutDashboard />
                <p>Dashboard</p>
            </li>
            </Link>
            <Link href="/buyer/refferal">
            <li className={`p-2 flex flex-row items-center gap-3 rounded-md hover:text-white hover:bg-[#f6a21b] ${pathname === '/buyer/refferal' ? 'bg-[#f6a21b] text-white' : 'text-black'}`}>
                <ArrowUpDown />
                <p>Referrals</p>
            </li>
            </Link>
            <Link href="/buyer/notifications">
            <li className={`p-2 flex flex-row items-center gap-3 rounded-md hover:text-white hover:bg-[#f6a21b] ${pathname === '/buyer/notifications' ? 'bg-[#f6a21b] text-white' : 'text-black'}`}>
                <Bell />
                <p>Notifications</p>
            </li>
            </Link>
            <Link href="/buyer/account-settings">
            <li className={`p-2 flex flex-row items-center gap-3 rounded-md hover:text-white hover:bg-[#f6a21b] ${pathname === '/buyer/account-settings' ? 'bg-[#f6a21b] text-white' : 'text-black'}`}>
                <Settings />
                <p>Account Settings</p>
            </li>
            </Link>
        </ul>
        <button className='p-2 flex flex-row items-center gap-4'>
            <LogOut />
            <span>Log Out</span>
        </button>
    </nav>
  )
}
