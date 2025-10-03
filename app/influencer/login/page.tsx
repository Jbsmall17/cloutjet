"use client";

import AuthComp from "@/components/AuthComp";
// import { useContextValue } from "@/context";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";

type LoginInput = {
  password: string;
  email: string;
};

// const baseUrl = process.env.NEXT_PUBLIC_API_URL

export default function Page() {
//   const { setUser } = useContextValue();
  // const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>();

  const onSubmit: SubmitHandler<LoginInput> = (data) => {
    console.log(data);
    setIsLoading(true);
  };

  return (
    <section className="h-screen flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 xl:gap-12 max-w-screen-2xl mx-auto px-[5%] 2xl:px-0 py-4 sm:py-6 lg:py-8 xl:py-10">
      <Toaster />
      <AuthComp image="/login-image.svg" textVisibility={true} />
      <div className="flex-1 lg:flex-[1.25]">
        <div className="flex flex-row items-center justify-end mb-3 md:mb-4 lg:mb-6">
          <img
            src="/cloutjet-removebg.png"
            alt="Cloutjet Logo"
            className="w-[64px] h-[64px] object-contain"
          />
        </div>
        <p className="text-xl md:text-2xl font-semibold mb-2">Welcome Back!</p>
        <p className="text-base md:text-xl mb-2 md:mb-3 lg:mb-5">
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
            } rounded-md p-2 w-full mb-4`}
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
              } rounded-md p-2 w-full mb-2`}
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
            className={`w-full bg-[#17223b] hover:opacity-80 rounded-xl p-2 mt-4 lg:mt-6 xl:mt-8 ${
              isLoading ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            }`}
          >
            <span className="text-white">
              {isLoading ? "Log In..." : "Log In"}
            </span>
          </button>
        </form>
        <p className="text-base text-[#636363] mt-2">
          Not member yet?{" "}
          <Link className="text-black underline" href="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}
