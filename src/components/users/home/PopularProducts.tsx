import ProductCard from "@/components/CustomComponents/ProductCard";
import SectionHeader from "@/components/CustomComponents/SectionHeader";
import React from "react";

type PopularProductsProps = {
  data: any;
};

const PopularProducts: React.FC<PopularProductsProps> = ({data}) => {
  return (
    <div className="flex flex-col gap-2">
      {/* heading */}
      <SectionHeader title="Popular Products" />
      <div className="min-h-[200px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 lg:gap-x-3 gap-y-3 lg:gap-y-4">
        {/* card */}
        {data.map((product: any) => (
          <ProductCard
            key={product?.id}
            productImage={product?.productImage}
            productName={product?.productName}
            price={product?.price}
            discountPrice={product?.discountPrice}
            isShowDiscountPrice={product?.isShowDiscountPrice}
            star={product?.star}
            discount={product?.discount}
            isDiscountBanner={product?.isDiscountBanner}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
