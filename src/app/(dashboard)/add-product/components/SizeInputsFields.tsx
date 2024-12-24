import { FieldValues, Path } from "react-hook-form";

import FormErrorLabel from "@/components/atoms/FormErrorLabel/FormErrorLabel";
import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";
import { InputFieldProps } from "@/components/molecules/InputField/types";
import { getNestedError } from "@/utils/getNestedError";
import { cn } from "@/utils/shadcn/utils";

import { inputClassName, labelClassName } from "../constants";

interface SizeInputsFieldsProps<T extends FieldValues> {
  formErrors: InputFieldProps<T>["formErrors"];
  register: InputFieldProps<T>["register"];
  index: number;
}

export const SizeInputsFields = <T extends FieldValues>({
  formErrors,
  register,
  index
}: SizeInputsFieldsProps<T>) => {
  const errorLength = getNestedError(formErrors, `items.${index}.size.length`);
  const errorHeight = getNestedError(formErrors, `items.${index}.size.height`);
  const errorWidth = getNestedError(formErrors, `items.${index}.size.width`);
  const someErrorExist = errorLength || errorHeight || errorWidth;

  return (
    <div className="flex items-center gap-1">
      <Label className={cn(labelClassName, someErrorExist && "mb-2")}>
        Tamanho:
      </Label>
      <div className="flex flex-col gap-1">
        <div className="flex gap-4 items-end">
          {["width", "height", "length"].map((key, i) => (
            <span key={key} className="flex items-end gap-4">
              <div className="flex items-end gap-x-1 w-fit">
                <Input
                  register={register}
                  className={cn(inputClassName, "px-4 w-[80px]")}
                  type="number"
                  name={`items.${index}.size.${key}` as Path<T>}
                />
                <span>m</span>
              </div>
              {i < 2 && <span>x</span>}
            </span>
          ))}
        </div>
        {someErrorExist && (
          <FormErrorLabel>Adicione números válidos</FormErrorLabel>
        )}
      </div>
    </div>
  );
};
