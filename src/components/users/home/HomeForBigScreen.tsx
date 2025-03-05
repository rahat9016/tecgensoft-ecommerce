"use client";
import { Skeleton } from "@/components/ui/skeleton";
import SliderBanner from "./components/SliderBanner";
import SliderBannerOne from "./components/SliderBannerOne";
import { popularProducts, products } from "./DemoData";
import FeaturedProducts from "./FeaturedProducts";
import PopularProducts from "./PopularProducts";
import SectionWrapper from "@/components/shared/SectionWrapper";
const HomeForBigScreen = () => {
  const electronicsInventory = [
    { id: 1, name: "Drone" },
    { id: 2, name: "Gimbal" },
    { id: 3, name: "Charger Fan" },
    { id: 4, name: "Weight Scale" },
    { id: 5, name: "TV" },
    { id: 6, name: "Mobile Phone" },
    { id: 7, name: "Mobile Accessories" },
    { id: 8, name: "Portable SSD" },
    { id: 9, name: "Portable WiFi Camera" },
    { id: 10, name: "Trimmer" },
    { id: 11, name: "Smart Watch" },
    { id: 12, name: "Action Camera" },
    { id: 13, name: "Earphone" },
    { id: 14, name: "Earbuds" },
    { id: 15, name: "Bluetooth Speakers" },
    { id: 16, name: "Gaming Console" },
  ];
  return (
    <div>
      <div className="container mb-20">
        <div className="flex gap-4 pt-4">
          {/* side category */}
          <Skeleton className="min-w-[19.67%] h-[584px] max-h-[584px] bg-white rounded-lg p-2" />

          {/* banner part  */}
          <div className="min-w-[78.43%] flex flex-col gap-3">
            {/* banner */}
            <SliderBannerOne />

            {/* slider banner */}
            <SliderBanner />
          </div>
        </div>
        {/* featred category */}
        <div className="my-10">
          <SectionWrapper>
            <div className="flex flex-col gap-10 ">
              {/* text */}
              <div className="w-full text-center">
                <p className="text-xl font-bold">Featured Category</p>
                <p className="text-sm">
                  Get Your Desired Product from Featured Category!
                </p>
              </div>
              {/* cards */}
              <div>
                <div>
                  
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>

        {/* popular products */}
        <div className="my-10">
          <PopularProducts data={popularProducts} />
        </div>
        {/* featured products */}
        <div className="my-10">
          <FeaturedProducts data={products} />
        </div>
      </div>
    </div>
  );
};

export default HomeForBigScreen;
