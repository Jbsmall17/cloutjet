"use client";

import { useState } from "react";
import Image from "next/image";
import mastercardImg from "@/components/imgs/mastercard.png";
import bitcoinImg from "@/components/imgs/bitcoin.png";
import wemaImg from "@/components/imgs/wema.png";
import qrcodeImg from "@/components/imgs/qrcode.png";
import { ChevronDown, Copy } from "lucide-react";

type PaymentType = "card" | "crypto" | "virtual";

export default function PaymentPage() {
  const [step, setStep] = useState<PaymentType>("card");

  // Payment Method Cards
  const PaymentMethodCards = (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10 w-full">
      {/* Card */}
      <div
        className={`w-full sm:w-56 h-24 rounded-xl flex flex-col items-center justify-center shadow cursor-pointer ${
          step === "card" ? "bg-[#17233B]" : "bg-[#17233B4D]"
        }`}
        onClick={() => setStep("card")}
      >
        <span className={`text-lg font-bold ${step === "card" ? "text-white" : "text-[#000000B2]"}`}>Card</span>
      </div>
      {/* Crypto */}
      <div
        className={`w-full sm:w-56 h-24 rounded-xl flex flex-col items-center justify-center shadow cursor-pointer ${
          step === "crypto" ? "bg-[#17233B]" : "bg-[#17233B4D]"}`
        }
        onClick={() => setStep("crypto")}
      >
        <span className={`text-lg font-bold ${step === "crypto" ? "text-white" : "text-[#000000B2]"}`}>Crypto</span>
      </div>
      {/* Virtual Account */}
      <div
        className={`w-full sm:w-56 h-24 rounded-xl flex flex-col items-center justify-center shadow cursor-pointer ${
          step === "virtual" ? "bg-[#17233B]" : "bg-[#17233B4D]"}`
        }
        onClick={() => setStep("virtual")}
      >
        <span className={`text-lg font-bold ${step === "virtual" ? "text-white" : "text-[#000000B2]"}`}>Virtual account</span>
      </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col items-start px-3 sm:px-6 md:px-8 py-6 sm:py-10">
      {/* Title */}
      <h1 className="text-2xl font-bold text-[#17233B] mb-2">Select Choice of payment</h1>
      {/* Subtitle */}
      <h2 className="text-base font-semibold text-[#888888] mb-6">payment method</h2>
      {PaymentMethodCards}

      {/* Conditional Rendering */}
      {step === "card" && (
        <>
          {/* Card Information Section */}
          <h3 className="text-xl font-bold text-[#17233B] mb-6">Card information</h3>
          {/* Card Number Input */}
          <div className="relative mb-6 w-full max-w-2xl">
            <input
              type="text"
              placeholder="Enter Card Number"
              className="w-full h-[56px] sm:h-[64px] md:h-[70px] rounded-xl border border-gray-300 pl-6 pr-20 text-base sm:text-lg bg-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#17233B]"
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2">
              <Image src={mastercardImg} alt="Mastercard" width={40} height={28} />
            </div>
          </div>
          {/* MM/YY and CVV Inputs */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 w-full max-w-2xl">
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full sm:w-1/2 h-[56px] sm:h-[64px] md:h-[70px] rounded-xl border border-gray-300 pl-6 text-base sm:text-lg bg-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#17233B]"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-full sm:w-1/2 h-[56px] sm:h-[64px] md:h-[70px] rounded-xl border border-gray-300 pl-6 text-base sm:text-lg bg-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#17233B]"
            />
          </div>
          {/* Confirm Payment Button */}
          <div className="w-full flex justify-center">
            <button
              className="w-full max-w-xl h-[56px] sm:h-[64px] md:h-[70px] bg-[#17233B] text-white text-base sm:text-lg font-bold rounded-xl hover:opacity-90 transition"
            >
              Confirm payment
            </button>
          </div>
        </>
      )}

      {step === "crypto" && (
        <>
          {/* Select Cryptocurrency Section */}
          <h3 className="text-xl font-bold text-[#17233B] mb-6">Select Cryptocurrency</h3>
          {/* Crypto Select Input */}
          <div className="relative mb-6 w-full max-w-2xl">
            <div className="flex items-center bg-[#EEEEEE] w-full h-[56px] sm:h-[64px] md:h-[70px] rounded-xl pl-6 pr-16">
              <Image src={bitcoinImg} alt="Bitcoin" width={32} height={32} className="mr-3" />
              <span className="text-[#000000] text-base sm:text-lg font-semibold">Bitcoin</span>
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
            className="w-full max-w-2xl h-[56px] sm:h-[64px] md:h-[70px] rounded-xl border border-gray-300 pl-6 text-base sm:text-lg bg-[#ffffff] text-[#000000B2] mb-12 focus:outline-none"
          />

          {/* QR Section */}
          <div className="w-full flex flex-col items-center mb-12">
            <span className="text-base font-semibold text-[#888888] mb-4">or scan qr code to make payment</span>
            <Image src={qrcodeImg} alt="QR Code" width={220} height={220} className="mb-8 sm:w-[339px] sm:h-[339px]" />
          </div>

          {/* Confirm Payment Button */}
          <div className="w-full flex justify-center">
            <button
              className="w-full max-w-xl h-[56px] sm:h-[64px] md:h-[70px] bg-[#17233B] text-white text-base sm:text-lg font-bold rounded-xl hover:opacity-90 transition"
            >
              Confirm payment
            </button>
          </div>
        </>
      )}

      {step === "virtual" && (
        <>
          {/* Select Account Section */}
          <h3 className="text-xl font-bold text-[#17233B] mb-6">Select Account</h3>
          {/* Account Select Input */}
          <div className="relative mb-6 w-full max-w-2xl">
            <div className="flex items-center bg-[#EEEEEE] w-full h-[56px] sm:h-[64px] md:h-[70px] rounded-xl pl-6 pr-16">
              <Image src={wemaImg} alt="Wema Bank" width={32} height={32} className="mr-3" />
              <span className="text-[#000000] text-base sm:text-lg font-semibold">Wema bank</span>
            </div>
            <div className="absolute right-6 top-1/2 -translate-y-1/2">
              <ChevronDown size={28} className="text-black" />
            </div>
          </div>
          {/* Account Number Input with Copy */}
          <div className="relative mb-12 w-full max-w-2xl">
            <div className="flex items-center bg-[#ffffff] border border-grey-800 w-full h-[56px] sm:h-[64px] md:h-[70px] rounded-xl pl-6 pr-32">
              <span className="text-[#000000B2] text-base sm:text-lg font-semibold">23468789t663</span>
            </div>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-1 cursor-pointer">
              <span className="text-[#17233B] font-semibold text-base">Copy</span>
              <Copy size={22} className="text-[#17233B]" />
            </div>
          </div>

          {/* I've sent the money Button */}
          <div className="w-full flex justify-center mb-6">
            <button
              className="w-full max-w-xl h-[56px] sm:h-[64px] md:h-[70px] bg-white text-[#17233B] text-base sm:text-lg font-bold rounded-xl border border-[#17233B] hover:bg-[#f4f4f4] transition"
            >
              I’ve sent the money
            </button>
          </div>
          {/* Confirm Payment Button */}
          <div className="w-full flex justify-center">
            <button
              className="w-full max-w-xl h-[56px] sm:h-[64px] md:h-[70px] bg-[#17233B] text-white text-base sm:text-lg font-bold rounded-xl hover:opacity-90 transition"
            >
              Confirm payment
            </button>
          </div>
        </>
      )}
    </div>
  );
}