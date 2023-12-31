"use client";

import useModalTab from "@/app/hooks/useModalTab";
import { CloseIcon } from "@/app/utils/DashboardSvgIcon";
import ModalTextInput from "./ModalTextInput";

export default function Modal({
  user,
  setHandleSetUser,
  setHandleIsModalOpen,
  handleUpdateUser,
}) {
  const { activeTab, setHandleModalActiveTab } = useModalTab();

  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className=" bg-white rounded-xl lg:w-[554px] md:w-[554px] w-full shadow-md  z-50 mx-2 lg:mx-0 md:mx-0">
        <div className="flex justify-between py-4 px-6 border-b-2">
          <p>Add New Profile</p>
          <button
            className=""
            onClick={() => {
              if (
                user?.name === "" ||
                user?.email === "" ||
                user?.phone === ""
              ) {
                alert("All fields are required!");
              } else {
                setHandleIsModalOpen();
              }
            }}
          >
            {CloseIcon}
          </button>
        </div>
        <div className="flex justify-between mt-6 px-6 h-12">
          <p
            className={` ${
              activeTab === "basic"
                ? " border-b-4 border-blue-500 text-black"
                : "bg-white text-black"
            }  w-full rounded-b text-center`}
          >
            Basic
          </p>
          <p
            className={` ${
              activeTab === "social"
                ? "border-b-4 border-blue-500 text-black"
                : "bg-white text-black"
            }  w-full rounded-b  text-center`}
          >
            Social
          </p>
        </div>
        {activeTab === "basic" && (
          <div className="px-6">
            <ModalTextInput
              name="name"
              labelText="Enter Name"
              typeText="text"
              placeholerText="Eg. John Doe"
              userInfo={user?.name}
              handleInputChange={setHandleSetUser}
            />

            <ModalTextInput
              name="email"
              labelText="Enter Email"
              typeText="email"
              placeholerText="Eg. John@google.com"
              userInfo={user?.email}
              handleInputChange={setHandleSetUser}
            />

            <ModalTextInput
              name="phone"
              labelText="Enter Phone"
              typeText="phone"
              placeholerText="Eg. 9161908716"
              userInfo={user?.phone}
              handleInputChange={setHandleSetUser}
            />
          </div>
        )}

        {activeTab === "social" && (
          <div className="px-6">
            <ModalTextInput
              name="instagram"
              labelText="Instagram Link (Optional)"
              typeText="text"
              placeholerText="Eg. ..instagram.com/username"
              userInfo={user?.instagram}
              handleInputChange={setHandleSetUser}
            />

            <ModalTextInput
              name="youtube"
              labelText="Youtube Link (Optional)"
              typeText="text"
              placeholerText="Eg. ..youtube.com/username"
              userInfo={user?.youtube}
              handleInputChange={setHandleSetUser}
            />
          </div>
        )}
        <div className="flex justify-end items-center px-6 pb-4 gap-2">
          {activeTab === "social" && (
            <>
              <button
                className=" border-2 border-[#999CA0] text-black rounded-lg text-sm font-semibold font-figtree  w-16 h-10"
                onClick={() => setHandleModalActiveTab("basic")}
              >
                Back{" "}
              </button>
              <button
                className=" bg-blue-500 text-white rounded-lg text-smfont-semibold font-figtree  w-16 h-10"
                onClick={() => {
                  if (
                    user?.name === "" ||
                    user?.email === "" ||
                    user?.phone === ""
                  ) {
                    alert("All fields are required!");
                  } else {
                    setHandleIsModalOpen();
                    handleUpdateUser();
                  }
                }}
              >
                Done
              </button>
            </>
          )}
          {activeTab === "basic" && (
            <button
              className="  bg-blue-500 text-white rounded-lg text-sm text-center font-semibold font-figtree w-16 h-10"
              onClick={() => {
                if (
                  user?.name === "" ||
                  user?.email === "" ||
                  user?.phone === ""
                ) {
                  alert("All fields are required!");
                } else {
                  setHandleModalActiveTab("social");
                }
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
