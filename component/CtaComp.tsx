import React from 'react'

export default function CtaComp() {
  return (
    <section className="py-6 md:py-8 lg:py-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 lg:gap-8 xl:gap-10">
      <div className='flex-1'>
        <img 
            src="/cta-image.svg" 
            alt="cta image" 
            className='max-w-[400px] w-full h-auto' 
        />
      </div>
      <div className='flex-1'>
        <h3 className='font-semibold text-xl md:text-2xl lg:text-3xl font-semibold text-black dark:text-black mb-4 md:mb-8 lg:mb-12'>Want to Make Money Selling Social Media Services?</h3>
        <p className='text-black dark:text-black text-base md:text-xl lg:text-2xl mb-8 md:mb-12 lg:mb-16'>Sell verified social media accounts or offer real engagement services. Whether you're selling accounts or growing pages, we help you reach buyers who needs your expertise.</p>
        <button className='rounded-md py-4 px-6 text-white dark:text-white bg-[#17223b] text-xl'>
            Become a Merchant Today!
        </button>
      </div>
    </section>
  )
}
