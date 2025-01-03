
"use client";
import DashboardNavbar from "@/components/Common/DashbaordHeader";
import DashboardSidebar from "@/components/Common/DashboardSidebar";
import { useAppSelector } from "@/components/Redux/hooks";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  return (
    <div
      className={`flex  bg-white dark:bg-gray-800 text-slate-800 dark:text-white transition-all duration-300 w-full min-h-screen`}
    >
      <DashboardSidebar />
      <main
        className={` flex flex-col w-full h-full py-7 px-9 bg-white dark:bg-gray-800 transition-all duration-300 ${
          isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
        } `}
      >
        <DashboardNavbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;