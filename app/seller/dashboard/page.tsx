"use client";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useContextValue } from "@/context";
import { formatDate } from "@/lib/utils";
import { Dialog, DialogDescription, DialogTrigger } from "@radix-ui/react-dialog";
import axios from "axios";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export default function Page() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { sellerStats, setSellerStats} = useContextValue();
  const [token, setToken] = useState<string | null>(null);
  const getDashboardStats = () => {
    const endpoint =
      `${baseUrl}/v1/user/dashboard-statistics`;
      setIsLoading(true)
    axios
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const sellerStatsObj = response.data.data;
        setSellerStats({
          ...sellerStatsObj,
        });
      })
      .catch(() => {
        setSellerStats({
          engagementGrowth: "0.00%",
          purchasesCount: 0,
          recentActivities: [],
          recentTransactions: [],
          totalOrders: 0,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const formatTime = (time: string) => {
    const date = new Date(time);
    const timeString = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return timeString.replace(" AM", "am").replace(" PM", "pm");
  };


  const formatId = (id: number) => {
    return `TRANS-0${id}`
  }

  const handleNavigation = (path: string) => {
    router.push(path);
  };


  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      if (sellerStats.engagementGrowth === "") {
        getDashboardStats();
      }
    }
  }, [token]);

  return (
    // <section className="pagelayout flex-1 flex flex-col h-[calc(100vh-164px)] lg:h-[calc(100vh-188.5px)] overflow-y-auto">
      <>
      {!isLoading || token ? (
        <div className="flex-1 pr-[2%] lg:h-[calc(100vh-80.5px)] overflow-y-auto">
          <div className="rounded-xl border border-[#f8a11e] px-4 md:px-6 lg:px-8 py-3 md:py-5 lg:py-7">
          <p className="text-xl font-semibold mb-4 md:mb-6 lg:mb-8">
            Quick action
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <div
              onClick={() => handleNavigation("/seller/buy-sell-account/buy")}
              className="flex-1 rounded-lg bg-white py-12 flex flex-col items-center gap-4 cursor-pointer hover:bg-[#f8a11e]"
            >
              <Image
                className="size-8"
                src="/chart-icon.svg"
                width={40}
                height={40}
                alt="buy icon"
              />
              <p>Buy accounts</p>
            </div>
            <div
              onClick={() => handleNavigation("/seller/buy-sell-account/sell")}
              className="flex-1 rounded-lg  bg-white py-12 flex flex-col items-center gap-4 cursor-pointer hover:bg-[#f8a11e]"
            >
              <Image
                className="size-8"
                src="/sell-icon.svg"
                width={40}
                height={40}
                alt="sell icon"
              />
              <p>Sell accounts</p>
            </div>
            <div
              onClick={() => handleNavigation("/grow-media")}
              className="flex-1 rounded-lg  bg-white py-12 flex flex-col items-center gap-4 cursor-pointer hover:bg-[#f8a11e]"
            >
              <Image
                className="size-8"
                src="/grow-icon.svg"
                width={40}
                height={40}
                alt="grow icon"
              />
              <p>Grow socials</p>
            </div>
            <div className="flex-1 rounded-lg  bg-white py-12 flex flex-col items-center gap-4 cursor-pointer hover:bg-[#f8a11e]">
              <Image
                className="size-8"
                src="/vpn-icon.svg"
                width={40}
                height={40}
                alt="vpn icon"
              />
              <p>VPN logs</p>
            </div>
          </div>
          <p className="text-xl font-semibold my-2 md:my-4">Stat Overview</p>
          <div className="flex flex-col md:flex-row gap-4 mb-2 md:mb-4">
            <div className="py-5 bg-white flex-1 flex flex-col gap-2 items-center rounded-lg">
              <p className="text-2xl font-semibold">
                {sellerStats.purchasesCount < 10
                  ? `0${sellerStats.purchasesCount}`
                  : sellerStats.purchasesCount}
              </p>
              <p className="text-base">Purchases made</p>
            </div>
            <div className="py-5 bg-white flex-1 flex flex-col gap-2 items-center rounded-lg">
              <p className="text-2xl font-semibold">
                {sellerStats.totalOrders < 10
                  ? `0${sellerStats.totalOrders}`
                  : sellerStats.totalOrders}
              </p>
              <p className="text-base">Total Order</p>
            </div>
            <div className="py-5 bg-white flex-1 flex flex-col gap-2 items-center rounded-lg">
              <p className="text-2xl font-semibold">
                {sellerStats.engagementGrowth || "0.00%"}
              </p>
              <p className="text-base">Engagement Growth</p>
            </div>
          </div>
          <div className="my-2 md:my-4 flex flex flex-col md:flex-row gap-4">
            <div className="flex-1 space-y-4">
              <div className="bg-white rounded-lg p-4">
                <p className="text-center text-xl mb-3 pb-2 border-b border-b-[#c4c4c4] font-semibold">
                  Influencer
                </p>
                <Button className="block mx-auto px-4 h-12 bg-[#f8a11e] text-black">
                  Apply as an influencer
                </Button>
              </div>
              <div className="bg-white rounded-lg p-4 space-y-3">
                <p className="font-semibold text-center">
                  Account Verification
                  <br />
                  Status
                </p>
                <Button
                  variant={"outline"}
                  className="block mx-auto px-6 block text-black"
                >
                  Get Verified now
                </Button>
                <div className="flex justify-center items-center gap-3">
                  <Image
                    className="size-8"
                    src="/cancelled-icon.svg"
                    alt="cancel icons"
                    width={40}
                    height={40}
                  />
                  <p className="text-sm text-red-600">Not yet verified!</p>
                </div>
              </div>
            </div>
            <div className="bg-white flex-1 p-2 rounded-lg">
              <div className="flex flex-row justify-between mb-6">
                <p className="text-xl font-semibold">Recent Activities</p>
                <p
                  className={`text-xl ${
                    sellerStats.recentActivities.length > 0
                      ? "cursor-pointer text-[#f8a11e]"
                      : "text-[#8a8a8a]"
                  }`}
                >
                  Open all
                </p>
              </div>
              {sellerStats.recentActivities.length > 0 ? (
                <div className="flex flex-col justify-between gap-6">
                  {sellerStats.recentActivities.map((activity) => (
                    <div
                      key={activity._id}
                      className="flex flex-row justify-between items-center"
                    >
                      <div className="flex flex-row gap-2">
                        <Image
                          src="/chart-icon.svg"
                          alt="icons"
                          width={20}
                          height={20}
                        />
                        <p>{activity.title}</p>
                      </div>
                      <div className="flex flex-row gap-6 lg:gap-8">
                        <p className="text-[#8a8a8a]">
                          {formatTime(activity.createdAt)}
                        </p>
                        <Dialog>
                          <DialogTrigger asChild>
                            <ChevronRight className="cursor-pointer" />
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>{activity.title}</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-2">
                              <DialogDescription>
                                <span className="font-semibold">Time:</span>{" "}
                                {formatTime(activity.createdAt)}
                              </DialogDescription>
                              {activity.message && (
                                <DialogDescription>
                                  <span className="font-semibold">
                                    Details:
                                  </span>{" "}
                                  {activity.message}
                                </DialogDescription>
                              )}
                              {activity.status && (
                                <DialogDescription>
                                  <span className="font-semibold">Status:</span>{" "}
                                  {activity.status}
                                </DialogDescription>
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex justify-center items-center h-[200px]">
                  <p className="text-xl text-[#8a8a8a]">No recent activities</p>
                </div>
              )}
            </div>
          </div>
          <div className="bg-white rounded-lg p-3">
            <div className="border-b border-b-[#c4c4c4] pb-2 flex flex flex-row justify-between pl-0 md:pl-3 pr-0 md:pr-6">
              <p className="text-xl font-semibold text-black">
                Transaction History
              </p>
              <p
                className={`text-xl font-semibold ${
                  sellerStats.recentTransactions.length > 0
                    ? "cursor-pointer text-[#f8a11e]"
                    : "text-[#8a8a8a]"
                }`}
              >
                Go to waitlist
              </p>
            </div>
            {sellerStats.recentTransactions.length > 0 ? (
              <div className="py-2 md:py-4 space-y-2 px-3 md:px-6">
                {
                  sellerStats.recentTransactions.map((transaction,index)=>(
                    <div key={transaction._id} className="text-sm font-medium flex flex-row justify-between items-center">
                      <p>{formatId(index+1)}</p>
                      <p>{formatDate(transaction.createdAt)}</p>
                      <p>{formatTime(transaction.createdAt)}</p>
                      <p>{transaction.status}</p>
                    </div>
                  ))
                }
              </div>
            ) : (
              <div className="flex justify-center items-center h-[100px]">
                <p className="text-xl text-[#8a8a8a]">No recent transactions</p>
              </div>
            )}
          </div>
          </div>
        </div>
      ) : (
        <div className="h-[calc(100vh-164px)] lg:h-[calc(100vh-188.5px)] flex-1 pr-[2%]">
        <div className="h-full flex justify-center items-center">
          <div className="animate-spin h-8 w-8 border-2 border-t-transparent border-white rounded-full"></div>
        </div>
        </div>
      )}
      </>
    // </section>
  );
}
