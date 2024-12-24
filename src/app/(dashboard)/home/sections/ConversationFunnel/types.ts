export type ConversionKey =
  | "total-per-day"
  | "products-view-per-month"
  | "product-page-conversion-per-month"
  | "add-to-cart-per-month"
  | "checkout-email-per-month"
  | "checkout-payment-per-month"
  | "checkout-freight-per-month";

export type ConversionResumeResponse = Record<
  ConversionKey,
  {
    value: number;
    growth: number;
  }
>;
