// app/blogs/page.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';
import NewsletterForm from './NewsletterForm';
import { blogPosts } from '@/src/data/blog-posts';

const SITE_URL = 'https://daleondynamics.com';
const PAGE_PATH = '/blogs';
const WHATSAPP_URL = 'https://wa.me/254142021359';

const TITLE = 'Web Development & Software Blog for Kenya';
const DESCRIPTION =
  'Practical guides on websites, custom software, SEO, business automation and M-Pesa integration for Kenyan businesses, from Daleon Dynamics in Nairobi.';

const abs = (url: string) => (url.startsWith('http') ? url : `${SITE_URL}${url}`);

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Daleon Dynamics` },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: `${TITLE} | Daleon Dynamics`,
    description: DESCRIPTION,
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: 'Daleon Dynamics',
    images: [{ url: '/icon.png', alt: 'Daleon Dynamics logo' }],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: `${TITLE} | Daleon Dynamics`,
    description: DESCRIPTION,
    images: ['/icon.png'],
  },
};

// Topics are taken from the posts that actually exist
const topics = Array.from(new Set(blogPosts.map((p) => p.category)));

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Blog',
      '@id': `${SITE_URL}${PAGE_PATH}#blog`,
      name: 'Daleon Dynamics Blog',
      description: DESCRIPTION,
      url: `${SITE_URL}${PAGE_PATH}`,
      inLanguage: 'en-KE',
      publisher: { '@id': `${SITE_URL}/#organization` },
      blogPost: blogPosts.map((post) => ({
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        image: abs(post.image),
        datePublished: post.dateISO,
        url: `${SITE_URL}/blog/${post.slug}`,
        author: { '@id': `${SITE_URL}/#organization` },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}${PAGE_PATH}` },
      ],
    },
  ],
};

const Blogs = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F2F1F7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="pt-28 pb-16 px-6 border-b border-[#232330]">
        <div className="max-w-4xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="mb-8 font-mono text-xs text-[#8E8CA3]">
            <ol className="flex items-center justify-center gap-2">
              <li><Link href="/" className="hover:text-[#38E1C6]">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#F2F1F7]">Blog</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 font-mono text-sm text-[#7B5CFF] mb-6">
            <span>{'//'}</span>
            <span>knowledge-hub</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            Web Development &amp; Software Insights
            <br />
            <span className="bg-gradient-to-r from-[#7B5CFF] to-[#38E1C6] bg-clip-text text-transparent">
              for Kenyan Businesses
            </span>
          </h1>
          <p className="text-lg text-[#8E8CA3] max-w-2xl mx-auto mb-8 leading-relaxed">
            Practical, no-fluff articles on websites, custom software, SEO, business automation, and
            M-Pesa integration, written for Kenyan business owners.
          </p>

          {topics.length > 0 && (
            <ul aria-label="Topics covered" className="flex flex-wrap justify-center gap-2">
              {topics.map((cat) => (
                <li
                  key={cat}
                  className="font-mono text-xs text-[#C9C8D6] border border-[#232330] bg-[#0F0F14] px-4 py-2 rounded-full"
                >
                  {cat}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-20 px-6 border-b border-[#232330]">
        <div className="max-w-7xl mx-auto">
          <h2 className="sr-only">Latest articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article key={post.id} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group bg-[#0F141B] border border-[#232330] hover:border-[#7B5CFF] rounded-2xl overflow-hidden transition-all duration-500 flex flex-col h-full"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      priority={index < 2}
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-[#8E8CA3] mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" aria-hidden="true" />
                        <time dateTime={post.dateISO}>{post.date}</time>
                      </div>
                      <span className="ml-auto font-mono text-[#7B5CFF] border border-[#232330] px-3 py-1 rounded-full text-xs">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold leading-tight mb-4 group-hover:text-[#38E1C6] transition-colors line-clamp-3">
                      {post.title}
                    </h3>

                    <p className="text-[#8E8CA3] leading-relaxed mb-6 flex-1 line-clamp-3 text-sm">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-[#7B5CFF] font-semibold text-sm group-hover:gap-3 gap-2 transition-all mt-auto">
                      Read article
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE CTA */}
      <section className="py-20 px-6 border-b border-[#232330]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Need a website or web app?</h2>
          <p className="text-lg text-[#8E8CA3] mb-8">
            Websites from KES 55,000 and custom web apps from KES 200,000. Tell us what you need and
            we&apos;ll send a fixed-price quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#7B5CFF] px-8 py-4 font-semibold text-white transition hover:bg-[#8E73FF]"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-[#232330] px-8 py-4 font-semibold transition hover:border-[#38E1C6] hover:text-[#38E1C6]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Get new articles by email</h2>
          <p className="text-lg text-[#8E8CA3] mb-12 max-w-xl mx-auto">
            Practical tips on websites, software, and growing your business online.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
};

export default Blogs;