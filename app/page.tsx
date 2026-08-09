// app/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Globe,
  Code2,
  ExternalLink,
  MessageCircle,
  CheckCircle2,
  Smartphone,
  Zap,
  Receipt,
  Headphones,
  Terminal,
  Database,
  GitBranch,
  Layers,
} from 'lucide-react';
import type { Metadata } from 'next';
import SectionLabel from '@/src/components/ui/SectionLabel';
import StatusPill from '@/src/components/ui/StatusPill';
import TechStackRow from '@/src/components/ui/TechStackRow';
import Reveal from '@/src/components/ui/motion/Reveal';
import Stagger from '@/src/components/ui/motion/Stagger';

export const metadata: Metadata = {
  title: { absolute: 'Daleon Dynamics | Web & Custom Software Company' },
  description:
    'Daleon Dynamics is a leading web design and custom software development company based in Nairobi, Kenya. We build high-converting websites, powerful web applications, business automation systems, and biometric access control solutions.',
  keywords: [
    'daleon dynamics', 'web design nairobi', 'custom software development nairobi',
    'website development kenya', 'software company nairobi', 'high converting websites nairobi',
  ],
  alternates: {
    canonical: 'https://daleondynamics.com',
  },
  openGraph: {
    title: 'Daleon Dynamics - Web Design & Custom Software Company',
    description:
      'Leading digital solutions company in Nairobi, Kenya. High-converting websites, custom web apps, automation & security systems.',
    images: [
      {
        url: 'https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png',
        width: 1200,
        height: 630,
        alt: 'Daleon Dynamics - Web Design & Software Company Nairobi',
      },
    ],
    url: 'https://daleondynamics.com',
    siteName: 'Daleon Dynamics',
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daleon Dynamics - Web Design & Custom Software Company Nairobi',
    description: 'High-converting websites, custom web apps, automation & security systems for Kenyan businesses.',
    images: ['https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png'],
  },
};

const techStack = [
  { icon: Code2, label: 'Next.js' },
  { icon: Terminal, label: 'TypeScript' },
  { icon: Database, label: 'PostgreSQL' },
  { icon: Smartphone, label: 'M-Pesa Daraja API' },
  { icon: Layers, label: 'Tailwind CSS' },
  { icon: GitBranch, label: 'Git & CI/CD' },
];

const proofStats = [
  { value: '42%', label: 'increase in policy renewals', source: 'Karen Direct Insurance' },
  { value: '65%', label: 'reduction in admin workload', source: 'Morgan Learning Academy' },
  { value: '12', label: 'locations running on one system', source: 'SecureGate Access Control' },
];

const differentiators = [
  {
    icon: Smartphone,
    title: 'Built for the Kenyan market',
    desc: 'Native M-Pesa (Daraja API) integration, local payment flows, and systems designed around how Kenyan businesses actually operate — not generic templates.',
  },
  {
    icon: Zap,
    title: 'Realistic turnaround',
    desc: 'Standard websites ship in 4–8 weeks, custom applications in 12–20 weeks. You get a clear timeline before work starts, not an open-ended estimate.',
  },
  {
    icon: Receipt,
    title: 'Transparent pricing',
    desc: 'Fixed-price packages starting from KES 60,000, published upfront. No hidden costs, no scope surprises halfway through the project.',
  },
  {
    icon: Headphones,
    title: 'Support that continues',
    desc: 'Every project includes a support window, with monthly maintenance retainers available afterward to keep things secure, fast, and up to date.',
  },
];

const services = [
  {
    icon: Globe,
    tag: 'frontend',
    title: 'High-Converting Websites',
    desc: 'Beautiful, fast, and conversion-focused websites designed to attract customers and generate leads.',
    link: '/services/high-converting-website',
  },
  {
    icon: Code2,
    tag: 'fullstack',
    title: 'Custom Web Apps & Systems',
    desc: 'Powerful internal tools, CRMs, and automation systems built to match your exact business processes.',
    link: '/services/custom-web-apps',
  },
  // {
  //   icon: ShieldCheck,
  //   tag: 'security',
  //   title: 'Access Control Systems',
  //   desc: 'Smart biometric and cloud-based security solutions for offices, estates, and institutions.',
  //   link: '/services',
  // },
];

const featuredProjects = [
  {
    title: 'Karen Direct Insurance Brokers',
    category: 'Insurance Platform',
    year: '2026',
    description:
      'Modern insurance platform with policy management, claims processing, and client portal that streamlined operations and improved customer experience.',
    liveUrl: 'https://www.karendirectins.com/',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    result: 'Increased policy renewals by 42%',
  },
  {
    title: 'Morgan Learning Academy',
    category: 'Learning Management System',
    year: '2024',
    description:
      'Comprehensive LMS built for a leading Kenyan academy. Features course management, student tracking, assessments, and parent portal.',
    liveUrl: 'https://canvas-1-jxo5.onrender.com/',
    image: 'https://res.cloudinary.com/ddei3mzex/image/upload/v1775549982/1A9A6803_pp58u4.jpg',
    result: 'Reduced admin workload by 65%',
  },
  {
    title: 'SecureGate Access Control',
    category: 'Security & Facilities',
    year: '2025',
    description:
      'Cloud-based biometric access control system with real-time monitoring, visitor management, and staff attendance tracking.',
    liveUrl: '#',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    result: 'Deployed across 12 locations',
  },
];

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      {/* HERO */}
      <section className="pt-28 pb-20 px-6 border-b border-line">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <SectionLabel label="nairobi-based software company" className="mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              Web Design &amp; Custom Software Company in Nairobi, Kenya
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed mb-10 max-w-lg">
              We build high-converting websites, powerful custom web applications, business automation
              systems, and secure biometric access control solutions that help Kenyan businesses grow
              faster and operate smarter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-semibold transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                Get Your Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-3 border border-line hover:border-accent hover:text-accent px-8 py-4 rounded-lg font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                Explore Our Services
              </Link>
            </div>
          </Reveal>

          {/* Photo signature element */}
          <Reveal delay={0.1} className="relative">
            <div className="relative rounded-xl overflow-hidden border border-line shadow-2xl shadow-black/40 aspect-[4/5] lg:aspect-[4/4.5]">
              <Image
                src="https://res.cloudinary.com/ddei3mzex/image/upload/v1775556815/web-application-banner_fzgldg.webp"
                alt="Team collaborating on a software project"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-primary/10" />
            </div>

            {/* Floating proof card */}
            <div className="absolute -bottom-6 -left-6 bg-surface-alt border border-line rounded-xl p-5 shadow-2xl shadow-black/50 max-w-[220px]">
              <StatusPill label="Live result" tone="live" className="mb-1" />
              <div className="text-2xl font-bold text-ink">42%</div>
              <div className="text-xs text-ink-muted">increase in policy renewals for a Nairobi insurer</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="py-14 px-6 border-b border-line bg-surface-alt">
        <Stagger className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8" step={0.08}>
          {proofStats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className="text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-ink font-medium">{stat.label}</div>
              <div className="text-sm text-ink-dim font-mono mt-1">{stat.source}</div>
            </div>
          ))}
        </Stagger>
      </section>

      {/* WHY DALEON DYNAMICS */}
      <section className="py-24 px-6 border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-16 max-w-2xl">
            <SectionLabel label="why-daleon-dynamics" />
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              What sets us apart in Nairobi&apos;s software market
            </h2>
            <p className="text-lg text-ink-muted">
              Kenyan businesses don&apos;t need a generic template — they need a team that understands the
              local market and builds accordingly.
            </p>
          </Reveal>

          <Stagger className="grid sm:grid-cols-2 gap-6" step={0.08}>
            {differentiators.map((d, i) => {
              const Icon = d.icon;
              return (
                <div key={i} className="flex gap-5 p-6 rounded-xl border border-line bg-surface">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{d.title}</h3>
                    <p className="text-ink-muted text-sm leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              );
            })}
          </Stagger>

          <Reveal delay={0.1} className="mt-16 pt-12 border-t border-line">
            <div className="font-mono text-xs uppercase tracking-wider text-ink-dim mb-4">
              Tools we build with
            </div>
            <TechStackRow items={techStack} />
          </Reveal>
        </div>
      </section>

      {/* SERVICES TEASER — alternating rows, distinct from /services grid */}
      <section className="py-24 px-6 border-b border-line">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-16">
            <SectionLabel label="our-services" />
            <h2 className="text-4xl font-bold tracking-tight">Tailored digital solutions for Kenyan businesses</h2>
          </Reveal>

          <div className="divide-y divide-line">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link
                  key={i}
                  href={service.link}
                  className="group flex flex-col sm:flex-row sm:items-center gap-6 py-8 hover:bg-surface -mx-6 px-6 rounded-lg transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-surface border border-line flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                    <p className="text-ink-muted">{service.desc}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              );
            })}
          </div>

          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 text-accent font-semibold hover:gap-4 transition-all"
            >
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="py-24 px-6 border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6" as="div">
            <div>
              <SectionLabel label="recent-work" />
              <h2 className="text-4xl font-bold tracking-tight">Real results for Kenyan businesses</h2>
            </div>
            <Link
              href="/projects"
              className="text-accent hover:text-accent-hover font-medium flex items-center gap-2 group flex-shrink-0"
            >
              View all projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>

          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" step={0.1}>
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-surface rounded-xl overflow-hidden border border-line hover:border-primary transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.category} project by Daleon Dynamics`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-5 right-5 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-ink">
                    {project.year}
                  </div>
                </div>

                <div className="p-8">
                  <div className="font-mono uppercase text-primary text-xs tracking-wider mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                  {project.result && (
                    <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs font-medium px-3 py-1.5 rounded-full mb-4">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {project.result}
                    </div>
                  )}

                  <p className="text-ink-muted mb-6 leading-relaxed line-clamp-3 text-sm">{project.description}</p>

                  {project.liveUrl !== '#' ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-semibold text-sm group-hover:gap-3 transition-all"
                    >
                      View Live Project <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 font-mono text-xs text-ink-muted">
                      coming_soon • in_development
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="py-28 px-6 text-center">
        <Reveal className="max-w-3xl mx-auto">
          <div className="mb-8 inline-flex items-center gap-3 bg-surface-alt border border-line px-6 py-2.5 rounded-full">
            <StatusPill label="Limited slots available this quarter" tone="live" size="sm" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            Ready to Transform Your Digital Presence?
          </h2>

          <p className="text-lg text-ink-muted max-w-xl mx-auto mb-12">
            Let&apos;s discuss how we can build technology that drives real growth for your business in Kenya.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all active:scale-95"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/254142021359"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-line hover:border-accent hover:text-accent px-10 py-5 rounded-xl font-semibold text-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>

          <p className="text-ink-dim text-sm font-mono">Nairobi, Kenya • daleondynamics@gmail.com</p>
        </Reveal>
      </section>
    </main>
  );
};

export default Home;