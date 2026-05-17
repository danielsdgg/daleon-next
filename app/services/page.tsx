// app/services/page.tsx
import React from 'react';
import Link from 'next/link';
import {
  Code2,
  Globe,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
  Star,
  Info
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design & Custom Software Development Kenya | Daleon Dynamics',
  description:
    'Professional web design, high-converting websites, custom software development, business automation systems, and biometric access control solutions in Nairobi, Kenya.',
  keywords: [
    'web development services kenya',
    'custom software development nairobi',
    'website design kenya',
    'high converting websites kenya',
    'custom web applications kenya',
    'access control systems kenya',
    'biometric access control nairobi',
    'business automation software kenya',
    'software development company kenya',
    'm-pesa integration kenya',
    'custom crm kenya',
    'enterprise software development kenya',
    'daleon dynamics services'
  ],
  alternates: {
    canonical: 'https://daleondynamics.com/services'
  },
  openGraph: {
    title: 'Our Services - Web Development & Custom Software Kenya | Daleon Dynamics',
    description:
      'High-converting websites, powerful custom software, and intelligent access control systems built for Kenyan businesses.',
    url: 'https://daleondynamics.com/services',
    images: [
      {
        url: 'https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png',
        width: 1200,
        height: 630,
        alt: 'Daleon Dynamics Services - Web Development Kenya'
      }
    ],
    locale: 'en_KE',
    type: 'website'
  }
};

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Code2 className="w-14 h-14" />,
      title: 'Custom Software Development',
      shortDesc: 'Bespoke software engineered for your exact business needs.',
      fullDesc:
        'We develop scalable, secure custom software solutions tailored to your unique business processes. From CRMs and ERPs to enterprise automation, every solution is built for performance and long-term maintainability.',
      features: [
        'Custom CRM & ERP systems',
        'Business process automation',
        'M-Pesa and payment integrations',
        'Real-time analytics & dashboards',
        'Role-based access control',
        'Scalable cloud architecture'
      ],
      link: '/services/custom-web-apps',
      color: 'blue'
    },
    {
      icon: <Globe className="w-14 h-14" />,
      title: 'Websites & Web Applications',
      shortDesc: 'High-converting digital experiences that represent your brand.',
      fullDesc:
        'We create modern, fast, and SEO-optimized websites and web applications that generate leads, increase sales, and grow your business in Kenya.',
      features: [
        'High-converting website design',
        'SEO & performance optimization',
        'Mobile-first responsive design',
        'Secure user authentication',
        'Content management systems',
        'Third-party integrations (M-Pesa, etc.)'
      ],
      link: '/services/high-converting-website',
      color: 'indigo'
    },
    {
      icon: <ShieldCheck className="w-14 h-14" />,
      title: 'Access Control Systems',
      shortDesc: 'Smart, secure, and intelligent access management.',
      fullDesc:
        'We design and implement advanced biometric and cloud-based access control systems for offices, residential estates, warehouses, and institutions.',
      features: [
        'Fingerprint & facial recognition',
        'Cloud dashboard & mobile access',
        'Real-time alerts & logs',
        'Visitor management module',
        'Attendance tracking system',
        'High-level security compliance'
      ],
      link: '/services/access-control-systems',
      color: 'emerald'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: 'From KES 80,000',
      desc: 'Perfect for small businesses and simple professional websites',
      features: [
        'Modern responsive website (up to 8 pages)',
        'Contact form & basic integrations',
        'Mobile-friendly design',
        'SEO optimization',
        '1 month post-launch support',
        'Training & handover'
      ]
    },
    {
      name: 'Growth',
      price: 'From KES 200,000',
      desc: 'For growing companies needing custom functionality and better results',
      features: [
        'Advanced website or light web application',
        'Custom design & user authentication',
        'Admin dashboard',
        'Third-party integrations (e.g. M-Pesa)',
        'Performance & SEO optimization',
        '2 months support & maintenance'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Determined after discovery',
      desc: 'Large-scale custom software and intelligent business systems',
      features: [
        'Bespoke software development',
        'Complex integrations & automation',
        'Access control systems (biometric/cloud)',
        'Real-time monitoring & analytics',
        'Dedicated project manager',
        'Ongoing support options'
      ]
    }
  ];

  // JSON-LD structured data for the page (Service + Offer)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Design & Custom Software Development',
    provider: {
      '@type': 'Organization',
      name: 'Daleon Dynamics',
      url: 'https://daleondynamics.com',
      sameAs: ['https://www.linkedin.com/company/daleon-dynamics', 'https://twitter.com/daleondynamics'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Nairobi',
        addressCountry: 'Kenya'
      }
    },
    description:
      'Professional web design, high-converting websites, custom software development, business automation systems, and biometric access control solutions in Nairobi, Kenya.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Service Pricing',
      itemListElement: pricingTiers.map((tier) => ({
        '@type': 'Offer',
        name: tier.name,
        priceCurrency: 'KES',
        price: tier.price.includes('From') ? tier.price.replace(/[^\d]/g, '') || '0' : tier.price,
        url: 'https://daleondynamics.com/services'
      }))
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Inject structured data for crawlers */}
      <script
        key="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <header className="py-28 bg-zinc-950 text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full text-sm font-medium mb-8">
            <Star className="w-5 h-5 text-amber-400" />
            WHAT WE OFFER
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Services Built for <span className="text-blue-400">Real Business Impact</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            We build high-converting websites, powerful custom web applications, and secure access control systems that help Kenyan businesses automate operations and grow.
          </p>
        </div>
      </header>

      {/* CORE SERVICES */}
      <section aria-labelledby="core-services" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="core-services" className="text-4xl md:text-5xl font-bold text-center mb-12">
            Our Core Services
          </h2>

          <div className="grid lg:grid-cols-3 gap-12">
            {services.map((s, idx) => (
              <article
                key={idx}
                className="group bg-white border border-gray-100 rounded-3xl p-10 hover:shadow-2xl transition transform hover:-translate-y-2"
                aria-labelledby={`service-${idx}-title`}
              >
                <div className={`inline-flex p-4 rounded-2xl mb-6 ${s.color === 'blue' ? 'bg-blue-100 text-blue-600' : s.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' : 'bg-emerald-100 text-emerald-600'}`}>
                  {s.icon}
                </div>

                <h3 id={`service-${idx}-title`} className="text-2xl font-semibold mb-4">
                  {s.title}
                </h3>

                <p className="text-gray-600 mb-4">{s.shortDesc}</p>
                <p className="text-gray-700 mb-6">{s.fullDesc}</p>

                <ul className="mb-6 space-y-3">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link href={s.link} className="inline-flex items-center text-blue-600 font-semibold hover:gap-3 transition">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section aria-labelledby="pricing" className="py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="pricing" className="text-4xl md:text-5xl font-bold text-center mb-6">
            Project Investment Guide
          </h2>

          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Transparent starting prices to help you plan. Final quotes are provided after a short discovery call.
          </p>

          <div className="max-w-3xl mx-auto mb-8 bg-white border border-gray-100 rounded-2xl p-6 flex items-start gap-4">
            <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <p className="text-gray-600">
              Every project is unique. The prices below are starting points for typical scopes. Final investment is determined after a detailed discovery call where we understand your exact needs, complexity, timeline, and business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`bg-white rounded-3xl p-8 border transition ${i === 1 ? 'border-blue-600 scale-105 shadow-2xl relative' : 'border-gray-100 hover:shadow-xl'}`}
              >
                {i === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-gray-900 mb-2">{tier.price}</div>
                <p className="text-gray-500 mb-6">{tier.desc}</p>

                <ul className="mb-6 space-y-3">
                  {tier.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-xl font-semibold transition ${i === 1 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-gray-300 hover:bg-gray-50 text-gray-700'}`}
                >
                  {i === 1 ? 'Discuss Growth Project' : 'Get Personalized Quote'}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Many clients recover their investment within the first 6–12 months thanks to efficiency gains and automation.
          </p>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Businesses Choose Daleon Dynamics</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Custom-Coded Solutions</h3>
              <p className="text-gray-700">We build most systems from scratch using modern technologies instead of relying on templates. This gives you better performance, security, and full ownership.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Deep Understanding of Kenya</h3>
              <p className="text-gray-700">We understand local business challenges, payment systems like M-Pesa, and regulatory requirements — allowing us to deliver practical and effective solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start a project that actually moves the needle?</h2>
          <p className="text-gray-300 mb-8">Book a short discovery call and we’ll provide a clear scope and a tailored quote.</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-white text-zinc-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100">
              Start Your Project
            </Link>
            <Link href="/services/high-converting-website" className="border border-white/30 px-6 py-3 rounded-xl text-white hover:bg-white/5">
              View Website Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
