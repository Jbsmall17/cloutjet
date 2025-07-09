import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Checkbox } from "@/components/ui/checkbox"
import React from 'react'

export default function page() {
  return (
    <section className='flex flex-col md:pr-4 lg:pr-6 mb-4 md:mb-6 overflow-auto h-full'>
        <h1 className='text-center font-semibold mb-3 text-2xl'>Account Setting</h1>
        <div className='bg-white'>
            <p className='bg-[#17233b] leading-none text-white py-4 pl-4 md:pl-6 font-semibold'>Basic Information</p>
            <div className='p-4 md:p-6'>
                <div className='mb-4 flex flex-row items-center gap-3'>
                    <img 
                        src="/header-pic.svg"
                        alt="profile picture"
                        className='size-12'
                    />
                    <div className='space-y-2'>
                        <p className='text-base font-semibold'>Profile photo</p>
                        <p className='text-base'>This will be displayed on your profile</p>
                    </div>
                    <div>

                    </div>
                </div>
                <form className='mb-6 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6'>
                    <div className='space-y-2'>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input type='text' id="fullName" placeholder="Email" />
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor="email">Email Address</Label>
                        <Input type='email' id="email" placeholder="yourmail@example.com" />
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor="gender">Gender</Label>
                        <Input type='text' id="email" placeholder="gender" />
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input type='text' id="dob" placeholder="Date of Birth" />
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <Input type='text' id="phoneNumber" placeholder="+2348061403147" />
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor="country">Country of Residence</Label>
                        <Input type='text' id="country" placeholder="country" />
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor="state">State</Label>
                        <Input type='text' id="state" placeholder="state" />
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor="city">City</Label>
                        <Input type='text' id="city" placeholder="city" />
                    </div>
                </form>
                <div className="flex justify-end">
                    <Button className='cursor-pointer rounded-xs px-6 bg-[#f6a21b] hover:bg-[#17233b] text-white'>Update</Button>
                </div>
            </div>
            <p className='bg-[#17233b] leading-none text-white py-4 pl-4 md:pl-6 font-semibold'>Notifications</p>
            <div className='px-4 md:px-6 py-6 md:py-8 flex flex-col md:flex-row divide-y-2 md:divide-x-2 '>
                <div className='flex-1 pr-4 md:pr-6 pb-3 md:pb-0 pb-3 space-y-3'>
                    <div className='space-y-2'>
                        <p className='text-xl font-semibold'>Email Notifications</p>
                        <p className='text-base text-[#808080]'>Get emails to find out what&apos;s going onm when you are not onlin. You can turn these off</p>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <Switch  />
                        <div className='space-y-1'>
                            <p className='text-base leading-none font-semibold'>News</p>
                            <p className='text-[#808080]'>News about products and future updates</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <Switch />
                        <div className='space-y-1'>
                            <p className='text-base leading-none font-semibold'>Updates</p>
                            <p className='text-[#808080]'>feature updates</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <Switch />
                        <div className='space-y-1'>
                            <p className='text-base leading-none font-semibold'>Reminders</p>
                            <p className='text-[#808080]'>These are notifications to remind you of updates you migth have missed.</p>
                        </div>
                    </div>
                </div>
                <div className='flex-1 pl-4 md:pl-6 pt-3 md:pt-0 space-y-3'>
                    <div className='space-y-2'>
                        <p className='text-xl font-semibold'>Push Notifications</p>
                        <p className='text-base text-[#808080]'>Get push notifications in app to find out what&apos;s going on when you are not online. You can turn these off</p>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <Switch />
                        <div className='space-y-1'>
                            <p className='text-base leading-none font-semibold'>Reminders</p>
                            <p className='text-[#808080]'>These are notifications to remind you of updates you migth have missed.</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <Switch />
                        <div>
                            <p className='text-base leading-none font-semibold'>Update</p>
                            <p className='text-[#808080]'>feature update.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end p-4 md:p-6">
                <Button className='cursor-pointer rounded-xs px-6 bg-[#f6a21b] hover:bg-[#17233b] text-white'>Update</Button>
            </div>
            <p className='bg-[#17233b] leading-none text-white py-4 pl-4 md:pl-6 font-semibold'>Password & Security</p>
            <div className='px-4 md:px-6 py-6 md:py-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6'>
                <Input
                    type='password'
                    id="currentPassword"
                    placeholder="Enter Current Password"
                    className='w-full'
                />
                <Input
                    type='password'
                    id="newPassword"
                    placeholder="Enter new Password"
                    className='w-full'
                />
                <Input
                    type='password'
                    id="confirmNewPassword"
                    placeholder="Confirm New Password"
                    className='w-full'
                />
            </div>
            <div className="flex justify-end p-4 md:p-6">
                <Button className='cursor-pointer rounded-xs px-6 bg-[#f6a21b] hover:bg-[#17233b] text-white'>Update</Button>
            </div>
            <p className='bg-[#17233b] leading-none text-white py-4 pl-4 md:pl-6 font-semibold'>Delete your accouunt</p>
            <div className='px-4 md:px-6 py-6 md:py-8 space-y-3'>
                <p>when you delete your account, you lose access to cloutjet account services, and we permanently delete your personal data. You can cancel the deletion for 14 days</p>
                <div className='mb-6 md:mb-8 flex items-center'>
                    <Checkbox className='mr-3 size-5'  />
                    <span>Confirm that i want to delete my account</span>
                </div>
                <div className="flex justify-end p-4 md:p-6">
                <Button className='cursor-pointer rounded-xs px-6 bg-red-600 hover:bg-[#17233b] text-white'>Delete</Button>
            </div>
            </div>
        </div>
    </section>
  )
}
