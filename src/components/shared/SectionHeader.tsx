import {cn} from "@/lib/utils";
import Link from "next/link";
import React from "react";

type SectionHeaderProps = {
  title: string;
  showLink?: boolean;
  seeMoreLink?: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  showLink = true,
  seeMoreLink = "#",
}) => {
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className={cn("text-[#2B2B2B] text-sm lg:text-lg font-medium")}>
        {title}
      </h1>
      {showLink && (
        <Link
          href={seeMoreLink}
          className="text-[#157892] text-sm lg:text-base leading-7 font-semibold lg:font-bold group overflow-hidden">
          <div className="relative">
            <p>See more</p>
            <p className="group-hover:translate-x-0 -translate-x-[110%] duration-300 ease-in-out transition-all w-[40%] bottom-1 left-[2px] bg-[#157892] absolute h-[2px]"></p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
