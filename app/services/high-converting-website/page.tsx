// app.services/high-converting-website/page.tsx
import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  Globe,
  Users,
  Gauge,
  Search,
  Accessibility,
  ShieldCheck,
  Server,
  Clock,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'High-Converting Websites in Nairobi, Kenya',
  description:
    'What is a high-converting website? A static, SEO-first site engineered in Next.js to turn visitors into customers — no traditional server, blazing-fast load times, and built for how Google actually ranks new sites in Kenya.',
  keywords: [
    'high converting websites nairobi', 'web design nairobi', 'professional website design kenya',
    'seo optimized websites nairobi', 'conversion rate optimization kenya', 'landing page design nairobi',
    'static website nextjs kenya', 'fast loading websites kenya', 'ecommerce website nairobi',
    'business website design nairobi', 'what is a high converting website',
  ],
  alternates: { canonical: 'https://daleondynamics.com/services/high-converting-website' },
  openGraph: {
    title: 'High-Converting Websites Nairobi | Daleon Dynamics',
    description: 'Static, SEO-first websites engineered to convert visitors into customers in the Kenyan market.',
    url: 'https://daleondynamics.com/services/high-converting-website',
    siteName: 'Daleon Dynamics',
    images: [
      {
        url: '/icon.png',
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
    description: 'Static, SEO-first websites engineered to convert visitors into customers in the Kenyan market.',
    images: ['/icon.png'],
  },
};

const scores = [
  { label: 'Performance', value: 98, icon: Gauge },
  { label: 'SEO', value: 100, icon: Search },
  { label: 'Accessibility', value: 96, icon: Accessibility },
  { label: 'Best Practices', value: 100, icon: ShieldCheck },
];

const benefits = [
  { icon: Target, title: 'Conversion Focused', desc: 'Strategic layouts, strong CTAs, and trust elements proven to increase sales.' },
  { icon: Zap, title: 'Blazing Fast', desc: 'Next.js powered, statically generated pages with excellent Core Web Vitals.' },
  { icon: Globe, title: 'Local SEO Mastery', desc: 'Optimized for Nairobi and Kenya searches — local schema, speed, and content strategy.' },
  { icon: Users, title: 'Mobile-First', desc: 'Built for the Kenyan reality — fast on 3G/4G and budget smartphones.' },
];

const seoTimeline = [
  { stage: 'Week 1–2', title: 'Indexing Begins', desc: 'Google discovers and crawls your new site for the first time.' },
  { stage: 'Month 1–3', title: 'Evaluation', desc: "Google evaluates your site's quality, relevance, and trust signals before ranking it with confidence." },
  { stage: 'Month 3–6', title: 'Climbing', desc: 'Rankings typically start moving upward for your target keywords as trust builds.' },
  { stage: 'Ongoing', title: 'Compounding', desc: 'Consistent content, real backlinks, and site health keep building authority over time.' },
];

const process = [
  { num: '01', title: 'Discovery & Strategy', desc: 'Business goals, customer research, competitor analysis, and conversion mapping.' },
  { num: '02', title: 'Design & Prototyping', desc: 'User-centered wireframes and high-fidelity designs focused on conversion paths.' },
  { num: '03', title: 'Development & Optimization', desc: 'Clean, statically generated code with SEO, performance, and M-Pesa integration built-in.' },
  { num: '04', title: 'Launch, Analytics & Growth', desc: 'Rigorous testing, launch, training, and continuous performance optimization.' },
];

const included = [
  'Modern, conversion-focused design',
  'Statically generated Next.js performance',
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
  { q: 'Why is my site static instead of having a traditional server?', a: "A static site is pre-built into plain HTML and served instantly from edge locations worldwide, with no server processing each request. That means faster load times, better reliability, and content that's immediately readable by Google — which directly helps both conversions and SEO." },
  { q: 'How soon will my website rank on Google?', a: "Honestly — not overnight. Expect indexing within the first couple of weeks, early evaluation over the following months, and meaningful ranking movement typically from month 3 onward. Anyone promising page-one rankings in days isn't being straight with you." },
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
        description: 'Static, SEO-first, high-converting websites built for Kenyan businesses using Next.js.',
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

      {/* HERO — Lighthouse-style score panel */}
      <section className="pt-32 pb-24 px-6 border-b border-[#232330]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-sm text-[#7B5CFF] mb-8">
              <span>{'//'}</span>
              <span>conversion-engineering</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              High-Converting Websites in Nairobi —{' '}
              <span className="bg-gradient-to-r from-[#7B5CFF] to-[#38E1C6] bg-clip-text text-transparent">
                Engineered to Actually Convert
              </span>
            </h1>

            <p className="text-lg text-[#8E8CA3] max-w-xl mb-10 leading-relaxed">
              We don&apos;t build pretty websites. We engineer static, high-performance digital assets that
              attract the right traffic, build trust instantly, and turn visitors into paying customers — in
              the Kenyan market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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

          {/* Score panel */}
          <div className="rounded-2xl border border-[#232330] bg-[#0F141B] overflow-hidden shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#232330] bg-[#131A22]">
              <span className="font-mono text-xs text-[#8E8CA3]">website-health-report.json</span>
              <span className="flex items-center gap-1.5 font-mono text-xs text-[#38E1C6]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38E1C6] animate-pulse" />
                live
              </span>
            </div>
            <div className="grid grid-cols-2 gap-6 p-8">
              {scores.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="flex flex-col items-center text-center">
                    <div
                      className="relative w-20 h-20 rounded-full flex items-center justify-center mb-3"
                      style={{
                        background: `conic-gradient(#38E1C6 ${s.value * 3.6}deg, #232330 0deg)`,
                      }}
                    >
                      <div className="w-16 h-16 rounded-full bg-[#0F141B] flex items-center justify-center font-mono font-bold text-lg">
                        {s.value}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#8E8CA3] text-xs font-mono">
                      <Icon className="w-3.5 h-3.5" />
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="px-8 pb-6 font-mono text-[11px] text-[#5C5A6E]">
              {'// typical scores across websites we build — measured, not promised'}
            </div>
          </div>
        </div>
      </section>

      {/* DEFINITION — What is a high-converting website */}
      <section className="py-20 px-6 border-b border-[#232330]">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-sm text-[#7B5CFF] mb-6">{'// definition'}</div>
          <div className="border-l-2 border-[#7B5CFF] pl-6 md:pl-10">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              What Is a High-Converting Website, Exactly?
            </h2>
            <p className="text-lg text-[#C7C5D6] leading-relaxed mb-4">
              A <strong className="text-[#F2F1F7]">high-converting website </strong> is a website engineered to
              turn visitors into paying customers — not just a site that looks good. It combines three things
              most agencies treat separately: persuasive design that guides a visitor toward action, technical
              performance fast enough that visitors don&apos;t leave before it loads, and search visibility
              that gets the right people to the site in the first place.
            </p>
            <p className="text-lg text-[#C7C5D6] leading-relaxed">
              This is deliberately a different kind of build from a{' '}
              <a href="/services/custom-web-apps" className="text-[#7B5CFF] hover:text-[#8E73FF]">
                custom web application
              </a>
              . A high-converting website doesn&apos;t need user logins, databases, or backend logic — it
              needs to be fast, findable, and convincing. That simplicity is exactly what makes it possible to
              build one this quickly and this affordably, without cutting corners on quality.
            </p>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE — static vs typical, no server */}
      <section className="py-20 px-6 border-b border-[#232330]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// built-different'}</div>
            <h2 className="text-3xl font-bold tracking-tight mb-3">No Traditional Server. On Purpose.</h2>
            <p className="text-lg text-[#8E8CA3] max-w-2xl">
              We build these sites <strong className="text-[#F2F1F7]">statically</strong> using Next.js — the
              entire site is pre-built into plain HTML ahead of time, not assembled on the fly for every
              visitor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0F141B] border border-[#232330] rounded-xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <Server className="w-5 h-5 text-[#5C5A6E]" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#5C5A6E]">Typical Website</span>
              </div>
              <div className="space-y-3 font-mono text-sm text-[#8E8CA3]">
                <div>1. Visitor requests page</div>
                <div>2. Server wakes up, runs code</div>
                <div>3. Server queries a database</div>
                <div>4. Page is assembled, line by line</div>
                <div>5. Response finally sent</div>
              </div>
              <div className="mt-6 inline-block font-mono text-xs bg-[#232330] text-[#8E8CA3] px-3 py-1.5 rounded-full">
                slower, and only as fast as its server
              </div>
            </div>

            <div className="bg-[#0F141B] border border-[#7B5CFF]/40 rounded-xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-[#38E1C6]" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#38E1C6]">Our Static Sites</span>
              </div>
              <div className="space-y-3 font-mono text-sm text-[#F2F1F7]">
                <div>1. Site is pre-built before launch</div>
                <div>2. Finished HTML sits on a global edge network</div>
                <div>3. Visitor requests page</div>
                <div>4. Nearest edge location responds instantly</div>
              </div>
              <div className="mt-6 inline-block font-mono text-xs bg-[#38E1C6]/10 text-[#38E1C6] px-3 py-1.5 rounded-full">
                near-instant, and built for how Google crawls
              </div>
            </div>
          </div>

          <p className="text-[#8E8CA3] mt-8 max-w-3xl leading-relaxed">
            This matters for two reasons at once: visitors get a page that loads before they lose patience, and
            Google gets fully-formed, instantly readable HTML to crawl — which is exactly what static sites are
            built for.
          </p>
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

      {/* HONEST SEO TIMELINE */}
      <section className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// honest-seo-timeline'}</div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              The Honest Truth About SEO Timelines
            </h2>
            <p className="text-lg text-[#8E8CA3] leading-relaxed">
              If someone promises page-one Google rankings within days of launch, that&apos;s not realistic —
              for any website, on any budget. SEO is a gradual process Google runs deliberately, especially for
              a brand-new site still building trust. Here&apos;s what actually happens.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {seoTimeline.map((item, i) => (
              <div key={i} className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-[#7B5CFF]" />
                  <span className="font-mono text-xs text-[#7B5CFF] uppercase tracking-wider">{item.stage}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-[#8E8CA3] text-sm leading-relaxed">{item.desc}</p>
                {i < seoTimeline.length - 1 && (
                  <div className="hidden md:block absolute top-2 -right-3 w-6 border-t border-dashed border-[#232330]" />
                )}
              </div>
            ))}
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