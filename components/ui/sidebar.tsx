"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Menu } from "lucide-react";

// 1. Define the type for our sidebar context
type SidebarContextType = {
  isOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
};

// 2. Create the context
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// 3. SidebarProvider component that wraps parts of the app that use the sidebar
export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <SidebarContext.Provider
      value={{ isOpen, openSidebar, closeSidebar, toggleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

// 4. Custom hook to use the sidebar context
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
};

// 5. Optional SidebarTrigger button (used mostly on mobile)
export const SidebarTrigger = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none lg:hidden"
    >
      <Menu className="w-6 h-6" />
    </button>
  );
};
