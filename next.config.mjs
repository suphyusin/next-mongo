/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  basePath: "/stock",
  assetPrefix: "/stock",
};

export default nextConfig;

