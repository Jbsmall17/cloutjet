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
import axios from "axios";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {toast, Toaster} from "react-hot-toast"

type sellAccountInput = {
  username: string;
  noOfFollowers: string;
  country: string;
  linkToProfile: string;
  engagementRate: string;
  accountAge: string;
  email: string;
  phoneNumber: string;
  twoFactor: string;
  isTwoFactorEnabled: string;
  password: string;
  confirmPassword: string;
  socialMediaPlatform: string;
  proofScreenshot: File;
  niche: string;
  preferredPrice: string;
  listingFee: string;
  estimatedPay: string;
  confirmOwnership: boolean;
  confirmOwnership1: boolean;
  confirmOwnership2: boolean;
  confirmOwnership3: boolean;
  likesCount: string;
};

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null)
  const { control, handleSubmit, setValue, watch } = useForm<sellAccountInput>({
    defaultValues: {
      username: "",
      noOfFollowers: "",
      country: "",
      linkToProfile: "",
      engagementRate: "",
      accountAge: "",
      email: "",
      phoneNumber: "",
      twoFactor: "",
      isTwoFactorEnabled: "",
      password: "",
      confirmPassword: "",
      socialMediaPlatform: "",
      proofScreenshot: undefined,
      niche: "",
      preferredPrice: "",
      listingFee: "",
      estimatedPay: "",
      likesCount: "",
      confirmOwnership: false,
      confirmOwnership1: false,
      confirmOwnership2: false,
      confirmOwnership3: false,
    }
  });
  const router = useRouter()
  const [stage, setStage] = useState(0);
  const socials = ["instagram", "facebook", "twitter", "snapchat", "linkedIn"];
  const countries = [
    "nigeria",
    "cameroun",
    "benin",
    "ghana",
    "united kingdom",
    "united state of america",
  ];
  const twoFaArray = ["email", "phonenumber"]

  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmit: SubmitHandler<sellAccountInput> = (data) => {
    const endpoint = 'https://cloud-jet-production.up.railway.app/v1/seller/verification/submit-account'
    const formData = new FormData();
    formData.append("platform", data.socialMediaPlatform);
    formData.append("niche", data.niche);
    formData.append("accountUsername", data.username);
    formData.append("followersCount", data.noOfFollowers);
    formData.append("engagementRate", data.engagementRate);
    formData.append("profileLink", data.linkToProfile);
    formData.append("countryOfCreation", data.country);
    formData.append("accountAge", data.accountAge);
    formData.append("likesCount", data.likesCount);
    formData.append("recoveryPhoneNumber", data.phoneNumber);
    formData.append("twoFAMethod", data.twoFactor);
    formData.append("twoFAEnabled", data.isTwoFactorEnabled);
    formData.append("estimatedPrice", data.estimatedPay);
    formData.append("listingFee", data.listingFee);
    formData.append("preferredPrice", data.preferredPrice)
    formData.append("proofScreenshot", data.proofScreenshot);
    setIsLoading(true)
    axios.post(endpoint,formData,{
        headers : {
          Authorization : `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      }
    )
    .then(()=>{
      toast.success("Account submitted successfully");
    })
    .catch(()=>{
      toast.error("Account submission failed");
    })
    .finally(()=>{
      setIsLoading(false)
    })
  }

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue("proofScreenshot", file);
    }
  };

  const proofScreenshot = watch("proofScreenshot");

  useEffect(()=>{
    const token = sessionStorage.getItem("token")
    setToken(token)
  },[token])


  return (
    <main className="pagelayout">
      <Toaster />
      <div className="flex flex-row justify-center gap-4 mb-6 md:mb-8 lg:mb-10">
        <Button onClick={() => router.push("/buyer/dashboard")} className="border border-[#f7a01e] px-8" variant={"outline"}>
          Buy Account
        </Button>
        <Button className="bg-[#f7a01e] text-black px-8">Sell Account</Button>
      </div>
      {stage <= 2 && (
        <>
          <div className="flex flex-col items-center">
            <p className="text-xl text-center font-semibold mb-4 md:mb-6 lg:mb-8">
              Turn Your Social Media
              <br /> Accounts into Cash
            </p>
            {/* <div className="max-w-screen-sm flex flex-row items-center rounded-lg p-3 border border-[#f7a01e]">
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
            </div> */}
          </div>
          <div className="relative h-1 w-full bg-[#f7a01e] my-8">
            <span onClick={() => setStage(0)} className={`cursor-pointer absolute size-6 flex justify-center items-center leading-none rounded-full ${stage >= 0 ? "bg-[#f7a01e]" : "bg-[#8a8a8a]"} top-1/2 -translate-1/2 left-1/4 text-sm`}>
              1
            </span>
            <span onClick={() => setStage(1)} className={`absolute size-6 flex justify-center items-center leading-none rounded-full ${stage >= 1 ? "bg-[#f7a01e]" : "bg-[#8a8a8a]"} top-1/2 -translate-1/2 left-1/2 text-sm`}>
              2
            </span>
            <span onClick={() => setStage(2)} className={`absolute size-6 flex justify-center items-center leading-none rounded-full ${stage >= 2 ? "bg-[#f7a01e]" : "bg-[#8a8a8a]"} top-1/2 -translate-1/2 left-3/4 text-sm`}>
              3
            </span>
          </div>
          <p className="text-xl mb-2 font-semibold">
            Sumbit Account Credentials for secure Transfer
          </p>
        </>
      )}
      {stage == 0 ? (
        <p className="text-base font-semibold mb-2">
          Step 1: Basic account info
        </p>
      ) : stage == 1 ? (
        <p className="text-base font-semibold mb-2">
          Step 2: Login Credentials
        </p>
      ) : stage == 2 ? (
        <p className="text-base font-semibold mb-2">
          Step 3: Pricing & Ownership Declaration
        </p>
      ) : (
        <></>
      )}
      {stage == 0 ? (
        <form className="py-4 px-6 md:px-8 lg:px-12 rounded-lg bg-white space-y-6">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-6 lg:gap-8">
            <div className="space-y-3 flex-1">
              <label className="block text-base font-medium">
                Social Media Platform
              </label>
              <Controller
                name="socialMediaPlatform"
                control={control}
                rules={{ required: "Social Media Platform is required" }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
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
                )}
              />
            </div>
            <div className="flex-1 space-y-3">
              <label className="block text-base font-medium">Niche</label>
              <Controller
                name="niche"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Personal, Fashion, Tech" />
                )}
              />
            </div>
          </div>
          <div className="space-y-3">
            <label className="block text-base font-medium">
              Username or Handle
            </label>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder="your username or handle" />
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-6 lg:gap-8">
            <div className="flex-1 space-y-3">
              <label className="block text-base font-medium">
                Average likes or comments per post
              </label>
              <Controller
                name="likesCount"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="average likes or comments" />
                )}
              />
            </div>
            <div className="flex-1 space-y-3">
              <label className="block text-base font-medium">
                Number of followers
              </label>
              <Controller
                name="noOfFollowers"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="number of followers" />
                )}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-6 lg:gap-8">
            <div className="flex-1 space-y-3">
              <label className="block text-base font-medium">
                Country of creation
              </label>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="country" />
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
                )}
              />
            </div>
            <div className="flex-1 space-y-3">
              <label className="block text-base font-medium">
                Link to profile
              </label>
              <Controller
                name="linkToProfile"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="https://yourprofilelink.com" />
                )}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-6 lg:gap-8">
            <div className="flex-1 space-y-3">
              <label className="block text-base font-medium">
                Engagement Rate
              </label>
              <Controller
                name="engagementRate"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="engagement rate" />
                )}
              />
            </div>
            <div className="flex-1 space-y-3">
              <label className="block text-base font-medium">Account Age</label>
              <Controller
                name="accountAge"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="account age" />
                )}
              />
            </div>
          </div>
          <Button
            onClick={()=> setStage(1)} 
            className="text-black mt-6 mx-auto block w-[150px] bg-[#f7a01e]">
            Next Step
            <ArrowRight className="inline ml-3" />
          </Button>
        </form>
      ) : stage == 1 ? (
        <form className="py-4 px-6 md:px-8 lg:px-12 rounded-lg bg-white space-y-6">
          <div className="space-y-3">
            <label className="block text-base font-medium" htmlFor="">
              Login Email
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder="youremail@example.com" />
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-6 lg:gap-8">
            <div className="flex-1 space-y-3">
              <label className="block text-base font-medium">
                Recovery Phone number
              </label>
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="your phone number" />
                )}
              />
            </div>
            <div className="flex-1 space-y-3">
              <label className="block text-base font-medium">
                Account Password
              </label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="your password" />
                )}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-6 lg:gap-8">
            <div className="flex-1 space-y-3">
              <label className="block text-base font-medium" htmlFor="">
                2FA Method
              </label>
              <Controller
                name="twoFactor"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      {twoFaArray.map((social, index) => {
                        return (
                        <SelectItem key={index} value={social}>
                          {social}
                        </SelectItem>
                      );
                      })}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="flex-1 space-y-3">
              <label className="block text-base font-medium" htmlFor="">
                is 2FA currently enabled?
              </label>
              <Controller
                name="isTwoFactorEnabled"
                control={control}
                render={({ field }) =>(
              <RadioGroup className="flex flex-row space-x-4" defaultValue={field.value} onValueChange={field.onChange}>
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
                  <label htmlFor="yes">Yes</label>
                </div>
              </RadioGroup>
              )}
              />
            </div>
          </div>
          <div className="space-y-3">
            <label className="block font-medium text-base">
              Screens of profile
            </label>
            <div onClick={handleClick} className="flex flex-col gap-1 items-center bg-white p-3 rounded-lg border border-[#f7a01e]">
              <Input 
                type="file" 
                accept="image/jpeg, image/png" 
                className="hidden"
                ref={inputRef}
                onChange={handleChange}
              />
              <Image
                src="/add-image-icon.svg"
                alt="add image icon"
                width={40}
                height={40}
              />
              {
                proofScreenshot ? <p className="text-[#8a8a8a]">{proofScreenshot.name}</p> : <p className="text-[#8a8a8a]">Add file Jpeg or PNG</p>
              }
            </div>
          </div>
          <Button
            onClick={()=> setStage(2)} 
            className="text-black mt-6 mx-auto block w-[150px] bg-[#f7a01e]">
            Finish
            <ArrowRight className="inline ml-3" />
          </Button>
        </form>
      ) : stage === 2 ? (
        <form onSubmit={handleSubmit(onSubmit)} className="py-4 px-6 md:px-8 lg:px-12 rounded-lg bg-white space-y-6">
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
                <Controller
                  control={control}
                  name="preferredPrice"
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      className="focus-visible:outline-none border-none text-black focus-visible:flex-1"
                    />
                  )}
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="block font-medium text-base" htmlFor="">
                Listing fee
              </label>
              <div className="rounded-lg p-3 flex flex-row gap-2 border border-[#f7a01e]">
                <p>₦</p>
                <Controller
                  control={control}
                  name="listingFee"
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      className="focus-visible:outline-none border-none text-black focus-visible:flex-1"
                    />
                  )}
                />
              </div>
            </div>
            <div className="space-y-3 mb-3 lg:mb-6">
              <label className="block font-medium text-base" htmlFor="">
                Estimated Pay
              </label>
              <div className="rounded-lg p-3 flex flex-row gap-2 border border-[#f7a01e]">
                <p>₦</p>
                <Controller
                  control={control}
                  name="estimatedPay"
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      className="focus-visible:outline-none border-none text-black focus-visible:flex-1"
                    />
                  )}
                />
              </div>
            </div>
          </div>
          <div className="h-1 w-full bg-[#f7a01e]"></div>
          <p className="text-xl font-medium">Ownership Declaration</p>
          <div className="flex flex-row items-center gap-4 md:gap-6">
            <Controller
              name="confirmOwnership"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  name={field.name}
                  onBlur={field.onBlur}
                  ref={field.ref}
                  className="size-6 border-[#f7a01e] accent-[#f7a01e]"
                />
              )}
            />
            <p>I confirm that i am te rightful owner of his account</p>
          </div>
          <div className="flex flex-row items-center gap-4 md:gap-6">
            <Controller
              name="confirmOwnership1"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  name={field.name}
                  onBlur={field.onBlur}
                  ref={field.ref}
                  className="size-6 border-[#f7a01e] accent-[#f7a01e]"
                />
              )}
            />
            <p>
              I understand that once the account is sold, I must not attempt to
              gain or regain access
            </p>
          </div>
          <div className="flex flex-row items-center gap-4 md:gap-6">
            <Controller
              name="confirmOwnership2"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  name={field.name}
                  onBlur={field.onBlur}
                  ref={field.ref}
                  className="size-6 border-[#f7a01e] accent-[#f7a01e]"
                />
              )}
            />
            <p>
              All credentails and recovery options have been updated to reflect
              buyer&apos;s ownership
            </p>
          </div>
          <div className="flex flex-row items-center gap-4 md:gap-6">
            <Controller
              name="confirmOwnership3"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  name={field.name}
                  onBlur={field.onBlur}
                  ref={field.ref}
                  className="size-6 border-[#f7a01e] accent-[#f7a01e]"
                />
              )}
            />
            <p>
              I agree to the terms and conditions of payment provided by
              CLoutJet and penalties for defaulting
            </p>
          </div>
          <Button
            type="submit"
            className="text-black mt-6 mx-auto block w-[150px] bg-[#f7a01e]">
            {
              isLoading ? "Loading..." : "Preview & Submit"
            }
          </Button>
        </form>
      ) : stage == 3 ? (
        <div>

        </div>
      )
      : <></>
    }
    </main>
  );
}
