import { useState } from "react";

import { InputMask } from "@react-input/mask";
import { Eye, EyeOff } from "lucide-react"; // Importando os ícones
import { FieldValues } from "react-hook-form";

import { cn } from "@/utils/shadcn/utils";

import { InputProps } from "./types";

const Input = <T extends FieldValues>({
  mask,
  register,
  name,
  type,
  className,
  ...props
}: InputProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === "password" && showPassword ? "text" : type;

  const inputProps = {
    className: cn(
      "bg-[#F3F5F6] px-4 w-full h-[60px] rounded-[8px] text-[#333333] placeholder:text-[#606060] text-base outline-none pr-10",
      className
    ),
    ...props,
    type: inputType,
    ...(register && name && register(name))
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative w-full">
      {mask ? (
        <InputMask {...inputProps} mask={mask} replacement={{ _: /\d/ }} />
      ) : (
        <input {...inputProps} />
      )}
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-4 flex items-center text-gray-600"
        >
          {showPassword ? <Eye /> : <EyeOff />}
        </button>
      )}
    </div>
  );
};

export default Input;
