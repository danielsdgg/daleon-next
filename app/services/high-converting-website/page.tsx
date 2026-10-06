// app/services/high-converting-website/page.tsx

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
  MessageCircle,
} from 'lucide-react';
import type { Metadata } from 'next';

const SITE_URL = 'https://daleondynamics.com';
const PAGE_PATH = '/services/high-converting-website';
const WHATSAPP_URL = 'https://wa.me/254142021359';

const TITLE = 'High-Converting Websites in Nairobi from KES 55,000';
const DESCRIPTION =
  'Fast, SEO-ready business websites built in Next.js for Kenyan companies. Fixed-price quote, 4–8 week delivery, M-Pesa add-ons. From KES 55,000.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
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

/* ====================== CONTENT ====================== */

// Build targets, not measured results. Replace with real Lighthouse numbers
// (and the date and URL they were measured on) once you have them.
const targets = [
  { label: 'Performance', icon: Gauge },
  { label: 'SEO', icon: Search },
  { label: 'Accessibility', icon: Accessibility },
  { label: 'Best Practices', icon: ShieldCheck },
];

const benefits = [
  { icon: Target, title: 'Conversion Focused', desc: 'Clear layouts, strong calls to action, and trust elements designed to guide visitors toward contacting you.' },
  { icon: Zap, title: 'Built for Speed', desc: 'Next.js with statically generated pages, built to pass Core Web Vitals.' },
  { icon: Globe, title: 'Local SEO Built In', desc: 'Set up for Nairobi and Kenya searches: local schema, fast pages, and a content structure Google can read.' },
  { icon: Users, title: 'Mobile-First', desc: 'Designed for how Kenyans browse: fast on 3G/4G connections and budget smartphones.' },
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
  { num: '03', title: 'Development & Optimization', desc: 'Clean, statically generated code with SEO and performance built in. M-Pesa payments available as an add-on.' },
  { num: '04', title: 'Launch, Analytics & Growth', desc: 'Testing, launch, training, and handover, with search and analytics set up from day one.' },
];

const included = [
  'Modern, conversion-focused design',
  'Statically generated Next.js performance',
  'Mobile-first and fully responsive',
  'Technical and on-page SEO (metadata, sitemap, schema)',
  'Lead capture forms, click-to-call, and WhatsApp buttons',
  'Google Analytics 4 and conversion tracking',
  'Search Console setup and sitemap submission',
  'SSL security and hosting setup',
  'Full training and handover',
  'A support window after launch',
];

const priceFactors = [
  'Number of pages and amount of content',
  'Custom features such as booking, calculators, or dashboards',
  'Integrations (M-Pesa, CRM, email)',
  'Copywriting, photography, and branding work',
];

const faqs = [
  {
    q: 'How much does a website cost in Kenya?',
    a: 'High-converting business websites at Daleon Dynamics start from KES 55,000. The final price depends on the number of pages, custom features, and integrations, and you receive a fixed-price quote before any work begins.',
  },
  {
    q: 'How long does it take to build a high-converting website?',
    a: 'Standard projects take 4–8 weeks. More complex sites with custom integrations take 10–14 weeks. You get a clear timeline before work starts.',
  },
  {
    q: 'Do you provide SEO services?',
    a: 'Yes. Every website includes technical and on-page SEO and a local Kenya-focused setup. SEO results take time, as explained in the timeline above.',
  },
  {
    q: 'How soon will my website rank on Google?',
    a: "Honestly, not overnight. Expect indexing within the first couple of weeks, early evaluation over the following months, and meaningful ranking movement typically from month 3 onward. Anyone promising page-one rankings in days isn't being straight with you.",
  },
  {
    q: 'Will my site be mobile-friendly?',
    a: 'Yes. We build mobile-first. Most Kenyans browse on mobile, so we optimize for excellent performance on all devices.',
  },
  {
    q: 'Why is my site static instead of having a traditional server?',
    a: 'A static site is pre-built into plain HTML and served from edge locations worldwide, with no server assembling each page per visitor. That means fast load times, strong reliability, and content that is immediately readable by Google, which helps both conversions and SEO.',
  },
  {
    q: 'Can my website accept M-Pesa payments?',
    a: "Yes, as an add-on. A static site has no backend of its own, so payments run through secure server-side functions or a payment link. Tell us what you need and we'll scope it in your quote.",
  },
  {
    q: 'Do you build websites with WordPress?',
    a: 'We primarily build with Next.js, TypeScript, and Tailwind CSS for fast, scalable, SEO-friendly sites. On request, we can also work with WordPress or other platforms depending on the project.',
  },
  {
    q: 'Do you offer ongoing maintenance?',
    a: 'Yes. Every project includes a support window, and monthly maintenance retainers are available to keep your website secure, fast, and up to date.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE_URL}${PAGE_PATH}#service`,
      name: 'High-converting website development in Nairobi',
      serviceType: 'Web design and development',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: { '@type': 'Country', name: 'Kenya' },
      description:
        'SEO-ready, high-converting business websites for Kenyan companies, built with Next.js.',
      url: `${SITE_URL}${PAGE_PATH}`,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'KES',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'KES',
          minPrice: 55000,
        },
        url: `${SITE_URL}${PAGE_PATH}`,
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'High-Converting Websites', item: `${SITE_URL}${PAGE_PATH}` },
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

/* ====================== PAGE ====================== */

const HighConvertingWebsitePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F2F1F7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="pt-28 pb-24 px-6 border-b border-[#232330]">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8 font-mono text-xs text-[#8E8CA3]">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-[#38E1C6]">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-[#38E1C6]">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#F2F1F7]">High-Converting Websites</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-sm text-[#7B5CFF] mb-8">
                <span>{'//'}</span>
                <span>conversion-engineering</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                High-Converting Websites in Nairobi,{' '}
                <span className="bg-gradient-to-r from-[#7B5CFF] to-[#38E1C6] bg-clip-text text-transparent">
                  Engineered to Actually Convert
                </span>
              </h1>

              <p className="text-lg text-[#8E8CA3] max-w-xl mb-6 leading-relaxed">
                We don&apos;t build pretty websites. We build fast, search-ready business websites that
                attract the right traffic, build trust quickly, and turn visitors into enquiries and
                customers in the Kenyan market.
              </p>

              <p className="mb-10 font-mono text-sm text-[#38E1C6]">
                From KES 55,000 · Fixed-price quote · 4–8 weeks typical delivery
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 bg-[#7B5CFF] hover:bg-[#8E73FF] text-white px-8 py-4 rounded-lg font-semibold transition-all active:scale-95"
                >
                  Get Your Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                </Link>
                <Link
                  href="#process"
                  className="inline-flex items-center justify-center gap-3 border border-[#232330] hover:border-[#38E1C6] hover:text-[#38E1C6] px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  See Our Process
                </Link>
              </div>
            </div>

            {/* Performance targets panel */}
            <div className="rounded-2xl border border-[#232330] bg-[#0F141B] overflow-hidden shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#232330] bg-[#131A22]">
                <span className="font-mono text-xs text-[#8E8CA3]">performance-targets.json</span>
                <span className="font-mono text-xs text-[#38E1C6]">lighthouse · mobile</span>
              </div>
              <div className="grid grid-cols-2 gap-6 p-8">
                {targets.map((t) => {
                  const Icon = t.icon;
                  return (
                    <div key={t.label} className="flex flex-col items-center text-center">
                      <div
                        className="relative w-20 h-20 rounded-full flex items-center justify-center mb-3"
                        style={{ background: 'conic-gradient(#38E1C6 324deg, #232330 0deg)' }}
                      >
                        <div className="w-16 h-16 rounded-full bg-[#0F141B] flex items-center justify-center font-mono font-bold text-lg">
                          90+
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#8E8CA3] text-xs font-mono">
                        <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                        {t.label}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="px-8 pb-6 font-mono text-[11px] text-[#8E8CA3]">
                {'// the scores we build to on every site'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEFINITION */}
      <section className="py-20 px-6 border-b border-[#232330]">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-sm text-[#7B5CFF] mb-6">{'// definition'}</div>
          <div className="border-l-2 border-[#7B5CFF] pl-6 md:pl-10">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              What Is a High-Converting Website, Exactly?
            </h2>
            <p className="text-lg text-[#C7C5D6] leading-relaxed mb-4">
              A <strong className="text-[#F2F1F7]">high-converting website</strong> is a website engineered to
              turn visitors into paying customers, not just a site that looks good. It combines three things
              most agencies treat separately: persuasive design that guides a visitor toward action, technical
              performance fast enough that visitors don&apos;t leave before it loads, and search visibility
              that gets the right people to the site in the first place.
            </p>
            <p className="text-lg text-[#C7C5D6] leading-relaxed">
              This is deliberately a different kind of build from a{' '}
              <Link href="/services/custom-web-apps" className="text-[#7B5CFF] hover:text-[#8E73FF] underline underline-offset-4">
                custom web application
              </Link>
              . A high-converting website doesn&apos;t need user logins, databases, or backend logic. It
              needs to be fast, findable, and convincing. That simplicity is what makes it possible to build
              one this quickly and this affordably, without cutting corners on quality.
            </p>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="py-20 px-6 border-b border-[#232330]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// built-different'}</div>
            <h2 className="text-3xl font-bold tracking-tight mb-3">No Traditional Server. On Purpose.</h2>
            <p className="text-lg text-[#8E8CA3] max-w-2xl">
              We build these sites <strong className="text-[#F2F1F7]">statically</strong> using Next.js. The
              entire site is pre-built into plain HTML ahead of time, not assembled on the fly for every
              visitor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0F141B] border border-[#232330] rounded-xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <Server className="w-5 h-5 text-[#8E8CA3]" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#8E8CA3]">Typical dynamic website</span>
              </div>
              <div className="space-y-3 font-mono text-sm text-[#8E8CA3]">
                <div>1. Visitor requests page</div>
                <div>2. Server runs code</div>
                <div>3. Server queries a database</div>
                <div>4. Page is assembled</div>
                <div>5. Response is sent</div>
              </div>
              <div className="mt-6 inline-block font-mono text-xs bg-[#232330] text-[#8E8CA3] px-3 py-1.5 rounded-full">
                speed depends on hosting and caching
              </div>
            </div>

            <div className="bg-[#0F141B] border border-[#7B5CFF]/40 rounded-xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-[#38E1C6]" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#38E1C6]">Our static sites</span>
              </div>
              <div className="space-y-3 font-mono text-sm text-[#F2F1F7]">
                <div>1. Site is pre-built before launch</div>
                <div>2. Finished HTML sits on a global edge network</div>
                <div>3. Visitor requests page</div>
                <div>4. Nearest edge location responds</div>
              </div>
              <div className="mt-6 inline-block font-mono text-xs bg-[#38E1C6]/10 text-[#38E1C6] px-3 py-1.5 rounded-full">
                very fast, and easy for Google to crawl
              </div>
            </div>
          </div>

          <p className="text-[#8E8CA3] mt-8 max-w-3xl leading-relaxed">
            This matters for two reasons at once: visitors get a page that loads before they lose patience,
            and Google gets fully formed HTML that is easy to read and crawl.
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
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-[#0F141B] p-8 rounded-xl border border-[#232330] hover:border-[#7B5CFF] transition-all group"
                >
                  <Icon className="w-8 h-8 text-[#38E1C6] mb-6 group-hover:scale-110 transition" aria-hidden="true" />
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
              If someone promises page-one Google rankings within days of launch, that&apos;s not realistic,
              for any website on any budget. SEO is a gradual process, especially for a brand-new site still
              building trust. Here&apos;s what actually happens.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {seoTimeline.map((item, i) => (
              <div key={item.stage} className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-[#7B5CFF]" aria-hidden="true" />
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
            <h2 className="text-4xl font-bold tracking-tight">Our Website Development Process</h2>
          </div>
          <ol className="grid md:grid-cols-4 gap-8">
            {process.map((step) => (
              <li key={step.num}>
                <div className="w-14 h-14 bg-[#0F141B] border border-[#232330] text-[#7B5CFF] rounded-xl flex items-center justify-center text-xl font-mono font-bold mb-6">
                  {step.num}
                </div>
                <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-[#8E8CA3] text-sm leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// whats-included'}</div>
            <h2 className="text-4xl font-bold tracking-tight">What&apos;s Included</h2>
          </div>
          <ul className="grid md:grid-cols-2 gap-5">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#F2F1F7]">
                <CheckCircle className="w-5 h-5 text-[#38E1C6] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// pricing'}</div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Website Design Pricing in Kenya</h2>
          <p className="font-mono text-3xl font-bold text-[#38E1C6] mb-4">Starting from KES 55,000</p>
          <p className="text-[#8E8CA3] mb-8 max-w-xl mx-auto">
            This is the starting price for a professional high-converting business website. You get a
            fixed-price quote before any work begins.
          </p>

          <div className="mx-auto mb-10 max-w-md rounded-xl border border-[#232330] bg-[#0F141B] p-6 text-left">
            <p className="mb-3 font-semibold">What affects the final price</p>
            <ul className="space-y-2 text-sm text-[#8E8CA3]">
              {priceFactors.map((f) => (
                <li key={f} className="flex gap-3">
                  <CheckCircle className="w-4 h-4 text-[#38E1C6] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#7B5CFF] hover:bg-[#8E73FF] text-white px-8 py-4 rounded-lg font-semibold transition-all active:scale-95"
          >
            Get Your Personalized Quote
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-3xl mx-auto">
          <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// faq'}</div>
          <h2 className="text-4xl font-bold tracking-tight mb-12">
            Website Design in Nairobi: Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-[#0F141B] border border-[#232330] rounded-xl p-6 group open:border-[#38E1C6]"
              >
                <summary className="font-medium text-lg cursor-pointer flex justify-between items-start gap-4 list-none">
                  {faq.q}
                  <span className="text-[#38E1C6] group-open:rotate-45 transition flex-shrink-0" aria-hidden="true">+</span>
                </summary>
                <p className="mt-4 text-[#8E8CA3] leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready for a website that brings in customers?
          </h2>
          <p className="text-[#8E8CA3] mb-10">
            Tell us about your business and we&apos;ll send a fixed-price quote and timeline. You can also
            see our{' '}
            <Link href="/projects" className="text-[#38E1C6] hover:underline">
              client work
            </Link>{' '}
            or explore{' '}
            <Link href="/services/custom-web-apps" className="text-[#38E1C6] hover:underline">
              custom web apps
            </Link>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-[#7B5CFF] hover:bg-[#8E73FF] text-white px-8 py-4 rounded-lg font-semibold transition-all active:scale-95"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-[#232330] hover:border-[#38E1C6] hover:text-[#38E1C6] px-8 py-4 rounded-lg font-semibold transition-all"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HighConvertingWebsitePage;