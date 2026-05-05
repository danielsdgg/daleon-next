import React from 'react';
import Link from 'next/link';
import { Code2, Globe, ShieldCheck, ArrowRight, CheckCircle, Star, Info } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - Web Design, Custom Software & Access Control Systems in Kenya',
  description: 'Professional web development, high-converting websites, custom software solutions, and biometric access control systems in Nairobi, Kenya. Tailored digital solutions that drive real business growth.',
  
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
    'daleon dynamics services'
  ],

  alternates: {
    canonical: 'https://daleondynamics.com/services',
  },

  openGraph: {
    title: 'Our Services - Web Development & Custom Software Kenya | Daleon Dynamics',
    description: 'High-converting websites, powerful custom software, and intelligent access control systems built for Kenyan businesses.',
    url: 'https://daleondynamics.com/services',
    images: [
      {
        url: 'https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png', 
        width: 1200,
        height: 630,
        alt: 'Daleon Dynamics Services - Web Development Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
};

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-14 h-14" />,
      title: "Custom Software Development",
      shortDesc: "Bespoke software engineered for your exact business needs.",
      fullDesc: "We build powerful, scalable custom software solutions — from internal automation tools to complex enterprise systems. Every project is designed with performance, security, and long-term maintainability in mind.",
      features: [
        "Custom architecture & database design",
        "Third-party API integrations",
        "Role-based access control",
        "Real-time analytics & dashboards",
        "Cross-platform compatibility"
      ],
      color: "blue"
    },
    {
      icon: <Globe className="w-14 h-14" />,
      title: "Websites & Web Applications",
      shortDesc: "High-converting digital experiences that represent your brand.",
      fullDesc: "From elegant corporate websites to full-featured SaaS platforms and client portals, we create fast, responsive, and user-friendly web solutions that drive engagement and business growth.",
      features: [
        "Modern, responsive design",
        "SEO & performance optimization",
        "Secure user authentication",
        "Content management systems",
        "Third-party integrations"
      ],
      color: "indigo"
    },
    {
      icon: <ShieldCheck className="w-14 h-14" />,
      title: "Access Control Systems",
      shortDesc: "Smart, secure, and intelligent access management.",
      fullDesc: "We design and implement advanced access control systems including biometric integration, cloud-based management, real-time monitoring, and detailed reporting for offices and organizations.",
      features: [
        "Biometric & RFID integration",
        "Cloud dashboard & mobile access",
        "Real-time alerts & logs",
        "Visitor management module",
        "Security compliance standards"
      ],
      color: "emerald"
    }
  ];

  const marqueeMessages = [
    "Trusted by forward-thinking businesses across Kenya",
    "Delivering exceptional digital solutions since 2024",
    "Custom software that actually improves your bottom line",
    "Modern websites and web apps that convert visitors into customers",
    "Secure access control systems you can rely on",
    "Building technology that grows with your business",
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "From KES 80,000",
      desc: "Perfect for small businesses and simple professional websites",
      features: [
        "Modern responsive website (up to 8 pages)",
        "Contact form & basic integrations",
        "Mobile-friendly design",
        "SEO optimization",
        "1 month post-launch support",
        "Training & handover"
      ]
    },
    {
      name: "Growth",
      price: "From KES 200,000",
      desc: "For growing companies needing custom functionality and better results",
      features: [
        "Advanced website or light web application",
        "Custom design & user authentication",
        "Admin dashboard",
        "Third-party integrations (e.g. M-Pesa)",
        "Performance & SEO optimization",
        "2 months support & maintenance"
      ]
    },
    {
      name: "Enterprise",
      price: "Determined after discovery",
      desc: "Large-scale custom software and intelligent business systems",
      features: [
        "Bespoke software development",
        "Complex integrations & automation",
        "Access control systems (biometric/cloud)",
        "Real-time monitoring & analytics",
        "Dedicated project manager",
        "Ongoing support options"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative py-28 lg:py-40 bg-zinc-950 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full text-sm font-medium mb-8">
            <Star className="w-5 h-5 text-amber-400" />
            WHAT WE OFFER
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-8">
            Services Built for<br />
            <span className="text-blue-400">Real Business Impact</span>
          </h1>

          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            We don’t just develop software — we create solutions that solve problems, 
            increase efficiency, and give you a competitive edge.
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold tracking-tighter text-gray-900">Our Core Services</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored digital solutions designed to grow with your business
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white border border-gray-100 hover:border-blue-200 rounded-3xl p-12 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`inline-flex p-5 rounded-2xl mb-10 transition-all group-hover:scale-110 ${
                  service.color === 'blue' ? 'bg-blue-100 text-blue-600' : 
                  service.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' : 
                  'bg-emerald-100 text-emerald-600'
                }`}>
                  {service.icon}
                </div>

                <h3 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6">{service.title}</h3>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-10">{service.shortDesc}</p>

                <p className="text-gray-700 leading-relaxed mb-12">{service.fullDesc}</p>

                <div className="space-y-4 mb-12">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href="/contact"
                  className="inline-flex items-center text-blue-600 font-semibold hover:gap-4 transition-all group-hover:gap-5"
                >
                  Discuss this service 
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Improved */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tighter text-gray-900 mb-4">
              Project Investment Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible pricing based on your unique project scope and requirements
            </p>
          </div>

          {/* Important Disclaimer */}
          <div className="max-w-3xl mx-auto mb-12 bg-white border border-gray-100 rounded-2xl p-6 flex gap-4">
            <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-gray-600 leading-relaxed">
              Every project is unique. The prices below are <strong>starting points</strong> for typical scopes. 
              Final investment is determined after a detailed discovery call where we understand your exact needs, 
              complexity, timeline, and business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, i) => (
              <div 
                key={i} 
                className={`bg-white rounded-3xl p-10 border transition-all duration-300 ${
                  i === 1 
                    ? 'border-blue-600 scale-105 shadow-2xl relative' 
                    : 'border-gray-100 hover:shadow-xl hover:border-gray-200'
                }`}
              >
                {i === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-6 py-1.5 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-semibold mb-2 text-gray-900">{tier.name}</h3>
                
                <div className="text-4xl font-bold text-gray-900 mb-1">{tier.price}</div>
                <p className="text-gray-500 mb-8">{tier.desc}</p>
                
                <ul className="space-y-4 mb-10">
                  {tier.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /> 
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact"
                  className={`block text-center py-4 rounded-2xl font-semibold transition-all ${
                    i === 1 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'border border-gray-300 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  {i === 1 ? "Discuss Growth Project" : "Get Personalized Quote"}
                </Link>
              </div>
            ))}
          </div>

          {/* Extra Trust Note */}
          <div className="text-center mt-12 text-sm text-gray-500">
            We focus on delivering real ROI — many clients recover their investment within the first 6–12 months.
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-16 bg-zinc-950 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <div className="animate-marquee flex gap-16 items-center text-white/70 text-lg font-medium">
            {marqueeMessages.concat(marqueeMessages).map((text, index) => (
              <div key={index} className="flex items-center gap-4">
                <span>•</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;