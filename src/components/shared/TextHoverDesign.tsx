import {cn} from "@/lib/utils";
import Link from "next/link";
import React from "react";

type TextHoverProps = {
  text: string;
  className?: string;
  link: string;
};

const TextHoverDesign: React.FC<TextHoverProps> = ({
  text = "See more",
  className,
  link,
}) => {
  return (
    <Link
      href={link}
      className={cn(
        "text-[#157892] text-sm lg:text-base leading-7 font-semibold lg:font-bold group overflow-hidden",
        className
      )}>
      <div className="relative">
        <p>{text}</p>
        <p className="group-hover:translate-x-0 -translate-x-[110%] duration-300 ease-in-out transition-all w-[40%] bottom-[2px] left-[2px] bg-[#157892] absolute h-[2px]"></p>
      </div>
    </Link>
  );
};

export default TextHoverDesign;
