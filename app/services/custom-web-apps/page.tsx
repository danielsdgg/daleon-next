// app/services/custom-web-apps/page.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Info } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Web Apps & Systems | Daleon Dynamics',
  description:
    'Custom web applications and internal systems in Kenya. Automate processes, improve efficiency, and scale your business with Daleon Dynamics.',
  keywords: [
    'custom web apps kenya',
    'web application development nairobi',
    'business automation software kenya',
    'enterprise web systems kenya',
    'daleon dynamics custom software',
    'm-pesa integration web apps',
    'crm development kenya'
  ],
  alternates: {
    canonical: 'https://daleondynamics.com/services/custom-web-apps'
  },
  openGraph: {
    title: 'Custom Web Apps & Systems | Daleon Dynamics',
    description:
      'Powerful internal tools and web applications that automate processes, improve team efficiency, and scale with your business.',
    url: 'https://daleondynamics.com/services/custom-web-apps',
    images: [
      {
        url: 'https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png',
        width: 1200,
        height: 630,
        alt: 'Custom Web Apps - Daleon Dynamics'
      }
    ],
    locale: 'en_KE',
    type: 'website'
  }
};

const features = [
  {
    title: 'Custom Dashboards & Internal Tools',
    desc: 'Tailored admin panels and dashboards that give your team the insights and controls they need to operate efficiently.'
  },
  {
    title: 'Business Process Automation',
    desc: 'Automate repetitive tasks, approvals, and workflows to reduce manual work and eliminate bottlenecks.'
  },
  {
    title: 'Secure Authentication & Roles',
    desc: 'Role-based access control, secure authentication, and audit logs to keep your data safe and compliant.'
  },
  {
    title: 'Real-time Analytics & Reporting',
    desc: 'Live dashboards and scheduled reports so you can measure performance and make data-driven decisions.'
  },
  {
    title: 'M-Pesa & Third-party Integrations',
    desc: 'Seamless integrations with M-Pesa, payment gateways, CRMs, and other services your business relies on.'
  },
  {
    title: 'Scalable Cloud Architecture',
    desc: 'Built to scale with your business using modern cloud patterns, containerization, and resilient infrastructure.'
  }
];

const faqs = [
  {
    q: 'What does "From KES 200,000" include?',
    a: 'The Growth package (From KES 200,000) typically covers an advanced web application with dashboards, integrations (M-Pesa), admin panel, reporting, and 2 months of support. Final scope and price are confirmed after discovery.'
  },
  {
    q: 'Do you integrate with M-Pesa and other local services?',
    a: 'Yes. We have experience integrating M-Pesa, local payment providers, and common third-party APIs used by Kenyan businesses.'
  },
  {
    q: 'How long does a typical custom web app take to build?',
    a: 'Timelines vary by scope. Growth projects often take 10–20 weeks depending on integrations and complexity.'
  }
];

const growthTier = {
  name: 'Custom Web App — Growth',
  price: 'From KES 200,000',
  desc: 'For growing companies needing advanced functionality, dashboards, and integrations.',
  features: [
    'Full system design & development',
    'User authentication & roles',
    'Custom dashboards',
    'Database & backend architecture',
    'API integrations (M-Pesa, third-party)',
    'Security implementation',
    'Deployment & training'
  ]
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Custom Web Applications',
  provider: {
    '@type': 'Organization',
    name: 'Daleon Dynamics',
    url: 'https://daleondynamics.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressCountry: 'Kenya'
    }
  },
  description:
    'Custom web applications and internal systems that automate processes, improve efficiency, and scale with your business in Kenya.',
  offers: {
    '@type': 'Offer',
    name: growthTier.name,
    priceCurrency: 'KES',
    price: '200000',
    url: 'https://daleondynamics.com/services/custom-web-apps'
  }
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a
    }
  }))
};

export default function CustomWebAppsPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 antialiased">
      {/* Structured data for crawlers */}
      <script
        key="service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        key="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section className="py-28 px-6 bg-gradient-to-br from-blue-100 to-white text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Custom Web Apps & Systems
          </h1>
          <p className="text-lg text-zinc-700 max-w-3xl mx-auto mb-8">
            We build powerful internal tools and web applications that automate processes, improve team efficiency, and scale with your business.
            Every solution is tailored to your workflows and built for long-term growth.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition"
            >
              Discuss Your Project <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-3 border border-gray-300 px-6 py-3 rounded-2xl text-gray-700 hover:bg-gray-50 transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What Our Custom Web Apps Deliver</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-700">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS & DETAILS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Typical inclusions</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Requirements discovery and technical specification</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Custom UI/UX design and responsive implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Secure authentication, role management, and audit logs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Integrations (M-Pesa, payment gateways, CRMs)</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Our development process</h2>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li><strong>Discovery:</strong> define goals, users, and success metrics.</li>
                <li><strong>Design:</strong> wireframes and prototypes focused on usability.</li>
                <li><strong>Build:</strong> secure, tested implementation using modern stacks (Next.js, Node, Postgres, etc.).</li>
                <li><strong>Launch & Support:</strong> deployment, monitoring, and iterative improvements.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING — Growth Tier Only */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold">Project Investment</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Transparent starting price for the Custom web apps package. Final quotes are provided after a discovery of your specific requirements.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              <div className="bg-gradient-to-tr from-white to-blue-50 border border-gray-100 rounded-3xl p-8 shadow-lg transform hover:-translate-y-1 transition">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold">{growthTier.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{growthTier.desc}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl md:text-4xl font-extrabold text-gray-900">{growthTier.price}</div>
                    <div className="text-sm text-gray-500 mt-1">Starting price</div>
                  </div>
                </div>

                <div className="mb-6">
                  <ul className="space-y-3">
                    {growthTier.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition"
                  >
                    Discuss Growth Project <ArrowRight className="w-4 h-4" />
                  </Link>

                  <div className="text-sm text-gray-500 mt-2 sm:mt-0">
                    Includes 2 months support & maintenance; custom integrations priced separately.
                  </div>
                </div>
              </div>

              {/* subtle accent */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                <div className="text-xs text-gray-400">Price shown is a starting point and subject to discovery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="p-4 border border-gray-100 rounded-lg">
                <summary className="font-semibold cursor-pointer">{f.q}</summary>
                <p className="mt-3 text-gray-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to automate and scale?</h2>
          <p className="text-gray-300 mb-8">Book a short discovery call and we’ll provide a clear scope and tailored quote.</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-white text-zinc-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100">
              Start Your Project
            </Link>
            <Link href="/services" className="border border-white/30 px-6 py-3 rounded-xl text-white hover:bg-white/5">
              View Website Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
