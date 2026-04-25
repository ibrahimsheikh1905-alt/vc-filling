import React from "react";
import NavigationMenuDemo from "./Header";
import Footer from "./Footer";
import { SidebarTrigger } from "./ui/sidebar";

const NavigationWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <NavigationMenuDemo />
        {/* <div className="p-4 lg:hidden flex justify-end">
          <SidebarTrigger />
        </div> */}
      </div>
      {children}
      <Footer />
    </>
  );
};

export default NavigationWrapper;
