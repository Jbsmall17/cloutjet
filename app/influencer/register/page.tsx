"use client"
import AuthComp from '@/components/AuthComp'
import axios from 'axios';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast'

type SignUpInput = {
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export default function Page() {
   const {
       register,
       handleSubmit,
       formState: { errors },
       watch,
     } = useForm<SignUpInput>(); 
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const password = watch("password");
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
  
     const onSubmit : SubmitHandler<SignUpInput> = (data) => {
        console.log(data)
        setIsLoading(true)
        const endpoint = `${baseUrl}/v1/auth/signup/influencer`
        axios.post(endpoint,{
            fullName: data.fullName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            password: data.password
        })
        .then((res)=>{
            if(res.status === 201){
                sessionStorage.setItem("user", JSON.stringify(res.data.data))
                router.push("/influencer/verification")
            }
        })
        .catch((error)=>{
            toast.error(error.response.data.message || "unable to signup")
        }).finally(()=>{
            setIsLoading(false)
        })

     }

    return (
    <section className="h-screen flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 xl:gap-12 max-w-screen-2xl mx-auto px-[5%] 2xl:px-0 py-4 sm:py-6 lg:py-8 xl:py-10">
        <Toaster />
        <AuthComp image="/login-image.svg" textVisibility={true} /> 
      <div className="overflow-y-auto flex-1 lg:flex-[1.25]">
        <div className="flex flex-row items-center justify-between">
          <div className="mb-3 md:mb-4 ">
            <p className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">
              Welcome to Clout jet
            </p>
            <p className="text-base">Create an account with us</p>
          </div>
          <img 
            src="/cloutjet-removebg.png" 
            alt="Cloudjet Logo"
            className="w-[64px] h-[64px] object-contain"
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label
            className="text-xl font-semibold mb-2 block"
            htmlFor="fullname"
          >
            Full Name
          </label>
          <input
            id="fullname"
            type="text"
            {...register("fullName", {
              required: "full name is required",
            })}
            placeholder="Full name"
            className={`block border ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            } rounded-md p-2 w-full mb-3`}
          />

          <label className="text-xl font-semibold mb-2 block" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phoneNumber", {
              required: "phone number is required",
            })}
            placeholder="Phone number"
            className={`block border ${
              errors.phoneNumber ? "border-red-500" : "border-gray-300"
            } rounded-md p-2 w-full mb-3`}
          />
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
              },
            })}
            className={`block border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md p-2 w-full mb-3`}
          />
          <label
            className="text-xl font-semibold mb-2 block"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative mb-3 w-full">
            <input
              id="password"
              type={showPassword ? "text" :"password"} 
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
              className={`border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-md p-2 w-full`}
            />
            <EyeOff
              onClick={() => setShowPassword(!showPassword)}
              className={`${
                !showPassword
                  ? "absolute top-[50%] right-2 -translate-y-[50%] cursor-pointer"
                  : "hidden"
              }`}
            />
            <Eye
              onClick={() => setShowPassword(!showPassword)}
              className={`${
                !showPassword
                  ? "hidden"
                  : "cursor-pointer absolute top-[50%] right-2 -translate-y-[50%]"
              }`}
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>
          )} 
          <label
            className="text-xl font-semibold mb-2 block"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <div className="relative mb-3 w-full">
          <input
            id="confirm-password"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            className={`border ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            } rounded-md p-2 w-full`}
          />
          <EyeOff
            onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
            className={`${!showConfirmPassword ? "absolute top-[50%] right-2 -translate-y-[50%] cursor-pointer" : "hidden"}`} 
          />
          <Eye
            onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
            className={`${!showConfirmPassword ? "hidden" : "absolute top-[50%] right-2 -translate-y-[50%] cursor-pointer"}`}  
          /> 
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mb-2">{errors.confirmPassword.message}</p>
          )} 
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              {...register("terms", { 
                required: "You must accept the terms and conditions" 
              })}
              className="mr-2 h-[20px] w-[20px] accent-[#17223b]"
            />
            <label className="text-base md:text-xl" htmlFor="terms">
              I agree to the{" "}
              <a
                href="#"
                className="text-[#17223b] font-semibold text-base md:text-xl"
              >
                Terms
              </a>
            </label>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm">{errors.terms.message}</p>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className={`hover:opacity-80 text-white w-full bg-[#17223b] rounded-md p-2 mt-3 md:mt-8 lg:mt-6 xl:mt-8 ${isLoading ? "cursor-not-allowed opacity-50":"cursor-pointer"}`}
          >
            {
              !isLoading
              ? <span>Register</span>
              : 
              <span>Registering</span>
            }
          </button>
        </form>
        <p className="text-center text-sm md:text-base text-[#878787] mt-2">
          Already have an Account?{" "}
          <Link href="/influencer/login" className="text-black">
            Log In
          </Link>
        </p>
      </div>
    </section>
  )
}
