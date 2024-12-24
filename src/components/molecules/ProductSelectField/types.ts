import { Control, FieldErrors, FieldValues, Path } from "react-hook-form";

export interface ProductSelectProps<T extends FieldValues> {
  label?: string;
  control: Control<T>;
  formErrors: FieldErrors;
  className?: string;
  placeholder?: string;
  name: Path<T>;
  options: {
    label: string;
    items: string[];
  }[];
}
