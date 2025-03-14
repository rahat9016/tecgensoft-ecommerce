/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ProductImages from "./ProductImages";
import {
  demoProductData,
  demoReviewData,
  images,
  RelatedProductsData,
} from "./DemoData";

import ProductSpecifics from "./ProductSpecifics";
import ProductFullDescription from "./ProductFullDescription/ProductFullDescription";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";

const ProductDetails = () => {
  const {variant, base_product} = demoProductData;
  const categoryProducts = RelatedProductsData || [];

  return (
    <div className="container mx-auto flex flex-col max-w-[1327px]">
      {/* breadecum */}
      <div className="my-4">Home / Custom / Work in process</div>

      {/*========= product short details part ======== */}
      <div className="bg-[#fff] min-h-[700px] mb-10 px-3 lg:p-3 overflow-hidden flex flex-col items-center lg:items-start gap-3 lg:gap-5 lg:flex-row">
        {/*//? ====== product image =======*/}
        <div className="w-[350px]">
          <ProductImages productImages={images} />
        </div>
        {/*//? ==== product details and delivery options ======*/}
        <ProductSpecifics />
      </div>

      {/* //? ======= product full description ========= */}
      <div className="flex flex-col-reverse lg:flex-row  lg:gap-[16px] ">
        <ProductFullDescription
          variant={variant}
          baseProduct={base_product}
          productReviews={demoReviewData}
        />
        {/*=== related products =======*/}
        <div className="w-full lg:w-[415px] mt-4 px-4 lg:px-0">
          <RelatedProducts categoryProducts={categoryProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
