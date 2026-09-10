// app/careers/page.tsx
import React from 'react';
import Link from 'next/link';
import { Inbox, Mail, ArrowRight, Code2, GitBranch, Layers, Terminal } from 'lucide-react';
import type { Metadata } from 'next';
import SectionLabel from '@/src/components/ui/SectionLabel';
import TechStackRow from '@/src/components/ui/TechStackRow';
import Reveal from '@/src/components/ui/motion/Reveal';
import Stagger from '@/src/components/ui/motion/Stagger';

export const metadata: Metadata = {
  title: { absolute: 'Careers | Daleon Dynamics' },
  description:
    'Join a passionate software engineering team in Nairobi building impactful digital solutions for Kenyan businesses.',
  keywords: [
    'careers nairobi', 'tech jobs kenya', 'software developer jobs nairobi',
    'web developer careers kenya', 'daleon dynamics careers',
  ],
  alternates: { canonical: 'https://daleondynamics.com/careers' },
  openGraph: {
    title: 'Careers at Daleon Dynamics',
    description: 'Build meaningful technology with a growing team in Nairobi.',
    url: 'https://daleondynamics.com/careers',
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
    title: 'Careers at Daleon Dynamics',
    description: 'Build meaningful technology with a growing team in Nairobi.',
    images: ['/icon.png'],
  },
};

const roleTags = ['Engineering', 'Product', 'Design', 'Backend', 'Frontend'];

const lookingFor = [
  'Frontend developers — React, Next.js, TypeScript',
  'Backend developers — Node.js, Python, APIs',
  'UI/UX designers with strong product sense',
  'Problem-solvers with strong attention to detail',
  'Self-driven individuals who take initiative',
  'People passionate about building real-world solutions',
];

const ourStack = [
  { icon: Code2, label: 'Next.js' },
  { icon: Terminal, label: 'TypeScript' },
  { icon: Layers, label: 'Tailwind CSS' },
  { icon: GitBranch, label: 'Git & CI/CD' },
];

const culture = [
  { tag: 'collaborative-team', desc: 'Work with a focused, driven team that values communication and growth.' },
  { tag: 'real-impact', desc: 'Build solutions that directly impact real businesses and real people.' },
  { tag: 'growth-oriented', desc: 'Continuous learning — technically and professionally.' },
];

const RESUME_MAILTO =
  'mailto:daleondynamics@gmail.com?subject=Open%20Application%20-%20Daleon%20Dynamics';

const CareersPage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://daleondynamics.com/careers',
        url: 'https://daleondynamics.com/careers',
        name: 'Careers at Daleon Dynamics',
        description: 'Careers at Daleon Dynamics, a Nairobi-based software and web development company.',
        about: {
          '@type': 'Organization',
          '@id': 'https://daleondynamics.com/#organization',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://daleondynamics.com' },
          { '@type': 'ListItem', position: 2, name: 'Careers', item: 'https://daleondynamics.com/careers' },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-canvas text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Compact header */}
      <section className="pt-32 pb-12 px-6 text-center">
        <Reveal className="max-w-2xl mx-auto">
          <SectionLabel label="careers" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Great companies are built by exceptional people.
          </h1>
          <p className="text-lg text-ink-muted">
            We engineer software, websites, and digital solutions that help Kenyan businesses grow — and
            we&apos;re always glad to hear from people who care about doing that well.
          </p>
        </Reveal>
      </section>

      {/* OPEN POSITIONS BOARD */}
      <section className="px-6 pb-20">
        <Reveal className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-line bg-surface overflow-hidden">
            {/* Panel header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 sm:px-8 py-5 border-b border-line">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-ink font-semibold">Open Positions</span>
                <span className="font-mono text-xs text-ink-dim bg-canvas border border-line rounded-full px-2.5 py-0.5">
                  0
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {roleTags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] text-ink-dim border border-line rounded-md px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Empty state */}
            <div className="px-6 sm:px-8 py-16 text-center">
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                <Inbox className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-xl font-semibold mb-3">No open positions right now</h2>
              <p className="text-ink-muted max-w-md mx-auto mb-8 leading-relaxed">
                We&apos;re not hiring at the moment, but we&apos;d love to hear from exceptional people.
                Send your resume and we&apos;ll reach out when the right opportunity opens.
              </p>
              <a
                href={RESUME_MAILTO}
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white px-6 py-3.5 rounded-lg font-semibold transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <Mail className="w-4 h-4" />
                Send Us Your Resume
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* WHO WE'RE LOOKING FOR */}
      <section className="px-6 pb-20">
        <Reveal className="max-w-2xl mx-auto">
          <SectionLabel label="who-we-look-for" />
          <div className="space-y-3 font-mono text-sm">
            {lookingFor.map((item, i) => (
              <div key={i} className="flex gap-3 text-ink-muted">
                <span className="text-accent select-none">›</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* OUR STACK */}
      <section className="px-6 pb-20">
        <Reveal className="max-w-2xl mx-auto">
          <SectionLabel label="our-stack" />
          <TechStackRow items={ourStack} />
        </Reveal>
      </section>

      {/* CULTURE */}
      <section id="culture" className="px-6 pb-24">
        <Reveal className="max-w-2xl mx-auto">
          <SectionLabel label="culture" />
          <Stagger className="divide-y divide-line border-t border-b border-line" step={0.06}>
            {culture.map((item, i) => (
              <div key={i} className="py-5 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="font-mono text-sm text-ink sm:w-48 flex-shrink-0">{item.tag}</span>
                <span className="text-ink-muted text-sm">{item.desc}</span>
              </div>
            ))}
          </Stagger>
        </Reveal>
      </section>

      {/* Closing line */}
      <section className="px-6 pb-28 text-center">
        <p className="text-ink-dim text-sm">
          Have a general question instead?{' '}
          <Link href="/contact" className="text-primary hover:text-primary-hover inline-flex items-center gap-1">
            Get in touch <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </p>
      </section>
    </main>
  );
};

export default CareersPage;