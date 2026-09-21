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
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Daleon Dynamics | Web & Software Company' },
  description:
    'Daleon Dynamics is a leading web design and custom software development company based in Nairobi, Kenya. We build high-converting websites, web applications & much more.',
  keywords: [
    'daleon dynamics', 'web design nairobi', 'custom software development nairobi',
    'company that creates websites','website development nairobi', 'custom software development nairobi',
    'web application development kenya', 'high converting websites nairobi', 'seo services nairobi',
    'business automation kenya', 'access control systems nairobi', 'biometric access control kenya',
    'software company nairobi', 'ecommerce website kenya', 'daleon dynamics', 'm-pesa integration kenya'
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
        url: '/icon.png',
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
    images: ['/icon.png'],
  },
};

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
    image: '/karendirect.png',
    result: 'Increased policy renewals by 42%',
  },
  {
    title: 'Morgan Learning Academy',
    category: 'Learning Management System',
    year: '2024',
    description:
      'Comprehensive LMS built for a leading Kenyan academy. Features course management, student tracking, assessments, and parent portal.',
    liveUrl: 'https://canvas-1-jxo5.onrender.com/',
    image: '/morgan.webp',
    result: 'Reduced admin workload by 65%',
  },
  {
    title: 'SecureGate Access Control',
    category: 'Security & Facilities',
    year: '2025',
    description:
      'Cloud-based biometric access control system with real-time monitoring, visitor management, and staff attendance tracking.',
    liveUrl: '#',
    image: '/secure.webp',
    result: 'Deployed across 12 locations',
  },
];

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-[#F2F1F7]">
      {/* HERO */}
      <section className="pt-28 pb-20 px-6 border-b border-[#232330]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-sm text-[#7B5CFF] mb-6">
              <span>{'//'}</span>
              <span>nairobi-based software company</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              Web Design &amp; Custom Software Company in Nairobi, Kenya
            </h1>
            <p className="text-lg text-[#8E8CA3] leading-relaxed mb-10 max-w-lg">
              We build high-converting websites, powerful custom web applications, business automation
              systems, and secure biometric access control solutions that help Kenyan businesses grow
              faster and operate smarter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-[#7B5CFF] hover:bg-[#8E73FF] text-white px-8 py-4 rounded-lg font-semibold transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38E1C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F]"
              >
                Get Your Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-3 border border-[#232330] hover:border-[#38E1C6] hover:text-[#38E1C6] px-8 py-4 rounded-lg font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38E1C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F]"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          {/* Photo signature element */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden border border-[#232330] shadow-2xl shadow-black/40 aspect-[4/5] lg:aspect-[4/4.5]">
              <Image
                src="/code-DD.avif"
                alt="Team collaborating on a software project"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-[#7B5CFF]/10" />
            </div>

            {/* Floating proof card */}
            <div className="absolute -bottom-6 -left-6 bg-[#0F0F14] border border-[#232330] rounded-xl p-5 shadow-2xl shadow-black/50 max-w-[220px]">
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38E1C6] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#38E1C6]" />
                </span>
                <span className="font-mono text-[11px] text-[#8E8CA3] uppercase tracking-wider">Live result</span>
              </div>
              <div className="text-2xl font-bold text-[#F2F1F7]">42%</div>
              <div className="text-xs text-[#8E8CA3]">increase in policy renewals for a Nairobi insurer</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="py-14 px-6 border-b border-[#232330] bg-[#0F0F14]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {proofStats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className="text-4xl font-bold text-[#7B5CFF] mb-1">{stat.value}</div>
              <div className="text-[#F2F1F7] font-medium">{stat.label}</div>
              <div className="text-sm text-[#5C5A6E] font-mono mt-1">{stat.source}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY DALEON DYNAMICS */}
      <section className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// why-daleon-dynamics'}</div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              What sets us apart in Nairobi&apos;s software market
            </h2>
            <p className="text-lg text-[#8E8CA3]">
              Kenyan businesses don&apos;t need a generic template — they need a team that understands the
              local market and builds accordingly.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {differentiators.map((d, i) => {
              const Icon = d.icon;
              return (
                <div key={i} className="flex gap-5 p-6 rounded-xl border border-[#232330] bg-[#0F141B]">
                  <div className="w-11 h-11 rounded-lg bg-[#7B5CFF]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#38E1C6]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{d.title}</h3>
                    <p className="text-[#8E8CA3] text-sm leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES TEASER — alternating rows, distinct from /services grid */}
      <section className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// our-services'}</div>
            <h2 className="text-4xl font-bold tracking-tight">Tailored digital solutions for Kenyan businesses</h2>
          </div>

          <div className="divide-y divide-[#232330]">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link
                  key={i}
                  href={service.link}
                  className="group flex flex-col sm:flex-row sm:items-center gap-6 py-8 hover:bg-[#0F141B] -mx-6 px-6 rounded-lg transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#0F141B] border border-[#232330] flex items-center justify-center flex-shrink-0 group-hover:border-[#7B5CFF] transition-colors">
                    <Icon className="w-6 h-6 text-[#38E1C6]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                    <p className="text-[#8E8CA3]">{service.desc}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#7B5CFF] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              );
            })}
          </div>

          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 text-[#38E1C6] font-semibold hover:gap-4 transition-all"
            >
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// recent-work'}</div>
              <h2 className="text-4xl font-bold tracking-tight">Real results for Kenyan businesses</h2>
            </div>
            <Link
              href="/projects"
              className="text-[#38E1C6] hover:text-[#5EEBD4] font-medium flex items-center gap-2 group flex-shrink-0"
            >
              View all projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-[#0F141B] rounded-xl overflow-hidden border border-[#232330] hover:border-[#7B5CFF] transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.category} project by Daleon Dynamics`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-5 right-5 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-[#F2F1F7]">
                    {project.year}
                  </div>
                </div>

                <div className="p-8">
                  <div className="font-mono uppercase text-[#7B5CFF] text-xs tracking-wider mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                  {project.result && (
                    <div className="inline-flex items-center gap-2 bg-[#38E1C6]/10 text-[#38E1C6] text-xs font-medium px-3 py-1.5 rounded-full mb-4">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {project.result}
                    </div>
                  )}

                  <p className="text-[#8E8CA3] mb-6 leading-relaxed line-clamp-3 text-sm">{project.description}</p>

                  {project.liveUrl !== '#' ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#7B5CFF] hover:text-[#8E73FF] font-semibold text-sm group-hover:gap-3 transition-all"
                    >
                      View Live Project <ExternalLink className="w-4 h-4" />
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

      {/* FINAL CTA */}
      <section id="contact" className="py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 inline-flex items-center gap-3 bg-[#131319] border border-[#232330] px-6 py-2.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38E1C6] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38E1C6]" />
            </span>
            <span className="font-mono uppercase tracking-widest text-xs text-[#8E8CA3]">
              Limited slots available this quarter
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            Ready to Transform Your Digital Presence?
          </h2>

          <p className="text-lg text-[#8E8CA3] max-w-xl mx-auto mb-12">
            Let&apos;s discuss how we can build technology that drives real growth for your business in Kenya.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-[#7B5CFF] hover:bg-[#8E73FF] text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all active:scale-95"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/254142021359"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-[#232330] hover:border-[#38E1C6] hover:text-[#38E1C6] px-10 py-5 rounded-xl font-semibold text-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>

          <p className="text-[#5C5A6E] text-sm font-mono">Nairobi, Kenya • daleondynamics@gmail.com</p>
        </div>
      </section>
    </main>
  );
};

export default Home;