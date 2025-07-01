import AuthComp from '@/component/AuthComp'
import React from 'react'

export default function page() {
  return (
    <section className='h-screen flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 xl:gap-12 max-w-screen-2xl mx-auto px-[5%] 2xl:px-0 py-4 md:py-6 lg:py-8 xl:py-10'>
        <AuthComp 
          image='/verification-image.svg'
          textVisibility={false}
        />
        <div className='flex-1 lg:flex-[1.25]'>
          <p className='mt-4 md:mt-6 lg:mt-8 xl:mt-10 text-2xl md:text-3xl font-semibold'>Please verify your email address</p>
          <p className='text-xl md:text-2xl text-[#808080] my-2 md:my-4 lg:my-6'>
            Enter the six digit code we sent to <span className='text-black font-semibold'>example@gmail.com</span> to verify your account. Kindly check your email
          </p>
          <div className='flex items-center justify-center gap-4 md:gap-6 lg:gap-8'>
            <input className='rounded-md h-[64px] w-[64px] rounded-md bg-[#f5f5f5]'></input>
            <input className='rounded-md h-[64px] w-[64px] rounded-md bg-[#f5f5f5]'></input>
            <input className='rounded-md h-[64px] w-[64px] rounded-md bg-[#f5f5f5]'></input>
            <input className='rounded-md h-[64px] w-[64px] rounded-md bg-[#f5f5f5]'></input>
            <input className='rounded-md h-[64px] w-[64px] rounded-md bg-[#f5f5f5]'></input>
            <input className='rounded-md h-[64px] w-[64px] rounded-md bg-[#f5f5f5]'></input>
          </div>
          <button 
            type='submit'
            className='w-full bg-[#17223b] rounded-xl p-3 mt-4 md:mt-6 lg:mt-8 xl:mt-10'
          >
            <span className='text-white text-xl'>Confirm</span> 
          </button>
          <p className='text-center text-xl text-[#636363] mt-2 md:mt-4'>Didn’t receive the code? <a className='text-[#219dd0] font-semibold no-underline' href="#">Resend Code!</a></p>
        </div>
    </section>
  )
}
