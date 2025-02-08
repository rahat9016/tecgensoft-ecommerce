import {Skeleton} from "@/components/ui/skeleton";
import React from "react";
import SectionHeader from "@/components/CustomComponents/SectionHeader";
import FeaturedProducts from "./FeaturedProducts";
import DealsOfWeek from "./DealsOfWeek";
import SliderBanner from "./components/SliderBanner";

const HomeForSmallScreen = () => {
  return (
    <div className="px-4 border border-red-500 flex flex-col gap-5 mb-20">
      {/* slider 1 */}
      <Skeleton className="min-w-[78.43%] h-[119px] max-h-[119px] bg-red-500 rounded-lg p-2" />

      {/* slider 2 */}
      <SliderBanner />

      {/* deals of the week */}
      <DealsOfWeek />

      {/* featured category */}
      <div className="flex flex-col gap-2">
        <SectionHeader title="Featured Category" showLink={false} />
        <div className="min-h-[200px] bg-amber-300"></div>
      </div>

      {/* featured products */}
      <FeaturedProducts />

      {/*  */}
    </div>
  );
};

export default HomeForSmallScreen;
