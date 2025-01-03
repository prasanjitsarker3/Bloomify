



import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const DashboardSidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center gap-3 ${
          isCollapsed ? "justify-center py-3" : "justify-start px-8 py-3"
        }  text-slate-800 dark:text-white transition-colors ${
          isActive ? "bg-primary text-white" : "text-gray-800"
        }`}
      >
        <Icon className="w-6 h-6" />
        <span className={`${isCollapsed ? "hidden" : "block"} font-medium`}>
          {label}
        </span>
      </div>
    </Link>
  );
};

export default DashboardSidebarLink;