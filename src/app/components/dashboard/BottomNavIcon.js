"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavIcon({ text, icon, url }) {
  const pathname = usePathname();

  return (
    <div className="p-1 flex justify-center flex-col items-center">
      <Link
        href={`/${url}`}
        className={`text-xs text-white text-center flex flex-col items-center ${
          pathname === `/${url}` && "font-bold"
        }`}
      >
        <div className=" w-full text-center flex justify-center mb-1">
          <p className="inline w-[20px]">{icon}</p>
        </div>
        {text}
      </Link>
    </div>
  );
}
