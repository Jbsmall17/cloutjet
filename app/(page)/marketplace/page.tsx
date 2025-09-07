"use client";
import React, { useEffect, useState } from "react";
import { Search, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import BuyerAccount from "@/components/BuyerAccount";
import axios from "axios";
import MainLoader from "@/components/ui/MainLoader";
import { account,  } from "@/context";


export default function Page() {
  const [availableAccount, setAvailableAccount] = useState<account[]>(
    []
  );
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const DropDownComp = ({
    title,
    items,
  }: {
    title: string;
    items: string[];
  }) => {
    return (
      <div className="relative px-6 pb-4">
        <div className="flex flex-row items-center gap-6 justify-between mb-3">
          <p className="text-black text-base font-semibold">{title}</p>
          <ChevronDown className="size-5" />
        </div>
        <ul className="text-black rounded-lg">
          {items.map((item, index) => (
            <li key={index} className="cursor-pointer">
              <input type="checkbox" className="mr-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const getMarketplace = () => {
    const limit = 10;
    const endpoint = `https://cloud-jet-production.up.railway.app/v1/marketPlace?search=${keyword}&page=${page}&limit=${limit}`;
    axios
      .get(endpoint)
      .then((res) => {
        console.log(res.data.data.results)
        setAvailableAccount([...res.data.data.results]);
        setTotalPage(res.data.data.totalPages);
      })
      .catch(() => {
        setAvailableAccount([])
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getMarketplace();
  }, [page, keyword]);

  const pagesArray = Array.from({ length: totalPage }, (_, i) => i + 1);

  return (
    <>
      {/* <Cart /> */}
      <section className="bg-[#17223b]">
        <section className="max-w-screen-2xl mx-auto px-[5%] 2xl:px-0 text-white pb-4 md:pb-6 lg:pb-8 pt-8 md:pt-10 lg:pt-14 flex flex-col md:flex-row justify-between gap-4 md:items-center">
          <div>
            <p className="text-2xl font-semibold mb-1">Marketplace</p>
            <p className="w-[250px]">
              Gain full access to all products offered by our verified Merchants
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 md:gap-4 lg:gap-8 lg:mt-8 lg:mt-10">
            <p className="text-xl font-semibold lg:self-end">Latest Account</p>
            <div className="relative w-full md:w-[300px] lg:w-[400px] text-black rounded-xl bg-white">
              <Search className="absolute top-[50%] -translate-y-[50%] left-6" />
              <input
                type="text"
                placeholder="Search by name or description"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                // className="input input-bordered w-full max-w-xs"
                className="h-full w-full py-2 pl-14 focus:outline-none"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-row gap-4 pb-6 md:pb-8 lg:pb-10">
          <div className="hidden lg:block bg-white">
            <p className="py-2 px-6 mb-4 border-b border-b-[#b3b3b3] text-base font-semibold">
              Account Category
            </p>
            <DropDownComp
              title="Social Media"
              items={[
                "Facebook",
                "Instagram",
                "Twitter",
                "Snappchat",
                "LinkedIn",
                "Pinterest",
                "Threads",
                "YouTube",
              ]}
            />
            <DropDownComp
              title="Email & Messaging Service"
              items={[
                "Gmail",
                "Yahoo mail",
                "Whatsapp",
                "Outlook",
                "Telegram",
                "Wechat",
                "Google voice",
              ]}
            />
          </div>
          <div className="flex-1 bg-white">
            {isLoading ? (
              <div className="h-screen bg-[#ededed] flex justify-center items-center">
                <MainLoader />
              </div>
            ) : availableAccount.length > 0 ? (
              <div className="bg-[#ededed] pt-4 pt-4 md:pb-10 px-4 md:px-6">
                {availableAccount.map((account) => (
                  <BuyerAccount
                    key={account._id}
                    social={account.logo}
                    country={account.countryOfCreation}
                    price={account.preferredPrice}
                    desc={account.description}
                    profilePic="/profilepic.svg"
                    userName="John Doe"
                    showPreview={true}
                    profileLink={account.profileLink}
                    accountUsername={account.accountUsername}
                    niche={account.niche}
                    followersCount={account.followersCount}
                    twoFAEnabled={account.twoFAEnabled}
                    proofScreenshotUrl={account.proofScreenshotUrl}
                    listingFee={account.listingFee}
                    accountAge={account.accountAge}
                    engagementRate={account.engagementRate}
                    account={account}
                  />
                ))}
              </div>
            ) : (
              <div className="h-screen bg-[#ededed] pt-4 pt-4 md:pb-10 px-6 md:px-6">
                <p>No Account Listed</p>
              </div>
            )}
            {totalPage !== 0 && (
              <>
                <div className="flex flex-row gap-6 items-center justify-center my-6">
                  <ChevronLeft
                    onClick={()=>{
                      setPage((prev)=>{
                        if(prev <= 1){
                          return 1
                        }
                        return prev - 1
                      })  
                    }}
                    className="cursor-pointer" 
                  />
                  <ul className="flex flex-row items-center gap-2">
                    {pagesArray.map((page, index) => (
                      <li
                        onClick={() => {
                          setPage(page)
                        }}
                        key={index}
                        className="cursor-pointer size-6 rounded-full hover:bg-[#f7a01e] hover:text-white flex justify-center items-center"
                      >
                        {page}
                      </li>
                    ))}
                  </ul>
                  <ChevronRight 
                    onClick={()=>{
                      setPage((prev)=>{
                        if(prev >= totalPage){
                          return prev
                        }
                        return prev + 1
                      })
                    }}
                    className="cursor-pointer" 
                  />
                </div>
              </>
            )}
          </div>
        </section>
      </section>
    </>
  );
}
