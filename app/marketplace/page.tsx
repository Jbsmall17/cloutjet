import Navbar2 from '@/components/Navbar2'
import React from 'react'
import { Search, ChevronDown } from 'lucide-react';
import BuyerAccount from '@/components/BuyerAccount';


export default function page() {

    const DropDownComp = ({ title, items }: { title: string, items: string[] }) => { 
        return (
            <div className='relative px-6 pb-4'>
                <div className='flex flex-row items-center gap-10 lg:gap-14 justify-between mb-3'>
                    <p className='text-black text-base font-semibold'>{title}</p>
                    <ChevronDown  className='size-5'/>
                </div>
                <ul className='text-black rounded-lg'>
                    {items.map((item, index) => (
                        <li key={index} className='cursor-pointer'>
                            <input 
                                type="checkbox" 
                                className='mr-2'
                            />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }


  return (
    <main>
        <Navbar2 />
        <section className='bg-[#17223b]'>
        <section className='max-w-screen-2xl mx-auto px-[5%] 2xl:px-0 text-white pb-4 md:pb-6 lg:pb-8 pt-8 md:pt-10 lg:pt-14 flex flex-col md:flex-row justify-between gap-4 md:items-center'>
            <div>
                <p className='text-2xl font-semibold mb-1'>Marketplace</p>
                <p className='w-[250px]'>Gain full access to all products offered by our verified Merchants</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-4 md:gap-4 lg:gap-8 lg:mt-8 lg:mt-10'>
                <p className='text-xl font-semibold lg:self-end'>Latest Account</p>
                <div className='relative w-full md:w-[300px] lg:w-[400px] text-black rounded-xl bg-white'>
                    <Search 
                        className='absolute top-[50%] -translate-y-[50%] left-6'  
                    />
                    <input 
                        type="text" 
                        placeholder="Search by name or description"
                        // className="input input-bordered w-full max-w-xs"
                        className='h-full w-full py-2 pl-14'
                    />
                </div>
            </div>
        </section>
        <section className='flex flex-row gap-4 pb-6 md:pb-8 lg:pb-10'>
            <div className='hidden lg:block bg-white'>
                <p className='py-2 px-6 mb-4 border-b border-b-[#b3b3b3] text-base font-semibold'>Account Category</p>
                <DropDownComp
                    title="Social Media"
                    items={['Facebook','Instagram', 'Twitter', 'Snappchat','LinkedIn', "Pinterest", "Threads" ,'YouTube']}
                />
                <DropDownComp
                    title="Email & Messaging Service"
                    items = {['Gmail', 'Yahoo mail', 'Whatsapp', 'Outlook', 'Telegram', 'Wechat', 'Google voice']}
                />
            </div>
            <div className='flex-1 bg-white py-4 px-6'>
                <BuyerAccount
                    social="/facebook2.svg"
                    country="Germany FB"
                    flag="/flag-germany.svg"
                    price="$100"
                    desc="This is a Facebook account with 10k followers and 5k likes on posts. It is verified and has no restrictions."
                    profilePic='/profilepic.svg'
                    userName="John Doe"
                />
                <BuyerAccount
                    social="/facebook2.svg"
                    country="Germany FB"
                    flag="/flag-germany.svg"
                    price="$100"
                    desc="This is a Facebook account with 10k followers and 5k likes on posts. It is verified and has no restrictions."
                    profilePic='/profilepic.svg'
                    userName="John Doe"
                />
                <BuyerAccount
                    social="/facebook2.svg"
                    country="Germany FB"
                    flag="/flag-germany.svg"
                    price="$100"
                    desc="This is a Facebook account with 10k followers and 5k likes on posts. It is verified and has no restrictions."
                    profilePic='/profilepic.svg'
                    userName="John Doe"
                />
            </div>
        </section>
        </section>
    </main>
  )
}
