import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: { unoptimized: true },
  basePath: '/portfolio_2026',
  assetPrefix: '/portfolio_2026',
};

export default nextConfig;
