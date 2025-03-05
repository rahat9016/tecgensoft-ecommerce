import SectionWrapper from "@/components/shared/SectionWrapper";
import SliderBanner from "./components/SliderBanner";
import SliderBannerOne from "./components/SliderBannerOne";
import DealsOfWeek from "./DealsOfWeek";
import { products } from "./DemoData";
import FeaturedProducts from "./FeaturedProducts";

const HomeForSmallScreen = () => {
  return (
    <div className="px-3 flex flex-col gap-5 mb-20">
      {/* slider 1 */}
      {/* <Skeleton className="min-w-[78.43%] h-[119px] max-h-[119px] bg-red-500 rounded-lg p-2" /> */}
      <SliderBannerOne />

      {/* slider 2 */}
      <SliderBanner />

      {/* deals of the week */}
      <DealsOfWeek />

      {/* featured category */}
      {/* featred category */}
      <div className="my-10">
        <SectionWrapper>
          <div className="flex flex-col gap-10 ">
            {/* text */}
            <div className="w-full text-center">
              <p className="text-[18px] leading-6 font-bold">
                Featured Category
              </p>
              <p className="text-sm">
                Get Your Desired Product from Featured Category!
              </p>
            </div>
            {/* cards */}
            <div></div>
          </div>
        </SectionWrapper>
      </div>

      {/* featured products */}
      <FeaturedProducts isLoadMore={false} data={products} />

      {/*  */}
    </div>
  );
};

export default HomeForSmallScreen;
