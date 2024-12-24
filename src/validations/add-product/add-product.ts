import { z } from "zod";

import date from "@/common/validation/date";
import number from "@/common/validation/number";

export const sizeSchema = z.object({
  width: number.min(0, "A largura deve ser um número positivo"),
  height: number.min(0, "A altura deve ser um número positivo"),
  length: number.min(0, "O comprimento deve ser um número positivo")
});

export const itemSchema = z.object({
  code: number,
  color: z.string().nonempty("A cor é obrigatória"),
  size: sizeSchema
});

export const AddProductSchema = z.object({
  name: z.string().min(3, "O nome é obrigatório"),
  code: number,
  seller: z.string().nonempty("O vendedor é obrigatório"),
  deliveryDate: date,
  specificationsSubtitle: z
    .string()
    .nonempty("O subtítulo das especificações é obrigatório"),
  specificationsInfo: z
    .string()
    .nonempty("As informações das especificações são obrigatórias"),
  specificationsCares: z
    .string()
    .nonempty("Os cuidados das especificações são obrigatórios"),
  categories: z
    .array(z.string().nonempty("A categoria não pode estar vazia"), {
      required_error: "A categoria não pode estar vazia"
    })
    .min(1, "É necessário pelo menos uma categoria"),
  tags: z
    .array(
      z
        .string({ required_error: "A tag não pode estar vazia" })
        .nonempty("A tag não pode estar vazia"),
      {
        required_error: "A tag não pode estar vazia"
      }
    )
    .min(1, "É necessário pelo menos uma tag"),
  id: z.string().nonempty("O ID é obrigatório"),
  items: z.array(itemSchema).min(1, "É necessário pelo menos um item")
});

export type AddProductForm = z.infer<typeof AddProductSchema>;
