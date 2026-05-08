import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  LineChart,
  Smartphone,
  Search,
  Users,
  Star,
  Info,
} from "lucide-react";
import type { Metadata } from "next";

// =============================================
// SEO METADATA
// =============================================
export const metadata: Metadata = {
  title: 'High-Converting Websites in Kenya | Nairobi',
  description:
    "Get a professional, fast-loading, SEO-optimized, high-converting website in Kenya. Custom-coded websites for businesses in Nairobi and across Kenya that actually turn visitors into customers.",
  keywords: [
    "web design kenya",
    "website development nairobi",
    "high converting websites kenya",
    "professional website kenya",
    "seo optimized website kenya",
    "business website design nairobi",
    "affordable web design kenya",
    "mobile responsive website kenya",
    "custom website development kenya",
    "high performance website kenya",
    "lead generating website nairobi",
    "conversion rate optimization kenya",
  ],
  authors: [{ name: "Daleon Dynamics" }],
  openGraph: {
    title: "High-Converting Websites in Kenya | Daleon Dynamics",
    description:
      "Professional SEO-optimized, custom-coded websites that drive real business growth in Kenya. Built to convert visitors into customers.",
    url: "https://daleondynamics.com/services/high-converting-websites",
    siteName: "Daleon Dynamics",
    images: [
      {
        url: "https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png",  
        width: 1200,
        height: 630,
        alt: "High-Converting Websites in Kenya - Daleon Dynamics",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "High-Converting Websites in Kenya | Daleon Dynamics",
    description:
      "Turn website visitors into paying customers with expertly crafted, SEO-optimized websites in Kenya.",
  },
  alternates: {
    canonical: "https://daleondynamics.com/services/high-converting-websites",
  },
};

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "High-Converting Website Development in Kenya",
  provider: {
    "@type": "Organization",
    name: "Daleon Dynamics",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
  },
  serviceType: "Web Design and Development",
  areaServed: ["Kenya", "Nairobi", "East Africa"],
  description:
    "Professional high-converting, SEO-optimized, custom-coded websites for businesses in Kenya.",
  offers: {
    "@type": "Offer",
    priceCurrency: "KES",
    price: "80000",
    description: "Starting price for professional business websites",
  },
};

export default function HighConvertingWebsites() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast-Loading, High-Performance Websites",
      desc: "We build ultra-fast websites optimized for performance and Core Web Vitals — improving user experience, SEO rankings, and conversion rates.",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO-Optimized Website Structure",
      desc: "Every website is built with search engine optimization in mind — helping your business rank higher on Google and attract organic traffic across Kenya.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Conversion-Focused Design",
      desc: "Strategic layouts, persuasive sections, clear calls-to-action, and trust signals designed specifically to turn visitors into paying customers.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Responsive Design",
      desc: "Your website will look perfect and perform excellently on all devices — especially mobile, where most Kenyan customers browse.",
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Analytics & Growth Tracking",
      desc: "Integrated analytics so you can track performance, understand customer behavior, and continuously improve your results.",
    },
  ];

  const pricingTiers = [
    {
      name: "Starter Business Website",
      price: "From KES 80,000",
      desc: "Ideal for startups and small businesses looking to establish a strong online presence",
      features: [
        "Professional website (up to 8 pages)",
        "Mobile-responsive design",
        "Basic SEO setup (meta tags, sitemap, indexing)",
        "Contact forms & WhatsApp integration",
        "Fast loading optimization",
        "1 month post-launch support",
      ],
    },
    {
      name: "Growth-Focused Website",
      price: "From KES 200,000",
      desc: "Built to generate leads, increase conversions, and grow your business",
      features: [
        "Everything in Starter",
        "Advanced UI/UX design",
        "Conversion-focused landing pages",
        "On-page SEO optimization (keywords, structure)",
        "Blog or content management system",
        "Google Analytics integration",
        "2 months support & optimization",
      ],
      highlight: true,
    },
    {
      name: "Premium / Custom Website",
      price: "Custom Pricing",
      desc: "For established businesses that need advanced features and scalability",
      features: [
        "Fully custom website design & development",
        "Advanced integrations (M-Pesa, APIs, CRM)",
        "Custom dashboards or portals",
        "Technical SEO & performance optimization",
        "Scalable architecture",
        "Ongoing support options",
      ],
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
              HIGH-CONVERTING BUSINESS WEBSITES IN KENYA
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Professional Websites in Kenya That
              <span className="text-blue-400"> Turn Visitors Into Customers</span>
            </h1>

            <p className="text-xl text-gray-300 mb-10">
              We design and develop fast, modern, SEO-optimized, and high-converting websites for businesses in Kenya. 
              Built from scratch with clean code, strategic design, and conversion-focused architecture to help you attract more customers and grow your revenue.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-semibold"
            >
              Get Your Website Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* VALUE SECTION */}
        <section className="py-24 px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Why a High-Converting Website Matters for Your Business
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            In today’s digital Kenya, your website is often the first interaction potential customers have with your business. 
            A poorly designed site loses sales every day, while a professionally built, high-converting website works 24/7 to 
            generate leads, build trust, and grow your revenue. We combine beautiful design with strategic conversion optimization.
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

        {/* SEO BENEFITS */}
        <section className="py-24 px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Built to Rank on Google & Attract Organic Traffic
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We don’t just design beautiful websites — we build search engine friendly platforms using clean, modern code 
            that help your business appear on Google when people search for your products and services in Kenya.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Keyword-optimized page structure",
              "Fast loading speeds (Core Web Vitals)",
              "Mobile-first indexing ready",
              "Clean, SEO-friendly code",
              "Meta tags, schema markup & sitemap",
              "Structured content for higher rankings",
              "Technical SEO best practices",
              "Local SEO optimization for Nairobi & Kenya",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section className="py-28 bg-gray-50 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">
                Website Development Pricing in Kenya
              </h2>
              <p className="text-gray-600 text-lg">
                Flexible pricing based on your business goals and website requirements
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 mb-12 flex gap-4">
              <Info className="text-blue-600 w-6 h-6 mt-1" />
              <p className="text-gray-600">
                These are starting prices for typical business websites in Kenya. Final pricing depends on your
                exact requirements, features, integrations, and level of customization.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, i) => (
                <div
                  key={i}
                  className={`p-10 rounded-3xl border ${
                    tier.highlight
                      ? "border-blue-600 shadow-2xl scale-105 bg-white"
                      : "border-gray-100 bg-white hover:shadow-xl"
                  }`}
                >
                  {tier.highlight && (
                    <div className="mb-4 text-xs font-semibold text-blue-600">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold mb-2">{tier.price}</div>
                  <p className="text-gray-500 mb-6">{tier.desc}</p>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((f, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-700">
                        <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block text-center py-4 rounded-xl font-semibold transition ${
                      tier.highlight
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    Get a Quote
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 text-sm text-gray-500">
              Many of our clients recover their website investment within the first few months through increased leads and sales.
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-28 bg-zinc-900 text-white text-center px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold mb-6">
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let’s build a high-converting website that attracts the right customers and drives real results for your business in Kenya.
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