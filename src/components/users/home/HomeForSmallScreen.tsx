import {Skeleton} from "@/components/ui/skeleton";
import React from "react";
import SliderBanner from "./SliderBanner";
import SectionHeader from "@/components/CustomComponents/SectionHeader";

const HomeForSmallScreen = () => {
  return (
    <div className="px-4 border border-red-500 flex flex-col gap-5 mb-20">
      {/* slider 1 */}
      <Skeleton className="min-w-[78.43%] h-[119px] max-h-[119px] bg-red-500 rounded-lg p-2" />

      {/* slider 2 */}
      <SliderBanner />

      {/* deals of the week */}
      <div className="flex flex-col gap-2">
        <SectionHeader title="Deals of the week" />
        <div className="min-h-[200px] bg-amber-300"></div>
      </div>

      {/* featured category */}
      <div className="flex flex-col gap-2">
        <SectionHeader title="Featured Category" showLink={false} />
        <div className="min-h-[200px] bg-amber-300"></div>
      </div>

      {/* featured products */}
      <div className="flex flex-col gap-2">
        <SectionHeader title="Featured Products" showLink={false} />
        <div className="min-h-[200px] bg-amber-300"></div>
      </div>

      {/*  */}
    </div>
  );
};

export default HomeForSmallScreen;
