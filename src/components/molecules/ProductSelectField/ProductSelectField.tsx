"use client";

import { useState } from "react";

import { ChevronDown } from "lucide-react";
import { Controller, FieldValues } from "react-hook-form";

import FormErrorLabel from "@/components/atoms/FormErrorLabel/FormErrorLabel";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { getNestedError } from "@/utils/getNestedError";
import { cn } from "@/utils/shadcn/utils";

import { ProductSelectProps } from "./types";

const ProductSelectField = <T extends FieldValues>({
  name,
  control,
  formErrors,
  options,
  className
}: ProductSelectProps<T>) => {
  const errorMessage = getNestedError(formErrors, name);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-2">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Popover open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
            <PopoverTrigger asChild>
              <button
                className={cn(
                  "bg-[#F3F5F6] px-4 w-full flex items-center justify-between text-start h-[37px] rounded-[8px] text-[#333333] text-base outline-none",
                  className
                )}
              >
                <span>
                  {field.value && field.value.length > 0
                    ? field.value.map((item: string) => item).join(", ")
                    : ""}
                </span>
                <ChevronDown
                  size={15}
                  className={cn(
                    "transition-transform",
                    isOpen ? "rotate-180" : "rotate-0"
                  )}
                />{" "}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-[20rem] max-h-[30rem] overflow-y-auto p-4 space-y-4  ">
              {options.map((option) => (
                <div key={option.label} className="space-y-2">
                  <p className="font-semibold text-sm text-[#606060]">
                    {option.label}
                  </p>
                  {option.items.map((item) => (
                    <div key={item} className="flex items-center space-x-2">
                      <Checkbox
                        id={item}
                        checked={field.value?.includes(item)}
                        onCheckedChange={(checked) => {
                          const currentValue = field.value || [];
                          const newValue = checked
                            ? [...currentValue, item]
                            : currentValue.filter(
                                (selectedItem: string) => selectedItem !== item
                              );
                          field.onChange(newValue);
                        }}
                      />
                      <label htmlFor={item} className="text-sm text-[#333333]">
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              ))}
            </PopoverContent>
          </Popover>
        )}
      />

      {errorMessage && <FormErrorLabel>{errorMessage}</FormErrorLabel>}
    </div>
  );
};

export default ProductSelectField;
