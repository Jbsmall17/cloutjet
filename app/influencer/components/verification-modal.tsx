"use client"
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FileCheck, Upload, X } from 'lucide-react'
import React, { useState } from 'react'

type VerficationModalProps = {
    isOpen: boolean,
    onClose : () => void    
}



export default function VerificationModal({isOpen,onClose}: VerficationModalProps) {
    const [verificationForm, setVerificationForm] = useState({
    platform: "",
    serviceType: "",
    engagementRate: ""
    })
    const [uploadedFile, setUploadedFile] = useState<File | null>(null)
    const [isDragActive, setIsDragActive] = useState(false)
    const [imageBaseString, setImageString] = useState("")

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === "dragenter" || e.type === "dragover") {
            setIsDragActive(true)
        } else if (e.type === "dragleave") {
            setIsDragActive(false)
        }
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setIsDragActive(false)

        const file = e.dataTransfer.files?.[0]
        if(file){
            handleFile(file)
        }
    }

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files){
            handleFile(e.target.files[0])
        }
    }


    const handleFile = (file : File) => {
        if(!file.type.startsWith("image/")){
            alert("Please upload an image file")
            return
        }

        const reader = new FileReader()

        reader.onload = (e) => {
            setUploadedFile(file)
            setImageString(e.target?.result as string)            
        }

        reader.readAsDataURL(file)
    }

    const removeFile = () => {
        setUploadedFile(null)
        setImageString("")
    }

    return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='lg:max-w-2xl max-h-[90vh] overflow-scroll'>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileCheck className="h-5 w-5" />
            Submit for Verification
          </DialogTitle>
          <DialogDescription>Submit your completed work for client verification and approval</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
            <div className='space-y-2'>
                <Label htmlFor="platform">Platform *</Label>
                <Select
                    value={verificationForm.platform}
                    onValueChange={(value) => setVerificationForm({ ...verificationForm, platform: value })}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="tiktok">TikTok</SelectItem>
                        <SelectItem value="youtube">YouTube</SelectItem>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                        <SelectItem value="twitter">Twitter</SelectItem>
                        <SelectItem value="facebook">Facebook</SelectItem> 
                    </SelectContent>
                </Select>
            </div>

            <div className='space-y-2'>
                <Label htmlFor='service-type'>Service Type *</Label>
                <Select
                    value={verificationForm.serviceType}
                    onValueChange={(value) => setVerificationForm({ ...verificationForm, serviceType: value })}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="follower-growth">Follower Growth</SelectItem>
                        <SelectItem value="engagement-boost">Engagement Boost</SelectItem>
                        <SelectItem value="content-creation">Content Creation</SelectItem>
                        <SelectItem value="viral-campaign">Viral Campaign</SelectItem>
                        <SelectItem value="brand-awareness">Brand Awareness</SelectItem>
                        <SelectItem value="influencer-outreach">Influencer Outreach</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className='space-y-2'>
                <Label htmlFor="proof">Proof of Work *</Label>
                <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop} 
                    className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors min-h-64 flex items-center justify-center ${
                        isDragActive ? "border-orange-500 bg-orange-50" : "border-gray-300 bg-gray-50 hover:border-orange-400"
                    }`}
                >
                    {
                        uploadedFile && imageBaseString ? (
                            <div className="relative w-full h-full flex flex-col items-center justify-center gap-4">
                                <img
                                    src={imageBaseString}
                                    alt='Proof preview'
                                    className="max-w-full max-h-48 rounded-lg object-contain"
                                />
                                <div className="text-center">
                                    <p className='text-sm font-medium text-gray-900'>
                                        {uploadedFile.name}
                                    </p>
                                </div>
                                <button
                                    onClick={removeFile}
                                    className="mt-2 px-3 py-1 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"  
                                >
                                    <X className="h-4 w-4" />
                                    Remove
                                </button>
                            </div>
                        )
                        : (
                            <></>
                        )
                    }
                    <input 
                        id="proof" 
                        type="file" 
                        onChange={handleFileInput} 
                        className="hidden" 
                        accept="image/*" 
                    />
                    {
                        !uploadedFile && (
                            <Label htmlFor="proof" className='cursor-pointer'>
                                <div className="flex flex-col items-center gap-2">
                                    <Upload className="h-8 w-8 text-orange-500" />
                                    <div>
                                        <p className="font-medium text-gray-900">Drag and drop your image here</p>
                                        <p className="text-sm text-gray-600">or click to select an image</p>
                                    </div>
                                </div>
                            </Label>
                        )

                    }
                </div>
            </div>
        </div>

        <DialogFooter>
            <Button variant="outline" onClick={onClose}>
                Cancel
            </Button>
            <Button
                // onClick={handleSubmitVerification}
                disabled={
                !verificationForm.platform ||
                !verificationForm.serviceType ||
                !verificationForm.engagementRate ||
                !uploadedFile
                }
                className='bg-[#f6a21b] text-white'
            >
                <Upload className="h-4 w-4 mr-2" />
                Submit for Verification
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
