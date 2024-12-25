"use client";
import { ReactNode } from "react";

import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent } from "@/components/ui/carousel";

import Last24HoursTicket from "./components/Last24HoursTicket";
import LastMonthMediumTicket from "./components/LastMonthMediumTicket";
import OrdersMonth from "./components/OrdersMonth";
import ProductsMaintaince from "./components/ProductsMaintaince";
import ProductsMonth from "./components/ProductsMonth";

import "./styles.css";

const Start = () => {
  const items: ReactNode[] = [
    <Last24HoursTicket key={0} />,
    <LastMonthMediumTicket key={1} />,
    <ProductsMaintaince key={2} />,
    <OrdersMonth key={3} />,
    <ProductsMonth key={4} />
  ];

  return (
    <div className="space-y-6">
      <h2 className="ml-6 text-[#4E5D66] text-[28px] font-bold"> Início</h2>

      <Carousel
        opts={{
          loop: true
        }}
        plugins={[
          Autoplay({
            delay: 3000
          })
        ]}
      >
        <CarouselContent>{items.map((item) => item)}</CarouselContent>
      </Carousel>
    </div>
  );
};

export default Start;
