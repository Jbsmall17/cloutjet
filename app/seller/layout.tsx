"use client"
import Cart from "@/components/Cart";
import SellerHeader from "@/components/SellerHeader";
import SellerNavbar from "@/components/SellerNavbar";
import { useContextValue } from "@/context";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()
  const [token, setToken] = useState("")
  const {isCartOpen, totalWallet,setTotalWallet} = useContextValue()

  useEffect(()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      setToken(token)
    }else{
      router.push("/login")
    }
  }, [])

  useEffect(()=>{
    const balance = sessionStorage.getItem("balance")
    if(balance && totalWallet == 0){
      setTotalWallet(Number(balance))
    }
  },[totalWallet])

  if(!token){
    return null
  }


  return (
    <main className="lg:h-screen overflow-y-hidden flex flex-col">
      {
        isCartOpen
        &&
        <Cart />
      }
      <SellerHeader 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <section className="flex-1 flex flex-col relative pt-4 lg:pt-6 max-screen-w-2xl bg-[#eeeeee]">
        {/* <section className="mb-4 lg:mb-6 text-white rounded-lg mx-[2%] relative bg-[linear-gradient(to_right,#172238_55%,#ffc200)] py-4 px-4 md:px-6 lg:px-8">
          <p className="text-xl text-uppercase">HEY {user?.fullName.toLocaleUpperCase()},</p>
          <p className="text-base">Lets get you want you deserve!</p>
          <Image
            className="absolute right-4 top-0 h-full"
            src="/pattern2.svg"
            alt="pattern icon"
            width={75}
            height={40}
          />
        </section> */}
        <section className="ml-[2%] flex-1 flex flex-col lg:flex-row gap-4">
          <SellerNavbar 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          {children}
        </section>
      </section>
    </main>
  );
}
