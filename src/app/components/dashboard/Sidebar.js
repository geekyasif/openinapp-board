"use client";

import {
  DashboardIcon,
  ScheduleIcon,
  SettingIcon,
  TranscationIcon,
  UsersIcon,
} from "@/app/utils/DashboardSvgIcon";
import Link from "next/link";

export default function Sidebar({ pathname }) {
  return (
    <div className=" hidden lg:block md:block bg-gradient-to-r from-blue-500 to-blue-900  rounded-3xl  pl-12  pt-16 sticky top-0 h-screen w-72 ">
      <h1 className="text-white font-montserrat font-bold text-3xl pb-16">
        Board.
      </h1>
      <div className="flex flex-col justify-between ">
        <div>
          <Link
            className={`text-white flex items-center  text-lg mb-10 ${
              pathname === "/dashboard" && "font-bold"
            }`}
            href="/dashboard"
          >
            {DashboardIcon}
            Dashboard
          </Link>

          <Link
            className={`text-white flex items-center  text-lg mb-10 ${
              pathname === "/transactions" && "font-bold"
            }`}
            href="/transactions"
          >
            <span className="mr-5">{TranscationIcon}</span>
            Transactions
          </Link>

          <Link
            className={`text-white flex items-center  text-lg mb-10 ${
              pathname === "/schedules" && "font-bold"
            }`}
            href="/schedules"
          >
            {ScheduleIcon}
            Schedules
          </Link>

          <Link
            className={`text-white flex items-center  text-lg mb-10 ${
              pathname === "/users" && "font-bold"
            }`}
            href="/users"
          >
            {UsersIcon}
            Users
          </Link>

          <Link
            className={`text-white flex items-center  text-lg mb-10 ${
              pathname === "/settings" && "font-bold"
            }`}
            href="/settings"
          >
            {SettingIcon}
            Settings
          </Link>
        </div>

        <div className="flex flex-col absolute bottom-0 left-0 pl-12 pb-14">
          <Link
            className={`text-white mb-5 text-sm font-montserrat ${
              pathname === "/help" && "font-bold"
            }`}
            href="/help"
          >
            Help
          </Link>
          <Link
            className={`text-white mb-5 text-sm font-montserrat ${
              pathname === "/contact" && "font-bold"
            }`}
            href="/contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
