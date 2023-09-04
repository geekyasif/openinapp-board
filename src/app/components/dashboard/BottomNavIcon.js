"use client";

import Link from "next/link";
import {  usePathname } from "next/navigation";

export default function BottomNavIcon({ text, icon, url }) {
  const pathname = usePathname()

  return (
    <div className="p-1">
      <Link
        href={`/${url}`}
        className={`text-xs text-white text-center flex flex-col items-center ${pathname === `/${url}` && "font-bold"}`}
      >
        <span className="mb-1"> {icon}</span>
        {text}
      </Link>
    </div>
  );
}
