import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://daleondynamics.com';
  const currentDate = new Date().toISOString();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // === SERVICE PAGES ===
    {
      url: `${baseUrl}/services/high-converting-website`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/custom-web-apps`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/access-control-systems`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // === CORE PAGES ===
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },

    // === LEGAL PAGES ===
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ];
}