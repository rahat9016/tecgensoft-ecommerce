import SectionWrapper from "@/components/shared/SectionWrapper";
import Image from "next/image";
import React from "react";

const FeaturedCategorySmall = () => {
  const electronicsInventory = [
    {
      id: 1,
      name: "Drone",
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/drone-48x48.png",
    },
    {
      id: 2,
      name: "Gimbal",
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/gimbal-48x48.png",
    },
    {
      id: 3,
      name: "Charger Fan",
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/charger-fan-48x48.png",
    },
    {
      id: 4,
      name: "Weight Scale",
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/weight-scale-48x48.png",
    },
    {
      id: 5,
      name: "TV",
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/tv-48x48.png",
    },
    {
      id: 6,
      name: "Mobile Phone",
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/mobile-phone-48x48.png",
    },
    {
      id: 7,
      name: "Mobile Accessories",
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/mobile-phone-accessories-48x48.png",
    },
    {
      id: 8,
      name: "Portable SSD",
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/portable-ssd-48x48.png",
    },
    {
      id: 9,
      name: "Portable WiFi Camera",
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/portable-ip-camera-48x48.png",
    },
    {
      id: 10,
      name: "Trimmer",
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/trimmer-48x48.png",
    },
    {
      id: 11,
      name: "Smart Watch",
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/smart-watch-48x48.png",
    },
    {
      id: 12,
      name: "Action Camera",
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/action-camera-48x48.png",
    },
    {
      id: 13,
      name: "Earphone",
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/earphone-48x48.png",
    },
    {
      id: 14,
      name: "Earbuds",
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/earbuds-48x48.png",
    },
    {
      id: 15,
      name: "Bluetooth Speakers",
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/bt-speaker-48x48.png",
    },
    {
      id: 16,
      name: "Gaming Console",
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/gaming-console-48x48.png",
    },
  ];
  return (
    <div className="my-10">
      <SectionWrapper className="bg-[#E6E9EB]">
        <div className="flex flex-col gap-10 ">
          {/* text */}
          <div className="w-full text-center">
            <p className="text-[18px] leading-6 font-bold">Featured Category</p>
            <p className="text-sm">
              Get Your Desired Product from Featured Category!
            </p>
          </div>
          {/* cards */}
          <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
            {electronicsInventory.map((item) => (
              <div
                key={item?.id}
                className="bg-white rounded-xl flex flex-col items-center justify-center px-2 py-3 min-h-[100px] gap-3 group cursor-pointer"
              >
                <Image src={item?.img} width={48} height={48} alt="category" />
                <p className="text-center  text-xs group-hover:text-[#ef4a23]">
                  {item?.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default FeaturedCategorySmall;
