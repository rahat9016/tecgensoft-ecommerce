import { IFilterProps } from "@/Types/FilterTypes";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "../../shared/Button";
import BrandFilter from "./BrandFilter";
import CategoryFilter from "./CategoryFilter";
import { demoBrandData } from "@/app/(user)/(categories)/[slug]/CategoryDemoData";

const Filter = ({ filterBy }: IFilterProps) => {
  const pathname = usePathname();

  // * get brand api call
  // const { data: getBrand } = useGetBrandQuery(undefined);
  const getBrand = demoBrandData;

  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string[]>([]);

  // const handleReset = () => {
  //   dispatch(setCategory([]));
  //   dispatch(setBrand([]));
  //   setSelectedFilter([]);
  //   setSelectedBrand([]);
  //   dispatch(setPriceRange([1, 700000]));
  //   dispatch(setInputValues([1, 700000]));
  // };
  const handleReset = () => {
    console.log("i am handle reset");
  };

  return (
    <div className="pr-2.5 ">
      <div
        className={`lg:border-b  border-slate-gray (${
          pathname.includes("/store/") || pathname.includes("/search")
        } ? "" : "border-t"}`}
      >
        <div className="lg:flex justify-between items-center text-black-dim lg:py-4 hidden">
          <p className="text-base font-semibold leading-none ">Filter by</p>
          <Button
            className="text-sm font-semibold leading-none"
            onClick={handleReset}
          >
            Reset
          </Button>
        </div>
      </div>

      {/* category */}
      <CategoryFilter
        itemName="Categories"
        filterBy={filterBy}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />

      {/* brand  */}
      <BrandFilter
        itemName="Brand"
        filterBy={getBrand?.data}
        selectedFilter={selectedBrand}
        setSelectedFilter={setSelectedBrand}
      />
    </div>
  );
};

export default Filter;
