import {Star} from "lucide-react";
import Image from "next/image";
import React from "react";

type ProductCardProps = {
  productImage: string;
  productName: string;
  price: number;
  discountPrice?: number;
  isShowDiscountPrice?: boolean;
  star: number;
  discount?: number;
  isDiscountBanner?: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({
  productImage,
  productName,
  price,
  discountPrice,
  isShowDiscountPrice = false,
  star,
  discount,
  isDiscountBanner = false,
}) => {
  return (
    <div className="flex flex-col min-h-[210px] max-h-[300px] rounded-5px overflow-hidden relative">
      {/* discount banner */}
      {isDiscountBanner && (
        <div className="flex justify-center items-center w-[34px] h-[37px] lg:w-[48px] lg:h-[53px] absolute top-0 right-5">
          <Image
            src={"/icons/discount_banner.png"}
            width={100}
            height={100}
            alt="discount banner"
          />
          <p className="absolute lg:top-3 font-bold text-sm leading-[14px] lg:text-xl lg:leading-6 text-white">
            {discount}
            <span className="text-xs lg:text-sm leading-[14px]">%</span>
          </p>
        </div>
      )}
      {/* image */}
      <div className="w-full max-h-[152px] lg:max-h-[218px] h-full">
        <Image
          src={productImage}
          width={250}
          height={218}
          alt="product image"
          className="object-cover w-full h-full"
        />
      </div>

      {/* texts */}
      <div className="px-2.5 py-2 lg:p-5 bg-white w-full h-[calc(100%-152px)]">
        {/* product name */}
        <p className="text-sm leading-6 text-textPrimary line-clamp-1">
          {productName}
        </p>
        {/* price, discount price, stars */}
        <div className="flex items-center justify-between gap-5">
          {/* price */}
          <div className="w-full flex items-start gap-1 lg:gap-3 relative">
            <p className="text-sm lg:text-xl leading-7 text-textPrimary font-semibold lg:font-medium">
              ৳{price}
            </p>
            {/* discount price */}
            {isShowDiscountPrice && (
              <p className="line-through text-spanish-gray text-xsm lg:text-xs font-medium mt-1">
                ৳{discountPrice}
              </p>
            )}
          </div>
          {/* star */}
          <div className="flex items-center gap-1">
            <p className="text-xs lg:text-base lg:font-bold leading-[26px] text-spanish-gray">
              {star}
            </p>
            <Star className="w-[12px] h-[12px] lg:w-4 lg:h-4 text-[#FFC702]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
