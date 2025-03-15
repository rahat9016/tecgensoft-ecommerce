/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IBrand {
  id: number;
  name: string;
  slug: string;
}

export interface ICategory {
  id: number;
  name: string;
  slug: string;
  translation?: {
    bn_name?: string;
  };
}

export interface IBaseProduct {
  id: number;
  brand: IBrand;
  category: ICategory;
  sub_category: {
    id: number;
    name: string;
    slug: string;
    logo: string;
    translation?: {
      bn?: string;
    };
  };
  name: string;
  slug: string;
  description: string;
  is_active: boolean;
  is_featured: boolean;
}

export interface IAttribute {
  id: number;
  variant_id: number;
  attribute: {
    name: string;
    id: number;
  };
  attribute_value: {
    name: string;
    id: number;
  };
  price: number;
}

export interface IQuantityWisePrice {
  id: number;
  product_variant: number;
  country: number;
  min_quantity: number;
  max_quantity: number;
  selling_price: number;
  updated_selling_price?: number;
}

export interface ICountry {
  // id: number;
  // created_by: {
  //   first_name: string;
  //   last_name: string;
  //   username: string;
  //   email: string;
  //   contact_number: string;
  //   is_active: boolean;
  //   customer_type: string;
  // };
  // updated_by: null;
  // created_at: string;
  // updated_at: string;
  // customs_charge: number;
  // customs_charge_discount: {
  //   flat: number;
  //   percentage: number;
  // };
  // per_kg_charge: number;
  // shipment_charge: number;
  // product_variant: number;
  // country: {
  //   id: number;
  //   name: string;
  //   code: string;
  //   currency_code: string;
  //   flag: string;
  // };
  id: number;
  name: string;
  currency_code: string;
  code: string;
  flag: string;
}
export interface IStockAvailable {
  product_variant_id: number;
  country_id: number;
  stock_balance: number;
}
export interface IVariant {
  id: number;
  name: string | any;
  updated_selling_price?: number;
  deal_of_the_week?: {
    discount_type?: string;
    discount_value?: number;
    discount_amount?: number;
  };
  slug: string;
  stock_available: IStockAvailable[];
  images: string[];
  sku: string;
  selling_price: number;
  specifications: {
    name: string;
    group: string;
    value: string;
  }[];
  meta: {
    description: string;
    short_description: string;
  };
  online_discount?: {
    discount_value?: number;
    discount_type?: string;
  };
  service_warranty: number;
  service_warranty_duration_type: string;
  sell_warranty: number;
  sell_warranty_duration_type: string;
  rating: number;
  total_rating_count: number;
  rating_one: number;
  rating_two: number;
  rating_three: number;
  rating_four: number;
  rating_five: number;
  tax_value: number;
  average_rating: number;
  campaign_member?: {
    campaign?: {
      start_date?: string;
      end_date?: string;
    };
    discount_type: string;
    discount_value: number;
  } | null;
  is_upcoming: boolean;
  translation?: {
    bn_name?: string;
    bn_description?: string;
    bn_short_description?: string;
  };
  group: {
    id: number;
    name: string;
    slug: string;
    translation?: {
      bn?: string;
    };
  };
  store: {
    name: string;
    slug: string;
    logo: string;
  };
  attributes: IAttribute[];
  quantity_wise_price: IQuantityWisePrice[] | [];
  default_country: number;
  available_countries: ICountry[];
  minimum_order_quantity: number;
}

export interface IProductDetails {
  base_product: IBaseProduct | undefined;
  variant: IVariant | undefined;
}
// Product Interface
interface ITranslation {
  bn_name?: string;
  bn_description?: string;
  bn_short_description?: string;
}

interface IMeta {
  description: string;
  short_description: string;
}

interface IOnlineDiscount {
  online_discount_method?: string;
  online_discount_amount?: string;
}

interface IOfflineDiscount {}

export interface IProduct {
  id: number;
  images: string | string[];
  average_rating?: number;
  tax_value: number;
  updated_selling_price?: number;
  stock_available: number | null;
  name: string;
  translation?: ITranslation;
  slug: string;
  sku: string;
  selling_price: number;
  specifications: any;
  meta: IMeta;
  online_discount: IOnlineDiscount;
  offline_discount: IOfflineDiscount;
  service_warranty: number;
  service_warranty_duration_type: string | null; // Adjust type accordingly
  sell_warranty: number;
  sell_warranty_duration_type: string | null; // Adjust type accordingly
  minimum_stock_quantity: number;
  is_active: boolean;
  is_featured: boolean;
  is_top_sale: boolean;
  is_upcoming: boolean;
  is_new_arrival: boolean;
  show_on_landing_page: boolean;
  show_in_ecommerce: boolean;
  rating: number;
  ordering: number;
  weight: number;
  store: number;
  group: number;
  default_country: number;
}
export interface IShipmentCategoryList {
  id: number;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  title: string;
  description: string;
  charge: number | null;
  translation?: {
    title_bn?: string;
    description_bn?: string;
  };
  country: IAvailableCountry;
}
interface IAvailableCountry {
  id: number;
  name: string;
  currency_code: string;
  code: string;
  flag: string;
}
export interface ICountryWiseChanges {
  countryWiseCharge: ICountry | undefined;
  availableCountriesState: IAvailableCountry | undefined;
  shipmentListState: IShipmentCategoryList[] | undefined;
  qtyWisePrice?: IQuantityWisePrice | null;
  quantityWisePrice: IQuantityWisePrice[] | [];
  updatedPrice: number;
  sellingPrice: number;
  stock: number | undefined;
  availableCountryWiseStock?: {
    product_variant_id: number | null;
    country_id: number | null;
    stock_balance: number | null;
  };
}

interface IAttributeValue {
  name: string;
  id: number;
}

interface IGroupAttribute {
  name: string;
  id: number;
}

export interface IAttributeItem {
  id: number;
  variant_id: number;
  attribute: IGroupAttribute;
  attribute_value: IAttributeValue;
  price: number;
  price_difference: number;
}

export interface IAttributes {
  attribute_name: string;
  items: IAttributeItem[];
}

export interface IAttributeSelectItem {
  id: number;
  variant_id: number;
  attribute: {
    name: string;
    id: number;
  };
  attribute_value: {
    name: string;
    id: number;
  };
  price: number;
  price_difference: number;
}

interface IUser {
  first_name: string;
  last_name: string | null;
  username: string;
  email: string;
  contact_number: string;
  is_active: boolean;
  customer_type: string;
}

interface IProductVariant {
  id: number;
  sku: string;
  name: string;
  slug: string;
  service_warranty: number;
  sell_warranty: number;
  selling_price: number;
  translation?: Record<string, unknown>;
}

export interface IReview {
  id: number;
  created_by: IUser;
  updated_by: null | IUser;
  product_variant: IProductVariant;
  created_at: string;
  updated_at: string;
  review: string;
  rating: number;
  is_accepted: boolean;
  order: number;
  images: string[];
}

export interface IProductSpecifics {
  addProductToCart: (
    slug: string,
    id: number,
    name: string,
    img: string
  ) => void;
  increment: () => void;
  decrement: () => void;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  variant: IVariant | undefined;
  baseProduct: IBaseProduct | undefined;
  countryWiseChanges: ICountryWiseChanges;
  groupAttribute: any[] | null;
  handleAttributeSelect: (item: any) => void;
  selectedAttributes: any;
  paymentData: { percentage_amount: number };
  handleLinkClick: (value: string) => void;
  selectedField: any;
  handleClick: any;
  isStockAvailable: any;
  handleWishlist: any;
  // wishlist: boolean;
}
