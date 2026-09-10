// app/blogs/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import NewsletterForm from './NewsletterForm';
import { blogPosts } from '@/src/data/blog-posts';
import SectionLabel from '@/src/components/ui/SectionLabel';
import Reveal from '@/src/components/ui/motion/Reveal';
import Stagger from '@/src/components/ui/motion/Stagger';

export const metadata: Metadata = {
  title: 'Blog | Web Development, Custom Software & Security Insights Kenya',
  description:
    'Expert articles on custom software development, high-converting websites, biometric access control systems, business automation, and digital growth strategies for Kenyan businesses.',
  keywords: [
    'custom software Kenya', 'web development Kenya', 'access control systems Kenya',
    'where can i get a website in kenya', 'software development Nairobi', 'business automation Kenya',
    'website for my business Kenya', 'high converting websites Kenya', 'biometric security Kenya',
    'digital transformation Kenya', 'tech news Kenya', 'daleon dynamics blog', 'web design Nairobi',
    'software company Nairobi', 'm-pesa integration Kenya', 'seo services Nairobi', 'crm development Kenya',
    'business automation Kenya', 'high converting websites Kenya', 'software development Nairobi',
    'biometric security Kenya', 'digital transformation Kenya', 'tech news Kenya', 'daleon dynamics blog',
  ],
  alternates: {
    canonical: 'https://daleondynamics.com/blogs',
  },
  openGraph: {
    title: 'Blog - Insights on Software & Web Development in Kenya | Daleon Dynamics',
    description: 'Practical guides and industry insights for Kenyan businesses looking to grow through technology.',
    url: 'https://daleondynamics.com/blogs',
    siteName: 'Daleon Dynamics',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200',
        width: 1200,
        height: 630,
        alt: 'Daleon Dynamics Blog - Software & Web Development Insights',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Insights on Software & Web Development in Kenya | Daleon Dynamics',
    description: 'Practical guides and industry insights for Kenyan businesses looking to grow through technology.',
    images: ['https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200'],
  },
};

const categories = ['Custom Software', 'Web Development', 'Business Strategy', 'M-Pesa & Payments'];

const Blogs = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': 'https://daleondynamics.com/blogs',
        name: 'Daleon Dynamics Blog',
        description: 'Insights on custom software, web development, and security systems in Kenya.',
        url: 'https://daleondynamics.com/blogs',
        publisher: { '@type': 'Organization', '@id': 'https://daleondynamics.com/#organization' },
        blogPost: blogPosts.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          image: post.image,
          datePublished: post.dateISO,
          url: `https://daleondynamics.com/blog/${post.slug}`,
          author: { '@type': 'Organization', '@id': 'https://daleondynamics.com/#organization' },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://daleondynamics.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://daleondynamics.com/blogs' },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="pt-32 pb-16 px-6 border-b border-line">
        <Reveal className="max-w-4xl mx-auto text-center">
          <SectionLabel label="knowledge-hub" />
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            Insights &amp; Strategies
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              for Growing Kenyan Businesses
            </span>
          </h1>
          <p className="text-lg text-ink-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            Practical, no-fluff articles on custom software, high-converting websites, business automation,
            M-Pesa integrations, and biometric access control — written for Kenyan business owners, not
            search engines.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="font-mono text-xs text-ink-muted border border-line bg-surface-alt px-4 py-2 rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* BLOG GRID */}
      <section className="py-20 px-6 border-b border-line">
        <div className="max-w-7xl mx-auto">
          <Stagger className="grid md:grid-cols-2 gap-8" step={0.08}>
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-surface border border-line hover:border-primary rounded-2xl overflow-hidden transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-ink-dim mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <span className="ml-auto font-mono text-primary border border-line px-3 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold leading-tight mb-4 group-hover:text-accent transition-colors line-clamp-3">
                    {post.title}
                  </h3>

                  <p className="text-ink-muted leading-relaxed mb-6 flex-1 line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-3 gap-2 transition-all mt-auto">
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </Stagger>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 px-6 text-center">
        <Reveal className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Stay Updated with Industry Insights</h2>
          <p className="text-lg text-ink-muted mb-12 max-w-xl mx-auto">
            Get monthly tips on software development, web technologies, and business growth strategies.
          </p>
          <NewsletterForm />
        </Reveal>
      </section>
    </div>
  );
};

export default Blogs;