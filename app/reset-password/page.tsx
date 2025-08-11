"use client"
import AuthComp from '@/components/AuthComp'
import { Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useForm, SubmitHandler } from "react-hook-form";

type ResetInput = {
  newPassword: string;
  email: string;
};

export default function Page() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading,] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ResetInput>();

  const onSubmit: SubmitHandler<ResetInput> = (data) => {
    console.log(data)
  }

  return (
    <section className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 xl:gap-12 max-w-screen-2xl mx-auto px-[5%] 2xl:px-0 py-4 sm:py-6 lg:py-8 xl:py-10">
      <Toaster />
      <AuthComp image="/login-image.svg" textVisibility={true} />
      <div className="flex-1 lg:flex-[1.25]">
        <div className="flex flex-row items-center justify-end mb-4 md:mb-6 lg:mb-8">
          <img src="/cloutjet-logo.svg" alt="Cloutjet Logo" />
        </div>
        <p className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Reset Password
        </p>
        <p className="text-base md:text-xl mb-3 md:mb-5 lg:mb-7">
          change password to a new word
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
              {...register("newPassword", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
              className={`block border ${
                errors.newPassword ? "border-red-500" : "border-gray-300"
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
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-[#17223b] hover:opacity-80 rounded-xl p-2.5 mt-4 md:mt-6 lg:mt-8 xl:mt-10 ${isLoading ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
          >
            <span className="text-white">
              {
                isLoading ? "Resetting..." : "Reset"
              }
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}
