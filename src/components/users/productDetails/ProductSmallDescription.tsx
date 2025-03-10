"use client";
import Button from "@/components/shared/Button";
import { numberFormatter } from "@/components/shared/NumberFormatter";
import RatingComponent from "@/components/shared/RatingComponent";
import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoIosCheckmarkCircle } from "react-icons/io";

const ProductSmallDescription = () => {
  const [quantity, setQuantity] = React.useState(1);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="h-full xl:w-[calc(100%-330px)] min-h-[350px]">
      {/* ====== product details ==== */}
      <div className="flex flex-col gap-3">
        <h1 className="text-base lg:text-2xl">
          Lumbar Roll Pillow for Lower Back, Lumbar Support Pillow Memory Foam
          Roll Pillow with Removable Washable Cover Ergonomic Neckroll Pillow
          with Elastic Strap Length Back Support Roll for Chair
        </h1>
        {/* ==== availability, review, stock status ==== */}
        <div>
          <div className="w-full flex flex-col gap-3 lg:gap-4">
            <h4 className="text-sm font-medium text-black leading-none flex items-center gap-2">
              <span className="hidden lg:inline-block text-black-dim text-sm font-medium">
                Availability:
              </span>

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
            </h4>

            {/*//? ====== product code =======*/}
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
            {/* //? ==== categoris ====== */}
            {/* <div className="hidden lg:block text-sm font-medium text-black ">
                Categories:{" "}
                <span className="text-black font-light">
                  {category && category?.name}, {subCategory?.name}
                </span>
              </div> */}
            <div className="text-sm font-medium text-black ">
              Categories:{" "}
              <span className="text-black font-light">
                category name, subcategory name
              </span>
            </div>
            {/* <h4 className="text-sm font-medium text-black leading-none">
                  Tag: <span className="text-black font-light">Travel Backpack</span>
                </h4> */}
            {/*//? ===== rating ==== */}
            <div className="flex  items-center gap-2">
              <RatingComponent isReadOnly={true} value={2} />
              <p className="underline font-medium text-sm">10 reviews</p>
              {/* <Link
                          to="#reviews"
                          className="underline font-medium"
                          onClick={() => handleLinkClick("Reviews")}
                        >
                          {totalRatingCount} reviews
                        </Link> */}
            </div>
            {/* price */}
            <div className="flex flex-col my-5">
              <p className="text-2xl lg:text-3xl text-[#f57224]">
                ৳ {numberFormatter(1000)}
              </p>
              <div className="text-sm text-[#9e9e9e] flex items-center gap-2">
                <p className="line-through">৳ {numberFormatter(900)}</p>
                <p className="text-black">-65%</p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {/* //?======== quantity ========*/}
              <div className="flex items-center gap-8">
                <p>Quantity:</p>
                <div className="flex gap-1">
                  {/* <Button
                    type="button"
                    className={`w-30px h-30px bg-white flex items-center justify-center rounded-5px ${
                      quantity <=
                      countryWiseChanges?.quantityWisePrice[0]?.min_quantity
                        ? "opacity-50 cursor-not-allowed"
                        : "opacity-100"
                    }`}
                    disabled={
                      quantity <=
                        countryWiseChanges?.quantityWisePrice[0]
                          ?.min_quantity || is_upcoming
                    }
                    onClick={() => decrement()}
                  >
                    <FiMinus />
                  </Button> */}

                  {/* temporary */}
                  <Button
                    type="button"
                    className={`w-[30px] h-[30px] bg-gray/60 flex items-center justify-center rounded-5px ${
                      quantity <= 1
                        ? "opacity-50 cursor-not-allowed"
                        : "opacity-100"
                    }`}
                    disabled={quantity <= 1}
                    onClick={() => decrement()}
                  >
                    <FiMinus />
                  </Button>
                  {/*  */}
                  <div className="w-[43px] pl-3 lg:pl-3.5 h-[30px] bg-gray/60 flex items-center justify-center rounded-5px text-xs font-semibold">
                    <input
                      // disabled={is_upcoming}
                      min={1}
                      className="w-[43px] text-center outline-none bg-transparent disabled:opacity-40"
                      type="number"
                      value={quantity}
                      onChange={(e) => {
                        let inputValue = parseInt(e.target.value, 10);
                        if (!isNaN(inputValue)) {
                          inputValue = Math.max(1, inputValue);
                          setQuantity(inputValue);
                        } else {
                          setQuantity(1);
                        }
                      }}
                    />
                  </div>
                  <Button
                    // disabled={is_upcoming}
                    type="button"
                    className={`bg-gray w-[30px] h-[30px] 
                } bg-white flex items-center justify-center rounded-5px disabled:opacity-50 disabled:cursor-not-allowed`}
                    onClick={() => increment()}
                  >
                    <FiPlus />
                  </Button>
                </div>
              </div>

              {/* //?==== add to cart , buy now */}
              <div className=" bg-[#E6E9EB] flex gap-3 lg:gap-5 w-full bg-transparent">
                {/* ==== buy now button ====*/}
                <Button
                  type="button"
                  className={`bg-main-primary lg:bg-main-secondary lg:hover:bg-main-secondary-dark duration-200 px-[0px] w-[150px] h-[47px] py-4 leading-none text-sm lg:text-base font-medium lg:font-semibold text-white rounded-[30px] lg:rounded flex items-center justify-center active:scale-95  
                disabled:opacity-50 disabled:cursor-not-allowed opacity-100
              `}
                  // onClick={() => handleClick(name, slug, img, id)}
                  // disabled={isStock || is_upcoming}
                >
                  Buy now{" "}
                </Button>
                {/* ===== add to cart button */}
                <div className="flex items-center gap-4">
                  {/* <Button
                      type="button"
                      className={`bg-secondary lg:bg-primary bg:hover:bg-secondary lg:hover:bg-primary-dark duration-200 w-[183px] h-[47px]  py-4 leading-none text-sm lg:text-base lg:font-semibold text-white rounded-[30px] lg:rounded flex items-center justify-center gap-[7px] shadow-lg relative active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${
                        isStock
                          ? "opacity-50 cursor-not-allowed"
                          : "opacity-100"
                      }`}
                      onClick={() => addProductToCart(slug, id, name, img)}
                      disabled={isStock || is_upcoming}
                    >
                      {" "}
                      <FaCartPlus className="text-lg " />
                      Add to cart
                    </Button> */}
                  <Button
                    type="button"
                    className={`bg-main-secondary lg:bg-main-primary bg:hover:bg-main-secondary lg:hover:bg-main-primary-dark duration-200 w-[160px] h-[47px]  py-4 leading-none text-sm lg:text-base lg:font-semibold text-white rounded-[30px] lg:rounded flex items-center justify-center gap-[7px] shadow-lg relative active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed `}
                  >
                    <FaCartPlus className="text-lg " />
                    Add to cart
                  </Button>
                  {/* ====== wish list ====== */}
                  {/* <WishList handleWishlist={handleWishlist} /> */}
                </div>
              </div>
              <p className="text-spanish-gray text-xs font-medium hidden lg:flex items-center gap-2">
                <IoIosCheckmarkCircle className="text-lg text-[#4CAF50]" /> Shop
                Secure, Free Returns
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSmallDescription;
