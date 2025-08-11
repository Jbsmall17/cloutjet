"use client"
import AuthComp from '@/components/AuthComp'
import React, { Suspense } from 'react'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from "@/components/ui/input-otp"
import axios from 'axios'
import {toast, Toaster} from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import  OtpTimer  from '@/components/OtpTimer'
import dynamic from 'next/dynamic'


const VerifiactionComponentWithNoSSR = dynamic(
  () => import('../../components/VerificationComp'),
  { ssr: false }
)

function VerificationFallback(){
  return (
    <section className='h-screen flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 xl:gap-12 max-w-screen-2xl mx-auto px-[5%] 2xl:px-0 py-4 md:py-6 lg:py-8 xl:py-10'>
        <Toaster />
        <AuthComp 
          image='/verification-image.svg'
          textVisibility={false}
        />
        <div className='flex-1 lg:flex-[1.25]'>
          <p className='mt-4 md:mt-6 lg:mt-8 xl:mt-10 text-2xl md:text-3xl font-semibold'>Please verify your email address</p>
          <p className='text-xl md:text-2xl text-[#808080] my-2 md:my-4 lg:my-6'>
            Enter the six digit code we sent to <span className='text-black font-semibold'>mail</span> to verify your account. Kindly check your email
          </p>
          <div className='flex items-center justify-center gap-4 md:gap-6 lg:gap-8'>
            <InputOTP
              maxLength={6}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <button 
            className={`hover:opacity-80 w-full bg-[#17223b] rounded-xl p-2 mt-4 md:mt-6 lg:mt-8 xl:mt-10 cursor-pointer`}
          >
            <span className='text-white text-xl'>confirm</span> 
          </button>
          <p className='text-center text-xl text-[#636363] mt-2 md:mt-4'>Didn’t receive the code? 
            <OtpTimer initialTime={60} />
            </p>
        </div>
    </section>
  )
}



export default function Page(){


  return (
    <Suspense fallback={<VerificationFallback />}>
      <VerifiactionComponentWithNoSSR />
    </Suspense>
  )
}