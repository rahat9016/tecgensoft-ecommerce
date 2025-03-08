"use client";
/* eslint-disable react/no-array-index-key */

import React from "react";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import ReactStars from "react-rating-stars-component";

const ProductSpecifics = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row p-3 xl:w-[calc(100%-350px)] bg-red-500">
      <div className="xl:w-[calc(100%-330px)] bg-amber-300">
        {/* ====== product details ==== */}
        <div className="flex flex-col gap-3">
          <h1 className="text-base lg:text-2xl">
            Lumbar Roll Pillow for Lower Back, Lumbar Support Pillow Memory Foam
            Roll Pillow with Removable Washable Cover Ergonomic Neckroll Pillow
            with Elastic Strap Length Back Support Roll for Chair
          </h1>
          {/* ==== availability, review, stock status ==== */}
          <div>
            <div className="w-full lg:w-[40%] flex flex-col lg:gap-4">
              <h4 className="text-sm font-medium text-black leading-none flex items-center gap-2">
                <span className="hidden lg:inline-block">Availability:</span>

                {/* {is_upcoming ? (
                  <span>-</span>
                ) : stock && stock !== null && stock > 0 ? (
                  <span className="text-[#02BF6C] capitalize font-semibold">
                    {" "}
                    In stock
                  </span>
                ) : (
                  <span className="text-secondary capitalize font-semibold">
                    {" "}
                    Out Of stock
                  </span>
                )} */}
                <span className="text-[#02BF6C] capitalize font-semibold">
                  {" "}
                  In stock
                </span>
                {/* <span className="lg:hidden flex items-center gap-[2px]">
                  (<h6>{`${averageRating}`}</h6>
                  <FaStar className="text-yellow" />)
                </span> */}
                <span className="lg:hidden flex items-center gap-[2px]">
                  (<h6>{`132`}</h6>
                  <FaStar className="text-yellow" />)
                </span>
              </h4>
              {/* <div className="hidden lg:block text-sm font-medium text-black leading-none">
                Product Code:{" "}
                <span className="text-black font-light uppercase">
                  #{sku && sku}
                </span>
              </div> */}
              <div className="hidden lg:block text-sm font-medium text-black leading-none">
                Product Code:{" "}
                <span className="text-black font-light uppercase">
                  #asdasd148541a6sd
                </span>
              </div>
              {/* <div className="hidden lg:block text-sm font-medium text-black ">
                Categories:{" "}
                <span className="text-black font-light">
                  {category && category?.name}, {subCategory?.name}
                </span>
              </div> */}
              <div className="hidden lg:block text-sm font-medium text-black ">
                Categories:{" "}
                <span className="text-black font-light">
                  category name, subcategory name
                </span>
              </div>
              {/* <h4 className="text-sm font-medium text-black leading-none">
                  Tag: <span className="text-black font-light">Travel Backpack</span>
                </h4> */}
              <div className="hidden lg:flex items-center gap-19px">
                <p>stars here</p>
                <p className="underline font-medium">10 reviews</p>
                {/* <Link
                          to="#reviews"
                          className="underline font-medium"
                          onClick={() => handleLinkClick("Reviews")}
                        >
                          {totalRatingCount} reviews
                        </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 w-[330px] bg-slate-600">
        delivery details part
      </div>
    </div>
  );
};

export default ProductSpecifics;
