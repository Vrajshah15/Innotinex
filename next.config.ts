import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Innotinex",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
