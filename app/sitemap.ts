// app/sitemap.ts
import type { MetadataRoute } from 'next';
import { blogPosts } from '@/src/data/blog-posts';

const baseUrl = 'https://daleondynamics.com';

// Update this when you actually redesign/rewrite a page's content —
// not on every build. A sitemap date that changes daily with no real
// content change is a signal Google has said it will start discounting.
const SITE_LAST_UPDATED = new Date('2026-07-27');

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: SITE_LAST_UPDATED, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/projects`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/blogs`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/careers`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },

    // SERVICE PAGES
    { url: `${baseUrl}/services/high-converting-website`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/custom-web-apps`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },

    // LEGAL PAGES
    { url: `${baseUrl}/terms`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'yearly', priority: 0.5 },
  ];

  // BLOG POSTS — generated from the single shared data source, so a new
  // post added to src/data/blog-posts.ts automatically appears here too.
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateISO),
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...staticPages, ...blogPages];
}