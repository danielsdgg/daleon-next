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
  description: 'Biometric access control systems with fingerprint, facial recognition & cloud solutions in Nairobi, Kenya.',
  
  keywords: [
    "access control systems Nairobi", 
    "biometric access control Kenya", 
    "fingerprint access control Nairobi",
    "facial recognition security Kenya",
    "smart access control systems Nairobi",
    "RFID access control Kenya", 
    "attendance management system Kenya",
    "cloud based security systems Nairobi",
    "security systems installation Kenya"
  ],

  alternates: {
    canonical: 'https://daleondynamics.com/services/access-control-systems'
  },

  openGraph: {
    title: "Access Control Systems Nairobi | Biometric Security Solutions Kenya",
    description: "Modern biometric, RFID, and cloud-based access control systems for businesses and properties across Kenya.",
    url: "https://daleondynamics.com/services/access-control-systems",
    images: [
      {
        url: 'https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png',
        width: 1200,
        height: 630,
        alt: 'Access Control Systems Nairobi - Daleon Dynamics'
      }
    ],
    locale: 'en_KE',
    type: 'website'
  }
};

const AccessControlSystems = () => {
  const features = [
    {
      icon: <Fingerprint className="w-8 h-8" />,
      title: "Biometric Access Control",
      desc: "Advanced fingerprint and facial recognition systems that provide secure, contactless, and tamper-proof entry management."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Staff & Visitor Management",
      desc: "Complete tracking of employees and visitors with real-time logs, reports, and authorization controls."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Real-Time Monitoring & Alerts",
      desc: "Cloud dashboard with live access events, instant notifications, and comprehensive audit trails."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Attendance & Time Tracking",
      desc: "Automated attendance management with payroll integration and detailed reporting."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Enterprise-Grade Security",
      desc: "High-level encryption, role-based permissions, and compliance with Kenyan security standards."
    }
  ];

  const industries = [
    "Corporate Offices & Business Parks",
    "Gated Residential Estates & Apartments",
    "Schools, Colleges & Educational Institutions",
    "Hospitals & Healthcare Facilities",
    "Warehouses, Factories & Industrial Sites",
    "Hotels, Restaurants & Hospitality Venues",
    "Government & NGO Buildings"
  ];

  const faqs = [
    {
      q: "What is the difference between biometric and RFID access control?",
      a: "Biometric systems (fingerprint/facial) use unique physical traits for higher security. RFID uses cards or tags which are convenient but easier to share or duplicate."
    },
    {
      q: "Do your systems work with cloud technology?",
      a: "Yes. We offer both on-premise and cloud-based solutions with mobile app access for administrators."
    },
    {
      q: "Can the system integrate with existing infrastructure?",
      a: "Absolutely. Our systems can integrate with CCTV, fire alarms, HR software, and payment systems where needed."
    },
    {
      q: "How long does installation take?",
      a: "Installation timelines vary from 1–4 weeks depending on the size of the premises and complexity of the system."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "name": "Access Control Systems Nairobi",
                "description": "Professional biometric, fingerprint, facial recognition, and cloud-based access control systems for businesses in Kenya.",
                "provider": {
                  "@type": "Organization",
                  "name": "Daleon Dynamics",
                  "url": "https://daleondynamics.com",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Nairobi",
                    "addressCountry": "KE"
                  }
                },
                "areaServed": "Kenya",
                "serviceType": ["Access Control Systems", "Biometric Security", "Security Systems"],
                "offers": {
                  "@type": "Offer",
                  "description": "Custom pricing after site assessment"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map((f) => ({
                  "@type": "Question",
                  "name": f.q,
                  "acceptedAnswer": { "@type": "Answer", "text": f.a }
                }))
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://daleondynamics.com" },
                  { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://daleondynamics.com/services" },
                  { "@type": "ListItem", "position": 3, "name": "Access Control Systems", "item": "https://daleondynamics.com/services/access-control-systems" }
                ]
              }
            ]
          })
        }}
      />

      {/* UNIQUE HERO - Security / Trust Theme */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_center,#33415540_0%,transparent_70%)]" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-sm font-medium mb-8">
            <ShieldCheck className="w-5 h-5 text-emerald-400" /> ADVANCED SECURITY SOLUTIONS
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Biometric Access Control Systems in <span className="text-emerald-400">Nairobi, Kenya</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-10">
            Secure your premises with intelligent, reliable, and modern access control systems. 
            From fingerprint and facial recognition to cloud-managed solutions — we protect what matters most.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-2xl font-semibold text-lg transition"
            >
              Request Site Assessment <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center gap-3 border border-white/60 hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold text-lg transition"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg text-gray-700">
          <p>
            In an increasingly security-conscious environment, basic locks are no longer enough. 
            Daleon Dynamics delivers state-of-the-art access control systems tailored for Kenyan businesses and organizations. 
            Our solutions combine cutting-edge biometric technology with practical, easy-to-use management tools.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Security Features</h2>
            <p className="text-xl text-gray-600">Modern technology that delivers real protection and convenience</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white p-9 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="text-emerald-600 mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES / USE CASES */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Trusted Across Kenya</h2>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto">
            {industries.map((industry, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-lg text-gray-700">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Implementation Process</h2>
          
          <div className="grid md:grid-cols-4 gap-10">
            {[
              { num: "01", title: "Site Assessment", desc: "We visit your premises to understand security needs and challenges." },
              { num: "02", title: "System Design", desc: "Custom solution design with hardware and software recommendations." },
              { num: "03", title: "Installation & Integration", desc: "Professional installation with seamless integration to existing systems." },
              { num: "04", title: "Training & Support", desc: "Comprehensive training and ongoing technical support." }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-2xl">
                  {step.num}
                </div>
                <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Custom Security Solutions</h2>
          <p className="text-2xl font-semibold text-emerald-700 mb-4">Pricing Determined After Assessment</p>
          
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Every property has unique security requirements. We provide accurate, transparent quotes after a detailed site assessment.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">What’s Included in Our Solutions</h3>
            
            <ul className="space-y-5 text-left mb-10">
              {[
                "Professional site survey and risk assessment",
                "Custom system design and hardware selection",
                "Full installation and configuration",
                "User training and system handover",
                "Cloud dashboard setup (where applicable)",
                "Warranty and post-installation support"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-block bg-emerald-600 text-white px-10 py-4 rounded-2xl font-semibold hover:bg-emerald-700 transition"
            >
              Schedule Your Free Site Assessment
            </Link>
          </div>

          <div className="mt-10 flex justify-center gap-3 text-gray-500 max-w-md mx-auto text-sm">
            <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p>Final cost depends on number of doors, users, features, and integration requirements.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white p-8 rounded-3xl border">
                <summary className="font-semibold text-lg cursor-pointer">{faq.q}</summary>
                <p className="mt-6 text-gray-700 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Protect What Matters Most</h2>
          <p className="text-xl text-slate-400 mb-10">Get a professional security assessment and custom proposal today.</p>
          
          <Link href="/contact" className="inline-block bg-white text-slate-950 px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-gray-100 transition">
            Book Your Consultation
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AccessControlSystems;