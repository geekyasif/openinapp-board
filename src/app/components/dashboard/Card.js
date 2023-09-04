"use client";

export default function Card({
  bgColor,
  title,
  value,
  change,
  icon,
  bgLightColor,
}) {
  return (
    <div
      className={`p-4 w-[47%] lg:flex-grow lg:w-52 lg:h-34 lg:p-6 rounded-3xl bg-white shadow-md border-2 border-[#E0E0E0]`}
    >
      <div
        style={{
          backgroundColor: bgColor,
        }}
        className={`flex justify-center items-center w-8 h-8 rounded-full mb-2 `}
      >
        {icon}
      </div>
      <div>
        <p className="mb-1 text-sm font-lato font-normal">{title}</p>
        <div className="flex justify-between items-center my-1">
          <p className="lg:text-2xl md:text-2xl font-bold font-sans text-sm">
            {value}
          </p>
          <div
            className={`lg:h-8 lg:w-14 md:h-8 md:w-14 rounded-2xl ${bgLightColor} flex justify-center items-center lg:px-2 lg:py-1 p-1`}
          >
            <p className={`text-xs font-figtree font-semibold text-[#3CC952]`}>
              {change}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
