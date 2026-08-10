// app/services/high-converting-website/page.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Zap, Target, Globe, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'High-Converting Websites Nairobi | Daleon Dynamics' },
  description:
    'We engineer high-converting, lightning-fast, SEO-optimized websites in Nairobi that turn visitors into loyal customers and drive measurable business growth.',
  keywords: [
    'high converting websites nairobi', 'web design nairobi', 'professional website design kenya',
    'seo optimized websites nairobi', 'conversion rate optimization kenya', 'landing page design nairobi',
    'fast loading websites kenya', 'ecommerce website nairobi', 'business website design nairobi',
  ],
  alternates: { canonical: 'https://daleondynamics.com/services/high-converting-website' },
  openGraph: {
    title: 'High-Converting Websites Nairobi | Daleon Dynamics',
    description: 'Premium websites engineered to generate leads and grow your business in Kenya.',
    url: 'https://daleondynamics.com/services/high-converting-website',
    siteName: 'Daleon Dynamics',
    images: [
      {
        url: 'https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'High-Converting Websites Nairobi | Daleon Dynamics',
    description: 'Premium websites engineered to generate leads and grow your business in Kenya.',
    images: ['https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png'],
  },
};

const benefits = [
  { icon: Target, title: 'Conversion Focused', desc: 'Strategic layouts, strong CTAs, and trust elements proven to increase sales.' },
  { icon: Zap, title: 'Blazing Fast', desc: 'Next.js powered websites with excellent Core Web Vitals and top Google rankings.' },
  { icon: Globe, title: 'Local SEO Mastery', desc: 'Optimized for Nairobi and Kenya searches — local schema, speed, and content strategy.' },
  { icon: Users, title: 'Mobile-First', desc: 'Built for the Kenyan reality — fast on 3G/4G and budget smartphones.' },
];

const process = [
  { num: '01', title: 'Discovery & Strategy', desc: 'Business goals, customer research, competitor analysis, and conversion mapping.' },
  { num: '02', title: 'Design & Prototyping', desc: 'User-centered wireframes and high-fidelity designs focused on conversion paths.' },
  { num: '03', title: 'Development & Optimization', desc: 'Clean, fast code with SEO, performance, and M-Pesa integration built-in.' },
  { num: '04', title: 'Launch, Analytics & Growth', desc: 'Rigorous testing, launch, training, and continuous performance optimization.' },
];

const included = [
  'Modern, conversion-focused design',
  'Lightning-fast Next.js performance',
  'Mobile-first & fully responsive',
  'Advanced technical + on-page SEO',
  'Lead capture forms & strong CTAs',
  'Google Analytics 4 + conversion tracking',
  'SSL security & hosting setup',
  'Full training and handover',
];

const faqs = [
  { q: 'How long does it take to build a high-converting website?', a: 'Standard projects take 4–8 weeks. More complex sites with custom integrations take 10–14 weeks.' },
  { q: 'Do you provide SEO services?', a: 'Yes. Every website includes comprehensive on-page SEO, technical optimization, and local Kenya-focused strategies.' },
  { q: 'Will my site be mobile-friendly?', a: 'Yes — we build mobile-first. Most Kenyans browse on mobile, so we optimize for excellent performance on all devices.' },
  { q: 'Do you offer ongoing maintenance?', a: 'Yes. We provide monthly support retainers to keep your website secure, fast, and up-to-date.' },
];

const HighConvertingWebsitePage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://daleondynamics.com/services/high-converting-website',
        name: 'High-Converting Websites Development Nairobi',
        provider: { '@type': 'Organization', '@id': 'https://daleondynamics.com/#organization' },
        areaServed: { '@type': 'Country', name: 'Kenya' },
        description: 'Professional, SEO-optimized, high-converting websites built for Kenyan businesses.',
        offers: {
          '@type': 'Offer',
          price: '60000',
          priceCurrency: 'KES',
          url: 'https://daleondynamics.com/services/high-converting-website',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://daleondynamics.com' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://daleondynamics.com/services' },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'High-Converting Websites',
            item: 'https://daleondynamics.com/services/high-converting-website',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#0A0A0F] text-[#F2F1F7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="pt-32 pb-24 relative overflow-hidden border-b border-[#232330]">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-sm text-[#7B5CFF] mb-8">
            <span>{'//'}</span>
            <span>conversion-engineering</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-8">
            Websites That{' '}
            <span className="text-[#7B5CFF]">
              Actually Convert
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#8E8CA3] max-w-3xl mx-auto mb-12">
            We don&apos;t build pretty websites. We engineer high-performance digital assets that attract the
            right traffic, build trust instantly, and turn visitors into paying customers — in the Kenyan
            market.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-[#7B5CFF] hover:bg-[#8E73FF] text-white px-8 py-4 rounded-lg font-semibold transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38E1C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F]"
            >
              Get Your Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link
              href="#process"
              className="inline-flex items-center justify-center gap-3 border border-[#232330] hover:border-[#38E1C6] hover:text-[#38E1C6] px-8 py-4 rounded-lg font-semibold transition-all"
            >
              See Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// why-us'}</div>
            <h2 className="text-4xl font-bold tracking-tight">Why Our Websites Perform Better</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-[#0F141B] p-8 rounded-xl border border-[#232330] hover:border-[#7B5CFF] transition-all group"
                >
                  <Icon className="w-8 h-8 text-[#38E1C6] mb-6 group-hover:scale-110 transition" />
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-[#8E8CA3] text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// our-process'}</div>
            <h2 className="text-4xl font-bold tracking-tight">Our Development Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div key={i}>
                <div className="w-14 h-14 bg-[#0F141B] border border-[#232330] text-[#7B5CFF] rounded-xl flex items-center justify-center text-xl font-mono font-bold mb-6">
                  {step.num}
                </div>
                <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-[#8E8CA3] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// whats-included'}</div>
            <h2 className="text-4xl font-bold tracking-tight">What&apos;s Included</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {included.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-[#F2F1F7]">
                <CheckCircle className="w-5 h-5 text-[#38E1C6] mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6 border-b border-[#232330] text-center">
        <div className="max-w-2xl mx-auto">
          <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// pricing'}</div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Transparent Pricing</h2>
          <p className="font-mono text-3xl font-bold text-[#38E1C6] mb-4">Starting from KES 60,000</p>
          <p className="text-[#8E8CA3] mb-10 max-w-xl mx-auto">
            This is the starting price for a professional high-converting business website. Final pricing
            depends on features, pages, and integrations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#7B5CFF] hover:bg-[#8E73FF] text-white px-8 py-4 rounded-lg font-semibold transition-all active:scale-95"
          >
            Get Your Personalized Quote
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// faq'}</div>
          <h2 className="text-4xl font-bold tracking-tight mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-[#0F141B] border border-[#232330] rounded-xl p-6 group open:border-[#38E1C6]"
              >
                <summary className="font-medium text-lg cursor-pointer flex justify-between items-start gap-4 list-none">
                  {faq.q}
                  <span className="text-[#38E1C6] group-open:rotate-45 transition flex-shrink-0">+</span>
                </summary>
                <p className="mt-4 text-[#8E8CA3] leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HighConvertingWebsitePage;