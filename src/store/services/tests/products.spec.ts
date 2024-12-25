import axios from "axios";
import { describe, it, expect, vi, Mock } from "vitest";

import { addProduct } from "@/store/services/products";
import { AddProductForm } from "@/validations/add-product/add-product";

vi.mock("axios", () => ({
  default: {
    post: vi.fn()
  }
}));

const mockProductData: AddProductForm = {
  name: "Product Name",
  code: "P123",
  id: "123",
  seller: "Seller A",
  deliveryDate: "1654957763",
  specificationsSubtitle: "Subtitle",
  specificationsInfo: "Info",
  specificationsCares: "Cares",
  categories: ["category1", "category2"],
  tags: ["tag1", "tag2"],
  items: [
    {
      color: "Red",
      size: {
        width: "10",
        height: "20",
        length: "30"
      },
      code: "123"
    }
  ]
};

describe("addProduct", () => {
  it("should return null error when product is added successfully", async () => {
    (axios.post as Mock).mockResolvedValueOnce({
      status: 201,
      data: {}
    });

    const result = await addProduct(mockProductData);

    expect(result.error).toBeNull();
  });

  it("should return error when API response status is not 201", async () => {
    (axios.post as Mock).mockResolvedValueOnce({
      status: 400,
      data: {}
    });

    const result = await addProduct(mockProductData);

    expect(result.error).toBe("Response status different from 201");
  });

  it("should return error when axios throws an error", async () => {
    (axios.post as Mock).mockRejectedValueOnce(new Error("Network Error"));

    const result = await addProduct(mockProductData);

    expect(result.error).toBe("Network Error");
  });
});
