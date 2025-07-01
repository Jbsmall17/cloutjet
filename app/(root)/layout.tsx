import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import React from 'react'

export default function layout({children}:{children: React.ReactNode}) {
  return (
    <main>
        <div className='bg-[#8596ba]'>
            <Navbar />
        </div>
        {children}
        <Footer />
        <div className='bg-[#17223b]'>
          <div className='text-base md:text-xl max-w-screen-xl mx-auto px-[5%] xl:px-0 py-2 md:py-4 lg:py-6 flex flex-row items-center justify-between text-white dark:text-white'>
            <p>Privacy policy</p>
            <p>© 2025 All rights reserved.</p>
          </div>
        </div>
    </main>
  )
}
