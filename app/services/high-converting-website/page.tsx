// app/services/high-converting-website/page.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Zap, Target, Globe, Users, Code2 } from 'lucide-react';
import type { Metadata } from 'next';
import SectionLabel from '@/src/components/ui/SectionLabel';
import TerminalWindow from '@/src/components/ui/TerminalWindow';
import CodeSnippet from '@/src/components/ui/CodeSnippet';
import TechStackRow from '@/src/components/ui/TechStackRow';
import Reveal from '@/src/components/ui/motion/Reveal';
import Stagger from '@/src/components/ui/motion/Stagger';

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

const seoSnippet = [
  { tokens: [{ text: 'export const ', tone: 'keyword' as const }, { text: 'metadata', tone: 'ident' as const }, { text: ' = {', tone: 'muted' as const }] },
  { tokens: [{ text: '  title: ', tone: 'muted' as const }, { text: "'Your Business | City, Kenya',", tone: 'plain' as const }] },
  { tokens: [{ text: '  description: ', tone: 'muted' as const }, { text: "'...',", tone: 'plain' as const }] },
  { tokens: [{ text: '  openGraph: ', tone: 'muted' as const }, { text: '{ images: [...] },', tone: 'plain' as const }] },
  { tokens: [{ text: '};', tone: 'muted' as const }] },
  { tokens: [{ text: '', tone: 'plain' as const }] },
  { tokens: [{ text: '// Core Web Vitals target', tone: 'muted' as const }] },
  { tokens: [{ text: '// LCP < 1.8s · CLS < 0.1 · INP < 200ms', tone: 'muted' as const }] },
];

const techStack = [
  { icon: Zap, label: 'Core Web Vitals' },
  { icon: Globe, label: 'Next.js SEO' },
  { icon: Code2, label: 'Schema.org JSON-LD' },
  { icon: Target, label: 'GA4 + Conversion Tracking' },
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
    <main className="min-h-screen bg-canvas text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="pt-32 pb-24 relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <Reveal>
            <SectionLabel label="conversion-engineering" className="mb-8" />

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-8">
              Websites That{' '}
              <span className="text-primary">
                Actually Convert
              </span>
            </h1>

            <p className="text-lg md:text-xl text-ink-muted max-w-3xl mx-auto mb-12">
              We don&apos;t build pretty websites. We engineer high-performance digital assets that attract the
              right traffic, build trust instantly, and turn visitors into paying customers — in the Kenyan
              market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-semibold transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                Get Your Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
              <Link
                href="#process"
                className="inline-flex items-center justify-center gap-3 border border-line hover:border-accent hover:text-accent px-8 py-4 rounded-lg font-semibold transition-all"
              >
                See Our Process
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 px-6 border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-16">
            <SectionLabel label="why-us" />
            <h2 className="text-4xl font-bold tracking-tight">Why Our Websites Perform Better</h2>
          </Reveal>

          <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" step={0.08}>
            {benefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-surface p-8 rounded-xl border border-line hover:border-primary transition-all group"
                >
                  <Icon className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition" />
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* HOW WE OPTIMIZE */}
      <section className="py-24 px-6 border-b border-line">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <SectionLabel label="how-we-optimize" />
            <h2 className="text-4xl font-bold tracking-tight mb-4">SEO built into the code, not bolted on after</h2>
            <p className="text-lg text-ink-muted leading-relaxed mb-8">
              Every page ships with structured metadata and is measured against Core Web Vitals targets
              before launch — the same technical foundation Google actually ranks on.
            </p>
            <TechStackRow items={techStack} />
          </Reveal>
          <Reveal delay={0.1}>
            <TerminalWindow title="app/page.tsx">
              <CodeSnippet lines={seoSnippet} />
            </TerminalWindow>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 px-6 border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-16">
            <SectionLabel label="our-process" />
            <h2 className="text-4xl font-bold tracking-tight">Our Development Process</h2>
          </Reveal>
          <Stagger className="grid md:grid-cols-4 gap-8" step={0.08}>
            {process.map((step, i) => (
              <div key={i}>
                <div className="w-14 h-14 bg-surface border border-line text-primary rounded-xl flex items-center justify-center text-xl font-mono font-bold mb-6">
                  {step.num}
                </div>
                <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-24 px-6 border-b border-line">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-16">
            <SectionLabel label="whats-included" />
            <h2 className="text-4xl font-bold tracking-tight">What&apos;s Included</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {included.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-ink">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6 border-b border-line text-center">
        <Reveal className="max-w-2xl mx-auto">
          <SectionLabel label="pricing" />
          <h2 className="text-4xl font-bold tracking-tight mb-4">Transparent Pricing</h2>
          <p className="font-mono text-3xl font-bold text-accent mb-4">Starting from KES 60,000</p>
          <p className="text-ink-muted mb-10 max-w-xl mx-auto">
            This is the starting price for a professional high-converting business website. Final pricing
            depends on features, pages, and integrations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-semibold transition-all active:scale-95"
          >
            Get Your Personalized Quote
          </Link>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <SectionLabel label="faq" />
            <h2 className="text-4xl font-bold tracking-tight mb-12">Frequently Asked Questions</h2>
          </Reveal>
          <Stagger className="space-y-4" step={0.06}>
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-surface border border-line rounded-xl p-6 group open:border-accent"
              >
                <summary className="font-medium text-lg cursor-pointer flex justify-between items-start gap-4 list-none">
                  {faq.q}
                  <span className="text-accent group-open:rotate-45 transition flex-shrink-0">+</span>
                </summary>
                <p className="mt-4 text-ink-muted leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </Stagger>
        </div>
      </section>
    </main>
  );
};

export default HighConvertingWebsitePage;