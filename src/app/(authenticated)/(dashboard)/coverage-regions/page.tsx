"use client";

import dynamic from "next/dynamic";

const MapComponent = dynamic(
  () => import("./components/Map/map").then((mod) => mod.MapComponent),
  {
    ssr: false
  }
);
const CoverageRegions = () => {
  return (
    <div className="w-full space-y-8 mr-12 2xl:mr-0">
      <h1 className="text-[#4E5D66] text-[28px] font-medium">
        Regiões de Cobertura
      </h1>
      <MapComponent />
    </div>
  );
};

export default CoverageRegions;
