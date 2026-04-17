"use client";

import React from 'react';
import Link from 'next/link';
import { Code2, Globe, ShieldCheck, ArrowRight, CheckCircle, Star } from 'lucide-react';

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

  // Marquee Messages
  const marqueeMessages = [
    "Trusted by forward-thinking businesses across Kenya",
    "Delivering exceptional digital solutions since 2024",
    "Custom software that actually improves your bottom line",
    "Modern websites and web apps that convert visitors into customers",
    "Secure access control systems you can rely on",
    "Building technology that grows with your business",
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Unique Hero Section */}
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

      {/* Services Section */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold tracking-tighter text-gray-900">Our Core Services</h2>
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

      {/* Pricing Tiers */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tighter text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the right package for your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Starter", price: "From KES 170,000", desc: "Perfect for small businesses & MVPs", features: ["Basic website", "Up to 5 pages", "Contact form", "Mobile responsive", "SEO support", "1 month support"] },
              { name: "Growth", price: "From KES 350,000", desc: "For growing companies & startups", features: ["Full website or web app", "Custom design", "User authentication", "Admin dashboard", "SEO support", "3 months support"] },
              { name: "Enterprise", price: "Custom Quote", desc: "Large-scale & complex projects", features: ["Custom software", "Advanced integrations", "Access control system", "Dedicated manager", "Ongoing support", "SEO support"] }
            ].map((tier, i) => (
              <div key={i} className={`bg-white rounded-3xl p-10 border transition-all ${i === 1 ? 'border-blue-600 scale-105 shadow-2xl' : 'border-gray-100 hover:shadow-xl'}`}>
                <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-1">{tier.price}</div>
                <p className="text-gray-500 mb-8">{tier.desc}</p>
                
                <ul className="space-y-4 mb-10">
                  {tier.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500" /> {f}
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact"
                  className={`block text-center py-4 rounded-2xl font-semibold transition-all ${i === 1 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-gray-300 hover:bg-gray-50'}`}
                >
                  {i === 1 ? "Choose Growth Package" : "Get Quote"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elegant Moving Marquee Section */}
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