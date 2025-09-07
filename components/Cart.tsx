"use client";
import { useContextValue } from "@/context";
import { formatPriceToNaira } from "@/lib/utils";
import { X } from "lucide-react";
import React from "react";



export default function Cart() {
  const { selectedAccount, setSelectedAccount, setIsCartOpen } = useContextValue();
  const total = selectedAccount.reduce((sum, acc) => {
    return sum + acc.preferredPrice;
  }, 0);

  const handleClose = () => {
    setIsCartOpen(false);
  };

  const filteredAccount = (id: string) => {
    setSelectedAccount((prev) => {
      const filterAccount = prev.filter((acc) => acc._id !== id);
      return filterAccount;
    });
  };

  return (
    <div className="h-screen w-screen fixed top-0 left-0 z-50">
      <div
        onClick={handleClose}
        className="bg-[rgba(0,0,0,0.5)] absolute top-0 left-0 w-full h-full"
      ></div>
      <div className="absolute top-0 right-0 bg-white w-[250px] lg:w-[350px] h-full">
        <X
          onClick={handleClose}
          className="absolute top-4 left-4 size-6 cursor-pointer"
        />
        <div className="mt-16 px-4 h-[400px] overflow-y-scroll">
          {selectedAccount.map((account) => (
            <div
              key={account._id}
              className="flex items-center gap-3 bg-[#f8f8f8] rounded-lg p-3 mb-3 shadow-sm relative"
            >
              <img
                src={account.logo}
                alt="Account Avatar"
                className="w-10 h-10 rounded-full object-cover border"
              />
              <div className="flex-1">
                <p className="font-semibold text-base">
                  @{account.accountUsername}
                </p>
                <p className="text-sm text-gray-500">
                  {formatPriceToNaira(account.preferredPrice)}
                </p>
              </div>
              <button
                onClick={() => filteredAccount(account._id)}
                className="p-1 rounded-full hover:bg-red-100 transition absolute top-2 right-2"
              >
                <X className="size-4 text-red-500" />
              </button>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 w-full px-4 pb-6">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between items-center py-2 border-t border-gray-200">
              <span className="font-semibold text-base">Total</span>
              <span className="font-bold text-lg text-[#f6a21b]">
                {formatPriceToNaira(total)}
              </span>
            </div>
          </div>
          <button className="w-full py-2 rounded-lg bg-[#f6a21b] text-white font-semibold text-base hover:bg-[#17233b] transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
