import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  experimental: {
    cssChunking: 'strict',
  },
};

export default nextConfig;
