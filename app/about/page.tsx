import React from 'react';
import Link from 'next/link';
import { Users, Target, Award, Clock, ArrowRight, Code2, Globe, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Software Development Company Nairobi',
  description: 'We are a Nairobi-based software studio building high-converting websites, custom web applications, business automation systems, and access control solutions for Kenyan businesses.',
  
  keywords: [
    'about daleon dynamics', 'software development company nairobi', 'web development kenya',
    'custom software development nairobi', 'website design company kenya', 'access control systems kenya',
    'business automation kenya', 'software company nairobi', 'custom web apps kenya'
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
  return (
    <div className="min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="relative py-28 lg:py-40 bg-zinc-950 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full text-sm mb-8">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              WE ARE DALEON DYNAMICS
            </div>

            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-10">
              We Build Technology That Helps Kenyan Businesses Grow
            </h1>

            <p className="text-2xl text-gray-300 leading-relaxed">
              Daleon Dynamics is a custom software development studio based in Nairobi. 
              We create high-performance websites, powerful web applications, and intelligent systems 
              that solve real business problems.
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-5xl font-bold tracking-tighter text-gray-900 mb-8">
                Our Story
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-8 text-lg text-gray-600">
              <p>
                Founded in 2024 in Nairobi, Daleon Dynamics was created out of frustration with generic 
                template websites and poorly built software that many Kenyan businesses were forced to use.
              </p>
              <p>
                We believe Kenyan businesses deserve world-class digital solutions — built locally, 
                with deep understanding of the local market, payment systems (like M-Pesa), and business challenges.
              </p>
              <p className="font-medium text-gray-900">
                Today, we partner with ambitious companies across Kenya to build custom-coded digital products 
                that are fast, secure, scalable, and designed to grow with the business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR EXPERTISE */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tighter text-gray-900">Our Expertise</h2>
            <p className="mt-4 text-xl text-gray-600">What we build best</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Custom Software Development",
                desc: "Bespoke internal tools, CRM systems, inventory management, and automation platforms built from scratch."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "High-Converting Websites & Web Apps",
                desc: "Modern, fast, and SEO-optimized websites and web applications that turn visitors into customers."
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Access Control & Security Systems",
                desc: "Biometric access control, visitor management, and centralized security solutions for organizations."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
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
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tighter text-gray-900">Why Businesses Choose Daleon Dynamics</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {[
              {
                icon: <Target className="w-9 h-9" />,
                title: "Custom-Coded Solutions",
                desc: "We build most systems from the ground up using modern programming languages. No cheap templates."
              },
              {
                icon: <Award className="w-9 h-9" />,
                title: "Result-Oriented Approach",
                desc: "Every project is designed with clear business outcomes — more leads, better efficiency, or stronger security."
              },
              {
                icon: <Users className="w-9 h-9" />,
                title: "Transparent Partnership",
                desc: "You remain in full control. Regular updates, no hidden fees, and clear communication throughout."
              },
              {
                icon: <Clock className="w-9 h-9" />,
                title: "Long-term Support",
                desc: "We don’t disappear after launch. We offer continued maintenance and evolution of your system."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-7">
                <div className="text-blue-600 mt-1 flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-28 lg:py-40 overflow-hidden bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
            Ready to build something exceptional?
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            If you want a digital solution that truly represents your business and drives growth, let’s talk.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 bg-white text-zinc-900 px-12 py-6 rounded-3xl font-semibold text-xl hover:bg-gray-100 transition-all active:scale-95"
          >
            Start Your Project
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;