// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',           // Don't index API routes
          '/admin/',         // If you ever add an admin area
          '/private/',       
          '/*.json$',        // Optional: block JSON files
        ],
      },
    ],
    sitemap: 'https://daleondynamics.com/sitemap.xml',
    host: 'https://daleondynamics.com',
  };
}