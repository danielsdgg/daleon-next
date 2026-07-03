// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',        // Block API routes
          '/admin/',      // Block admin area
          '/private/',    // Block private content
        ],
      },
    ],
    sitemap: 'https://daleondynamics.com/sitemap.xml',
    host: 'https://daleondynamics.com',
  };
}