"use client";

import React from "react";
import Link from "next/link";
import {
  Code2,
  ArrowRight,
  CheckCircle,
  Database,
  Workflow,
  ShieldCheck,
  BarChart3,
  Users,
  Star,
  Info,
} from "lucide-react";

const CustomWebApps = () => {
  const features = [
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Business Process Automation",
      desc: "We eliminate repetitive manual work by building systems that automate your operations — saving time and reducing errors.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Centralized Data Management",
      desc: "All your business data in one secure place — accessible, organized, and easy to manage.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Role-Based Access Control",
      desc: "Control who sees what. Assign permissions to staff, admins, or clients with complete flexibility.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-Time Analytics & Dashboards",
      desc: "Track performance, monitor operations, and make smarter decisions using live data insights.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Secure & Scalable Architecture",
      desc: "Built with security best practices and designed to scale as your business grows.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="py-28 bg-zinc-950 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full text-sm mb-6">
            <Star className="w-5 h-5 text-amber-400" />
            CUSTOM WEB APPLICATIONS & SYSTEMS
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Powerful Custom Web Applications That
            <span className="text-blue-400"> Transform How Your Business Operates</span>
          </h1>

          <p className="text-xl text-gray-300 mb-10">
            We design and build tailored web applications that automate processes,
            improve efficiency, and give your business full control over its operations.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-semibold"
          >
            Discuss Your System
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          What Is a Custom Web Application?
        </h2>

        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
          A custom web application is a system built specifically for your business — 
          designed around your workflows, your team, and your goals.
          Unlike off-the-shelf software, it gives you complete flexibility, control, 
          and a competitive advantage.
        </p>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all">
              <div className="text-blue-600 mb-4">{f.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          What We Can Build For You
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-gray-700">
          {[
            "Client portals & dashboards",
            "Learning management systems (LMS)",
            "Booking & reservation systems",
            "Internal business tools & admin systems",
            "Inventory & stock management systems",
            "Custom CRMs (Customer Management Systems)",
            "Financial tracking & reporting tools",
            "Multi-user platforms with authentication",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="py-24 bg-zinc-900 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Why Custom Systems Give You a Competitive Advantage
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed">
            Off-the-shelf software forces you to adapt to it.  
            Custom systems are built to adapt to you.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-8 text-left">
            {[
              "Operate faster with automated workflows",
              "Reduce human errors and inefficiencies",
              "Scale your operations without chaos",
            ].map((point, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-2xl">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING - ONLY WEB APPS */}
      <section className="py-28 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-6">
            Custom Web App Investment
          </h2>

          <p className="text-gray-600 text-lg mb-10">
            Every system is unique — pricing depends on features, complexity, and integrations.
          </p>

          {/* Pricing Card */}
          <div className="bg-white border rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl font-semibold mb-4">
              Custom Web Applications
            </h3>

            <div className="text-4xl font-bold mb-4">
              From KES 250,000+
            </div>

            <p className="text-gray-500 mb-8">
              Tailored systems designed specifically for your business operations
            </p>

            <ul className="space-y-4 text-left max-w-md mx-auto mb-10">
              {[
                "Full system design & development",
                "User authentication & roles",
                "Custom dashboards",
                "Database & backend architecture",
                "API integrations (M-Pesa, third-party)",
                "Security implementation",
                "Deployment & support",
              ].map((f, i) => (
                <li key={i} className="flex gap-3 text-gray-700">
                  <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-semibold inline-flex items-center gap-3"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="mt-10 flex gap-3 text-left max-w-2xl mx-auto text-gray-500">
            <Info className="w-5 h-5 mt-1 text-blue-600" />
            <p>
              Final pricing is determined after a discovery session where we define
              your exact requirements, system complexity, and business goals.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 bg-zinc-950 text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">
            Let’s Build a System That Works For You
          </h2>

          <p className="text-xl text-gray-300 mb-10">
            Stop relying on tools that limit your business.  
            Let’s create something built exactly for you.
          </p>

          <Link
            href="/contact"
            className="bg-white text-black px-10 py-5 rounded-2xl font-semibold inline-flex items-center gap-3"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default CustomWebApps;