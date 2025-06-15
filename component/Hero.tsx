import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <section className='max-h-screen mx-auto max-w-screen-xl flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 lg:gap-12 xl:gap-14 py-8 md:py-12 lg:py-16 xl:py-20 px-[5%] xl:px-0'>
      <div>
        <p className='flex flex-row gap-4 md:gap-6 lg:gap-10 xl:gap-12 items-center mb-4 md:mb-8 lg:mb-10 xl:mb-12'>
            <div className='w-[75px] h-1 bg-[#17223b]'></div>
            <span className='text-2xl lg:text-2xl text-[#17223b] font-semibold'>Selling and Buying accounts made easy here</span>
        </p>
        <p className='text-3xl md:text-4xl lg:text-6xl font-bold w-auto md:w-[400px] lg:w-[600px] mb-4 md:mb-8 lg:mb-10 lg:mb-12'>
            A Marketplace for Unique, Valuable Accounts & tools
        </p>
        <p className='text-xl lg:text-3xl text-[#666666] mb-4 md:mb-8 lg:mb-10 lg:mb-12 w-auto md-w-[450px] lg:w-[635px]'>
            Buy and sell easily perfectly made platform. Find all your needs in one place 
        </p>
        <button className='bg-[#17223b] text-white w-[200px] md:w-[250px] lg:w-[300px] py-2 rounded-md'>
            Register
        </button>
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
    </section>
  )
}
