import { FieldErrors, FieldValues } from "react-hook-form";

import FormErrorLabel from "@atoms/FormErrorLabel/FormErrorLabel";
import Input from "@atoms/Input/Input";
import Label from "@atoms/Label/Label";
import { cn } from "@utils/shadcn/utils";

import { InputFieldProps } from "./types";

function getNestedError<T extends FieldValues>(
  errors: FieldErrors<T>,
  path: string
): string | undefined {
  const keys = path.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return keys.reduce((obj, key) => obj?.[key], errors as any)?.message;
}

const InputField = <T extends FieldValues>({
  register,
  name,
  className,
  labelClassName,
  mask,
  formErrors,
  label,
  classNameDiv,
  ...props
}: InputFieldProps<T>) => {
  const errorMessage = getNestedError<T>(formErrors, name);

  return (
    <div className={cn("flex w-full flex-col gap-1", classNameDiv)}>
      {label && <Label className={labelClassName}>{label}</Label>}
      <Input
        {...props}
        className={className}
        name={name}
        register={register}
        mask={mask}
      />

      {errorMessage && (
        <FormErrorLabel>{errorMessage.toString()}</FormErrorLabel>
      )}
    </div>
  );
};

export default InputField;
