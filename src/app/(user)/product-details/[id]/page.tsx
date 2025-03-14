import dynamic from "next/dynamic";

const ProductDetails = dynamic(
  () => import("@/components/users/productDetails/ProductDetails"),
  {loading: () => <p>Loading ....</p>}
);

const ProductDetailsPage = () => {
  return (
    <div>
      <ProductDetails />
    </div>
  );
};

export default ProductDetailsPage;
