"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import InputField from "@/components/molecules/InputField/InputField";
import ProductSelectField from "@/components/molecules/ProductSelectField/ProductSelectField";
import Button from "@/components/ui/button";
import { addProduct } from "@/store/services/products";
import { getNestedError } from "@/utils/getNestedError";
import { errorToast, successToast } from "@/utils/toast";
import {
  AddProductForm,
  AddProductSchema
} from "@/validations/add-product/add-product";

import { SectionTittle } from "./components/SectionTittle";
import { SizeInputsFields } from "./components/SizeInputsFields";
import {
  categoryOptions,
  defaultItem,
  inputClassName,
  labelClassName,
  tagsOptions
} from "./constants";

const AddProduct = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    watch,
    control,
    setValue,
    reset,
    formState: { errors, isSubmitting, isValid }
  } = useForm<AddProductForm>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(AddProductSchema),
    defaultValues: {
      items: [defaultItem]
    }
  });

  const items = watch("items");

  const addItem = () => {
    const areAllFieldsFilled = items.every(
      (item) =>
        !!item.code &&
        !!item.color &&
        !!item.size.width &&
        !!item.size.height &&
        !!item.size.length
    );

    const doesErrorExist = items.some(
      (_, index) =>
        getNestedError(errors, `items.${index}.color`) ||
        getNestedError(errors, `items.${index}.code`) ||
        getNestedError(errors, `items.${index}.size.width`) ||
        getNestedError(errors, `items.${index}.size.height`) ||
        getNestedError(errors, `items.${index}.size.length`)
    );

    if (doesErrorExist || !areAllFieldsFilled) {
      errorToast(
        "Preencha todos os campos obrigatórios corretamente antes de adicionar outro item"
      );
      return;
    }
    setValue("items", [...items, defaultItem]);
  };

  const handleForm = async (data: AddProductForm) => {
    const { error } = await addProduct(data);
    if (error) {
      errorToast("Erro ao criar produto!");
    } else {
      successToast("Produto criado!");
      reset();
    }
  };

  return (
    <form
      className="space-y-6 mr-12 lg:mr-8 w-full"
      onSubmit={handleSubmit(handleForm)}
    >
      <h2 className="text-[#4E5D66] text-[28px] font-medium">
        {" "}
        Adicionar produto{" "}
      </h2>

      <div className="bg-white rounded-[20px] px-6 py-8 space-y-16">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-8 gap-x-16">
          <div className="space-y-4">
            <SectionTittle>Detalhes</SectionTittle>

            <InputField
              layout="horizontal"
              labelClassName={labelClassName}
              className={inputClassName}
              register={register}
              formErrors={errors}
              label={"Nome:"}
              name={"name"}
            />
            <InputField
              layout="horizontal"
              labelClassName={labelClassName}
              className={inputClassName}
              register={register}
              formErrors={errors}
              label="ID:"
              name="id"
            />
            <InputField
              layout="horizontal"
              labelClassName={labelClassName}
              className={inputClassName}
              register={register}
              formErrors={errors}
              label="Código:"
              name="code"
            />
            <InputField
              layout="horizontal"
              labelClassName={labelClassName}
              className={inputClassName}
              register={register}
              formErrors={errors}
              label="Seller:"
              name="seller"
            />
            <InputField
              layout="horizontal"
              labelClassName={labelClassName}
              className={inputClassName}
              register={register}
              formErrors={errors}
              label="Prazo de entrega:"
              mask="__/__/____"
              name="deliveryDate"
            />
          </div>
          <div>
            <h3 className="text-base-black text-[20px] mb-6">Categorias</h3>
            <ProductSelectField
              control={control}
              formErrors={errors}
              name="categories"
              options={categoryOptions}
            />
          </div>
          <div>
            <h3 className="text-base-black text-[20px] mb-6">Tags</h3>
            <ProductSelectField
              control={control}
              formErrors={errors}
              name="tags"
              options={tagsOptions}
            />
          </div>
        </div>

        <div className="space-y-4">
          <SectionTittle>Especificações</SectionTittle>
          <InputField
            layout="horizontal"
            labelClassName={labelClassName}
            className={inputClassName}
            register={register}
            formErrors={errors}
            label="Subtítulo:"
            name="specificationsSubtitle"
          />
          <InputField
            layout="horizontal"
            labelClassName={labelClassName}
            className={inputClassName}
            register={register}
            formErrors={errors}
            label="Informações:"
            name="specificationsInfo"
          />
          <InputField
            layout="horizontal"
            labelClassName={labelClassName}
            className={inputClassName}
            register={register}
            formErrors={errors}
            label="Limpeza e cuidados:"
            name="specificationsCares"
          />
        </div>
      </div>

      <div className="bg-white rounded-[20px] px-6 py-8 space-y-8">
        <div className="flex justify-between items-center">
          <SectionTittle className="mb-0">Itens</SectionTittle>
          <button
            type="button"
            className="flex items-center space-x-2"
            onClick={addItem}
          >
            <Plus size={15} />
            <span>Adicionar</span>
          </button>
        </div>

        {items.map((item, index) => (
          <div key={index} className="space-y-8">
            <div className="flex items-center">
              <span className="text-pure-black">
                Item{" "}
                {index.toString().length === 1 ? "0" + (index + 1) : index + 1}
              </span>
              {index !== 0 && (
                <Trash2
                  size={15}
                  className=" ml-2 cursor-pointer"
                  onClick={() =>
                    setValue(
                      "items",
                      items.filter((_, ind) => index !== ind)
                    )
                  }
                />
              )}
              <div className="flex-1 h-px bg-[#333333]/[0.4] ml-3"></div>
            </div>

            <div className="space-y-4 w-[500px]">
              <InputField
                formErrors={errors}
                register={register}
                labelClassName={labelClassName}
                className={inputClassName}
                layout="horizontal"
                label="Código:"
                name={`items.${index}.code`}
              />
              <InputField
                formErrors={errors}
                register={register}
                labelClassName={labelClassName}
                className={inputClassName}
                label="Cor:"
                layout="horizontal"
                name={`items.${index}.color`}
              />
              <SizeInputsFields
                formErrors={errors}
                register={register}
                index={index}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="justify-end flex  gap-2 items-center ">
        <Button
          variant={"tertiary"}
          type="button"
          onClick={() => router.push("/home")}
          disabled={isSubmitting}
        >
          Cancelar
        </Button>
        <Button variant={"primary"} disabled={!isValid} loading={isSubmitting}>
          Criar
        </Button>
      </div>
    </form>
  );
};

export default AddProduct;
