"use client"
import React, { useState } from 'react'
import InfluencerLayout from './components/influencer-layout'
import { Button } from '@/components/ui/button'
import { Clock, DollarSign, Eye, FileCheck, Search, TrendingUp, Upload, Users } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import VerificationModal from './components/verification-modal'

const growthOrders = [
  {
    id: "GO001",
    title: "Instagram Followers Growth",
    description: "Need 10K organic followers for fashion brand account",
    platform: "Instagram",
    targetFollowers: 10000,
    budget: 2500,
    deadline: "2024-01-15",
    requirements: "Fashion niche, organic growth, engagement rate >3%",
    status: "available",
    postedBy: "FashionBrand Co.",
    postedDate: "2024-01-01",
  },
  {
    id: "GO002",
    title: "TikTok Viral Campaign",
    description: "Create viral content to gain 50K followers in 30 days",
    platform: "TikTok",
    targetFollowers: 50000,
    budget: 5000,
    deadline: "2024-01-20",
    requirements: "Dance/lifestyle content, Gen Z audience",
    status: "available",
    postedBy: "TrendyApp Inc.",
    postedDate: "2024-01-02",
  },
  {
    id: "GO003",
    title: "YouTube Subscriber Boost",
    description: "Grow tech channel from 5K to 25K subscribers",
    platform: "YouTube",
    targetFollowers: 20000,
    budget: 3500,
    deadline: "2024-02-01",
    requirements: "Tech content, tutorial videos, consistent uploads",
    status: "in-progress",
    postedBy: "TechGuru Channel",
    postedDate: "2023-12-28",
  },
  {
    id: "GO004",
    title: "LinkedIn Professional Growth",
    description: "Build professional network and thought leadership",
    platform: "LinkedIn",
    targetFollowers: 5000,
    budget: 1500,
    deadline: "2024-01-25",
    requirements: "B2B content, professional audience, industry insights",
    status: "available",
    postedBy: "BusinessPro Ltd.",
    postedDate: "2024-01-03",
  },
]


export default function Page() {
  const [orders,] = useState(growthOrders)
  const [selectedOrder, setSelectedOrder] = useState<(typeof growthOrders)[0] | null >(null)
  const [viewOrderModal, setViewOrderModal] = useState(false)
  const [verificationModalOpen, setVerificationModalOpen] =useState(false)
  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-100 text-green-800 border-green-200"
      case "in-progress":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "completed":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return "bg-pink-100 text-pink-800 border-pink-200"
      case "tiktok":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "youtube":
        return "bg-red-100 text-red-800 border-red-200"
      case "linkedin":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <InfluencerLayout>
      <div className='space-y-6'>
        <div className="flex items-center justify-between ">
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">Growth Orders</h1>
            <p className="text-muted-foreground">Browse and apply for available growth orders from clients</p>
          </div>
          <Button 
            onClick={() => setVerificationModalOpen(true)} 
            className="flex items-center gap-2 bg-[#f6a21b] text-white"
          >
            <FileCheck className="h-4 w-4" />
            Submit for Verification
          </Button>
        </div>
        {/* filters */}
        <div className='flex flex-col sm:flex-row gap-4'>
          <div className='relative flex-1'>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search orders..."
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select
            // value={platformFilter}
            // onValueChange={setPlatfromFilter}
          >
            <SelectTrigger className='w-full sm:w-48'>
              <SelectValue placeholder="PLatform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Platforms</SelectItem>
              <SelectItem value="instagram">Instagram</SelectItem>
              <SelectItem value="facebook">Facebook</SelectItem>
              <SelectItem value="twitter">Twitter</SelectItem>
              <SelectItem value="tiktok">TikTok</SelectItem>
              <SelectItem value="youtube">YouTube</SelectItem>
              <SelectItem value="linkedin">LinkedIn</SelectItem>
            </SelectContent>
          </Select>
          <Select 
            // value={statusFilter} 
            // onValueChange={setStatusFilter}
          >
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Orders Grid */}
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {
            orders.map((order)=>(
              <Card 
                key={order.id}
                className='hover:shadow-md transition-shadow py-4'
              >
                <CardHeader className='px-4'>
                  <div className='flex items-start justify-between'>
                    <div className='space-y-1'>
                      <CardTitle className='text-lg'>{order.title}</CardTitle>
                      <CardDescription className='text-sm'>{order.postedBy}</CardDescription>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                      <Badge className={getPlatformColor(order.platform)}>{order.platform}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className='space-y-4 px-4'>
                  <p className="text-sm text-muted-foreground line-clamp-2">{order.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{order.targetFollowers.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span>${order.budget.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Due: {new Date(order.deadline).toLocaleDateString()}</span>
                    </div>
                  </div> 

                  <div className='flex gap-2'>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                      onClick={() => {setSelectedOrder(order);setViewOrderModal(true)}}
                    >
                      <Eye className='h-4 w-4 mr-2' />
                      View
                    </Button>
                    {
                      order.status === "available" && (
                        <Button
                          size="sm"
                          className='flex-1 bg-[#f6a21b] text-primary-foreground'
                          // onClick={() => handleApplyClick(order)}
                        >
                          <TrendingUp className="h-4 w-4 mr-2" />
                          Apply
                        </Button>
                      )
                    }
                    {order.status === "in-progress" && (
                      <Button 
                        size="sm" 
                        className="flex-1 bg-[#f6a21b] text-primary-foreground" 
                        // onClick={() => handleCompleteClick(order)}
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Update
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          }
        </div>

        <Dialog open={selectedOrder !== null && viewOrderModal} onOpenChange={() => setViewOrderModal(false)}>
            <DialogContent className="lg:max-w-xl">
                      <DialogHeader>
                        <DialogTitle>{selectedOrder?.title}</DialogTitle>
                        <DialogDescription>
                          Posted by {selectedOrder?.postedBy} on{" "}
                          {selectedOrder && new Date(selectedOrder.postedDate).toLocaleDateString()}
                        </DialogDescription>
                      </DialogHeader>
                      {selectedOrder && (
                        <div className="space-y-4">
                          <div>
                            <Label className="text-sm font-medium">Description</Label>
                            <p className="text-sm text-muted-foreground mt-1">{selectedOrder.description}</p>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label className="text-sm font-medium">Platform</Label>
                              <p className="text-sm text-muted-foreground mt-1">{selectedOrder.platform}</p>
                            </div>
                            <div>
                              <Label className="text-sm font-medium">Target Followers</Label>
                              <p className="text-sm text-muted-foreground mt-1">
                                {selectedOrder.targetFollowers.toLocaleString()}
                              </p>
                            </div>
                            <div>
                              <Label className="text-sm font-medium">Budget</Label>
                              <p className="text-sm text-muted-foreground mt-1">
                                ${selectedOrder.budget.toLocaleString()}
                              </p>
                            </div>
                            <div>
                              <Label className="text-sm font-medium">Deadline</Label>
                              <p className="text-sm text-muted-foreground mt-1">
                                {new Date(selectedOrder.deadline).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <div>
                            <Label className="text-sm font-medium">Requirements</Label>
                            <p className="text-sm text-muted-foreground mt-1">{selectedOrder.requirements}</p>
                          </div>
                        </div>
                      )}
                      <DialogFooter>
                        {/* <Button variant="outline">Save for Later</Button> */}
                        <Button className='bg-[#f6a21b] text-primary-foreground' disabled={selectedOrder?.status !== "available"}>Apply</Button>
                      </DialogFooter>
                    </DialogContent>
          </Dialog>

        <VerificationModal
          isOpen={verificationModalOpen}
          onClose={() => setVerificationModalOpen(false)}
        />

      </div>
    </InfluencerLayout>
  )
}
