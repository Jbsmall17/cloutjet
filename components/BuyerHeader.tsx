import { Bell, Menu, Search, Settings, X } from 'lucide-react'
import React from 'react'

interface BuyerHeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function BuyerHeader({ isOpen, setIsOpen }: BuyerHeaderProps) {
  return (
    <header className='px-4 md:px-6 lg:px-8 py-2 flex flex-row justify-between items-center'>
        <div className='flex flex-row items-center gap-3 lg:gap-10'>
            {
                !isOpen
                ? <Menu onClick={()=>{setIsOpen(!isOpen)}} className='size-6 lg:hidden' />
                : <X onClick={()=>{setIsOpen(!isOpen)}} className='size-6 lg:hidden' />
            }
            <img
                src="/cloutjet-logo.svg"
                alt='cloutjet logo'
                className='size-12 md:size-14 lg:size-16'
            />
            <div className='relative hidden md:inline w-[275px] lg:w-[400px]'>
                <Search className='absolute top-[50%] left-4 -translate-y-[50%]' />
                <input 
                    type="text" 
                    placeholder='Search here..' 
                    className='bg-white rounded-xl h-full w-full pl-14 pr-3 py-2' 
                /> 
            </div>
        </div>
        <div className='flex flx-row items-center gap-4 md:gap-6 lg:gap-10'>
            <div className='hidden md:flex flex-row items-center gap-2 lg:gap-3'>
                <div className='bg-[#d0caca] w-8 h-8 flex justify-center items-center rounded-full'>
                    <Settings className='size-4' />
                </div>
                <div className='bg-[#d0caca] w-8 h-8 flex justify-center items-center rounded-full'>
                    <Bell className='size-4' />
                </div>
            </div>
            <div className='flex flex-row items-center gap-3 p-2 bg-[#17233b] rounded-lg text-white'> 
                <img 
                    src="/header-pic.svg"
                    alt='Profile Picture'
                    className='size-6' 
                />
                <div className='text-xs hidden md:block'>
                    <p>Adetunji Daniels</p>
                    <p>adetunjiidan@gmail.com</p>
                </div>
            </div>
        </div>
    </header>
  )
}
