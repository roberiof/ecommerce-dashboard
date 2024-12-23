"use client";
import { ReactNode } from "react";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import Buy from "@/components/icons/Buy";
import Card from "@/components/icons/Card";
import Cat from "@/components/icons/Cat";
import Gear from "@/components/icons/Gear";
import Home from "@/components/icons/Home";
import Log from "@/components/icons/Log";
import Person from "@/components/icons/Person";
import Service from "@/components/icons/Services";
import Text from "@/components/icons/Text";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext
} from "@/components/ui/carousel";
import { cn } from "@/utils/shadcn/utils";

const SidebarItem = ({
  active,
  icon,
  onClick
}: {
  active: boolean;
  onClick: () => void;
  icon: ({ color }: { color: string }) => ReactNode;
}) => {
  return (
    <div className="flex justify-center">
      <div
        onClick={onClick}
        className={cn(
          "rounded-[6px] w-[50px] h-[50px] justify-center flex items-center cursor-pointer",
          active ? "bg-[#5A4CA7]" : "bg-transparent"
        )}
      >
        {icon({ color: active ? "white" : "#4E5D66" })}
      </div>
    </div>
  );
};

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const items = [
    {
      icon: ({ color }: { color: string }) => <Home color={color} />,
      url: "/home"
    },
    {
      icon: ({ color }: { color: string }) => <Cat color={color} />,
      url: "#category"
    },
    {
      icon: ({ color }: { color: string }) => <Log color={color} />,
      url: "#log"
    },
    {
      icon: ({ color }: { color: string }) => <Buy color={color} />,
      url: "#buy"
    },
    {
      icon: ({ color }: { color: string }) => <Service color={color} />,
      url: "#service"
    },
    {
      icon: ({ color }: { color: string }) => <Card color={color} />,
      url: "#card"
    },
    {
      icon: ({ color }: { color: string }) => <Text color={color} />,
      url: "#text"
    },
    {
      icon: ({ color }: { color: string }) => <Person color={color} />,
      url: "#person"
    },
    {
      icon: ({ color }: { color: string }) => <Gear color={color} />,
      url: "#gear"
    }
  ];

  return (
    <nav className="fixed top-[110px] py-4 flex flex-col items-center left-8 w-[88px] h-[80vh] rounded-[8px] shadow-xl bg-white">
      <Image src="/menu.svg" width={40} height={40} alt="Menu" />

      <div className="w-full h-[2px] bg-base-black/10 shrink-0 my-4" />

      <Carousel orientation="vertical">
        <CarouselContent className="h-[63vh]">
          {items.map((item, index) => (
            <CarouselItem className="basis-1/7" key={index}>
              <SidebarItem
                active={item.url === pathname}
                icon={item.icon}
                onClick={() => router.push(item.url)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </nav>
  );
};

export default Sidebar;
