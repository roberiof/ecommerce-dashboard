"use client";

import { differenceInDays } from "date-fns";

import MainCard from "@/components/molecules/MainCard/MainCard";
import { CarouselItem } from "@/components/ui/carousel";
import useGenericFetch from "@/hooks/queries/useGenericFetch";

const ProductsMaintaince = () => {
  const { data, isLoading, isError } = useGenericFetch<
    {
      type: string;
      value: number;
      since: string; // Date string type
    }[]
  >("/alerts");

  return (
    <>
      {data?.map((item, index) => (
        <CarouselItem className="basis-[19%]" key={"products-maintence" + index}>
          <MainCard
            key={item.type}
            error={isError}
            loading={isLoading}
            type={"negative"}
            title={item?.type ?? ""}
            badge={
              item && item.since
                ? "há " +
                  (differenceInDays(new Date(), new Date(item?.since)) > 30
                    ? Math.floor(
                        differenceInDays(new Date(), new Date(item?.since)) / 30
                      ) + " meses"
                    : differenceInDays(new Date(), new Date(item?.since)) +
                      " dias")
                : ""
            }
            badgeDescription={
              item && item.type === "Acabando o estoque"
                ? "repor o quanto antes"
                : ""
            }
            label={
              <p className="text-[#4E5D66] space-x-2">
                <span className="text-[20px] font-bold">{item?.value}</span>
                <span className="font-medium">produtos</span>
              </p>
            }
          />
        </CarouselItem>
      ))}
    </>
  );
};

export default ProductsMaintaince;
