"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const [step, setStage] = useState(0);
  const socials = ["instagram", "facebook", "twitter", "snapchat", "linkedIn"];
  const countries = [
    "nigeria",
    "cameroun",
    "benin",
    "ghana",
    "united kingdom",
    "united state of america",
  ];

  return (
    <main className="pagelayout">
      <div className="flex flex-row justify-center gap-4 mb-6 md:mb-8 lg:mb-10">
        <Button className="border border-[#f7a01e] px-8" variant={"outline"}>
          Buy Account
        </Button>
        <Button className="bg-[#f7a01e] text-black px-8">Sell Account</Button>
      </div>
      {step <= 2 && (
        <>
          <div className="flex flex-col items-center">
            <p className="text-xl text-center font-semibold mb-4 md:mb-6 lg:mb-8">
              Turn Your Social Media
              <br /> Accounts into Cash
            </p>
            <div className="max-w-screen-sm flex flex-row items-center rounded-lg p-3 border border-[#f7a01e]">
              <div>
                <Image
                  src="/caution.svg"
                  alt="caution icon"
                  width={32}
                  height={32}
                />
              </div>
              <div className="text-center font-semibold space-y-3">
                <p className="text-base">Identity not yet verified</p>
                <p className="text-sm">
                  Your identity must be verified before you sell
                </p>
                <Button className="bg-[#f7a01e] text-black px-6">
                  Get verified now
                </Button>
              </div>
            </div>
          </div>
          <div className="relative h-1 w-full bg-[#f7a01e] my-8">
            <span className="absolute size-6 flex justify-center items-center leading-none rounded-full bg-[#f7a01e] top-1/2 -translate-1/2 left-1/4 text-sm">
              1
            </span>
            <span className="absolute size-6 flex justify-center items-center leading-none rounded-full bg-[#f7a01e] top-1/2 -translate-1/2 left-1/2 text-sm">
              2
            </span>
            <span className="absolute size-6 flex justify-center items-center leading-none rounded-full bg-[#f7a01e] top-1/2 -translate-1/2 left-3/4 text-sm">
              3
            </span>
          </div>
          <p className="text-xl mb-2 font-semibold">
            Sumbit Account Credentials for secure Transfer
          </p>
        </>
      )}
      {step == 0 ? (
        <p className="text-base font-semibold mb-2">
          Step 1: Basic account info
        </p>
      ) : step == 1 ? (
        <p className="text-base font-semibold mb-2">
          Step 2: Login Credentials
        </p>
      ) : step == 2 ? (
        <p className="text-base font-semibold mb-2">
          Step 3: Pricing & Ownership Declaration
        </p>
      ) : (
        <></>
      )}
      {step == 0 ? (
        <form className="py-4 px-6 md:px-8 lg:px-12 rounded-lg bg-white space-y-6">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-6 lg:gap-8">
            <div className="space-y-3 flex-1">
              <label className="block text-base font-medium">
                Social Media Platform
              </label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  {socials.map((social, index) => {
                    return (
                      <SelectItem key={index} value={social}>
                        {social}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1 space-y-3">
              <label className="block text-base font-medium">Niche</label>
              <Input placeholder="Personal, Fashion, Tech" />
            </div>
          </div>
          <div className="space-y-3">
            <label className="block text-base font-medium">
              Username or Handle
            </label>
            <Input placeholder="your username or handle" />
          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-6 lg:gap-8">
            <div className="flex-1 space-y-3">
              <label className="block text-base font-medium">
                Average likes or comments per post
              </label>
              <Input placeholder="" />
            </div>
            <div className="flex-1 space-y-3">
              <label className="block text-base font-medium">
                Number of followers
              </label>
              <Input placeholder="" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-6 lg:gap-8">
            <div className="flex-1 space-y-3">
              <label className="block text-base font-medium">
                Country of creation
              </label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country, index) => {
                    return (
                      <SelectItem key={index} value={country}>
                        {country}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1 space-y-3">
              <label className="block text-base font-medium">
                Link to profile
              </label>
              <Input placeholder="" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-6 lg:gap-8">
            <div className="flex-1 space-y-3">
              <label className="block text-base font-medium">
                Engagement Rate
              </label>
              <Input placeholder="" />
            </div>
            <div className="flex-1 space-y-3">
              <label className="block text-base font-medium">Account Age</label>
              <Input placeholder="" />
            </div>
          </div>
        </form>
      ) : step == 1 ? (
        <form className="py-4 px-6 md:px-8 lg:px-12 rounded-lg bg-white space-y-6">
          <div className="space-y-3">
            <label className="block text-base font-medium" htmlFor="">
              Login Email
            </label>
            <Input placeholder="youremail@example.com" />
          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-6 lg:gap-8">
            <div className="flex-1 space-y-3">
              <label className="block text-base font-medium">
                Recovery Phone number
              </label>
              <Input placeholder="" />
            </div>
            <div className="flex-1 space-y-3">
              <label className="block text-base font-medium">
                Account Password
              </label>
              <Input placeholder="" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-6 lg:gap-8">
            <div className="flex-1 space-y-3">
              <label className="block text-base font-medium" htmlFor="">
                2FA Method
              </label>
              <Input placeholder="" />
            </div>
            <div className="flex-1 space-y-3">
              <label className="block text-base font-medium" htmlFor="">
                is 2FA currently enabled?
              </label>
              <RadioGroup className="flex flex-row space-x-4" defaultValue="no">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    className="accent-[#f7a01e]"
                    value="no"
                    id="no"
                  />
                  <label htmlFor="no">No</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    className="accent-[#f7a01e]"
                    value="yes"
                    id="yes"
                  />
                  <label htmlFor="option-two">Yes</label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="space-y-3">
            <label className="block font-medium text-base">
              Screens of profile
            </label>
            <div className="flex flex-col gap-1 items-center bg-white p-3 rounded-lg border border-[#f7a01e]">
              <Image
                src="/add-image-icon.svg"
                alt="add image icon"
                width={40}
                height={40}
              />
              <p className="text-[#8a8a8a]">Add file Jpeg or PNG</p>
            </div>
          </div>
        </form>
      ) : step == 2 ? (
        <form className="py-4 px-6 md:px-8 lg:px-12 rounded-lg bg-white space-y-6">
          <div className="mb-4 md:mb-6 lg:mb-8 p-3 lg:p-4 flex flex-col md:flex-row gap-4 lg:gap-6 w-[90%] lg:w-[80%] mx-auto bg-[#b5f2cb] rounded-lg">
            <div className="shrink-0">
              <Image
                src="/bullseye-solid.svg"
                alt="bulls icon"
                height={40}
                width={40}
                className="size-8"
              />
            </div>
            <div className="flex-1 space-y-3">
              <p className="text-xl font-medium text-center">
                CloutJet recommended price range
              </p>
              <p className="text-sm pl-3 lg:pl-5 font-normal">
                Based on the information you provided we estimate that your
                account is worth between ₦45,000 and ₦46,000
              </p>
              <p className="text-sm font-normal">
                Older accounts with more engagements and whose sellers have a
                clean track record are valued more. You can adjust your price
                within or slightly above this range
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div className="space-y-3">
              <label className="block font-medium text-base" htmlFor="">
                Set preferred price
              </label>
              <div className="rounded-lg p-3 flex flex-row gap-2 border border-[#f7a01e]">
                <p>₦</p>
                <input className="focus-visible:outline-none border-none text-black focus-visible:flex-1" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="block font-medium text-base" htmlFor="">
                Listing
              </label>
              <div className="rounded-lg p-3 flex flex-row gap-2 border border-[#f7a01e]">
                <p>₦</p>
                <input className="focus-visible:outline-none border-none text-black focus-visible:flex-1" />
              </div>
            </div>
            <div className="space-y-3 mb-3 lg:mb-6">
              <label className="block font-medium text-base" htmlFor="">
                Estimated Pay
              </label>
              <div className="rounded-lg p-3 flex flex-row gap-2 border border-[#f7a01e]">
                <p>₦</p>
                <input className="focus-visible:outline-none border-none text-black focus-visible:flex-1" />
              </div>
            </div>
          </div>
          <div className="h-1 w-full bg-[#f7a01e]"></div>
          <p className="text-xl font-medium">Ownership Declaration</p>
          <div className="flex flex-row items-center gap-4 md:gap-6">
            <Checkbox className="size-6 border-[#f7a01e] accent-[#f7a01e]" />
            <p>I confirm that i am te rightful owner of his account</p>
          </div>
          <div className="flex flex-row items-center gap-4 md:gap-6">
            <Checkbox className="size-6 border-[#f7a01e] accent-[#f7a01e]" />
            <p>
              I understand that once the account is sold, I must not attempt to
              gain or regain access
            </p>
          </div>
          <div className="flex flex-row items-center gap-4 md:gap-6">
            <Checkbox className="size-6 border-[#f7a01e] accent-[#f7a01e]" />
            <p>
              All credentails and recovery options have been updated to reflect
              buyer&apos;s ownership
            </p>
          </div>
          <div className="flex flex-row items-center gap-4 md:gap-6">
            <Checkbox className="size-6 border-[#f7a01e] accent-[#f7a01e]" />
            <p>
              I agree to the terms and conditions of payment provided by
              CLoutJet and penalties for defaulting
            </p>
          </div>
        </form>
      ) : step == 3 ? (
        <div>

        </div>
      )
      : <></>
    }
      {step == 0 ? (
        <Button
          onClick={()=> setStage(1)} 
          className="text-black mt-6 mx-auto block w-[150px] bg-[#f7a01e]">
          Next Step
          <ArrowRight className="inline ml-3" />
        </Button>
      ) : step == 1 ? (
        <Button
          onClick={()=> setStage(2)} 
          className="text-black mt-6 mx-auto block w-[150px] bg-[#f7a01e]">
          Finish
          <ArrowRight className="inline ml-3" />
        </Button>
      ) : step == 2 ? (
        <Button className="text-black mt-6 mx-auto block w-[150px] bg-[#f7a01e]">
          Preview & Submit
        </Button>
      ) : (
        <></>
      )}
    </main>
  );
}
