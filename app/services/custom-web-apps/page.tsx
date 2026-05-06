import React from "react";
import Link from "next/link";
import {
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
import type { Metadata } from "next";

// =============================================
// SEO METADATA
// =============================================
export const metadata: Metadata = {
  title: "Custom Web Applications Development in Kenya | Tailored Business Systems",
  description:
    "Build powerful custom web applications in Kenya. We create tailored business systems, automation tools, CRMs, dashboards, and internal platforms that improve efficiency and scalability.",
  keywords: [
    "custom web application kenya",
    "web app development nairobi",
    "custom software development kenya",
    "business process automation kenya",
    "custom crm kenya",
    "tailored web systems nairobi",
    "inventory management system kenya",
    "custom dashboard development kenya",
    "bespoke web applications kenya",
    "enterprise web solutions kenya",
    "business automation software kenya",
  ],
  authors: [{ name: "Daleon Dynamics" }],
  openGraph: {
    title: "Custom Web Applications Development in Kenya | Daleon Dynamics",
    description:
      "Transform your business operations with powerful custom-built web applications, automation systems, and internal tools.",
    url: "https://daleondynamics.com/services/custom-web-apps",
    siteName: "Daleon Dynamics",
    images: [
      {
        url: "https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png", 
        width: 1200,
        height: 630,
        alt: "Custom Web Applications Development in Kenya",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Applications in Kenya | Daleon Dynamics",
    description:
      "Powerful tailored web apps that automate processes and drive business efficiency in Kenya.",
  },
  alternates: {
    canonical: "https://daleondynamics.com/services/custom-web-apps",
  },
};

// Structured Data (JSON-LD)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Web Application Development in Kenya",
  provider: {
    "@type": "Organization",
    name: "Daleon Dynamics",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
  },
  serviceType: "Custom Software Development",
  areaServed: ["Kenya", "Nairobi", "East Africa"],
  description:
    "Development of tailored web applications, business automation systems, dashboards, and internal tools for Kenyan businesses.",
  offers: {
    "@type": "Offer",
    priceCurrency: "KES",
    price: "250000",
    description: "Starting price for custom web applications",
  },
};

export default function CustomWebApps() {
  const features = [
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Business Process Automation",
      desc: "We eliminate repetitive manual work by building systems that automate your operations — saving time, reducing errors, and increasing efficiency.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Centralized Data Management",
      desc: "All your important business data in one secure, organized, and easily accessible platform.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Role-Based Access Control",
      desc: "Securely control what each user can see and do — whether staff, managers, or external clients.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-Time Analytics & Dashboards",
      desc: "Make informed decisions faster with live insights, performance tracking, and custom reports.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Secure & Scalable Architecture",
      desc: "Built with modern security best practices and designed to grow seamlessly as your business expands.",
    },
  ];

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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
              We design and build tailored web applications and business systems in Kenya that automate processes, 
              improve efficiency, reduce costs, and give you full control over your operations.
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
            A custom web application is a powerful digital system built specifically for your business — 
            designed around your unique workflows, processes, and goals. Unlike generic off-the-shelf software, 
            it fits your business perfectly, eliminates inefficiencies, and gives you a real competitive advantage.
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
              "Client portals & customer dashboards",
              "Learning Management Systems (LMS)",
              "Booking & reservation platforms",
              "Internal business tools & admin panels",
              "Inventory & stock management systems",
              "Custom CRMs & client management systems",
              "Financial tracking & invoicing tools",
              "Multi-user platforms with secure authentication",
              "HR & employee management systems",
              "Real-time monitoring & reporting tools",
              "Procurement & supply chain systems",
              "Field service management applications",
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
              Stop forcing your business to fit into someone else’s software. 
              We build systems that adapt to your processes — giving you speed, control, and efficiency your competitors don’t have.
            </p>
            <div className="mt-10 grid md:grid-cols-3 gap-8 text-left">
              {[
                "Automate repetitive tasks and reduce errors",
                "Get real-time insights for better decisions",
                "Scale your operations smoothly as you grow",
              ].map((point, i) => (
                <div key={i} className="bg-white/10 p-6 rounded-2xl">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-28 bg-gray-50 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">
              Custom Web App Investment
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Every system is unique — pricing depends on features, complexity, and integrations.
            </p>

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
                  "Deployment & training",
                  "Post-launch support",
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

            <div className="mt-10 flex gap-3 text-left max-w-2xl mx-auto text-gray-500">
              <Info className="w-5 h-5 mt-1 text-blue-600" />
              <p>
                Final pricing is determined after a discovery session where we define
                your exact requirements, system complexity, and business goals. We provide transparent quotes and work within your budget to deliver maximum value.
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
    </>
  );
}