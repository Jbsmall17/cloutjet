"use client"
import MainLoader from '@/components/ui/MainLoader'
import { useContextValue } from '@/context'
import axios from 'axios'
import { Clipboard, Check } from 'lucide-react'
import React, { useEffect, useState } from 'react'


export default function Page() {
    const {refferalObj, setRefferalObj} = useContextValue()
    const [isCopied, setIsCopied] = useState(false)
    const [token, setToken] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    
    const copyText =(text: string) => {
        navigator.clipboard.writeText(text)
        .then(()=>{
            setIsCopied(true)
            setTimeout(()=>{
                setIsCopied(false)
            },2000)
        })
        .catch((err)=>{
            setIsCopied(false)
            console.log(err)
        })
    }

    const getRefferalCode = () => {
        const endpoint = "https://cloud-jet-production.up.railway.app/v1/auth/referralCode"
        axios.get(endpoint,{
            headers: {
                Authorization: `Bearer ${token}`
            }   
        })
        .then((response) => {
            setRefferalObj({
                referralCode: response.data.data.referralCode,
                numberOfReferrals: response.data.data.numberOfReferrals,
                totalCoinEarnings: response.data.data.totalCoinEarnings
            })
        })
        .catch(()=>{
            setRefferalObj({
                referralCode: "",
                numberOfReferrals: 0,
                totalCoinEarnings: ""
            })
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    useEffect(()=>{
        const storedToken = sessionStorage.getItem("token")
        if (storedToken) {
            setToken(storedToken)
        }
    },[])

    useEffect(()=>{
        if (token) {
            if(refferalObj.referralCode == ""){
                getRefferalCode()
            }
        }
    },[token])

  return (
    <div className={`h-full`}>
        {
            isLoading
            ?
            <div className={`h-full ${isLoading ? "flex justify-center items-center" : "block"}`}>
                <MainLoader />
            </div>
       :
    <section className='bg-white py-4 md:py-6 px-4 md:px-6 rounded-xl'>
        <p className='text-2xl font-semibold text-center'>Refer and Earn</p>
        <div className='flex justify-center items-center my-4 md:my-6'>
            <img 
                src="/referral-image.svg" 
                alt="Referral Icon" 
            />
        </div>
        <p className='text-xl font-semibold mb-4 text-center'>Get 50 Cloutjet coins with each referral!</p>
        <p className='text-black text-center text-sm text-[#6666663 mb-2'>Get 50 coins whenever your referral code is used</p>
        <div className='mb-4 mx-4 md:mx-6 border border-black rounded-lg px-4 md:px-6 py-2.5 flex flex-row justify-between items-center'>
            <p><span className='text-[#666666]'>Referral code:</span><span className='ml-4 font-semibold'>{refferalObj.referralCode}</span></p>
            <div 
                onClick={() => copyText(refferalObj.referralCode)} 
                title='copy' 
                className='flex flex-row items-center cursor-pointer'
            >
                {
                    !isCopied
                    ?
                    <>
                        <Clipboard className='size-4 mr-2' />
                        <p className='font-semibold'>Copy</p>
                    </>
                    :
                    <>
                        <Check className='size-4 mr-2' />
                        <p className='font-semibold'>Copied</p>
                    </>
                }
            </div>
        </div>
        <div className='flex flex-row justify-center items-center mb-4'>
            <button 
                onClick={() => copyText(refferalObj.referralCode)}
                title={isCopied ? "Copied" : "Copy"} className='cursor-pointer text-white py-2 px-6 rounded-md bg-[#17233b]'
                >
                    Share
                </button>
        </div>
        <div className='p-4 bg-[#f5f5f5] rounded-lg'>
            <p className='text-xl font-semibold mb-4 lg:mb-6'>Refferal Record</p>
            <div className='flex flex-row items-center gap-4'>
                <p className='text-[#4a4a4a]'>No. Referrals:</p>
                <p>{refferalObj.numberOfReferrals}</p>
            </div>
            <div className='flex flex-row items-center gap-4 mt-2'>
                <p className='text-[#4a4a4a]'>Total earnings:</p>
                <p>{refferalObj.totalCoinEarnings}</p>
            </div>
        </div>
    </section>
     }
    </div>
  )
}
