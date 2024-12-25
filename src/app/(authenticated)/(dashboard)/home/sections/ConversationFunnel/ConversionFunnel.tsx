"use client";

import Autoplay from "embla-carousel-autoplay";

import MainCard from "@/components/molecules/MainCard/MainCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import useGenericFetch from "@/hooks/queries/useGenericFetch";

import { getBadgeDescription, getLabelName } from "./constants";
import { ConversionResumeResponse, ConversionKey } from "./types";

const ConversationFunnel = () => {
  const { data } = useGenericFetch<ConversionResumeResponse>(
    "/conversions-resume"
  );

  const titleMapper: Record<ConversionKey, string> = {
    "total-per-day": "Sessões",
    "products-view-per-month": "Visualizações de produtos",
    "product-page-conversion-per-month": "Conversão pág. de produtos",
    "add-to-cart-per-month": "Adições ao carrinho",
    "checkout-freight-per-month": "Checkout - Frete",
    "checkout-email-per-month": "Checkout - Email",
    "checkout-payment-per-month": "Checkout - Pagamentos"
  };

  return (
    <div className="space-y-6">
      <h2 className="ml-6 text-primary text-[24px] font-bold">
        Funil de Conversão
      </h2>

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
        <CarouselContent>
          {data &&
            (Object.keys(data) as ConversionKey[])?.map((key, index) => (
              <CarouselItem
                className="basis-1/2 lg:basis-1/3 2xl:basis-[19%]"
                key={"products-maintence" + index}
              >
                <MainCard
                  key={key}
                  error={false}
                  loading={false}
                  type={data[key].growth > 0 ? "positive" : "negative"}
                  title={titleMapper[key]}
                  badge={
                    data[key].growth > 0
                      ? "+" + data[key].growth + "%"
                      : data[key]?.growth + "%"
                  }
                  badgeDescription={getBadgeDescription(key)}
                  label={
                    <p className="text-[#4E5D66] space-x-2">
                      <span className="text-[20px] font-bold">
                        {data[key]?.value}
                      </span>
                      <span className="font-medium">{getLabelName(key)}</span>
                    </p>
                  }
                />
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ConversationFunnel;
