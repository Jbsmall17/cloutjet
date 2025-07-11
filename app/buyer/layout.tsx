"use client"
import BuyerHeader from '@/components/BuyerHeader'
import BuyerSidebar from '@/components/BuyerSidebar'
import React from 'react'

export default function Layout({children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className='h-auto overflow-hidden bg-[#f4f4f4] flex flex-col'>
        <BuyerHeader 
          isOpen={isOpen} 
          setIsOpen={setIsOpen}
        />
        <main className='relative flex flex-col lg:flex-row gap-4 md:gap-6 overflow-auto maincontent'>
          <BuyerSidebar 
            isOpen={isOpen}
          />
          <section className='flex-1'>
            {children}
          </section>
        </main>
    </div>
  )
}
