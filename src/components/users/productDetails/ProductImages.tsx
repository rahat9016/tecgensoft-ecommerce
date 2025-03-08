"use client";

import Image from "@/components/shared/Image";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductImages = ({
  productImages,
}: {
  productImages: string[] | undefined;
}) => {
  const [image, setImage] = useState<string | undefined>("");
  const [imgIndex, setImgIndex] = useState<number>(0);
  const handleImageMouseOver = (img: string, i: number) => {
    setImage(img);
    setImgIndex(i);
  };
  useEffect(() => {
    if (productImages && productImages.length > 0) {
      setImage(productImages[0]);
    }
  }, [productImages]);
  if (!productImages) {
    return null;
  }
  // const lengthOfProductImages = productImages.length;
  // const lengthOF = 6 - lengthOfProductImages;
  return (
    <div className="relative">
      {/* === product image ===== */}
      <div className="bg-[#DEDEDE] rounded-15px hidden lg:block  overflow-hidden">
        <Image
          src={image ?? ""}
          alt=""
          className="w-full h-[260px] lg:h-[330px] bg-gray-100 object-cover lg:rounded-15px"
        />
      </div>
      {/* ====== for big screen ===== */}
      <div className="w-full mt-6 relative hidden lg:block">
        <Swiper
          slidesPerView={4}
          spaceBetween={8}
          modules={[Navigation]}
          className="mySwiper"
          navigation={{
            prevEl: ".product-prev-button",
            nextEl: ".product-next-button",
          }}
          loop
        >
          {productImages?.map((img, i) => (
            <SwiperSlide key={i}>
              <Image
                key={img}
                src={img}
                alt=""
                className={`bg-[#DEDEDE] hover:opacity-100 duration-100 w-[73px] bg-contain block h-[73px] rounded-15px cursor-pointer ${
                  imgIndex === i ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => handleImageMouseOver(img, i)}
              />
            </SwiperSlide>
          ))}
          {/* lengthOfProductImages < 6 ? (
            <div className="flex">
              {Array.from({ length: lengthOF }, (_, index) => (
                <div key={index} className="bg-white w-[73px] bg-contain block h-[73px] rounded-15px cursor-pointer " />
              ))}
            </div>
          ) : null */}
        </Swiper>
        <div className="product-prev-button w-5 h-5 absolute left-0 right-0 top-0 bottom-0 my-auto cursor-pointer -ml-2 z-10">
          <MdKeyboardArrowLeft className="bg-white text-black rounded-full w-full h-full " />
        </div>
        <div className="product-next-button w-5 h-5 absolute right-0 top-0 bottom-0 my-auto cursor-pointer -mr-2 z-10 ">
          <MdKeyboardArrowRight className="bg-white text-black rounded-full w-full h-full" />
        </div>
      </div>
      {/* ==== for small device ====== */}
      <div className="lg:hidden productImages bg-white">
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          loop
        >
          {productImages?.map((img, i) => (
            <SwiperSlide key={i}>
              <Image
                key={img}
                src={img || ""}
                alt=""
                className=" w-full h-[330px] object-contain"
                onClick={() => handleImageMouseOver(img, i)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductImages;
