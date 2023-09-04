"use client";

import { usePathname } from "next/navigation";
import Header from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import BottomNavIcon from "../components/dashboard/BottomNavIcon";
import {
  DashboardIcon,
  ScheduleIcon,
  SettingIcon,
  TranscationIcon,
  UsersIcon,
} from "../utils/DashboardSvgIcon";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const oldPathname = pathname.split("/")[1];
  const newPathname = capitalizeFirstLetter(oldPathname);

  return (
    <div className=" bg-[#F8FAFF] lg:p-10 md:p-10 relative">
      <div className="flex p-2">
        <Sidebar pathname={pathname} />
        <div className="w-full">
          <Header title={newPathname} />
          <div className="p-2 lg:p-8 md:p-8">{children}</div>
        </div>
      </div>
      <div className="block sticky bottom-0 bg-gradient-to-r from-blue-500 to-blue-900 w-screen h-14 lg:hidden md:hidden">
        <div className="flex items-center justify-between p-2 h-14 ">
          <BottomNavIcon
            url="dashboard"
            text="Dashboard"
            icon={DashboardIcon}
          />
          <BottomNavIcon
            url="transactions"
            text="Transcations"
            icon={TranscationIcon}
          />
          <BottomNavIcon url="schedules" text="Schedules" icon={ScheduleIcon} />
          <BottomNavIcon url="users" text="Users" icon={UsersIcon} />
          <BottomNavIcon url="settings" text="Settings" icon={SettingIcon} />
        </div>
      </div>
    </div>
  );
}
