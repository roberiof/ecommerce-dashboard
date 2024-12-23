"use client";
import { ReactNode } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem
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
    <div className="space-y-6">
      <h2 className="ml-6 text-[24px] text-primary font-bold">
        Dashboard de Vendas
      </h2>

      <Carousel>
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem className="basis-[40%] select-none" key={index}>
              {item}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SellDashboards;
