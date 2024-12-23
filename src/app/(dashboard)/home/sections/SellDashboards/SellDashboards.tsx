"use client";
import { ReactNode } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext
} from "@/components/ui/carousel";

import OrdersByCategory from "./components/OrdersByCategory";
import OrdersByMonth from "./components/OrdersByMonth";
import ProfitExpectation from "./components/ProfitExpectation";
import RealizedCanceledOrders from "./components/RealizedCanceledOrders";

const SellDashboards = () => {
  const items: ReactNode[] = [
    <OrdersByMonth key={0} />,
    <ProfitExpectation key={3} />,
    <RealizedCanceledOrders key={2} />,
    <OrdersByCategory key={1} />
  ];

  return (
    <div className="space-y-2">
      <h2 className="text-[#4E5D66] text-[28px] font-bold">
        Dashboard de Vendas
      </h2>

      <Carousel className="mr-16">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem className="basis-[40%] select-none" key={index}>
              {item}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext></CarouselNext>
      </Carousel>
    </div>
  );
};

export default SellDashboards;
