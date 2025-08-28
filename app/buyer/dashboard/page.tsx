"use client"
import BuyerAccount from '@/components/BuyerAccount'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const endpoint = 'https://cloud-jet-production.up.railway.app/v1/buyer/listings'

export default function Page() {
  const [token, setToken] = useState('')
  const [listedAccount, setListedAccount] = useState([])
  const [, setIsLoading] = useState(true)

  const getListedAccount = () => {
    axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res)=>{
      setListedAccount(res.data.data.results)
      console.log(res.data)
    })
    .catch((err)=>{
      setListedAccount([])
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
    <section className='md:pr-4 lg:pr-6 mb-4 md:mb-6 overflow-auto h-full'>
      <h1 className='text-center font-semibold mb-3 text-2xl'>My Purchase</h1>
      <p className='text-[#626262] text-center mb-5 md:mb-5 lg:mb-7 text-xl'>All your purchase are displayed here</p>
      <div className={`py-6 px-4 md:px-6 bg-white rounded-lg min-h-[300px] ${listedAccount.length === 0 ? "flex justify-center items-center": ""}`}>
        {
          listedAccount.length > 0
          ?
          <>
        <BuyerAccount
          social="/facebook2.svg"
          country="Germany FB"
          flag="/flag-germany.svg"
          price="$100"
          desc="This is a Facebook account with 10k followers and 5k likes on posts. It is verified and has no restrictions."
          profilePic='/profilepic.svg'
          userName="John Doe"
        />
        <BuyerAccount
          social="/facebook2.svg"
          country="Germany FB"
          flag="/flag-germany.svg"
          price="$100"
          desc="This is a Facebook account with 10k followers and 5k likes on posts. It is verified and has no restrictions."
          profilePic='/profilepic.svg'
          userName="John Doe"
        />
        <BuyerAccount
          social="/facebook2.svg"
          country="Germany FB"
          flag="/flag-germany.svg"
          price="$100"
          desc="This is a Facebook account with 10k followers and 5k likes on posts. It is verified and has no restrictions."
          profilePic='/profilepic.svg'
          userName="John Doe"
        />
        </>
        :
        <p className='text-[#626262] text-xl font-semibold'>No Account Listed</p>        
        }
      </div>
    </section>
  )
}
