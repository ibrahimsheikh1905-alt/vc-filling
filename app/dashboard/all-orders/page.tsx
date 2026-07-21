import Sidebar from "@/components/dashboard/Sidebar";
import NavigationWrapper from "@/components/NavigationWrapper";
import DashboardTable from "@/components/table/DashboardTable";
import React from "react";

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";

const LOGO_GRADIENT_SOFT =
  "bg-[linear-gradient(90deg,rgba(36,78,182,0.10)_0%,rgba(43,147,201,0.10)_50%,rgba(51,209,204,0.10)_100%)]";

const AllOrders = () => {
  return (
    <NavigationWrapper>
      <div className="flex min-h-screen bg-slate-50">
        {/* Sidebar */}
        <Sidebar />


        <main className="flex-1 px-6 py-14 lg:px-10">
          <div className="mx-auto max-w-7xl">
            {/* Header */}
            <div className="mb-12 text-center">
              <span
                className={`${LOGO_GRADIENT_SOFT} ${LOGO_GRADIENT_TEXT} inline-flex rounded-full border border-[#2B93C9]/20 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] shadow-sm`}
              >
                Dashboard
              </span>

              <h1
                className={`${LOGO_GRADIENT_TEXT} mt-5 text-4xl font-bold leading-tight lg:text-5xl`}
              >
                Your Orders
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-8 text-slate-600">
                View all your orders, monitor their current status, and access
                complete order details whenever you need them.
              </p>
            </div>

            {/* Orders Table */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-[#2B93C9]/10">
              {/* Gradient Top Border */}
              <div
                className={`${LOGO_GRADIENT} absolute inset-x-0 top-0 z-10 h-1`}
              />

              <DashboardTable />
            </div>
          </div>
        </main>
      </div>
    </NavigationWrapper>
  );
};

export default AllOrders;