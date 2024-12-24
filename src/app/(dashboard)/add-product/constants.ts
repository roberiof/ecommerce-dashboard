import { ProductSelectProps } from "@/components/molecules/ProductSelectField/types";
import { AddProductForm } from "@/validations/add-product/add-product";

export const defaultItem = {
  code: "",
  color: "",
  size: {
    width: "",
    height: "",
    length: ""
  }
};
export const labelClassName = "ml-0 text-base w-[150px]  text-[#4E5D66]";
export const inputClassName = "h-[37px]";

export const categoryOptions: ProductSelectProps<AddProductForm>["options"] = [
  {
    label: "Categoria",
    items: ["Item 1.1", "Item 1.2", "Item 1.3"]
  },
  {
    label: "Categoria 2",
    items: ["Item 2.1", "Item 2.2", "Item 2.3"]
  }
];

export const tagsOptions: ProductSelectProps<AddProductForm>["options"] = [
  {
    label: "Tag",
    items: ["Item 1.1", "Item 1.2", "Item 1.3"]
  },
  {
    label: "Tag 2",
    items: ["Item 2.1", "Item 2.2", "Item 2.3"]
  }
];
