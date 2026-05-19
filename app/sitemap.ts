// app/sitemap.ts
import type { MetadataRoute } from 'next';

const baseUrl = 'https://daleondynamics.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();

  return [
    // ==================== MAIN PAGES ====================
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    // ==================== SERVICE PAGES ====================
    {
      url: `${baseUrl}/services/high-converting-website`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/custom-web-apps`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/access-control-systems`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    // ==================== BLOG POSTS ====================
    {
      url: `${baseUrl}/blog/custom-software-2025`,
      lastModified: new Date('2026-04-05'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/high-converting-websites-kenya`,
      lastModified: new Date('2026-03-28'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/access-control-systems`,
      lastModified: new Date('2026-03-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/cost-of-poor-software`,
      lastModified: new Date('2026-02-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ==================== LEGAL PAGES ====================
    {
      url: `${baseUrl}/terms`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}