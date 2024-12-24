"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Skeleton } from "@/components/ui/skeleton";
import useGenericFetch from "@/hooks/queries/useGenericFetch";

const Header = () => {
  const router = useRouter();
  const { data, isPending, isFetching, isError } = useGenericFetch<{
    username: string;
    name: string;
    avatar: string;
  }>("/me", {
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24
  });

  if (isError) {
    router.push("/login");
    return;
  }

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
        {isPending || isFetching ? (
          <Skeleton className="w-[1p00px] h-[30px]" />
        ) : (
          <div className="flex items-center space-x-4 pl-4">
            <p>{data.name}</p>
            <Image
              src={data.avatar}
              width={40}
              height={40}
              alt="Avatar"
              className="object-cover rounded-full flex-shrink-0 h-[40px]"
            />
          </div>
        )}
      </div>
      <div className="h-[92px]" />
    </header>
  );
};

export default Header;
