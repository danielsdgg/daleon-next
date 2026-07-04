// app/services/custom-web-apps/page.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Zap, BarChart3, Users, Globe } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Web Apps & Software Development Nairobi | Daleon Dynamics',
  description: 'Expert custom web applications, business automation systems, CRMs, dashboards, and internal tools built for Kenyan businesses. Scalable, secure, and tailored solutions in Nairobi.',
  
  keywords: [
    'custom web apps nairobi', 'web application development nairobi', 'custom software development kenya',
    'business automation software kenya', 'crm development nairobi', 'enterprise web systems kenya',
    'custom dashboard development kenya', 'm-pesa integration kenya', 'internal tools development nairobi',
    'software development company nairobi', 'workflow automation kenya', 'erp development kenya',
    'custom software company nairobi', 'daleon dynamics'
  ],

  alternates: {
    canonical: 'https://daleondynamics.com/services/custom-web-apps'
  },

  openGraph: {
    title: 'Custom Web Apps & Business Systems | Nairobi Software Development',
    description: 'Tailored web applications, automation tools, CRMs and internal systems that help Kenyan businesses scale efficiently.',
    url: 'https://daleondynamics.com/services/custom-web-apps',
    images: [
      {
        url: 'https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png',
        width: 1200,
        height: 630,
        alt: 'Custom Web Applications Nairobi - Daleon Dynamics'
      }
    ],
    locale: 'en_KE',
    type: 'website'
  }
};

const CustomWebAppsPage: React.FC = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Powerful Business Automation",
      desc: "Automate workflows, approvals, invoicing, and repetitive tasks to save time and reduce errors."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-time Dashboards & Insights",
      desc: "Custom analytics dashboards that give you clear visibility into your business performance."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Role-Based Access Control",
      desc: "Secure user management with permissions tailored to different team members."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Seamless Integrations",
      desc: "M-Pesa, payment gateways, accounting tools, CRMs, and other systems you already use."
    }
  ];

  const processSteps = [
    { num: "01", title: "Discovery & Planning", desc: "Deep dive into your business processes, challenges, and goals." },
    { num: "02", title: "System Design", desc: "Wireframes, database architecture, and technical specifications." },
    { num: "03", title: "Development", desc: "Agile development using modern technologies (Next.js, TypeScript, etc.)." },
    { num: "04", title: "Testing, Launch & Training", desc: "Thorough testing, deployment, user training, and handover." }
  ];

  const faqs = [
    {
      q: 'What does "From KES 200,000" include?',
      a: 'The starting price covers a solid custom web application with user authentication, dashboards, M-Pesa integration, admin panel, and 2 months of support. Final pricing depends on complexity and is confirmed after discovery.'
    },
    {
      q: 'Do you integrate with M-Pesa and other local services?',
      a: 'Yes. We specialize in secure M-Pesa Daraja API integration and other Kenyan payment, SMS, and business tools.'
    },
    {
      q: 'How long does it take to build a custom web app?',
      a: 'Most Growth-level projects take 12–20 weeks. Timelines depend on the number of modules, integrations, and data migration requirements.'
    },
    {
      q: 'Do clients get full source code?',
      a: 'Upon full payment, you receive ownership of the final working product and cPanel/hosting access. Complete source code transfer is available as an optional add-on (priced separately).'
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
                "name": "Custom Web Applications & Software Development Nairobi",
                "description": "Bespoke web applications, CRMs, business automation systems, and internal tools developed for Kenyan businesses.",
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
                "serviceType": ["Custom Software Development", "Web Application Development", "Business Automation"],
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "KES",
                  "price": "200000",
                  "description": "Starting price for custom web applications"
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
                  { "@type": "ListItem", "position": 3, "name": "Custom Web Apps", "item": "https://daleondynamics.com/services/custom-web-apps" }
                ]
              }
            ]
          })
        }}
      />

      {/* UNIQUE HERO - Tech / Innovation Theme */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-indigo-700 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#ffffff20_0%,transparent_60%)]" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-sm font-medium mb-8">
            <Zap className="w-5 h-5 text-amber-300" /> CUSTOM SOFTWARE SOLUTIONS
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Custom Web Applications &amp; Business Systems in <span className="text-amber-300">Nairobi, Kenya</span>
          </h1>

          <p className="text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto mb-10">
            We build powerful, scalable web apps, CRMs, automation tools, and internal systems that solve real business problems and drive efficiency for Kenyan companies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-white text-indigo-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/90 transition"
            >
              Start Your Custom Project <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#process"
              className="inline-flex items-center justify-center gap-3 border-2 border-white/70 hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold text-lg transition"
            >
              See Development Process
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg text-gray-700">
          <p>
            Off-the-shelf software rarely fits Kenyan business realities perfectly. 
            At Daleon Dynamics, we develop custom web applications that match your exact workflows — from CRMs and inventory systems to advanced automation platforms and internal tools. 
            Built with modern technologies and deep understanding of local needs like M-Pesa integration.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose a Custom Web Application?</h2>
            <p className="text-xl text-gray-600">Tailored solutions deliver unmatched efficiency and competitive advantage</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition">
                <div className="text-indigo-600 mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Custom Development Process</h2>
          
          <div className="grid md:grid-cols-4 gap-10">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto w-16 h-16 bg-indigo-100 text-indigo-700 rounded-2xl flex items-center justify-center font-bold text-2xl mb-6">
                  {step.num}
                </div>
                <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">What’s Included in Your Custom Web App</h2>
          
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-6 text-lg">
              {[
                "Full requirements analysis and technical architecture",
                "Modern, responsive user interface (Next.js / TypeScript)",
                "Secure backend with robust database design",
                "User authentication and role-based permissions",
                "Custom dashboards and real-time reporting",
                "M-Pesa and third-party integrations",
                "Comprehensive testing and quality assurance",
                "Deployment, training, and cPanel/hosting handover",
                "Post-launch support and maintenance options"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-7 h-7 text-indigo-600 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Investment for Custom Web Applications</h2>
          <p className="text-3xl font-semibold text-indigo-700 mb-4">Starting from KES 200,000</p>
          
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            This is the starting price for a Growth-level custom web application. 
            Enterprise-grade systems with multiple modules or complex integrations are priced after detailed discovery.
          </p>

          <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-3xl p-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8">Typical Growth Package Includes</h3>
            
            <ul className="text-left space-y-4 mb-10">
              {[
                "Custom web application with user roles",
                "Admin dashboard & analytics",
                "M-Pesa & key integrations",
                "Secure authentication & data protection",
                "Responsive design across devices",
                "Training & 2 months support"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-block bg-indigo-600 text-white px-10 py-4 rounded-2xl font-semibold hover:bg-indigo-700 transition"
            >
              Get a Tailored Quote
            </Link>
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
      <section className="py-24 bg-zinc-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Something Powerful?</h2>
          <p className="text-xl text-gray-400 mb-10">Let’s turn your business processes into efficient, automated digital systems.</p>
          
          <Link href="/contact" className="inline-block bg-white text-black px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-gray-100 transition">
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
};

export default CustomWebAppsPage;