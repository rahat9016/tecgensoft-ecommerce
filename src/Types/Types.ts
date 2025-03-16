// ======== breadcrumb props ======

export interface IBreadcrumbs {
  label: string | undefined;
  url: string | undefined;
}

export interface IBreadcrumbsProps {
  breadcrumbs?: IBreadcrumbs[];
  currentLabel?: string | undefined;
}

import { IQuantityWisePrice } from "@/components/users/productDetails/types";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type IProductVariant = {
  id: number;
  name: string;
  category: {
    slug: string;
    name: string;
  };
  slug: string;
  images: string;
  selling_price: number;
  updated_selling_price: number;
  translation: {
    l: string;
  };
  rating: number;
  is_upcoming: boolean;
};

export type IOnlineDiscount = {
  online_discount_amount: number;
  online_discount_method: string;
};
export type IOfflineDiscount = {
  maximum_offline_discount_amount: number;
  offline_discount_method: string;
};

export type IProduct = {
  id: number;
  images: string;
  tax_value: number;
  updated_selling_price: number;
  stock_available: string;
  name: string;
  campaigns?: any;
  // product_variant?: any;
  selling_price: number;
  translation: object;
  slug: string;
  sku: string;
  specifications: object;
  meta: object;
  online_discount: IOnlineDiscount;
  offline_discount: IOfflineDiscount;
  service_warranty: number;
  service_warranty_duration_type: string;
  sell_warranty: number;
  sell_warranty_duration_type: string;
  minimum_stock_quantity: number;
  is_active: boolean;
  is_featured: boolean;
  is_top_sale: boolean;
  is_upcoming: boolean;
  is_new_arrival: boolean;
  show_on_landing_page: boolean;
  show_in_ecommerce: boolean;
  rating: number;
  ordering: string;
  product_variant?: IProductVariant | any;
  offer_price?: number;
  discount_type?: string;
  discount_value?: number;
  discount_amount?: number;
  created_by?: number;
  updated_by?: null;
  qty?: number;
  cid: number;
  qid: number;
  countryName: string;
  attributes: IAttributes[];
  average_rating: number;
};

export type ITranslation = {
  bn_name?: string;
  en_name?: string;
};
interface ICommonFields {
  logo?: string;
  name: string;
  slug: string;
}
export interface ISubCategoriesType extends ICommonFields {
  translation?: ITranslation | undefined;
}
export interface ICategoriesType extends ICommonFields {
  subcategories: ISubCategoriesType[] | [];
  translation: { Category: string };
  group: {
    name: string;
    slug: string;
    logo: string;
  };
}
export interface ICategoryGroupType extends ICommonFields {
  icon: string | undefined;
  categories: ICategoriesType[] | [];
  translation?: ITranslation;
}

export type IMetaData = {
  total: number;
  page_size: string;
  next: null;
  previous: null;
};

export type IResponse<T> = {
  success: boolean;
  meta_data?: IMetaData | undefined;
  message?: string | undefined;
  data?: T;
  details?: {
    data: T;
  };
};

export interface IAttributes {
  id: number;
  name: string;
  value: string;
  price_increment?: number;
}
export interface IStockAvailable {
  product_variant_id?: number;
  country_id?: number;
  stock_balance?: number | string | undefined;
  product_variant?: number | string | undefined;
  country?: number | string | undefined;
}

export interface ICookiesData {
  uniqueId: string;
  slug: string;
  id: number;
  img: string;
  store: {
    slug: string | undefined;
    name: string | undefined;
    logo: string | undefined;
  };
  qty?: number;
  qid: number;
  attr: IAttributes[] | [];
  sellingPrice: number;
  updatedPrice: number;
  discount: number;
  image?: string[] | [] | undefined;
  name: string;
  country: {
    cid: number;
    cn: string;
    code: string;
    countryFlagImg: string;
  };
  quantityWisePrice: IQuantityWisePrice[] | [];
  stockAvailable: IStockAvailable;
  discountOfProduct: any;
}

export interface IStoreWiseReview {
  id: number;
  rating: number;
  review: string;
  product_variant: {
    name: string;
    store: {
      name: string;
    };
  };
  created_by: {
    first_name: string;
  };
  created_at: string;
  images: string[];
}

export interface IStore {
  name: string;
  slug: string;
  bio: string;
  about: string;
  address: string;
  primary_phone: string;
  logo: string;
  policies: string;
  cover_photo: string;
  product_variants: IProduct[];
  product_reviews: IStoreWiseReview[];
  shown_in_website: boolean;
}

export interface IVerifyCode {
  num1: string;
  num2: string;
  num3: string;
  num4: string;
  num5: string;
}

export interface IRenderItem {
  isLoading: boolean;
  item?: IProduct | ICategoriesType | undefined;
}
export interface IQueryParameters {
  category__slug?: string;
  sub_category__slug?: string;
  brand__slug?: string;

  // Define other query parameters if needed
}

export interface IOrderItems {
  product_variant: number;
  quantity: number | undefined;
  country: number;
  product_variant_attributes: number[];
  quantity_wise_price_id: number;
}
// order types
export interface ICreateOrderData {
  receiver_name: string | undefined;
  address: string | undefined;
  receiver_contact: string | undefined;
  note: string | undefined;
  payment_type: string;
  delivery_method: string;
  promo: string | undefined;
  tax_amount: number;
  sell_order_items: IOrderItems[];
}
export interface StepProps {
  steps?: string[] | undefined;
  activeStep?: number;
}
export interface ICreateOrder {
  payment_type: string;
  invoice_no: string;
}
export interface IMakePayment {
  payment_gateway_url: string;
}
export interface ApplyCoupon {
  message: string;
  amount: number;
}
export interface ApplyCouponData {
  coupon: string | undefined;
  amount: number | string | undefined;
}

export interface IMakePaymentData {
  order: string | undefined;
  amount?: number | undefined;
}

export interface ICustomer {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  contact_number: string;
  is_active: boolean;
  customer_type: string;
}

interface ProductVariant {
  id: number;
  name: string;
  images: string[];
  weight: number;
  selling_price: number;
  store: {
    id: number;
    name: string;
  };
}

export interface IOrderItem {
  id: number;
  order: number;
  country: {
    id: number;
    name: string;
    currency_code: string;
    code: string;
    flag: string;
  };
  store: {
    name: string;
    logo: string;
  };
  product_variant: ProductVariant;
  product_variant_attributes: any[]; // You may define the type for this if known
  quantity: number;
  unit_price: number;
  tax_amount: number;
  discount_amount: number;
  discount_value: number;
  total_discount: number;
  discount_type: string;
  sub_total: number;
  meta: {
    variant: {
      id: number;
      sku: string;
      name: string;
      slug: string;
      rating: number;
      ordering: number;
      attributes: any[]; // You may define the type for this if known
      translation: any; // You may define the type for this if known
      sell_warranty: number;
      selling_price: number;
      online_discount: {
        online_discount_amount: number;
        online_discount_method: string;
      };
      service_warranty: number;
      sell_warranty_duration_type: string | null;
      service_warranty_duration_type: string | null;
    };
    per_kg_charge: number;
    customs_charge: number;
    shipment_charge: number;
    raw_selling_price: number;
    customs_charge_discount: {
      flat: number;
      percentage: number;
    };
  };
  total_weight_charge: number;
  campaign_member_discount: number;
  deal_of_the_week_discount: number;
  others_charge: number;
  final_customs_charge: number;
  selling_price: number;
  review_done: boolean;
  status: string;
  status_lite_history: {
    pending: string;
    confirmed: string;
    shipped: string;
    out_for_delivery: string;
    delivered: string;
    cancelled: string;
  };
}

interface IStatusNote {
  status: string;
  history_change_reason: string;
}

interface IPayment {
  id: number;
  updated_by: any; // Adjust the type if necessary
  created_at: string;
  updated_at: string;
  is_active: boolean;
  paid_amount: number;
  payment_method: string;
  online_payment: {
    status: string;
    meta: {
      reason: string;
      card_type: string;
      pay_status: string;
    };
  };
}

export interface ISingleOrderDetails {
  id: number;
  created_by: ICustomer;
  updated_by: any; // You may define the type for this if known
  customer: ICustomer;
  order_items: IOrderItem[];
  store: any; // You may define the type for this if known
  campaign: any; // You may define the type for this if known
  terms_conditions: any; // You may define the type for this if known
  courier: any; // You may define the type for this if known
  status_notes: IStatusNote[];
  created_at: string;
  updated_at: string;
  invoice_no: string;
  delivery_method: string;
  payment_status: string;
  status: string;
  payment_type: string;
  receiver_name: string;
  receiver_contact: string;
  note: string | null;
  address: string;
  customer_type: string;
  items_total_price_without_discount: number;
  items_total_discount: number;
  items_total_customs_charge_discount: number;
  items_total_price: number;
  total_shipping_cost: {
    total_shipping_cost: number;
  };
  order_total_shipment_charge: number;
  order_total_customs_charge: number;
  order_total_weight_charge: number;
  order_net_amount: number;
  order_net_amount_without_shipping: number;
  order_due_amount: number | undefined;
  order_paid_amount: number | undefined;
  promo_deductable_amount: number;
  order_total_discount_amount: number;
  total_refund: number;
  total_items_count: number;
  total_items_quantity_count: number;
  paid_amount: number;
  others_charge: number;
  total_tax_amount: number;
  invoice_file_url: string | null;
  advance_payment_percentage: number;
  advance_payment: number;
  is_advance_payment_done: boolean;
  payments: IPayment[];
  ship_to_info: {
    name: string;
    address: string;
  };
  bill_to_info: {
    name: string;
    address: string;
  };
}

export interface IOrderData {
  data: ISingleOrderDetails | undefined;
  itemId?: number;
}
export interface IOrderProduct {
  id: string;
  name: string;
  image: string;
  atributes: { size: string }[];
  by: string;
  offer?: string;
  price: number;
  discountedPrice: number;
  quantity: number;
}
export interface IOrder {
  id: number;
  status: string;
  created_at: string;
  order_items: object[];
  net_amount?: number;
  invoice_no: string;
  order_due_amount: number;
  order_net_amount: number;
  payment_type: string;
  // products: IOrderProduct[];
}

export interface IGetReview {
  id: number;
  created_by: {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    contact_number: string | null; // Assuming contact number can be null
    is_active: boolean;
    customer_type: string;
  };

  product_variant: {
    id: number;
    name: string;
    slug: string;
    service_warranty: number;
    selling_price: number;
    images: string;
    store: {
      name: string;
    };
  };
  created_at: string;
  updated_at: string;
  is_active: boolean;
  review: string;
  rating: number;
  images: string[];
  is_accepted: boolean;
  order: number;
}

export interface ICreateReview {
  order_item_id: number;
  rating: number;
  review: string;
  images: string[];
}
export interface IReview {
  url: string;
}

export interface IGlobalError {
  status: number;
  data: {
    message: string;
    code?: string;
    success?: boolean;
    details?: any;
    detail?: any;
  };
}

interface CustomErrorData {
  details?: {
    data?: {
      message?: string;
    };
  };
}

export const isFetchBaseQueryError = (
  error: any
): error is FetchBaseQueryError & { data: CustomErrorData } => {
  return (
    typeof error === "object" &&
    error !== null &&
    "data" in error &&
    typeof error.data === "object" &&
    error.data !== null &&
    "details" in error.data &&
    typeof error.data.details === "object" &&
    error.data.details !== null &&
    "data" in error.data.details &&
    typeof error.data.details.data === "object"
  );
};
