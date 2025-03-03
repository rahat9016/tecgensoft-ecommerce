"use client"
import { Skeleton } from "@/components/ui/skeleton";
import SliderBanner from "./components/SliderBanner";
import SliderBannerOne from "./components/SliderBannerOne";
import { popularProducts, products } from "./DemoData";
import FeaturedProducts from "./FeaturedProducts";
import PopularProducts from "./PopularProducts";
import { useQuery } from "@tanstack/react-query";
import { getOrder } from "@/app/api/category";

const HomeForBigScreen = () => {
  useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      getOrder()
  })
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
