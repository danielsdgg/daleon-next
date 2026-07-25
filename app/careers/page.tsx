// app/careers/page.tsx
import React from 'react';
import Link from 'next/link';
import { Inbox, Mail, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

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
    title: 'Careers at Daleon Dynamics',
    description: 'Build meaningful technology with a growing team in Nairobi.',
    images: ['https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png'],
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
    <main className="min-h-screen bg-[#0A0A0F] text-[#F2F1F7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Compact header */}
      <section className="pt-32 pb-12 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 font-mono text-sm text-[#7B5CFF] mb-4">
            <span>{'//'}</span>
            <span>careers</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Great companies are built by exceptional people.
          </h1>
          <p className="text-lg text-[#8E8CA3]">
            We engineer software, websites, and digital solutions that help Kenyan businesses grow — and
            we&apos;re always glad to hear from people who care about doing that well.
          </p>
        </div>
      </section>

      {/* OPEN POSITIONS BOARD */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-[#232330] bg-[#0F141B] overflow-hidden">
            {/* Panel header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 sm:px-8 py-5 border-b border-[#232330]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-[#F2F1F7] font-semibold">Open Positions</span>
                <span className="font-mono text-xs text-[#5C5A6E] bg-[#0A0A0F] border border-[#232330] rounded-full px-2.5 py-0.5">
                  0
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {roleTags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] text-[#5C5A6E] border border-[#232330] rounded-md px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Empty state */}
            <div className="px-6 sm:px-8 py-16 text-center">
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-[#7B5CFF]/10 flex items-center justify-center">
                <Inbox className="w-7 h-7 text-[#38E1C6]" />
              </div>
              <h2 className="text-xl font-semibold mb-3">No open positions right now</h2>
              <p className="text-[#8E8CA3] max-w-md mx-auto mb-8 leading-relaxed">
                We&apos;re not hiring at the moment, but we&apos;d love to hear from exceptional people.
                Send your resume and we&apos;ll reach out when the right opportunity opens.
              </p>
              <a
                href={RESUME_MAILTO}
                className="inline-flex items-center gap-3 bg-[#7B5CFF] hover:bg-[#8E73FF] text-white px-6 py-3.5 rounded-lg font-semibold transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38E1C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F141B]"
              >
                <Mail className="w-4 h-4" />
                Send Us Your Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE'RE LOOKING FOR */}
      <section className="px-6 pb-20">
        <div className="max-w-2xl mx-auto">
          <div className="font-mono text-sm text-[#7B5CFF] mb-6">{'// who-we-look-for'}</div>
          <div className="space-y-3 font-mono text-sm">
            {lookingFor.map((item, i) => (
              <div key={i} className="flex gap-3 text-[#8E8CA3]">
                <span className="text-[#38E1C6] select-none">›</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section id="culture" className="px-6 pb-24">
        <div className="max-w-2xl mx-auto">
          <div className="font-mono text-sm text-[#7B5CFF] mb-6">{'// culture'}</div>
          <div className="divide-y divide-[#232330] border-t border-b border-[#232330]">
            {culture.map((item, i) => (
              <div key={i} className="py-5 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="font-mono text-sm text-[#F2F1F7] sm:w-48 flex-shrink-0">{item.tag}</span>
                <span className="text-[#8E8CA3] text-sm">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing line */}
      <section className="px-6 pb-28 text-center">
        <p className="text-[#5C5A6E] text-sm">
          Have a general question instead?{' '}
          <Link href="/contact" className="text-[#7B5CFF] hover:text-[#8E73FF] inline-flex items-center gap-1">
            Get in touch <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </p>
      </section>
    </main>
  );
};

export default CareersPage;