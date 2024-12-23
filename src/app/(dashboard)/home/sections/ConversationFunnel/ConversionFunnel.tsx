"use client";

import MainCard from "@/components/molecules/MainCard/MainCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext
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

      <Carousel className="mr-16">
        <CarouselContent>
          {data &&
            (Object.keys(data) as ConversionKey[])?.map((key, index) => (
              <CarouselItem
                className="basis-[19%]"
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
        <CarouselNext></CarouselNext>
      </Carousel>
    </div>
  );
};

export default ConversationFunnel;
