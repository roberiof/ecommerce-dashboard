import React from "react";

import ConversationFunnel from "./sections/ConversationFunnel/ConversionFunnel";
import ProductsTable from "./sections/ProductsTable/ProductsTable";
import SellDashboards from "./sections/SellDashboards/SellDashboards";
import Start from "./sections/Start/Start";
import UserProfile from "./sections/UserProfile/UserProfile";

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
