import Image from 'next/image'
import React from 'react'

export default function Clientele() {
  return (
    <div className='flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-between gap-3 md:gap-0 pb-4 md:pb-6 lg:pb-10 xl:pb-12 '>
        <Image 
            src="/instagram.svg"
            alt='instagra icon'
            width={40}
            height={40}
        />
        <Image
            src="/tiktok.svg"
            alt='tiktok icon'
            width={80}
            height={40}
        />
        <Image
            src="/gmail.svg"
            alt='twitter icon'
            width={40}
            height={40}
        />
        <Image
            src="/netflix.svg"
            alt='netflix icon'
            width={80}
            height={40}
        />
        <Image
            src="/facebook.svg"
            alt='discord icon'
            width={40}
            height={40}
        />
        <p className='text-center md:text-start text-xl font-bold w-[150px]'>over 1000+ accounts</p>
    </div>
  )
}
