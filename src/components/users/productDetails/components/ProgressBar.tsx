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
      <div className="progress_outer">
        <div
          className="progress_inner"
          style={{ "--width": `${percentage}%` } as React.CSSProperties}
        />
      </div>
      <p className="w-[36px] pl-2 text-xs text-black-dark">{rating}</p>
    </div>
  );
};

export default ProgressBar;
