import MainCard from "@/components/molecules/MainCard/MainCard";
import { CarouselItem } from "@/components/ui/carousel";
import useGenericFetch from "@/hooks/queries/useGenericFetch";
import { getLastMonth } from "@/utils/getLastMonth";

const OrdersMonth = () => {
  const monthName = getLastMonth();
  const { data, isPending, isError, isFetching } = useGenericFetch<{
    value: number;
    growth: number;
  }>("/orders-month");

  return (
    <CarouselItem className="carousel-item-start" key={"orders-month"}>
      <MainCard
        error={isError}
        loading={isPending || isFetching}
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
