import BuyerAccount from '@/components/BuyerAccount'
import React from 'react'

export default function page() {
  return (
    <section className='md:pr-4 lg:pr-6 mb-4 md:mb-6 overflow-auto h-full'>
      <h1 className='text-center font-semibold mb-3 text-2xl'>My Purchase</h1>
      <p className='text-[#626262] text-center mb-5 md:mb-5 lg:mb-7 text-xl'>All your purchase are displayed here</p>
      <div className='py-6 px-4 md:px-6 bg-white'>
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
      </div>
    </section>
  )
}
