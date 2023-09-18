"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import AuthHeader from "@/app/components/authentication/AuthHeader";
import SocialLoginButton from "@/app/components/authentication/SocialLoginButton";
import { GitubIcon, GoogleIcon } from "@/app/utils/socialSvgIcons";
import TextInput from "@/app/components/authentication/TextInput";
import HandleAuthButton from "@/app/components/authentication/HandleAuthButton";
import { Rings } from "react-loader-spinner";
import { useEffect } from "react";

export default function SigninPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="w-1/2 flex justify-center items-center">
        <Rings
          height="100"
          width="100"
          color="#3C7FEF"
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
      </div>
    );
  }

  useEffect(() => {
    if (status === "authenticated") {
      return router.push("/dashboard");
    }
  }, []);

  return (
    <div className="p-4 lg:p-0 lg:flex-grow lg:flex lg:flex-col lg:justify-center lg:items-center">
      <h1 className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text font-montserrat text-4xl font-semibold text-center block lg:hidden md:hidden mb-4">
        Board.
      </h1>
      <div className="">
        <AuthHeader heading=" Sign In" subHeading=" Sign in to your account" />
        <div className="my-5 flex justify-between">
          <SocialLoginButton
            text="Sign in with Google"
            icon={GoogleIcon}
            handleLogin="google"
          />
          <SocialLoginButton
            text="Sign in with Github"
            icon={GitubIcon}
            handleLogin="github"
          />
        </div>

        <div className="lg:w-[385px] md:w-[385px] bg-white rounded-2xl p-8">
          <TextInput labelText="Email address" inputType="text" />
          <TextInput labelText="Password" inputType="password" />

          <Link
            className="my-5 text-[#346BD4] text-base font-normal font-lato"
            href="/forgot-password"
          >
            Forgot password?
          </Link>

          <HandleAuthButton text="Sign In" handleLogin="google" />
        </div>

        <p className="my-5 text-center text-[#858585] text-base font-normal">
          Don't have an account?{" "}
          <Link className="text-[#346BD4]" href="/register">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
