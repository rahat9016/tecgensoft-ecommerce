import { groupBySpecification } from "@/utility/product";
import React from "react";
import { IBaseProduct, IVariant } from "../types";

const Description = ({
  variant,
  baseProduct,
}: {
  variant: IVariant | undefined;
  baseProduct: IBaseProduct | undefined;
}) => {
  if (!variant) return null;
  const {
    name,
    meta,
    specifications,
    service_warranty: serviceWarranty,
    service_warranty_duration_type: serviceWarrantyDurationType,
    sell_warranty_duration_type: sellWarrantyDurationType,
    sell_warranty: sellWarranty,
  } = variant;

  const groupSpecification =
    Array.isArray(specifications) && groupBySpecification(specifications);
  const { brand } = baseProduct || {};
  const isWarrantyExit = !!sellWarranty || !!serviceWarranty;

  return (
    <div className="bg-white min-h-[400px]">
      <div className="p-5">
        <div className="w-full px-6 lg:px-14 py-14 pb-14">
          <h1 className="text-sm lg:text-3xl font-bold lg:leading-[40px] capitalize text-black-dim lg:mb-4">
            {name}{" "}
          </h1>
          <div className="inline-block ">
            <h2 className="text-[10px] lg:text-sm font-normal mb-0">
              by {brand?.name}
            </h2>
            <div className="bg-primary w-[39px] h-[2px] lg:mt-3" />
          </div>
          <div
            className="font-normal text-sm mt-4 lg:mt-10 mb-12 leading-[22px]"
            dangerouslySetInnerHTML={{ __html: meta && meta?.description }}
          />
          {groupSpecification && (
            <table className="block ">
              <thead className="block">
                <tr className="block">
                  <th className="block bg-cultured text-primary-dark font-semibold text-sm text-left py-[11px] pl-[14px] rounded-5px capitalize">
                    Specifications - {name}
                  </th>
                </tr>
              </thead>
              <tbody className="block px-[14px] mt-5">
                {groupSpecification && groupSpecification
                  ? groupSpecification?.map((specification, i) => {
                      return (
                        <React.Fragment key={i}>
                          {specification.items.map((data, i) => (
                            <tr
                              key={i}
                              className="grid grid-cols-2 border-light border-b  py-4"
                            >
                              <td className="text-silver text-sm font-normal">
                                {data.name}
                              </td>
                              <td className="text-black-dim text-sm font-normal">
                                {data.value}
                              </td>
                            </tr>
                          ))}
                        </React.Fragment>
                      );
                    })
                  : null}
              </tbody>
            </table>
          )}

          {isWarrantyExit && (
            // <table className="block mt-12">
            //   <tbody className="block ">
            //     <div className="block ">
            //       <tr className="block ">
            //         <th className="block bg-cultured text-primary-dark font-semibold text-sm text-left py-[11px] px-[14px] rounded-5px capitalize">
            //           Service
            //         </th>
            //       </tr>
            //       <tbody className="block px-[14px] mt-5">
            //         {serviceWarrantyDurationType && (
            //           <tr className="grid grid-cols-2 border-light border-b py-4">
            //             <td key={generateUniqueId()} className="text-silver text-xs lg:text-sm font-normal">
            //               Service Warranty
            //             </td>
            //             <td key={generateUniqueId()} className="text-black-dim text-xs lg:text-sm font-normal">
            //               {serviceWarranty} {serviceWarrantyDurationType}
            //             </td>
            //           </tr>
            //         )}
            //         {sellWarrantyDurationType && (
            //           <tr className="grid grid-cols-2 border-light border-b  py-4">
            //             <td key={generateUniqueId()} className="text-silver text-xs lg:text-sm font-normal">
            //               Warranty Duration
            //             </td>
            //             <td key={generateUniqueId()} className="text-black-dim text-xs lg:text-sm font-normal">
            //               {sellWarranty} {sellWarrantyDurationType}
            //             </td>
            //           </tr>
            //         )}
            //       </tbody>
            //     </div>
            //   </tbody>
            // </table>

            <table className="block mt-12">
              <tbody className="block">
                <tr className="block">
                  <th className="block bg-cultured text-primary-dark font-semibold text-sm text-left py-[11px] px-[14px] rounded-5px capitalize">
                    Service
                  </th>
                </tr>
                <div className="pl-[14px]">
                  <tr className="grid grid-cols-2 border-light border-b py-4">
                    <td className="text-silver text-xs lg:text-sm font-normal">
                      Service Warranty
                    </td>
                    <td className="text-black-dim text-xs lg:text-sm font-normal ">
                      {serviceWarranty} {serviceWarrantyDurationType}
                    </td>
                  </tr>
                  {sellWarrantyDurationType && (
                    <tr className="grid grid-cols-2 border-light border-b py-4">
                      <td className="text-silver text-xs lg:text-sm font-normal">
                        Warranty Duration
                      </td>
                      <td className="text-black-dim text-xs lg:text-sm font-normal">
                        {sellWarranty} {sellWarrantyDurationType}
                      </td>
                    </tr>
                  )}
                </div>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Description;
