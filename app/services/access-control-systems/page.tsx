// app/services/access-control-systems/page.tsx
import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle,
  Fingerprint,
  Camera,
  Users,
  Clock,
  Info,
  Lock,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Access Control Systems Nairobi | Biometric Security',
  description:
    'Biometric access control systems with fingerprint, facial recognition & cloud solutions in Nairobi, Kenya.',
  keywords: [
    'access control systems Nairobi',
    'biometric access control Kenya',
    'fingerprint access control Nairobi',
    'facial recognition security Kenya',
    'smart access control systems Nairobi',
    'RFID access control Kenya',
    'attendance management system Kenya',
    'cloud based security systems Nairobi',
    'security systems installation Kenya',
  ],
  alternates: {
    canonical: 'https://daleondynamics.com/services/access-control-systems',
  },
  openGraph: {
    title: 'Access Control Systems Nairobi | Biometric Security Solutions Kenya',
    description:
      'Modern biometric, RFID, and cloud-based access control systems for businesses and properties across Kenya.',
    url: 'https://daleondynamics.com/services/access-control-systems',
    siteName: 'Daleon Dynamics',
    images: [
      {
        url: 'https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png',
        width: 1200,
        height: 630,
        alt: 'Access Control Systems Nairobi - Daleon Dynamics',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Access Control Systems Nairobi | Biometric Security Solutions Kenya',
    description: 'Modern biometric, RFID, and cloud-based access control systems for businesses across Kenya.',
    images: ['https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png'],
  },
};

const features = [
  { icon: Fingerprint, title: 'Biometric Access Control', desc: 'Advanced fingerprint and facial recognition systems that provide secure, contactless, and tamper-proof entry management.' },
  { icon: Users, title: 'Staff & Visitor Management', desc: 'Complete tracking of employees and visitors with real-time logs, reports, and authorization controls.' },
  { icon: Camera, title: 'Real-Time Monitoring & Alerts', desc: 'Cloud dashboard with live access events, instant notifications, and comprehensive audit trails.' },
  { icon: Clock, title: 'Attendance & Time Tracking', desc: 'Automated attendance management with payroll integration and detailed reporting.' },
  { icon: Lock, title: 'Enterprise-Grade Security', desc: 'High-level encryption, role-based permissions, and compliance with Kenyan security standards.' },
];

const industries = [
  'Corporate Offices & Business Parks',
  'Gated Residential Estates & Apartments',
  'Schools, Colleges & Educational Institutions',
  'Hospitals & Healthcare Facilities',
  'Warehouses, Factories & Industrial Sites',
  'Hotels, Restaurants & Hospitality Venues',
  'Government & NGO Buildings',
];

const process = [
  { num: '01', title: 'Site Assessment', desc: 'We visit your premises to understand security needs and challenges.' },
  { num: '02', title: 'System Design', desc: 'Custom solution design with hardware and software recommendations.' },
  { num: '03', title: 'Installation & Integration', desc: 'Professional installation with seamless integration to existing systems.' },
  { num: '04', title: 'Training & Support', desc: 'Comprehensive training and ongoing technical support.' },
];

const includedInSolution = [
  'Professional site survey and risk assessment',
  'Custom system design and hardware selection',
  'Full installation and configuration',
  'User training and system handover',
  'Cloud dashboard setup (where applicable)',
  'Warranty and post-installation support',
];

const faqs = [
  {
    q: 'What is the difference between biometric and RFID access control?',
    a: 'Biometric systems (fingerprint/facial) use unique physical traits for higher security. RFID uses cards or tags which are convenient but easier to share or duplicate.',
  },
  {
    q: 'Do your systems work with cloud technology?',
    a: 'Yes. We offer both on-premise and cloud-based solutions with mobile app access for administrators.',
  },
  {
    q: 'Can the system integrate with existing infrastructure?',
    a: 'Absolutely. Our systems can integrate with CCTV, fire alarms, HR software, and payment systems where needed.',
  },
  {
    q: 'How long does installation take?',
    a: 'Installation timelines vary from 1–4 weeks depending on the size of the premises and complexity of the system.',
  },
];

const AccessControlSystems: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://daleondynamics.com/services/access-control-systems',
        name: 'Access Control Systems Nairobi',
        description:
          'Professional biometric, fingerprint, facial recognition, and cloud-based access control systems for businesses in Kenya.',
        provider: { '@type': 'Organization', '@id': 'https://daleondynamics.com/#organization' },
        areaServed: { '@type': 'Country', name: 'Kenya' },
        serviceType: ['Access Control Systems', 'Biometric Security', 'Security Systems'],
        offers: {
          '@type': 'Offer',
          description: 'Custom pricing after site assessment',
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
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://daleondynamics.com' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://daleondynamics.com/services' },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Access Control Systems',
            item: 'https://daleondynamics.com/services/access-control-systems',
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#0A0A0F] text-[#F2F1F7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="pt-32 pb-20 relative overflow-hidden border-b border-[#232330]">
        <div className="absolute inset-0 bg-[radial-gradient(at_center,rgba(123,92,255,0.14)_0%,transparent_70%)]" />

        <div className="max-w-6xl mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-2 font-mono text-sm text-[#7B5CFF] mb-8">
            <span>{'//'}</span>
            <span>advanced-security-solutions</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
            Biometric Access Control Systems in{' '}
            <span className="text-[#7B5CFF]">
              Nairobi, Kenya
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#8E8CA3] max-w-4xl mx-auto mb-10">
            Secure your premises with intelligent, reliable, and modern access control systems. From
            fingerprint and facial recognition to cloud-managed solutions — we protect what matters most.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#7B5CFF] hover:bg-[#8E73FF] text-white px-8 py-4 rounded-lg font-semibold transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38E1C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F]"
            >
              Request Site Assessment <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center gap-3 border border-[#232330] hover:border-[#38E1C6] hover:text-[#38E1C6] px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 px-6 border-b border-[#232330]">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-[#8E8CA3] leading-relaxed">
            In an increasingly security-conscious environment, basic locks are no longer enough. Daleon
            Dynamics delivers state-of-the-art access control systems tailored for Kenyan businesses and
            organizations. Our solutions combine cutting-edge biometric technology with practical,
            easy-to-use management tools.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// features'}</div>
            <h2 className="text-4xl font-bold tracking-tight mb-3">Powerful Security Features</h2>
            <p className="text-lg text-[#8E8CA3]">Modern technology that delivers real protection and convenience</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="bg-[#0F141B] p-8 rounded-xl border border-[#232330] hover:border-[#7B5CFF] transition-all">
                  <Icon className="w-8 h-8 text-[#38E1C6] mb-6" />
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-[#8E8CA3] text-sm leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// industries'}</div>
            <h2 className="text-4xl font-bold tracking-tight">Trusted Across Kenya</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 max-w-4xl mx-auto">
            {industries.map((industry, i) => (
              <div key={i} className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#38E1C6] mt-0.5 flex-shrink-0" />
                <p className="text-[#F2F1F7]">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// implementation'}</div>
            <h2 className="text-4xl font-bold tracking-tight">Our Implementation Process</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div key={i}>
                <div className="w-14 h-14 bg-[#0F141B] border border-[#232330] text-[#7B5CFF] rounded-xl flex items-center justify-center font-mono font-bold text-xl mb-6">
                  {step.num}
                </div>
                <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-[#8E8CA3] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6 border-b border-[#232330] text-center">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// pricing'}</div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Custom Security Solutions</h2>
          <p className="font-mono text-2xl font-bold text-[#38E1C6] mb-4">Pricing Determined After Assessment</p>

          <p className="text-[#8E8CA3] max-w-2xl mx-auto mb-10">
            Every property has unique security requirements. We provide accurate, transparent quotes after a
            detailed site assessment.
          </p>

          <div className="bg-[#0F141B] border border-[#232330] rounded-2xl p-10 max-w-2xl mx-auto text-left">
            <h3 className="text-xl font-semibold mb-8 text-center">What&apos;s Included in Our Solutions</h3>

            <ul className="space-y-4 mb-10">
              {includedInSolution.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#F2F1F7]">
                  <CheckCircle className="w-5 h-5 text-[#38E1C6] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="block text-center bg-[#7B5CFF] hover:bg-[#8E73FF] text-white px-10 py-4 rounded-lg font-semibold transition-all"
            >
              Schedule Your Free Site Assessment
            </Link>
          </div>

          <div className="mt-8 flex justify-center gap-3 text-[#5C5A6E] max-w-md mx-auto text-sm">
            <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <p>Final cost depends on number of doors, users, features, and integration requirements.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-b border-[#232330]">
        <div className="max-w-3xl mx-auto">
          <div className="font-mono text-sm text-[#7B5CFF] mb-3">{'// faq'}</div>
          <h2 className="text-4xl font-bold tracking-tight mb-12">Frequently Asked Questions</h2>

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
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Protect What Matters Most</h2>
          <p className="text-lg text-[#8E8CA3] mb-10 max-w-2xl mx-auto">
            Get a professional security assessment and custom proposal today.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#7B5CFF] hover:bg-[#8E73FF] text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all active:scale-95"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AccessControlSystems;