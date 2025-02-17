import SectionHeader from "@/components/shared/SectionHeader";
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
      <div className="flex flex-col gap-2">
        <SectionHeader title="Featured Category" showLink={false} />
        <div className="min-h-[200px] bg-amber-300"></div>
      </div>

      {/* featured products */}
      <FeaturedProducts isLoadMore={false} data={products} />

      {/*  */}
    </div>
  );
};

export default HomeForSmallScreen;
