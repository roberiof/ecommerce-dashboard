import React from "react";

import ConversationFunnel from "./sections/ConversationFunnel/ConversionFunnel";
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
    </div>
  );
};

export default Home;
