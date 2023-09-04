"use client";

import Card from "./Card";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import Link from "next/link";
import {
  LikesIcon,
  RevenueIcon,
  TranscationIcon,
  UserIcon,
} from "@/app/utils/DashboardSvgIcon";
import {
  emailIcon,
  instagramIcon,
  youtubeIcon,
} from "@/app/utils/socialSvgIcons";
import UserInfoText from "./UserInfoText";
import whatsappIcon from "../../../../public/wa.png";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import useModal from "@/app/hooks/useModal";
import PiechartLabel from "./PiechatLabel";
import axios from "axios";

export default function Body() {
  const { isModalOpen, setHandleIsModalOpen } = useModal();
  const [data, setData] = useState({});
  const [icons, setIcons] = useState([
    RevenueIcon,
    TranscationIcon,
    LikesIcon,
    UserIcon,
  ]);

  const cardBgColor = ["#7FCD93", "#DEBF85", "#ECA4A4", "#A9B0E5"];
  const pieBgColor = ["#98D89E", "#F6DC7D", "#EE8484"];

  // fetching the use data
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    youtube: "",
  });

  const setHandleSetUser = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // displaying the into the userinfo card section
  const [userInfo, setUserInfo] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    instagram: user.instagram,
    youtube: user.youtube,
  });

  // updating the usercard
  const handleUpdateUser = () => {
    setUserInfo(user);
    setHandleIsModalOpen();
  };

  const fetchData = async () => {
    try {
      const res = await axios(
        "https://raw.githubusercontent.com/geekyasif/openinapp-board/main/src/app/utils/data.json"
      );
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap mt-5 gap-4">
        {data?.metrics?.map((m, i) => (
          <Card
            key={i}
            bgColor={cardBgColor[i]}
            bgLightColor="bg-[#E9F9EB]"
            title={m?.name}
            value={m?.value}
            change={m?.change}
            icon={icons[i]}
          />
        ))}
      </div>

      <div className=" lg:w-full md:full bg-white py-4 px-2 lg:p-10 md:p-10 rounded-3xl my-10  shadow-md border-2 border-[#E0E0E0]">
        <p className=" text-lg font-bold font-montserrat mb-1">Activites</p>
        <p className=" text-sm font-normal text-[#858585] font-montserrat">
          May - June 2021
        </p>
        <div className="">
          <LineChart data={data?.BarChartData} />
        </div>
      </div>

      <div className="flex justify-between gap-10 flex-wrap mb-20 lg:mb-0">
        <div className="lg:h-80  bg-white  rounded-3xl flex-grow lg:p-8 md:p-8 p-4 shadow-md border-2 border-[#E0E0E0]">
          <div className="flex justify-between items-center">
            <p className=" text-lg font-bold font-montserrat">Top Products</p>
            <Link className=" text-xs text-[#858585] font-montserrat" href="/">
              May - June 2021
            </Link>
          </div>

          <div className="flex items-center mt-6">
            <PieChart data={data?.PieChartData} />
            <div className="px-10">
              {data?.PieChartData?.datasets.map((p, id) => (
                <PiechartLabel
                  key={id}
                  bgColor={pieBgColor[id]}
                  text={p?.name}
                  percentage={p?.value}
                />
              ))}
            </div>
          </div>
        </div>

        <div className=" lg:h-80 bg-white rounded-3xl flex-grow lg:p-8 md:p-8 p-4 shadow-md border-2 border-[#E0E0E0]">
          {userInfo.name !== "" ||
          userInfo.email !== "" ||
          userInfo.phone !== "" ? (
            <div className="">
              <p className=" text-sm font-semibold lg:mb-10 md:mb-10 mb-4 font-figtree">
                {user.name}
              </p>
              <div className="flex flex-wrap justify-between items-center">
                <div className="w-[40%]">
                  <UserInfoText
                    text={userInfo.phone}
                    userInfoSocailBgColor="bg-[#E9F9EB]"
                    iconUrl={whatsappIcon}
                  />

                  <UserInfoText
                    text={userInfo.email}
                    userInfoSocailBgColor="bg-[#EBE6F9]"
                    icon={emailIcon}
                  />
                </div>

                <div className="w-[40%]">
                  <UserInfoText
                    text={userInfo.instagram}
                    userInfoSocailBgColor="bg-[#FFE9EC]"
                    icon={instagramIcon}
                  />

                  <UserInfoText
                    text={userInfo.youtube}
                    userInfoSocailBgColor="bg-[#FFE9E9]"
                    icon={youtubeIcon}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div
              className="flex flex-col justify-center items-center h-full cursor-pointer"
              onClick={setHandleIsModalOpen}
            >
              <div className="roundend-full bg-[#F2F2F2] w-20 h-20 flex justify-center items-center rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="33"
                  viewBox="0 0 34 33"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 0.00491333C17.8835 0.0049078 18.5997 0.721096 18.5997 1.60456L18.5997 14.7097L31.7048 14.7096C32.5883 14.7096 33.3045 15.4258 33.3045 16.3093C33.3045 17.1927 32.5883 17.9089 31.7048 17.9089L18.5998 17.909L18.5998 31.0139C18.5998 31.8974 17.8836 32.6136 17.0002 32.6136C16.1167 32.6136 15.4005 31.8974 15.4005 31.0139L15.4004 17.909L2.29533 17.9089C1.41186 17.9089 0.695673 17.1927 0.695679 16.3092C0.695685 15.4258 1.41188 14.7096 2.29535 14.7096L15.4004 14.7097L15.4003 1.60458C15.4003 0.721116 16.1165 0.00491896 17 0.00491333Z"
                    fill="#999CA0"
                  />
                </svg>
              </div>
              <p className="font-figtree text-[#858585] font-semibold text-base">
                Add Profile
              </p>
            </div>
          )}
        </div>

        {isModalOpen && (
          <Modal
            isModalOpen={isModalOpen}
            setHandleIsModalOpen={setHandleIsModalOpen}
            user={user}
            setHandleSetUser={setHandleSetUser}
            handleUpdateUser={handleUpdateUser}
          />
        )}
      </div>
    </div>
  );
}
