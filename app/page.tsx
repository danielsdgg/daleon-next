"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Zap, Users, Award, ShieldCheck, Globe, Code2, ExternalLink, MessageCircle } from 'lucide-react';

const Home: React.FC = () => {
  const featuredProjects = [
    {
      title: "Insurance Kenya Portal",
      category: "Insurance Platform",
      year: "2025",
      description: "Modern insurance platform with policy management, claims processing, and client portal that has helped streamline operations and improve customer experience for one of Nairobi's fastest-growing insurers.",
      liveUrl: "https://insurancekenya.vercel.app",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
      result: "Meant to increase policy renewals by 42%"
    },
    {
      title: "Morgan Learning Academy",
      category: "Learning Management System",
      year: "2024",
      description: "Comprehensive Learning Management System built for a leading Kenyan academy. Features course management, student tracking, assessments, and parent portal.",
      liveUrl: "https://canvas-1-jxo5.onrender.com/",
      image: "https://res.cloudinary.com/ddei3mzex/image/upload/v1775549982/1A9A6803_pp58u4.jpg",
      result: "Reduced admin workload by 65%"
    },
    {
      title: "SecureGate Access Control",
      category: "Security & Facilities",
      year: "2025",
      description: "Cloud-based biometric access control system with real-time monitoring, visitor management, and staff attendance tracking for commercial and residential properties.",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      result: "Deployed across 12 locations"
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-blue-100 via-white to-blue-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-6 py-2.5 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-5 h-5" />
            WEB DESIGN &amp; CUSTOM SOFTWARE COMPANY IN NAIROBI, KENYA
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-gray-900 leading-none mb-8">
            High-Performance Websites &amp; Custom Systems <br />
            That Help Kenyan Businesses <span className="text-blue-600">Grow Faster</span>
          </h1>

          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            We build modern, fast-loading websites, powerful custom web applications, business automation systems, 
            and secure access control solutions that attract more customers, automate operations, and deliver real competitive advantage.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link 
              href="/contact" 
              className="group flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all active:scale-95 shadow-lg shadow-blue-200"
            >
              Get Your Free Quote Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#projects"
              className="flex items-center justify-center gap-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-10 py-5 rounded-2xl font-semibold text-lg transition-all"
            >
              View Our Projects
            </Link>
          </div>

          <div className="mt-16 text-sm text-gray-500 flex flex-wrap justify-center gap-x-8 gap-y-3">
            <div>✓ Fast &amp; SEO Optimized Websites</div>
            <div>✓ Mobile-First Design</div>
            <div>✓ Custom Software Development</div>
            <div>✓ Access Control Systems Kenya</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white text-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group p-10 bg-zinc-50 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-semibold mb-4">High-Converting Websites</h3>
              <p className="text-zinc-600 text-lg">
                Beautiful, fast, and professional websites designed to build trust, attract customers, and turn visitors into loyal clients.
              </p>
              <Link href="/services/high-converting-website" className="inline-flex items-center gap-2 mt-8 text-blue-600 font-medium hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group p-10 bg-zinc-50 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Code2 className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-semibold mb-4">Custom Web Apps & Systems</h3>
              <p className="text-zinc-600 text-lg">
                Powerful internal tools and web applications that automate processes, improve team efficiency, and scale with your business.
              </p>
              <Link href="/services/custom-web-apps" className="inline-flex items-center gap-2 mt-8 text-blue-600 font-medium hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="group p-10 bg-zinc-50 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-semibold mb-4">Access Control Systems</h3>
              <p className="text-zinc-600 text-lg">
                Intelligent biometric and centralized security solutions to protect your premises and streamline staff/visitor management.
              </p>
              <Link href="/services/access-control-systems" className="inline-flex items-center gap-2 mt-8 text-blue-600 font-medium hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-5xl font-bold tracking-tight">Recent Work</h2>
              <p className="text-2xl text-zinc-400 mt-3">Real results for Kenyan businesses</p>
            </div>
            <Link
              href="/projects"
              className="mt-6 md:mt-0 text-blue-500 hover:text-blue-400 font-medium flex items-center gap-2 group"
            >
              View all projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-blue-600/50 transition-all duration-500 hover:shadow-2xl"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-6 right-6 bg-black/70 backdrop-blur-md px-4 py-1 rounded-full text-sm font-medium">
                    {project.year}
                  </div>
                </div>

                <div className="p-8">
                  <div className="uppercase text-blue-500 text-sm font-medium tracking-wider mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
                  
                  {project.result && (
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                      ✓ {project.result}
                    </div>
                  )}

                  <p className="text-zinc-400 mb-8 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {project.liveUrl !== "#" ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-blue-500 hover:text-blue-400 font-semibold group-hover:gap-4 transition-all"
                    >
                      View Live Project
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-3 text-amber-500 font-medium">
                      Coming Soon • In Development
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="py-24 bg-white text-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4">
              Why Ambitious Businesses Choose Daleon Dynamics
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              We don’t just build websites — we build growth engines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-10 h-10" />,
                title: "Results Over Features",
                desc: "We focus on outcomes — more revenue, lower costs, happier customers, and smoother operations.",
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "True Partnership",
                desc: "Your success is our success. Transparent communication and ongoing support every step of the way.",
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: "Premium Quality",
                desc: "Clean code, modern technologies, and obsessive attention to detail in every project.",
              },
              {
                icon: <ShieldCheck className="w-10 h-10" />,
                title: "Built to Last",
                desc: "Scalable, secure, and maintainable solutions designed to serve your business for years.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-50 p-10 rounded-3xl hover:shadow-xl transition-all">
                <div className="text-blue-600 mb-6">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="bg-zinc-900 py-28 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="mb-8 inline-flex items-center gap-4 bg-white/10 backdrop-blur-md px-8 py-3 rounded-full">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="uppercase tracking-widest text-sm">Limited Slots Available This Quarter</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
            Ready to Transform Your Digital Presence?
          </h2>

          <p className="text-2xl text-gray-300 max-w-2xl mx-auto mb-12">
            Let’s discuss how we can build technology that drives real growth for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-3 bg-white text-gray-900 hover:bg-gray-100 px-12 py-6 rounded-3xl font-semibold text-xl transition-all active:scale-95"
            >
              Start Your Project
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://wa.me/254142021359"
              target="_blank"
              className="flex items-center justify-center gap-3 border border-white/40 hover:border-white px-12 py-6 rounded-3xl font-semibold text-xl transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </a>
          </div>

          <p className="mt-12 text-gray-400 text-sm">
            Nairobi, Kenya • daleondynamics@gmail.com
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;