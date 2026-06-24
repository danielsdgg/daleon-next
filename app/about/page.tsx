// app/about/page.tsx
import React from 'react';
import Link from 'next/link';
import { 
  Users, Target, Award, Clock, Code2, Globe, 
  ShieldCheck, Zap, Heart 
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Daleon - Software Development Company Nairobi | Daleon Dynamics',
  description: 'Daleon Dynamics is a Nairobi-based custom software development company specializing in high-converting websites, powerful web applications, business automation, and biometric access control systems for Kenyan businesses.',
  
  keywords: [
    'about daleon dynamics', 'software development company nairobi', 'web development kenya',
    'custom software development nairobi', 'website design company kenya', 'access control systems kenya',
    'business automation kenya', 'software company nairobi', 'custom web apps kenya',
    'web design nairobi', 'crm development nairobi', 'm-pesa integration kenya'
  ],

  alternates: {
    canonical: 'https://daleondynamics.com/about',
  },

  openGraph: {
    title: 'About Daleon Dynamics - Custom Software Development Kenya',
    description: 'Nairobi-based software company specializing in custom-coded websites, web applications, and intelligent business systems.',
    url: 'https://daleondynamics.com/about',
    images: [
      {
        url: 'https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png', 
        width: 1200,
        height: 630,
        alt: 'Daleon Dynamics - About Us',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
};

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Client Success First",
      desc: "Every solution is designed to deliver measurable business impact — more leads, better efficiency, or stronger security."
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Quality Over Quantity",
      desc: "We build clean, maintainable, and scalable code instead of relying on templates or shortcuts."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Built for Kenya",
      desc: "Deep understanding of local challenges, M-Pesa integrations, regulatory needs, and market realities."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Transparency & Ownership",
      desc: "Clear communication, no hidden fees, and full ownership of the final working product upon completion."
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
                "@type": "Organization",
                "@id": "https://daleondynamics.com/#organization",
                "name": "Daleon Dynamics",
                "url": "https://daleondynamics.com",
                "logo": "https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png",
                "description": "Leading custom software development and web design company based in Nairobi, Kenya.",
                "foundingDate": "2024",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Nairobi",
                  "addressCountry": "KE"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+254142021359",
                  "contactType": "customer service"
                },
                "sameAs": [
                  "https://www.instagram.com/daleondynamics",
                  "https://www.facebook.com/daleondynamics"
                ],
                "areaServed": "Kenya"
              },
              {
                "@type": "AboutPage",
                "@id": "https://daleondynamics.com/about",
                "url": "https://daleondynamics.com/about",
                "name": "About Daleon Dynamics",
                "description": "Nairobi-based software company building custom digital solutions for Kenyan businesses.",
                "mainEntityOfPage": {
                  "@type": "Organization",
                  "@id": "https://daleondynamics.com/#organization"
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://daleondynamics.com" },
                  { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://daleondynamics.com/about" }
                ]
              }
            ]
          })
        }}
      />

      {/* UNIQUE HERO - Warm & Trustworthy */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-amber-900 via-orange-700 to-rose-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_bottom_right,#ffffff15_0%,transparent_50%)]" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-sm font-medium mb-8">
            <Heart className="w-5 h-5 text-amber-300" /> NAIROBI-BASED • WEB DEVELOPMENT • CUSTOM SOFTWARE
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Building Digital Solutions That Power Kenyan Businesses
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
            We are a passionate team of developers and designers in Nairobi creating custom websites, 
            web applications, automation systems, and security solutions that deliver real results.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg text-gray-700">
          <p className="text-xl">
            At Daleon Dynamics, we believe Kenyan businesses deserve world-class digital tools — built locally with deep understanding of the Kenyan market. 
            We don’t just code; we solve problems and create systems that help businesses grow, automate, and compete effectively.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Story</h2>
              <div className="h-1 w-20 bg-amber-600 rounded" />
            </div>
            <div className="lg:col-span-7 space-y-8 text-lg text-gray-700">
              <p>
                Founded in 2024 in Nairobi, Daleon Dynamics was born from the frustration of seeing many Kenyan businesses struggle with generic templates, slow websites, 
                and poorly built software that didn’t meet their actual needs.
              </p>
              <p>
                We set out to change that. Our mission is to deliver modern, custom-coded digital solutions that are fast, secure, scalable, and tailored to the realities of doing business in Kenya — including seamless M-Pesa integration, regulatory compliance, and mobile-first experiences.
              </p>
              <p className="font-medium text-gray-900">
                Today, we partner with ambitious small businesses, growing enterprises, and organizations across Kenya to build technology that doesn’t just look good — it performs exceptionally well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide every project we deliver</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {values.map((value, i) => (
              <div key={i} className="flex gap-6 bg-gray-50 p-8 rounded-3xl">
                <div className="text-amber-600 mt-1 flex-shrink-0">{value.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR EXPERTISE */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What We Excel At</h2>
            <p className="text-xl text-gray-600">Specialized digital solutions for Kenyan businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Globe className="w-10 h-10" />,
                title: "High-Converting Websites",
                desc: "Modern, fast, SEO-optimized websites designed to generate leads and build trust."
              },
              {
                icon: <Code2 className="w-10 h-10" />,
                title: "Custom Web Applications",
                desc: "Tailored CRMs, ERPs, dashboards, and automation systems that fit your exact processes."
              },
              {
                icon: <ShieldCheck className="w-10 h-10" />,
                title: "Access Control Systems",
                desc: "Biometric, cloud-based security and attendance solutions for offices, estates, and institutions."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Kenyan Businesses Trust Daleon Dynamics</h2>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              {
                icon: <Zap />,
                title: "Modern Tech Stack",
                desc: "We use Next.js, TypeScript, Tailwind, and scalable cloud infrastructure — no outdated templates."
              },
              {
                icon: <Users />,
                title: "Local Market Expertise",
                desc: "We understand Kenyan business challenges, payment systems (M-Pesa), and regulatory environment."
              },
              {
                icon: <Award />,
                title: "Full Ownership & Transparency",
                desc: "You own the final product with cPanel access. Clear timelines, regular updates, and honest communication."
              },
              {
                icon: <Clock />,
                title: "Long-term Partnership",
                desc: "We provide ongoing support, training, and maintenance so your system continues to evolve with your business."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="text-amber-600 mt-1 flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                q: "Where is Daleon Dynamics based?",
                a: "We are proudly based in Nairobi, Kenya and serve clients across the country."
              },
              {
                q: "Do you work with businesses outside Nairobi?",
                a: "Yes. We work with clients all over Kenya and can handle suitable projects remotely."
              },
              {
                q: "What technologies do you use?",
                a: "We primarily use Next.js for high-performance, scalable web applications. On demand, we  can also work with wordpress and other platforms depending on the project requirements."
              },
              {
                q: "Do you offer ongoing support after project completion?",
                a: "Yes. We provide training, handover, and flexible maintenance & support packages."
              }
            ].map((faq, i) => (
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let’s Build Something Great Together</h2>
          <p className="text-xl text-gray-400 mb-10">Whether you need a high-converting website, a custom system, or a security solution — we’re ready to help your business grow.</p>
          
          <Link href="/contact" className="inline-block bg-white text-zinc-950 px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-gray-100 transition">
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;