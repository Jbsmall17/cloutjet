import { ShoppingCart } from 'lucide-react'
import React from 'react'

export default function BuyerAccount({social,country,flag,price,desc,profilePic,userName}: {social:string,country: string, flag: string, price: string,desc: string,profilePic: string,userName: string }){
        return (
            <div className='mb-4 rounded-lg border border-[#17223b] py-2 md:py-3 px-3 md:px-5 flex flex-row items-center gap-4 md:gap-6 lg:gap-8'>
                <div>
                    <img 
                        src={social}
                        className='size-12 md:size-16'
                    />
                </div>
                <div className='flex-1'>
                    <div className='flex flex-row items-center justify-between mb-1'>
                        <p className='flex flex-row items-center gap-4'>
                            <span className='font-semibold text-base md:ext-xl'>{country}</span>
                            <img className='size-6 md:size-8' src={flag} />
                        </p>
                        <p className='font-semibold text-base'>{price}</p>
                    </div>
                    <p className='text-xl hidden md:block w-[70%] mb-1'>{desc}</p>
                    <p className='text-base md:text-xl block md:hidden mb-1'>{desc.substring(0,30)}...</p>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='flex flex-row items-center gap-4'>
                            <img 
                                src={profilePic}
                                alt='Profile Picture'
                                className='size-6 md:size-10'
                            />
                            <p className='text-base font-semibold'>{userName}</p>
                        </div>
                        <div className='flex flex-row items-center gap-3'>
                            <div className='rounded-md h-8 md:h-10 w-8 md:w-10 bg-[#f6a21b] flex items-center justify-center'>
                                <ShoppingCart  className='size-4 md:size-6 text-white'/>
                            </div>
                            <button className='border border-black py-1 md:py-2 px-4 rounded-md text-black'>Preview</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
