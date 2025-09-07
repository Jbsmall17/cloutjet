"use client"
import Cart from '@/components/Cart'
import Navbar2 from '@/components/Navbar2'
import { useContextValue } from '@/context'
import React, { ReactNode } from 'react'

export default function Layout({children}: {children: ReactNode}) {
    const {isCartOpen} = useContextValue()
  return (
    <main>
        {
            isCartOpen
            &&
            <Cart />
        }
      <Navbar2 />
      {children} 
    </main>
  )
}
