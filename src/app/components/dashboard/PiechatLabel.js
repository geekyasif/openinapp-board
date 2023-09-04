"use client";

export default function PiechartLabel({ bgColor, text, percentage }) {
  console.log(bgColor)
  return (
    <div className="mb-4 ">
      <p className=" text-sm font-bold font-montserrat flex items-center mb-2">
        <span className={`inline-block h-3 w-3 rounded-full bg-${bgColor} mr-3 `}></span>
        {text}
      </p>
      <p className="ml-6 text-xs text-[#858585] font-normal">{percentage}%</p>
    </div>
  );
}
