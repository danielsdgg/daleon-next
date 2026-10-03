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

const SITE_URL = 'https://daleondynamics.com';
const WHATSAPP_URL = 'https://wa.me/254142021359';

const DESCRIPTION =
  'Nairobi web design and custom software company. High-converting websites from KES 55,000 and custom web apps from KES 200,000, with M-Pesa integration.';

export const metadata: Metadata = {
  title: { absolute: 'Web Design & Custom Software in Nairobi | Daleon Dynamics' },
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Web Design & Custom Software in Nairobi | Daleon Dynamics',
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'Daleon Dynamics',
    images: [{ url: '/icon.png', alt: 'Daleon Dynamics logo' }],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Web Design & Custom Software in Nairobi | Daleon Dynamics',
    description: DESCRIPTION,
    images: ['/icon.png'],
  },
};

/* ====================== CONTENT ====================== */

// Only claims you can back up belong here. Update these as real data comes in.
const proofStats = [
  { value: '65%', label: 'reduction in admin workload', source: 'Morgan Learning Academy platform' },
  { value: '4–8 wks', label: 'typical delivery for a standard website', source: 'Timeline agreed before work starts' },
  { value: 'KES 55K', label: 'starting price for a high-converting website', source: 'Fixed price, published upfront' },
];

const differentiators = [
  {
    icon: Smartphone,
    title: 'Built for the Kenyan market',
    desc: 'Native M-Pesa (Daraja API) integration, local payment flows, and systems designed around how Kenyan businesses actually operate, not generic templates.',
  },
  {
    icon: Zap,
    title: 'Realistic turnaround',
    desc: 'Standard websites ship in 4–8 weeks, custom applications in 12–20 weeks. You get a clear timeline before work starts, not an open-ended estimate.',
  },
  {
    icon: Receipt,
    title: 'Transparent pricing',
    desc: 'Fixed-price packages starting from KES 55,000 for websites and KES 200,000 for custom web apps, published upfront. No hidden costs, no scope surprises halfway through.',
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
    title: 'High-Converting Websites',
    desc: 'Fast, mobile-first business websites designed to rank on Google, attract customers, and turn visitors into enquiries.',
    link: '/services/high-converting-website',
  },
  {
    icon: Code2,
    title: 'Custom Web Apps & Business Systems',
    desc: 'Custom CRMs, internal tools, dashboards, and workflow automation built around your exact business processes, with M-Pesa and API integrations.',
    link: '/services/custom-web-apps',
  },
];

const packages = [
  {
    name: 'High-Converting Website',
    price: 'KES 55,000',
    note: 'Typical delivery: 4–8 weeks',
    features: [
      'Conversion-focused, mobile-first design',
      'Fast loading and SEO-ready structure (metadata, sitemap, schema)',
      'Contact form and WhatsApp lead capture',
      'Support window after launch',
    ],
    link: '/services/high-converting-website',
  },
  {
    name: 'Custom Web App',
    price: 'KES 200,000',
    note: 'Typical delivery: 12–20 weeks',
    features: [
      'Custom CRMs, dashboards, and internal tools',
      'Workflow automation built around your process',
      'M-Pesa (Daraja) and third-party integrations',
      'Support window and maintenance options',
    ],
    link: '/services/custom-web-apps',
  },
];

type Project = {
  title: string;
  category: string;
  year?: string;
  description: string;
  liveUrl?: string;
  image?: string;
  result?: string;
};

const featuredProjects: Project[] = [
  {
    title: 'Morgan Technical Training Website',
    category: 'Business Website',
    description:
      'Marketing website for a Kenyan tech training school, built to rank for course searches and turn visitors into applications.',
    liveUrl: 'https://morgantechnicaltraining.co.ke',
    image: '/Mtt.jpg'
    // TODO: add `result` once you have real Search Console / enquiry numbers,
    // for example: result: 'Organic clicks up X% in Y months'
  },
  {
    title: 'Morgan Learning Academy',
    category: 'Learning Management System',
    year: '2024',
    description:
      'Learning platform for a Kenyan academy. Features course management, student tracking, assessments, and a parent portal.',
    image: '/morgan.webp',
    result: 'Reduced admin workload by 65%',
    // liveUrl left out until the demo is on a proper subdomain
    // (the onrender.com address looks unprofessional to corporate buyers).
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery and quote',
    desc: 'We learn your goals, audience, and budget, then send a fixed-price quote with a clear timeline.',
  },
  {
    step: '02',
    title: 'Design and build',
    desc: 'Mobile-first design and development in Next.js, with your feedback at each stage.',
  },
  {
    step: '03',
    title: 'Launch and search setup',
    desc: 'Testing, speed checks, search-engine setup, and go-live.',
  },
  {
    step: '04',
    title: 'Support and growth',
    desc: 'A support window after launch, with monthly maintenance available to keep things secure and fast.',
  },
];

const faqs = [
  {
    q: 'How much does a website cost in Kenya?',
    a: 'At Daleon Dynamics, high-converting business websites start from KES 55,000 and custom web apps start from KES 200,000. The final price depends on the number of pages and features, and you receive a fixed-price quote before any work begins.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'Standard websites typically take 4–8 weeks and custom web applications 12–20 weeks. You get a clear timeline before work starts.',
  },
  {
    q: 'Can you integrate M-Pesa into my website or app?',
    a: 'Yes. We build M-Pesa payments using the Daraja API, along with other local payment flows that Kenyan businesses rely on.',
  },
  {
    q: 'What technologies do you use?',
    a: 'We primarily build with Next.js, TypeScript, and Tailwind CSS for fast, scalable, SEO-friendly sites and applications. On request, we can also work with WordPress or other platforms depending on the project.',
  },
  {
    q: 'Do you offer support after the website goes live?',
    a: 'Every project includes a support window, and monthly maintenance retainers are available afterward to keep your site secure, fast, and up to date.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'High-converting website development',
      serviceType: 'Web design and development',
      areaServed: { '@type': 'Country', name: 'Kenya' },
      provider: { '@id': `${SITE_URL}/#organization` },
      url: `${SITE_URL}/services/high-converting-website`,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'KES',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'KES',
          minPrice: 55000,
        },
      },
    },
    {
      '@type': 'Service',
      name: 'Custom web application development',
      serviceType: 'Custom software development',
      areaServed: { '@type': 'Country', name: 'Kenya' },
      provider: { '@id': `${SITE_URL}/#organization` },
      url: `${SITE_URL}/services/custom-web-apps`,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'KES',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'KES',
          minPrice: 200000,
        },
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
  ],
};

/* ====================== PAGE ====================== */

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F2F1F7]">
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
            <p className="text-lg text-[#8E8CA3] leading-relaxed mb-8 max-w-lg">
              We build high-converting websites, custom web applications, and business automation
              systems, with M-Pesa integration, for Kenyan businesses that want to grow faster and
              operate smarter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-[#7B5CFF] hover:bg-[#8E73FF] text-white px-8 py-4 rounded-lg font-semibold transition-all active:scale-95"
              >
                Get Your Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-[#232330] hover:border-[#38E1C6] hover:text-[#38E1C6] px-8 py-4 rounded-lg font-semibold transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>

            <p className="text-sm text-[#8E8CA3]">
              Websites from KES 55,000 · Custom web apps from KES 200,000 ·{' '}
              <Link href="/services" className="text-[#38E1C6] hover:underline">
                Explore our services
              </Link>
            </p>
          </div>

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

            <div className="absolute -bottom-6 -left-6 bg-[#0F0F14] border border-[#232330] rounded-xl p-5 shadow-2xl shadow-black/50 max-w-[220px]">
              <div className="font-mono text-[11px] text-[#8E8CA3] uppercase tracking-wider mb-1">
                Client result
              </div>
              <div className="text-2xl font-bold text-[#F2F1F7]">65%</div>
              <div className="text-xs text-[#8E8CA3]">
                reduction in admin workload after launching a learning platform
              </div>
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
              <div className="text-sm text-[#8E8CA3] font-mono mt-1">{stat.source}</div>
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
              Kenyan businesses don&apos;t need a generic template. They need a team that understands
              the local market and builds accordingly.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {differentiators.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.title} className="flex gap-5 p-6 rounded-xl border border-[#232330] bg-[#0F141B]">
                  <div className="w-11 h-11 rounded-lg bg-[#7B5CFF]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#38E1C6]" aria-hidden="true" />
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

      {/* SERVICES */}
      <section className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// our-services'}</div>
            <h2 className="text-4xl font-bold tracking-tight">
              Website development and custom software for Kenyan businesses
            </h2>
          </div>

          <div className="divide-y divide-[#232330]">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.link}
                  className="group flex flex-col sm:flex-row sm:items-center gap-6 py-8 hover:bg-[#0F141B] -mx-6 px-6 rounded-lg transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#0F141B] border border-[#232330] flex items-center justify-center flex-shrink-0 group-hover:border-[#7B5CFF] transition-colors">
                    <Icon className="w-6 h-6 text-[#38E1C6]" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                    <p className="text-[#8E8CA3]">{service.desc}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#7B5CFF] flex-shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              );
            })}
          </div>

          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 text-[#38E1C6] font-semibold hover:gap-4 transition-all"
            >
              View all services <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// pricing'}</div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Website and web app pricing in Kenya
            </h2>
            <p className="text-lg text-[#8E8CA3]">
              Clear starting prices. The final fixed price depends on your scope, and you get a quote
              before any work begins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className="flex flex-col p-8 rounded-xl border border-[#232330] bg-[#0F141B]">
                <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                <div className="mb-1">
                  <span className="text-sm text-[#8E8CA3]">From </span>
                  <span className="text-4xl font-bold text-[#F2F1F7]">{pkg.price}</span>
                </div>
                <p className="text-sm text-[#8E8CA3] font-mono mb-6">{pkg.note}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-[#8E8CA3]">
                      <CheckCircle2 className="w-4 h-4 text-[#38E1C6] flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#7B5CFF] hover:bg-[#8E73FF] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all active:scale-95"
                  >
                    Get a quote
                  </Link>
                  <Link
                    href={pkg.link}
                    className="inline-flex items-center gap-2 text-[#38E1C6] font-semibold text-sm hover:underline"
                  >
                    Learn more <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED CLIENT WORK */}
      <section id="projects" className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// client-work'}</div>
              <h2 className="text-4xl font-bold tracking-tight">Selected client work</h2>
            </div>
            <Link
              href="/projects"
              className="text-[#38E1C6] hover:text-[#5EEBD4] font-medium flex items-center gap-2 group flex-shrink-0"
            >
              View all projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="group bg-[#0F141B] rounded-xl overflow-hidden border border-[#232330] hover:border-[#7B5CFF] transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} - ${project.category} built by Daleon Dynamics`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0F141B] to-[#7B5CFF]/20">
                      <Globe className="w-12 h-12 text-[#38E1C6]" aria-hidden="true" />
                    </div>
                  )}
                  {project.year && (
                    <div className="absolute top-5 right-5 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-[#F2F1F7]">
                      {project.year}
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <div className="font-mono uppercase text-[#7B5CFF] text-xs tracking-wider mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                  {project.result && (
                    <div className="inline-flex items-center gap-2 bg-[#38E1C6]/10 text-[#38E1C6] text-xs font-medium px-3 py-1.5 rounded-full mb-4">
                      <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" /> {project.result}
                    </div>
                  )}

                  <p className="text-[#8E8CA3] mb-6 leading-relaxed text-sm">{project.description}</p>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#7B5CFF] hover:text-[#8E73FF] font-semibold text-sm group-hover:gap-3 transition-all"
                    >
                      Visit website <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// how-we-work'}</div>
            <h2 className="text-4xl font-bold tracking-tight">
              How we build your website or web app
            </h2>
          </div>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <li key={p.step} className="p-6 rounded-xl border border-[#232330] bg-[#0F141B]">
                <div className="font-mono text-sm text-[#7B5CFF] mb-3">{p.step}</div>
                <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-[#8E8CA3] leading-relaxed">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// faq'}</div>
            <h2 className="text-4xl font-bold tracking-tight">
              Frequently asked questions about web design in Nairobi
            </h2>
          </div>

          <div className="divide-y divide-[#232330] border-y border-[#232330]">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-lg">
                  {f.q}
                  <span
                    className="text-[#38E1C6] text-2xl leading-none transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[#8E8CA3] leading-relaxed">{f.a}</p>
              </details>
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
              Now accepting new projects
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            Ready to Grow Your Business Online?
          </h2>

          <p className="text-lg text-[#8E8CA3] max-w-xl mx-auto mb-12">
            Tell us what you need and we&apos;ll send a fixed-price quote and timeline for your
            website or web app.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-[#7B5CFF] hover:bg-[#8E73FF] text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all active:scale-95"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-[#232330] hover:border-[#38E1C6] hover:text-[#38E1C6] px-10 py-5 rounded-xl font-semibold text-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          <p className="text-[#8E8CA3] text-sm font-mono">Nairobi, Kenya • daleondynamics@gmail.com</p>
        </div>
      </section>

      {/* Structured data: services with starting prices, and FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
};

export default Home;