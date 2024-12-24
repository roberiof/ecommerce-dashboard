import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: false
      }
    ];
  },
  images: {
    domains: ["mir-s3-cdn-cf.behance.net"]
  }
};

export default nextConfig;
