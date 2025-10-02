import Image from 'next/image'
import React from 'react'
import { Input } from './ui/input'
import { ArrowRight, ChevronDown, Menu, User, Wallet, X } from 'lucide-react'
import { useContextValue } from '@/context'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface sellerHeaderProps {
    isOpen : boolean,
    setIsOpen : (isOpen : boolean) => void
}

export default function SellerHeader({isOpen, setIsOpen}:sellerHeaderProps) {
    // const router = useRouter()
    const {user, selectedAccount, setIsCartOpen,totalWallet} = useContextValue()

    const formatWalletBalance = (wallet: number) =>{
        return `(NGN) ${wallet.toLocaleString()}`
    }
    // const handleNavigation = (path: string) => {
    //     router.push(path)
    // }
    const balance = formatWalletBalance(totalWallet)
    return (
    <header className='bg-white mb py-3 lg:py-4 max-screen-w-2xl flex flex-row px-[5%] justify-between'>
        <div className='flex flex-row items-center gap-4'>
            {
                !isOpen
                ? <Menu className='block lg:hidden' onClick={()=>setIsOpen(!isOpen)}/>
                : <X className='block lg:hidden' onClick={()=>setIsOpen(!isOpen)} />
            }
            <Link href='/marketplace'>
            <Image
                alt='clout jet logo'
                src="/cloutjet-removebg.png"
                width={40}
                height={40}
            />
            </Link>
            <Input 
                placeholder='Search action'
                className='hidden sm:block  w-[300px] border-[#f8a11e] focus:border-[#f8a11e] outline-none rounded-lg'
            />
        </div>
        <div className='flex flex-row gap-4 items-center md:gap-6'>
            <div className='p-2 flex flex-row items-center gap-2 bg-[#f8a11e] rounded-md text-black'>
                <Wallet />
                <p className='hidden lg:block'>{balance}</p>
                <ChevronDown className='hidden lg:block size-4' />
            </div>
            <div className='flex flex-row gap-2 items-end lg:items-center'>
                {
                    user.profileImage !== ""
                    ?<Image
                        src={user.profileImage}
                        className='h-[32px] md:h-[40px] w-[32px] md:w-[40px] rounded-full object-cover'
                        alt="profile-image"
                        width={32}
                        height={32}
                    />
                    : <User className='size-6'/>
                }
                <div className='hidden lg:block space-y-1'>
                    <p className='text-base capitalize'>{user?.fullName}</p>
                    <Link href="/buyer/account-settings">
                        <p className='text-sm text-[#f8a11e]'>
                            Your Profile <ArrowRight className='ml-2 inline size-4' /> 
                        </p>
                    </Link>
                </div>
                <div 
                    onClick={()=>{
                        setIsCartOpen(true)
                    }}
                    className='relative cursor-pointer'    
                >
                    <p className="absolute top-0 right-0 -translate-y-[50%] translate-x-[50%] size-4 text-black bg-[#f6a21b] text-xs font-semibold rounded-full flex justify-center itmes-center">
                        {selectedAccount.length}
                    </p>
                    <img
                        src="/cart.svg"
                        alt="Cart Icon"
                        className="size-6"
                        width={16}
                        height={16}
                    />
                </div>
            </div>
        </div>
    </header>
  )
}
