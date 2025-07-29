import Image from "next/image";
import wemaImg from "@/components/imgs/wema.png";
import qrcodeImg from "@/components/imgs/qrcode.png";
import { ChevronDown, Copy } from "lucide-react";

export default function VirtualPaymentPage() {
  return (
    <div className="w-full flex flex-col items-start px-8 py-10">
      {/* Title */}
      <h1 className="text-2xl font-bold text-[#17233B] mb-2">Select Choice of payment</h1>
      {/* Subtitle */}
      <h2 className="text-base font-semibold text-[#888888] mb-6">payment method</h2>

      {/* Payment Method Cards */}
      <div className="flex flex-row gap-6 mb-10">
        {/* Card */}
        <div className="w-56 h-24 bg-[#BABDC5] rounded-xl flex flex-col items-center justify-center shadow cursor-pointer">
          <span className="text-[#38393B] text-lg font-bold">Card</span>
        </div>
        {/* Crypto */}
        <div className="w-56 h-24 bg-[#17233B4D] rounded-xl flex flex-col items-center justify-center shadow cursor-pointer">
          <span className="text-[#000000B2] text-lg font-bold">Crypto</span>
        </div>
        {/* Virtual Account */}
        <div className="w-56 h-24 bg-[#17233B] rounded-xl flex flex-col items-center justify-center shadow cursor-pointer">
          <span className="text-white text-lg font-bold">Virtual account</span>
        </div>
      </div>

      {/* Select Account Section */}
      <h3 className="text-xl font-bold text-[#17233B] mb-6">Select Account</h3>
      {/* Account Select Input */}
      <div className="relative mb-6 w-[834px]">
        <div className="flex items-center bg-[#EEEEEE] w-[834px] h-[70px] rounded-xl pl-6 pr-16">
          <Image src={wemaImg} alt="Wema Bank" width={32} height={32} className="mr-3" />
          <span className="text-[#000000] text-lg font-semibold">Wema bank</span>
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2">
          <ChevronDown size={28} className="text-black" />
        </div>
      </div>
      {/* Account Number Input with Copy */}
      <div className="relative mb-12 w-[834px]">
        <div className="flex items-center bg-[#ffffff] border border-grey-800 w-[834px] h-[70px] rounded-xl pl-6 pr-32">
          <span className="text-[#000000B2] text-lg font-semibold">23468789t663</span>
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-1 cursor-pointer">
          <span className="text-[#17233B] font-semibold text-base">Copy</span>
          <Copy size={22} className="text-[#17233B]" />
        </div>
      </div>

      {/* I've sent the money Button */}
      <div className="w-full flex justify-center mb-6">
        <button
          className="w-[637px] h-[70px] bg-white text-[#17233B] text-lg font-bold rounded-xl border border-[#17233B] hover:bg-[#f4f4f4] transition"
        >
          I’ve sent the money
        </button>
      </div>
      {/* Confirm Payment Button */}
      <div className="w-full flex justify-center">
        <button
          className="w-[637px] h-[70px] bg-[#17233B] text-white text-lg font-bold rounded-xl hover:opacity-90 transition"
        >
          Confirm payment
        </button>
      </div>
    </div>
  );
}