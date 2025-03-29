import React from "react";

const ProgressBar = ({
  progressValue,
  percentage,
  rating,
}: {
  progressValue: string;
  percentage: number;
  rating: number;
}) => {
  return (
    <div className="flex items-center ">
      <p className="text-xs text-black-dark w-[56px] lg-w-[80px] capitalize pr-1">
        {progressValue}
      </p>
      <div className="relative h-[7px] w-full rounded-[12px] overflow-hidden bg-gray">
        <div
          className={`bg-[#f7af23] h-full rounded-[12px] `}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="w-[36px] pl-2 text-xs text-black-dark">{rating}</p>
    </div>
  );
};

export default ProgressBar;
