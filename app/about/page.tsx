"use client";

import React from 'react';
import Link from 'next/link';
import { Users, Target, Award, Clock, ArrowRight, Code2, Globe, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="relative py-28 lg:py-40 bg-zinc-950 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 bg-white/10 px-5 py-2 rounded-full text-sm mb-8">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              ESTABLISHED 2024 • NAIROBI, KENYA
            </div>

            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-10 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_forwards]">
              A Software Studio<br />
              Built for Ambitious Businesses
            </h1>

            <p className="text-2xl text-gray-300 leading-relaxed opacity-0 translate-y-8 animate-[fadeInUp_0.8s_0.2s_forwards]">
              We are Daleon Dynamics — a focused team of engineers and strategists who turn complex challenges 
              into elegant, high-performing digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY / APPROACH */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-5xl font-bold tracking-tighter text-gray-900 mb-8 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_forwards]">
                We don&apos;t just write code.<br />
                We solve real problems.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-10 text-lg text-gray-600">
              <p className="opacity-0 translate-y-8 animate-[fadeInUp_0.8s_0.1s_forwards]">
                Founded in 2024, Daleon Dynamics was born from frustration with software that looked impressive 
                but failed to deliver real business value. We set out to change that.
              </p>
              <p className="opacity-0 translate-y-8 animate-[fadeInUp_0.8s_0.2s_forwards]">
                Today, we partner with forward-thinking organizations to build custom software, modern websites &amp; web applications, 
                and intelligent access control systems that are secure, scalable, and future-ready.
              </p>
              <p className="font-medium text-gray-900 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_0.3s_forwards]">
                Our focus is simple: Deliver solutions that are secure, scalable, maintainable, and designed to grow with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR EXPERTISE */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tighter text-gray-900 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_forwards]">
              What We Master
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group opacity-0 translate-y-8 animate-[fadeInUp_0.8s_0.1s_forwards]">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Code2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Custom Software</h3>
              <p className="text-gray-600">
                Bespoke internal systems, automation platforms, and enterprise solutions engineered for efficiency and long-term scalability.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group opacity-0 translate-y-8 animate-[fadeInUp_0.8s_0.2s_forwards]">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Websites &amp; Web Apps</h3>
              <p className="text-gray-600">
                High-performance digital experiences that combine beautiful design with powerful functionality and excellent user experience.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group opacity-0 translate-y-8 animate-[fadeInUp_0.8s_0.3s_forwards]">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Access Control Systems</h3>
              <p className="text-gray-600">
                Secure, intelligent access management solutions with biometric integration and centralized control for organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROMISE */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tighter text-gray-900 mb-6 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_forwards]">
              Our Promise to You
            </h2>
            <p className="text-xl text-gray-600 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_0.1s_forwards]">
              When you work with Daleon Dynamics, you get more than just developers — you get a committed partner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {[
              {
                icon: <Target className="w-9 h-9" />,
                title: "Strategic Thinking",
                desc: "We don&apos;t just follow instructions. We ask the right questions and help you build solutions that truly move your business forward."
              },
              {
                icon: <Award className="w-9 h-9" />,
                title: "Obsessive Quality",
                desc: "Clean architecture, modern best practices, and rigorous testing are non-negotiable. We build software we&apos;re proud to put our name on."
              },
              {
                icon: <Users className="w-9 h-9" />,
                title: "Transparency & Trust",
                desc: "You will always know the status of your project. No surprises, no hidden fees, just honest and clear communication."
              },
              {
                icon: <Clock className="w-9 h-9" />,
                title: "Long-term Partnership",
                desc: "We stay with you beyond launch — offering continued support, maintenance, and evolution as your business grows."
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="flex gap-7 group opacity-0 translate-y-8 animate-[fadeInUp_0.8s_forwards]"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">{item.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL SECTION - Blurred Background */}
      <section className="relative py-28 lg:py-40 overflow-hidden">
        {/* Blurred Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=2000')",
            filter: "blur(8px) brightness(0.65)",
          }}
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative max-w-4xl mx-auto px-6 text-center text-white z-10">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-8 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_forwards]">
            Ready to work with a team that truly cares about your success?
          </h2>
          <p className="text-2xl text-gray-200 mb-12 max-w-2xl mx-auto opacity-0 translate-y-8 animate-[fadeInUp_0.8s_0.2s_forwards]">
            If you&apos;re serious about building technology that gives you a real competitive edge, 
            we&apos;re ready to begin.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 bg-white text-zinc-900 px-12 py-6 rounded-3xl font-semibold text-2xl hover:bg-gray-100 transition-all active:scale-95 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_0.4s_forwards]"
          >
            Let&apos;s Discuss Your Project
            <ArrowRight className="w-7 h-7" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;