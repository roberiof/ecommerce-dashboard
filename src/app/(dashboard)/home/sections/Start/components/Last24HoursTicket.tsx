"use client";

import MainCard from "@/components/molecules/MainCard/MainCard";
import { CarouselItem } from "@/components/ui/carousel";
import useGenericFetch from "@/hooks/queries/useGenericFetch";
import { formatCurrency } from "@/utils/formatCurrency";

const Last24HoursTicket = () => {
  const { data, isError, isPending } = useGenericFetch<{
    growth: number;
    value: number;
  }>("/avg-ticket-day");

  return (
    <CarouselItem className="basis-[19%]" key={"last-24h-ticket"}>
      <MainCard
        error={isError}
        loading={isPending}
        type={data && data?.growth > 0 ? "positive" : "negative"}
        title="Ticket médio últimas 24h"
        badge={
          data && data?.growth > 0
            ? "+" + data.growth + "%"
            : data?.growth + "%"
        }
        badgeDescription="em relação a ontem"
        label={
          <p className="text-[#4E5D66] space-x-2">
            <span className="font-medium">R$</span>
            <span className="text-[20px] font-bold">
              {data && data.value ? formatCurrency(data.value) : ""}
            </span>
          </p>
        }
      />
    </CarouselItem>
  );
};

export default Last24HoursTicket;
