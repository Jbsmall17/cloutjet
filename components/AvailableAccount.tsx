"use client"
import { account } from '@/context'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Account from './Account'
import Link from 'next/link'

const endpoint = process.env.NEXT_PUBLIC_API_URL

export default function AvailableAccount() {
    const [accounts, setAccounts] = useState<account[]>([])

    const getAvailableAccounts = () =>{
        axios.get(`${endpoint}/v1/marketPlace`)
        .then((res)=>{
            setAccounts([...res.data.data.results])
        })
        .catch(()=>{
            setAccounts([])
        })
    }

    console.log(accounts)
    useEffect(()=>{
        getAvailableAccounts()
    },[])
  return (
    <section className="py-6 md:py-8 lg:py-10">
        <p className="my-3 md:my-4 lg:my-5 xl:my-6 text-center text-xl md:text-2xl lg:text-3xl font-semibold">Available  Account</p>
        <p className="mb-4 md:mb-6 lg:mb-8 lg:mb-10 text-center font-semibold text-xl">Check out Available accounts with their individual details </p>
        {
            accounts.length === 0 ? (
                <div className='flex justify-center items-center min-h-[200px] border border-[#51596c] rounded-md'>
                    <p className='text-xl'>No Account Available</p>
                </div>
            )
            : (
                <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
                    {
                        accounts.map((account)=>(
                            <Account
                                key={account._id}
                                image={account.logo}
                                title={account.countryOfCreation}
                                desc={account.description}
                            />
                        ))
                    }
                </div>
           )
        }
        <div className="flex flex-row justify-end mt-4 md:mt-6 lg:mt-8">
            <Link href='/marketplace' className="py-2 px-8 rounded-md text-white bg-[#1d1c1c]">View all</Link>
        </div>
    </section>
  )
}
