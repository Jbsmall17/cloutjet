"use client"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Order, useContextValue } from '@/context'
import { formatDate, formatFollower, formatPriceToNaira } from '@/lib/utils'
import axios from 'axios'
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export default function Page() {
    const {orders, setOrders, ordersPageObj, setOrdersPageObj, isOrderRequested, setIsOrderRequested} = useContextValue()
    const [token, setToken] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const OrderDetailsModal = ({order}:{order: Order}) => {
        return (
         <DialogContent className="max-w-md w-full">
            <DialogHeader>
                <DialogTitle className="text-xl font-bold mb-2">Order Details</DialogTitle>
            </DialogHeader>
            <div className='space-y-3'>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Platform:</span>
                    <span className="font-semibold">{order.platform.charAt(0).toUpperCase() + order.platform.slice(1)}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Engagement:</span>
                    <span className="font-semibold">{order.engagementOption.charAt(0).toUpperCase() + order.engagementOption.slice(1)}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Quantity:</span>
                    <span className="font-semibold">{order.quantity}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Total Price:</span>
                    <span className="font-semibold">₦{order.totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Status:</span>
                    <span className={`capitalize font-semibold ${order.status === 'completed' ? 'text-green-600' : 'text-yellow-600'}`}>{order.status}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Created At:</span>
                    <span className="font-semibold">{new Date(order.createdAt).toLocaleString()}</span>
                </div>
            </div>
            <div className="mt-4">
                <a
                    href={order.postLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline text-sm"
                >
                    View Post
                </a>
            </div>
         </DialogContent>   
        )
    }


    const getOrders = (page: number) => {
        const limit = 10
        const endpoint = `${baseUrl}/v1/growth-order/growth-orders?page=${page}&limit=${limit}`
        setIsLoading(true)
        axios.get(endpoint,{
            headers : {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res)=>{
            setOrders([...res.data.data.orders])
            setOrdersPageObj({
                totalPage: res.data.data.totalPages,
                currentPage: res.data.data.currentPage
            })
            setIsOrderRequested(true)
        })
        .catch((err)=>{
            console.log(err.response)
            setOrders([])
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
            if(!!isOrderRequested) return
            getOrders(1)
        }
    },[token])

    const pagesArray = Array.from({length : ordersPageObj.totalPage}, (_,i) => i+1)

  return (
    <Card className='shadow-sm px-4 flex-1 mr-[2%]'>
        <CardHeader>
            <CardTitle>Growth Orders</CardTitle>
            <CardDescription>list of Growth Orders for Real and Bots engagement</CardDescription>
        </CardHeader>
        <CardContent>
            <div className={` border p-2 rounded-2xl overflow-x-auto min-h-[300px] ${isLoading || orders.length === 0 ? "flex justify-center items-center" : ""}`}>
                {
                    isLoading
                    ?
                    <div className="animate-spin h-8 w-8 border-2 border-t-transparent border-[#f7a01e] rounded-full overflow-x-auto"></div>
                    :orders.length === 0 ? (
                        <p className="text-center">
                            No accounts available for sale
                        </p>
                    )
                    : (
                        <div className='min-h-[300px]'>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Platform</TableHead>
                                        <TableHead>Engagement</TableHead>
                                        <TableHead>Quantity</TableHead>
                                        <TableHead>Total Price</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Created At</TableHead>
                                        <TableHead>Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        orders.map((order)=>(
                                            <TableRow key={order._id}>
                                                <TableCell >{order.platform.charAt(0).toUpperCase() + order.platform.slice(1)}</TableCell>
                                                <TableCell className='captalize'>{order.engagementOption.charAt(0).toUpperCase() + order.engagementOption.slice(1)}</TableCell>
                                                <TableCell>{formatFollower(order.quantity)}</TableCell>
                                                <TableCell>{formatPriceToNaira(order.totalPrice)}</TableCell>
                                                <TableCell><Badge variant={'outline'} className='capitalize'>{order.status}</Badge></TableCell>
                                                <TableCell>{formatDate(order.createdAt)}</TableCell>
                                                <TableCell>
                                                    <Dialog>
                                                        <DialogTrigger asChild>
                                                            <Button variant='outline'><Eye /></Button>
                                                        </DialogTrigger>
                                                        <OrderDetailsModal order={order} />
                                                    </Dialog>
                                                </TableCell>
                                            </TableRow> 
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </div>
                    )
                }
                {
                    orders.length > 1
                    &&
                    <div className='my-3 flex flex-row justify-center items-center'>
                        <div className='flex flex-row gap-6 items-center'>
                        <ChevronLeft 
                            onClick={ ()=>{
                                setOrdersPageObj((prev)=>{
                                    const newValue = prev.currentPage - 1
                                    if(newValue <= 0){
                                        return prev
                                    }else{
                                        getOrders(newValue)
                                        return {
                                            ...prev,
                                            currentPage: newValue
                                        }
                                    }
                                })
                            }}
                        />
                        <ul className='flex flex-row items-center gap-2'>
                            {
                                pagesArray.map((page, index)=>(
                                    <li 
                                        key={index}
                                        onClick={()=>{
                                            if(page == ordersPageObj.currentPage) return
                                            getOrders(page)
                                            setOrdersPageObj((prev)=>{
                                                return {
                                                    ...prev,
                                                    currentPage: page
                                                }
                                            })
                                        }}
                                        className='cursor-pointer size-6 rounded-full hover:bg-[#f7a01e] hover:text-white flex justify-center items-center'>{page}</li>
                                ))
                            }
                        </ul>
                        <ChevronRight 
                            onClick={ ()=>{
                                setOrdersPageObj((prev)=>{
                                    const newValue = prev.currentPage + 1
                                    if(newValue > ordersPageObj.totalPage){
                                        return prev
                                    }else{
                                        getOrders(newValue)
                                        return {
                                            ...prev,
                                            currentPage: newValue
                                        }
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
