"use client";
import React, { useEffect, useState } from "react";
import { Search, ChevronDown, ChevronLeft, ChevronRight, Filter, X } from "lucide-react";
import BuyerAccount from "@/components/BuyerAccount";
import axios from "axios";
import MainLoader from "@/components/ui/MainLoader";
import { account } from "@/context";
import Image from "next/image";

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export default function Page() {
  const [availableAccount, setAvailableAccount] = useState<account[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isCategory, setIsCategory] = useState(false)
  const DropDownComp = ({
    title,
    items,
    icon
  }: {
    title: string;
    items: {social: string,icon:string}[];
    icon: string
  }) => {
    const [isOpen, setIsOpen] = useState(true);
    const handleClick = () => {
      setIsOpen(!isOpen);
    };
    const Item = ({item}: {item : {social: string,icon:string}}) => {
      const handleChange = (keyword : string) =>{
        setKeyword(keyword)
      }
      return (
        <li className="cursor-pointer">
          <input
            type="checkbox"
            className="mr-2"
            checked={item.social.toLowerCase() === keyword.toLowerCase()}
            onChange={()=>handleChange(item.social.toLowerCase())}
          />
          <Image
            src={item.icon}
            alt={`${item.social} icon`}
            width={16}
            height={16}
            className="inline mx-2"
          />
          <span>{item.social}</span>
        </li>
      );
    };

    return (
      <div className="relative px-6 pb-4">
        <div className="flex flex-row items-center gap-6 justify-between mb-3">
          <div className="flex flex-row items-center gap-2">
            <Image
              src={icon}
              alt={`${title}'s icon`}
              width={20}
              height={20}
            />
            <p className="text-black text-base font-semibold">{title}</p>
          </div>
          <ChevronDown
            onClick={handleClick}
            className={`size-5 ${
              !isOpen ? "-rotate-90" : "rotate-0"
            } cursor-pointer`}
          />
        </div>
        <ul className={`text-black rounded-lg ${!isOpen ? "hidden" : "block"}`}>
          {items.map((item, index) => (
            <Item item={item} key={index} />
          ))}
        </ul>
      </div>
    );
  };

  const getMarketplace = () => {
    const limit = 10;
    const endpoint = `${baseUrl}/v1/marketPlace?search=${keyword}&page=${page}&limit=${limit}`;
    axios
      .get(endpoint)
      .then((res) => {
        setAvailableAccount([...res.data.data.results]);
        setTotalPage(res.data.data.totalPages);
      })
      .catch(() => {
        setAvailableAccount([]);
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
      <section className="bg-[#17223b] h-screen overflow-hidden">
        <section className="max-w-screen-2xl mx-auto px-[5%] 2xl:px-0 text-white pb-2 md:pb-8 lg:pb-6 pt-4 md:pt-6 lg:pt-8 flex flex-col md:flex-row justify-between gap-4 md:items-center">
          <div>
            <p className="text-xl md:text-2xl font-semibold mb-1">Marketplace</p>
            <p className="lg:w-[250px]">
              Gain full access to all products offered by our verified Merchants
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 md:gap-4 lg:gap-8 lg:mt-8 lg:mt-10">
            <p className="text-xl font-semibold lg:self-end">Latest Account</p>
            <div className="flex flex-row items-center gap-4">
              <div className="relative w-full md:w-[300px] lg:w-[400px] text-black rounded-xl bg-white">
                <Search className="absolute top-[50%] -translate-y-[50%] left-6" />
                <input
                  type="text"
                  placeholder="Search by name or description"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="h-full w-full py-2 pl-14 focus:outline-none"
                />
              </div>
              <Filter onClick={()=> setIsCategory(true)} className="block lg:hidden" />
            </div>
          </div>
        </section>
        <section className="relative flex flex-row gap-4">
          <div className={`overflow-y-auto h-[calc(100vh-140px)] absolute top-0 left-0 ${isCategory ? "block" : "hidden lg:block"} lg:static bg-white rounded-tr-xl rounded-br-xl shadow-md lg:shadow-none`}>
            <div className="py-2 px-6 mb-4 border-b border-b-[#b3b3b3] flex flex-row justify-between items-center">
              <p className="text-base font-semibold">
                Account Category
              </p>
              <X 
                onClick={() => setIsCategory(!isCategory)} 
                className="block lg:hidden" 
              />
            </div>
            <DropDownComp
              title="Social Media"
              icon="/socialmedia.png"
              items={[
                {
                  social: "Facebook",
                  icon: "/facebook.png"
                },
                {
                  social: "Instagram",
                  icon: "/instagram.png"
                },
                {
                  social: "Twitter",
                  icon: "/twitter.png"
                },
                {
                  social: "Snapchat",
                  icon: "/snapchat.png"
                },
                {
                  social: "LinkedIn",
                  icon: "/linkedin.png"
                },
                {
                  social: "Pinterest",
                  icon: "/pinterest.png"
                },
                {
                  social: "Threads",
                  icon: "/threads.png"
                },
                {
                  social: "YouTube",
                  icon: "/youtube.png"
                }
              ]}
            />
            <DropDownComp
              title="Email & Messaging Service"
              icon={"/email.png"}
              items={[
                {
                  social: "Gmail",
                  icon: "/gmail.png"
                },
                {
                  social: "Yahoo mail",
                  icon: "/yahoo.png"
                },
                {
                  social: "Whatsapp",
                  icon: "/whatsapp.png"
                },
                {
                  social: "Outlook",
                  icon: "/outlook.png",
                },
                {
                  social: "Telegram",
                  icon: "/telegram.png"
                },
                {
                  social: "Wechat",
                  icon: "/wechat.png"
                },
                {
                  social: "Google voice",
                  icon: "/googlevoice.png"
                },
              ]}
            />
            <DropDownComp
              title="Giftcards"
              icon={"/gift.png"}
              items={
                [
                  {
                    social: "Google play",
                    icon: "/googleplay.png"   
                  },
                  {
                    social: "Playstation",
                    icon: "/playstation.png"
                  }
                ]
              }
            />
            <DropDownComp
              title="E-commerce platforms"
              icon="/ecommerce.png"
              items={[
                {
                  social: "Ebay",
                  icon: "/ebay.png"
                },
                {
                  social: "Amazon",
                  icon: "/amazon.png",
                },
                {
                  social: "Nike",
                  icon: "/amex.png"
                }
              ]}
            />
            <DropDownComp
              title="VPN & PROXYs"
              icon="/ecommerce.png"
              items={
                [
                  {
                    social: "Nord",
                    icon: "/nord2.png"
                  },
                  {
                    social: "Windscribe",
                    icon: "/windscribe.png"
                  },
                  {
                    social: "Express",
                    icon: "/expressvpn.png"
                  },
                  {
                    social: "Surfshark",
                    icon: "/surfshark.png"
                  }
                ]
              }
            />
            <DropDownComp
              title="Accounts & Subscription"
              icon="/accounts.png"
              items={
                [
                  {
                    social: "Apple Music",
                    icon: "/applemusic.png"
                  },
                  {
                    social: "Netflix",
                    icon: "/netflix.png"
                  },
                  {
                    social: "Prime videos",
                    icon: "/primevideo.png"
                  },
                  {
                    social: "Spotify",
                    icon: "/spotify.png"
                  },
                  {
                    social: "Apple TV",
                    icon: "/appletv.png"
                  },
                  {
                    social: "Audiomack",
                    icon: "/audiomack.png"
                  },
                  {
                    social: "Youtube",
                    icon: "/youtube.png"
                  } 
                ]
              }
            />
            <DropDownComp
              title="Gaming"
              icon="/gaming.png"
              items={
                [
                  {
                    social: "Playstation",
                    icon: "/playstation2.png"
                  },
                  {
                    social: "Call of duty",
                    icon: "/cod.png"
                  },
                  {
                    social: "PUBG",
                    icon: "/pubg.png"
                  },
                  {
                    social: "GTA",
                    icon: "/gta.png"
                  },
                  {
                    social: "Steam",
                    icon: "/steam.png"
                  }
                ]
              }
            />
          </div>
          <div className="flex-1 bg-white rounded-tl-none rounded-bl-none lg:rounded-tl-xl lg:rounded-bl-xl overflow-y-auto h-[calc(100vh-140px)]">
            {isLoading ? (
              <div className="h-full bg-[#ededed] flex justify-center items-center">
                <MainLoader />
              </div>
            ) : availableAccount.length > 0 ? (
              <div className="h-full bg-[#ededed] pt-4 pt-4 md:pb-10 px-4 md:px-6 min-h-[475px] rounded-tl-none rounded-bl-none lg:rounded-tl-xl lg:rounded-bl-xl">
                {availableAccount.map((account, idx) => (
                  <BuyerAccount
                    key={idx}
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
              <div className="h-screen bg-[#ededed] pt-4 pt-4 md:pb-10 px-6 md:px-6 flex justify-center items-center">
                <p className="text-xl font-medium">No Account Listed</p>
              </div>
            )}
            {totalPage !== 0 && (
              <>
                <div className="flex flex-row gap-6 items-center justify-center my-4">
                  <ChevronLeft
                    onClick={() => {
                      setPage((prev) => {
                        if (prev <= 1) {
                          return 1;
                        }
                        return prev - 1;
                      });
                    }}
                    className="cursor-pointer"
                  />
                  <ul className="flex flex-row items-center gap-2">
                    {pagesArray.map((page, index) => (
                      <li
                        onClick={() => {
                          setPage(page);
                        }}
                        key={index}
                        className="cursor-pointer size-6 rounded-full hover:bg-[#f7a01e] hover:text-white flex justify-center items-center"
                      >
                        {page}
                      </li>
                    ))}
                  </ul>
                  <ChevronRight
                    onClick={() => {
                      setPage((prev) => {
                        if (prev >= totalPage) {
                          return prev;
                        }
                        return prev + 1;
                      });
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
