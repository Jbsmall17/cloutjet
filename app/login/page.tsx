"use client";
import AuthComp from "@/components/AuthComp";
import Link from "next/link";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useContextValue } from "@/context";

type LoginInput = {
  password: string;
  email: string;
};

export default function Page() {
  const {setUser} = useContextValue()
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginInput>();

  const onSubmit: SubmitHandler<LoginInput> = (data) => {
    const endpoint = "https://cloud-jet.onrender.com/v1/auth/login/user"
    setIsLoading(true)
    axios.post(endpoint,{
        email: data.email,
        password: data.password
    }).then((response)=>{
        sessionStorage.setItem("token", response.data.data.token)
        sessionStorage.setItem("userObj",JSON.stringify(response.data.data.user))
        setUser({
          ...response.data.data.user
        })
        router.push("/marketplace")
    }).catch((err)=>{
        toast.error(err.response ? err.response.data.message: "Network Fail")
    }).finally(()=>{
        setIsLoading(false)
    })

  };

  return (
    <section className="h-auto flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 xl:gap-12 max-w-screen-2xl mx-auto px-[5%] 2xl:px-0 py-4 sm:py-6 lg:py-8 xl:py-10">
      <Toaster />
      <AuthComp image="/login-image.svg" textVisibility={true} />
      <div className="flex-1 lg:flex-[1.25]">
        <div className="flex flex-row items-center justify-end mb-4 md:mb-6 lg:mb-8">
          <img 
            src="/cloutjet-removebg.png" 
            alt="Cloutjet Logo" 
            className="w-[80px] h-[80px] object-contain"
            />
        </div>
        <p className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Welcome Back!
        </p>
        <p className="text-base md:text-xl mb-3 md:mb-5 lg:mb-7">
          Let&apos;s continue from where we stopped
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email" className="block mb-2 font-semibold text-xl">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Email"
            className={`text-black block border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md p-4 w-full mb-8`}
          />
          <label
            htmlFor="password"
            className="block mb-2 font-semibold text-xl"
          >
            Password
          </label>
          <div className="relative mb-3 w-full">
            <input
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Password"
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
          <p className="text-base text-[#636363]">
            Forget your Password?{" "}
            <Link
              href="/reset-password"
              className="font-semibold text-black underline"
            >
              Reset Now!
            </Link>
          </p>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-[#17223b] hover:opacity-80 rounded-xl p-2.5 mt-4 md:mt-6 lg:mt-8 xl:mt-10 ${isLoading ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
          >
            <span className="text-white">
                {
                    isLoading ? "Log In..." : "Log In"
                }
                </span>
          </button>
        </form>
        <p className="text-xl text-[#636363] mt-2 md:mt-4">
          Not member yet?{" "}
          <Link className="text-black underline" href="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}
