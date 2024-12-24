import axios from "axios";

import { convertToUnixTimestamp } from "@/utils/convertToUnixTimestamp";
import { AddProductForm } from "@/validations/add-product/add-product";

import { baseURL } from "./axios";

const addProduct = async (data: AddProductForm) => {
  try {
    const response = await axios.post(`${baseURL}/create-product`, {
      body: {
        code: data.code,
        productId: data.id,
        seller: data.seller,
        deliveryDate: convertToUnixTimestamp(data.deliveryDate),
        specificationsSubtitle: data.specificationsSubtitle,
        specificationsInfo: data.specificationsInfo,
        specificationsCares: data.specificationsCares,
        categories: data.categories,
        tags: data.tags,
        id: data.id,
        items: data.items
      }
    });

    if (response.status === 201) {
      return { error: null };
    } else {
      throw new Error("Response status different from 201");
    }
  } catch (error) {
    console.error("Add product failed", error);

    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: "Unknown error" };
    }
  }
};

export { addProduct };
