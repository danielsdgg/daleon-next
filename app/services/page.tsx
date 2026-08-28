// app/services/page.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Code2, Globe, ShieldCheck, Terminal, Zap } from 'lucide-react';
import type { Metadata } from 'next';
import SectionLabel from '@/src/components/ui/SectionLabel';
import TerminalWindow from '@/src/components/ui/TerminalWindow';
import CodeSnippet from '@/src/components/ui/CodeSnippet';
import Reveal from '@/src/components/ui/motion/Reveal';
import Stagger from '@/src/components/ui/motion/Stagger';

export const metadata: Metadata = {
  title: { absolute: 'Websites & Software Development | Daleon Dynamics' },
  description:
    'Nairobi-based web design and custom software agency. High-converting websites, business automation, M-Pesa integrations, and biometric access control systems for Kenyan businesses.',
  alternates: { canonical: 'https://daleondynamics.com/services' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    title: { absolute: 'Web Design & Custom Software Development in Nairobi' },
    description:
      'End-to-end digital solutions for Kenyan businesses — websites, custom software, automation, and access control.',
    url: 'https://daleondynamics.com/services',
    siteName: 'Daleon Dynamics',
    images: [
      {
        url: 'https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png',
        width: 1200,
        height: 630,
        alt: 'Daleon Dynamics — Web Design & Custom Software Nairobi',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: { absolute: 'Web Design & Custom Software Development in Nairobi' },
    description: 'High-converting websites, custom software, and business automation for Kenyan businesses.',
    images: ['https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png'],
  },
};

const coreServices = [
  {
    icon: Globe,
    tag: 'frontend',
    title: 'High-Converting Websites',
    desc: 'Fast, beautiful, SEO-optimized websites engineered to generate leads and sales.',
    link: '/services/high-converting-website',
  },
  {
    icon: Code2,
    tag: 'fullstack',
    title: 'Custom Web Applications',
    desc: 'Bespoke CRMs, ERPs, dashboards, and automation platforms built exactly to your needs.',
    link: '/services/custom-web-apps',
  },
  {
    icon: ShieldCheck,
    tag: 'security',
    title: 'Access Control Systems',
    desc: 'Biometric, cloud-based security solutions for offices, estates, and institutions.',
    link: '/contact',
  },
];

const pricingTiers = [
  {
    name: 'High Converting Website',
    price: 'KES 60,000',
    priceNote: 'starting',
    desc: 'Perfect for small businesses and professionals',
    features: [
      'Modern responsive website (up to 8 pages)',
      'Mobile-first design',
      'Advanced SEO',
      'Contact form & basic integrations',
      '1 month support',
    ],
  },
  {
    name: 'Custom Web App Package',
    price: 'KES 200,000',
    priceNote: 'starting',
    desc: 'Most popular for growing Kenyan businesses',
    features: [
      'Custom design & user authentication',
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
      'Custom web applications',
      'Biometric systems',
      'Full automation',
      'Dedicated support',
      'Ongoing maintenance',
    ],
  },
];

const signatureSnippet = [
  { tokens: [{ text: 'const ', tone: 'keyword' as const }, { text: 'solution ', tone: 'plain' as const }, { text: '= ', tone: 'muted' as const }, { text: 'new ', tone: 'keyword' as const }, { text: 'DaleonDynamics', tone: 'ident' as const }, { text: '({', tone: 'muted' as const }] },
  { tokens: [{ text: '  services: ', tone: 'muted' as const }, { text: '[', tone: 'ident' as const }] },
  { tokens: [{ text: "    'web-design',", tone: 'plain' as const }] },
  { tokens: [{ text: "    'custom-software',", tone: 'plain' as const }] },
  { tokens: [{ text: "    'automation',", tone: 'plain' as const }] },
  { tokens: [{ text: "    'access-control'", tone: 'plain' as const }] },
  { tokens: [{ text: '  ', tone: 'plain' as const }, { text: ']', tone: 'ident' as const }, { text: ',', tone: 'muted' as const }] },
  { tokens: [{ text: '  location: ', tone: 'muted' as const }, { text: "'Nairobi, KE',", tone: 'plain' as const }] },
  { tokens: [{ text: '  status: ', tone: 'muted' as const }, { text: "'shipping'", tone: 'plain' as const }] },
  { tokens: [{ text: '});', tone: 'muted' as const }] },
  { tokens: [{ text: '', tone: 'plain' as const }] },
  { tokens: [{ text: '// ready when you are', tone: 'muted' as const }] },
];

const faqs = [
  {
    q: 'How much does a professional website cost in Nairobi?',
    a: 'Starter professional websites start from KES 60,000. Growth packages (with advanced features and SEO optimization) typically range from KES 200,000. Complex custom software is quoted after discovery.',
  },
  {
    q: 'Do you integrate M-Pesa and other payment gateways?',
    a: 'Yes. We specialize in secure Daraja API integration, card payments, and bank transfers for Kenyan businesses.',
  },
  {
    q: 'How long does it take to complete a project?',
    a: 'Standard websites take 4–8 weeks. Custom web applications take 12–20 weeks depending on scope. Enterprise systems vary based on complexity.',
  },
  {
    q: 'Do you provide ongoing support and maintenance?',
    a: 'Yes. We offer monthly maintenance and support retainers to keep your website or system secure, fast, and up-to-date.',
  },
  {
    q: 'Will I own the website and source code?',
    a: 'You will own your website and receive full cPanel access once the project is completed and paid for. The source code, built with Next.js, is not included but can be purchased separately if needed.',
  },
  {
    q: 'Can you build systems for businesses outside Nairobi?',
    a: 'Absolutely. We work with clients across Kenya and remotely where the project allows.',
  },
];

const ServicesPage: React.FC = () => {
  // No physical office — omit address/geo entirely rather than fabricate one.
  // areaServed communicates coverage without implying a storefront location.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Daleon Dynamics',
    image: 'https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png',
    '@id': 'https://daleondynamics.com/services',
    url: 'https://daleondynamics.com/services',
    telephone: '+254142021359',
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'Kenya',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web & Software Services',
      itemListElement: [
        {
          '@type': 'Offer',
          price: '60000',
          priceCurrency: 'KES',
          itemOffered: { '@type': 'Service', name: 'High Converting Website' },
        },
        {
          '@type': 'Offer',
          price: '200000',
          priceCurrency: 'KES',
          itemOffered: { '@type': 'Service', name: 'Custom Web Application' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Business Automation' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Access Control Systems' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'M-Pesa Integration' },
        },
      ],
    },
    sameAs: [
      'https://www.facebook.com/daleondynamics',
      'https://x.com/daleondynamics',
      'https://linkedin.com/company/daleon-dynamics',
      'https://instagram.com/daleondynamics',
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://daleondynamics.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://daleondynamics.com/services' },
    ],
  };

  return (
    <main className="min-h-screen bg-canvas text-ink">
      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 border-b border-line">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <SectionLabel label="nairobi-based software company" className="mb-6" />
            <h1 className="font-mono text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              Web Design &amp; Custom Software Development in Nairobi
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed mb-10 max-w-lg">
              Software engineering for Kenyan growth — high-converting websites, custom systems, and secure
              access control, built to global standards for the local market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-semibold transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                Start Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-3 border border-line hover:border-accent hover:text-accent px-8 py-4 rounded-lg font-semibold transition-all font-mono text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                explore_services()
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <TerminalWindow>
              <CodeSnippet lines={signatureSnippet} showCursor />
            </TerminalWindow>
          </Reveal>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section id="services" className="py-24 px-6 border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-16">
            <SectionLabel label="core-services" />
            <h2 className="text-4xl font-bold tracking-tight">What we build</h2>
            <p className="text-lg text-ink-muted mt-3">Built for the Kenyan market, engineered to global standards.</p>
          </Reveal>

          <Stagger className="grid lg:grid-cols-3 gap-6" step={0.08}>
            {coreServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="group bg-surface border border-line rounded-xl p-8 hover:border-primary transition-all"
                >
                  <div className="flex items-center justify-between mb-6">
                    <Icon className="w-8 h-8 text-accent" />
                    <span className="font-mono text-xs text-ink-dim">{service.tag}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-ink-muted mb-8 leading-relaxed">{service.desc}</p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-primary font-mono text-sm font-medium group-hover:gap-3 transition-all"
                  >
                    learn_more() <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6 border-b border-line">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-16">
            <SectionLabel label="pricing" />
            <h2 className="text-4xl font-bold tracking-tight">Transparent pricing</h2>
            <p className="text-lg text-ink-muted mt-3">Realistic starting points for typical projects in Kenya.</p>
          </Reveal>

          <Stagger className="grid md:grid-cols-3 gap-6" step={0.08}>
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`bg-surface border rounded-xl p-8 transition-all flex flex-col ${
                  tier.popular ? 'border-primary' : 'border-line hover:border-accent'
                }`}
              >
                {tier.popular && (
                  <div className="font-mono text-xs text-primary mb-4">{'// most popular'}</div>
                )}
                <h3 className="text-lg font-semibold mb-1">{tier.name}</h3>
                <div className="font-mono text-2xl font-bold mb-1">{tier.price}</div>
                {tier.priceNote && <div className="text-xs text-ink-dim mb-4">{tier.priceNote}</div>}
                {!tier.priceNote && <div className="mb-4" />}
                <p className="text-ink-muted text-sm mb-6">{tier.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-ink/90">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-lg font-semibold text-sm transition-all ${
                    tier.popular
                      ? 'bg-primary text-white hover:bg-primary-hover'
                      : 'border border-line hover:border-accent hover:text-accent'
                  }`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-b border-line">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <SectionLabel label="faq" />
            <h2 className="text-4xl font-bold tracking-tight mb-12">Common questions</h2>
          </Reveal>

          <Stagger className="space-y-4" step={0.06}>
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-surface border border-line rounded-xl p-6 group open:border-accent"
              >
                <summary className="font-mono font-medium cursor-pointer flex justify-between items-start gap-4 list-none">
                  <span className="flex gap-3">
                    <span className="text-primary select-none">{'>'}</span>
                    {faq.q}
                  </span>
                  <span className="text-accent group-open:rotate-45 transition flex-shrink-0">+</span>
                </summary>
                <p className="mt-4 pl-6 text-ink-muted leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 text-center">
        <Reveal className="max-w-2xl mx-auto">
          <Zap className="w-8 h-8 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold tracking-tight mb-4">Ready to build something exceptional?</h2>
          <p className="text-lg text-ink-muted mb-10">
            Let&apos;s discuss your project and create technology that drives real growth.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-semibold transition-all active:scale-95"
          >
            <Terminal className="w-5 h-5" />
            Book a Free Discovery Call
          </Link>
        </Reveal>
      </section>
    </main>
  );
};

export default ServicesPage;