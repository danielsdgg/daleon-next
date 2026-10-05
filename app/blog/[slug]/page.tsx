// app/blog/[slug]/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ShareButton from '@/src/components/ShareButton';
import { blogPosts } from '@/src/data/blog-posts';

const SITE_URL = 'https://daleondynamics.com';
const WHATSAPP_URL = 'https://wa.me/254142021359';

const abs = (url: string) => (url.startsWith('http') ? url : `${SITE_URL}${url}`);

type Params = { params: Promise<{ slug: string }> };

// ==================== SEO METADATA ====================
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Article not found', robots: { index: false, follow: false } };
  }

  const path = `/blog/${post.slug}`;

  return {
    title: post.title, // the root layout template appends "| Daleon Dynamics"
    description: post.excerpt,
    alternates: { canonical: path },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}${path}`,
      siteName: 'Daleon Dynamics',
      images: [{ url: abs(post.image), alt: post.title }],
      locale: 'en_KE',
      type: 'article',
      publishedTime: post.dateISO,
      modifiedTime: post.dateISO,
      authors: ['Daleon Dynamics'],
      section: post.category,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [abs(post.image)],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// ==================== MAIN COMPONENT ====================
const BlogPost = async ({ params }: Params) => {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;

  const related = [
    ...blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category),
    ...blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category),
  ].slice(0, 2);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        headline: post.title,
        description: post.excerpt,
        image: [abs(post.image)],
        datePublished: post.dateISO,
        dateModified: post.dateISO,
        inLanguage: 'en-KE',
        articleSection: post.category,
        author: { '@id': `${SITE_URL}/#organization` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        isPartOf: { '@id': `${SITE_URL}/blogs#blog` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blogs` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
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

      <div className="min-h-screen bg-[#0A0A0F] text-[#F2F1F7]">
        {/* Hero */}
        <div className="relative h-[440px] md:h-[520px] overflow-hidden">
          <Image src={post.image} alt="" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0A0A0F]" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-4xl mx-auto px-6 w-full">
              <nav aria-label="Breadcrumb" className="mb-8 font-mono text-xs text-[#F2F1F7]/80">
                <ol className="flex flex-wrap items-center gap-2">
                  <li><Link href="/" className="hover:text-[#38E1C6]">Home</Link></li>
                  <li aria-hidden="true">/</li>
                  <li><Link href="/blogs" className="hover:text-[#38E1C6]">Blog</Link></li>
                </ol>
              </nav>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#F2F1F7]/90 mb-6">
                <span className="font-mono bg-[#7B5CFF] px-4 py-1.5 rounded-full text-xs font-semibold text-white">
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <time dateTime={post.dateISO}>{post.date}</time>
                </div>
                <span>By Daleon Dynamics</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-[#F2F1F7]">
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Article */}
        <div className="max-w-4xl mx-auto px-6 -mt-10 md:-mt-14 relative z-10 pb-12">
          <article className="bg-[#0F141B] border border-[#232330] rounded-2xl p-8 md:p-14 prose prose-invert prose-lg max-w-none prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-5 prose-h2:text-[#F2F1F7] prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-[#F2F1F7] prose-p:leading-relaxed prose-p:text-[#C7C5D6] prose-strong:text-[#38E1C6] prose-strong:font-semibold prose-ul:my-6 prose-li:my-2 prose-li:text-[#C7C5D6] prose-a:text-[#7B5CFF] prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-[#8E73FF] prose-blockquote:border-l-[#7B5CFF] prose-blockquote:bg-[#131A22] prose-blockquote:not-italic prose-blockquote:text-[#F2F1F7] prose-blockquote:py-3 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-table:my-8 prose-th:font-mono prose-th:text-[#7B5CFF] prose-th:text-sm prose-th:border-b prose-th:border-[#232330] prose-td:text-[#C7C5D6] prose-td:border-b prose-td:border-[#232330]">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>

        {/* Visible FAQ (the FAQ schema must match content that is on the page) */}
        {post.faqs && post.faqs.length > 0 && (
          <section className="max-w-4xl mx-auto px-6 pb-12" aria-labelledby="post-faq">
            <h2 id="post-faq" className="text-2xl font-bold tracking-tight mb-6">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {post.faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-xl border border-[#232330] bg-[#0F141B] p-6 open:border-[#38E1C6]"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-medium">
                    {f.q}
                    <span className="flex-shrink-0 text-[#38E1C6] transition group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-[#8E8CA3]">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Conversion block */}
        <section className="max-w-4xl mx-auto px-6 pb-12">
          <div className="rounded-2xl border border-[#38E1C6]/30 bg-[#0F141B] p-8 md:p-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight mb-3">
              Need help with your website or web app?
            </h2>
            <p className="text-[#8E8CA3] mb-6 max-w-xl mx-auto">
              Tell us what you need and we&apos;ll send a fixed-price quote and timeline. Websites from
              KES 55,000, custom web apps from KES 200,000.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#7B5CFF] px-7 py-3.5 font-semibold text-white transition hover:bg-[#8E73FF]"
              >
                Get a Free Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#232330] px-7 py-3.5 font-semibold transition hover:border-[#38E1C6] hover:text-[#38E1C6]"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
            <p className="mt-6 text-sm text-[#8E8CA3]">
              Learn more about our{' '}
              <Link href="/services/high-converting-website" className="text-[#38E1C6] hover:underline">
                high-converting websites
              </Link>{' '}
              and{' '}
              <Link href="/services/custom-web-apps" className="text-[#38E1C6] hover:underline">
                custom web apps
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="max-w-4xl mx-auto px-6 pb-12" aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-2xl font-bold tracking-tight mb-6">
              Keep reading
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-[#232330] bg-[#0F141B] transition-all hover:border-[#7B5CFF]"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={r.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 font-mono text-xs text-[#7B5CFF]">{r.category}</div>
                    <h3 className="font-semibold leading-snug group-hover:text-[#38E1C6] transition-colors line-clamp-3">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Bottom navigation */}
        <div className="max-w-4xl mx-auto px-6 pb-24 flex flex-col sm:flex-row items-center justify-between gap-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-3 text-[#7B5CFF] hover:text-[#8E73FF] font-semibold group"
          >
            <span className="w-10 h-10 rounded-full border border-[#232330] flex items-center justify-center group-hover:border-[#7B5CFF] transition-colors">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            </span>
            Browse all articles
          </Link>

          <ShareButton title={post.title} />
        </div>
      </div>
    </>
  );
};

export default BlogPost;