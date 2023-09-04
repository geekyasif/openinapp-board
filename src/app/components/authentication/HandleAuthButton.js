"use client";

import { signIn } from "next-auth/react";

export default function HandleAuthButton({ text, handleLogin }) {
  return (
    <button
      className="w-full bg-black text-white py-2 text-center rounded-xl mt-5 font-montserrat font-bold text-base"
      onClick={() => signIn(handleLogin)}
    >
      {text}
    </button>
  );
}
