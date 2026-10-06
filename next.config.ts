import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,

  // www -> apex redirect is handled in Vercel -> Project -> Settings -> Domains
  // (daleondynamics.com as primary, www as "Redirect to").
  async redirects() {
    return [
      { source: "/blog", destination: "/blogs", permanent: true },
      {
        source: "/services/high-converting-websites",
        destination: "/services/high-converting-website",
        permanent: true,
      },
      { source: "/blog/access-control-systems", destination: "/blogs", permanent: true },
      // Only if you removed the Careers page:
      { source: "/careers", destination: "/about", permanent: true },
    ];
  },

  devIndicators: false,
};

export default nextConfig;