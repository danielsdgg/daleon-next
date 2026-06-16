// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect www → non-www
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.daleondynamics.com" }],
        destination: "https://daleondynamics.com/:path*",
        permanent: true,
      },
      // Fix specific service page typo
      {
        source: "/services/high-converting-websites",
        destination: "/services/high-converting-website",
        permanent: true,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  devIndicators: false,
};

export default nextConfig;
