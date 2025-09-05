import { LogOut,ArrowUpDown,LayoutDashboard,Bell,Settings, Store } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'

interface BuyerSidebarProps{
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void;
}

export default function BuyerSidebar({isOpen,setIsOpen}: BuyerSidebarProps) {
    const router = useRouter()
    const pathname = usePathname()

    const handleLogout = () =>{
        sessionStorage.clear()
        router.push("/login")
    }
    
    const handleClick = () => {
        if(window.innerWidth < 1024){
            setIsOpen(false)
        }
    }

    return (
    <nav className={`${!isOpen ? 'hidden lg:flex': 'flex'} h-full absolute left-0 top-0 z-20 lg:relative pt-6 pb-12 px-6 bg-white flex flex-col justify-between`}>
        <ul className='flex flex-col gap-4'>
            <Link onClick={handleClick} href="/buyer/dashboard">
            <li className={`p-2 flex flex-row items-center gap-3 rounded-md hover:text-white hover:bg-[#f6a21b] ${pathname === '/buyer/dashboard' ? 'bg-[#f6a21b] text-white' : 'text-black'}`}>
                <LayoutDashboard />
                <p>Dashboard</p>
            </li>
            </Link>
            <Link onClick={handleClick} href="/buyer/refferal">
            <li className={`p-2 flex flex-row items-center gap-3 rounded-md hover:text-white hover:bg-[#f6a21b] ${pathname === '/buyer/refferal' ? 'bg-[#f6a21b] text-white' : 'text-black'}`}>
                <ArrowUpDown />
                <p>Referrals</p>
            </li>
            </Link>
            <Link onClick={handleClick} href="/buyer/notifications">
            <li className={`p-2 flex flex-row items-center gap-3 rounded-md hover:text-white hover:bg-[#f6a21b] ${pathname === '/buyer/notifications' ? 'bg-[#f6a21b] text-white' : 'text-black'}`}>
                <Bell />
                <p>Notifications</p>
            </li>
            </Link>
            <Link onClick={handleClick} href="/seller/dashboard">
                <li className={`p-2 flex flex-row items-center gap-3 rounded-md hover:text-white hover:bg-[#f6a21b] ${pathname === '/seller/dashboard' ? 'bg-[#f6a21b] text-white' : 'text-black'}`}>
                    <Store />
                    <p>Sell / Buy  Accounts</p>
                </li>
            </Link>
            <Link onClick={handleClick} href="/buyer/account-settings">
            <li className={`p-2 flex flex-row items-center gap-3 rounded-md hover:text-white hover:bg-[#f6a21b] ${pathname === '/buyer/account-settings' ? 'bg-[#f6a21b] text-white' : 'text-black'}`}>
                <Settings />
                <p>Account Settings</p>
            </li>
            </Link>
        </ul>
        <button onClick={handleLogout} className='p-2 flex flex-row items-center gap-4'>
            <LogOut />
            <span>Log Out</span>
        </button>
    </nav>
  )
}
