"use client"
import BuyerHeader from '@/components/BuyerHeader'
import BuyerSidebar from '@/components/BuyerSidebar'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Layout({children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(false)
  const [token, setToken] = useState("")

  useEffect(()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      setToken(token)
    }else{
      router.push("/login")
    }
  },[])  

  if(!token){
    return null
  }

  return (
    <div className='overflow-hidden bg-[#f4f4f4] flex flex-col'>
        <BuyerHeader 
          isOpen={isOpen} 
          setIsOpen={setIsOpen}
        />
        <main className='relative flex flex-col lg:flex-row gap-4 md:gap-6 maincontent'>
          <BuyerSidebar 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          <section className='flex-1 pl-4 md:pl-6 lg:pl-0 pr-4 md:pr-6 py-4 md:py-6 overflow-y-auto h-full'>
            {children}
          </section>
        </main>
    </div>
  )
}
