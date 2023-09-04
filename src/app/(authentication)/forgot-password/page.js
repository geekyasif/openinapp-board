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

export default function ForgotPasswordPage() {
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

  if (status === "authenticated") {
    return router.push("/dashboard");
  }

  return (
    <div className="p-4 lg:p-0 lg:flex-grow lg:flex lg:flex-col lg:justify-center lg:items-center">
      <h1 className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text font-montserrat text-4xl font-semibold text-center block lg:hidden md:hidden mb-4">
        Board.
      </h1>
      <div className="">
        <AuthHeader heading="Forgot Password" subHeading="Reset your password" />
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
          <HandleAuthButton text="Send OTP"/>
        </div>

        <p className="my-5 text-center text-[#858585] text-base font-normal ">
          Already have an account?{" "}
          <Link className="text-[#346BD4]" href="/signin">
            Sign In here
          </Link>
        </p>
      </div>
    </div>
  );
}
