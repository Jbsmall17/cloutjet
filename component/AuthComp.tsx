import React from 'react'

interface AuthCompProps {
    image: string;
    textVisibility: boolean
}

export default function AuthComp({image,textVisibility}: AuthCompProps) {
  return (
    <div className='flex-1 relative hidden md:block'>
      <img 
        src={image}
        alt="auth image"
        className='w-full h-full rounded-tl-xl object-cover rounded-bl-xl'
      />
      {
        textVisibility &&
        <div className='absolute left-[5%] bottom-[20%] text-white w-[90%]'>
          <p className='text-white text-2xl md:text-3xl font-semibold mb-2 md:mb-4 lg:mb-6'>Network. Transact. Redefine Your Online Presence</p>
          <p className='text-[#ffffff] text-base md:text-xl'>
            Redefine your digital journey through meaningful connections and ethical exchange in a platform designed for sustainable growth
          </p>
        </div>
      }
    </div>
  )
}
