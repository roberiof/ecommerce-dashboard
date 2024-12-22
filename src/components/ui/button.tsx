import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@utils/shadcn/utils";

import Loading from "../atoms/Loading/Loading";

const buttonVariants = cva(
  "flex items-center justify-center gap-2 whitespace-nowrap rounded-[8px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "text-base-black bg-[#C0D7E5]",
        secondary: "bg-primary text-white",
        tertiary: "text-base-black bg-[#4E5D66]"
      },
      size: {
        default: "w-[120px] h-[40px]"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      loading = false,
      disabled,
      variant = "primary",
      size,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const loadingVariant = {
      primary: "text-base-black",
      secondary: "text-white",
      tertiary: "text-base-black"
    } as const;

    if (loading) {
      return (
        <Comp
          className={buttonVariants({
            className,
            size,
            variant
          })}
          ref={ref}
          disabled={true}
        >
          <Loading
            className={cn("h-4 w-4", loadingVariant[variant ?? "primary"])}
          />
        </Comp>
      );
    }

    return (
      <Comp
        disabled={disabled}
        className={buttonVariants({ className, size, variant })}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
