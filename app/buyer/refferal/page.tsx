import { Clipboard } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <section className='bg-white py-4 md:py-6 px-4 md:px-6 h-full overflow-auto'>
        <p className='text-2xl font-semibold text-center'>Refer and Earn</p>
        <div className='flex justify-center items-center my-4 md:my-6'>
            <img 
                src="/referral-image.svg" 
                alt="Referral Icon" 
            />
        </div>
        <p className='text-xl font-semibold mb-4 text-center'>Get 50 Cloutjet coins with each referral!</p>
        <p className='text-black text-center text-sm text-[#6666663 mb-2'>Get 50 coins whenever your referral code is used</p>
        <div className='mx-4 md:mx-6 border border-black rounded-lg px-4 md:px-6 py-2.5 flex flex-row justify-between items-center'>
            <p><span className='text-[#666666]'>Referral code:</span><span className='ml-4 font-semibold'>IGC-REF45678433</span></p>
            <div className='flex flex-row items-center'>
                <Clipboard className='size-4 mr-2' />
                <p className='font-semibold'>Copy</p>
            </div>
        </div>
        <div className='flex flex-row justify-center items-center my-4'>
            <button className='text-white py-2 px-6 rounded-md bg-[#17233b]'>Share</button>
        </div>
        <div className='p-4 bg-[#f5f5f5] rounded-lg'>
            <p className='text-xl font-semibold mb-4 lg:mb-6'>Refferal Record</p>
            <div className='flex flex-row items-center gap-4'>
                <p className='text-[#4a4a4a]'>No. Referrals:</p>
                <p>20</p>
            </div>
            <div className='flex flex-row items-center gap-4 mt-2'>
                <p className='text-[#4a4a4a]'>Total earnings:</p>
                <p>10,000 coins</p>
            </div>
        </div>
    </section>
  )
}
