import ProductCard from "@/components/shared/cards/ProductCard";
import SectionHeader from "@/components/shared/SectionHeader";
import SectionWrapper from "@/components/shared/SectionWrapper";
import React from "react";

type Product = {
  id: number;
  productImage: string;
  productName: string;
  price: number;
  discountPrice: number;
  isShowDiscountPrice: boolean;
  star: number;
  discount: number;
  isDiscountBanner: boolean;
};

type PopularProductsProps = {
  data: Product[];
};

const PopularProducts: React.FC<PopularProductsProps> = ({ data }) => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-2">
        {/* heading */}
        <SectionHeader title="Popular Products" />
        <div className="min-h-[200px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 lg:gap-x-3 gap-y-3 lg:gap-y-4">
          {/* card */}
          {data.map((product: Product) => (
            <ProductCard
              key={product?.id}
              href={`/products/${product?.id}`}
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
    </SectionWrapper>
  );
};

export default PopularProducts;
