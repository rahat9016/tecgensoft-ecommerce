import {Skeleton} from "@/components/ui/skeleton";
import React from "react";
import SliderBanner from "./SliderBanner";

const HomeForBigScreen = () => {
  return (
    <div>
      <div className="container">
        <div className="flex gap-4 pt-4">
          {/* side category */}
          <Skeleton className="min-w-[19.67%] h-[584px] max-h-[584px] bg-white rounded-lg p-2" />

          {/* banner part  */}
          <div className="min-w-[78.43%] flex flex-col gap-4">
            {/* banner */}
            <Skeleton className="min-w-[78.43%] h-[353px] max-h-[353px] bg-white rounded-lg p-2" />

            {/* slider banner */}
            <SliderBanner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeForBigScreen;
