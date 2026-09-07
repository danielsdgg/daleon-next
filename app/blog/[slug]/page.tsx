// app/blog/[slug]/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ShareButton from '@/src/components/ShareButton';
import { blogPosts } from '@/src/data/blog-posts';

// ==================== SEO METADATA ====================
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Blog Post Not Found | Daleon Dynamics', robots: { index: false } };
  }

  const url = `https://daleondynamics.com/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      'custom software Kenya', 'web development Nairobi', 'access control systems Kenya',
      post.category.toLowerCase(), 'software development Kenya', 'business automation Kenya',
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: 'Daleon Dynamics',
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      locale: 'en_KE',
      type: 'article',
      publishedTime: post.dateISO,
      authors: ['Daleon Dynamics'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// ==================== MAIN COMPONENT ====================
const BlogPost = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `https://daleondynamics.com/blog/${post.slug}`,
        headline: post.title,
        description: post.excerpt,
        image: post.image,
        datePublished: post.dateISO,
        mainEntityOfPage: `https://daleondynamics.com/blog/${post.slug}`,
        author: { '@type': 'Organization', '@id': 'https://daleondynamics.com/#organization' },
        publisher: {
          '@type': 'Organization',
          '@id': 'https://daleondynamics.com/#organization',
          logo: {
            '@type': 'ImageObject',
            url: '/icon.png',
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://daleondynamics.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://daleondynamics.com/blogs' },
          { '@type': 'ListItem', position: 3, name: post.title, item: `https://daleondynamics.com/blog/${post.slug}` },
        ],
      },
      ...(post.faqs && post.faqs.length > 0
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: post.faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-canvas">
        {/* Hero Section */}
        <div className="relative h-[460px] md:h-[550px] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-canvas" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-4xl mx-auto px-6 w-full">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-[#F2F1F7]/80 hover:text-[#F2F1F7] mb-8 text-sm font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Articles
              </Link>

              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/90 mb-6">
                <span className="font-mono bg-primary px-5 py-1.5 rounded-full text-xs font-semibold">
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" /> {post.date}
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-[#F2F1F7]">
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Article */}
        <div className="max-w-4xl mx-auto px-6 -mt-10 md:-mt-14 relative z-10 pb-16">
          <article className="bg-[#0F141B] border border-[#232330] rounded-2xl p-8 md:p-14 prose prose-invert prose-lg max-w-none prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-5 prose-h2:text-[#F2F1F7] prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-[#F2F1F7] prose-p:leading-relaxed prose-p:text-[#C7C5D6] prose-strong:text-[#38E1C6] prose-strong:font-semibold prose-ul:my-6 prose-li:my-2 prose-li:text-[#C7C5D6] prose-a:text-[#7B5CFF] prose-a:no-underline hover:prose-a:text-[#8E73FF] prose-blockquote:border-l-[#7B5CFF] prose-blockquote:bg-[#131A22] prose-blockquote:not-italic prose-blockquote:text-[#F2F1F7] prose-blockquote:py-3 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-table:my-8 prose-th:font-mono prose-th:text-[#7B5CFF] prose-th:text-sm prose-th:border-b prose-th:border-[#232330] prose-td:text-[#C7C5D6] prose-td:border-b prose-td:border-[#232330]">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>

        {/* Bottom navigation */}
        <div className="max-w-4xl mx-auto px-6 pb-24 flex flex-col sm:flex-row items-center justify-between gap-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-3 text-primary hover:text-primary-hover font-semibold group"
          >
            <div className="w-10 h-10 rounded-full border border-line flex items-center justify-center group-hover:border-primary transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </div>
            Browse All Articles
          </Link>

          <ShareButton title={post.title} />
        </div>
      </div>
    </>
  );
};

export default BlogPost;