import Image from "next/image";
import bitcoinImg from "@/components/imgs/bitcoin.png";
import qrcodeImg from "@/components/imgs/qrcode.png";
import { ChevronDown } from "lucide-react";

export default function CryptoPaymentPage() {
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
        <div className="w-56 h-24 bg-[#17233B] rounded-xl flex flex-col items-center justify-center shadow cursor-pointer">
          <span className="text-white text-lg font-bold">Crypto</span>
        </div>
        {/* Virtual Account */}
        <div className="w-56 h-24 bg-[#17233B4D] rounded-xl flex flex-col items-center justify-center shadow cursor-pointer">
          <span className="text-[#000000B2] text-lg font-bold">Virtual account</span>
        </div>
      </div>

      {/* Select Cryptocurrency Section */}
      <h3 className="text-xl font-bold text-[#17233B] mb-6">Select Cryptocurrency</h3>
      {/* Crypto Select Input */}
      <div className="relative mb-6 w-[834px]">
        <div className="flex items-center bg-[#EEEEEE] w-[834px] h-[70px] rounded-xl pl-6 pr-16">
          <Image src={bitcoinImg} alt="Bitcoin" width={32} height={32} className="mr-3" />
          <span className="text-[#000000] text-lg font-semibold">Bitcoin</span>
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2">
          <ChevronDown size={28} className="text-black" />
        </div>
      </div>
      {/* Crypto Address Input */}
      <input
  type="text"
  value="bc1qxy2kgdygjrs2n0hjkfsxnj0whgfvcvhu8bnn"
  readOnly
  className="w-[834px] h-[70px] rounded-xl border border-gray-300 pl-6 text-lg bg-[#ffffff] text-[#000000B2] mb-12 focus:outline-none"
/>

      {/* QR Section */}
      <div className="w-full flex flex-col items-center mb-12">
        <span className="text-base font-semibold text-[#888888] mb-4">or scan qr code to make payment</span>
        <Image src={qrcodeImg} alt="QR Code" width={339} height={339} className="mb-8" />
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