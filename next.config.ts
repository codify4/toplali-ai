import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: [],
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

export default nextConfig;
