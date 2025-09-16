"use client"
import Cart from '@/components/Cart'
import Navbar2 from '@/components/Navbar2'
import { useContextValue } from '@/context'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { ReactNode, useEffect, useState } from 'react'

export default function Layout({children}: {children: ReactNode}) {
  const router = useRouter()
  const {isCartOpen, setTotalWallet} = useContextValue()
  const [token, setToken] = useState("")  


    const getWallet = (token: string) =>{
    const endpoint = "https://cloud-jet-production.up.railway.app/v1/wallet/wallet-balance"
    axios.get(endpoint,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res)=>{
      setTotalWallet(res.data.walletBalance)
    })
    .catch(()=>{
      setTotalWallet(0)

    })
  }

  useEffect(()=>{
    const token = sessionStorage.getItem('token')
    if(token){
      setToken(token)
      getWallet(token)
    }
  },[])

  useEffect(()=>{
    const token = sessionStorage.getItem("token")
    if(token) return
      router.push("/login") 
  },[])


  if(!token){
    return null
  }

  return (
    <main>
        {
            isCartOpen
            &&
            <Cart />
        }
      <Navbar2 />
      {children} 
    </main>
  )
}
