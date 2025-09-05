"use client"
import AuthComp from '@/components/AuthComp'
import { Eye, EyeOff } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { useForm, SubmitHandler } from "react-hook-form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import OtpTimer from '@/components/OtpTimer'
import axios from 'axios'
import Link from 'next/link'

type ResetInput = {
  password: string
  cPassword: string;
};

type verifyEmail = {
  email: string
}

export default function Page() {
  const [step,setStep] = useState(1)
  const [userId,setUserId] = useState("")

  const VerifyEmailComp = () => {
    const [isLoading, setIsLoading] = useState(false) 
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<verifyEmail>();

    const onSubmit: SubmitHandler<verifyEmail> = (data) => {
      const endpoint = 'https://cloud-jet-production.up.railway.app/v1/auth/forgot-password'
      setIsLoading(true)
      axios.post(endpoint,{
        email: data.email
      })
      .then((response)=>{
        sessionStorage.setItem("userId", response.data.data.userId)
        setStep(2)
        setUserId(response.data.data.userId)
      })
      .catch((err)=>{
        toast.error(err.response ? err.response.data.message : "an error occurred")
      })
      .finally(()=>{
        setIsLoading(false)
      })
    }

    return (
      <>
        <p className="text-base md:text-xl mb-3 md:mb-5 lg:mb-7">Enter a registered Email address</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="text-xl font-semibold mb-2 block" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              }
            })}
            className={`block border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md p-2 w-full mb-3`}
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`hover:opacity-80 text-white w-full bg-[#17223b] rounded-md p-2 mt-4 md:mt-6 lg:mt-8 xl:mt-10 ${isLoading ? "cursor-not-allowed opacity-50":"cursor-pointer"}`}
          >
            {
              !isLoading
              ? <span>Continue</span>
              : 
              <span>Loading...</span>
            }
          </button>
        </form>
      </>
    )
  } 

  const VerifyOtpComp = () => {
    const [value,setValue] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    
    const handleVerify = () =>{
      const endpoint = `https://cloud-jet-production.up.railway.app/v1/auth/verify-reset-otp/${userId}`
      if(value.length < 6) return
      setIsLoading(true)
      axios.post(endpoint,{
        otp: value
      })
      .then(()=>{
        setStep(3)
      })
      .catch((err)=>{
        toast.error(err.response ? err.response.data.message : "an error occurred")
      })
      .finally(()=>{
        setIsLoading(false)
      })
    }

    const resendOTP = () => {
      if(userId){
        axios.post(`https://cloud-jet-production.up.railway.app/v1/auth/resend-otp/${userId}`, {})
        .then(()=>{})
        .catch(()=>{})
    }
    }

    return (
      <>
        <p className="text-base md:text-xl mb-3 md:mb-5 lg:mb-7">
          Enter OTP sent to your mail
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
          disabled={isLoading}
          onClick={handleVerify}
          className={`text-white hover:opacity-80 w-full bg-[#17223b] rounded-xl p-2 mt-4 md:mt-6 lg:mt-8 xl:mt-10 ${isLoading ? "cursor-not-allowed opacity-50":"cursor-pointer"}`}
        >
          {
            isLoading
            ? "Loading..."
            : "Verify"
          }
        </button>
          <p className='text-center text-xl text-[#636363] mt-2 md:mt-4'>
            Didn&apos;t receive the code?
            <OtpTimer 
              initialTime={60} 
              resendOtp={resendOTP}  
            />
          </p>
      </>
    )
  }

  const SetPasswordComp = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isCPasswordVisible, setIsCPasswordVisible] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    
    const {
      register,
      handleSubmit,
      formState: { errors },
      watch
    } = useForm<ResetInput>();

    const password = watch("password")

    const onSubmit: SubmitHandler<ResetInput> = (data) => {
      const endpoint = `https://cloud-jet-production.up.railway.app/v1/auth/reset-password/${userId}`
      setIsLoading(true)
      axios.post(endpoint, {
        newPassword: data.password
      })
      .then((response)=>{
        toast.success(response.data.message)
      })
      .catch((err)=>{
        toast.error(err.response ? err.response.data.message : "an error occurred")
      })
      .finally(()=>{
        setIsLoading(false)
      })
    }

    return (
      <>
        <p className="text-base md:text-xl mb-3 md:mb-5 lg:mb-7">
          change password to a new one
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label
            htmlFor="password"
            className="block mb-2 font-semibold text-xl"
          >
            New Password
          </label>
          <div className="relative mb-3 w-full">
            <input
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="new password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
              className={`block border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md p-4 w-full mb-4`}
            />
            <EyeOff
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className={`${
                !isPasswordVisible
                  ? "absolute top-[50%] right-2 -translate-y-[50%] cursor-pointer"
                  : "hidden"
              }`}
            />
            <Eye
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className={`${
                !isPasswordVisible
                  ? "hidden"
                  : "cursor-pointer absolute top-[50%] right-2 -translate-y-[50%]"
              }`}
            />
          </div>
          <label
            htmlFor="cpassword"
            className="block mb-2 font-semibold text-xl"
          >
            Confirm Password
          </label>
          <div className="relative mb-3 w-full">
            <input
              id="cpassword"
              type={isCPasswordVisible ? "text" : "password"}
              placeholder="confirm password"
              {...register("cPassword", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                validate: (value) => value === password || "password must be equal" 
              })}
              className={`block border ${
                errors.cPassword ? "border-red-500" : "border-gray-300"
              } rounded-md p-4 w-full mb-4`}
            />
            <EyeOff
              onClick={() => setIsCPasswordVisible(!isCPasswordVisible)}
              className={`${
                !isCPasswordVisible
                  ? "absolute top-[50%] right-2 -translate-y-[50%] cursor-pointer"
                  : "hidden"
              }`}
            />
            <Eye
              onClick={() => setIsCPasswordVisible(!isCPasswordVisible)}
              className={`${
                !isCPasswordVisible
                  ? "hidden"
                  : "cursor-pointer absolute top-[50%] right-2 -translate-y-[50%]"
              }`}
            />
          </div>
          {
            errors.cPassword
            &&
            <p className='text-red-500 text-sm'>{errors.cPassword?.message}</p>
          }
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-[#17223b] hover:opacity-80 rounded-xl p-2.5 mt-4 md:mt-6 lg:mt-8 xl:mt-10 ${isLoading ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
          >
            <span className="text-white">
              {
                isLoading ? "Loading..." : "Reset"
              }
            </span>
          </button>
        </form>
      </>
    )
  }

  useEffect(()=>{
      const userId = sessionStorage.getItem('userId')
      if(userId){
        setUserId(userId)
      }
    },[])

  return (
    <section className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 xl:gap-12 max-w-screen-2xl mx-auto px-[5%] 2xl:px-0 py-4 sm:py-6 lg:py-8 xl:py-10">
      <Toaster />
      <AuthComp image="/login-image.svg" textVisibility={true} />
      <div className="flex-1 lg:flex-[1.25]">
        <div className="flex flex-row items-center justify-end mb-4 md:mb-6 lg:mb-8">
          <Link href="/login">
            <img 
              src="/cloutjet-removebg.png" 
              alt="Cloutjet Logo" 
              className="w-[80px] h-[80px] object-contain"
            />
          </Link>
        </div>
        <p className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Reset Password
        </p>
        {
          step == 1
          ? <VerifyEmailComp />
          : step == 2
          ? <VerifyOtpComp />
          : <SetPasswordComp />
        }
      </div>
    </section>
  )
}
