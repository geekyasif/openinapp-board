"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { bgImage } from "./utils/socialSvgIcons";

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "") {
    return <p>loading...</p>;
  }

  if (status === "authenticated") {
    return router.push("/dashboard");
  }

  return (
    <main className="bg-gradient-to-r from-blue-500 to-blue-900 ">
      <nav className=" container mx-auto flex justify-between p-4 items-center sticky top-0">
        <h1 className="text-white text-3xl font-montserrat font-semibold">
          Board.
        </h1>
        <Link
          href="/signin"
          className="rounded-full bg-white text-black p-2 px-4"
        >
          Sign In
        </Link>
      </nav>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-white font-montserrat lg:text-6xl text-4xl font-semibold">
          Welcome To Board.
        </h1>
      </div>
    </main>
  );
}
