import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.hesnical.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/login",
        destination: "http://130.185.78.135/api/identity/token",
      },
    ];
  },
};

export default nextConfig;

