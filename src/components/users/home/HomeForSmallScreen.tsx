import {Skeleton} from "@/components/ui/skeleton";
import React from "react";
import SliderBanner from "./SliderBanner";

const HomeForSmallScreen = () => {
  return (
    <div className="px-4 border border-red-500 flex flex-col gap-5">
      {/* slider 1 */}
      <Skeleton className="min-w-[78.43%] h-[119px] max-h-[119px] bg-red-500 rounded-lg p-2" />
      {/* slider 2 */}
      <div>
        <SliderBanner />
      </div>
    </div>
  );
};

export default HomeForSmallScreen;
