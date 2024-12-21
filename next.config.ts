import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: false // Define como temporário (302). Use true para permanente (308).
      }
    ];
  }
};

export default nextConfig;
