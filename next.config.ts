import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site (no API routes, no server actions): export to ./out for the Cloudflare Worker.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
