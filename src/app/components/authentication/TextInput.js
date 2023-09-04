"use client";

export default function TextInput({ labelText, inputType}) {
  return (
    <>
      <label className="font-lato text-base font-normal">{labelText}</label>
      <input
        type={inputType}
        className="py-3 pl-4 bg-[#F5F5F5] rounded-xl font-lato text-base text-black focus:outline-none mb-5 mt-3 w-full"
      />
    </>
  );
}
