import React from 'react'

export default function HowItWorks() {
  return (
    <section className="max-w-screen-2xl mx-auto px-[5%] 2xl:px-0 text-white pt-3 md:pt-5 lg:pt-8 pb-5 md:pb-8 lg:pb-12">
        <p className='text-center mb-4 md:mb-6 lg:mb-8 text-2xl font-semibold'>How it Works</p>
        <div className='mb-8'>
            <p className='flex flex-row items-center gap-3 mb-2 md:mb-4 lg:mb-6'>
                <img 
                    src="/htw1.svg"
                    alt='how it works icon'
                    className='w-10 md:w-12 lg:w-16 h-10 md:h-12 lg:h-16'
                />
                <span className='text-xl font-semibold'>For Buyers:</span>
            </p>
            <ul className='ml-4 list-decimal flex flex-col gap-6 text-xl md:text-2xl font-semibold'>
                <li>
                    <p className='p-title'>Browse Accounts</p>
                    <p className='p-description'>View our verified listings across various</p>
                </li>
                <li>
                    <p className="p-title">Make Payment</p>
                    <p className='p-description'>pay securely through our platform</p>
                </li>
                <li>
                    <p className='p-title'>Receive Account Details</p>
                    <p className='p-description'>Instantly or within a short delivery time</p>
                </li>
                <li>
                    <p className='p-title'>Get Support</p>
                    <p className='p-description'>Our team assists if anything goes wrong.</p>
                </li>
            </ul>
        </div>
        <div>
            <p className='flex flex-row items-center gap-3 mb-2 md:mb-4 lg:mb-6'>
                <img 
                    src="/htw2.svg"
                    alt="how it works icon"
                    className='w-10 md:w-12 lg:w-16 h-10 md:h-12 lg:h-16'
                />
                <span className='text-xl font-semibold'>For Sellers/ Influencers</span>
            </p>
            <ul className='ml-4 list-decimal flex flex-col gap-6 text-xl md:text-2xl font-semibold'>
                <li>
                    <p className='p-title'>List Your Offer</p>
                    <p className='p-description'>Account, growth package or influencer service.</p>
                </li>
                <li>
                    <p className='p-title'>Get Verified</p>
                    <p className='p-description'>Our team checks for quality & legitmacy</p>
                </li>
                <li>
                    <p className='p-title'>Start Selling</p>
                    <p className='p-description'>Earn money securely</p>
                </li>
                <li>
                    <p className='p-title'>Wuthdraw Funds</p>
                    <p className='p-description'>Fast payouts to your preferred method</p>
                </li>
            </ul>
        </div>
    </section>
  )
}
