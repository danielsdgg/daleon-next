import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,

  // NOTE: the www -> apex redirect is intentionally NOT handled here anymore.
  // Handle it in Vercel -> Project -> Settings -> Domains instead (mark
  // daleondynamics.com as primary, www.daleondynamics.com as "Redirect to").
  // Keeping it in both places is the most common cause of a redirect loop
  // on a Vercel + external-registrar setup.
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/blogs",
        permanent: true,
      },
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