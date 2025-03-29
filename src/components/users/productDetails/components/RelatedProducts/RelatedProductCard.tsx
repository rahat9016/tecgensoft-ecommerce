"use client";
import { useRouter } from "next/navigation";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { IProduct } from "../../types";
import Image from "next/image";
// import {useNavigate} from "react-router-dom";
// import Image from "../../../components/shared/Image";
// import {IProduct} from "../../../types/types";

const RelatedProductCard = ({ product }: { product: IProduct }) => {
  const router = useRouter();

  if (!product) return null;
  const {
    images,
    name,
    selling_price: sellingPrice,
    updated_selling_price: updatedSellingPrice,
    slug,
    online_discount: onlineDiscount,
    average_rating: averageRating,
  } = product;

  const imageSrc = Array.isArray(images) ? images[0] : images;

  const navigateToProductDetails = (slug: string | undefined) => {
    if (slug) {
      router.push(`/products/product_variant=${slug}`);
    }
  };
  const keyDownNavigateToDetails = (
    event: { key: string | undefined },
    slug: string
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      navigateToProductDetails(slug);
    }
  };
  return (
    <button
      className="drop-shadow-sm bg-white lg:py-[10px] lg:pl-[11px] lg:pr-[13px] flex flex-col lg:flex-row items-center h-[210px] lg:h-[110px] rounded-5px relative lg:gap-[10px] hover:shadow-lg duration-300 pb-2"
      onClick={() => navigateToProductDetails(slug)}
      onKeyDown={(event) => keyDownNavigateToDetails(event, slug)}
      tabIndex={0}
    >
      {onlineDiscount?.online_discount_method?.toString() === `percentage` ? (
        <div className="shape flex justify-center items-center p-2 w-[40px] h-[53px] absolute right-[13px] top-0">
          <span className="text-base text-white font-bold hover:scale-105 duration-200">
            {onlineDiscount?.online_discount_amount}
            <span className="text-xs">%</span>
          </span>
        </div>
      ) : null}
      <div className="overflow-hidde">
        <Image
          src={imageSrc || "/images/product/no-image.jpg"}
          alt="SHOP"
          width={100}
          height={80}
          className="lg:min-w-[100px] lg:min-h-[80px] lg:max-w-[100px] lg:max-h-[80px]  rounded hover:scale-110 duration-700 object-contain"
        />
      </div>

      {/*==== product details ======*/}
      <div className="w-full px-3">
        {/*==== product name ======*/}
        <p className="capitalize text-black-dim text-[13px] lg:text-base font-medium lg:w-[250px] truncate text-left">
          {name?.length > 30 ? `${name?.slice(0, 30)}...` : name}
        </p>

        {/* <h4 className="text-black-dim text-[13px] lg:text-base font-medium lg:w-[200px] truncate pr-16">{name}</h4> */}
        <h5 className="text-black-dim text-sm text-left lg:text-base font-semibold">
          <p>৳ {updatedSellingPrice?.toFixed(2)}</p>
          {sellingPrice !== updatedSellingPrice && (
            <span className="line-through text-[10px] lg:text-xs text-spanish-gray ml-1">
              ৳{sellingPrice}
            </span>
          )}
        </h5>
        <div className="flex justify-start lg:justify-end">
          <span className="flex items-center gap-5">
            <p className="flex flex-row-reverse lg:flex-row items-center w-full gap-[2px] lg:gap-1 text-xs lg:text-base">
              {averageRating || 0}
              <FaStar className="text-yellow" />
            </p>{" "}
            <FaArrowRight className="hidden lg:inline-block text-primary-dark text-2xl hover:text-primary-dark" />
          </span>
        </div>
      </div>
    </button>
  );
};

export default RelatedProductCard;
