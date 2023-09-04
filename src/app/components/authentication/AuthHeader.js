"use client";

export default function AuthHeader({ heading, subHeading }) {
  return (
    <>
      <p className="text-2xl text-black font-montserrat lg:text-4xl font-bold mb-1">
        {heading}
      </p>
      <p className="font-lato text-normal font-normal">{subHeading}</p>
    </>
  );
}
