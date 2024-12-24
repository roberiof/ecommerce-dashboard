import { FieldValues } from "react-hook-form";

import { getNestedError } from "@/utils/getNestedError";
import FormErrorLabel from "@atoms/FormErrorLabel/FormErrorLabel";
import Input from "@atoms/Input/Input";
import Label from "@atoms/Label/Label";
import { cn } from "@utils/shadcn/utils";

import { InputFieldProps } from "./types";

const InputField = <T extends FieldValues>({
  register,
  name,
  className,
  labelClassName,
  mask,
  formErrors,
  label,
  classNameDiv,
  layout = "vertical",
  ...props
}: InputFieldProps<T> & { layout?: "vertical" | "horizontal" }) => {
  const errorMessage = getNestedError(formErrors, name);

  const isHorizontal = layout === "horizontal";

  return (
    <div
      className={cn(
        "flex w-full flex-col gap-1",
        isHorizontal && "flex-row items-center gap-4",
        isHorizontal && errorMessage && "items-start ",
        classNameDiv
      )}
    >
      {label && (
        <Label
          className={cn(labelClassName, isHorizontal && errorMessage && "mt-1")}
        >
          {label}
        </Label>
      )}
      <div className={cn("flex flex-col gap-1", isHorizontal && "w-full")}>
        <Input
          {...props}
          className={className}
          name={name}
          register={register}
          mask={mask}
        />
        {errorMessage && <FormErrorLabel>{errorMessage}</FormErrorLabel>}
      </div>
    </div>
  );
};

export default InputField;
