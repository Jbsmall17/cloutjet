"use client"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { useContextValue } from '@/context'
import { formatPriceToNaira } from '@/lib/utils'
import axios from 'axios'
import { MoveLeft, ShieldCheck, Star, ThumbsUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Page() {
    const { id } = useParams()
    const [step, setStep] = useState(0)
    const [token, setToken] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const {listedAccount, setListedAccount} = useContextValue()

    const formatFollower= (followers: number) : string => {
        const noOfFollowers = followers
        let formatFollower
        if(noOfFollowers >= 1000000){
            formatFollower = `${(noOfFollowers /1000000).toFixed(1)}M`
        }else if(noOfFollowers >= 1000 && noOfFollowers < 1000000){
            formatFollower = `${(noOfFollowers / 1000).toFixed(1)}K`
        }else{
            formatFollower = `${noOfFollowers}`
        }
        return formatFollower
    }



    const getAListedAccount = () =>{
        const endpoint = `https://cloud-jet-production.up.railway.app/v1/buyer/listingById/${id}`
        setIsLoading(true)
        axios.get(endpoint, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res)=>{
            console.log(res.data.data)
            const {listingId,account,paymentSummary } = res.data.data
            setListedAccount({
                listingId,
                account: {...account},
                paymentSummary: {...paymentSummary} 
            })

        })
        .catch((err)=>{
            console.log(err.response)
            setListedAccount({
                listingId: "",
                account: {
                    _id: "",
                    platform: "",
                    niche: "",
                    logo: "",
                    description: "",
                    accountUsername: "",
                    accountAge: "",
                    preferredPrice: 0,
                    followersCount: 0,
                    engagementRate: 0,
                    countryOfCreation: "",
                    estimatedPrice: 0,
                    status: "",
                    proofScreenshotUrl: "",
                    profileLink: "",
                    twoFAEnabled: false,
                    twoFAMethod: ""
                },       
                paymentSummary : {
                    accountPrice : "",
                    serviceFee : "",
                    totalCost : ""
                }
            })
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    useEffect(()=>{
        const storedToken = sessionStorage.getItem("token")
        if(storedToken){
            setToken(storedToken)
        }
    },[])

    useEffect(()=>{
        if(token){
            // if(listedAccount.account.accountUsername === "")
            getAListedAccount()
        }
    },[token])

  return (
        step === 0
    ?(
        <div>
        {
            isLoading
            ? <div className='h-[300px] md:h-[350px] lg:h-[400px] flex justify-center items-center'>
                <div className="animate-spin h-8 w-8 border-2 border-t-transparent border-[#f7a01e] rounded-full"></div>
            </div>
            :
    <div className='flex flex-col md:flex-row gap-4 md:gap-6 md:items-start'>
        <Card className='flex-1'>
            <CardHeader>
                <div className='flex flex-col md:flex-row sm:items-start gap-4 md:gap-6'>
                    <div className='shrink-0'>
                        {
                            listedAccount.account.logo
                            ?
                            <Image
                            src={ listedAccount.account.logo}
                            alt="Account Image"
                            className='shrink-0 w-[48px] h-[48px] lg:w-[72px] lg:h-[72px] object-cover'
                            width={72}
                            height={72}
                            />
                            :
                            <div className='w-[48px] h-[48px] lg:w-[72px] lg:h-[72px] rounded-lg bg-[#8a8a8a]'></div>
                        }
                    </div>
                    <div className='space-y-2 flex-1'>
                        <CardTitle className='text-xl font-semibold'>
                            <Link target='_blank' href={listedAccount.account.profileLink}>
                             @<span>{listedAccount.account.accountUsername}</span>
                            </Link>
                        </CardTitle>
                        <CardDescription className='text-sm text-black font-medium'>
                            <p>Niche | {listedAccount.account.niche || 'N/A'} | {Number(listedAccount.account.accountAge) == 1 ? `${listedAccount.account.accountAge} year` : `${listedAccount.account.accountAge} years`}</p>
                        </CardDescription>
                        <div className='flex flex-col sm:flex-row gap-4'>
                            <div className='text-center flex-1 space-y-1'>
                               <p className='text-xl font-medium'>
                                {
                                listedAccount.account.followersCount && listedAccount.account.followersCount !== 0
                                ? formatFollower(listedAccount.account.followersCount)
                                : "N/A"
                                }
                                </p>
                               <p className='text-sm text-black'>Followers</p>
                           </div>
                           <div className='min-h-[2px] w-full sm:w-[2px] sm:min-h-[20px] bg-black'></div>
                           <div className='text-center space-y-1'>
                               <div className='flex-[1.25] flex flex-row items-center gap-1 justify-center'>
                                    <Star className='size-6 text-[#ffef5e] fill-current' />
                                    <Star className='size-6 text-[#ffef5e] fill-current' />
                                    <Star className='size-6 text-[#ffef5e] fill-current' />
                                    <Star className='size-6 text-[#8a8a8a] fill-current' />
                                    <Star className='size-6 text-[#8a8a8a] fill-current' />
                               </div>
                               <p className='text-sm text-black'>Seller&apos;s rating</p>
                           </div>
                           <div className='min-h-[2px] w-full sm:w-[2px] sm:min-h-[20px] bg-black'></div>
                           <div className='flex-1 text-center'>
                               <p className='text-xl font-medium'>{formatPriceToNaira(listedAccount.account.preferredPrice)}</p>
                               <p className='text-sm text-black'>Price</p>
                           </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row items-center justify-center gap-2 mt-4'>
                    <Badge variant='secondary' className='py-1.5'>
                        <ThumbsUp className='size-5 text-green-700 fill-current' />
                        Verified
                    </Badge>
                    <Badge variant='secondary' className='py-1.5'>
                    {
                        listedAccount.account.twoFAEnabled
                        ? "2FA enabled"
                        : "2FA Not enabled"
                    }
                    </Badge>
                    <Badge variant='secondary' className='py-1.5'>
                        {
                            listedAccount.account.engagementRate && listedAccount.account.engagementRate !== 0
                            ? `${listedAccount.account.engagementRate}% Enagagement rate`
                            : 'N/A'
                        }
                    </Badge>
                </div>
            </CardHeader>
            <CardContent>
                <p className='text-xl font-medium mb-4'>Proof</p>
                <div className='w-full sm:w-[300px] md:w-[400px] lg:w-[500px] border-2 border-[#f8a11e] rounded-xl flex justify-center items-center'>
                   {
                    listedAccount.account.proofScreenshotUrl
                    ? 
                    <Image
                        src={listedAccount.account.proofScreenshotUrl}
                        alt='screenshot'
                        className='rounded-xl h-full w-full object-cover'
                        width={400}
                        height={400}
                    />
                    : <p className='text-sm text-[#8a8a8a]'>Image Not Found</p>  
                   }
                </div>
            </CardContent>
        </Card>
        <div className='bg-white rounded-lg shadow-md px-2 py-4 lg:p-4 w-full sm:w-[250px] md:w-[150px] xl:w-[175px]'>
            <div className='space-y-4 mb-4 md:mb-6 lg:mb-8'>
                <div className='space-y-2 text-center'>
                    <p className='text-sm font-medium'>Account Price</p>
                    <p className='text-sm text-black'>
                        {
                        listedAccount.paymentSummary?.accountPrice !== "₦NaN"
                        ? listedAccount.paymentSummary?.accountPrice
                        : "N/A"
                        }
                    </p>
                </div>
                <div className='space-y-2 text-center'>
                    <p className='text-sm font-medium'>Service fee</p>
                    <p className='text-sm text-black'>
                        {
                            listedAccount.paymentSummary?.serviceFee !== "₦NaN"
                            ? listedAccount.paymentSummary?.serviceFee
                            : "N/A"
                        }
                    </p>
                </div>
                <div className='space-y-2 text-center'>
                    <p className='text-sm font-medium'>Total cost</p>
                    <p className='text-sm text-black'>
                        {
                            listedAccount.paymentSummary?.totalCost !== "₦NaN"
                            ? listedAccount.paymentSummary?.totalCost
                            : "N/A"
                        }
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-4 mb-4 md:mb-6 lg:mb-8'>
                <Button
                    onClick={()=> setStep(1)}
                    variant={'default'}
                    className='py-3 w-full bg-[#f7a01e] text-black cursor-pointer'
                >
                    Buy Now
                </Button>
                <Button
                    variant={'outline'}
                    className='py-3 w-full border border-[#f7a01e] cursor-pointer text-black'
                >
                    Add to Cart
                </Button>
            </div>
            <div className='font-semibold rounded-lg bg-[#b5f2cb] rounded-lg p-2 text-xs md:text-sm'>
                <div className='flex flex-row gap-2 items-center mb-2'>
                    <ShieldCheck className='size-4 shrink-0' />        
                    <p>100% safe transaction</p>
                </div>
                <p>Cloutjet holds your payment securely until the account is transferred securely.</p>
            </div>
        </div>
    </div>
    }
    </div>
    )
    : 
    <div className='relative'>
        <Button
            className='absolute top-0 left-0'
            onClick={()=> setStep(0)} 
            variant={'outline'}
            >
            <MoveLeft />
            Back
        </Button>
        <p className='text-xl font-medium mb-4 md:mb-6 lg:mb-8 text-center'>Confirm Purchase</p>
        <Card className='max-w-2xl mx-auto'>
            <CardContent>
                <div className='space-y-5 px-5 py-3 rounded-lg mb-3 md:mb-5 border border-[#f8a11e]'>
                    <p className='text-xl font-medium'>Account Details Recap</p>
                    <div className='space-y-3'>
                        <div className='text-[#8a8a8a] text-base flex flex-row justify-between items-center'>
                            <p>Platform</p>
                            <p className='capitalize'>{listedAccount.account.platform || "N/A"}</p>
                        </div>
                        <div className='text-[#8a8a8a] text-base flex flex-row justify-between items-center'>
                            <p>Username</p>
                            <p>{listedAccount.account.accountUsername || 'N/A'}</p>
                        </div>
                        <div className='text-[#8a8a8a] text-base flex flex-row justify-between items-center'>
                            <p>Followers</p>
                            <p>
                                {
                                listedAccount.account.followersCount
                                ?
                                formatFollower(listedAccount.account.followersCount)
                                : "N/A"
                                }
                            </p>
                        </div>
                        <div className='text-[#8a8a8a] text-base flex flex-row justify-between items-center'>
                            <p>Engagement Rate</p>
                            <p>
                                {
                                listedAccount.account.engagementRate ? 
                                `${listedAccount.account.engagementRate}%`
                                : "N/A"
                                }
                            </p>
                        </div>
                        <div className='text-[#8a8a8a] text-base flex flex-row justify-between items-center'>
                            <p>seller</p>
                            <p>jibolalao</p>
                        </div>
                    </div>
                </div>
                <div className='px-5 py-3 rounded-lg mb-3 md:mb-5 border border-[#f8a11e]'>
                    <p className='text-xl font-medium mb-5'>Order Summary</p>
                    <div className='mb-2 space-y-3 pb-3 border-b border-b-[#f8a11e]'>
                        <div className='text-[#8a8a8a] text-base flex flex-row justify-between items-center'>
                            <p>Amount Price</p>
                            <p>
                                {
                                    listedAccount.paymentSummary?.accountPrice !== "₦NaN"
                                    ? listedAccount.paymentSummary?.accountPrice
                                    : "N/A"
                                }
                            </p>
                        </div>
                        <div className='text-[#8a8a8a] text-base flex flex-row justify-between items-center'>
                            <p>Platform Fee</p>
                            <p>
                               {
                                    listedAccount.paymentSummary?.serviceFee !== "₦NaN"
                                    ? listedAccount.paymentSummary?.serviceFee
                                    : "N/A"
                                } 
                            </p>
                        </div>
                        <div className='text-[#8a8a8a] text-base flex flex-row justify-between items-center'>
                            <p>Total cost</p>
                            <p>
                            {
                                listedAccount.paymentSummary?.totalCost !== "₦NaN"
                                ? listedAccount.paymentSummary?.totalCost
                                : "N/A"
                             }
                            </p>
                        </div>
                    </div>
                    <p className='text-base text-black'>This fee covers secure escrow processing and seller verification</p>
                </div>
            </CardContent>
            <CardFooter className='flex flex-col gap-4 items-start'>
                <p className='pl-6 md:pl-8 text-xl font-medium'>Escrow Agreemant terms</p>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-3'>
                        <Checkbox id="payment" />
                        <Label htmlFor='payment'>Cloutjet will hold the payment in escrow</Label>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Checkbox id='credentials' />
                        <Label htmlFor='credentials'>Seller must delivery login credentials</Label>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Checkbox id="verify" />
                        <Label htmlFor='verify'>Buyer must have 24 - 48 to verify and approve</Label>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Checkbox id="confirmation" />
                        <Label htmlFor='confirmation'>Funds released to seller only after confirmation</Label>
                    </div>
                </div>
            </CardFooter>
        </Card>
    </div>
  )
}
