"use client";
import Image from "next/image";

// Import images from your components/imgs folder
import bitcoinImg from "@/components/imgs/bitcoin.png";
import ethereumImg from "@/components/imgs/ethereum.png";
import mastercardImg from "@/components/imgs/mastercard.png";
import paymentImg from "@/components/imgs/payment icon.png";
import poundsImg from "@/components/imgs/pounds.png";
import visaImg from "@/components/imgs/visa.png";
import walletImg from "@/components/imgs/wallet icon.png";

// Dollar note SVG icon with dollar sign
function DollarNoteIcon({ size = 24 }) {
  return (
    <Image src={paymentImg} alt="Payment" width={size} height={size} />
  );
}

export default function WalletPageContent() {
  return (
    <div className="w-full flex flex-col items-center px-2 sm:px-4">
      {/* Profile Cards Row */}
      <div className="w-full flex flex-col md:flex-row gap-5 md:gap-7 justify-center mt-7">
        {/* Wallet Profile Card */}
        <div className="w-full md:w-96 flex flex-col justify-between bg-[#FFDD55] rounded-xl shadow p-4 mb-4 md:mb-0">
          <div className="flex flex-row items-start justify-between">
            <h2 className="text-lg font-bold text-[#000000]">Wallet</h2>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center ml-2 border border-gray-200">
              <Image src={walletImg} alt="Wallet" width={28} height={28} />
            </div>
          </div>
          <div className="flex flex-col flex-1 mt-2">
            <p className="text-black font-bold text-left mb-2 text-lg">
              $ 0.00
            </p>
            <button className="mt-3 px-4 py-1.5 bg-[#1877F2] text-white rounded-lg font-semibold hover:opacity-90 transition w-fit text-sm">
              Add Funds
            </button>
          </div>
        </div>

        {/* Payment Profile Card */}
        <div className="w-full md:w-96 flex flex-col justify-between bg-[#15233E] rounded-xl shadow p-4 text-white">
          <div className="flex flex-row items-start justify-between">
            <h2 className="text-lg font-bold text-[#ffffff]">Payment</h2>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center ml-2 border border-gray-200">
              <Image src={paymentImg} alt="Payment" width={28} height={28} />
            </div>
          </div>
          <div className="flex flex-col flex-1 mt-2">
            <p className="text-[#ffffff] text-left mb-1 text-lg">
              Top up with our virtual account
            </p>
            <button className="mt-3 px-4 py-1.5 bg-[#1877F2] text-white rounded-lg font-semibold hover:opacity-90 transition w-fit text-sm">
              View Account
            </button>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full max-w-2xl mt-12 px-1">
        <h3 className="text-xl font-bold mb-6 text-[#17233b]">Cards</h3>
        {/* MasterCard */}
        <div className="w-full flex flex-col xs:flex-row xs:items-center py-3 border-b border-gray-200 gap-2 xs:gap-0">
          <Image src={mastercardImg} alt="Mastercard" width={40} height={28} />
          <div className="flex flex-col xs:ml-8">
            <span className="text-base font-semibold text-[#000000]">Mastercard</span>
            <span className="text-black font-mono tracking-widest mt-1">2456 7854 ****</span>
          </div>
        </div>
        {/* Visa Card */}
        <div className="w-full flex flex-col xs:flex-row xs:items-center py-3 border-b border-gray-200 gap-2 xs:gap-0">
          <Image src={visaImg} alt="Visa" width={40} height={28} />
          <div className="flex flex-col xs:ml-8">
            <span className="text-base font-semibold text-[#000000]">Visa</span>
            <span className="text-black font-mono tracking-widest mt-1">2456 7854 ****</span>
          </div>
        </div>
        {/* Add New Card */}
        <button className="w-full flex items-center justify-start gap-2 py-5 mt-2">
          <span className="w-8 h-8 flex items-center justify-center text-black text-xl font-bold">+</span>
          <span className="text-black font-semibold text-sm">Add New Card</span>
        </button>
      </div>
      {/* Wallets Assets Section */}
      <div className="w-full max-w-2xl mt-12 px-1">
        <h3 className="text-xl font-bold mb-6 text-[#17233b]">Wallets assets</h3>
        <div className="flex flex-col gap-4">
          {/* Bitcoin */}
          <div className="flex flex-col xs:flex-row xs:items-center bg-[#F4F4F4] px-5 py-4 gap-2 xs:gap-0">
            <Image src={bitcoinImg} alt="Bitcoin" width={28} height={28} className="mr-4" />
            <span className="font-semibold text-base text-[#17233b] xs:mr-10">Bitcoin</span>
            <span className="font-semibold text-base text-[#17233b] flex items-center">
              <span className="mr-1">£</span>4500
            </span>
          </div>
          {/* Pounds */}
          <div className="flex flex-col xs:flex-row xs:items-center bg-[#F4F4F4] px-5 py-4 gap-2 xs:gap-0">
            <Image src={poundsImg} alt="Pounds" width={28} height={28} className="mr-4" />
            <span className="font-semibold text-base text-[#17233b] xs:mr-10">Pounds</span>
            <span className="font-semibold text-base text-[#17233b] flex items-center">
              <span className="mr-1">£</span>4500
            </span>
          </div>
          {/* Ethereum */}
          <div className="flex flex-col xs:flex-row xs:items-center bg-[#F4F4F4] px-5 py-4 gap-2 xs:gap-0">
            <Image src={ethereumImg} alt="Ethereum" width={28} height={28} className="mr-4" />
            <span className="font-semibold text-base text-[#17233b] xs:mr-10">Ethereum</span>
            <span className="font-semibold text-base text-[#17233b] flex items-center">
              <span className="mr-1">£</span>4500
            </span>
          </div>
        </div>
      </div>
      {/* Latest Payment History Section */}
      <div className="w-full max-w-3xl mt-12 px-1">
        <h3 className="text-xl font-bold mb-6 text-[#17233b] ">Latest Payment History</h3>
        <div className="overflow-x-auto rounded-xl ">
          <table className="min-w-full bg-[#F7F6F4] min-h-[300px] text-xs sm:text-sm">
            <thead>
              <tr>
                <th className="bg-[#EED9B8] text-[#000000] font-bold py-3 px-2 sm:px-4 text-left">Account</th>
                <th className="bg-[#EED9B8] text-[#000000] font-bold py-3 px-2 sm:px-4 text-left">Amount</th>
                <th className="bg-[#EED9B8] text-[#000000] font-bold py-3 px-2 sm:px-4 text-left">Date</th>
                <th className="bg-[#EED9B8] text-[#000000] font-bold py-3 px-2 sm:px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Example row */}
              <tr>
                <td className="py-3 px-2 sm:px-4 border-b border-[#EED9B8]">John Doe</td>
                <td className="py-3 px-2 sm:px-4 border-b border-[#EED9B8]">£120.00</td>
                <td className="py-3 px-2 sm:px-4 border-b border-[#EED9B8]">2024-07-28</td>
                <td className="py-3 px-2 sm:px-4 border-b border-[#EED9B8]">
                  <span className="px-3 py-1 rounded-full bg-green-200 text-green-800 font-semibold text-xs">Completed</span>
                </td>
              </tr>
              {/* Add more rows as needed */}
              <tr>
                <td className="py-3 px-2 sm:px-4 border-b border-[#EED9B8]">Jane Smith</td>
                <td className="py-3 px-2 sm:px-4 border-b border-[#EED9B8]">£75.50</td>
                <td className="py-3 px-2 sm:px-4 border-b border-[#EED9B8]">2024-07-27</td>
                <td className="py-3 px-2 sm:px-4 border-b border-[#EED9B8]">
                  <span className="px-3 py-1 rounded-full bg-yellow-200 text-yellow-800 font-semibold text-xs">Pending</span>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-2 sm:px-4">Alice Lee</td>
                <td className="py-3 px-2 sm:px-4">£200.00</td>
                <td className="py-3 px-2 sm:px-4">2024-07-25</td>
                <td className="py-3 px-2 sm:px-4">
                  <span className="px-3 py-1 rounded-full bg-red-200 text-red-800 font-semibold text-xs">Failed</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}