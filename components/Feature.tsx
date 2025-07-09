import Image from 'next/image'
import React from 'react'

export default function Feature({name,desc}:{name:string,desc:string}) {
  return (
    <div className='bg-white rounded-lg border border-[#17223b] pt-6 pb-4 px-4'>
        <Image
            src="/features-icon.svg"
            alt="feature image"
            className='mb-6'
            width={48}
            height={48}
        />
        <p className='ml-4 text-xl font-semibold mb-6'>{name}</p>
        <p className='text-base'>{desc}</p>
    </div>
  )
}
