/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ProductImages from "./ProductImages";
import { demoProductData, demoReviewData, images } from "./DemoData";

import ProductSpecifics from "./ProductSpecifics";
import ProductFullDescription from "./ProductFullDescription/ProductFullDescription";

const ProductDetails = () => {
  const { variant, base_product } = demoProductData;

  return (
    <div className="container mx-auto flex flex-col">
      {/* breadecum */}
      <div className="my-4">Home / Custom / Work in process</div>

      {/*========= product short details part ======== */}
      <div className="bg-[#fff] min-h-[700px] mb-10 p-3 flex flex-col items-center lg:items-start gap-3 lg:gap-5 lg:flex-row">
        {/*//? ====== product image =======*/}
        <div className="w-[350px]">
          <ProductImages productImages={images} />
        </div>
        {/*//? ==== product details and delivery options ======*/}
        <ProductSpecifics />
      </div>

      {/* //? ======= product full description ========= */}
      <ProductFullDescription
        variant={variant}
        baseProduct={base_product}
        productReviews={demoReviewData}
      />
    </div>
  );
};

export default ProductDetails;
