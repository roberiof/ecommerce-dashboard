import { monthNames } from "@/common/constants/months";

import { ConversionKey } from "./types";

export const getBadgeDescription = (key: ConversionKey) => {
  if (key === "total-per-day") {
    return "em relação a ontem";
  } else {
    const date = new Date().getMonth();
    const monthName = monthNames[date - 1];

    return `em relação a ${monthName}`;
  }
};

export const getLabelName = (key: ConversionKey) => {
  const userNumber = [
    "checkout-freight-per-month",
    "checkout-email-per-month",
    "checkout-payment-per-month"
  ];
  const percentage = ["product-page-conversion-per-month"];
  const productNumber = [
    "total-per-day",
    "products-view-per-month",
    "add-to-cart-per-month"
  ];

  if (userNumber.includes(key)) {
    return "usuários";
  } else if (percentage.includes(key)) {
    return "%";
  } else if (productNumber.includes(key)) {
    return "produtos";
  }
};
