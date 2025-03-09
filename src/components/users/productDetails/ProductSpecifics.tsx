import DeliveryReturnOptions from "./DeliveryReturnOptions";
import ProductDescription from "./ProductDescription";

const ProductSpecifics = () => {
  return (
    <div className="h-full flex flex-col md:flex-row lg:flex-col xl:flex-row xl:w-[calc(100%-350px)] gap-3">
      <ProductDescription />
      {/* ======== delivery details part ====== */}
      <DeliveryReturnOptions />
    </div>
  );
};

export default ProductSpecifics;
