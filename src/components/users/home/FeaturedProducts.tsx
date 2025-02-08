import ProductCard from "@/components/CustomComponents/ProductCard";
import SectionHeader from "@/components/CustomComponents/SectionHeader";

const FeaturedProducts = () => {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader title="Featured Products" showLink={false} />
      <div className="min-h-[200px] grid grid-cols-2 gap-2">
        {/* card */}
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default FeaturedProducts;
