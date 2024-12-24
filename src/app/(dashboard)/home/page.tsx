"use client";
import React from "react";

import dynamic from "next/dynamic";

import ConversationFunnel from "./sections/ConversationFunnel/ConversionFunnel";
import ProductsTable from "./sections/ProductsTable/ProductsTable";
import Start from "./sections/Start/Start";

const SellDashboards = dynamic(
  () =>
    import("./sections/SellDashboards/SellDashboards").then(
      (mod) => mod.default
    ),
  {
    ssr: false
  }
);

const UserProfile = dynamic(
  () => import("./sections/UserProfile/UserProfile").then((mod) => mod.default),
  {
    ssr: false
  }
);

const Home = () => {
  return (
    <div className="space-y-12 w-full">
      <Start />
      <SellDashboards />
      <ConversationFunnel />
      <UserProfile />
      <ProductsTable />
    </div>
  );
};

export default Home;
