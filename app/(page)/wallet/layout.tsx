"use client";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen w-full bg-[#f9f9f9] relative">
      <div className="flex flex-col md:flex-row w-full mx-auto mt-5 min-h-[700px]">
        {/* Sidebar */}
        <aside
          className="bg-[#FFFFFF] flex flex-col items-center w-full md:w-[300px]"
          style={{
            height: "700px",
            borderRadius: 0,
          }}
        >
          <h2
            className="text-2xl font-bold mb-10"
            style={{
              color: "#000000",
              textAlign: "center",
              marginTop: "48px",
            }}
          >
            Account Summary
          </h2>
          <div
            className="flex flex-col gap-2 items-center "
            style={{
              background: "#F5A21B",
              padding: "20px",
              width: "250px",
              height: "300px",
              borderRadius: "30px",
              boxShadow: "0 4px 24px 0 rgba(0,0,0,0.04)",
            }}
          >
            <span className="text-white font-semibold">Total CloutJet Coins</span>
            <span className="text-3xl text-white font-semibold mt-8">5,000 coins</span>
          </div>
        </aside>
        {/* Main Content */}
        <section
          className="bg-white shadow-sm border border-gray-100 flex-1 mt-5 md:mt-0"
          style={{
            minHeight: "700px",
            marginLeft: "0",
          }}
        >
          {children}
        </section>
      </div>
    </main>
  );
}