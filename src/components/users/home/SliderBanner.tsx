import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SliderBannerCard from "./SliderBannerCard";
import {ButtonHTMLAttributes} from "react";
import {ChevronLeft, ChevronsRight} from "lucide-react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}
type DataProps = {
  id: number;
  title: string;
  image: string;
  className?: string;
  textClassName?: string;
};

const SliderBanner = () => {
  const slidersData: DataProps[] = [
    {
      id: 1,
      title: "Campaign",
      image: "/images/home/banner_slider_bg_1.png",
    },
    {
      id: 2,
      title: "Campaign 2",
      image: "/images/home/banner_slider_bg_2.png",
      className: "bg-[#19365F] text-white",
    },
    {
      id: 3,
      title: "Campaign 3",
      image: "/images/home/banner_slider_bg_1.png",
    },
    {
      id: 4,
      title: "Campaign 4",
      image: "/images/home/banner_slider_bg_2.png",
      className: "bg-[#19365F] text-white",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="relative">
      <CarouselContent>
        {slidersData.map((slider) => (
          <CarouselItem key={slider?.id} className="basis-[75%] lg:basis-1/2">
            <SliderBannerCard
              title={slider?.title}
              image={slider?.image}
              className={slider?.className}
              textClassName={slider?.textClassName}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* left arrow */}
      <div className="absolute left-16 top-1/2 -translate-y-1/2 hidden lg:block">
        <CarouselPrevious className="h-[20px] w-[20px] rounded-full bg-gray-light hover:bg-gray-light">
          <ChevronLeft />
        </CarouselPrevious>
      </div>

      {/* right arrow */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden lg:block">
        <CarouselNext className="h-[20px] w-[20px] rounded-full bg-gray-light hover:bg-gray-light">
          <ChevronsRight />
        </CarouselNext>
      </div>
    </Carousel>
  );
};

export default SliderBanner;
