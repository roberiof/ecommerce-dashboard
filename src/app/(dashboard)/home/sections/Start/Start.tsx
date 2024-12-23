"use client";
import { ReactNode } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselNext
} from "@/components/ui/carousel";

import Last24HoursTicket from "./components/Last24HoursTicket";
import LastMonthMediumTicket from "./components/LastMonthMediumTicket";
import OrdersMonth from "./components/OrdersMonth";
import ProductsMaintaince from "./components/ProductsMaintaince";
import ProductsMonth from "./components/ProductsMonth";

const Start = () => {
  const items: ReactNode[] = [
    <Last24HoursTicket key={0} />,
    <LastMonthMediumTicket key={1} />,
    <ProductsMaintaince key={2} />,
    <OrdersMonth key={3} />,
    <ProductsMonth key={4} />
  ];

  return (
    <div className="space-y-2">
      <h2 className="text-[#4E5D66] text-[28px] font-bold"> Início</h2>

      <Carousel className="mr-16">
        <CarouselContent>{items.map((item) => item)}</CarouselContent>
        <CarouselNext></CarouselNext>
      </Carousel>
    </div>
  );
};

export default Start;
