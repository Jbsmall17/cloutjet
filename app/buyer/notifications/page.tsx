import React from 'react'

export default function page() {
  return (
    <section className='flex flex-col pr-4 md:pr-6 mb-4 md:mb-6 overflow-auto h-full'>
        <h1 className='text-center font-semibold mb-3 text-2xl'>Notifications</h1>
        <p className='text-[#626262] text-center mb-5 md:mb-5 lg:mb-7 text-xl'>All notifications will be displayed here</p>    
        <div className='md:pr-4 lg:py-6 px-4 md:px-6 bg-white flex-1 flex justify-center items-center'>
            <div>
                <img src="/notifications.svg" alt="No notifications" className='w-24 h-24 mx-auto mb-4' />
                <p className='font-semibold text-xl'>No Notifications</p>
            </div>
        </div>
    </section>
  )
}
