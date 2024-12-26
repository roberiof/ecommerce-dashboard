import { useRef, useState, useEffect } from "react";

import axios from "axios";
import L from "leaflet";

import useGenericFetch from "@/hooks/queries/useGenericFetch";

import "leaflet/dist/leaflet.css";

import { geoJSONUrl, generateModalHTML } from "./constants";

export const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [geoJsonData, setGeoJsonData] = useState<any | null>(null);

  const { data } = useGenericFetch<{ growth: number; value: number }>(
    "/orders-month"
  );

  useEffect(() => {
    const loadGeoJSON = async () => {
      const { data } = await axios.get(geoJSONUrl);
      setGeoJsonData(data);
    };

    loadGeoJSON();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!geoJsonData || !mapRef.current || !data) return;

    const map = L.map(mapRef.current).setView([-23.55052, -46.633308], 4);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.geoJSON(geoJsonData)
      .addTo(map)
      .eachLayer((layer) => {
        layer.bindPopup(generateModalHTML(data), {
          closeButton: false,
          autoClose: false
        });
      });

    window.addEventListener("resize", () => map.invalidateSize());

    return () => {
      window.removeEventListener("resize", () => map.invalidateSize());
      map.remove();
    };
  }, [geoJsonData, data]);

  return (
    <div
      ref={mapRef}
      style={{ height: "500px", width: "100%", borderRadius: "20px" }}
    />
  );
};
