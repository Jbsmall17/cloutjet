import Link from 'next/link'
import React from 'react'

export default function CtaComp() {
  return (
    <section className="py-6 md:py-8 lg:py-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 lg:gap-8 xl:gap-10">
      <div className='flex-1 flex justify-center items-center'>
        <img 
            src="/cta-image.svg" 
            alt="cta image" 
            className='max-w-[350px] w-full h-auto' 
        />
      </div>
      <div className='flex-1'>
        <h3 className='font-semibold text-xl md:text-2xl font-semibold text-black dark:text-black mb-4 md:mb-6 lg:mb-8'>Want to Make Money Selling Social Media Services?</h3>
        <p className='text-black dark:text-black text-base lg:text-xl mb-6 md:mb-8 lg:mb-10'>Sell verified social media accounts or offer real engagement services. Whether you&apos;re selling accounts or growing pages, we help you reach buyers who needs your expertise.</p>
        <Link href="/signup">
        <button className='rounded-md py-2 lg:py-4 px-6 text-white dark:text-white bg-[#17223b] text-base lg:text-xl hover:opacity-80 active:opacity-80 transition transition-opacity cursor-pointer'>
            Become a Merchant Today!
        </button>
        </Link>
      </div>
    </section>
  )
}
