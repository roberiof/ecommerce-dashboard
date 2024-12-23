"use client";

import { monthNames } from "@/common/constants/months";
import MainCard from "@/components/molecules/MainCard/MainCard";
import { CarouselItem } from "@/components/ui/carousel";
import useGenericFetch from "@/hooks/queries/useGenericFetch";
import { formatCurrency } from "@/utils/formatCurrency";

const LastMonthMediumTicket = () => {
  const date = new Date().getMonth();
  const monthName = monthNames[date - 1];
  const { data, isPending, isError } = useGenericFetch<{
    value: number;
    growth: number;
  }>("/avg-ticket-month");

  return (
    <CarouselItem className="basis-[19%]" key={"last-month-ticket"}>
      <MainCard
        error={isError}
        loading={isPending}
        type={data && data?.growth > 0 ? "positive" : "negative"}
        title="Ticket médio mensal"
        badge={
          data && data?.growth > 0
            ? "+" + data?.growth + "%"
            : data?.growth + "%"
        }
        badgeDescription={`em relação a ${monthName}`}
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

export default LastMonthMediumTicket;
