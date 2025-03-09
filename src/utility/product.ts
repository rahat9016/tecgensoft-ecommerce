/* eslint-disable @typescript-eslint/no-explicit-any */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function groupByAttributeName(attributes: any | undefined) {
  if (!attributes) return null;
  const groupedData = attributes?.reduce(
    (acc: { [x: string]: any[] }, item: { attribute: { name: any } }) => {
      const attributeName = item?.attribute?.name;

      if (!acc[attributeName]) {
        acc[attributeName] = [];
      }

      acc[attributeName].push(item);

      return acc;
    },
    {}
  );
  const resultArray = Object?.entries(groupedData).map(([key, value]) => ({
    attribute_name: key,
    items: value,
  }));
  return resultArray;
}
interface ISpecification {
  group: string;
  name: string;
  value: string;
}
export const groupBySpecification = (specification: ISpecification[]) => {
  if (!specification) return null;
  if (specification.length === 0) return null;
  const groupedData = specification?.reduce(
    (
      acc: { [x: string]: any[] },
      item: { group: string; name: string; value: string }
    ) => {
      const groupName = item.group;
      if (!acc[groupName]) {
        acc[groupName] = [];
      }
      acc[groupName].push(item);
      return acc;
    },
    {}
  );
  const resultArray = Object?.entries(groupedData).map(([key, value]) => ({
    groupName: key,
    items: value,
  }));
  return resultArray;
};
// export function additionOfAttribute(attributePrice: any[]) {
//   const additionOfAttribute = attributePrice.reduce((accumulator, currentValue) => accumulator + currentValue?.price_increment, 0);
//   return additionOfAttribute;
// }

export function additionOfAttribute(attributePrice: any[]) {
  const additionOfAttribute = attributePrice.reduce(
    (accumulator, currentValue) => {
      // Check if currentValue and price_increment exist before adding
      if (currentValue && currentValue.price_increment !== undefined) {
        return accumulator + currentValue.price_increment;
      }
      // If currentValue or price_increment is undefined or null, return accumulator unchanged
      return accumulator;
    },
    0
  );
  return additionOfAttribute;
}
