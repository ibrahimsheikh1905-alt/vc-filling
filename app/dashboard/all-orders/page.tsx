import Sidebar from "@/components/dashboard/Sidebar";
import NavigationWrapper from "@/components/NavigationWrapper";
import DashboardTable from "@/components/table/DashboardTable";
import React from "react";

const AllOrders = () => {
  return (
    <NavigationWrapper>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar selected="All Orders" />
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Your Orders
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
              Here are all your orders. You can view the details of each order
              by clicking on the order number.
            </p>
          </div>
          <DashboardTable />
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default AllOrders;
