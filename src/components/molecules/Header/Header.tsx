"use client";
import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const name = "Eduardo";
  const firstLetter = name.charAt(0).toUpperCase();

  return (
    <header>
      <div className="bg-white w-full fixed top-0  z-20 flex items-center justify-between px-20 py-4 shadow-lg">
        <Image
          src={"/logo.svg"}
          width={69}
          height={59}
          alt="Logo"
          onClick={() => router.push("/")}
        />
        <div className="flex items-center space-x-4 pl-4">
          <p>{name}</p>
          <div className="rounded-full bg-[#5A4CA7]/50 w-[40px] h-[40px] flex items-center justify-center">
            <p className="text-[22px] text-[#4E5D66]">{firstLetter}</p>
          </div>
        </div>
      </div>
      <div className="h-[92px]" />
    </header>
  );
};

export default Header;
