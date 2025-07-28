import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <section className='pagelayout'>
        <p className='text-xl font-semibold mb-4 md:mb-6 lg:mb-8'>Quick action</p>
        <div className='flex flex-col md:flex-row gap-4'>
            <div className='flex-1 rounded-lg  bg-white py-12 flex flex-col items-center gap-4'>
                <Image
                    className='size-8'
                    src="/chart-icon.svg"
                    width={40}
                    height={40}
                    alt='buy icon'
                />
                <p>Buy accounts</p>
            </div>
            <div className='flex-1 rounded-lg  bg-white py-12 flex flex-col items-center gap-4'>
                <Image
                    className='size-8'
                    src="/sell-icon.svg"
                    width={40}
                    height={40}
                    alt='sell icon'
                />
                <p>Sell accounts</p>
            </div>
            <div className='flex-1 rounded-lg  bg-white py-12 flex flex-col items-center gap-4'>
                <Image
                    className='size-8'
                    src="/grow-icon.svg"
                    width={40}
                    height={40}
                    alt='grow icon'
                />
                <p>Grow socials</p>
            </div>
            <div className='flex-1 rounded-lg  bg-white py-12 flex flex-col items-center gap-4'>
                <Image
                    className='size-8'
                    src="/vpn-icon.svg"
                    width={40}
                    height={40}
                    alt='vpn icon'
                />
                <p>VPN logs</p>
            </div>
        </div>
        <p className='text-xl font-semibold my-2 md:my-4'>Stat Overview</p>
        <div className='flex flex-col md:flex-row gap-4 mb-2 md:mb-4'>
            <div className='py-5 bg-white flex-1 flex flex-col gap-2 items-center rounded-lg'>
                <p className='text-2xl font-semibold'>24</p>
                <p className='text-base'>Purchases made</p>
            </div>
            <div className='py-5 bg-white flex-1 flex flex-col gap-2 items-center rounded-lg'>
                <p className='text-2xl font-semibold'>30</p>
                <p className='text-base'>Total Order</p>
            </div>
            <div className='py-5 bg-white flex-1 flex flex-col gap-2 items-center rounded-lg'>
                <p className='text-2xl font-semibold'>45%</p>
                <p className='text-base'>Engagement Growth</p>
            </div>
        </div>
        <div className='my-2 md:my-4 flex flex flex-col md:flex-row gap-4'>
            <div className='flex-1 space-y-4'>
                <div className='bg-white rounded-lg p-4'>
                    <p className='text-center text-xl mb-3 pb-2 border-b border-b-[#c4c4c4] font-semibold'>Influencer</p>
                    <Button className='block mx-auto px-4 h-12 bg-[#f8a11e] text-black'>Apply as an influencer</Button>
                </div>
                <div className='bg-white rounded-lg p-4 space-y-3'>
                    <p className='font-semibold text-center'>Account Verification<br />Status</p>
                    <Button variant={'outline'} className='block mx-auto px-6 block text-black'>Get Verified now</Button>
                    <div className='flex justify-center items-center gap-3'>
                        <Image
                            className='size-8'
                            src="/cancelled-icon.svg"
                            alt='cancel icons'
                            width={40}
                            height={40}
                        />
                        <p className='text-sm text-red-600'>Not yet verified!</p>
                    </div>
                </div>
            </div>
            <div className='bg-white flex-1 p-2 rounded-lg'>
                <div className='flex flex-row justify-between mb-6'>
                    <p className='text-xl font-semibold'>Recent Activities</p>
                    <p className='text-xl text-[#f8a11e]'>Open all</p>
                </div>
                <div className='flex flex-col justify-between gap-6'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-row gap-2'>
                            <Image
                                src="/chart-icon.svg"
                                alt="icons"
                                width={20}
                                height={20}
                            />
                            <p>You purchased an account</p>
                        </div>
                        <div className='flex flex-row gap-6 lg:gap-8'>
                            <p className='text-[#8a8a8a]'>12:09pm</p>
                            <ChevronRight />
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-row gap-2'>
                            <Image
                                src="/chart-icon.svg"
                                alt="icons"
                                width={20}
                                height={20}
                            />
                            <p>You purchased an account</p>
                        </div>
                        <div className='flex flex-row gap-6 lg:gap-8'>
                            <p className='text-[#8a8a8a]'>12:09pm</p>
                            <ChevronRight />
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-row gap-2'>
                            <Image
                                src="/chart-icon.svg"
                                alt="icons"
                                width={20}
                                height={20}
                            />
                            <p>You purchased an account</p>
                        </div>
                        <div className='flex flex-row gap-6 lg:gap-8'>
                            <p className='text-[#8a8a8a]'>12:09pm</p>
                            <ChevronRight />
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-row gap-2'>
                            <Image
                                src="/chart-icon.svg"
                                alt="icons"
                                width={20}
                                height={20}
                            />
                            <p>You purchased an account</p>
                        </div>
                        <div className='flex flex-row gap-6 lg:gap-8'>
                            <p className='text-[#8a8a8a]'>12:09pm</p>
                            <ChevronRight />
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-row gap-2'>
                            <Image
                                src="/chart-icon.svg"
                                alt="icons"
                                width={20}
                                height={20}
                            />
                            <p>You purchased an account</p>
                        </div>
                        <div className='flex flex-row gap-6 lg:gap-8'>
                            <p className='text-[#8a8a8a]'>12:09pm</p>
                            <ChevronRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-white rounded-lg p-3'>
            <div className='border-b border-b-[#c4c4c4] pb-2 flex flex flex-row justify-between pl-0 md:pl-3 pr-0 md:pr-6'>
                <p className='text-xl font-semibold text-black'>Transaction History</p>
                <p className='text-xl font-semibold text-[#f8a11e]' >Go to waitlist</p>
            </div>
            <div className='py-2 md:py-4 space-y-2 px-3 md:px-6'>
                <div className='text-sm font-medium flex flex-row justify-between items-center'>
                    <p>CJTX-2340</p>
                    <p>June 1st, 2025</p>
                    <p>09:48pm</p>
                    <p>Completed</p>
                </div>
                <div className='text-sm font-medium flex flex-row justify-between items-center'>
                    <p>CJTX-2340</p>
                    <p>June 1st, 2025</p>
                    <p>09:48pm</p>
                    <p>Completed</p>
                </div>
                <div className='text-sm font-medium flex flex-row justify-between items-center'>
                    <p>CJTX-2340</p>
                    <p>June 1st, 2025</p>
                    <p>09:48pm</p>
                    <p>Ongoing</p>
                </div>
                <div className='text-sm font-medium flex flex-row justify-between items-center'>
                    <p>CJTX-2340</p>
                    <p>June 1st, 2025</p>
                    <p>09:48pm</p>
                    <p>Completed</p>
                </div>
            </div>
        </div>
    </section>
  )
}
