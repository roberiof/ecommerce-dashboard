import { twMerge } from "tailwind-merge";

import { LabelProps } from "./types";

const Label = ({ children, name, className }: LabelProps) => {
  return (
    <label
      className={twMerge("ml-4 text-[18px] text-[#333333]", className)}
      htmlFor={name}
    >
      {children}
    </label>
  );
};

export default Label;
