import { useRef, useState, useEffect } from "react";

import axios from "axios";
import L from "leaflet";

import useGenericFetch from "@/hooks/queries/useGenericFetch";

import "leaflet/dist/leaflet.css";

import { geoJSONUrl, generateModalHTML } from "./constants";

export const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<L.Map | undefined>(undefined);
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
    if (!geoJsonData || !mapRef.current) return;

    const localMap = L.map(mapRef.current).setView([-23.55052, -46.633308], 4);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(localMap);

    setMap(localMap);

    window.addEventListener("resize", () => localMap.invalidateSize());

    return () => {
      window.removeEventListener("resize", () => localMap.invalidateSize());
      localMap.remove();
      setMap(undefined);
    };
  }, [geoJsonData]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!map || !data || !geoJsonData) return;

    const geoJson = L.geoJSON(geoJsonData, {
      onEachFeature: (_, layer) => {
        layer.bindPopup(generateModalHTML(data), { closeButton: false });
      }
    });

    map.addLayer(geoJson);

    return () => {
      map?.removeLayer(geoJson);
    };
  }, [map, geoJsonData, data]);

  return (
    <div
      ref={mapRef}
      style={{ height: "500px", width: "100%", borderRadius: "20px" }}
    />
  );
};
