"use client"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useContextValue } from '@/context'
import axios from 'axios'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'



export default function Page() {
  const [token, setToken] = useState<string | null>(null)
  const {listedAccounts, setListedAccounts, noOfPage, setNoOfPages, currentPage, setCurrentPage} = useContextValue()
  const [isLoading, setIsLoading] = useState(false)
  

  const getListedAccount = (page: number) =>{
    const limit = 10
    const endpoint = `https://cloud-jet-production.up.railway.app/v1/buyer/listings?page=${page}&limit=${limit}`
    setIsLoading(true)
    axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res)=>{
      setListedAccounts([...res.data.data.accounts])
      setNoOfPages(res.data.data.totalPages)
    })
    .catch(()=>{
      setListedAccounts([])
      setNoOfPages(0)
    })
    .finally(()=>{
      setIsLoading(false)
    })
  }
  
  
  const formatNumber = (n:number) =>{
    return n.toLocaleString()
  }

  const formatCurrency = (n:number) =>{
    return `₦${n.toLocaleString()}`
  }

  const formatStatus = (status: string) =>{
    switch(status){
      case 'pending':
        return `bg-yellow-100 text-yellow-700`;
      case "approved":
        return `bg-green-100 text-green-700`;
      case "rejected":
        return `bg-red-100 text-red-700`;
      case "in-review":
        return `bg-blue-100 text-blue-700`;
      default:
        return `bg-gray-100 text-gray-700`;
    }
  }

  useEffect(()=>{
    if(token){
      if(listedAccounts.length < 1){
        getListedAccount(1)
        setCurrentPage(1)
      }
    }
  },[token])

  useEffect(()=>{
    const storedToken = sessionStorage.getItem("token")
    if(storedToken){
      setToken(storedToken)
    }
  },[])


  const pagesArray = Array.from({length: noOfPage}, (_,i) => i+1)

  return (
    <Card className='shadow-sm px-4'>
      <CardHeader>
        <CardTitle>Account for Sale</CardTitle>
        <CardDescription>list of Account that are available for purchase</CardDescription>
      </CardHeader>
      <CardContent>
        <div className={` border p-2 rounded-2xl overflow-x-auto min-h-[300px] ${isLoading ? "flex justify-center items-center" : ""}`}>
          {
            isLoading
            ?
            <div className="animate-spin h-8 w-8 border-2 border-t-transparent border-[#f7a01e] rounded-full overflow-x-auto"></div>
          :
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Account</TableHead>
              <TableHead>Followers</TableHead>
              <TableHead>ER</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className='text-right'>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              listedAccounts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center">
                    No accounts available for sale
                  </TableCell>
                </TableRow>
              ) : (
                listedAccounts.map(({account,listingId}) => (
                  <TableRow key={listingId}>
                    <TableCell>{account.accountUsername.replace('@', '')}</TableCell>
                    <TableCell>{formatNumber(account.followersCount)}</TableCell>
                    <TableCell>{account.engagementRate}%</TableCell>
                    <TableCell>{account.countryOfCreation}</TableCell>
                    <TableCell>{formatCurrency(account.estimatedPrice)}</TableCell>
                    <TableCell>
                      <Badge className={formatStatus(account.status)}>{account.status}</Badge>
                    </TableCell>
                    <TableCell className='text-right'>
                      <Button
                        variant="outline"
                        size="sm"
                        className='cursor-pointer'
                        asChild
                      >
                        <Link href={`/seller/buy-sell-account/buy/${listingId}`}>
                          View
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )
            }
          </TableBody>
        </Table>
        }
        {
          listedAccounts.length > 0
          &&
          <div className='my-3 flex flex-row justify-center items-center'>
          <div className='flex flex-row gap-6 items-center'>
            <ChevronLeft 
              className='cursor-pointer'
              onClick={()=>{
                setCurrentPage((prev)=>{
                  const newValue = prev -1;
                  if(newValue<=0){
                    return 1
                  }else{
                    getListedAccount(newValue)
                    return newValue
                  }
                })
              }}
            />
            <ul className='flex flex-row items-center gap-2'>
              {
                pagesArray.map((page, index)=>(
                  <li 
                    onClick={()=>{
                      if(page == currentPage) return
                      getListedAccount(page)
                      setCurrentPage(page)
                    }}
                  key={index} className='cursor-pointer size-6 rounded-full hover:bg-[#f7a01e] hover:text-white flex justify-center items-center'>{page}</li>    
                ))
              }
            </ul>
            <ChevronRight 
              className='cursor-pointer'
              onClick={()=>{
                setCurrentPage((prev)=>{
                  const newValue = prev + 1
                  if(newValue > noOfPage){
                    return noOfPage
                  }else{
                    getListedAccount(newValue)
                    return newValue
                  }
                })
              }}
            />
          </div>
        </div>
        }
        </div>
      </CardContent>
    </Card>
  )
}
