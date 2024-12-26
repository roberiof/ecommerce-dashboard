"use client";
import { useState } from "react";

import { ChevronDown, Plus, Minus } from "lucide-react";
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
  options,
  formErrors,
  className
}: ProductSelectProps<T>) => {
  const errorMessage = getNestedError(formErrors, name);
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

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
                <span className="truncate">
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
                />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-[20rem] max-h-[30rem] overflow-y-auto p-4 space-y-4 bg-[#FAFAFA] rounded-lg shadow-lg">
              {options.map((option, optionIndex) => (
                <div key={option.label} className="relative">
                  {optionIndex !== options.length - 1 && (
                    <div className="absolute left-[9px] top-[22px] w-px bg-[#E0E0E0] h-full" />
                  )}

                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => toggleCategory(option.label)}
                      className="flex items-center justify-center w-5 h-5 bg-[#F2994A] text-white rounded"
                    >
                      {expandedCategories.includes(option.label) ? (
                        <Minus size={12} />
                      ) : (
                        <Plus size={12} />
                      )}
                    </button>
                    <p className="text-[#4E5D66]">{option.label}</p>
                  </div>

                  {expandedCategories.includes(option.label) && (
                    <div className="pl-6">
                      <div className="space-y-2 relative">
                        <div className="absolute left-2 top-0 w-px z-10 bg-[#E0E0E0] h-full" />
                        {option.items.map((item) => (
                          <div
                            key={item}
                            className={cn(
                              "flex items-center space-x-2 relative z-20"
                            )}
                          >
                            <Checkbox
                              id={item}
                              className="bg-white"
                              checked={field.value?.includes(item)}
                              onCheckedChange={(checked) => {
                                const currentValue = field.value || [];
                                const newValue = checked
                                  ? [...currentValue, item]
                                  : currentValue.filter(
                                      (selectedItem: string) =>
                                        selectedItem !== item
                                    );
                                field.onChange(newValue);
                              }}
                            />
                            <label htmlFor={item} className="text-[#4E5D66]">
                              {item}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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
