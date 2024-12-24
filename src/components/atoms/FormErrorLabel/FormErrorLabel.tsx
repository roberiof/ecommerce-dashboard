import { cn } from "@/utils/shadcn/utils";

import { FormErrorProps } from "./types";

const FormErrorLabel = ({ children, className }: FormErrorProps) => {
  return <p className={cn("text-xs text-red", className)}>{children}</p>;
};

export default FormErrorLabel;
