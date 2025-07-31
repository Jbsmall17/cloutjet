"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

interface ServicesProps {
    type: string;
    image: string;
    service: React.ReactNode
    describe: string;
    text: string
}

export default function Services({ type,image, service, describe, text }: ServicesProps) {
  const route = useRouter()

  const handleNavigation = (str: string) =>{
    switch(str){
      case "account":
        route.push("/marketplace");
        return 
      default:
        route.push("/grow-media");
        return
    }
  }

  return (
    <div className='flex-1 px-3 md:px-5 pt-3 md:pt-3 pb-7 md:pb-9 rounded-4xl border border-black flex flex-col items-center'>
      <img 
        src={image}
        alt="services image"
        className='block mb-3 md:mb-5 lg:mb-7 w-[64px]'
      />
      <p className='tet-xl md:text-2xl font-semibold text-center mb-3 md:mb-5 lg:mb-7'>{service}</p>
      <p className='text-center text-base md:text-xl mb-7 md:mb-9 lg:mb-12'>{describe}</p>
      <button
        onClick={() => handleNavigation(type)} 
        className='cursor-pointer hover:opacity-80 whitespace-nowrap py-2.5 text-base md:text-xl px-6 md:px-8 lg:px-12 text-white bg-[#17223b] rounded-md'>
        <span>{text}</span>
      </button>
    </div>
  )
}
