"use client"
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { InfluencerNavbar } from './influencer-navbar'
import { InfluencerHeader } from './influencer-header'

export default function InfluencerLayout({children}:{children : React.ReactNode}) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    // const router = useRouter()
    const pathname = usePathname()
    return (
    <div className='min-h-screen bg-background'>
      <InfluencerNavbar pathname={pathname} sidebarOpen={sidebarOpen} onSidebarClose={() => setSidebarOpen(false)} />
      <div className='lg:pl-64'>
        <InfluencerHeader onMenuClick={() => setSidebarOpen(true)} />

        <main className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
