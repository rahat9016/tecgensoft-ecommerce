import React from "react";

export default function StayConnectedPart() {
  return (
    <div className="w-full col-span-3 flex flex-col gap-5 lg:gap-10 items-center lg:items-start">
      <h1 className="text-[11px] tab:text-sm uppercase tracking-[4px] text-[#fff]">
        Stay Connected
      </h1>
      {/*  */}
      <div className="flex flex-col gap-5">
        {/* address */}
        <div className="flex flex-col gap-2 text-center lg:text-left">
          <p className="text-[#fff] text-sm">Tech Gen Ltd.</p>
          <p className="text-sm text-[#838383]">
            Head Office: 28 Kazi Nazrul Islam Ave,Navana Zohura Square, Dhaka
            1000
          </p>
        </div>
        {/* email */}
        <div className="text-sm text-[#838383] flex flex-col gap-2 text-center lg:text-left">
          <p>Email:</p>
          <p className="text-[#ef4a23]">demo@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
