import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function Hero() {
  return (
    <section className='py-8 md:py-12 lg:py-16 xl:py-24'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 lg:gap-12 xl:gap-14'>
      <div>
        <p className='text-3xl md:text-4xl lg:text-5xl font-bold w-auto md:w-[400px] lg:w-[600px] mb-4 md:mb-8 lg:mb-10 lg:mb-12'>
          Verified Accounts. Organic Growth. Real Inflenucers - All in One place 
        </p>
        <p className='text-xl lg:text-2xl text-[#666666] mb-4 md:mb-8 lg:mb-10 lg:mb-12 w-auto md-w-[450px] lg:w-[635px]'>
          Buy & sell social media accounts, hire influencers to grow your page, or purchase verified growth services - all verified and secure. 
        </p>

      </div>
      <div className='max-w-lg w-full'>
        <Image 
            src="/hero-image.svg"
            alt="hero image"
            className='w-full h-full'
            width={500}
            height={450}
        />
      </div>
      </div>
      <div className='mt-4 md:mt-6 lg:mt-8 flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-14'>
        <Link href="/marketplace">
        <button className='whitespace-nowrap py-2.5 text-base lg:text-xl bg-[#f7a21b] text-white px-8 md:px-10 lg:px-16 rounded-xl'>
          <span className='cursor-pointer'>Buy an Account</span>
        </button>
        </Link>
        <button className='whitespace-nowrap py-2.5 text-base lg:text-xl bg-white text-black px-8 md:px-10 lg:px-16 rounded-xl border border-[#919191]'>
          <span>Sell an Account</span>
        </button>
        <button className='whitespace-nowrap py-2.5 text-base lg:text-xl bg-white text-black px-6 md:px-8 lg:px-10 rounded-xl border border-[#919191]'>
          <span>Hire Influencer for Growth</span>
        </button>
      </div>
    </section>
  )
}
