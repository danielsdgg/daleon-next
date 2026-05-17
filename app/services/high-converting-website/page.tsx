// app/services/high-converting-website/page.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Info } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'High-Converting Websites | Daleon Dynamics',
  description:
    'High-converting websites in Nairobi, Kenya — fast, SEO-optimized, mobile-first designs that turn visitors into customers. Built by Daleon Dynamics.',
  keywords: [
    'high converting websites kenya',
    'website design nairobi',
    'seo optimized websites kenya',
    'conversion rate optimization kenya',
    'landing page design kenya',
    'daleon dynamics web design'
  ],
  alternates: {
    canonical: 'https://daleondynamics.com/services/high-converting-website'
  },
  openGraph: {
    title: 'High-Converting Websites | Daleon Dynamics',
    description:
      'Beautiful, fast, and conversion-focused websites built for Kenyan businesses. SEO-first, mobile-first, and optimized for growth.',
    url: 'https://daleondynamics.com/services/high-converting-website',
    images: [
      {
        url: 'https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png',
        width: 1200,
        height: 630,
        alt: 'High-Converting Websites - Daleon Dynamics'
      }
    ],
    locale: 'en_KE',
    type: 'website'
  }
};

const features = [
  {
    title: 'Conversion-Focused Design',
    desc: 'Layouts and user journeys designed to reduce friction and increase leads, with clear CTAs and trust signals.'
  },
  {
    title: 'SEO & Performance',
    desc: 'Semantic HTML, fast core web vitals, image optimization, and on-page SEO to help you rank and convert.'
  },
  {
    title: 'Mobile-First Experience',
    desc: 'Designs that prioritize mobile users and deliver fast, intuitive experiences on any device.'
  },
  {
    title: 'Analytics & A/B Testing',
    desc: 'Set up analytics, heatmaps, and A/B tests to continuously improve conversion rates.'
  },
  {
    title: 'Secure & Scalable',
    desc: 'Modern tech stack, secure hosting, and scalable architecture so your site grows with your business.'
  }
];

const faqs = [
  {
    q: 'How long does it take to build a high-converting website?',
    a: 'Typical timelines range from 6–9 weeks for normal sites and 10–12+ weeks for complex, conversion-optimized builds depending on scope and integrations.'
  },
  {
    q: 'Do you provide SEO and content support?',
    a: 'Yes — we include on-page SEO, technical SEO setup, and can provide content strategy and copywriting as an add-on.'
  },
  {
    q: 'Will my website be mobile-friendly?',
    a: 'Absolutely. Every site we build is mobile-first and tested across devices to ensure excellent user experience and performance.'
  }
];

const HighConvertingWebsitePage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'High-Converting Websites',
    provider: {
      '@type': 'Organization',
      name: 'Daleon Dynamics',
      url: 'https://daleondynamics.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Nairobi',
        addressCountry: 'Kenya'
      }
    },
    description:
      'High-converting websites: fast, SEO-optimized, mobile-first designs that turn visitors into customers.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'KES',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'KES',
        price: '80000',
        description: 'Typical starting price for a high-converting website (starter brochure site).'
      },
      url: 'https://daleondynamics.com/services/high-converting-website'
    }
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Structured data for crawlers */}
      <script
        key="service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        key="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section className="py-24 bg-gradient-to-br from-blue-100 via-white to-blue-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            High-Converting Websites
          </h1>

          <p className="text-lg text-zinc-700 max-w-3xl mx-auto mb-8">
            Beautiful, fast, and conversion-focused websites built to attract visitors, build trust, and turn traffic into customers.
            We combine design, performance, and SEO to deliver measurable results.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-3 border border-gray-800 px-6 py-3 rounded-2xl text-gray-700 hover:bg-gray-50 transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why our websites convert better</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-2xl">
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-700">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY HIGHLIGHT */}
      <section className="py-20 bg-zinc-950 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Real results for Kenyan businesses</h2>
          <p className="text-lg text-zinc-300 max-w-3xl mx-auto mb-8">
            Example: a recent redesign increased lead form submissions by 42% and improved page speed scores across devices.
          </p>

          <Link
            href="/projects"
            className="inline-flex items-center gap-3 bg-white text-zinc-900 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition"
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* DETAILED FEATURES & PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-4">What we include in a high-converting website</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Conversion-focused UX and landing pages tailored to your audience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Technical SEO: structured data, meta tags, sitemap, robots.txt</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Performance optimization: images, caching, and Core Web Vitals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Analytics setup and conversion tracking (Google Analytics / GA4)</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Our process (simple and effective)</h2>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li><strong>Discovery:</strong> goals, audience, and conversion targets.</li>
                <li><strong>Design:</strong> wireframes and high-fidelity mockups focused on conversion.</li>
                <li><strong>Build:</strong> fast, accessible, and SEO-friendly implementation (Next.js recommended).</li>
                <li><strong>Launch & Optimize:</strong> analytics, A/B tests, and iterative improvements.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SUMMARY */}
      <section className="py-20 bg-gradient-to-br from-blue-200 via-white to-blue-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Pricing — clear starting points</h2>
          <p className="text-gray-700 mb-6">
            Typical starting price for a high-converting starter website is from<strong> KES 80,000</strong>. Complex conversion funnels, integrations, or custom features will increase scope and cost.
          </p>

          <div className="inline-flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-6 py-4">
            <Info className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700">Prices are starting points. We provide a tailored quote after a short discovery call.</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="p-4 border border-gray-100 rounded-lg">
                <summary className="font-semibold cursor-pointer">{f.q}</summary>
                <p className="mt-3 text-gray-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HighConvertingWebsitePage;
