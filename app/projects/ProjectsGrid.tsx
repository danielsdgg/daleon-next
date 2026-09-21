// app/projects/ProjectsGrid.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  tag: string;
  year: string | null;
  description: string;
  result: string | null;
  liveUrl: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Karen Direct Insurance Brokers',
    category: 'Insurance',
    tag: 'Insurance Platform',
    year: '2026',
    description:
      "A modern, secure insurance management platform with policy administration, claims processing, client portal, and real-time analytics for one of Nairobi's fastest-growing insurance companies.",
    result: 'Increased policy renewals by 42%',
    liveUrl: 'https://www.karendirectins.com/',
    image: '/karendirect.png',
  },
  {
    title: 'Morgan Learning Academy LMS',
    category: 'Education',
    tag: 'Education Technology',
    year: '2024',
    description:
      'A comprehensive Learning Management System with course management, student tracking, assessments, and a parent portal for a leading Kenyan academy.',
    result: 'Reduced admin workload by 65%',
    liveUrl: 'https://canvas-1-jxo5.onrender.com/',
    image: '/morgan.webp',
  },
  {
    title: 'SecureGate Access Control',
    category: 'Security',
    tag: 'Security & Facilities',
    year: '2025',
    description:
      'A cloud-based biometric access control system with real-time monitoring, visitor management, staff attendance tracking, and a centralized security dashboard.',
    result: 'Deployed across 12 locations',
    liveUrl: '#',
    image: '/secure.webp',
  },
  {
    title: 'HeroCloth E-commerce Store',
    category: 'E-commerce',
    tag: 'Fashion E-commerce',
    year: '2025',
    description:
      'A high-performance ecommerce platform with seamless product browsing, secure checkout, M-Pesa integration, and order management — built for speed and conversion.',
    result: null,
    liveUrl: 'https://herocloth.vercel.app',
    image: '/fashions.png',
  },
  // {
  //   title: 'My Genesis Fortune',
  //   category: 'Real Estate',
  //   tag: 'Real Estate Platform',
  //   year: '2026',
  //   description:
  //     'An AI-powered real estate platform connecting buyers, tenants, landlords, and agents — helping people find, buy, rent, and manage property across Kenya.',
  //   result: null,
  //   liveUrl: 'https://mygenesisfortune.com',
  //   image: 'https://images.unsplash.com/photo-1758448756207-54505680d130?w=800',
  // },
];

const categories = ['All', 'Insurance', 'Education', 'Security', 'E-commerce'];

const ProjectsGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F2F1F7]">
      {/* HEADER */}
      <section className="pt-32 pb-12 px-6 border-b border-[#232330]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 font-mono text-sm text-[#7B5CFF] mb-6">
            <span>{'//'}</span>
            <span>selected-work</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            Projects That
            <br />
            <span className="bg-gradient-to-r from-[#7B5CFF] to-[#38E1C6] bg-clip-text text-transparent">
              Speak for Themselves
            </span>
          </h1>
          <p className="text-lg text-[#8E8CA3] max-w-2xl mx-auto leading-relaxed mb-4">
            Real solutions, real results — from insurance platforms to real estate and secure access control.
          </p>
          <p className="font-mono text-sm text-[#5C5A6E]">
            {projects.length} projects live across {categories.length - 1} industries
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section className="px-6 pt-10">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs px-4 py-2 rounded-full border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38E1C6] ${
                activeCategory === cat
                  ? 'bg-[#7B5CFF] border-[#7B5CFF] text-white'
                  : 'border-[#232330] text-[#8E8CA3] hover:border-[#38E1C6] hover:text-[#38E1C6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="py-16 px-6 border-b border-[#232330]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-[#0F141B] rounded-xl overflow-hidden border border-[#232330] hover:border-[#7B5CFF] transition-all duration-500 flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.tag} project by Daleon Dynamics`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading='eager'
                  />
                  <div className="absolute top-4 left-4 font-mono text-xs text-[#F2F1F7] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  {project.year && (
                    <div className="absolute top-4 right-4 font-mono text-xs text-[#F2F1F7] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full">
                      {project.year}
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="font-mono uppercase text-[#7B5CFF] text-xs tracking-wider mb-2">
                    {project.tag}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{project.title}</h3>

                  {project.result && (
                    <div className="inline-flex items-center gap-2 bg-[#38E1C6]/10 text-[#38E1C6] text-xs font-medium px-3 py-1.5 rounded-full mb-3 w-fit">
                      ✓ {project.result}
                    </div>
                  )}

                  <p className="text-[#8E8CA3] leading-relaxed text-sm mb-6 flex-1 line-clamp-3">
                    {project.description}
                  </p>

                  {project.liveUrl !== '#' ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#7B5CFF] hover:text-[#8E73FF] font-semibold text-sm group-hover:gap-3 transition-all mt-auto"
                    >
                      View Live Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 font-mono text-xs text-[#8E8CA3] mt-auto">
                      coming_soon • in_development
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to see your vision come to life?
          </h2>
          <p className="text-lg text-[#8E8CA3] max-w-xl mx-auto mb-10">
            Whether it&apos;s a website, a custom system, or a security solution — let&apos;s build something that
            delivers real results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#7B5CFF] hover:bg-[#8E73FF] text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all active:scale-95"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectsGrid;