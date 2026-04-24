import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle,
  Fingerprint,
  Camera,
  Users,
  Clock,
  Star,
  Info,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Access Control Systems in Kenya | Biometric & Security Solutions",
  description:
    "Secure your premises with modern access control systems in Kenya. We design and install biometric, RFID, and cloud-based security systems for businesses, offices, and apartments.",
  keywords: [
    "access control systems Kenya",
    "biometric systems Nairobi",
    "RFID access control Kenya",
    "security systems Kenya",
    "door access control Nairobi",
    "biometric attendance systems",
  ],
  openGraph: {
    title: "Access Control Systems in Kenya | Daleon Dynamics",
    description:
      "Modern biometric and access control systems for businesses and properties in Kenya.",
    url: "https://yourdomain.com/services/access-control-systems",
    siteName: "Daleon Dynamics",
    locale: "en_KE",
    type: "website",
  },
};

const AccessControlSystems = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Access Control Systems",
    provider: {
      "@type": "Organization",
      name: "Daleon Dynamics",
      url: "https://yourdomain.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
    description:
      "Installation and integration of biometric, RFID, and cloud-based access control systems in Kenya.",
  };

  const features = [
    {
      icon: <Fingerprint className="w-8 h-8" />,
      title: "Biometric Access Control",
      desc: "Fingerprint and facial recognition systems for secure, tamper-proof access management.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Staff & Visitor Management",
      desc: "Track employee attendance and manage visitor access with full visibility and control.",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Real-Time Monitoring",
      desc: "Monitor access events in real-time through centralized dashboards and alerts.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Attendance & Time Tracking",
      desc: "Automate attendance tracking and reporting for improved accountability.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Secure & Scalable Systems",
      desc: "Solutions designed for long-term reliability, scalability, and security compliance.",
    },
  ];

  return (
    <>
      {/* SCHEMA */}
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
              ACCESS CONTROL SYSTEMS IN KENYA
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Smart Access Control Systems That
              <span className="text-blue-400"> Secure Your Premises</span>
            </h1>

            <p className="text-xl text-gray-300 mb-10">
              We design and implement modern biometric and access control systems 
              for offices, apartments, schools, and organizations across Kenya.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-blue-600 px-8 py-4 rounded-2xl font-semibold"
            >
              Request a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className="py-24 px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Complete Access Control & Security Solutions
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            We provide end-to-end access control systems — from consultation and system design 
            to installation and support. Our solutions are tailored to your specific security needs,
            ensuring maximum protection and operational efficiency.
          </p>
        </section>

        {/* FEATURES */}
        <section className="py-24 bg-gray-50 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition">
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
            Where These Systems Are Used
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            {[
              "Office buildings & corporate spaces",
              "Residential apartments & gated communities",
              "Schools, colleges & institutions",
              "Hospitals & medical facilities",
              "Warehouses & industrial sites",
              "Hotels & hospitality businesses",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING (CONSULTATION BASED) */}
        <section className="py-28 bg-gray-50 px-6">
          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-5xl font-bold mb-6">
              Custom Pricing Based on Your Needs
            </h2>

            <p className="text-gray-600 text-lg mb-10">
              Every access control system is different. Pricing depends on your premises, 
              number of entry points, hardware requirements, and level of integration.
            </p>

            <div className="bg-white border rounded-3xl p-12 shadow-xl">
              <h3 className="text-3xl font-semibold mb-4">
                Tailored Security Solutions
              </h3>

              <p className="text-gray-500 mb-8">
                We assess your needs and provide a detailed quote after a consultation
              </p>

              <ul className="space-y-4 text-left max-w-md mx-auto mb-10">
                {[
                  "Site assessment & consultation",
                  "System design & recommendations",
                  "Hardware & software integration",
                  "Installation & configuration",
                  "Testing & deployment",
                  "Ongoing support options",
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
                Get a Custom Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Disclaimer */}
            <div className="mt-10 flex gap-3 text-left max-w-2xl mx-auto text-gray-500">
              <Info className="w-5 h-5 mt-1 text-blue-600" />
              <p>
                Final pricing is provided after understanding your site layout, 
                security requirements, and system complexity.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 bg-zinc-950 text-white text-center px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold mb-6">
              Secure Your Property With Confidence
            </h2>

            <p className="text-xl text-gray-300 mb-10">
              Let’s design a smart access control system tailored to your needs.
            </p>

            <Link
              href="/contact"
              className="bg-white text-black px-10 py-5 rounded-2xl font-semibold inline-flex items-center gap-3"
            >
              Start Your Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </div>
    </>
  );
};

export default AccessControlSystems;