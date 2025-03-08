/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ProductImages from "./ProductImages";
import { images } from "./DemoData";

import ProductSpecifics from "./ProductSpecifics";

const ProductDetails = () => {
  return (
    <div className="container mx-auto flex flex-col">
      {/* breadcum */}
      <div className="my-4">Home / Custom / Work in process</div>

      {/*========= product details part ======== */}
      <div className=" border border-red-500 min-h-[700px] mb-10 p-3 flex flex-col items-center lg:items-start gap-3 lg:gap-5 lg:flex-row">
        {/*====== product image =======*/}
        <div className="w-[350px]">
          <ProductImages productImages={images} />
        </div>
        {/*==== product details and delivery options ======*/}
        <ProductSpecifics />
      </div>
    </div>
  );
};

export default ProductDetails;
