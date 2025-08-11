"use client";

import { MoreVertical, CheckCircle2, XCircle, User } from "lucide-react";
import { useState } from "react";

// Dummy data for table (14 merchants)
const merchants = [
  { name: "Cloutjet Stores", type: "Seller", id: "MCH-001", reports: "N/A", img: "" },
  { name: "JetMart", type: "Influencer", id: "MCH-002", reports: "1 report", img: "" },
  { name: "QuickBuy", type: "Seller", id: "MCH-003", reports: "N/A", img: "" },
  { name: "MegaShop", type: "Influencer", id: "MCH-004", reports: "2 reports", img: "" },
  { name: "PayFast", type: "Seller", id: "MCH-005", reports: "N/A", img: "" },
  { name: "ShopEase", type: "Seller", id: "MCH-006", reports: "N/A", img: "" },
  { name: "Trendify", type: "Influencer", id: "MCH-007", reports: "N/A", img: "" },
  { name: "MarketPro", type: "Seller", id: "MCH-008", reports: "N/A", img: "" },
  { name: "InfluenceHub", type: "Influencer", id: "MCH-009", reports: "1 report", img: "" },
  { name: "BuyMore", type: "Seller", id: "MCH-010", reports: "N/A", img: "" },
  { name: "PromoKing", type: "Influencer", id: "MCH-011", reports: "N/A", img: "" },
  { name: "DealMart", type: "Seller", id: "MCH-012", reports: "N/A", img: "" },
  { name: "SellFast", type: "Seller", id: "MCH-013", reports: "N/A", img: "" },
  { name: "BrandWave", type: "Influencer", id: "MCH-014", reports: "N/A", img: "" },
];

// Dummy data for approvals table
const approvals = [
  { name: "Alice Johnson", email: "alice@email.com", status: "Pending", img: "" },
  { name: "Bob Smith", email: "bob@email.com", status: "Submitted", img: "" },
  { name: "Cynthia Lee", email: "cynthia@email.com", status: "Pending", img: "" },
  { name: "David Kim", email: "david@email.com", status: "Submitted", img: "" },
  { name: "Ella Brown", email: "ella@email.com", status: "Pending", img: "" },
  { name: "Frank Green", email: "frank@email.com", status: "Submitted", img: "" },
];

// Pie chart data
const sellersCount = merchants.filter(m => m.type === "Seller").length;
const influencersCount = merchants.filter(m => m.type === "Influencer").length;
const total = sellersCount + influencersCount;
const sellersPercent = Math.round((sellersCount / total) * 100);
const influencersPercent = Math.round((influencersCount / total) * 100);

// Pie chart colors
const sellersColor = "#1877F2";
const influencersColor = "#F5A21B";

// Dropdown actions
const actions = ["View Details", "Suspend", "Remove"];

function PieChart() {
  // Large pie chart with no percentage labels
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const sellersArc = (sellersPercent / 100) * circumference;
  const influencersArc = (influencersPercent / 100) * circumference;

  return (
    <svg width="240" height="240" viewBox="0 0 240 240">
      {/* Sellers Arc */}
      <circle
        r={80}
        cx={120}
        cy={120}
        fill="transparent"
        stroke={sellersColor}
        strokeWidth="40"
        strokeDasharray={`${sellersArc} ${circumference - sellersArc}`}
        strokeDashoffset={circumference / 4}
      />
      {/* Influencers Arc */}
      <circle
        r={80}
        cx={120}
        cy={120}
        fill="transparent"
        stroke={influencersColor}
        strokeWidth="40"
        strokeDasharray={`${influencersArc} ${circumference - influencersArc}`}
        strokeDashoffset={circumference / 4 - sellersArc}
      />
    </svg>
  );
}

function ActionsDropdown({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow z-10">
      {actions.map((action, idx) => (
        <button
          key={idx}
          className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-[#131313]"
          onClick={onClose}
        >
          {action}
        </button>
      ))}
    </div>
  );
}

export default function MerchantManagement() {
  const [dropdownIdx, setDropdownIdx] = useState<number | null>(null);

  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center justify-center bg-[#EAE6E6] px-2 sm:px-4 py-6">
      {/* Top Section: Table + Analysis */}
      <div className="w-full max-w-[1100px] flex flex-col lg:flex-row gap-8 justify-start">
{/* Merchant Details Table Card */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6 flex flex-col w-full lg:w-[620px] min-w-[0] lg:min-w-[360px] h-auto lg:h-[660px]">
          <div className="text-lg font-bold text-[#131313] mb-2">Merchant Details</div>
          <div className="w-full h-[2px] bg-black mb-4" />
          {/* Table Headers */}
          <div className="hidden md:flex flex-row text-[#626262] font-semibold text-base py-2">
            <div className="w-2/5">Merchant Name</div>
            <div className="w-1/5">ID</div>
            <div className="w-1/5">Complains</div>
            <div className="w-1/5">Actions</div>
          </div>
          <div className="divide-y divide-[#E5E7EB] flex-1 overflow-x-auto">
            {merchants.map((m, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-start md:items-center py-4 relative text-xs md:text-sm"
              >
                {/* Merchant Name */}
                <div className="w-full md:w-2/5 flex items-center gap-2 text-[#131313] font-medium truncate">
                  <span className="bg-[#F6F6F7] rounded-full p-1">
                    <User size={22} className="text-[#888]" />
                  </span>
                  <div>
                    <div>{m.name}</div>
                    <div className="text-[10px] text-[#888]">{m.type}</div>
                  </div>
                </div>
                {/* ID */}
                <div className="w-full md:w-1/5 text-[#131313] mt-2 md:mt-0">
                  <span className="md:hidden font-semibold text-[#626262]">ID: </span>
                  {m.id}
                </div>
                {/* Complains */}
                <div className="w-full md:w-1/5 font-semibold flex items-center mt-2 md:mt-0">
                  <span className="md:hidden font-semibold text-[#626262]">Complains: </span>
                  {m.reports === "N/A" ? (
                    <span className="text-green-600">{m.reports}</span>
                  ) : (
                    <span className="text-red-600">{m.reports}</span>
                  )}
                </div>
                {/* Actions */}
                <div className="w-full md:w-1/5 flex items-center gap-2 mt-2 md:mt-0">
                  <span className="md:hidden font-semibold text-[#626262]">Actions: </span>
                  <button
                    className="p-1 rounded hover:bg-gray-100"
                    onClick={() => setDropdownIdx(dropdownIdx === idx ? null : idx)}
                  >
                    <MoreVertical size={18} />
                  </button>
                  <ActionsDropdown open={dropdownIdx === idx} onClose={() => setDropdownIdx(null)} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Analysis Card */}
        <div className="bg-[#F6F6F7] rounded-lg shadow p-4 sm:p-6 flex flex-col justify-between w-full max-w-[350px] min-w-[0] lg:w-[230px] lg:min-w-[200px] h-auto lg:h-[480px] mx-auto">
          <div>
            <div className="text-lg font-bold text-[#131313] mb-2">Analysis</div>
            <div className="text-base font-semibold text-[#626262] mb-4">Merchants</div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <PieChart />
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ background: sellersColor }}></span>
              <span className="text-sm text-[#131313]">Sellers: {sellersPercent}%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ background: influencersColor }}></span>
              <span className="text-sm text-[#131313]">Influencers: {influencersPercent}%</span>
            </div>
          </div>
        </div>
      </div>
      {/* Approvals Table Card */}
      <div className="w-full max-w-[1100px] flex flex-col gap-8 justify-start mt-10">
        <div className="bg-white rounded-lg shadow p-4 sm:p-6 flex flex-col w-full min-w-[0] lg:w-[620px] lg:min-w-[340px]">
          <div className="text-lg font-bold text-[#131313] mb-2">Approvals</div>
          <div className="w-full h-[2px] bg-black mb-4" />
          {/* Table Headers */}
          <div className="hidden sm:flex flex-row text-[#626262] font-semibold text-base py-2">
            <div className="w-2/5">Name & Contact</div>
            <div className="w-2/5 text-center">Document Status</div>
            <div className="w-1/5 text-right">Actions</div>
          </div>
          <div className="divide-y divide-[#E5E7EB]">
            {approvals.map((a, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center py-4">
                {/* Name & Contact */}
                <div className="w-full sm:w-2/5 flex items-center gap-2 text-[#131313] font-medium truncate">
                  <span className="bg-[#F6F6F7] rounded-full p-1">
                    <User size={28} className="text-[#888]" />
                  </span>
                  <div>
                    <div>{a.name}</div>
                    <div className="text-xs text-[#888]">{a.email}</div>
                  </div>
                </div>
                {/* Document Status */}
                <div className="w-full sm:w-2/5 text-center mt-2 sm:mt-0">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${a.status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>
                    {a.status}
                  </span>
                </div>
                {/* Actions */}
                <div className="w-full sm:w-1/5 flex items-center justify-start sm:justify-end gap-3 mt-2 sm:mt-0">
                  <button className="p-1 rounded-full hover:bg-green-100" title="Approve">
                    <CheckCircle2 size={22} className="text-green-600" />
                  </button>
                  <button className="p-1 rounded-full hover:bg-red-100" title="Deny">
                    <XCircle size={22} className="text-red-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}