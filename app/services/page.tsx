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
  Clock,
  Users,
  Award
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Web Design & Custom Software Development Nairobi',
  description: 'Professional web design, high-converting websites, custom web applications, business automation systems, and biometric access control solutions in Nairobi, Kenya.',
  
  keywords: [
    'web design nairobi', 'website development kenya', 'custom software development nairobi',
    'high converting websites nairobi', 'custom web applications kenya', 'business automation kenya',
    'access control systems kenya', 'biometric access control nairobi', 'm-pesa integration kenya',
    'custom crm development kenya', 'software development company nairobi'
  ],

  alternates: {
    canonical: 'https://daleondynamics.com/services'
  },

  openGraph: {
    title: 'Our Services - Web Design & Custom Software Development Nairobi',
    description: 'Professional websites, custom software, automation systems, and access control solutions built for Kenyan businesses.',
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

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code2 className="w-14 h-14" />,
      title: 'Custom Software Development',
      shortDesc: 'Bespoke software engineered for your exact business needs.',
      fullDesc: 'From custom CRMs and ERPs to complex business automation platforms, we build scalable, secure, and maintainable software solutions tailored to Kenyan businesses.',
      features: [
        'Custom CRM & ERP systems',
        'Business process automation',
        'M-Pesa and payment gateway integrations',
        'Real-time analytics dashboards',
        'Role-based access control',
        'Scalable cloud infrastructure'
      ],
      link: '/services/custom-web-apps',
      color: 'blue'
    },
    {
      icon: <Globe className="w-14 h-14" />,
      title: 'Websites & Web Applications',
      shortDesc: 'High-converting digital experiences that represent your brand.',
      fullDesc: 'Modern, fast-loading, SEO-optimized websites and web apps designed to generate leads, increase sales, and establish strong online presence across Kenya.',
      features: [
        'High-converting website design',
        'Advanced SEO optimization',
        'Mobile-first responsive design',
        'Secure user authentication systems',
        'Content management systems (CMS)',
        'Third-party integrations (M-Pesa, etc.)'
      ],
      link: '/services/high-converting-website',
      color: 'indigo'
    },
    {
      icon: <ShieldCheck className="w-14 h-14" />,
      title: 'Access Control Systems',
      shortDesc: 'Smart, secure, and intelligent access management.',
      fullDesc: 'Advanced biometric and cloud-based access control solutions for offices, estates, warehouses, schools, and government institutions in Kenya.',
      features: [
        'Fingerprint & facial recognition',
        'Cloud dashboard & mobile app access',
        'Real-time alerts and audit logs',
        'Visitor management system',
        'Attendance & time tracking',
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
        'Basic SEO optimization',
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

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://daleondynamics.com/#organization",
                "name": "Daleon Dynamics",
                "url": "https://daleondynamics.com",
                "logo": "https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png",
                "description": "Leading web design and custom software development company in Nairobi, Kenya.",
                "address": { "@type": "PostalAddress", "addressLocality": "Nairobi", "addressCountry": "KE" },
                "contactPoint": { "@type": "ContactPoint", "telephone": "+254142021359", "contactType": "customer service" },
                "areaServed": "Kenya"
              },
              {
                "@type": "Service",
                "name": "Web Design and Development Nairobi",
                "provider": { "@id": "https://daleondynamics.com/#organization" },
                "description": "High-converting, SEO-optimized websites and web applications for Kenyan businesses.",
                "areaServed": "Kenya"
              },
              {
                "@type": "Service",
                "name": "Custom Software Development Nairobi",
                "provider": { "@id": "https://daleondynamics.com/#organization" },
                "description": "Bespoke CRMs, ERPs, automation systems and web applications.",
                "areaServed": "Kenya"
              },
              {
                "@type": "Service",
                "name": "Access Control Systems Kenya",
                "provider": { "@id": "https://daleondynamics.com/#organization" },
                "description": "Biometric and cloud-based access control solutions.",
                "areaServed": "Kenya"
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How much does a professional website cost in Nairobi?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Professional websites start from KES 80,000. Custom web applications and complex systems are priced after a detailed discovery call."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer M-Pesa integration?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We specialize in secure M-Pesa Daraja API and other payment gateway integrations for Kenyan businesses."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />

      {/* HERO - Services Focused */}
      <header className="pt-32 pb-20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Star className="w-5 h-5 text-amber-400" /> OUR SERVICES
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Web Design &amp; Custom Software Development Services in Nairobi, Kenya
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            From high-converting websites to powerful custom applications and secure access control systems — 
            we deliver digital solutions that solve real business challenges and drive growth.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-semibold text-lg transition">
              Start Your Project
            </Link>
            <Link href="#pricing" className="border border-white/30 hover:bg-white/5 px-8 py-4 rounded-2xl font-semibold text-lg transition">
              View Pricing
            </Link>
          </div>
        </div>
      </header>

      {/* INTRO */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg">
          <p className="text-lg text-gray-700">
            At Daleon Dynamics, we provide end-to-end digital solutions tailored for the Kenyan market. 
            Whether you need a professional business website, a custom CRM system, workflow automation, 
            or a reliable biometric access control system — our team delivers high-quality, scalable solutions 
            built with modern technologies and deep local understanding (including M-Pesa integration).
          </p>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section id="core-services" className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized digital solutions designed for Kenyan businesses
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <article key={idx} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className={`h-2 bg-gradient-to-r ${service.color === 'blue' ? 'from-blue-500 to-indigo-600' : service.color === 'indigo' ? 'from-indigo-500 to-purple-600' : 'from-emerald-500 to-teal-600'}`} />
                
                <div className="p-10">
                  <div className={`inline-flex p-4 rounded-2xl mb-8 ${service.color === 'blue' ? 'bg-blue-100 text-blue-600' : service.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' : 'bg-emerald-100 text-emerald-600'}`}>
                    {service.icon}
                  </div>

                  <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-4 font-medium">{service.shortDesc}</p>
                  <p className="text-gray-700 mb-8">{service.fullDesc}</p>

                  <ul className="space-y-3 mb-10">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={service.link} className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                    Explore this service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Proven Development Process</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Users />, title: "Discovery", desc: "We deeply understand your business goals, challenges, and target audience." },
              { icon: <Code2 />, title: "Design & Planning", desc: "Wireframes, UI/UX design, and technical architecture tailored to your needs." },
              { icon: <Clock />, title: "Development", desc: "Agile development with regular updates and your feedback at every stage." },
              { icon: <Award />, title: "Launch & Support", desc: "Thorough testing, launch, training, and ongoing maintenance." }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-xl mb-3">0{i+1}. {step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Transparent Project Pricing</h2>
            <p className="text-xl text-gray-600">Starting prices for typical project scopes in Kenya</p>
          </div>

          <div className="max-w-3xl mx-auto mb-10 bg-white border border-gray-100 rounded-2xl p-8">
            <p className="text-gray-700">
              Every project is unique. The prices below are realistic starting points. We provide accurate quotes after a short discovery call to understand your specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`bg-white rounded-3xl p-9 border transition-all ${i === 1 ? 'border-blue-600 scale-105 shadow-2xl relative' : 'border-gray-100 hover:shadow-xl'}`}
              >
                {i === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-semibold px-6 py-1.5 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-semibold mb-1">{tier.name}</h3>
                <div className="text-4xl font-bold mb-2">{tier.price}</div>
                <p className="text-gray-500 mb-8">{tier.desc}</p>

                <ul className="space-y-4 mb-10">
                  {tier.features.map((f, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block text-center py-4 rounded-2xl font-semibold transition ${i === 1 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border-2 border-gray-300 hover:bg-gray-50'}`}
                >
                  {i === 1 ? 'Discuss Your Growth Project' : 'Get Personalized Quote'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Kenyan Businesses Choose Daleon Dynamics</h2>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="text-blue-600 text-5xl font-bold">01</div>
                <div>
                  <h3 className="font-semibold text-2xl mb-2">Built for Kenya</h3>
                  <p className="text-gray-700">Deep understanding of local payment systems (M-Pesa), regulations, and business realities.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-blue-600 text-5xl font-bold">02</div>
                <div>
                  <h3 className="font-semibold text-2xl mb-2">Modern Tech Stack</h3>
                  <p className="text-gray-700">Next.js, TypeScript, Tailwind, and scalable cloud solutions — no outdated templates.</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="text-blue-600 text-5xl font-bold">03</div>
                <div>
                  <h3 className="font-semibold text-2xl mb-2">Deliverables Ownership</h3>
                  <p className="text-gray-700">
                    Upon full payment, you receive complete ownership of the final working product (website, application, or system) including cPanel access.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-blue-600 text-5xl font-bold">04</div>
                <div>
                  <h3 className="font-semibold text-2xl mb-2">Long-term Partnership</h3>
                  <p className="text-gray-700">Ongoing support, training, and maintenance packages available.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <details className="bg-white p-8 rounded-3xl border">
              <summary className="font-semibold text-lg cursor-pointer">How long does it take to build a website?</summary>
              <p className="mt-4 text-gray-700">A standard professional website takes 4–8 weeks. Complex web applications or custom software can take 12–20 weeks or more, depending on scope.</p>
            </details>
            
            <details className="bg-white p-8 rounded-3xl border">
              <summary className="font-semibold text-lg cursor-pointer">Do you work with businesses outside Nairobi?</summary>
              <p className="mt-4 text-gray-700">Yes. We serve clients across Kenya and remotely for suitable projects.</p>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-zinc-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business Digitally?</h2>
          <p className="text-xl text-gray-400 mb-10">Let’s discuss your project and create something exceptional together.</p>
          
          <Link href="/contact" className="inline-block bg-white text-black px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-gray-100 transition">
            Book a Free Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;