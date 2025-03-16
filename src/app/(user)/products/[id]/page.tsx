import Loader from "@/utility/Loader/Loader";
import dynamic from "next/dynamic";

const ProductDetails = dynamic(
  () => import("@/components/users/productDetails/ProductDetails"),
  { loading: () => <Loader /> }
);

const ProductDetailsPage = () => {
  return (
    <div>
      <ProductDetails />
    </div>
  );
};

export default ProductDetailsPage;
