"use client"
import { Button } from '@/components/ui/button'
import { Dialog, DialogFooter, DialogHeader } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { DialogContent, DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import { Calendar, DollarSign, Send, Users } from 'lucide-react'
import React from 'react'

type ApplyOrdersModalProps = {
  isOpen: boolean,
  onClose: () => void,
  order : {
    id: string,
    title: string, 
    platform: string
    targetFollowers: number
    budget: number
    deadline: string
    postedBy: string
  } | null
}


export default function ApplyorderModal({isOpen,onClose,order}: ApplyOrdersModalProps) {
  
  if(!order) return null
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='lg:max-w-2xl max-h-[90vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle className='flex items-center gap-2'>
            <Send className="h-5 w-5" />
            Apply for Order
          </DialogTitle>
          <DialogDescription>
            Submit your application for this growth order with your proposed strategy
          </DialogDescription>
        </DialogHeader>
        <div className='space-y-6'>
          <div className='p-4 bg-muted rounded-lg'>
            <h4>{order?.title}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className='flex items-center gap-2'>
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>{order.targetFollowers.toLocaleString()} followers</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <span>₦{order.budget.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Due: {new Date(order.deadline).toLocaleDateString()}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Client: </span>
                <span>{order.postedBy}</span>
              </div>
            </div>
          </div>

          <div className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor="strategy">Proposed Strategy *</Label>
              <Textarea
                id='strategy'
                placeholder='Describe your approach to achieving the growth targets...'
                rows={4}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button className='bg-[#f6a21b] text-white'>
              <Send className='h-4 w-4 mr-2' />
              Submit Application 
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}
