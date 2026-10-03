// app/services/custom-web-apps/page.tsx
import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  Zap,
  BarChart3,
  Users,
  Globe,
  MessageCircle,
} from 'lucide-react';
import type { Metadata } from 'next';

const SITE_URL = 'https://daleondynamics.com';
const PAGE_PATH = '/services/custom-web-apps';
const WHATSAPP_URL = 'https://wa.me/254142021359';

const TITLE = 'Custom Web App Development in Nairobi from KES 200,000';
const DESCRIPTION =
  'Custom web apps, CRMs, dashboards and business automation for Kenyan companies. M-Pesa integration, 12–20 week delivery. From KES 200,000.';

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

const benefits = [
  { icon: Zap, title: 'Business Automation', desc: 'Automate workflows, approvals, invoicing, and repetitive tasks to save time and reduce errors.' },
  { icon: BarChart3, title: 'Dashboards & Reporting', desc: 'Custom dashboards that give you clear visibility into how your business is performing.' },
  { icon: Users, title: 'Role-Based Access Control', desc: 'Secure user management with permissions tailored to different team members.' },
  { icon: Globe, title: 'Seamless Integrations', desc: 'M-Pesa, payment gateways, accounting tools, CRMs, and other systems you already use.' },
];

const systems = [
  { title: 'Custom CRMs', desc: 'Track leads, customers, and follow-ups the way your sales process actually works.' },
  { title: 'Inventory and operations systems', desc: 'Stock, orders, and day-to-day operations in one place.' },
  { title: 'Learning and training platforms', desc: 'Course management, student tracking, assessments, and parent or client portals.' },
  { title: 'Internal tools and dashboards', desc: 'Replace spreadsheets and scattered tools with one system your team can rely on.' },
  { title: 'Workflow automation', desc: 'Approvals, notifications, invoicing, and reporting that run without manual effort.' },
];

const processSteps = [
  { num: '01', title: 'Discovery & Planning', desc: 'A deep dive into your business processes, challenges, and goals.' },
  { num: '02', title: 'System Design', desc: 'Wireframes, database architecture, and technical specifications.' },
  { num: '03', title: 'Development', desc: 'Iterative development with regular demos, using modern technologies (Next.js, TypeScript, and more).' },
  { num: '04', title: 'Testing, Launch & Training', desc: 'Thorough testing, deployment, user training, and handover.' },
];

const whatsIncluded = [
  'Full requirements analysis and technical architecture',
  'Modern, responsive user interface (Next.js / TypeScript)',
  'Secure backend with robust database design',
  'User authentication and role-based permissions',
  'Custom dashboards and reporting',
  'M-Pesa and third-party integrations',
  'Comprehensive testing and quality assurance',
  'Deployment, user training, and hosting handover',
  'Post-launch support and maintenance options',
];

const growthPackage = [
  'Custom web application with user roles',
  'Admin dashboard and analytics',
  'M-Pesa and key integrations',
  'Secure authentication and data protection',
  'Responsive design across devices',
  'Training and 2 months of support',
];

const faqs = [
  {
    q: 'How much does custom software cost in Kenya?',
    a: 'At Daleon Dynamics, custom web applications start from KES 200,000. That covers a solid application with user authentication, dashboards, M-Pesa integration, an admin panel, and 2 months of support. Systems with several modules or complex integrations are priced after discovery, and you receive a fixed-price quote before development starts.',
  },
  {
    q: 'What does "From KES 200,000" include?',
    a: 'The starting price covers a custom web application with user authentication, dashboards, M-Pesa integration, an admin panel, and 2 months of support. Final pricing depends on complexity and is confirmed after discovery.',
  },
  {
    q: 'How long does it take to build a custom web app?',
    a: 'Most Growth-level projects take 12–20 weeks. Timelines depend on the number of modules, integrations, and data migration requirements.',
  },
  {
    q: 'Why choose custom software over off-the-shelf software?',
    a: 'Off-the-shelf tools are quicker to start with, but you adapt your process to them. Custom software is built around your exact workflows, integrates with the systems and payment methods you already use, and has no per-user licence fees. It makes sense when your process is a competitive advantage or when generic tools keep forcing workarounds.',
  },
  {
    q: 'Do you integrate with M-Pesa and other local services?',
    a: 'Yes. We build secure M-Pesa Daraja API integrations, along with other Kenyan payment, SMS, and business tools.',
  },
  {
    q: 'Do clients get the full source code?',
    a: 'Upon full payment, you receive ownership of the final working product and access to its hosting. Complete source code transfer is available as an optional add-on, priced separately. Terms are confirmed in writing before the project starts.',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes. The Growth package includes 2 months of support, and monthly maintenance retainers are available afterward to keep your system secure, fast, and up to date.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE_URL}${PAGE_PATH}#service`,
      name: 'Custom web application development in Nairobi',
      description:
        'Custom web applications, CRMs, business automation systems, and internal tools for Kenyan businesses.',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: { '@type': 'Country', name: 'Kenya' },
      serviceType: [
        'Custom software development',
        'Web application development',
        'Business automation',
      ],
      url: `${SITE_URL}${PAGE_PATH}`,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'KES',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'KES',
          minPrice: 200000,
        },
        description: 'Starting price for a custom web application',
        url: `${SITE_URL}${PAGE_PATH}`,
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'Custom Web Apps', item: `${SITE_URL}${PAGE_PATH}` },
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

const CustomWebAppsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F2F1F7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#232330] pt-28 pb-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:40px_40px]"
        />

        <div className="relative mx-auto max-w-6xl px-6">
          <nav aria-label="Breadcrumb" className="mb-10 font-mono text-xs text-[#8E8CA3]">
            <ol className="flex flex-wrap items-center justify-center gap-2">
              <li><Link href="/" className="hover:text-[#38E1C6]">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-[#38E1C6]">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#F2F1F7]">Custom Web Apps</li>
            </ol>
          </nav>

          <div className="text-center">
            <div className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-[#7B5CFF]">
              <span>{'//'}</span>
              <span>custom-software-solutions</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              Custom Web Applications &amp; Business Systems in{' '}
              <span className="text-[#7B5CFF]">Nairobi, Kenya</span>
            </h1>

            <p className="mx-auto mb-6 max-w-4xl text-lg text-[#8E8CA3] md:text-xl">
              We build scalable web apps, CRMs, automation tools, and internal systems that solve real
              business problems and drive efficiency for Kenyan companies.
            </p>

            <p className="mb-10 font-mono text-sm text-[#38E1C6]">
              From KES 200,000 · Scoped after discovery · 12–20 weeks typical delivery
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#7B5CFF] px-8 py-4 font-semibold text-white transition-all hover:bg-[#8E73FF] active:scale-95"
              >
                Start Your Custom Project <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="#process"
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-[#232330] px-8 py-4 font-semibold transition-all hover:border-[#38E1C6] hover:text-[#38E1C6]"
              >
                See Development Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-[#232330] px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-lg leading-relaxed text-[#8E8CA3]">
            Off-the-shelf software rarely fits Kenyan business realities perfectly. At Daleon Dynamics, we
            develop custom web applications that match your exact workflows, from CRMs and inventory systems
            to automation platforms and internal tools. They are built with modern technologies and an
            understanding of local needs like M-Pesa integration. If you only need a marketing site that
            brings in enquiries, see our{' '}
            <Link
              href="/services/high-converting-website"
              className="text-[#7B5CFF] underline underline-offset-4 hover:text-[#8E73FF]"
            >
              high-converting websites
            </Link>
            .
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-b border-[#232330] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16">
            <div className="mb-3 font-mono text-sm text-[#7B5CFF]">{'// why-custom'}</div>
            <h2 className="mb-3 text-4xl font-bold tracking-tight">Why Choose a Custom Web Application?</h2>
            <p className="text-lg text-[#8E8CA3]">
              Software built around your process, instead of a process bent around the software
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="rounded-xl border border-[#232330] bg-[#0F141B] p-8 transition-all hover:border-[#7B5CFF]"
                >
                  <Icon className="mb-6 h-8 w-8 text-[#38E1C6]" aria-hidden="true" />
                  <h3 className="mb-3 text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-[#8E8CA3]">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SYSTEMS WE BUILD */}
      <section className="border-b border-[#232330] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14">
            <div className="mb-3 font-mono text-sm text-[#7B5CFF]">{'// what-we-build'}</div>
            <h2 className="text-4xl font-bold tracking-tight">Business Systems We Build in Kenya</h2>
          </div>

          <ul className="grid gap-6 md:grid-cols-2">
            {systems.map((s) => (
              <li key={s.title} className="flex gap-4 rounded-xl border border-[#232330] bg-[#0F141B] p-6">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#38E1C6]" aria-hidden="true" />
                <div>
                  <h3 className="mb-1 font-semibold">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-[#8E8CA3]">{s.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-[#8E8CA3]">
            See an example in our{' '}
            <Link href="/projects" className="text-[#38E1C6] hover:underline">
              client work
            </Link>
            .
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="border-b border-[#232330] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16">
            <div className="mb-3 font-mono text-sm text-[#7B5CFF]">{'// our-process'}</div>
            <h2 className="text-4xl font-bold tracking-tight">Our Custom Software Development Process</h2>
          </div>

          <ol className="grid gap-8 md:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.num}>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-[#232330] bg-[#0F141B] font-mono text-xl font-bold text-[#7B5CFF]">
                  {step.num}
                </div>
                <h3 className="mb-3 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[#8E8CA3]">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="border-b border-[#232330] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16">
            <div className="mb-3 font-mono text-sm text-[#7B5CFF]">{'// whats-included'}</div>
            <h2 className="text-4xl font-bold tracking-tight">What&apos;s Included in Your Custom Web App</h2>
          </div>

          <ul className="space-y-5">
            {whatsIncluded.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#F2F1F7]">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#38E1C6]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRICING */}
      <section className="border-b border-[#232330] px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-3 font-mono text-sm text-[#7B5CFF]">{'// pricing'}</div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight">Custom Software Pricing in Kenya</h2>
          <p className="mb-4 font-mono text-3xl font-bold text-[#38E1C6]">Starting from KES 200,000</p>

          <p className="mx-auto mb-12 max-w-2xl text-[#8E8CA3]">
            This is the starting price for a Growth-level custom web application. Systems with multiple
            modules or complex integrations are priced after detailed discovery. You receive a fixed-price
            quote before development starts.
          </p>

          <div className="mx-auto max-w-2xl rounded-2xl border border-[#232330] bg-[#0F141B] p-10 text-left">
            <h3 className="mb-8 text-center text-xl font-semibold">Typical Growth Package Includes</h3>

            <ul className="mb-10 space-y-4">
              {growthPackage.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#F2F1F7]">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#38E1C6]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="block rounded-lg bg-[#7B5CFF] px-10 py-4 text-center font-semibold text-white transition-all hover:bg-[#8E73FF]"
            >
              Get a Tailored Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-[#232330] px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 font-mono text-sm text-[#7B5CFF]">{'// faq'}</div>
          <h2 className="mb-12 text-4xl font-bold tracking-tight">
            Custom Software in Nairobi: Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-[#232330] bg-[#0F141B] p-6 open:border-[#38E1C6]"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-medium">
                  {faq.q}
                  <span className="flex-shrink-0 text-[#38E1C6] transition group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-[#8E8CA3]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Ready to Build Something Powerful?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-[#8E8CA3]">
            Let&apos;s turn your business processes into efficient, automated digital systems.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#7B5CFF] px-10 py-5 text-lg font-semibold text-white transition-all hover:bg-[#8E73FF] active:scale-95"
            >
              Book a Discovery Call
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-[#232330] px-10 py-5 text-lg font-semibold transition-all hover:border-[#38E1C6] hover:text-[#38E1C6]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomWebAppsPage;