import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function Hero() {
  return (
    <section className='py-8 md:py-10 lg:py-12 xl:py-16'>
      <div className='flex flex-col sm:flex-row justify-between items-center gap-6 md:gap-10 lg:gap-12 xl:gap-14'>
      <div>
        <p className='hidden sm:block text-2xl md:text-3xl lg:text-4xl font-bold w-auto mb-4 md:mb-6 lg:mb-8'>
          Verified Accounts.<br /> Organic Growth.<br /> Real Inflenucers -<br /> All in One place 
        </p>
        <p className='text-center block sm:hidden text-2xl md:text-3xl lg:text-4xl font-bold w-auto mb-4 md:mb-6 lg:mb-8'>
          Verified Accounts. Organic Growth.<br /> Real Inflenucers -All in One place 
        </p>
        <p className='hidden sm:block text-base lg:text-xl text-[#666666] mb-4 md:mb-8 lg:mb-10 lg:mb-12 w-auto'>
          Buy & sell social media accounts, hire<br /> influencers to grow your page, or purchase<br /> verified growth services - all verified and secure. 
        </p>
        <p className='block sm:hidden text-center text-base lg:text-xl text-[#666666] mb-4 md:mb-8 lg:mb-10 lg:mb-12 w-auto'>
          Buy & sell social media accounts, hire influencers to grow your page, or purchase verified growth services - all verified and secure. 
        </p>

      </div>
      <div className='w-[300px] md:w-[400px]'>
        <Image 
            src="/hero-image.svg"
            alt="hero image"
            className='w-full h-full object-cover'
            width={500}
            height={450}
        />
      </div>
      </div>
      <div className='mt-4 md:mt-6 lg:mt-8 flex flex-wrap flex-col justify-start sm:justify-center md:justify-start sm:flex-row items-center gap-4 md:gap-6 lg:gap-14'>
        <Link href="/marketplace">
        <button className='whitespace-nowrap py-2.5 text-base lg:text-xl bg-[#f7a21b] cursor-pointer hover:opacity-80 transition transition-opacity ease-linear text-white px-8 md:px-10 lg:px-16 rounded-xl'>
          <span className='cursor-pointer'>Buy an Account</span>
        </button>
        </Link>
        <Link href="/signup">
          <button className='whitespace-nowrap py-2.5 text-base lg:text-xl bg-white hover:bg-gray-100 cursor-pointer text-black transition transition-color ease-linear px-8 md:px-10 lg:px-16 rounded-xl border border-[#919191]'>
            <span className='cursor-pointer'>Sell an Account</span>
          </button>
        </Link>
        <Link href="/grow-media">
          <button className='whitespace-nowrap py-2.5 text-base lg:text-xl bg-white hover:bg-gray-100 cursor-pointer text-black transition transition-color ease-linear text-black px-6 md:px-8 lg:px-10 rounded-xl border border-[#919191]'>
            <span className='cursor-pointer'>Hire Influencer for Growth</span>
          </button>
        </Link>
      </div>
    </section>
  )
}
