import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  allowedDevOrigins: ['192.168.2.52'],
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
