"use client";
import { ShieldCheck, ShoppingCart, Star, ThumbsUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { formatFollower, formatPriceToNaira } from "@/lib/utils";
import { account, useContextValue } from "@/context";
import { AlertDialog, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTrigger, AlertDialogCancel, AlertDialogContent, AlertDialogTitle } from "./ui/alert-dialog";
import {toast, Toaster} from "react-hot-toast"
import axios from "axios";
import Loader from "./ui/Loader";

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export default function BuyerAccount({
  social,
  country,
  flag,
  price,
  desc,
  profilePic,
  userName,
  profileLink,
  accountUsername,
  niche,
  followersCount,
  twoFAEnabled,
  proofScreenshotUrl,
  listingFee,
  accountAge,
  engagementRate,
  showPreview,
  account,
}: {
  social: string;
  country: string;
  flag?: string;
  price: number;
  desc: string;
  profilePic: string;
  userName: string;
  showPreview: boolean;
  profileLink?: string;
  accountUsername?: string;
  niche?: string;
  followersCount?: number;
  twoFAEnabled?: boolean;
  proofScreenshotUrl?: string;
  listingFee?: number;
  accountAge?: string;
  engagementRate?: number;
  account?: account;
}) {
  const { setSelectedAccount } = useContextValue();
  const [isShowLess, setIsShowLess] = useState(true);
  const [loading, setLoading] = useState(false)
  const [token, setToken] = useState("")
  const [open, setOpen] = useState(false)
  const addToCart = () => {
    if (account) {
      setSelectedAccount((prev) => {
        const findAccountIdx = prev.findIndex((acc) => acc._id === account._id);
        if (findAccountIdx < 0) {
          return [...prev, account];
        }
        return prev;
      });
    }
  };

  const initiateEscrow = () => {
    const endpoint = `${baseUrl}/v1/buyer/initiate-purchase/${account?._id}`
    setLoading(true)
    axios.post(endpoint,{},{
      headers : {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res)=>{
      toast.success(res.data.message)
    })
    .catch((err)=>{
      toast.error(err.response ? err.response.data.message : "unable to initiate escrow transaction")
    })
    .finally(()=>{
      setLoading(false)
      setOpen(false)
    }) 
  }

  const AccountPreview = () => {
    return (
      <>
        <Card className="flex-1">
          <CardHeader>
            <div className="flex flex-col md:flex-row sm:items-start gap-4 md:gap-6">
              <div className="shrink-0">
                {social ? (
                  <Image
                    src={social}
                    alt="Account Image"
                    className="shrink-0 w-[48px] h-[48px] lg:w-[72px] lg:h-[72px] object-cover"
                    width={72}
                    height={72}
                  />
                ) : (
                  <div className="w-[48px] h-[48px] lg:w-[72px] lg:h-[72px] rounded-lg bg-[#8a8a8a]"></div>
                )}
              </div>
              <div className="space-y-2 flex-1">
                <CardTitle className="text-xl font-semibold">
                  <Link target="_blank" href={profileLink || ""}>
                    @<span>{accountUsername}</span>
                  </Link>
                </CardTitle>
                <CardDescription className="text-sm text-black font-medium">
                  <p>
                    Niche | {niche || "N/A"} |{" "}
                    {Number(accountAge) == 1
                      ? `${accountAge} year`
                      : `${accountAge} years`}
                  </p>
                </CardDescription>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="text-center flex-1 space-y-1">
                    <p className="text-xl font-medium">
                      {followersCount && followersCount !== 0
                        ? formatFollower(followersCount)
                        : "N/A"}
                    </p>
                    <p className="text-sm text-black">Followers</p>
                  </div>
                  <div className="min-h-[2px] w-full sm:w-[2px] sm:min-h-[20px] bg-black"></div>
                  <div className="text-center space-y-1">
                    <div className="flex-[1.25] flex flex-row items-center gap-1 justify-center">
                      <Star className="size-6 text-[#ffef5e] fill-current" />
                      <Star className="size-6 text-[#ffef5e] fill-current" />
                      <Star className="size-6 text-[#ffef5e] fill-current" />
                      <Star className="size-6 text-[#8a8a8a] fill-current" />
                      <Star className="size-6 text-[#8a8a8a] fill-current" />
                    </div>
                    <p className="text-sm text-black">Seller&apos;s rating</p>
                  </div>
                  <div className="min-h-[2px] w-full sm:w-[2px] sm:min-h-[20px] bg-black"></div>
                  <div className="flex-1 text-center">
                    <p className="text-xl font-medium">
                      {formatPriceToNaira(price)}
                    </p>
                    <p className="text-sm text-black">Price</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-4">
              <Badge variant="secondary" className="py-1.5">
                <ThumbsUp className="size-5 text-green-700 fill-current" />
                Verified
              </Badge>
              <Badge variant="secondary" className="py-1.5">
                {twoFAEnabled ? "2FA enabled" : "2FA Not enabled"}
              </Badge>
              <Badge variant="secondary" className="py-1.5">
                {engagementRate && engagementRate !== 0
                  ? `${engagementRate}% Enagagement rate`
                  : "N/A"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-medium mb-4">Proof</p>
            <div className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px] border-2 border-[#f8a11e] rounded-xl flex justify-center items-center">
              {proofScreenshotUrl ? (
                <Image
                  src={proofScreenshotUrl}
                  alt="screenshot"
                  className="rounded-xl h-full w-full object-cover"
                  width={400}
                  height={400}
                />
              ) : (
                <p className="text-sm text-[#8a8a8a]">Image Not Found</p>
              )}
            </div>
          </CardContent>
        </Card>
        <div className="bg-white rounded-lg shadow-md px-2 py-4 lg:p-4 w-full sm:w-[250px] md:w-[150px] xl:w-[175px]">
          <div className="space-y-4 mb-4 md:mb-6 lg:mb-8">
            <div className="space-y-2 text-center">
              <p className="text-sm font-medium">Account Price</p>
              <p className="text-sm text-black">
                {price !== 0 ? formatPriceToNaira(price) : "N/A"}
              </p>
            </div>
            <div className="space-y-2 text-center">
              <p className="text-sm font-medium">Service fee</p>
              <p className="text-sm text-black">
                {listingFee !== 0 ? formatPriceToNaira(listingFee || 0) : "N/A"}
              </p>
            </div>
            <div className="space-y-2 text-center">
              <p className="text-sm font-medium">Total cost</p>
              <p className="text-sm text-black">
                {price && listingFee
                  ? formatPriceToNaira(price + listingFee)
                  : "N/A"}
              </p>
            </div>
          </div>
            <AlertDialog open={open} onOpenChange={setOpen}>
              <AlertDialogTrigger asChild>
                <Button
                  variant={"default"}
                  className="py-3 w-full bg-[#f7a01e] text-black cursor-pointer"
                >
                  Buy Now
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Do you want to purchase account?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. Escrow Transaction will be initiated
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <Button 
                    onClick={initiateEscrow} 
                    variant={'default'}
                    className="w-[75px]"
                  >
                    {
                      loading
                      ? <Loader />
                      : "Purchase"
                    }
                  </Button>
                </AlertDialogFooter> 
              </AlertDialogContent>
            </AlertDialog>
            <Button
              variant={"outline"}
              className="py-3 w-full border border-[#f7a01e] cursor-pointer text-black hover:bg-[#f7a01e] hover:text-white mt-4 mb-4 md:mb-6 lg:mb-8"
              onClick={addToCart}
            >
              Add to Cart
            </Button>
          <div className="font-semibold rounded-lg bg-[#b5f2cb] rounded-lg p-2 text-xs md:text-sm">
            <div className="flex flex-row gap-2 items-center mb-2">
              <ShieldCheck className="size-4 shrink-0" />
              <p>100% safe transaction</p>
            </div>
            <p>
              Cloutjet holds your payment securely until the account is
              transferred securely.
            </p>
          </div>
        </div>
      </>
    );
  };

  useEffect(()=>{
    const storedToken = sessionStorage.getItem('token')
    if(storedToken){
      setToken(storedToken)
    }
  },[])

  return (
    <div className="mb-4 rounded-lg border border-[#17223b] py-1.5 md:py-2.5 px-2 md:px-4 flex flex-row md:items-center gap-4 md:gap-6 lg:gap-8">
      <Toaster />
      <div>
        <img src={social} className="size-10 md:size-12" />
      </div>
      <div className="flex-1">
        <div className="flex flex-row items-center justify-between mb-1">
          <p className="flex flex-row items-center gap-4">
            <span className="font-semibold text-base md:ext-xl">{country}</span>
            {flag && <img className="size-6 md:size-8" src={flag} />}
          </p>
          {
            showPreview && price
            &&
            <p className="font-semibold text-base">{formatPriceToNaira(price)}</p>
          }
        </div>
        <div className="flex flex-row justify-center">
        <p className="text-base hidden md:block md:pr-10 lg:pr-12 lg:pr-16 xl:pr-24 mb-1">
          {desc.length > 90 && isShowLess ? (
            <>
              {desc.substring(0, 90)}
              {"..."}
              <span
                onClick={() => setIsShowLess(!isShowLess)}
                className="ml-2 text-[#8a8a8a] cursor-pointer"
              >
                show more
              </span>
            </>
          ) : (
            <>
              {desc}
              <span
                onClick={() => setIsShowLess(!isShowLess)}
                className="ml-2 text-[#8a8a8a] cursor-pointer"
              >
                show less
              </span>
            </>
          )}
        </p>
        <p className="text-base md:text-xl block md:hidden mb-1">
          {isShowLess ? (
            <>
              {desc.substring(0, 80)}
              {"..."}
              <span
                onClick={() => setIsShowLess(!isShowLess)}
                className="ml-2 text-[#8a8a8a] cursor-pointer"
              >
                show more
              </span>
            </>
          ) : (
            <>
              {desc}
              <span
                onClick={() => setIsShowLess(!isShowLess)}
                className="ml-2 text-[#8a8a8a] cursor-pointer"
              >
                show less
              </span>
            </>
          )}
        </p>
        {
          !showPreview
          &&
          <Button className="cursor-pointer bg-[#f5a21b] text-black rounded-lg px-4">Report Product</Button>
        }
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-4">
            <img
              src={profilePic}
              alt="Profile Picture"
              className="size-6 md:size-10"
            />
            <p className="text-base font-semibold">{userName}</p>
          </div>
          {showPreview && (
            <div className="flex flex-row items-center gap-3">
              <div
                onClick={addToCart}
                className="cursor-pointer rounded-md h-8 md:h-10 w-8 md:w-10 bg-[#f6a21b] flex items-center justify-center"
              >
                <ShoppingCart className="size-4 md:size-6 text-white" />
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="border border-black py-1 md:py-2 px-4 rounded-md text-black hover:bg-black hover:text-white cursor-pointer">
                    Preview
                  </button>
                </DialogTrigger>
                <DialogContent className="max-h-[90vh]  lg:max-w-5xl overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Account Preview</DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-start">
                    <AccountPreview />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
