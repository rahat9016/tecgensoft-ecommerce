import CountDownTimer from "@/components/CustomComponents/CountDownTimer";
import Image from "next/image";
import React from "react";

type sliderBannerCardProps = {
  title: string;
  image: string;
  className?: string;
  textClassName?: string;
};

const SliderBannerCard: React.FC<sliderBannerCardProps> = ({
  title,
  image,
  className,
  textClassName,
}) => {
  return (
    <div className="lg:w-full ">
      <div className=" relative w-full overflow-hidden h-[110px] lg:h-[215px] rounded-lg">
        {/* banner background image */}
        <Image
          src={image}
          width={516}
          height={215}
          alt="banner slider image 1"
          className="h-full object-cover w-full"
        />
        {/* text part */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center gap-5">
          <h1 className="text-2xl lg:text-5xl font-bold">{title}</h1>
          {/* timer */}
          <CountDownTimer className={className} textClassName={textClassName} />
        </div>
      </div>
    </div>
  );
};

export default SliderBannerCard;
