import ProductCard from "@/components/shared/cards/ProductCard";
import SectionHeader from "@/components/shared/SectionHeader";
import SectionWrapper from "@/components/shared/SectionWrapper";

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

type FeaturedProductsProps = {
  isLoadMore?: boolean;
  data: Product[];
};
const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  isLoadMore = true,
  data,
}) => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-2">
        <SectionHeader title="Featured Products" showLink={false} />
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
        {/* load more btn */}
        {isLoadMore && (
          <div className="my-10 w-full flex justify-center">
            <button className="w-[426px] h-[44px] flex justify-center items-center rounded-5px border-2 border-[#157892] text-[#157892] hover:bg-[#157892] hover:text-white duration-300 transition-all ease-in-out">
              Load more
            </button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default FeaturedProducts;
