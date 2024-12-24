"use client";

import { MapComponent } from "./components/Map/map";

const CoverageRegions = () => {
  return (
    <div className="w-full space-y-8">
      <h1 className="text-[#4E5D66] text-[28px] font-medium">
        Regiões de Cobertura
      </h1>
      <MapComponent />
    </div>
  );
};

export default CoverageRegions;
