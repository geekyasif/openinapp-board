"use client";

import Image from "next/image";
import Link from "next/link";

export default function UserInfoText({
  text,
  icon,
  userInfoSocailBgColor,
  iconUrl,
}) {
  return (
    text && (
      <div className="flex items-center mb-6">
        <div
          className={`w-7 h-7 rounded-full ${userInfoSocailBgColor} flex justify-center items-center `}
        >
          {iconUrl && <Image src={iconUrl} width={17} height={17} alt="icon"/>}
          {icon && icon}
        </div>
        <Link
          href="/"
          className="text-xs lg:text-base md:text-base ml-2 font-figree underline"
        >
          {text}
        </Link>
      </div>
    )
  );
}
