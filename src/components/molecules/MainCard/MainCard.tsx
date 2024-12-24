import React, { ReactNode } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/utils/shadcn/utils";

interface MainCardProps {
  title: string;
  type: "positive" | "negative";
  badge: string;
  badgeDescription: string;
  label: ReactNode;
  loading: boolean;
  error: boolean;
}

const MainCard = ({
  title,
  type,
  badge,
  badgeDescription,
  label,
  loading,
  error
}: MainCardProps) => {
  return (
    <div className="rounded-[15px] select-none bg-white min-w-[240px] shadow-lg flex flex-col justify-center  space-y-3 p-4 h-[168px]">
      <h2 className="text-[#4E5D66] font-bold">{title}</h2>

      {error ? (
        <div className="text-red h-[70%]">Erro ao carregar</div>
      ) : (
        <>
          {loading ? (
            <>
              <Skeleton className="w-[37px] h-[20px] rounded-full" />
              <Skeleton className="w-[50px] h-[20px]" />
              <Skeleton className="w-[130px] h-[35px]" />
            </>
          ) : (
            <>
              <div
                className={cn(
                  "w-fit rounded-full font-bold shadow-md min-w-[60px] px-3 text-center",
                  type === "positive"
                    ? "text-green"
                    : type === "negative"
                      ? "text-red"
                      : "text-black"
                )}
              >
                {badge}
              </div>
              <div
                className={cn(
                  "text-sm h-[16px]",
                  type === "positive"
                    ? "text-green"
                    : type === "negative"
                      ? "text-red"
                      : "text-black"
                )}
              >
                {badgeDescription}
              </div>
              {label}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MainCard;
