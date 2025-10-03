"use client"
import PurchasedAccount from '@/components/PurchasedAccount'
import MainLoader from '@/components/ui/MainLoader'
import { useContextValue } from '@/context'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export default function Page() {
  const [token, setToken] = useState('')
  const {purchasedAccount, setPurchasedAccount, isPurchasedAccount, setIsPurchasedAccount} = useContextValue()
  const [isLoading, setIsLoading] = useState(true)

  const getPurchasedAccount = () => {
    const endpoint = `${baseUrl}/v1/buyer/escrow-transactions?status=pending`
    axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res)=>{
      setPurchasedAccount(res.data.data)
      setIsPurchasedAccount(true)
    })
    .catch((err)=>{
      setPurchasedAccount([])
      console.log(err.response.message || 'An error occurred')
    })
    .finally(()=>{
      setIsLoading(false)
    })
  }


  useEffect(()=>{
    const storedToken = sessionStorage.getItem("token")
    if(storedToken){
      setToken(storedToken)
    }
  },[token])

  useEffect(()=>{
    if(token){
      if(!isPurchasedAccount){
        getPurchasedAccount()
      }
    }
  },[token])

  return (
    <section className='h-[calc(100vh-80px)] overflow-y-auto pl-4 md:pl-6 lg:pl-0 pr-4 md:pr-6 py-4 md:py-6'>
      <Toaster />
      <h1 className='text-center font-semibold mb-3 text-2xl'>My Purchase</h1>
      <p className='text-[#626262] text-center mb-5 md:mb-5 lg:mb-7 text-xl'>All your purchase are displayed here</p>
      <div className={`py-6 px-4 md:px-6 bg-white rounded-lg min-h-[300px] ${purchasedAccount.length === 0 ? "flex justify-center items-center": ""}`}>
        {
          isLoading ?
          <MainLoader />
          :
          purchasedAccount.length > 0
          ?
          <div className='space-y-3'>
          {
            purchasedAccount.map((account)=>(
              <PurchasedAccount
                id={account._id}
                key={account._id}
                desc={account.serviceDescription}
                sellerName={account.seller.fullName}
                sellerPic={account.seller.profileImage}
              />
            ))
          }

        </div>
        :
        <p className='text-[#626262] text-xl font-semibold'>No Account Purchased</p>        
        }
      </div>
    </section>
  )
}
