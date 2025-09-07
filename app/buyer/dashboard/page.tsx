"use client"
import BuyerAccount from '@/components/BuyerAccount'
import MainLoader from '@/components/ui/MainLoader'
import { useContextValue } from '@/context'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function Page() {
  const [token, setToken] = useState('')
  const {purchasedAccount, setPurchasedAccount} = useContextValue()
  const [isLoading, setIsLoading] = useState(true)

  const getListedAccount = () => {
    const endpoint = 'https://cloud-jet-production.up.railway.app/v1/buyer/escrow-transactions?status=completed'
    axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res)=>{
      setPurchasedAccount(res.data.data)
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
      getListedAccount()
    }
  },[token])

  return (
    <section className='h-[calc(100vh-80px)] overflow-y-auto pl-4 md:pl-6 lg:pl-0 pr-4 md:pr-6 py-4 md:py-6'>
      <h1 className='text-center font-semibold mb-3 text-2xl'>My Purchase</h1>
      <p className='text-[#626262] text-center mb-5 md:mb-5 lg:mb-7 text-xl'>All your purchase are displayed here</p>
      <div className={`py-6 px-4 md:px-6 bg-white rounded-lg min-h-[300px] ${purchasedAccount.length === 0 ? "flex justify-center items-center": ""}`}>
        {
          isLoading ?
          <MainLoader />
          :
          purchasedAccount.length > 0
          ?
          <>
          {
            purchasedAccount.map(({account})=>(
              <BuyerAccount
                key={account._id}
                social={account.logo}
                country={account.countryOfCreation}
                price={account.preferredPrice}
                desc={account.description}
                profilePic='/profilepic.svg'
                userName="John Doe"
                showPreview={false}
              />
            ))
          }
        </>
        :
        <p className='text-[#626262] text-xl font-semibold'>No Account Purchased</p>        
        }
      </div>
    </section>
  )
}
