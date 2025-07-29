import Image from "next/image";
import mastercardImg from "@/components/imgs/mastercard.png";

export default function CardPaymentPage() {
  return (
    <div className="w-full flex flex-col items-start px-8 py-10">
      {/* Title */}
      <h1 className="text-2xl font-bold text-[#17233B] mb-2">Select Choice of payment</h1>
      {/* Subtitle */}
      <h2 className="text-base font-semibold text-[#888888] mb-6">payment method</h2>

      {/* Payment Method Cards */}
      <div className="flex flex-row gap-6 mb-10">
        {/* Card */}
        <div className="w-56 h-24 bg-[#17233B] rounded-xl flex flex-col items-center justify-center shadow cursor-pointer">
          <span className="text-white text-lg font-bold">Card</span>
        </div>
        {/* Crypto */}
        <div className="w-56 h-24 bg-[#17233B4D] rounded-xl flex flex-col items-center justify-center shadow cursor-pointer">
          <span className="text-[#000000B2] text-lg font-bold">Crypto</span>
        </div>
        {/* Virtual Account */}
        <div className="w-56 h-24 bg-[#17233B4D] rounded-xl flex flex-col items-center justify-center shadow cursor-pointer">
          <span className="text-[#000000B2] text-lg font-bold">Virtual account</span>
        </div>
      </div>

      {/* Card Information Section */}
      <h3 className="text-xl font-bold text-[#17233B] mb-6">Card information</h3>
      {/* Card Number Input */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Enter Card Number"
          className="w-[834px] h-[70px] rounded-xl border border-gray-300 pl-6 pr-20 text-lg bg-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#17233B]"
        />
        <div className="absolute right-6 top-1/2 -translate-y-1/2">
          <Image src={mastercardImg} alt="Mastercard" width={40} height={28} />
        </div>
      </div>
      {/* MM/YY and CVV Inputs */}
      <div className="flex flex-row gap-6 mb-12">
        <input
          type="text"
          placeholder="MM/YY"
          className="w-[398px] h-[70px] rounded-xl border border-gray-300 pl-6 text-lg bg-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#17233B]"
        />
        <input
          type="text"
          placeholder="CVV"
          className="w-[398px] h-[70px] rounded-xl border border-gray-300 pl-6 text-lg bg-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#17233B]"
        />
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