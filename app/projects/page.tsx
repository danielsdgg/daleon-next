// app/projects/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Projects | Web Design & Software Portfolio Kenya | Daleon Dynamics' },
  description:
    'Explore our portfolio of successful projects including insurance platforms, learning management systems, access control solutions, and ecommerce websites built for Kenyan businesses.',
  keywords: [
    'web development projects kenya',
    'custom software projects nairobi',
    'website design portfolio kenya',
    'high converting websites kenya',
    'custom web applications kenya',
    'access control systems projects',
    'insurance software kenya',
    'learning management system kenya',
    'software development portfolio kenya',
    'daleon dynamics projects',
  ],
  alternates: {
    canonical: 'https://daleondynamics.com/projects',
  },
  openGraph: {
    title: 'Projects - Real Results Delivered | Daleon Dynamics',
    description:
      'See how we deliver high-impact digital solutions for Kenyan businesses — from insurance platforms to secure access control systems.',
    url: 'https://daleondynamics.com/projects',
    siteName: 'Daleon Dynamics',
    images: [
      {
        url: 'https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png',
        width: 1200,
        height: 630,
        alt: 'Daleon Dynamics Projects Portfolio',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects - Real Results Delivered | Daleon Dynamics',
    description: 'Insurance platforms, learning management systems, access control, and ecommerce — built for Kenyan businesses.',
    images: ['https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png'],
  },
};

const categories = ['Insurance', 'Education Technology', 'Security & Access Control', 'E-commerce'];

const projects = [
  {
    title: 'Karen Direct Insurance Brokers',
    category: 'Insurance Platform',
    year: '2026',
    description:
      "A modern, secure, and user-friendly insurance management platform with policy administration, claims processing, client portal, and real-time analytics. This system has significantly streamlined operations for one of Nairobi's fastest-growing insurance companies.",
    result: 'Increased policy renewals by 42%',
    liveUrl: 'https://www.karendirectins.com/',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
  },
  {
    title: 'Morgan Learning Academy LMS',
    category: 'Education Technology',
    year: '2024',
    description:
      'Comprehensive Learning Management System built for a leading Kenyan academy. Features include course management, student tracking, assessments, parent portal, and interactive content delivery.',
    result: 'Reduced admin workload by 65%',
    liveUrl: 'https://canvas-1-jxo5.onrender.com/',
    image: 'https://res.cloudinary.com/ddei3mzex/image/upload/v1775549982/1A9A6803_pp58u4.jpg',
  },
  {
    title: 'SecureGate Access Control',
    category: 'Security & Facilities',
    year: '2025',
    description:
      'Cloud-based biometric access control system with real-time monitoring, visitor management, staff attendance tracking, and a centralized security dashboard.',
    result: 'Deployed across 12 locations',
    liveUrl: '#',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
  },
  {
    title: 'HeroCloth E-commerce Store',
    category: 'Fashion E-commerce',
    year: '2025',
    description:
      'High-performance ecommerce platform with seamless product browsing, secure checkout, M-Pesa integration, and order management. Built for fast loading speeds and high conversion rates.',
    result: null,
    liveUrl: 'https://herocloth.vercel.app',
    image: 'https://res.cloudinary.com/ddei3mzex/image/upload/v1729598578/videoediting2_itg2qh.jpg',
  },
];

const Projects = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://daleondynamics.com/' },
          { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://daleondynamics.com/projects' },
        ],
      },
      {
        '@type': 'ItemList',
        name: 'Daleon Dynamics Project Portfolio',
        itemListElement: [
          {
            '@type': 'CreativeWork',
            position: 1,
            name: 'Karen Direct Insurance Brokers',
            description:
              'Insurance management platform with policy administration, claims processing, client portal, and analytics.',
            url: 'https://www.karendirectins.com/',
            datePublished: '2026',
            author: { '@type': 'Organization', name: 'Daleon Dynamics' },
          },
          {
            '@type': 'CreativeWork',
            position: 2,
            name: 'Morgan Learning Academy LMS',
            description: 'Learning Management System with course management, student tracking, assessments, and parent portal.',
            url: 'https://canvas-1-jxo5.onrender.com/',
            datePublished: '2024',
            author: { '@type': 'Organization', name: 'Daleon Dynamics' },
          },
          {
            '@type': 'CreativeWork',
            position: 3,
            name: 'SecureGate Access Control',
            description: 'Biometric access control system with monitoring, visitor management, and attendance tracking.',
            datePublished: '2025',
            author: { '@type': 'Organization', name: 'Daleon Dynamics' },
          },
          {
            '@type': 'CreativeWork',
            position: 4,
            name: 'HeroCloth E-commerce Store',
            description: 'Ecommerce platform with product browsing, secure checkout, M-Pesa integration, and order management.',
            url: 'https://herocloth.vercel.app',
            datePublished: '2025',
            author: { '@type': 'Organization', name: 'Daleon Dynamics' },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F2F1F7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative py-32 lg:py-40 overflow-hidden border-b border-[#232330]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=2000')",
            filter: 'blur(6px) brightness(0.4)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/80 via-[#0A0A0F]/70 to-[#0A0A0F]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
          <div className="inline-flex items-center gap-2 font-mono text-sm text-[#7B5CFF] mb-6">
            <span>{'//'}</span>
            <span>selected-work</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F2F1F7] leading-tight mb-8">
            Projects That
            <br />
            <span className="">
              Speak for Themselves
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#8E8CA3] max-w-3xl mx-auto leading-relaxed mb-10">
            Real solutions. Real results. From insurance platforms to learning systems and secure access
            control — we deliver high-quality digital products that drive tangible business growth in Kenya.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <span
                key={cat}
                className="font-mono text-xs text-[#8E8CA3] border border-[#232330] bg-[#0F0F14]/80 px-4 py-2 rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// portfolio'}</div>
            <h2 className="text-4xl font-bold tracking-tight">Recent work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-[#0F141B] rounded-2xl overflow-hidden border border-[#232330] hover:border-[#7B5CFF] transition-all duration-500"
              >
                <div className="relative h-[340px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.category} project by Daleon Dynamics`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-6 right-6 bg-black/70 text-[#F2F1F7] text-xs font-mono px-3 py-1.5 rounded-full backdrop-blur-md">
                    {project.year}
                  </div>
                </div>

                <div className="p-8">
                  <div className="uppercase text-[#7B5CFF] text-xs font-mono font-semibold tracking-widest mb-3">
                    {project.category}
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight mb-4">{project.title}</h3>

                  {project.result && (
                    <div className="inline-flex items-center gap-2 bg-[#38E1C6]/10 text-[#38E1C6] text-xs font-medium px-3 py-1.5 rounded-full mb-4">
                      ✓ {project.result}
                    </div>
                  )}

                  <p className="text-[#8E8CA3] leading-relaxed text-sm mb-8 line-clamp-4">{project.description}</p>

                  {project.liveUrl !== '#' ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#7B5CFF] hover:text-[#8E73FF] font-semibold text-sm group-hover:gap-3 transition-all"
                    >
                      View Live Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 font-mono text-xs text-[#8E8CA3]">
                      coming_soon • in_development
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            Ready to See Your Vision
            <br />
            Come to Life?
          </h2>
          <p className="text-lg text-[#8E8CA3] max-w-2xl mx-auto mb-12">
            Whether you need a high-converting website, a powerful custom system, or a secure access control
            solution — we&apos;re ready to deliver exceptional results for your business.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#7B5CFF] hover:bg-[#8E73FF] text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all active:scale-95"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;