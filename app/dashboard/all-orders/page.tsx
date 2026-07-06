import Sidebar from "@/components/dashboard/Sidebar";
import NavigationWrapper from "@/components/NavigationWrapper";
import DashboardTable from "@/components/table/DashboardTable";
import React from "react";

const AllOrders = () => {
  return (
    <NavigationWrapper>
      <div className="flex min-h-screen bg-slate-50">
        {/* Sidebar */}
        <Sidebar selected="All Orders" />

        <div className="flex-1 px-6 py-14 lg:px-10">
          <div className="mx-auto max-w-7xl">

            {/* Header */}
            <div className="mb-12 text-center">
              <span className="inline-flex rounded-full bg-cyan-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
                Dashboard
              </span>

              <h1 className="mt-5 text-4xl font-black text-slate-900 lg:text-5xl">
                Your Orders
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-500">
                View all your orders, monitor their current status, and access
                complete order details whenever you need them.
              </p>
            </div>

            {/* Orders Table */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <DashboardTable />
            </div>

          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default AllOrders;