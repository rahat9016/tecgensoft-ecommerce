import DeliveryReturnOptions from "./DeliveryReturnOptions";
import ProductSmallDescription from "./ProductSmallDescription";

const ProductSpecifics = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row xl:w-[calc(100%-350px)] gap-3">
      <ProductSmallDescription />
      {/* ======== delivery details part ====== */}
      <DeliveryReturnOptions />
    </div>
  );
};

export default ProductSpecifics;
