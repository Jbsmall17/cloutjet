import { useContextValue } from '@/context'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import AuthComp from './AuthComp'
import { InputOTP, InputOTPGroup, InputOTPSlot } from './ui/input-otp'
import OtpTimer from './OtpTimer'

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export default function InfluencerVerificationComp() {
    const {setUser} = useContextValue()
    const router = useRouter()
    const user = sessionStorage.getItem("user")
    const [value, setValue] = React.useState("")
    const [isLoading,setIsLoading] = React.useState(false)
  
    const verifyUser = () =>{
    if(!user) return 
    const userObj = JSON.parse(user)
    if(userObj.userId && value.length === 6){
      setIsLoading(true)
      axios.post(`${baseUrl}/v1/auth/verify-email/${userObj.userId}`,
        {
          otp: value
        }
      ).then((response)=>{
        sessionStorage.setItem("token", response.data.data.token)
        sessionStorage.setItem("userObj",JSON.stringify(response.data.data.user))
        setUser({
          ...response.data.data.user
        })
        router.push("/influencer")
      }).catch((err)=>{
        toast.error(err.response.data.message || "Invalid or expired OTP.")
      }).finally(()=>{
        setIsLoading(false)
      })
    }
  }

    const resendOTP = () => {
    if(user){
      const userObj = JSON.parse(user)
      if(userObj.userId){
        axios.post(`${baseUrl}/v1/auth/resend-otp/${userObj.userId}`, {})
        .then(()=>{})
        .catch(()=>{})
      }
    }
  }

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
              value={value}
              onChange={(value)=>setValue(value)}
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
            onClick={verifyUser}
            disabled={isLoading}
            className={`hover:opacity-80 w-full bg-[#17223b] rounded-xl p-2 mt-4 md:mt-6 lg:mt-8 xl:mt-10 ${isLoading ? "cursor-not-allowed opacity-50":"cursor-pointer"}`}
          >

            <span className='text-white text-xl'>
              {
                isLoading
                ? 'verifying..'
                : "confirm"
              }
              </span> 
          </button>
          <p className='text-center text-xl text-[#636363] mt-2 md:mt-4'>
            Didn&apos;t receive the code? 
            <OtpTimer 
              initialTime={60} 
              resendOtp={resendOTP}
              />
            </p>
        </div>
    </section>
  )
}
