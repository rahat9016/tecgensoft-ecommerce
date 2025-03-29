import { MapPin, Phone } from "lucide-react";
import React from "react";

export default function SupportPart() {
  return (
    <div className="w-full col-span-3 flex flex-col gap-5 lg:gap-10 items-center lg:items-start">
      <h1 className="text-[11px] tab:text-sm uppercase tracking-[4px] text-[#fff]">
        Support
      </h1>
      <div className="flex flex-col gap-5">
        {/* phone part */}
        <div className="flex items-center gap-5 px-5 max-w-[300px] w-[300px] lg:w-full xl:w-[280px] py-3 rounded-[50px] border border-[#ffffff1a] hover:border-[#ef4a23] min-h-[70px]">
          {/* phone icon */}
          <div className="pr-4 border-r border-r-[#838383] h-full flex items-center">
            <Phone />
          </div>
          {/* texts */}
          <div className="flex flex-col gap-1">
            <p className="text-xs xl:text-sm text-[#838383]">9AM - 8PM</p>
            <p className="text-xl text-[#ef4a23]">16689</p>
          </div>
        </div>
        {/* store location part */}
        <div className="flex items-center gap-5 px-5 max-w-[300px] w-[300px] lg:w-full xl:w-[280px] py-3 rounded-[50px] border border-[#ffffff1a] hover:border-[#ef4a23] min-h-[70px]">
          {/* map icon */}
          <div className="pr-4 border-r border-r-[#838383] h-full flex items-center">
            <MapPin />
          </div>
          {/* texts */}
          <div className="flex flex-col gap-1">
            <p className="text-xs xl:text-sm text-[#838383]">Store Locator</p>
            <p className="text-xl text-[#ef4a23]">Find Our Stores</p>
          </div>
        </div>
      </div>
    </div>
  );
}
