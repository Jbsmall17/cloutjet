"use client";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import React, { useEffect, useRef, useState } from "react";
import {
  Check,
  Loader2,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Link from "next/link";



type pricingType = {
  bots: {
    pricePerUnit: number;
    deliveryPer1000: number;
  };
  real: {
    pricePerUnit: number;
    deliveryPer1000: number;
  };
};

const PRICING_RULES: pricingType = {
  bots: {
    pricePerUnit: 0.05, // ₦ per engagement
    deliveryPer1000: 1  // 1 day per 1000 units
  },
  real: {
    pricePerUnit: 1.5,  // ₦ per engagement
    deliveryPer1000: 3  // 3 days per 1000 units
  }
}

type platformType = {
  instagram: number;
  twitter: number;
  facebook: number;
  tiktok: number;
  linkedIn: number;
  youtube: number;
  threads: number;
  snapchat: number;
  tinder: number;
  default: number;
}

const PLATFORM_FEES: platformType = {
  instagram: 50,
  twitter: 40,
  facebook: 30,
  tiktok: 60,
  linkedIn: 80,
  youtube: 70,
  threads: 45,
  snapchat: 55,
  tinder: 35,
  default: 20
};

const baseUrl = process.env.NEXT_PUBLIC_API_URL

const calculateOrderDetails = (engagementOption : 'bots' | 'real', quantity : number, platform : 'instagram' | 'twitter' | 'facebook' | 'tiktok' | 'linkedIn' | 'youtube' | 'threads' | 'snapchat' | 'tinder' ) => {
  const SERVICE_FEE = 1000
  const rules = PRICING_RULES[engagementOption];
  if (!rules) throw new Error("Invalid engagement option");

  const engagementCost = quantity * rules.pricePerUnit;
  const platformFee = PLATFORM_FEES[platform] || PLATFORM_FEES.default;

  const totalPrice = engagementCost + platformFee + SERVICE_FEE;
  const estimatedDeliveryDays = Math.ceil((quantity / 1000) * rules.deliveryPer1000);

  return { 
    engagementCost,
    platformFee,
    serviceFee: SERVICE_FEE,
    totalPrice,
    estimatedDeliveryDays
  };
};

export default function Page() {
  const [stage, setStage] = useState(0);
  const [type, setType] = useState("")
  const divRef = useRef<HTMLDivElement>(null);
  const orderRef = useRef<HTMLDivElement>(null)
  
  const goToNextStage = (type : string) => {
    setStage(stage + 1);
    setType(type);
    divRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  };



  const HomeScreen = () => {
    return (
      <>
        <section className="bg-[#17233b] text-white pb-8 md:pb-10 lg:pb-14 lg:pb-16">
          <div className="text-black max-w-screen-2xl px-[5%] 2xl:px-0 mx-auto flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
            <div className="relative p-4 md:p-6 pb-8 md:pb-10 flex-1 bg-white rounded-lg border-[#f8a11e] border-2">
              <Badge className="absolute top-0 left-[50%] -translate-[50%] text-white bg-[#c837ab] px-3.5">
                Clout Bot
              </Badge>
              <div className="text-center space-y-4 pb-2 md:pb-3 border-b border-b-[#b3b3b3]">
                <p className="text-base md:text-xl font-semibold">
                  Bots Engagements
                </p>
                <p className="text-base md:text-xl font-normal">
                  The sure way to quickly gain
                  <br /> engagements in the fastest time possible
                </p>
              </div>
              <ul className="pt-6 pb-10 space-y-4 flex flex-col items-center">
                <li className="sm:w-1/2">
                  <Check className="mr-4 inline text-[#f8a11e] font-medium" />
                  <span>Speed and instant Delivery</span>
                </li>
                <li className="sm:w-1/2">
                  <Check className="mr-4 inline text-[#f8a11e] font-medium" />
                  <span>High Volume with no hassle</span>
                </li>
                <li className="sm:w-1/2">
                  <Check className="mr-4 inline text-[#f8a11e] font-medium" />
                  <span>Low cost/Affordability</span>
                </li>
              </ul>
              <Button
                onClick={() => {goToNextStage("bots")}}
                className="cursor-pointer block mx-auto bg-[#f8a11e] text-black hover-opacity-80 cursor-ponter"
                size={"lg"}
              >
                Start growing
              </Button>
            </div>
            <div className="relative p-4 md:p-6 pb-8 md:pb-10 flex-1 bg-white rounded-lg border-[#1877f2] border-2">
              <Badge className="absolute top-0 left-[50%] -translate-[50%] text-white bg-[#1877f2] px-3.5">
                Clout Real
              </Badge>
              <div className="text-center space-y-4 pb-2 md:pb-3 border-b border-b-[#b3b3b3]">
                <p className="text-base md:text-xl font-semibold">
                  Real Engagements
                </p>
                <p className="text-base md:text-xl font-normal">
                  The sure way to quickly gain engagements in the fastest time
                  possible
                </p>
              </div>
              <ul className="pt-6 pb-10 space-y-4 flex flex-col items-center">
                <li className="sm:w-1/2">
                  <Check className="mr-4 inline text-[#f8a11e] font-medium" />
                  <span>Authenticity and Credibility</span>
                </li>
                <li className="sm:w-1/2">
                  <Check className="mr-4 inline text-[#f8a11e] font-medium" />
                  <span>Better algoritm Boost</span>
                </li>
                <li className="sm:w-1/2">
                  <Check className="mr-4 inline text-[#f8a11e] font-medium" />
                  <span>Conversion Potential</span>
                </li>
                <li className="sm:w-1/2">
                  <Check className="mr-4 inline text-[#f8a11e] font-medium" />
                  <span>No risk of penalties</span>
                </li>
              </ul>
              <Button
                onClick={() => {goToNextStage("real")}}
                className="cursor-pointer block mx-auto bg-[#f8a11e] text-black hover-opacity-80 cursor-ponter"
                size={"lg"}
              >
                Start growing
              </Button>
            </div>
          </div>
        </section>
        <section className="pt-4 md:pt-6 lg:pt-0 bg-white max-w-screen-2xl px-[5%] flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-8">
          <div className="space-y-6">
            <p className="hidden lg:block text-3xl font-semibold">
              We are The best for
              <br /> Content Creators &<br /> Businesses
            </p>
            <p className="text-center block lg:hidden text-2xl font-semibold">
              We are The best for Content Creators & Businesses
            </p>
            <p className="hidden lg:block text-xl font-normal">
              Your brand deserves the spotlight —<br /> boost visibility, trust
              and traffic with
              <br /> real engagement
            </p>
            <p className="text-center block lg:hidden text-xl font-normal">
              Your brand deserves the spotlight —boost visibility, trust and
              traffic with real engagement
            </p>
          </div>
          <div className="relative w-full sm:w-[400px] md:w-[500px] lg::w-[650px] h-[300px] md:h-[350px] lg:h-[550px]">
            <Image
              className="absolute top-[50%] left-[50%] -translate-[50%]"
              src="/pattern-image-grow.svg"
              alt="pattern image grow"
              width={600}
              height={600}
            />
            <Image
              className="absolute h-[70%] w-[70%] lg:h-auto lg:w-auto top-[50%] left-[50%] -translate-[50%] z-10"
              src="/pattern-image.svg"
              alt="pattern-image"
              width={400}
              height={400}
            />
          </div>
        </section>
        <section className="bg-[#17233b] max-w-screen-2xl px-[5%] py-6 md:py-8 lg:py-12">
          <p className="text-white text-2xl lg:text-3xl font-semibold mb-4 text-center">
            Testimonials and credits
          </p>
          <p className="text-white text-xl text-center mb-10">
            Check out what those who have tried our services
            <br /> are saying cause experience doesn&apos;t lie
          </p>
          <div className="space-y-8">
            <div className="mx-auto flex flex-row gap-6 min-h-[175px] max-w-[800px]">
              <div className="relative py-4 pr-4 pl-8 lg:pl-14 bg-white rounded-lg">
                <p className="text-xl font-semibold mb-1">Mrs. Clara Kent</p>
                <p className="mb-2 text-base text-grey">CEO, Bags by kent</p>
                <p className="text-sm font-semibold">
                  I really enjoy using the services of clout jet cause my online
                  presence has grown and is still growing at a rapid rate. All
                  thanks to the real engagement I paid for. it was worth the
                  service
                </p>
                <img
                  className="hidden lg:block h-full text-base text-normal absolute rotate-180 top-0 left-0"
                  src="/pattern.svg"
                  alt="Pattern decoration"
                />
              </div>
              <div className="hidden sm:block sm:w-[150px] lg:w-[200px] shrink-0">
                <img
                  className="h-full w-full object-contain"
                  src="/testimonials-image.svg"
                  alt="Testimonial"
                />
              </div>
            </div>
            <div className="mx-auto flex flex-row gap-6 min-h-[175px] max-w-[800px]">
              <div className="hidden sm:block sm:w-[150px] lg:w-[200px] shrink-0">
                <img
                  className="h-full w-full object-contain"
                  src="/testimonials-image.svg"
                  alt="Testimonial"
                />
              </div>
              <div className="relative py-4 pr-4 pl-8 lg:pl-14 bg-white rounded-lg">
                <p className="text-xl font-semibold mb-1">Mrs. Clara Kent</p>
                <p className="mb-2 text-base text-grey">CEO, Bags by kent</p>
                <p className="text-sm font-semibold">
                  I really enjoy using the services of clout jet cause my online
                  presence has grown and is still growing at a rapid rate. All
                  thanks to the real engagement I paid for. it was worth the
                  service
                </p>
                <img
                  className="hidden lg:block h-full text-base text-normal absolute top-0 right-0"
                  src="/pattern.svg"
                  alt="Pattern decoration"
                />
              </div>
            </div>
            <div className="mx-auto flex flex-row gap-6 min-h-[175px] max-w-[800px]">
              <div className="relative py-4 pr-4 pl-8 lg:pl-14 bg-white rounded-lg">
                <p className="text-xl font-semibold mb-1">Mrs. Clara Kent</p>
                <p className="mb-2 text-base text-grey">CEO, Bags by kent</p>
                <p className="text-sm font-semibold">
                  I really enjoy using the services of clout jet cause my online
                  presence has grown and is still growing at a rapid rate. All
                  thanks to the real engagement I paid for. it was worth the
                  service
                </p>
                <img
                  className="hidden lg:block h-full text-base text-normal absolute rotate-180 top-0 left-0"
                  src="/pattern.svg"
                  alt="Pattern decoration"
                />
              </div>
              <div className="hidden sm:block sm:w-[150px] lg:w-[200px] shrink-0">
                <img
                  className="h-full w-full object-contain"
                  src="/testimonials-image.svg"
                  alt="Testimonial"
                />
              </div>
            </div>
            <div className="flex flex-row gap-2 justify-center items-center">
              <div className="size-4 rounded-full bg-white"></div>
              <div className="size-4 rounded-full bg-white ring-2 ring-yellow-400"></div>
              <div className="size-4 rounded-full bg-white"></div>
            </div>
          </div>
        </section>
      </>
    );
  };


  const MainConent = () =>{
    const [step, setStep] = useState(0)
    const [token, setToken] = useState("")
    const [orderObj, setOrderObj] = useState({
      platform: "",
      engagementOption: type,
      engagementType: "",
      postLink: "",
      quantity: 0,
    })
    const [isPlatformVisible, setIsPlatformVisible] = useState(false)
    const handleChange = (value : string) =>{
      setOrderObj({
        ...orderObj,
        platform: value
      })
    }

    const handleEngagementTypeChange = (value : string) =>{
      setOrderObj({
        ...orderObj,
        engagementType: value
      })
    }
    const handleEngagementOptionsChange = (value : string) =>{
      setOrderObj({
        ...orderObj,
        engagementOption: value
      })
    }

    const placeOrder = () =>{
      if(orderObj.platform && orderObj.engagementOption && orderObj.engagementType && orderObj.postLink && orderObj.quantity > 0){
        setStep(1); 
        orderRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }

  const OrderSummary = () =>{
    const [isLoading, setIsLoading] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const {engagementCost, platformFee, serviceFee, totalPrice,estimatedDeliveryDays} = calculateOrderDetails(orderObj.engagementOption as 'bots' | 'real', orderObj.quantity, orderObj.platform as 'instagram' | 'twitter' | 'facebook' | 'tiktok' | 'linkedIn' | 'youtube' | 'threads' | 'snapchat' | 'tinder')
    console.log({engagementCost, platformFee, serviceFee, totalPrice, estimatedDeliveryDays})

    const formatMoney = (price: number) =>{
      return `₦ ${price.toLocaleString()}`
    }

    const postCreateOrder = (token: string) => {
      const endpoint = `${baseUrl}/v1/growth-order/create-growth-order`
      setIsLoading(true)
      axios.post(endpoint,{...orderObj},{
        headers : {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res)=>{
        console.log(res.data)
        toast.success(res.data.message || "order created successfully")
      })
      .catch((err)=>{
        toast.error(err.response ? err.response.data.message : "Failed to create order")
      })
      .finally(()=>{
        setIsLoading(false)
      })
    }

    const handleOrder = () => {
      if(!isChecked) return 
      postCreateOrder(token)
    }

    useEffect(()=>{
      const storedToken = sessionStorage.getItem("token")
      if(storedToken){
        setToken(storedToken)
      }
    },[])

    return (
      <section ref={orderRef} className="bg-[#17233b] max-w-screen-2xl px-[5%]  py-10 md:py-12 lg:py-16">
        <Toaster />
          <div className="bg-white max-w-screen-md mx-auto rounded-lg py-6 px-4 sm:px-8 md:px-12 lg:px-16">
            <p className="text-base sm:text-xl font-semibold text-center mb-4">
              Order Summary
            </p>
            <p className="text-sm md:text-base text-black text-center mb-8 md:mb-10 lg:mb-12 font-normal">
              You are about to place an order for the terms below. Please
              confirm
              <br />
              Please confirm details and agree to terms and conditions before
              you continue
            </p>
            <div className="border-y border-y-[#a99e8e] divide-y divide-[#a99e8e]">
              <div className="py-2 sm:py-4 px-2 sm:px-4 md:px-6 lg:px-10 flex flex-row justify-between items-center">
                <p className="text-sm md:text-base font-semibold">
                  {`Total ${orderObj.engagementOption.charAt(0).toUpperCase() + orderObj.engagementOption.slice(1)} Engagement`}
                </p>
                <p className="sm:w-[120px] text-sm sm:text-base font-semibold">
                  {orderObj.quantity} {orderObj.engagementType}
                </p>
              </div>
              <div className="py-2 sm:py-4 px-2 sm:px-4 md:px-6 lg:px-10 flex flex-row justify-between items-center">
                <p className="sm:text-base font-semibold">Fee breakdown</p>
              </div>
              <div className="py-2 sm:py-4 px-2 sm:px-4 md:px-6 lg:px-10 space-y-3">
                <div className="text-sm md:text-base font-semibold flex flex-row justify-between items-center text-[#a99e8e]">
                  <p>Platform fee</p>
                  <p className="sm:w-[120px]">{formatMoney(platformFee)}</p>
                </div>
                <div className="text-sm md:text-base font-semibold flex flex-row justify-between items-center text-[#a99e8e]">
                  <p>Service Fee</p>
                  <p className="text-sm md:w-[120px]">{formatMoney(serviceFee)}</p>
                </div>
                <div className="text-base font-semibold flex flex-row justify-between items-center text-black">
                  <p>Total Fee</p>
                  <p className="text-sm md:w-[120px]">{formatMoney(totalPrice)}</p>
                </div>
              </div>
              <div className="py-2 sm:py-4 px-2 sm:px-4 md:px-6 lg:px-10 text-base font-semibold flex flex-row justify-between items-center text-black">
                <p className="text-sm md:text-base">Expected delivery Window</p>
                <p className="sm:w-[120px]">{estimatedDeliveryDays} day(s)</p>
              </div>
            </div>
            <div className="px-2 sm:py-4 px-2 sm:px-4 md:px-6 lg:px-10 text-sm sm:text-base font-semibold flex flex-col sm:flex-row justify-between sm:items-center text-black">
              <p>Link account link</p>
              <p className="text-[#a99e8e]">
                {orderObj.postLink}
              </p>
            </div>
            <div className="py-4 px-4 md:px-6 lg:px-10 flex flex-row items-center">
              <Checkbox 
                checked={isChecked}
                onCheckedChange={()=> setIsChecked(!isChecked)}
                className="inline mr-4 size-6" 
                />
              <span className="text-sm md:text-base text-black">
                I agree with the{" "}
                <span className="text-[#1877f2]">Terms and Conditions</span>
              </span>
            </div>
            <Button onClick={handleOrder} className="flex justify-center item-center w-[125px] sm:w-[150px] mb-3 mx-auto mt-4 md:mt-6 lg:mt-8 bg-[#f8a11e] text-black">
              {
                isLoading
                ? <Loader2 className="animate-spin" />
                : "Confirm order"
              }
    
            </Button>
            <div className="flex justify-center items-center">
              <Link  
                href={"/seller/orders"}
                className="text-sm md:text-base text-center font-semibold">
                Track your order in Dashboard
              </Link>
            </div>
          </div>
        </section>
    )
  }

    return (
      step == 0
      ? (
        <section ref={divRef} className="bg-[#17233b] max-w-screen-2xl px-[3%] pb-14 md:pb-16 lg:pb-20">
        <section className="relative bg-white rounded-xl flex flex-row">
          <div className={`${isPlatformVisible ? "block" : "hidden lg:block" } shadow-sm bg-white absolute z-10 lg:static top-0 left-0 pb-5 pt-7 lg:pt-10 lg:pb-8 px-3 lg:px-6 border-r-2 border-[#808080] rounded-xl`}>
            <X onClick={() => setIsPlatformVisible(!isPlatformVisible)} className="block lg:hidden absolute top-3 right-3" />
            <p className="whitespace-nowrap text-base lg:text-xl font-semibold text-center mb-2 lg:mb-4">
              Social Media platform
            </p>
            <ul className="space-y-2 lg:space-y-3 ml-4 md:ml-6 lg:ml-8">
              <li className="flex flex-row gap-2 items-center">
                <Checkbox 
                  checked={orderObj.platform === "facebook"}
                  onCheckedChange={() => handleChange("facebook")}
                />
                <Image
                  src="/facebook.png"
                  alt="facebook icon"
                  width={16}
                  height={16}
                />
                <span>Facebook</span>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <Checkbox 
                  checked={orderObj.platform === "instagram"}
                  onCheckedChange={() => handleChange("instagram")}
                />
                <Image
                  src="/instagram.png"
                  alt="instagram icon"
                  width={16}
                  height={16}
                />
                <span>Instagram</span>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <Checkbox
                  checked={orderObj.platform === "twitter"}
                  onCheckedChange={() => handleChange("twitter")}
                />
                <Image
                  src="/twitter.png"
                  alt="twitter icon"
                  width={16}
                  height={16}
                />
                <span>Twitter</span>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <Checkbox 
                  checked={orderObj.platform === "snapchat"}
                  onCheckedChange={() => handleChange("snapchat")}
                />
                <Image
                  src="/snapchat.png"
                  alt="snapchat icon"
                  width={16}
                  height={16}
                />
                <span>Snapchat</span>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <Checkbox 
                  checked={orderObj.platform === "linkedin"}
                  onCheckedChange={() => handleChange("linkedin")}
                />
                <Image
                  src="/linkedin.png"
                  alt="linkedin icon"
                  width={16}
                  height={16}
                />
                <span>Linkedin</span>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <Checkbox
                  checked={orderObj.platform === "threads"}
                  onCheckedChange={() => handleChange("threads")}
                />
                <Image
                  src="/threads.png"
                  alt="threads icon"
                  width={16}
                  height={16}
                />
                <span>Threads</span>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <Checkbox
                  checked={orderObj.platform === "tiktok"}
                  onCheckedChange={() => handleChange("tiktok")}
                />
                <Image
                  src="/tiktok.png"
                  alt="tiktok icon"
                  width={16}
                  height={16}
                />
                <span>Tiktok</span>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <Checkbox 
                  checked={orderObj.platform === "tinder"}
                  onCheckedChange={() => handleChange("tinder")}
                />
                <Image
                  src="/tinder.png"
                  alt="tinder icon"
                  width={16}
                  height={16}
                />
                <span>Tinder</span>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <Checkbox 
                  checked={orderObj.platform === "youtube"}
                  onCheckedChange={() => handleChange("youtube")}
                />
                <Image
                  src="/youtube.png"
                  alt="youtube icon"
                  width={16}
                  height={16}
                />
                <span>Youtube</span>
              </li>
            </ul>
          </div>
          <div className="relative pt-6 pb-8 px-3 lg:px-6 flex-1 w-full">
            <Menu onClick={() => setIsPlatformVisible(!isPlatformVisible)} className="absolute top-4 left-3 block lg:hidden" />
            <p className="text-black text-center text-base md:text-xl font-semibold mb-2">
              Select Engagement Types
            </p>
            <p className="text-sm md:text-base text-center mb-3 lg:mb-5">
              choose from the available set of choices
            </p>
            <div  className="flex items-center flex-row flex-wrap justify-between mb-8 gap-4 sm:gap-6 lg:gap-8 xl:gap-16">
              <div onClick={()=> handleEngagementTypeChange('comments')} className={`flex-1 text-center p-2 md:p-4 text-sm md:text-base rounded-xl ${orderObj.engagementType === "comments" ? "bg-[#f8a11e] text-white border-white " : "hover:bg-[#f8a11e] hover:text-white hover:border-white border border-black"}`}>
                Comments
              </div>
              <div onClick={()=> handleEngagementTypeChange('followers')} className={`flex-1 text-center p-2 md:p-4 text-sm md:text-base rounded-xl ${orderObj.engagementType === "followers" ? "bg-[#f8a11e] text-white border-white " : "hover:bg-[#f8a11e] hover:text-white hover:border-white border border-black"}`}>
                Followers
              </div>
              <div onClick={()=> handleEngagementTypeChange('shares')} className={`flex-1 text-center p-2 md:p-4 text-sm md:text-base rounded-xl ${orderObj.engagementType === "shares" ? "bg-[#f8a11e] text-white border-white " : "hover:bg-[#f8a11e] hover:text-white hover:border-white border border-black"}`}>
                Shares
              </div>
              <div onClick={()=> handleEngagementTypeChange('likes')} className={`flex-1 text-center p-2 md:p-4 text-sm md:text-base rounded-xl ${orderObj.engagementType === "likes" ? "bg-[#f8a11e] text-white border-white " : "hover:bg-[#f8a11e] hover:text-white hover:border-white border border-black"}`}>
                Likes
              </div>
              <div onClick={() => handleEngagementTypeChange('reactions')} className={`flex-1 text-center p-2 md:p-4 text-sm md:text-base rounded-xl ${orderObj.engagementType === "reactions" ? "bg-[#f8a11e] text-white border-white " : "hover:bg-[#f8a11e] hover:text-white hover:border-white border border-black"}`}>
                Reactions
              </div>
            </div>
            <div className="max-w-[600px] mx-auto">
              <p className="text-base md:text-xl font-semibold text-center">
                Engagement Options
              </p>
              <p className="text-sm md:text-base text-center mb-2">
                Choose from the available set of choices
              </p>
              <div>
                <div onClick={() => handleEngagementOptionsChange("bots")} className={`mb-4 md:mb-6 cursor-pointer group ${orderObj.engagementOption == "bots" ? 'border border-black': "border border-gray-500 hover:border-black "} rounded-lg flex flex-row gap-4 p-3 items-center transition-all duration-300 ease-linear`}>
                  <div className={`group-hover:size-4 ${orderObj.engagementOption == 'bots' ? 'size-4 ring-4 ring-black bg-[#f8a11e]' : "size-2 ring-3 ring-[#8a8a8a]"} rounded-full group-hover:ring-4 group-hover:ring-black group-hover:bg-[#f8a11e] transition-all duration-300 ease-linear`}></div>
                  <div>
                    <p className={`group-hover:text-black ${orderObj.engagementOption == "bots" ? 'text-black' :'text-[#919191]'} text-base font-semibold transition-all duration-300 ease-linear`}>
                      Bot Engagements
                    </p>
                    <p className={`text-base group-hover:text-black ${orderObj.engagementOption == "bots" ? 'text-black' :'text-[#919191]'} transition-all duration-300 ease-linear`}>
                      Fast, cost effective results. May not be sustainable
                    </p>
                  </div>
                </div>
                <div onClick={() => handleEngagementOptionsChange("real")} className={`mb-6 md:mb-8 lg:mb-10 cursor-pointer group ${orderObj.engagementOption == "real" ? "border border-black" : "border border-gray-500 hover:border-black"} rounded-lg flex flex-row gap-4 p-3 items-center transition-all duration-300 ease-linear`}>
                  <div className={`group-hover:size-4 ${orderObj.engagementOption == "real" ? "size-4 ring-4 ring-black bg-[#f8a11e]" : "size-2 ring-3 ring-[#8a8a8a]"} rounded-full group-hover:ring-4 group-hover:ring-black group-hover:bg-[#f8a11e] transition-all duration-300 ease-linear`}></div>
                  <div>
                    <p className={`${orderObj.engagementOption == "real" ? 'text-black' : 'text-[#919191]'} group-hover:text-black text-base font-semibold transition-all duration-300 ease-linear`}>
                      Real Engagements
                    </p>
                    <p className={`text-base ${orderObj.engagementOption == "real" ? 'text-black' : "text-[#8a8a8a]"} group-hover:text-black transition-all duration-300 ease-linear`}>
                      Authentic growth via verified influencers
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-base md:text-xl font-semibold mb-4">Important Notice</p>
              <p className="text-sm md:text-base font-normal mb-4">
                Bot engagement can provide quick results but may not be
                sustainable in the long run, Real engagements offer authentic
                growth through vverified, enduring a more engaged and lasting
                audience
              </p>
              <Input
                className="border-[#8a8a8a] py-4 md:py-6 lg:py-8 pl-6 md:pl-8 lg:pl-10 text-xl mb-4"
                placeholder="Enter post Link"
                value={orderObj.postLink}
                onChange={(e)=> setOrderObj({...orderObj, postLink: e.target.value})}
              />
              <p className="block text-sm md:text-block mb-2">Quantity</p>
              <div className="flex flex-col md:flex-row justify-between lg:items-center gap-4 lg:gap-0">
                <Input
                  className="md:w-[200px] border-[#8a8a8a] py-4 md:py-6 lg:py-8 pl-4 md:pl-4 lg:pl-6 text-xl"
                  placeholder="Enter Quantity"
                  value={orderObj.quantity.toLocaleString()}
                  onChange={(e)=>{
                    const formattedValue = e.target.value.replaceAll(/\D/g,'')
                    setOrderObj({
                      ...orderObj,
                      quantity: Number(formattedValue)
                    })
                  }}
                />
                <div className="flex flex-row lg:items-center gap-4 mb-6">
                  <div 
                    onClick={()=>{
                      setOrderObj({
                        ...orderObj,
                        quantity: 200
                      })
                    }}
                    className="w-[100px] rounded-lg text-center py-3 text-[#8a8a8a] font-semibold border border-[#8a8a8a] hover:bg-[#8a8a8a] hover:text-white">
                    200
                  </div>
                  <div 
                    onClick={()=>{
                      setOrderObj({
                        ...orderObj,
                        quantity: 500
                      })
                    }}
                    className="w-[100px] rounded-lg text-center py-3 text-[#8a8a8a] font-semibold border border-[#8a8a8a]">
                    500
                  </div>
                  <div 
                      onClick={()=>{
                      setOrderObj({
                        ...orderObj,
                        quantity: 1000
                      })
                    }}
                    className="w-[100px] rounded-lg text-center py-3 text-[#8a8a8a] font-semibold border border-[#8a8a8a]">
                    1000
                  </div>
                </div>
              </div>
              <p className="text-base font-semibold mb-6">
                Live Price Quote & Estimated Delivery
                <sup>thumbs up what comments</sup>
              </p>
              <p className="text-base font-normal mb-3">
                Total Price:{" "}
                {
                  orderObj.platform && orderObj.engagementOption && orderObj.engagementType && orderObj.postLink && orderObj.quantity > 0
                  ? `₦ ${calculateOrderDetails(orderObj.engagementOption as 'bots' | 'real', orderObj.quantity, orderObj.platform as 'instagram' | 'twitter' | 'facebook' | 'tiktok' | 'linkedIn' | 'youtube' | 'threads' | 'snapchat' | 'tinder').totalPrice.toLocaleString()}`
                  : "₦ 0"
                }
              </p>
              <p className="text-base font-normal mb-6">
                Estimated Delivery:{" "} 
                {
                  orderObj.platform && orderObj.engagementOption && orderObj.engagementType && orderObj.postLink && orderObj.quantity > 0
                  ? `${calculateOrderDetails(orderObj.engagementOption as 'bots' | 'real', orderObj.quantity, orderObj.platform as 'instagram' | 'twitter' | 'facebook' | 'tiktok' | 'linkedIn' | 'youtube' | 'threads' | 'snapchat' | 'tinder').estimatedDeliveryDays} day(s)`
                  : "0 day"
                }
              </p>
              <Button
                onClick={placeOrder}
                className="w-[250px] rounded-lg bg-[#f8a11e] py-2 text-black mx-auto block hover:opacity-80 cursor-pointer flex justify-center items-center"
              >
                Place Order
              </Button>
            </div>
          </div>
        </section>
      </section>
      )
      : <OrderSummary />
    )
  }

  return (
    <>
      <section className="bg-[#17233b] text-white pt-8 md:pt-10 lg:pt-14 lg:pt-16">
        <div className="max-w-screen-2xl px-[5%] 2xl:px-0 mx-auto space-y-4 pb-8 md:pb-10 lg:pb-16">
          <p className="flex flex-row gap-4 items-center justify-center">
            <span className="h-0.5 w-12 bg-white block"></span>
            <span className="text-base md:text-xl font-normal">
              We&apos;re your new sure plug
            </span>
          </p>
          <p className="text-xl md:text-2xl font-medium text-center">
            Accelerated, Safe, Secured, Trusted
            <br /> Growths & Engagements
          </p>
          <p className="text-base md:text-xl font-normal text-center">
            Using our seamless step-by-step process to request social
            <br /> media growth engagements likes, followers, comments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              className="bg-[#f8a11e] w-[200px] text-black hover:opacity-85 cursor-pointer"
              size={"lg"}
            >
              Get started
            </Button>
            <Button
              className="bg-white w-[200px] text-black hover:opacity-85 cursor-pointer"
              size={"lg"}
            >
              Track my Order
            </Button>
          </div>
        </div>
      </section>
      {stage == 0 ? (
        <HomeScreen />
      ) : <MainConent />
      }
      <Footer />
    </>
  );
}
