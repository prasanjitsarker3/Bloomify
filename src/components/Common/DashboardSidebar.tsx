"use client";
import React from "react";
import { Menu } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/components/Redux/hooks";
import { setIsSidebarCollapsed } from "../Redux/Slice/sideBarSlice";
import { DashboardRoutes } from "./DashbaordRoutes";
import DashboardSidebarLink from "./DashboardSidebarLink";


const DashboardSidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const sidebarClassNames = `fixed flex flex-col  ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white dark:bg-gray-800 transition-all duration-300 overflow-hidden h-full shadow-md z-40`;
  const currentYear = new Date().getFullYear();
  return (
    <div className={sidebarClassNames}>
      {/* Top Logo */}
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center ${
          isSidebarCollapsed ? "px-5" : "px-8"
        }`}
      >
        <button
          className="md:hidden px-3 py-3 bg-gray-300 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* Links */}
      <div className="flex-grow mt-8">
        {DashboardRoutes.map((route, index) => (
          <DashboardSidebarLink
            key={index}
            href={route.href}
            icon={route.icon}
            label={route.label}
            isCollapsed={isSidebarCollapsed}
          />
        ))}
      </div>

      {/* Footer */}
      <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
        <p className="text-center text-sm text-gray-500">
          &copy; {currentYear} Something
        </p>
      </div>
    </div>
  );
};

export default DashboardSidebar;