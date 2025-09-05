/*eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { createContext, ReactNode, useContext, useEffect, useState } from "react";


type userType = {
    fullName: string,
    id: string,
    phoneNumber: string,
    profileImage: string,
    userType: string,
}

type activities = {
    _id: string,
    user: string,
    title: string,
    message: string,
    type: string,
    status: string,
    createdAt: string,
}

type sellerStatsType = {
    engagementGrowth: string,
    purchasesCount: number,
    recentActivities: activities[],
    recentTransactions: listedAccount[],
    totalOrders: number
}

type contextType = {
    user: userType,
    setUser: (value: userType) => void,
    refferalObj: refferalObj,
    setRefferalObj: (value: refferalObj) => void,
    sellerStats: sellerStatsType,
    setSellerStats: (value: sellerStatsType) => void
    listedAccounts: listedAccount[], 
    setListedAccounts: (value: listedAccount[]) => void,
    listedAccount: listedAccount,
    setListedAccount: (value : listedAccount) => void,
    purchasedAccount : listedAccount[], 
    setPurchasedAccount: (value : listedAccount[]) => void
}

type refferalObj = {
    referralCode: string
    numberOfReferrals: number
    totalCoinEarnings: string
}

type User = {
  _id: string,
  fullName: string,
  email: string
}

export type account = {
  _id: string,
  user?: User,
  platform: string,
  niche: string,
  logo:string;
  accountUsername: string,
  followersCount: number,
  engagementRate: number,
  description: string,
  countryOfCreation: string,
  estimatedPrice: number;
  status: string;
  createdAt?: string;
  proofScreenshotUrl: string;
  accountAge: string;
  preferredPrice: number;
  profileLink: string;
  twoFAEnabled: boolean;
  twoFAMethod: string
}

type payment = {
    accountPrice : string,
    serviceFee : string,
    totalCost : string
  }

type listedAccount = {
  listingId : string,
  account: account,
  paymentSummary?: payment
}


const context = createContext<contextType | undefined>(undefined)


export function ContextComp({children}: {children: ReactNode}){
    const [user, setUser] = useState({
        id: "",
        fullName: "",
        phoneNumber: "",
        profileImage: "",
        userType: ""  
    })
    const [refferalObj, setRefferalObj] = useState<refferalObj>({
        referralCode: "",
        numberOfReferrals: 0,
        totalCoinEarnings: ""
    })
    const [sellerStats, setSellerStats] = useState<sellerStatsType>({
        engagementGrowth: "",
        purchasesCount: 0,
        recentActivities: [],
        recentTransactions: [],
        totalOrders: 0
    })
    const [listedAccounts, setListedAccounts] = useState<listedAccount[]>([])
    const [listedAccount, setListedAccount] = useState<listedAccount>({
        listingId: "",
        account: {
        _id: "",
        platform: "",
        niche: "",
        logo: "",
        accountUsername: "",
        description: "",
        followersCount: 0,
        engagementRate: 0,
        countryOfCreation: "",
        estimatedPrice: 0,
        status: "",
        proofScreenshotUrl: "",
        accountAge: "",
        preferredPrice: 0,
        profileLink: '',
        twoFAEnabled: false,
        twoFAMethod: ""
        },       
        paymentSummary : {
            accountPrice : "",
            serviceFee : "",
            totalCost : ""
        }
    })
    const [purchasedAccount, setPurchasedAccount] = useState<listedAccount[]>([])

    useEffect(()=>{
        const user = sessionStorage.getItem("userObj")
        if(user){
            const userObj = JSON.parse(user)
            setUser({...userObj})
        }
    },[])

    return (
        <context.Provider 
        value={{
            user, 
            setUser, 
            refferalObj, 
            setRefferalObj, 
            sellerStats, 
            setSellerStats,
            listedAccounts, 
            setListedAccounts,
            listedAccount,
            setListedAccount,
            purchasedAccount, 
            setPurchasedAccount
            }}
        >
            {children}
        </context.Provider>
    )
} 


export function useContextValue(){
    const con = useContext(context)
    if(!con){
        throw new Error("an error occurred")
    }
    return con
}