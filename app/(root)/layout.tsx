import Navbar from '@/component/Navbar'
import React from 'react'

export default function layout({children}:{children: React.ReactNode}) {
  return (
    <main>
        <div className='bg-[#8596ba]'>
            <Navbar />
        </div>
        {children}
    </main>
  )
}
