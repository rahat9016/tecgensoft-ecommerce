/* eslint-disable @typescript-eslint/no-unused-vars */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IBaseProduct, IReview, IVariant } from "../types";
import Description from "./Description";
import Reviews from "./Reviews";

const ProductFullDescription = ({
  variant,
  baseProduct,
  productReviews,
}: {
  variant: IVariant | undefined;
  baseProduct: IBaseProduct | undefined;
  productReviews: IReview[];
}) => {
  return (
    <div className="min-h-[700px] mb-10 flex flex-col gap-3 max-w-[990px] w-full">
      <Tabs defaultValue="Description" className="bg-red- flex flex-col gap-3">
        {/*//? ======= tabs ====== */}
        <TabsList className="gap-3">
          <TabsTrigger
            value="Description"
            className="data-[state=active]:bg-[#157892] data-[state=active]:text-white text-sm font-semibold px-5 py-2 bg-white text-[#157892]"
          >
            Description
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="data-[state=active]:bg-[#157892] data-[state=active]:text-white text-sm font-semibold px-5 py-2 bg-white text-[#157892]"
          >
            Reviews
          </TabsTrigger>
          {/* <TabsTrigger
            value="faqs"
            className="data-[state=active]:bg-[#157892] data-[state=active]:text-white text-sm font-semibold px-5 py-2 bg-white text-[#157892]"
          >
            FAQS
          </TabsTrigger> */}
        </TabsList>

        {/* //? ========= tabs contents ======== */}
        <TabsContent value="Description">
          <Description variant={variant} baseProduct={baseProduct} />
        </TabsContent>
        <TabsContent value="reviews">
          <Reviews variant={variant} productReviews={productReviews} />
        </TabsContent>
        {/* <TabsContent value="faqs">
          <FaqPage />
        </TabsContent> */}
      </Tabs>
    </div>
  );
};

export default ProductFullDescription;
