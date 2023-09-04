"use client";

import { signIn } from "next-auth/react";

export default function SocialLoginButton({ icon, text, handleLogin }) {
  return (
    <button
      className="lg:w-[180px] lg:h-[30px] bg-white flex justify-center items-center py-2 px-5 rounded-lg "
      onClick={() => signIn(handleLogin)}
    >
      {icon}
      <span className="text-center font-montserrat text-xs font-normal text-[#858585] ml-2">
        {text}
      </span>
    </button>
  );
}
