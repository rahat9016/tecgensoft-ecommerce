import {Star} from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className="flex flex-col min-h-[210px] rounded-5px overflow-hidden">
      {/* image */}
      <div className="w-full max-h-[152px] h-full">
        <Image
          src={"/images/home/demo_product_img_2.png"}
          width={175}
          height={210}
          alt="product image"
          className="object-cover"
        />
      </div>
      {/* texts */}
      <div className="px-2.5 py-2 bg-white w-full h-[calc(100%-152px)]">
        {/* product name */}
        <p className="text-sm leading-6 text-textPrimary line-clamp-1">
          Purify Neem Face wash for men
        </p>
        {/* price, discount price, stars */}
        <div className="flex items-center justify-between gap-5">
          {/* price */}
          <div className="w-full flex items-start gap-1 relative">
            <p className="text-sm leading-7 text-textPrimary font-semibold">
              ৳55344
            </p>
            {/* discount price */}
            <p className="line-through text-spanish-gray text-xsm font-medium mt-1 ">
              ৳13245
            </p>
          </div>
          {/* star */}
          <div className="flex items-center gap-1">
            <p className="text-xs leading-[26px] text-spanish-gray">4.1</p>
            <Star className="w-[10px] h-[10px] text-[#FFC702]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
