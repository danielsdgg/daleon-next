// app/services/custom-web-apps/page.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Zap, BarChart3, Users, Globe } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Custom Web Apps | Daleon Dynamics' },
  description:
    'Expert custom web applications, business automation systems, CRMs, dashboards, and internal tools built for Kenyan businesses. Scalable, secure, and tailored solutions in Nairobi.',
  keywords: [
    'custom web apps nairobi', 'web application development nairobi', 'custom software development kenya',
    'business automation software kenya', 'crm development nairobi', 'enterprise web systems kenya',
    'custom dashboard development kenya', 'm-pesa integration kenya', 'internal tools development nairobi',
    'software development company nairobi', 'workflow automation kenya', 'erp development kenya',
    'custom software company nairobi', 'daleon dynamics',
  ],
  alternates: {
    canonical: 'https://daleondynamics.com/services/custom-web-apps',
  },
  openGraph: {
    title: 'Custom Web Apps & Business Systems | Nairobi Software Development',
    description:
      'Tailored web applications, automation tools, CRMs and internal systems that help Kenyan businesses scale efficiently.',
    url: 'https://daleondynamics.com/services/custom-web-apps',
    siteName: 'Daleon Dynamics',
    images: [
      {
        url: 'https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png',
        width: 1200,
        height: 630,
        alt: 'Custom Web Applications Nairobi - Daleon Dynamics',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Web Apps & Business Systems | Nairobi Software Development',
    description: 'Tailored web applications, automation tools, CRMs and internal systems for Kenyan businesses.',
    images: ['https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png'],
  },
};

const benefits = [
  { icon: Zap, title: 'Powerful Business Automation', desc: 'Automate workflows, approvals, invoicing, and repetitive tasks to save time and reduce errors.' },
  { icon: BarChart3, title: 'Real-time Dashboards & Insights', desc: 'Custom analytics dashboards that give you clear visibility into your business performance.' },
  { icon: Users, title: 'Role-Based Access Control', desc: 'Secure user management with permissions tailored to different team members.' },
  { icon: Globe, title: 'Seamless Integrations', desc: 'M-Pesa, payment gateways, accounting tools, CRMs, and other systems you already use.' },
];

const processSteps = [
  { num: '01', title: 'Discovery & Planning', desc: 'Deep dive into your business processes, challenges, and goals.' },
  { num: '02', title: 'System Design', desc: 'Wireframes, database architecture, and technical specifications.' },
  { num: '03', title: 'Development', desc: 'Agile development using modern technologies (Next.js, TypeScript, etc.).' },
  { num: '04', title: 'Testing, Launch & Training', desc: 'Thorough testing, deployment, user training, and handover.' },
];

const whatsIncluded = [
  'Full requirements analysis and technical architecture',
  'Modern, responsive user interface (Next.js / TypeScript)',
  'Secure backend with robust database design',
  'User authentication and role-based permissions',
  'Custom dashboards and real-time reporting',
  'M-Pesa and third-party integrations',
  'Comprehensive testing and quality assurance',
  'Deployment, training, and cPanel/hosting handover',
  'Post-launch support and maintenance options',
];

const growthPackage = [
  'Custom web application with user roles',
  'Admin dashboard & analytics',
  'M-Pesa & key integrations',
  'Secure authentication & data protection',
  'Responsive design across devices',
  'Training & 2 months support',
];

const faqs = [
  {
    q: 'What does "From KES 200,000" include?',
    a: 'The starting price covers a solid custom web application with user authentication, dashboards, M-Pesa integration, admin panel, and 2 months of support. Final pricing depends on complexity and is confirmed after discovery.',
  },
  {
    q: 'Do you integrate with M-Pesa and other local services?',
    a: 'Yes. We specialize in secure M-Pesa Daraja API integration and other Kenyan payment, SMS, and business tools.',
  },
  {
    q: 'How long does it take to build a custom web app?',
    a: 'Most Growth-level projects take 12–20 weeks. Timelines depend on the number of modules, integrations, and data migration requirements.',
  },
  {
    q: 'Do clients get full source code?',
    a: 'Upon full payment, you receive ownership of the final working product and cPanel/hosting access. Complete source code transfer is available as an optional add-on (priced separately).',
  },
];

const CustomWebAppsPage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://daleondynamics.com/services/custom-web-apps',
        name: 'Custom Web Applications & Software Development Nairobi',
        description:
          'Bespoke web applications, CRMs, business automation systems, and internal tools developed for Kenyan businesses.',
        provider: { '@type': 'Organization', '@id': 'https://daleondynamics.com/#organization' },
        areaServed: { '@type': 'Country', name: 'Kenya' },
        serviceType: ['Custom Software Development', 'Web Application Development', 'Business Automation'],
        offers: {
          '@type': 'Offer',
          priceCurrency: 'KES',
          price: '200000',
          description: 'Starting price for custom web applications',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://daleondynamics.com' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://daleondynamics.com/services' },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Custom Web Apps',
            item: 'https://daleondynamics.com/services/custom-web-apps',
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#0A0A0F] text-[#F2F1F7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="pt-32 pb-20 relative overflow-hidden border-b border-[#232330]">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="max-w-6xl mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-2 font-mono text-sm text-[#7B5CFF] mb-8">
            <span>{'//'}</span>
            <span>custom-software-solutions</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
            Custom Web Applications &amp; Business Systems in{' '}
            <span className="text-[#7B5CFF]">
              Nairobi, Kenya
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#8E8CA3] max-w-4xl mx-auto mb-10">
            We build powerful, scalable web apps, CRMs, automation tools, and internal systems that solve real
            business problems and drive efficiency for Kenyan companies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#7B5CFF] hover:bg-[#8E73FF] text-white px-8 py-4 rounded-lg font-semibold transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38E1C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F]"
            >
              Start Your Custom Project <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#process"
              className="inline-flex items-center justify-center gap-3 border border-[#232330] hover:border-[#38E1C6] hover:text-[#38E1C6] px-8 py-4 rounded-lg font-semibold transition-all"
            >
              See Development Process
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 px-6 border-b border-[#232330]">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-[#8E8CA3] leading-relaxed">
            Off-the-shelf software rarely fits Kenyan business realities perfectly. At Daleon Dynamics, we
            develop custom web applications that match your exact workflows — from CRMs and inventory systems
            to advanced automation platforms and internal tools. Built with modern technologies and deep
            understanding of local needs like M-Pesa integration.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// why-custom'}</div>
            <h2 className="text-4xl font-bold tracking-tight mb-3">Why Choose a Custom Web Application?</h2>
            <p className="text-lg text-[#8E8CA3]">Tailored solutions deliver unmatched efficiency and competitive advantage</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="bg-[#0F141B] p-8 rounded-xl border border-[#232330] hover:border-[#7B5CFF] transition-all">
                  <Icon className="w-8 h-8 text-[#38E1C6] mb-6" />
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-[#8E8CA3] text-sm leading-relaxed">{benefit.desc}</p>
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
            <h2 className="text-4xl font-bold tracking-tight">Our Custom Development Process</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i}>
                <div className="w-14 h-14 bg-[#0F141B] border border-[#232330] text-[#7B5CFF] rounded-xl flex items-center justify-center font-mono font-bold text-xl mb-6">
                  {step.num}
                </div>
                <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-[#8E8CA3] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// whats-included'}</div>
            <h2 className="text-4xl font-bold tracking-tight">What&apos;s Included in Your Custom Web App</h2>
          </div>

          <ul className="space-y-5">
            {whatsIncluded.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[#F2F1F7]">
                <CheckCircle className="w-5 h-5 text-[#38E1C6] mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6 border-b border-[#232330] text-center">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// pricing'}</div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Investment for Custom Web Applications</h2>
          <p className="font-mono text-3xl font-bold text-[#38E1C6] mb-4">Starting from KES 200,000</p>

          <p className="text-[#8E8CA3] max-w-2xl mx-auto mb-12">
            This is the starting price for a Growth-level custom web application. Enterprise-grade systems
            with multiple modules or complex integrations are priced after detailed discovery.
          </p>

          <div className="bg-[#0F141B] border border-[#232330] rounded-2xl p-10 max-w-2xl mx-auto text-left">
            <h3 className="text-xl font-semibold mb-8 text-center">Typical Growth Package Includes</h3>

            <ul className="space-y-4 mb-10">
              {growthPackage.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#F2F1F7]">
                  <CheckCircle className="w-5 h-5 text-[#38E1C6] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="block text-center bg-[#7B5CFF] hover:bg-[#8E73FF] text-white px-10 py-4 rounded-lg font-semibold transition-all"
            >
              Get a Tailored Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-b border-[#232330]">
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

      {/* FINAL CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to Build Something Powerful?</h2>
          <p className="text-lg text-[#8E8CA3] mb-10 max-w-2xl mx-auto">
            Let&apos;s turn your business processes into efficient, automated digital systems.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#7B5CFF] hover:bg-[#8E73FF] text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all active:scale-95"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
};

export default CustomWebAppsPage;