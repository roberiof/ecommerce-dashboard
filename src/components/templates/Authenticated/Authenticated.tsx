"use client";

import { JSX, useEffect } from "react";

import { useRouter } from "next/navigation";

import LoadingComponent from "@/components/atoms/Loading/Loading";
import { cookieGet } from "@/store/services/cookies";
import { errorToast } from "@/utils/toast";

interface Props {
  children: JSX.Element;
}

function AuthenticatedOnlyFeature({ children }: Props): JSX.Element {
  const router = useRouter();

  const accessToken = cookieGet("accessToken");

  useEffect(() => {
    if (!accessToken) {
      router.push(`/login`);
      errorToast("Você precisa estar logado para acessar essa página.");
    }
  }, [accessToken, router]);

  if (!accessToken || typeof window === "undefined") {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <LoadingComponent />
      </div>
    );
  }

  return children;
}

export default function AuthenticatedOnlyFeatureWrapper({
  children
}: Props): JSX.Element {
  return <AuthenticatedOnlyFeature>{children}</AuthenticatedOnlyFeature>;
}
