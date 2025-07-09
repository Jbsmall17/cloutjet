import AuthComp from '@/components/AuthComp'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <section className='h-auto flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 xl:gap-12 max-w-screen-2xl mx-auto px-[5%] 2xl:px-0 py-4 sm:py-6 lg:py-8 xl:py-10'>
        <AuthComp
            image="/login-image.svg"
            textVisibility={true}
        />
        <div className='flex-1 lg:flex-[1.25]'>
            <div className='flex flex-row items-center justify-end mb-4 md:mb-6 lg:mb-8'>
                <img 
                    src="/cloutjet-logo.svg"
                    alt='Cloutjet Logo'
                />
            </div>
            <p className='text-xl md:text-2xl font-semibold mb-2 md:mb-4'>Welcome Back!</p>
            <p className='text-base md:text-xl mb-3 md:mb-5 lg:mb-7'>Let&apos;s continue from where we stopped</p>
            <form action="">
                <label htmlFor='phonenumber/email' className='block mb-2 font-semibold text-xl'>Phone Number / Email</label>
                <input
                    id='phonenumber/email'
                    type="text"
                    placeholder='Phone Number / Email'
                    className='text-black block border border-gray-300 rounded-md p-4 w-full mb-8'
                />
                <label htmlFor="password" className='block mb-2 font-semibold text-xl'>Password</label>
                <input
                    id='password'
                    type="password"
                    placeholder='Password'
                    className='block border border-gray-300 rounded-md p-4 w-full mb-4'
                />
                <p className='text-base text-[#636363]'>Forget your Password? <Link href="/verification" className='font-semibold text-black underline'>Reset Now!</Link></p>
                <button 
                    type='submit'
                    className='w-full bg-[#17223b] rounded-xl p-3.5 mt-4 md:mt-6 lg:mt-8 xl:mt-10'
                >
                    <span className='text-white'>Log In</span>
                </button>                    
            </form>
            <p className='text-xl text-[#636363] mt-2 md:mt-4'>Not member yet? <Link className='text-black underline' href="/signup">Sign Up</Link></p>
        </div>
    </section>
  )
}
