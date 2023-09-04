"use client";

import Image from "next/image";
import profile from "../../../../public/pro.png";
import { signOut, useSession } from "next-auth/react";
import useMenu from "@/app/hooks/useMenu";
import useModal from "@/app/hooks/useModal";

export default function Header({ title }) {
  const { data: session } = useSession();
  const { isMenuVisible, setHandleMenu } = useMenu();
  const {setHandleIsModalOpen} = useModal()

  return (
    <nav className="flex justify-between flex-wrap lg:px-10 lg:pt-5 px-4 pt-3 lg:sticky lg:top-0  bg-[#F8FAFF] pb-4 z-10">
      <h1 className="font-montserrat text-2xl font-bold">{title}</h1>

      {/* right  */}
      <div className="flex items-center justify-between mt-4 lg:mt-0 w-full lg:w-[292px] md:w-full">
        {/* search bar  */}
        <div className="flex items-center relative">
          <input
            type="text"
            className="w-[180px] h-[30px] py-1 pl-4 pr-2 focus:outline-none placeholder:text-sm placeholder:font-normal font-lato rounded-md"
            placeholder="Search..."
          />{" "}
          <svg
            className="absolute right-3"
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
          >
            <circle cx="5" cy="5" r="4.5" stroke="#858585" />
            <line
              x1="8.35355"
              y1="7.64645"
              x2="12.3536"
              y2="11.6464"
              stroke="#858585"
            />
          </svg>
        </div>

        <div className="flex items-center">
          <svg
            className=" mx-8"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
          >
            <path
              d="M16 11.586V8C16 4.783 13.815 2.073 10.855 1.258C10.562 0.52 9.846 0 9 0C8.154 0 7.438 0.52 7.145 1.258C4.185 2.074 2 4.783 2 8V11.586L0.293001 13.293C0.199958 13.3857 0.126171 13.4959 0.0758854 13.6172C0.0256001 13.7386 -0.000189449 13.8687 1.04767e-06 14V16C1.04767e-06 16.2652 0.105358 16.5196 0.292894 16.7071C0.480431 16.8946 0.734785 17 1 17H17C17.2652 17 17.5196 16.8946 17.7071 16.7071C17.8946 16.5196 18 16.2652 18 16V14C18.0002 13.8687 17.9744 13.7386 17.9241 13.6172C17.8738 13.4959 17.8 13.3857 17.707 13.293L16 11.586ZM16 15H2V14.414L3.707 12.707C3.80004 12.6143 3.87383 12.5041 3.92412 12.3828C3.9744 12.2614 4.00019 12.1313 4 12V8C4 5.243 6.243 3 9 3C11.757 3 14 5.243 14 8V12C14 12.266 14.105 12.52 14.293 12.707L16 14.414V15ZM9 20C9.6193 20.0008 10.2235 19.8086 10.7285 19.4502C11.2335 19.0917 11.6143 18.5849 11.818 18H6.182C6.38566 18.5849 6.76648 19.0917 7.27151 19.4502C7.77654 19.8086 8.3807 20.0008 9 20Z"
              fill="black"
            />
          </svg>

          <div className="relative cursor-pointer" onClick={setHandleMenu}>
            <Image
              src={
                session?.user?.image === undefined
                  ? profile
                  : session?.user?.image
              }
              className="rounded-full"
              width={30}
              height={30}
              alt="profile-image"
            />
            {isMenuVisible && (
              <div className="absolute bg-white rounded-lg w-48 flex flex-col items-start right-0 top-10 shadow z-10">
                <button
                  className="border-b hover:bg-gray-100  rounded-t-lg py-3 px-2 w-full text-sm font-lato text-start"
                  onClick={setHandleIsModalOpen}
                >
                  Update Profile
                </button>
                <button
                  className=" hover:bg-gray-100 py-3 rounded-b-lg px-2 w-full text-sm font-lato text-start"
                  onClick={() => signOut()}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
