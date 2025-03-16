"use client";
import { useScreenSize } from "@/hooks/useScreenSize";
import { IBreadcrumbs } from "@/Types/Types";
import Breadcrumb from "@/utility/BreadCrumb";
import { addBreadcrumb } from "@/utility/breadcrumb";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { categoryByGroupData, getAllCategory } from "./CategoryDemoData";
import FilterLoader from "@/utility/Loader/FilterLoader";

type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Props) {
  const pathname = usePathname();
  const { slug } = params;
  const { isSmallDevice } = useScreenSize();

  const [skip, setskip] = useState({
    productsByGroup: true,
    productByCategory: true,
  });

  let group = "";
  let categoryName = "";
  let subcategory = "";
  if (
    pathname === "/deals-of-the-week" ||
    pathname === "/topSeller" ||
    pathname === "/upcoming" ||
    pathname === "/featured"
  ) {
    //
  } else {
    [group, categoryName, subcategory] = pathname.split("/").slice(1, 4);
  }

  useEffect(() => {
    if (
      pathname !== "/deals-of-the-week" &&
      pathname !== "/topSeller" &&
      pathname !== "/upcoming" &&
      pathname !== "/featured"
    ) {
      setskip({
        ...skip,
        productsByGroup: false,
        productByCategory: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // * top seller api call
  // const {
  //   data: topSeller,
  //   isLoading: topSellerLoading,
  //   isFetching: topSellerFetching,
  // } = useGetTopSellerProductsQuery(
  //   {
  //     page,
  //     filter: "is_top_sale",
  //     page_size,
  //     categorySlug: category,
  //     brandSlug: brand,
  //     groupSlug: group,
  //     price_min: price ? price[0] : 1,
  //     price_max: price ? price[1] : 700000,
  //   },
  //   { skip: pathname !== "/topSeller" }
  // );

  // * upcoming api call
  // const {
  //   data: upcoming,
  //   isLoading: upcomingLoading,
  //   isFetching: upcomingFetching,
  // } = useGetUpcomingProductsQuery(
  //   {
  //     page,
  //     filter: "is_upcoming",
  //     page_size,
  //     categorySlug: category,
  //     brandSlug: brand,
  //     groupSlug: group,
  //     price_min: price ? price[0] : 1,
  //     price_max: price ? price[1] : 700000,
  //   },
  //   { skip: pathname !== "/upcoming" }
  // );

  // * featured api call
  // const {
  //   data: featured,
  //   isLoading: featuredLoading,
  //   isFetching: featuredFetching,
  // } = useGetUpcomingProductsQuery(
  //   {
  //     filter: "is_featured",
  //     page,
  //     page_size,
  //     categorySlug: category,
  //     brandSlug: brand,
  //     price_min: price ? price[0] : 1,
  //     price_max: price ? price[1] : 700000,
  //   },
  //   { skip: pathname !== "/featured" }
  // );

  // * get deals of the week api call
  // const {
  //     data: deals,
  //     isLoading: dealsLoading,
  //     isFetching: dealsFetching,
  //   } = useGetDealsofTheWeekQuery(page, { skip: pathname !== "/deals-of-the-week" });

  // * get category by group api
  // const { data: categoryByGroup, isLoading: categoryByGroupLoading, isError } = useGetCategorybyGroupQuery(group, { skip: !group });

  const categoryByGroup = categoryByGroupData;

  // * get product by cat and subcat
  // const {
  //   data: productByCategory,
  //   isLoading: productByCategoryLoading,
  //   isFetching: productByCategoryFetching,
  // } = useGetProductbyCategoryQuery(
  //   {
  //     page,
  //     page_size,
  //     categorySlug: category,
  //     brandSlug: brand,
  //     groupSlug: group,
  //     subcategorySlug: subcategory,
  //     price_min: price ? price[0] : 1,
  //     price_max: price ? price[1] : 700000,
  //   },
  //   {
  //     skip: skip?.productByCategory,
  //   }
  // );

  // * all categories and subcategories
  // const { data: allCategories, isLoading: allCategoriesLoading } = useGetAllCategoryQuery(undefined);
  // const { data: allSubCategories, isLoading: allSubCategoriesLoading } = useGetAllSubCategoryQuery(undefined, { skip: !subcategory });

  const allCategories = getAllCategory;

  //* check if category exist in database
  const categoryExist = allCategories?.find(
    (category: any) => category?.slug === categoryName
  );
  // const subCategoryExist = allSubCategories?.data?.find((sub: any) => sub?.slug === subcategory);
  const subCategoryExist = {
    name: "",
  };

  // * breadcrumb part
  const breadcrumbs: IBreadcrumbs[] = [];
  let currentLabel: string | undefined = "";
  const groupName = categoryByGroup?.data?.name;
  const groupCategories = categoryByGroup?.data?.categories;
  const path: { [key: string]: string } = {
    "/deals-of-the-week": "Deals of the week",
    "/topSeller": "Popular Products",
    "/upcoming": "Upcoming Products",
    "/featured": "Featured Products",
  };
  if (path[pathname]) {
    currentLabel = path[pathname];
  } else if (subcategory) {
    addBreadcrumb(breadcrumbs, groupName, `/${group}`);
    addBreadcrumb(
      breadcrumbs,
      categoryExist?.name,
      `/${group}/${categoryName}`
    );
    currentLabel = subCategoryExist?.name;
  } else if (categoryName) {
    addBreadcrumb(breadcrumbs, groupName, `/${group}`);
    currentLabel = categoryExist?.name;
  } else if (group) {
    currentLabel = groupName;
  }

  return (
    <div className="container">
      <Breadcrumb breadcrumbs={breadcrumbs} currentLabel={currentLabel} />
      <div className="flex gap-6">
        {/* {pathname === "/deals-of-the-week" ||
          (isSmallDevice > 1024 ? (
            <div className="basis-1/5 mt-[50px] hidden lg:block">
              {categoryByGroupLoading || allCategoriesLoading ? (
                <FilterLoader />
              ) : (
                <>
                  <Filter filterBy={categories} />
                  <PriceSlider />
                </>
              )}
            </div>
          ) : null)} */}
        {pathname === "/deals-of-the-week" ||
          (isSmallDevice > 1024 ? (
            <div className="basis-1/5 mt-[50px] hidden lg:block">
              <Filter filterBy={categories} />
              <PriceSlider />
            </div>
          ) : null)}
      </div>
      <div>i am slug value {slug}</div>
    </div>
  );
}
