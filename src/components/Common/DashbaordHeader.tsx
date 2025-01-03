"use client";
import { Menu, PowerOff, User, X } from "lucide-react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Breadcrumbs,
  BreadcrumbItem,
} from "@nextui-org/react";

import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { RootState } from "../Redux/store";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ThemeSwitcher } from "../UtlitiFunction/ThemeSwitcher";
import { setIsSidebarCollapsed } from "../Redux/Slice/sideBarSlice";
import { DashboardRoutes } from "./DashbaordRoutes";

const DashboardNavbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };
  const breadcrumbs = useAppSelector(
    (state: RootState) => state.breadcrumb.breadcrumbs
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRoutes, setFilteredRoutes] = useState<
    {
      href: string;
      icon: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
      label: string;
    }[]
  >([]);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);
    setFilteredRoutes(
      DashboardRoutes.filter((route) =>
        route.label.toLowerCase().includes(query)
      )
    );
  };

  const clearSearch = () => {
    setSearchTerm("");
    setFilteredRoutes([]);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setFilteredRoutes([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigateToRoute = (href: string) => {
    router.push(href);
    clearSearch();
  };

  const notifications = [
    { message: "New message from Admin", time: "5:00 AM" },
    { message: "Your profile was updated", time: "6:30 AM" },
    { message: "System maintenance scheduled", time: "7:15 AM" },
    { message: "New task assigned to you", time: "8:45 AM" },
    { message: "Password changed successfully", time: "9:00 AM" },
  ];

  return (
    <div className="flex justify-between items-center w-full mb-7 pb-2  border-b border-primary bg-white dark:bg-gray-800 text-slate-900 dark:text-white transition-all duration-300 ">
      <div className=" flex  justify-between items-center gap-5">
        <button
          className=" px-3 py-3  bg-primary text-white rounded-full "
          onClick={toggleSidebar}
        >
          <Menu className=" w-4 h-4" />
        </button>

        {/* Implement Beadcums in here  */}
        <Breadcrumbs>
          {breadcrumbs.map((crumb, index) => (
            <BreadcrumbItem key={index} className="">
              <Link href={crumb.path} className=" px-3 py-1">
                {crumb.label}
              </Link>
            </BreadcrumbItem>
          ))}
        </Breadcrumbs>
      </div>
      {/* Route Searching In here */}
      <div className="relative" ref={dropdownRef}>
        <div className="flex items-center">
          <input
            placeholder="Search routes..."
            value={searchTerm}
            onChange={handleSearch}
            className="py-2 px-4 rounded-full border border-primary  w-52 focus:outline-none  bg-white dark:bg-gray-800 "
          />
          {searchTerm && (
            <X
              size={16}
              className="absolute right-3 cursor-pointer "
              onClick={clearSearch}
            />
          )}
        </div>
        {filteredRoutes.length > 0 && searchTerm && (
          <div className="absolute top-full left-0 w-full  border border-gray-50 rounded-lg  z-10">
            {filteredRoutes.map((route, index) => (
              <div
                key={index}
                onClick={() => navigateToRoute(route.href)}
                className="px-4 py-1 cursor-pointer hover:bg-gray-100 border-b border-gray-100 last:border-gray-100"
              >
                {route.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Side */}
      <div className=" flex justify-between items-center gap-5">
        <Dropdown>
          <DropdownTrigger>
            <div className="relative cursor-pointer">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white">
                <IoNotificationsCircleOutline
                  className="fill-current"
                  size={24}
                />
              </div>
              <span className="absolute top-2 right-1 translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                5
              </span>
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Notifications">
            {notifications.map((notification, index) => (
              <DropdownItem
                key={index}
                className="flex justify-between items-center py-2 px-4 border-b border-gray-200 last:border-0"
              >
                <span>{notification.message}</span>
                <span className="text-gray-500 text-sm">
                  {notification.time}
                </span>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <DropdownTrigger>
            <div className=" px-2 py-2  rounded-full bg-primary text-white">
              <User className=" cursor-pointer  " size={24} />
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">
              <Link href="/" className="text-inherit">
                Home
              </Link>
            </DropdownItem>
            <DropdownItem key="copy">N/A</DropdownItem>
            <DropdownItem key="edit">N/A</DropdownItem>
            <DropdownItem
              //   onClick={handleLogOut}
              key="delete"
              className=" flex items-center bg-[#F31260] text-white"
              color="danger"
            >
              <h1 className="flex text-base items-center gap-2">
                {" "}
                Logout <PowerOff size={16} />
              </h1>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default DashboardNavbar;