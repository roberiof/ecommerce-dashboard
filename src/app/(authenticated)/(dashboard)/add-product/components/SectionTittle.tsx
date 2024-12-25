import { ReactNode } from "react";

import { cn } from "@/utils/shadcn/utils";

export const SectionTittle = ({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) => (
  <h3 className={cn("mb-6 text-base-black text-[20px]", className)}>
    {children}
  </h3>
);
