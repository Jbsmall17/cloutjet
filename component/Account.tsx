import React from 'react'

interface accountPropsType{
  image: string;
  title: string;
  desc: string;
  flag?: string
}

export default function Account({image,title,desc,flag}: accountPropsType) {
  return (
    <div  className='flex flex-row items-center py-3 md:py-6 px-4 md:px-8 rounded-xl border border-[#51596c]'>
        <div className='flex-1 flex flex-row items-center gap-4 md:gap-6 lg:gap-8'>
        <div>
            <img src={image} />
        </div>
        <div>
            <p className='mb-2 md:mb-4 text-base md:text-2xl font-semibold flex flex-row gap-2 md:gap-4 items-center'>
              <span>{title}</span>
              {
                flag
                &&
                <img src={flag} alt="flag" />
              }
            </p>
            <p>
              <span className='text-xs md:text-base'>{desc}</span>

            </p>
        </div>
        </div>
        <button className='rounded-md py-2.5 px-6 border-2 border-[#51596c] leading-none'>View Service</button>
    </div>
  )
}
