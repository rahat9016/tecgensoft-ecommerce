import {cn} from "@/lib/utils";
import React from "react";

type countdownProps = {
  className?: string;
  textClassName?: string;
};

const CountDownTimer: React.FC<countdownProps> = ({
  className,
  textClassName,
}) => {
  return (
    <div className="flex gap-4 items-center">
      {/* days */}
      <div
        className={cn(
          "w-[34px] h-[20px] lg:w-[65px] lg:h-[41px] rounded-[5px] bg-white flex justify-center items-center text-[#A80E4B] text-xs lg:text-xl leading-6 font-extrabold",
          className
        )}>
        <div className="flex items-end">
          <p>02</p>
          <p
            className={cn(
              "text-[8px] leading-5 lg:text-xs font-bold pl-[2px]",
              textClassName
            )}>
            D
          </p>
        </div>
      </div>

      {/* hour */}
      <div
        className={cn(
          "w-[34px] h-[20px] lg:w-[65px] lg:h-[41px] rounded-[5px] bg-white flex justify-center items-center text-[#A80E4B] text-xs lg:text-xl leading-6 font-extrabold",
          className
        )}>
        <div className="flex items-end">
          <p>11</p>
          <p
            className={cn(
              "text-[8px] leading-5 lg:text-xs font-bold pl-[2px]",
              textClassName
            )}>
            H
          </p>
        </div>
      </div>

      {/* minutes */}
      <div
        className={cn(
          "w-[34px] h-[20px] lg:w-[65px] lg:h-[41px] rounded-[5px] bg-white flex justify-center items-center text-[#A80E4B] text-xs lg:text-xl leading-6 font-extrabold",
          className
        )}>
        <div className="flex items-end">
          <p>45</p>
          <p
            className={cn(
              "text-[8px] leading-5 lg:text-xs font-bold pl-[2px]",
              textClassName
            )}>
            M
          </p>
        </div>
      </div>

      {/* seconds */}
      <div
        className={cn(
          "w-[34px] h-[20px] lg:w-[65px] lg:h-[41px] rounded-[5px] bg-white flex justify-center items-center text-[#A80E4B] text-xs lg:text-xl leading-6 font-extrabold",
          className
        )}>
        <div className="flex items-end">
          <p>58</p>
          <p
            className={cn(
              "text-[8px] leading-5 lg:text-xs font-bold pl-[2px]",
              textClassName
            )}>
            S
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
