import React from "react";

import SellDashboards from "./sections/SellDashboards/SellDashboards";
import Start from "./sections/Start/Start";

const Home = () => {
  return (
    <div className="space-y-8 w-full">
      <Start />
      <SellDashboards />
    </div>
  );
};

export default Home;
