import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/services/high-converting-websites',
        destination: '/services/high-converting-website',
        permanent: true,   // 301 redirect
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },

  // Remove floating Next.js development indicator
  devIndicators: false,
};

export default nextConfig;