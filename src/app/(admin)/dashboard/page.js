"use client";

import Body from "@/app/components/dashboard/Body";
import Shimmer from "@/app/components/dashboard/Shimmer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Rings } from "react-loader-spinner";

export default function DashboardPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Shimmer />;
  }

  if (status === "unauthenticated") {
    return router.push("/signin");
  }

  return <Body />;
}
