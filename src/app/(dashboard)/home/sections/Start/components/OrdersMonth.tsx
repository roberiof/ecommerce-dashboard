import { monthNames } from "@/common/constants/months";
import MainCard from "@/components/molecules/MainCard/MainCard";
import { CarouselItem } from "@/components/ui/carousel";
import useGenericFetch from "@/hooks/queries/useGenericFetch";

const OrdersMonth = () => {
  const date = new Date().getMonth();
  const monthName = monthNames[date - 1];
  const { data, isPending, isError } = useGenericFetch<{
    value: number;
    growth: number;
  }>("/orders-month");

  return (
    <CarouselItem className="basis-[19%]" key={"orders-month"}>
      <MainCard
        error={isError}
        loading={isPending}
        type={data && data?.growth > 0 ? "positive" : "negative"}
        title="Pedidos realizados no mês"
        badge={
          data && data?.growth > 0
            ? "+" + data?.growth + "%"
            : data?.growth + "%"
        }
        badgeDescription={`em relação a ${monthName}`}
        label={
          <p className="text-[#4E5D66] space-x-2">
            <span className="text-[20px] font-bold">{data?.value}</span>
            <span className="font-medium">pedidos</span>
          </p>
        }
      />
    </CarouselItem>
  );
};

export default OrdersMonth;
