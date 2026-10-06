// app/services/page.tsx

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  Code2,
  Globe,
  MessageCircle,
  Terminal,
} from 'lucide-react';
import type { Metadata } from 'next';

const SITE_URL = 'https://daleondynamics.com';
const PAGE_PATH = '/services';
const WHATSAPP_URL = 'https://wa.me/254142021359';

const TITLE = 'Web Design & Custom Software Services in Nairobi';
const DESCRIPTION =
  'Websites from KES 55,000 and custom web apps from KES 200,000. Nairobi web design and software development with M-Pesa integration and fixed-price quotes.';

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

/* ====================== CONTENT ====================== */

const coreServices = [
  {
    icon: Globe,
    tag: 'frontend',
    title: 'High-Converting Websites',
    short: 'high-converting websites',
    price: 'From KES 55,000',
    desc: 'Fast, SEO-ready business websites engineered to generate enquiries and sales.',
    link: '/services/high-converting-website',
  },
  {
    icon: Code2,
    tag: 'fullstack',
    title: 'Custom Web Applications',
    short: 'custom web applications',
    price: 'From KES 200,000',
    desc: 'Custom CRMs, dashboards, internal tools, and automation platforms built around your exact process.',
    link: '/services/custom-web-apps',
  },
];

const guide = [
  {
    heading: 'Choose a website if you need…',
    points: [
      'More customers finding you on Google',
      'A professional online presence that builds trust',
      'Enquiries through forms, calls, and WhatsApp',
      'No logins, databases, or complex back-end logic',
    ],
    cta: 'See high-converting websites',
    link: '/services/high-converting-website',
  },
  {
    heading: 'Choose a web app if you need…',
    points: [
      'Staff or customers to log in and use a system',
      'To replace spreadsheets and manual processes',
      'Dashboards, approvals, invoicing, or automation',
      'Integrations such as M-Pesa, accounting, or a CRM',
    ],
    cta: 'See custom web apps',
    link: '/services/custom-web-apps',
  },
];

const pricingTiers = [
  {
    name: 'High-Converting Website',
    price: 'KES 55,000',
    priceNote: 'starting',
    desc: 'Perfect for small businesses and professionals',
    features: [
      'Modern responsive website (up to 8 pages)',
      'Mobile-first design',
      'Technical and on-page SEO',
      'Contact form and basic integrations',
      '1 month support',
    ],
  },
  {
    name: 'Custom Web App',
    price: 'KES 200,000',
    priceNote: 'starting',
    desc: 'For growing businesses that need a system, not just a site',
    features: [
      'Custom design and user authentication',
      'Advanced website or light web application',
      'SEO',
      'Payment integration (M-Pesa)',
      'Admin dashboard',
      '2 months support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom Quote',
    priceNote: null,
    desc: 'For complex systems and large organizations',
    features: [
      'Multi-module custom web applications',
      'Complex integrations',
      'Full workflow automation',
      'Dedicated support',
      'Ongoing maintenance',
    ],
  },
];

const faqs = [
  {
    q: 'How much does a professional website cost in Nairobi?',
    a: 'At Daleon Dynamics, high-converting business websites start from KES 55,000, and custom web applications start from KES 200,000. Larger systems with several modules or complex integrations are quoted after discovery, and you receive a fixed-price quote before any work begins.',
  },
  {
    q: 'Should I get a website or a custom web app?',
    a: 'If you mainly want customers to find you and contact you, a website is the right choice. If staff or customers need to log in, or you want to replace spreadsheets and manual processes with a system, you need a custom web app. We will recommend the simpler option when it covers your needs.',
  },
  {
    q: 'Do you integrate M-Pesa and other payment gateways?',
    a: 'Yes. We build secure Daraja API integrations, along with card payments and bank transfer flows for Kenyan businesses. M-Pesa is included in our custom web app packages and available as an add-on for websites.',
  },
  {
    q: 'How long does it take to complete a project?',
    a: 'Standard websites take 4–8 weeks. Custom web applications take 12–20 weeks depending on scope. Enterprise systems vary based on complexity. You get a clear timeline before work starts.',
  },
  {
    q: 'Do you provide ongoing support and maintenance?',
    a: 'Yes. Every project includes a support window, and monthly maintenance retainers are available afterward to keep your website or system secure, fast, and up to date.',
  },
  {
    q: 'Will I own the website and the source code?',
    a: 'You own the finished product and receive hosting access once the project is completed and paid for. Complete source code transfer is available as an optional add-on, priced separately, and terms are confirmed in writing before the project starts.',
  },
  {
    q: 'Can you build for businesses outside Nairobi?',
    a: 'Yes. We work with clients across Kenya, and remotely where the project allows.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}${PAGE_PATH}#page`,
      url: `${SITE_URL}${PAGE_PATH}`,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'High-Converting Websites',
            url: `${SITE_URL}/services/high-converting-website`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Custom Web Applications',
            url: `${SITE_URL}/services/custom-web-apps`,
          },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}${PAGE_PATH}` },
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

const ServicesPage: React.FC = () => {
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
              <li aria-current="page" className="text-[#F2F1F7]">Services</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-sm text-[#7B5CFF] mb-6">
                <span>{'//'}</span>
                <span>nairobi-based software company</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
                Web Design &amp; Custom Software Development in Nairobi
              </h1>
              <p className="text-lg text-[#8E8CA3] leading-relaxed mb-4 max-w-lg">
                High-converting websites and custom business systems for Kenyan companies, with M-Pesa
                integration and fixed-price quotes.
              </p>
              <p className="mb-10 font-mono text-sm text-[#38E1C6]">
                Websites from KES 55,000 · Web apps from KES 200,000
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 bg-[#7B5CFF] hover:bg-[#8E73FF] text-white px-8 py-4 rounded-lg font-semibold transition-all active:scale-95"
                >
                  Start Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center gap-3 border border-[#232330] hover:border-[#38E1C6] hover:text-[#38E1C6] px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Terminal signature element (decorative) */}
            <div
              aria-hidden="true"
              className="rounded-xl border border-[#232330] bg-[#0F141B] overflow-hidden shadow-2xl shadow-black/40"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#232330] bg-[#131A22]">
                <span className="w-3 h-3 rounded-full bg-[#7B5CFF]" />
                <span className="w-3 h-3 rounded-full bg-[#38E1C6]" />
                <span className="w-3 h-3 rounded-full bg-[#3A4553]" />
                <span className="ml-3 font-mono text-xs text-[#8E8CA3]">daleondynamics — zsh</span>
              </div>
              <pre className="font-mono text-sm leading-relaxed p-6 overflow-x-auto">
                <code>
                  <span className="text-[#38E1C6]">const</span>{' '}
                  <span className="text-[#F2F1F7]">solution</span>{' '}
                  <span className="text-[#8E8CA3]">=</span> <span className="text-[#38E1C6]">new</span>{' '}
                  <span className="text-[#7B5CFF]">DaleonDynamics</span>
                  <span className="text-[#8E8CA3]">{'({'}</span>
                  {'\n'}
                  {'  '}
                  <span className="text-[#8E8CA3]">services:</span> <span className="text-[#7B5CFF]">[</span>
                  {'\n'}
                  {"    '"}
                  <span className="text-[#F2F1F7]">web-design</span>
                  {"',\n    '"}
                  <span className="text-[#F2F1F7]">custom-software</span>
                  {"',\n    '"}
                  <span className="text-[#F2F1F7]">automation</span>
                  {"'\n  "}
                  <span className="text-[#7B5CFF]">]</span>
                  <span className="text-[#8E8CA3]">,</span>
                  {'\n  '}
                  <span className="text-[#8E8CA3]">location:</span> {"'"}
                  <span className="text-[#F2F1F7]">Nairobi, KE</span>
                  {"',\n  "}
                  <span className="text-[#8E8CA3]">status:</span> {"'"}
                  <span className="text-[#F2F1F7]">accepting-projects</span>
                  {"'\n"}
                  <span className="text-[#8E8CA3]">{'});'}</span>
                  {'\n\n'}
                  <span className="text-[#8E8CA3]">{'// ready when you are'}</span>
                  <span className="inline-block w-2 h-4 bg-[#38E1C6] ml-1 animate-pulse align-middle" />
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section id="services" className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// core-services'}</div>
            <h2 className="text-4xl font-bold tracking-tight">Website and software development services</h2>
            <p className="text-lg text-[#8E8CA3] mt-3">
              Built for the Kenyan market, with clear starting prices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group bg-[#0F141B] border border-[#232330] rounded-xl p-8 hover:border-[#7B5CFF] transition-all flex flex-col"
                >
                  <div className="flex items-center justify-between mb-6">
                    <Icon className="w-8 h-8 text-[#38E1C6]" aria-hidden="true" />
                    <span className="font-mono text-xs text-[#8E8CA3]">{service.tag}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="font-mono text-sm text-[#38E1C6] mb-4">{service.price}</p>
                  <p className="text-[#8E8CA3] mb-8 leading-relaxed flex-1">{service.desc}</p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-[#7B5CFF] hover:text-[#8E73FF] text-sm font-semibold group-hover:gap-3 transition-all"
                  >
                    Explore {service.short} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHICH ONE DO YOU NEED */}
      <section className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// which-one'}</div>
            <h2 className="text-4xl font-bold tracking-tight mb-3">Website or web app: which do you need?</h2>
            <p className="text-lg text-[#8E8CA3]">
              Many businesses need only the first. We will tell you honestly if the simpler option covers
              your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {guide.map((g) => (
              <div key={g.heading} className="rounded-xl border border-[#232330] bg-[#0F141B] p-8">
                <h3 className="text-xl font-semibold mb-5">{g.heading}</h3>
                <ul className="space-y-3 mb-8">
                  {g.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-[#C7C5D6]">
                      <CheckCircle className="w-4 h-4 text-[#38E1C6] mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={g.link}
                  className="inline-flex items-center gap-2 text-[#38E1C6] text-sm font-semibold hover:underline"
                >
                  {g.cta} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// pricing'}</div>
            <h2 className="text-4xl font-bold tracking-tight">Website and software pricing in Kenya</h2>
            <p className="text-lg text-[#8E8CA3] mt-3">
              Clear starting points. You receive a fixed-price quote before any work begins.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-[#0F141B] border rounded-xl p-8 transition-all flex flex-col ${
                  tier.popular ? 'border-[#7B5CFF]' : 'border-[#232330] hover:border-[#38E1C6]'
                }`}
              >
                {tier.popular && (
                  <div className="font-mono text-xs text-[#7B5CFF] mb-4">{'// most popular'}</div>
                )}
                <h3 className="text-lg font-semibold mb-1">{tier.name}</h3>
                <div className="font-mono text-2xl font-bold mb-1">{tier.price}</div>
                {tier.priceNote ? (
                  <div className="text-xs text-[#8E8CA3] mb-4">{tier.priceNote}</div>
                ) : (
                  <div className="mb-4" />
                )}
                <p className="text-[#8E8CA3] text-sm mb-6">{tier.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-[#F2F1F7]/90">
                      <CheckCircle className="w-4 h-4 text-[#38E1C6] mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-lg font-semibold text-sm transition-all ${
                    tier.popular
                      ? 'bg-[#7B5CFF] text-white hover:bg-[#8E73FF]'
                      : 'border border-[#232330] hover:border-[#38E1C6] hover:text-[#38E1C6]'
                  }`}
                >
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-3xl mx-auto">
          <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// faq'}</div>
          <h2 className="text-4xl font-bold tracking-tight mb-12">
            Web design and software in Nairobi: common questions
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
          <h2 className="text-4xl font-bold tracking-tight mb-4">Ready to talk about your project?</h2>
          <p className="text-lg text-[#8E8CA3] mb-10">
            Tell us what you need and we&apos;ll send a fixed-price quote and timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#7B5CFF] hover:bg-[#8E73FF] text-white px-8 py-4 rounded-lg font-semibold transition-all active:scale-95"
            >
              <Terminal className="w-5 h-5" aria-hidden="true" />
              Book a Free Discovery Call
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-[#232330] hover:border-[#38E1C6] hover:text-[#38E1C6] px-8 py-4 rounded-lg font-semibold transition-all"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;