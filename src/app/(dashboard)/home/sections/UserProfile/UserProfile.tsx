"use client";

import { ReactNode } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext
} from "@/components/ui/carousel";
import useGenericFetch from "@/hooks/queries/useGenericFetch";

import TransactionsByAge from "./components/AgeTransactions";
import ClientType from "./components/ClientType";
import SessionsByGender from "./components/SessionsByGender";
import { UserProfileData } from "./types";

const UserProfile = () => {
  const { data, isPending, isError } =
    useGenericFetch<UserProfileData>("/users-resume");

  if (isPending || isError || !data) {
    return null;
  }

  const items: ReactNode[] = [
    <TransactionsByAge data={data["transactions-per-age"]} key={0} />,
    <SessionsByGender data={data["sessions-per-sex"]} key={1} />,
    <ClientType data={data["transactions-per-client-type"]} key={2} />
  ];

  return (
    <div className="space-y-6">
      <h2 className="ml-6 text-[24px] text-primary font-bold">
        Perfil do Usuário
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

export default UserProfile;
