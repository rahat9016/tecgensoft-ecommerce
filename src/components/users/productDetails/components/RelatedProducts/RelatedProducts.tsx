// import {useRouter} from "next/router";

import RelatedProductCard from "./RelatedProductCard";
import { IProduct } from "../../types";
import ProductCard from "@/components/shared/cards/ProductCard";

const RelatedProducts = ({
  categoryProducts,
}: {
  categoryProducts: IProduct[];
}) => {
  // const router = useRouter();
  // const { slug } = router.query;

  const slug = "twinfish";

  const variantSlug = typeof slug === "string" ? slug.split("=")[1] : undefined;

  const removeDuplicateItems = (categoryProducts: IProduct[]) => {
    return categoryProducts.filter(
      (product: IProduct) => product.slug !== variantSlug
    );
  };

  const relatedProducts = removeDuplicateItems(categoryProducts);

  if (!relatedProducts.length) return null;

  return (
    <div className={`${relatedProducts.length === 0 ? "hidden" : ""} mb-10`}>
      <div className="lg:text-center lg:py-[11px] lg:bg-white text-primary-dark text-sm font-semibold rounded-5px">
        <h3 className="">Related Products</h3>
      </div>
      <div className="hidden lg:flex flex-col gap-4 mt-4">
        {relatedProducts.map((product: IProduct) => (
          <RelatedProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex flex-wrap lg:hidden overflow-auto hide-scroll gap-2 my-10">
        {relatedProducts.map((product: IProduct) => (
          <div key={product.id} className="w-[150px] bg-white">
            <ProductCard
              productImage={product.images}
              productName={product?.name}
              price={product?.selling_price}
              star={product?.rating}
              href={`/products/product_variant=${product?.slug}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
