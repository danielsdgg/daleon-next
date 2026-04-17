"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Code2, Globe, ShieldCheck, Zap, Users, Award } from 'lucide-react';

const Home = () => {
  const slides = [
    {
      title: "Custom Software",
      subtitle: "Tailored solutions that power your business",
      desc: "We build powerful, scalable custom software that automates processes, improves efficiency, and grows with your company.",
      icon: <Code2 className="w-20 h-20" />,
      bgImage: "https://res.cloudinary.com/ddei3mzex/image/upload/v1775556658/16_xjwxmg.jpg",
    },
    {
      title: "Websites & Web Apps",
      subtitle: "Digital experiences that convert and impress",
      desc: "Beautiful, fast, and high-performing websites and web applications designed to strengthen your brand and drive growth.",
      icon: <Globe className="w-20 h-20" />,
      bgImage: "https://res.cloudinary.com/ddei3mzex/image/upload/v1775556815/web-application-banner_fzgldg.webp",
    },
    {
      title: "Access Control Systems",
      subtitle: "Security you can trust",
      desc: "Advanced, intelligent access control solutions with biometric integration and centralized management for modern organizations.",
      icon: <ShieldCheck className="w-20 h-20" />,
      bgImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=2000",
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      
      {/* Welcome Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-gray-50 via-white to-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-5 h-5" />
            WELCOME TO DALEON DYNAMICS
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-gray-900 leading-none mb-8">
            We Build Digital Solutions<br />
            That Drive Real Growth
          </h1>

          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Daleon Dynamics is a trusted software company specializing in custom software development, 
            modern websites, and powerful web applications for small businesses, growing startups, 
            and large institutions across Kenya and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all active:scale-95 shadow-lg shadow-blue-200"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/about"
              className="flex items-center justify-center gap-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-10 py-5 rounded-2xl font-semibold text-lg transition-all"
            >
              Learn More About Us
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Serving businesses in Kenya
            </div>
            <div>Custom Software</div>
            <div>Web Applications</div>
            <div>Access Control Systems</div>
          </div>
        </div>
      </section>

      {/* HERO CAROUSEL */}
      <section className="relative h-screen flex items-center overflow-hidden pt-24">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-out flex items-center ${
              currentSlide === index 
                ? 'opacity-100 translate-x-0' 
                : currentSlide > index 
                  ? 'opacity-0 -translate-x-full' 
                  : 'opacity-0 translate-x-full'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.bgImage}')` }}
            />
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative max-w-7xl mx-auto px-6 z-10 w-full">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-3xl text-sm font-medium">
                    <Sparkles className="w-5 h-5" />
                    DALEON DYNAMICS
                  </div>

                  <h1 className="text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-none">
                    {slide.title}
                  </h1>

                  <p className="text-3xl text-white/90 font-light tracking-tight">
                    {slide.subtitle}
                  </p>

                  <p className="text-xl text-white/80 max-w-lg">
                    {slide.desc}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-8">
                    <Link
                      href="/contact"
                      className="group flex items-center gap-3 bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold text-lg transition-all active:scale-95"
                    >
                      Start Your Project
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href="/projects"
                      className="flex items-center gap-3 border-2 border-white/70 hover:border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all"
                    >
                      View Our Work
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Dots */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white scale-125' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* WHY US SECTION - Unchanged */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-5xl font-bold tracking-tighter text-gray-900 leading-tight">
                Why Ambitious Businesses Choose Daleon Dynamics
              </h2>
            </div>
            <div className="lg:col-span-7">
              <div className="grid md:grid-cols-2 gap-10">
                {[
                  {
                    icon: <Zap className="w-8 h-8" />,
                    title: "Results Over Features",
                    desc: "We don't just deliver code. We build solutions that increase revenue, reduce costs, and improve efficiency."
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: "True Partnership",
                    desc: "We treat your project as our own. Transparent communication and dedicated support from day one."
                  },
                  {
                    icon: <Award className="w-8 h-8" />,
                    title: "Premium Quality",
                    desc: "Modern tech stack, clean architecture, and obsessive attention to detail in every project."
                  },
                  {
                    icon: <ShieldCheck className="w-8 h-8" />,
                    title: "Built to Last",
                    desc: "Scalable, secure, and maintainable solutions that grow with your business for years to come."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-blue-600 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-zinc-900 py-28 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="mb-8 inline-flex items-center gap-4 bg-white/10 backdrop-blur-md px-8 py-3 rounded-full">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="uppercase tracking-widest text-sm">Limited Slots Available This Quarter</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
            Your Next Big Project<br />
            Deserves a Great Team
          </h2>

          <p className="text-2xl text-gray-300 max-w-2xl mx-auto mb-12">
            We partner with serious businesses ready to invest in technology that delivers real competitive advantage.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-3 bg-white text-gray-900 hover:bg-gray-100 px-12 py-6 rounded-3xl font-semibold text-xl transition-all active:scale-95"
            >
              Start Your Project Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/projects"
              className="flex items-center justify-center gap-3 border border-white/40 hover:border-white px-12 py-6 rounded-3xl font-semibold text-xl transition-all"
            >
              See What We&apos;ve Built
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;