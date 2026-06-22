// app/services/high-converting-website/page.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Info, TrendingUp, Zap, Users, Target } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'High-Converting Websites Nairobi | Web Design Kenya | Daleon Dynamics',
  description: 'High-converting, SEO-optimized websites in Nairobi, Kenya. Fast, mobile-first, conversion-focused designs that turn visitors into paying customers. Professional web design company.',
  
  keywords: [
    'high converting websites nairobi', 'web design nairobi', 'website design kenya',
    'seo optimized websites nairobi', 'conversion rate optimization kenya',
    'professional website design nairobi', 'business website kenya', 'landing page design nairobi',
    'fast loading websites kenya', 'ecommerce website nairobi', 'daleon dynamics'
  ],

  alternates: {
    canonical: 'https://daleondynamics.com/services/high-converting-website'
  },

  openGraph: {
    title: 'High-Converting Websites Nairobi | Professional Web Design Kenya',
    description: 'We build beautiful, fast, and conversion-focused websites that help Kenyan businesses generate more leads and grow faster.',
    url: 'https://daleondynamics.com/services/high-converting-website',
    images: [
      {
        url: 'https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png',
        width: 1200,
        height: 630,
        alt: 'High-Converting Websites Nairobi - Daleon Dynamics'
      }
    ],
    locale: 'en_KE',
    type: 'website'
  }
};

const HighConvertingWebsitePage: React.FC = () => {
  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Higher Conversion Rates",
      desc: "Strategic layouts, compelling CTAs, and trust signals that guide visitors to take action."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning-Fast Performance",
      desc: "Optimized for Core Web Vitals — fast loading speeds that improve rankings and user experience."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "SEO Built-In",
      desc: "Technical and on-page SEO that helps your site rank higher on Google for Nairobi and Kenya searches."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mobile-First Design",
      desc: "Perfect experience on phones — critical since most Kenyans browse on mobile."
    }
  ];

  const processSteps = [
    { num: "01", title: "Discovery & Strategy", desc: "Understand your business goals, target customers, and conversion objectives." },
    { num: "02", title: "User-Centered Design", desc: "Wireframes and high-fidelity designs focused on guiding users toward action." },
    { num: "03", title: "Development & Optimization", desc: "Built with Next.js for speed, security, and scalability." },
    { num: "04", title: "Testing & Launch", desc: "Rigorous testing, analytics setup, and launch with post-launch support." }
  ];

  const faqs = [
    {
      q: 'How long does it take to build a high-converting website?',
      a: 'Typical timelines range from 4–8 weeks for standard sites and 10–14 weeks for complex, conversion-optimized builds with custom integrations.'
    },
    {
      q: 'Do you provide SEO and content support?',
      a: 'Yes — we include comprehensive on-page SEO, technical setup, and can handle content strategy and professional copywriting as an add-on service.'
    },
    {
      q: 'Will my website be mobile-friendly?',
      a: 'Absolutely. Every website is built mobile-first and thoroughly tested across devices. We optimize for excellent Core Web Vitals so your site loads quickly and ranks better on Google.'
    },
    {
      q: 'Do you integrate M-Pesa and other payment systems?',
      a: 'Yes. We specialize in secure M-Pesa Daraja API integration and other Kenyan payment gateways for seamless online transactions.'
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
                "name": "High-Converting Websites Nairobi",
                "description": "Professional high-converting, SEO-optimized websites built for businesses in Nairobi and across Kenya.",
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
                "serviceType": "Web Design",
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "KES",
                  "price": "80000",
                  "description": "Starting price for a professional high-converting website"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map((f) => ({
                  "@type": "Question",
                  "name": f.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.a
                  }
                }))
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://daleondynamics.com" },
                  { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://daleondynamics.com/services" },
                  { "@type": "ListItem", "position": 3, "name": "High-Converting Websites", "item": "https://daleondynamics.com/services/high-converting-website" }
                ]
              }
            ]
          })
        }}
      />

      {/* UNIQUE HERO - Fresh & Energetic Design */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-900 via-cyan-700 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#ffffff15_0%,transparent_50%)]" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-sm font-medium mb-8">
            <TrendingUp className="w-5 h-5" /> PROVEN TO CONVERT
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            High-Converting Websites in <span className="text-amber-300">Nairobi, Kenya</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-10">
            We design and develop fast, beautiful, and conversion-optimized websites that don’t just look good — they generate leads, build trust, and grow your revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-white text-teal-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/90 transition"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#process"
              className="inline-flex items-center justify-center gap-3 border-2 border-white/70 hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold text-lg transition"
            >
              See Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO / VALUE */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg text-gray-700">
          <p>
            In today’s competitive Kenyan market, having a website is not enough. 
            Your website must work hard — attracting the right visitors, building instant credibility, and converting them into customers. 
            At Daleon Dynamics, we build high-converting websites tailored for Kenyan businesses & beyond.
          </p>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Our Websites Convert Better</h2>
            <p className="text-xl text-gray-600">Designed with strategy, not just aesthetics</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition">
                <div className="text-teal-600 mb-6">{benefit.icon}</div>
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
          <h2 className="text-4xl font-bold text-center mb-16">Our Proven Website Development Process</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative text-center md:text-left">
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-0.5 bg-gray-200" />
                )}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-teal-100 text-teal-700 font-bold text-xl mb-6">
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
          <h2 className="text-4xl font-bold text-center mb-16">What’s Included in Your High-Converting Website</h2>
          
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-6">
              {[
                "Modern, professional design that reflects your brand",
                "Fast loading speeds (optimized with Next.js)",
                "Mobile-first & fully responsive design",
                "Advanced on-page and technical SEO",
                "Contact forms, lead capture, and clear CTAs",
                "Google Analytics 4 + conversion tracking",
                "SSL security, speed optimization & hosting setup",
                "Training and handover with cPanel access"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-lg">
                  <CheckCircle className="w-7 h-7 text-teal-600 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Transparent Pricing</h2>
          <p className="text-2xl font-semibold text-teal-700 mb-4">Starting from KES 80,000</p>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            This is the starting price for a professional high-converting business website. 
            Final cost depends on features, number of pages, and integrations.
          </p>

          <div className="inline-flex items-center gap-4 bg-amber-50 border border-amber-200 rounded-2xl px-8 py-5 text-left max-w-md mx-auto">
            <Info className="w-6 h-6 text-amber-600 flex-shrink-0" />
            <p className="text-gray-700">Every project receives a custom quote after a short discovery call.</p>
          </div>

          <Link
            href="/contact"
            className="mt-10 inline-block bg-teal-600 text-white px-10 py-4 rounded-2xl font-semibold hover:bg-teal-700 transition"
          >
            Get Your Personalized Quote
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white p-8 rounded-3xl border group">
                <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center">
                  {faq.q}
                  <span className="text-teal-600 group-open:rotate-45 transition">✕</span>
                </summary>
                <p className="mt-6 text-gray-700 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-zinc-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get More Customers Online?</h2>
          <p className="text-xl text-gray-400 mb-10">Let’s build a website that actually works for your business.</p>
          
          <Link href="/contact" className="inline-block bg-white text-black px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-gray-100 transition">
            Book a Free Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HighConvertingWebsitePage;