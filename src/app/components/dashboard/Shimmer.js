"use client";

export default function Shimmer() {
  return (
    <div className="">
      <div className="flex flex-grow justify-between flex-wrap gap-10 z-0">
        <div className="w-full lg:w-[20%] h-44 bg-gray-300 animate-pulse rounded-3xl"></div>
        <div className="w-full lg:w-[20%] h-44 bg-gray-300 animate-pulse rounded-3xl"></div>
        <div className="w-full lg:w-[20%] h-44 bg-gray-300 animate-pulse rounded-3xl"></div>
        <div className="w-full lg:w-[20%] h-44 bg-gray-300 animate-pulse rounded-3xl"></div>
      </div>

      <div className="h-80 bg-gray-300 animate-pulse rounded-3xl my-8"></div>

      <div className="flex flex-grow justify-between">
        <div className="w-[48%] h-52 bg-gray-300 animate-pulse rounded-3xl"></div>
        <div className="w-[48%] h-52 bg-gray-300 animate-pulse rounded-3xl"></div>
      </div>
    </div>
  );
}
