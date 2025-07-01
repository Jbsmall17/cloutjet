import AuthComp from '@/component/AuthComp'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <section className='min-h-screen lg:h-screen flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 xl:gap-12 max-w-screen-xl mx-auto px-[5%] xl:px-0 py-4 sm:py-6 lg:py-8 xl:py-10'>
      <AuthComp 
        image="/login-image.svg"
        textVisibility={true}
      />
      <div className='flex-1 lg:flex-[1.25]'>
        <div className='flex flex-row items-center justify-between'>
          <div className='mb-4 md:mb-4 lg:mb-6'>
            <p className='text-xl md:text-2xl font-semibold mb-2 md:mb-3 lg:mb-4'>Welcome to Cloud jet</p>
            <p className='text-base'>Create an account with us</p>
          </div>
          <img 
            src="/cloudjet-logo.svg"
            alt='Cloudjet Logo' 
          />
        </div>
        <form action="">
          <label className='text-xl font-semibold mb-2 block' htmlFor="fullname">Full Name</label>
          <input
            id='fullname'
            type="text" 
            placeholder='Full name' 
            className='block border border-gray-300 rounded-md p-2 w-full mb-3' 
          />
          <label className='text-xl font-semibold mb-2 block' htmlFor='phone'>Phone Number</label>
          <input
            id='phone'
            type="tel" 
            placeholder='Phone number' 
            className='block border border-gray-300 rounded-md p-2 w-full mb-3'
          />
          <label className='text-xl font-semibold mb-2 block' htmlFor="email">Email Address</label>
          <input
            id='email'
            type="email" 
            placeholder='Email' 
            className='block border border-gray-300 rounded-md p-2 w-full mb-3'
          />
          <label className='text-xl font-semibold mb-2 block' htmlFor="password">Password</label>
          <input
            id='password'
            type="password" 
            placeholder='Password' 
            className='block border border-gray-300 rounded-md p-2 w-full mb-3'
          />
          <label className='text-xl font-semibold mb-2 block' htmlFor="confirm-password">Confirm Password</label>
          <input
            id='confirm-password'
            type="password" 
            placeholder='Confirm Password' 
            className='block border border-gray-300 rounded-md p-2 w-full mb-3'
          />
          <div className='flex items-center'>
            <input 
              type="checkbox" 
              id='terms' 
              className='mr-2 h-[24px] w-[24px] accent-[#17223b]'
            />
            <label className='text-base md:text-xl' htmlFor="terms">I agree to the <a href="#" className='text-[#17223b] font-semibold text-base md:text-xl'>Terms</a></label>
          </div>
          <button 
            type='submit'
            className='w-full bg-[#17223b] rounded-md p-2 mt-4 md:mt-6 lg:mt-8 xl:mt-10'
          >
            <span className='text-white'>Register</span>
          </button>
        </form>
        <p className='text-center text-base md:text-xl text-[#878787] mt-2'>Already have an Account? <Link href="/login" className='text-black'>Log In</Link></p>
      </div>
    </section>
  )
}
