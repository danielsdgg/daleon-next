// app/about/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Users,
  Target,
  Award,
  Clock,
  Code2,
  Globe,
  ShieldCheck,
  Zap,
  MapPin,
  Layout,
  Server,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import type { Metadata } from 'next';

const SITE_URL = 'https://daleondynamics.com';
const PAGE_PATH = '/about';
const WHATSAPP_URL = 'https://wa.me/254142021359';

const TITLE = 'About Daleon Dynamics | Web Design & Software Company in Nairobi';
const DESCRIPTION =
  'Daleon Dynamics is a Nairobi web design and software company founded in 2024. We build high-converting websites and custom web apps for Kenyan businesses, with M-Pesa integration.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: 'Daleon Dynamics',
    images: [{ url: '/icon.png', alt: 'Daleon Dynamics logo' }],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/icon.png'],
  },
};

/* ====================== CONTENT ====================== */

// Fill these in to show the founder section (strongly recommended: a real
// name, a real photo at /public/founder.jpg, and a short honest bio).
// While `name` or `bio` is empty, the section and its schema stay hidden.
const founder = {
  name: '',
  role: 'Founder & Lead Developer',
  bio: '',
  photo: '/founder.jpg',
  linkedin: '',
};
const showFounder = founder.name.length > 0 && founder.bio.length > 0;

const heroFacts = [
  { value: '2024', label: 'Founded in Nairobi' },
  { value: '4–8 wks', label: 'Typical website delivery' },
  { value: 'Next.js', label: 'Our primary stack' },
];

// Check these years against your projects page (the LMS is listed as 2024).
const milestones = [
  {
    year: '2024',
    label: 'Founded in Nairobi',
    desc: 'Daleon Dynamics started with a simple goal: build websites and software around how Kenyan businesses actually work, not one-size-fits-all templates.',
  },
  {
    year: '2025',
    label: 'First client projects',
    desc: 'Our first client projects went live: business websites and custom web applications with real backends and integrations.',
  },
  {
    year: '2026',
    label: 'A focused offering',
    desc: 'Today we focus on two things we do well: high-converting websites and custom web applications, with published starting prices and fixed-price quotes.',
  },
];

const coreOfferings = [
  {
    icon: Layout,
    accent: '#38E1C6',
    title: 'High-Converting Websites',
    tagline: 'Fast, content-first, built to be found and to convert.',
    description:
      'No logins and no complex back end. Just fast, SEO-ready pages designed to rank on Google and turn visitors into enquiries. Ideal for businesses that need a strong, informative online presence.',
    examples: [
      'Business and company websites',
      'Landing and service pages',
      'Portfolio and brochure sites',
      'SEO-first content pages',
    ],
    link: '/services/high-converting-website',
    cta: 'See high-converting websites',
    price: 'From KES 55,000',
  },
  {
    icon: Server,
    accent: '#7B5CFF',
    title: 'Custom Web Applications',
    tagline: 'Dynamic platforms with a real back end behind them.',
    description:
      'Anything that needs a database, user accounts, or a live integration falls here. Built to handle data and transactions securely, and to grow with your business.',
    examples: [
      'E-commerce stores',
      'Learning management systems',
      'M-Pesa and payment gateway integration',
      'CRMs, dashboards, and internal tools',
    ],
    link: '/services/custom-web-apps',
    cta: 'See custom web apps',
    price: 'From KES 200,000',
  },
];

const values = [
  {
    icon: Target,
    title: 'Results First',
    desc: 'Every build starts from a business goal: more enquiries, less manual work, or smoother operations.',
  },
  {
    icon: Code2,
    title: 'Quality Over Quantity',
    desc: 'Clean, maintainable, scalable code, and the right tool for each job instead of shortcuts.',
  },
  {
    icon: Globe,
    title: 'Built for Kenya',
    desc: 'We understand M-Pesa, local payment flows, and how Kenyan businesses actually operate.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparency',
    desc: 'Published starting prices, fixed-price quotes, clear timelines, and no hidden fees.',
  },
];

const whyChooseUs = [
  {
    icon: Zap,
    title: 'Modern Tech Stack',
    desc: 'We primarily build with Next.js, TypeScript, and Tailwind CSS on scalable cloud infrastructure. On request, we also work with WordPress and other platforms.',
  },
  {
    icon: Users,
    title: 'Local Market Knowledge',
    desc: 'M-Pesa (Daraja) integration, local payment flows, and a practical grasp of how Kenyan businesses run.',
  },
  {
    icon: Award,
    title: 'Ownership & Transparency',
    desc: 'You own the finished product, with hosting access at handover. Clear timelines, regular updates, and honest communication.',
  },
  {
    icon: Clock,
    title: 'Direct Access & Ongoing Support',
    desc: 'You deal directly with the person who designs and builds your project. After launch we offer training and flexible maintenance packages.',
  },
];

const faqs = [
  {
    q: 'Where is Daleon Dynamics based, and do you work outside Nairobi?',
    a: 'We are based in Nairobi, Kenya, and work with clients across the country. Most projects can be handled remotely from start to finish.',
  },
  {
    q: 'When was Daleon Dynamics founded?',
    a: 'Daleon Dynamics was founded in 2024 in Nairobi. We build high-converting websites and custom web applications for Kenyan businesses.',
  },
  {
    q: "What's the difference between a high-converting website and a custom web application?",
    a: 'A high-converting website is a fast, content-rich site built for visibility and lead generation, with no back end required. A custom web application has a real back end, such as an e-commerce store, learning platform, or payment-integrated system, built to handle data, accounts, and transactions.',
  },
  {
    q: 'Do you build e-commerce stores and payment integrations?',
    a: 'Yes. These fall under our custom web application work, and commonly include M-Pesa and other payment gateway integrations, secure user accounts, and admin dashboards.',
  },
  {
    q: 'What technologies do you use?',
    a: 'We primarily build with Next.js, TypeScript, and Tailwind CSS for fast, scalable, SEO-friendly sites and applications. On request, we can also work with WordPress or other platforms depending on the project.',
  },
  {
    q: 'Who will work on my project?',
    a: 'You work directly with the person who designs and builds your project, so there is no account manager between you and the developer. You get clear updates and a timeline before work starts.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Yes. Every project includes a support window, and we offer training, handover documentation, and flexible monthly maintenance packages after your site or application goes live.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': `${SITE_URL}${PAGE_PATH}#page`,
      url: `${SITE_URL}${PAGE_PATH}`,
      name: 'About Daleon Dynamics',
      description: DESCRIPTION,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      mainEntity: { '@id': `${SITE_URL}/#organization` },
    },
    ...(showFounder
      ? [
          {
            '@type': 'Person',
            '@id': `${SITE_URL}${PAGE_PATH}#founder`,
            name: founder.name,
            jobTitle: founder.role,
            worksFor: { '@id': `${SITE_URL}/#organization` },
            ...(founder.linkedin ? { sameAs: [founder.linkedin] } : {}),
          },
        ]
      : []),
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'About Us', item: `${SITE_URL}${PAGE_PATH}` },
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

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F2F1F7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#232330]">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(123,92,255,0.20),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(56,225,198,0.18),transparent_35%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-28">
          <nav aria-label="Breadcrumb" className="mb-10 font-mono text-xs text-[#8E8CA3]">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-[#38E1C6]">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#F2F1F7]">About Us</li>
            </ol>
          </nav>

          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#38E1C6]/30 bg-[#38E1C6]/10 px-5 py-2 text-sm font-medium text-[#38E1C6]">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Nairobi-based software company
              </span>

              <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                About Daleon Dynamics: web design and custom software in Nairobi
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-[#8E8CA3]">
                Since 2024, we have designed and built websites and web applications for ambitious Kenyan
                businesses, from high-converting, SEO-ready websites to custom systems like e-commerce
                stores, learning platforms, and M-Pesa payment integrations.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="rounded-xl bg-[#7B5CFF] px-8 py-4 font-semibold text-white transition hover:bg-[#8E73FF]"
                >
                  Explore Our Services
                </Link>
                <Link
                  href="/projects"
                  className="rounded-xl border border-[#232330] px-8 py-4 font-semibold transition hover:border-[#38E1C6] hover:text-[#38E1C6]"
                >
                  View Our Work
                </Link>
              </div>

              <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6">
                {heroFacts.map((f) => (
                  <div key={f.label}>
                    <dd className="text-2xl font-bold text-[#F2F1F7] md:text-3xl">{f.value}</dd>
                    <dt className="mt-1 text-sm text-[#8E8CA3]">{f.label}</dt>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className="relative h-[480px] overflow-hidden rounded-3xl border border-[#232330] bg-[#0F141B] lg:h-[580px]">
                {/* Decorative image: swap for a real photo of you or your workspace when you can */}
                <Image
                  src="/code2.png"
                  alt=""
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="absolute -bottom-8 -left-4 max-w-xs rounded-2xl border border-[#232330] bg-[#0F0F14] p-6 shadow-2xl shadow-black/50 lg:-left-10 lg:bottom-10">
                <div className="mb-3 font-mono text-xs text-[#38E1C6]">{'// our-mission'}</div>
                <p className="text-xl font-bold leading-snug">
                  Technology that helps Kenyan businesses grow.
                </p>
                <p className="mt-3 text-sm text-[#8E8CA3]">
                  Whether it is a lead-generating website or a full e-commerce platform, we combine
                  strategy, design, and engineering to get results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="border-b border-[#232330] py-16">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xl leading-relaxed text-[#8E8CA3]">
            We believe Kenyan businesses deserve world-class digital tools, built locally with a real
            understanding of the market. We don&apos;t just write code; we solve problems and build systems
            that help businesses grow, automate, and compete.
          </p>
        </div>
      </section>

      {/* FOUNDER (only shows once you fill in the `founder` object above) */}
      {showFounder && (
        <section className="border-b border-[#232330] py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-12">
              <div className="mb-3 font-mono text-sm text-[#7B5CFF]">{'// the-founder'}</div>
              <h2 className="text-4xl font-bold tracking-tight">Meet the founder</h2>
            </div>
            <div className="grid items-center gap-10 md:grid-cols-[240px_1fr]">
              <div className="relative h-72 w-full overflow-hidden rounded-2xl border border-[#232330] md:h-80">
                <Image
                  src={founder.photo}
                  alt={`${founder.name}, ${founder.role} at Daleon Dynamics`}
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{founder.name}</h3>
                <p className="mb-4 font-mono text-sm text-[#38E1C6]">{founder.role}</p>
                <p className="leading-relaxed text-[#C9C8D6]">{founder.bio}</p>
                {founder.linkedin && (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#38E1C6] hover:underline"
                  >
                    Connect on LinkedIn <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* OUR STORY */}
      <section className="border-b border-[#232330] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16">
            <div className="mb-3 font-mono text-sm text-[#7B5CFF]">{'// our-story'}</div>
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Our Story</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-[#8E8CA3]">
              Daleon Dynamics grew from seeing Kenyan businesses stuck with generic templates, slow
              websites, and software that didn&apos;t match how they actually worked. Here is the path so
              far.
            </p>
          </div>

          <ol className="grid gap-10 md:grid-cols-3">
            {milestones.map((m) => (
              <li key={m.year} className="relative border-t-2 border-[#232330] pt-8">
                <span
                  aria-hidden="true"
                  className="absolute -top-[9px] left-0 h-4 w-4 rounded-full border-2 border-[#7B5CFF] bg-[#0A0A0F]"
                />
                <div className="font-mono text-sm text-[#7B5CFF]">{m.year}</div>
                <h3 className="mt-2 text-xl font-semibold">{m.label}</h3>
                <p className="mt-3 leading-relaxed text-[#8E8CA3]">{m.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="border-b border-[#232330] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="mb-3 font-mono text-sm text-[#7B5CFF]">{'// what-we-build'}</div>
            <h2 className="mb-4 text-4xl font-bold">Two Ways We Build for You</h2>
            <p className="text-lg text-[#8E8CA3]">
              Every project starts by working out which of these you actually need.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {coreOfferings.map((offer) => {
              const Icon = offer.icon;
              return (
                <article
                  key={offer.title}
                  className="flex flex-col rounded-2xl border border-[#232330] bg-[#0F141B] p-8"
                >
                  <div style={{ color: offer.accent }}>
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold">{offer.title}</h3>
                  <p className="mt-2 text-sm font-medium" style={{ color: offer.accent }}>
                    {offer.tagline}
                  </p>
                  <p className="mt-4 leading-relaxed text-[#8E8CA3]">{offer.description}</p>
                  <ul className="mt-6 flex-1 space-y-2">
                    {offer.examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-2 text-sm text-[#C9C8D6]">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: offer.accent }}
                        />
                        {ex}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex items-center justify-between gap-4">
                    <Link
                      href={offer.link}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#38E1C6] hover:underline"
                    >
                      {offer.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <span className="font-mono text-xs text-[#8E8CA3]">{offer.price}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-b border-[#232330] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <div className="mb-3 font-mono text-sm text-[#7B5CFF]">{'// core-values'}</div>
            <h2 className="mb-4 text-4xl font-bold">Our Core Values</h2>
            <p className="text-lg text-[#8E8CA3]">The principles that guide every project we deliver</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="flex gap-6 rounded-2xl border border-[#232330] bg-[#0F141B] p-8"
                >
                  <div className="mt-1 flex-shrink-0 text-[#38E1C6]">
                    <Icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                    <p className="text-[#8E8CA3]">{value.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="border-b border-[#232330] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <div className="mb-3 font-mono text-sm text-[#7B5CFF]">{'// why-choose-us'}</div>
            <h2 className="text-4xl font-bold">Why Choose Daleon Dynamics</h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-6">
                  <div className="mt-1 flex-shrink-0 text-[#38E1C6]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                    <p className="text-[#8E8CA3]">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-[#232330] py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-3 font-mono text-sm text-[#7B5CFF]">{'// faq'}</div>
          <h2 className="mb-12 text-4xl font-bold">About Daleon Dynamics: Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-[#232330] bg-[#0F141B] p-6 open:border-[#38E1C6]"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-medium">
                  {faq.q}
                  <span
                    className="flex-shrink-0 text-[#38E1C6] transition group-open:rotate-45"
                    aria-hidden="true"
                  >
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
      <section className="py-24 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">Let&apos;s Build Something Great Together</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-[#8E8CA3]">
            Whether you need a high-converting website or a custom web application, tell us what you
            need and we&apos;ll send a fixed-price quote and timeline.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#7B5CFF] px-10 py-5 text-lg font-semibold text-white transition hover:bg-[#8E73FF]"
            >
              Start a Conversation
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-[#232330] px-10 py-5 text-lg font-semibold transition hover:border-[#38E1C6] hover:text-[#38E1C6]"
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

export default About;