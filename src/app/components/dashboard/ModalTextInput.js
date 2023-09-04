"use client";

export default function ModalTextInput({
  labelText,
  name,
  typeText,
  placeholerText,
  userInfo,
  handleInputChange,
}) {
  return (
    <div className="my-6">
      <label className=" text-base font-figtree font-normal mb-2">
        {labelText}
      </label>
      <br />
      <input
        name={name}
        type={typeText}
        value={userInfo}
        onChange={handleInputChange}
        className="w-full rounded-lg border-2 border-[#F2F2F2] focus:outline-none px-3 py-4 placeholder:text-base placeholder:font-normal placeholder:font-figtree placeholder:text-[#999CA0]"
        placeholder={placeholerText}
      />
    </div>
  );
}
