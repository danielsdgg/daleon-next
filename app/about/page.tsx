// app/about/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Users, Target, Award, Clock, Code2, Globe,
  ShieldCheck, Zap, MapPin, Layout, Server,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'About Daleon Dynamics | Software Company in Nairobi, Kenya' },
  description:
    'Daleon Dynamics is a Nairobi-based software company founded in 2024. We build high-converting, SEO-rich websites and custom web applications — including ecommerce stores, insurance platforms, and M-Pesa payment integrations — for Kenyan businesses.',
  keywords: [
    'about daleon dynamics', 'software development company nairobi', 'web development kenya',
    'custom software development nairobi', 'website design company kenya', 'access control systems kenya',
    'business automation kenya', 'software company nairobi', 'custom web apps kenya',
    'web design nairobi', 'crm development nairobi', 'm-pesa integration kenya',
    'high converting website design kenya', 'seo services nairobi', 'biometric access control kenya',
    'ecommerce website development kenya', 'insurance software development kenya',
    'payment gateway integration kenya', 'custom web application development kenya',
    'nairobi software company', 'kenyan web design agency',
  ],
  alternates: {
    canonical: 'https://daleondynamics.com/about',
  },
  openGraph: {
    title: 'About Daleon Dynamics - Software Company in Nairobi, Kenya',
    description:
      'Founded in 2024, Daleon Dynamics builds high-converting websites and custom web applications — ecommerce, insurance platforms, and payment integrations — for businesses across Kenya.',
    url: 'https://daleondynamics.com/about',
    siteName: 'Daleon Dynamics',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'Daleon Dynamics - About Us',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Daleon Dynamics - Software Company in Nairobi, Kenya',
    description: 'Nairobi-based software company building high-converting websites and custom web applications for Kenyan businesses.',
    images: ['/icon.png'],
  },
};

const milestones = [
  {
    year: '2024',
    label: 'Founded in Nairobi',
    desc: 'Daleon Dynamics was started with a simple goal: build websites and software that Kenyan businesses actually needed, instead of generic templates.',
  },
  {
    year: '2025',
    label: 'Work begins',
    desc: 'Our first client projects went live — a mix of high-converting business websites and custom web applications with real backends and integrations.',
  },
  {
    year: '2026',
    label: 'Full operations',
    desc: 'Visibility and referrals grew our client base significantly. We now run full operations, supporting businesses across multiple sectors in Kenya.',
  },
];

const coreOfferings = [
  {
    icon: <Layout className="w-7 h-7" />,
    accent: '#38E1C6',
    title: 'High-Converting Websites',
    tagline: 'Static, content-first, built to be found and to convert.',
    description:
      'No backend, no logins — just fast, SEO-rich pages designed to rank on Google and turn visitors into leads. Ideal for businesses that need a strong, informative online presence.',
    examples: ['Business & company websites', 'Landing and service pages', 'Portfolio and brochure sites', 'SEO-first content pages'],
  },
  {
    icon: <Server className="w-7 h-7" />,
    accent: '#7B5CFF',
    title: 'Custom Web Applications',
    tagline: 'Dynamic platforms with a real backend behind them.',
    description:
      'Anything that needs a database, user accounts, or a live integration falls here — built to handle transactions and data securely, and to scale as your business grows.',
    examples: ['Ecommerce stores', 'Insurance platforms', 'M-Pesa & payment gateway integration', 'CRMs, dashboards & booking systems'],
  },
];

const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Client Success First',
    desc: 'Every solution is designed to deliver measurable business impact — more leads, better efficiency, or stronger security.',
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Quality Over Quantity',
    desc: 'We build clean, maintainable, and scalable code instead of relying on templates or shortcuts.',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Built for Kenya',
    desc: 'Deep understanding of local challenges, M-Pesa integrations, regulatory needs, and market realities.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Transparency & Ownership',
    desc: 'Clear communication, no hidden fees, and full ownership of the final working product upon completion.',
  },
];

const whyChooseUs = [
  {
    icon: <Zap />,
    title: 'Modern Tech Stack',
    desc: 'We use Next.js, TypeScript, Tailwind, and scalable cloud infrastructure — no outdated templates.',
  },
  {
    icon: <Users />,
    title: 'Local Market Expertise',
    desc: 'We understand Kenyan business challenges, payment systems (M-Pesa), and the regulatory environment.',
  },
  {
    icon: <Award />,
    title: 'Full Ownership & Transparency',
    desc: 'You own the final product with cPanel access. Clear timelines, regular updates, and honest communication.',
  },
  {
    icon: <Clock />,
    title: 'Long-term Partnership',
    desc: 'We provide ongoing support, training, and maintenance so your system continues to evolve with your business.',
  },
];

const faqs = [
  {
    q: 'Where is Daleon Dynamics based, and do you work outside Nairobi?',
    a: 'We are based in Nairobi, Kenya, and work with clients across the country. Most projects can be handled remotely from start to finish.',
  },
  {
    q: 'When was Daleon Dynamics founded?',
    a: 'Daleon Dynamics was founded in 2024 in Nairobi. We began delivering client projects in 2025, and by 2026 have grown into full operations with a steadily expanding client base.',
  },
  {
    q: "What's the difference between a high-converting website and a custom web application?",
    a: 'A high-converting website is a static, content-rich site built for visibility and lead generation — no backend required. A custom web application involves a real backend, such as an ecommerce store, insurance platform, or payment-integrated system, built to handle data, accounts, and transactions.',
  },
  {
    q: 'Do you build ecommerce, insurance, or payment integration platforms?',
    a: 'Yes. These fall under our custom web application work, and commonly include M-Pesa and other payment gateway integrations, secure user accounts, and admin dashboards.',
  },
  {
    q: 'What technologies do you use?',
    a: 'We primarily build with Next.js, TypeScript, and Tailwind CSS for fast, scalable, SEO-friendly sites and applications. On request, we can also work with WordPress or other platforms depending on the project.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Yes. We provide training, handover documentation, and flexible maintenance and support packages after your site or application goes live.',
  },
];

const About: React.FC = () => {
  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://daleondynamics.com/#organization',
        name: 'Daleon Dynamics',
        url: 'https://daleondynamics.com',
        logo: 'https://daleondynamics.com/icon.png',
        foundingDate: '2024',
        description:
          'Nairobi-based software company building high-converting websites and custom web applications, including ecommerce, insurance, and payment-integrated platforms.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Nairobi',
          addressCountry: 'KE',
        },
        sameAs: [
          'https://www.facebook.com/daleondynamics',
          'https://x.com/daleondynamics',
          'https://linkedin.com/company/daleon-dynamics',
          'https://instagram.com/daleondynamics',
        ],
      },
      {
        '@type': 'AboutPage',
        '@id': 'https://daleondynamics.com/about',
        url: 'https://daleondynamics.com/about',
        name: 'About Daleon Dynamics',
        description: 'Nairobi-based software company building custom digital solutions for Kenyan businesses since 2024.',
        mainEntityOfPage: {
          '@type': 'Organization',
          '@id': 'https://daleondynamics.com/#organization',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://daleondynamics.com' },
          { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://daleondynamics.com/about' },
        ],
      },
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

  return (
    <main className="min-h-screen bg-[#0A0A0F] text-[#F2F1F7]">
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#232330]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(123,92,255,0.20),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(56,225,198,0.18),transparent_35%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#38E1C6]/30 bg-[#38E1C6]/10 px-5 py-2 text-sm font-medium text-[#38E1C6]">
                <MapPin className="h-4 w-4" />
                Nairobi-based software company
              </span>

              <h1 className="mt-8 text-4xl font-bold leading-tight md:text-5xl tracking-tight text-[#F2F1F7]">
                Websites and web apps built to perform, not just look good.
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-[#8E8CA3]">
                Since 2024, Daleon Dynamics has designed and built digital products for ambitious Kenyan
                businesses — from high-converting, SEO-rich websites to custom web applications like
                ecommerce stores, insurance platforms, and M-Pesa payment integrations.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="rounded-xl bg-[#7B5CFF] hover:bg-[#8E73FF] px-8 py-4 font-semibold text-white transition"
                >
                  Explore Our Services
                </Link>
                <Link
                  href="/projects"
                  className="rounded-xl border border-[#232330] hover:border-[#38E1C6] hover:text-[#38E1C6] px-8 py-4 font-semibold transition"
                >
                  View Our Projects
                </Link>
              </div>

              <div className="mt-16 grid grid-cols-3 gap-6 max-w-md">
                {milestones.map((m) => (
                  <div key={m.year}>
                    <h3 className="text-3xl font-bold text-[#F2F1F7]">{m.year}</h3>
                    <p className="text-sm text-[#8E8CA3] mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-[#232330] bg-[#0F141B] h-[560px] lg:h-[620px]">
                <Image
                  src="/code2.png"
                  alt="Software developer at Daleon Dynamics"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -left-6 -bottom-8 lg:-left-10 lg:bottom-10 rounded-2xl border border-[#232330] bg-[#0F0F14] p-6 shadow-2xl shadow-black/50 max-w-xs">
                <div className="mb-3 font-mono text-xs text-[#38E1C6]">
                  {'// our-mission'}
                </div>
                <h3 className="text-xl font-bold leading-snug">
                  Building technology that creates impact.
                </h3>
                <p className="mt-3 text-sm text-[#8E8CA3]">
                  Whether it&apos;s a lead-generating website or a full ecommerce platform, we combine
                  strategy, design, and engineering to help businesses grow faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="py-16 border-b border-[#232330]">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xl leading-relaxed text-[#8E8CA3]">
            At Daleon Dynamics, we believe Kenyan businesses deserve world-class digital tools — built locally
            with deep understanding of the Kenyan market. We don&apos;t just code; we solve problems and create
            systems that help businesses grow, automate, and compete effectively.
          </p>
        </div>
      </section>

      {/* OUR STORY — TIMELINE */}
      <section className="py-24 border-b border-[#232330]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// our-story'}</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Story</h2>
            <p className="max-w-2xl text-lg text-[#8E8CA3] leading-relaxed">
              Daleon Dynamics was born from the frustration of seeing Kenyan businesses stuck with generic
              templates, slow websites, and software that didn&apos;t match how they actually worked. Here&apos;s
              how far we&apos;ve come since.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {milestones.map((m) => (
              <div key={m.year} className="relative pt-8 border-t-2 border-[#232330]">
                <span className="absolute -top-[9px] left-0 h-4 w-4 rounded-full bg-[#0A0A0F] border-2 border-[#7B5CFF]" />
                <div className="font-mono text-sm text-[#7B5CFF]">{m.year}</div>
                <h3 className="mt-2 text-xl font-semibold text-[#F2F1F7]">{m.label}</h3>
                <p className="mt-3 text-[#8E8CA3] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="py-24 border-b border-[#232330]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// what-we-build'}</div>
            <h2 className="text-4xl font-bold mb-4">Two Ways We Build for You</h2>
            <p className="text-lg text-[#8E8CA3]">
              Every project starts by figuring out which of these you actually need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {coreOfferings.map((offer) => (
              <div key={offer.title} className="bg-[#0F141B] border border-[#232330] p-8 rounded-2xl">
                <div style={{ color: offer.accent }}>{offer.icon}</div>
                <h3 className="text-2xl font-semibold mt-5 text-[#F2F1F7]">{offer.title}</h3>
                <p className="mt-2 text-sm font-medium" style={{ color: offer.accent }}>{offer.tagline}</p>
                <p className="mt-4 text-[#8E8CA3] leading-relaxed">{offer.description}</p>
                <ul className="mt-6 space-y-2">
                  {offer.examples.map((ex) => (
                    <li key={ex} className="flex items-start gap-2 text-sm text-[#A6A4B8]">
                      <span className="mt-2 h-1 w-1 rounded-full flex-shrink-0" style={{ backgroundColor: offer.accent }} />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-24 border-b border-[#232330]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// core-values'}</div>
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-[#8E8CA3]">The principles that guide every project we deliver</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <div key={i} className="flex gap-6 bg-[#0F141B] border border-[#232330] p-8 rounded-2xl">
                <div className="text-[#38E1C6] mt-1 flex-shrink-0">{value.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-[#8E8CA3]">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 border-b border-[#232330]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// why-choose-us'}</div>
            <h2 className="text-4xl font-bold">Why Kenyan Businesses Trust Daleon Dynamics</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="text-[#38E1C6] mt-1 flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-[#8E8CA3]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-b border-[#232330]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// faq'}</div>
          <h2 className="text-4xl font-bold mb-12">Frequently Asked Questions</h2>

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
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Build Something Great Together</h2>
          <p className="text-lg text-[#8E8CA3] mb-10 max-w-2xl mx-auto">
            Whether you need a high-converting website or a custom web application with a full backend —
            we&apos;re ready to help your business grow.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#7B5CFF] hover:bg-[#8E73FF] text-white px-10 py-5 rounded-xl text-lg font-semibold transition"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;