import Image from 'next/image'
import React from 'react'

export default function Clientele() {
  return (
    <div className='max-w-screen-xl mx-auto flex flex-row items-center justify-between pb-4 md:pb-6 lg:pb-10 xl:pb-12 px-[5%] xl:px-0'>
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
        <p className='text-xl font-bold w-[150px]'>over 1000+ accounts</p>
    </div>
  )
}
