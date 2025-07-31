"use client";

import { CalendarDays, CheckCircle2, XCircle, ShoppingBag, BarChart3, ChevronDown } from "lucide-react";
import { useState } from "react";

function LineGraph({ color }: { color: string }) {
  return (
    <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline
        points="0,28 20,20 40,25 60,10 80,15 100,5"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Dummy data for charts
const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weekData = [40, 120, 80, 200, 100, 60, 150];
const monthDays = ["W1", "W2", "W3", "W4"];
const monthData = [300, 450, 200, 350];
const yearMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const yearData = [800, 600, 900, 700, 1000, 850, 950];

const orderAnalysisDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const orderAnalysisLine1 = [20, 60, 40, 500, 80, 30, 50];
const orderAnalysisLine2 = [10, 40, 30, 400, 60, 20, 40];

function RevenueBarChart({ mode }: { mode: string }) {
  let data = weekData;
  let labels = weekDays;
  if (mode === "Monthly") {
    data = monthData;
    labels = monthDays;
  }
  if (mode === "Yearly") {
    data = yearData;
    labels = yearMonths;
  }
  const max = mode === "Yearly" ? 1200 : mode === "Monthly" ? 500 : 200;
  const ySteps = mode === "Yearly"
    ? [0, 200, 400, 600, 800, 1000, 1200]
    : mode === "Monthly"
    ? [0, 100, 200, 300, 400, 500]
    : [0, 50, 100, 150, 200];

  return (
    <div className="relative bg-white flex flex-col items-center justify-center shadow rounded-xl w-full max-w-[450px] h-[240px]">
      {/* Dropdown */}
      <div className="absolute top-4 right-4 flex items-center gap-1">
        <span className="text-xs font-semibold text-[#131313]">Weekly</span>
        <ChevronDown size={16} className="text-[#131313]" />
      </div>
      {/* Chart */}
      <svg width={320} height={170} className="mt-8 max-w-full" viewBox="0 0 320 170">
        {/* Dotted grid lines and Y axis labels */}
        {ySteps.map((y, i) => {
          const yPos = 160 - (y / max) * 130;
          return (
            <g key={i}>
              <text x={0} y={yPos + 5} fontSize="11" fill="#B3B3B3">{y}</text>
              <line
                x1={30}
                y1={yPos}
                x2={310}
                y2={yPos}
                stroke="#B3B3B3"
                strokeDasharray="4 4"
                strokeWidth="1"
              />
            </g>
          );
        })}
        {/* Bars */}
        {data.map((val, i) => (
          <rect
            key={i}
            x={45 + i * (240 / data.length)}
            y={160 - (val / max) * 130}
            width={20}
            height={(val / max) * 130}
            fill="#1877F2"
            rx={4}
          />
        ))}
        {/* X axis labels */}
        {labels.map((label, i) => (
          <text key={i} x={55 + i * (240 / data.length)} y={168} fontSize="11" fill="#B3B3B3" textAnchor="middle">{label}</text>
        ))}
      </svg>
    </div>
  );
}

function OrderAnalysisLineChart() {
  const max = 500;
  const ySteps = [0, 100, 200, 300, 400, 500];
  const scaleY = (val: number) => 140 - (val / max) * 110;

  return (
    <div className="relative bg-white flex flex-col items-center justify-center shadow rounded-xl w-full max-w-[320px] h-[250px] mt-4 sm:mt-0">
      <svg width={260} height={160} className="mt-2 max-w-full">
        {/* Dotted grid lines and Y axis labels */}
        {ySteps.map((y, i) => {
          const yPos = scaleY(y);
          return (
            <g key={i}>
              <text x={0} y={yPos + 5} fontSize="11" fill="#B3B3B3">{y === 500 ? "500" : y}</text>
              <line
                x1={28}
                y1={yPos}
                x2={250}
                y2={yPos}
                stroke="#B3B3B3"
                strokeDasharray="4 4"
                strokeWidth="1"
              />
            </g>
          );
        })}
        {/* Line 1 */}
        <polyline
          fill="none"
          stroke="#1877F2"
          strokeWidth="3"
          points={orderAnalysisLine1.map((v, i) => `${38 + i * 32},${scaleY(v)}`).join(" ")}
        />
        {/* Line 2 */}
        <polyline
          fill="none"
          stroke="#F5A21B"
          strokeWidth="3"
          points={orderAnalysisLine2.map((v, i) => `${38 + i * 32},${scaleY(v)}`).join(" ")}
        />
        {/* X axis labels */}
        {orderAnalysisDays.map((label, i) => (
          <text key={i} x={38 + i * 32} y={155} fontSize="11" fill="#B3B3B3" textAnchor="middle">{label}</text>
        ))}
      </svg>
    </div>
  );
}

export default function AdminDashboard() {
  const [revenueMode] = useState("Weekly");

  return (
    <div className="w-full min-h-screen bg-[#EAE6E6] flex flex-col items-center px-2 sm:px-4">
      <div className="w-full max-w-[1200px] flex flex-col gap-12 items-center justify-center mt-10">
        {/* Profile Cards Row */}
        <div className="w-full flex flex-col md:flex-col lg:flex-row gap-4 lg:gap-8 justify-center">
          {/* Total Orders */}
          <div className="w-full sm:w-[380px] h-[150px] bg-[#F6F6F7] rounded-xl shadow flex flex-col justify-between p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag size={22} className="text-[#F5A21B]" />
                <span className="text-[#131313] font-semibold text-base">Total Orders</span>
              </div>
              <button className="flex items-center gap-1 bg-white border border-[#F5A21B] rounded-full px-2 py-0.5 text-xs font-semibold text-[#F5A21B]">
                Today
                <CalendarDays size={13} className="text-[#F5A21B]" />
              </button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-bold text-[#131313]">300 orders</span>
              <LineGraph color="#F5A21B" />
            </div>
          </div>
          {/* Complete Orders */}
          <div className="w-full sm:w-[380px] h-[150px] bg-[#F6F6F7] rounded-xl shadow flex flex-col justify-between p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={22} className="text-[#B82596]" />
                <span className="text-[#131313] font-semibold text-base">Complete</span>
              </div>
              <button className="flex items-center gap-1 bg-white border border-[#B82596] rounded-full px-2 py-0.5 text-xs font-semibold text-[#B82596]">
                Today
                <CalendarDays size={13} className="text-[#B82596]" />
              </button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-bold text-[#131313]">200 orders</span>
              <LineGraph color="#B82596" />
            </div>
          </div>
          {/* Cancelled Orders */}
          <div className="w-full sm:w-[380px] h-[150px] bg-[#F6F6F7] rounded-xl shadow flex flex-col justify-between p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <XCircle size={22} className="text-[#FF0000]" />
                <span className="text-[#131313] font-semibold text-base">Cancelled</span>
              </div>
              <button className="flex items-center gap-1 bg-white border border-[#FF0000] rounded-full px-2 py-0.5 text-xs font-semibold text-[#FF0000]">
                Today
                <CalendarDays size={13} className="text-[#FF0000]" />
              </button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-bold text-[#131313]">100 orders</span>
              <LineGraph color="#FF0000" />
            </div>
          </div>
        </div>
        {/* Revenue and Order Analysis Section */}
        <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center">
          {/* Revenue Card */}
          <div className="bg-[#F6F6F7] shadow flex flex-col p-6 rounded-xl w-full max-w-[500px] h-[350px]">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-2">
                <BarChart3 size={22} className="text-[#1877F2]" />
                <span className="text-[#131313] font-semibold text-base">Revenue</span>
              </div>
              <button className="flex items-center gap-1 bg-white border border-[#1877F2] rounded-full px-2 py-0.5 text-xs font-semibold text-[#1877F2]">
                Last 7 days
                <CalendarDays size={13} className="text-[#1877F2]" />
              </button>
            </div>
            <RevenueBarChart mode={revenueMode} />
          </div>
          {/* Order Analysis Card */}
          <div className="bg-[#F6F6F7] shadow flex flex-col p-6 rounded-xl w-full max-w-[380px] h-[350px]">
            <div className="flex items-center justify-between mb-10">
              <span className="text-[#131313] font-semibold text-base">Order Analysis</span>
              <div className="relative">
                <button className="flex items-center gap-1 bg-white border border-[#1877F2] rounded-full px-2 py-0.5 text-xs font-semibold text-[#1877F2]">
                  Weekly
                  <ChevronDown size={13} className="text-[#1877F2]" />
                </button>
              </div>
            </div>
            <OrderAnalysisLineChart />
          </div>
        </div>
        {/* Table Section */}
        <div className="w-full flex flex-col gap-0 mt-10 bg-white rounded-xl shadow p-4 sm:p-6 max-w-[900px] mx-auto">
          {/* Table Header Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-2">
            <span className="text-lg font-semibold text-[#131313]">Active Merchants</span>
            <button className="flex items-center gap-2 bg-[#F6F6F7] px-3 py-1 rounded-full border border-[#E5E7EB]">
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
              <span className="text-sm font-semibold text-[#1A7F37]">Active</span>
            </button>
          </div>
          {/* Demarcation line */}
          <div className="w-full h-[2px] bg-black mb-2" />
          {/* Table Head */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-[#626262] font-semibold text-sm py-2">
            <div className="w-full sm:w-1/3 text-left">Merchant Name</div>
            <div className="w-full sm:w-1/3 text-center">ID</div>
            <div className="w-full sm:w-1/3 text-right">Status</div>
          </div>
          {/* Table Rows */}
          <div className="divide-y divide-[#E5E7EB]">
            {[
              { name: "Cloutjet Stores", id: "MCH-001", status: "Active" },
              { name: "JetMart", id: "MCH-002", status: "Active" },
              { name: "QuickBuy", id: "MCH-003", status: "Active" },
              { name: "MegaShop", id: "MCH-004", status: "Active" },
              { name: "PayFast", id: "MCH-005", status: "Active" },
            ].map((merchant, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-center justify-between py-3">
                <div className="w-full sm:w-1/3 text-left text-[#131313]">{merchant.name}</div>
                <div className="w-full sm:w-1/3 text-center text-[#131313]">{merchant.id}</div>
                <div className="w-full sm:w-1/3 text-right">
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
                    <span className="text-xs font-medium text-[#1A7F37]">{merchant.status}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}