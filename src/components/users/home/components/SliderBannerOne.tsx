import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import Image from "next/image";

type DataProps = {
  id: number;
  title: string;
  image: string;
  className?: string;
  textClassName?: string;
};

const SliderBannerOne = () => {
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
      className="relative ">
      <CarouselContent>
        {slidersData.map((slider) => (
          <CarouselItem key={slider?.id} className="">
            <div className="min-w-[78.43%] lg:h-[353px] lg:max-h-[353px] rounded-lg overflow-hidden">
              <Image
                src={"/images/home/product_banner_for_Slider.png"}
                alt="product banner"
                width={1051}
                height={353}
                className="w-full h-full object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* left arrow */}
      {/* <div className="absolute left-16 top-1/2 -translate-y-1/2 hidden lg:block">
        <CarouselPrevious className="h-[20px] w-[20px] rounded-full bg-gray-light hover:bg-gray-light">
          <ChevronLeft />
        </CarouselPrevious>
      </div> */}

      {/* right arrow */}
      {/* <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden lg:block">
        <CarouselNext className="h-[20px] w-[20px] rounded-full bg-gray-light hover:bg-gray-light">
          <ChevronsRight />
        </CarouselNext>
      </div> */}
    </Carousel>
  );
};

export default SliderBannerOne;
