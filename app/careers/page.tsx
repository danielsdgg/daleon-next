import type { Metadata } from "next";
import React from "react";
import {
  ArrowRight,
  Users,
  Star,
  Briefcase,
  Globe,
  HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at Daleon Dynamics | Join Our Team",
  description:
    "Explore career opportunities at Daleon Dynamics. We are always looking for talented developers, designers, and innovators in Kenya.",
  keywords: [
    "careers Kenya tech",
    "jobs Nairobi developers",
    "software developer jobs Kenya",
    "web developer careers Kenya",
    "Daleon Dynamics careers",
  ],
  openGraph: {
    title: "Careers at Daleon Dynamics",
    description:
      "Join a growing team building modern digital solutions in Kenya.",
    url: "https://yourdomain.com/careers",
    siteName: "Daleon Dynamics",
    locale: "en_KE",
    type: "website",
  },
};

const Careers:React.FC = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="py-28 bg-zinc-950 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full text-sm mb-6">
            <Star className="w-5 h-5 text-amber-400" />
            CAREERS AT DALEON DYNAMICS
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Build the Future With Us
          </h1>

          <p className="text-xl text-gray-300 mb-10">
            We’re a growing team of developers, designers, and problem-solvers 
            building powerful digital solutions for businesses in Kenya and beyond.
          </p>
        </div>
      </section>

      {/* CULTURE */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          What It’s Like Working With Us
        </h2>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          At Daleon Dynamics, we focus on building meaningful solutions, 
          working with purpose, and constantly improving our craft. 
          We value creativity, ownership, and people who take initiative.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="w-8 h-8" />,
              title: "Collaborative Team",
              desc: "Work with a focused and driven team that values communication and growth.",
            },
            {
              icon: <Globe className="w-8 h-8" />,
              title: "Real Impact",
              desc: "Build solutions that directly impact real businesses and real people.",
            },
            {
              icon: <HeartHandshake className="w-8 h-8" />,
              title: "Growth-Oriented",
              desc: "We believe in continuous learning and improving both technically and professionally.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-3xl">
              <div className="text-blue-600 mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NO OPEN ROLES */}
      <section className="py-24 bg-gray-50 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-blue-600 mb-6 flex justify-center">
            <Briefcase className="w-12 h-12" />
          </div>

          <h2 className="text-4xl font-bold mb-6">
            No Open Positions Right Now
          </h2>

          <p className="text-lg text-gray-600 mb-10">
            We don’t have any active openings at the moment. However, we are always 
            on the lookout for talented individuals who are passionate about building 
            great digital products.
          </p>

          <p className="text-gray-700">
            If you believe you’d be a great fit, feel free to reach out — we’d love to hear from you.
          </p>
        </div>
      </section>

      {/* WHAT WE LOOK FOR */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Who We’re Always Looking For
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-gray-700">
          {[
            "Frontend developers (React, Next.js, TypeScript)",
            "Backend developers (Python,Java, APIs, databases)",
            "UI/UX designers",
            "Problem-solvers with strong attention to detail",
            "Self-driven individuals who take initiative",
            "People passionate about building real-world solutions",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <ArrowRight className="w-5 h-5 mt-1 text-blue-600" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>      
    </div>
  );
};

export default Careers;