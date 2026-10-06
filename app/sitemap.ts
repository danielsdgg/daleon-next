// app/sitemap.ts
import type { MetadataRoute } from 'next';
import { blogPosts } from '@/src/data/blog-posts';

const SITE_URL = 'https://daleondynamics.com';

type Page = {
  path: string;
  lastModified: string;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
  priority: number;
};

// Update a page's date only when its content really changes.
// Google trusts lastModified only if it is accurate.
const pages: Page[] = [
  { path: '/', lastModified: '2026-10-06', changeFrequency: 'weekly', priority: 1 },
  { path: '/services', lastModified: '2026-10-06', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/services/high-converting-website', lastModified: '2026-10-06', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/services/custom-web-apps', lastModified: '2026-10-06', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/projects', lastModified: '2026-10-06', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', lastModified: '2026-10-06', changeFrequency: 'yearly', priority: 0.8 },
  { path: '/about', lastModified: '2026-10-06', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/blogs', lastModified: '2026-10-06', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/privacy', lastModified: '2026-10-05', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/terms', lastModified: '2026-10-06', changeFrequency: 'yearly', priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = pages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: p.lastModified,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const postEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.dateISO,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}