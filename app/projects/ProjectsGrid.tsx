// app/projects/ProjectsGrid.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ExternalLink, Globe, MessageCircle } from 'lucide-react';
import { projects } from './data';

const WHATSAPP_URL = 'https://wa.me/254142021359';

const ProjectsGrid: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F2F1F7]">
      {/* HEADER */}
      <section className="pt-28 pb-12 px-6 border-b border-[#232330]">
        <div className="max-w-4xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="mb-8 font-mono text-xs text-[#8E8CA3]">
            <ol className="flex items-center justify-center gap-2">
              <li><Link href="/" className="hover:text-[#38E1C6]">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#F2F1F7]">Projects</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 font-mono text-sm text-[#7B5CFF] mb-6">
            <span>{'//'}</span>
            <span>selected-work</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            Selected{' '}
            <span className="bg-gradient-to-r from-[#7B5CFF] to-[#38E1C6] bg-clip-text text-transparent">
              Client Work
            </span>
          </h1>
          <p className="text-lg text-[#8E8CA3] max-w-2xl mx-auto leading-relaxed">
            Websites and web applications we have built for Kenyan businesses and organisations. Ask us
            for more detail on any project.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="py-16 px-6 border-b border-[#232330]">
        <div className="max-w-6xl mx-auto">
          <h2 className="sr-only">Recent websites and web applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="group flex flex-col overflow-hidden rounded-xl border border-[#232330] bg-[#0F141B] transition-all duration-500 hover:border-[#7B5CFF]"
              >
                <div className="relative h-52 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title}: ${project.tag}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0F141B] to-[#7B5CFF]/20">
                      <Globe className="h-12 w-12 text-[#38E1C6]" aria-hidden="true" />
                    </div>
                  )}
                  {project.year && (
                    <div className="absolute top-4 right-4 rounded-full bg-black/60 px-2.5 py-1 font-mono text-xs text-[#F2F1F7] backdrop-blur-md">
                      {project.year}
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2 font-mono text-xs uppercase tracking-wider text-[#7B5CFF]">
                    {project.tag}
                  </div>
                  <h3 className="mb-1 text-lg font-semibold">{project.title}</h3>
                  {project.client && (
                    <p className="mb-3 text-xs text-[#8E8CA3]">Client: {project.client}</p>
                  )}

                  {project.result && (
                    <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-[#38E1C6]/10 px-3 py-1.5 text-xs font-medium text-[#38E1C6]">
                      <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                      {project.result}
                    </div>
                  )}

                  <p className="mb-6 flex-1 text-sm leading-relaxed text-[#8E8CA3]">
                    {project.description}
                  </p>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#7B5CFF] transition-all hover:text-[#8E73FF] group-hover:gap-3"
                    >
                      Visit website <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <Link
                      href="/contact"
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#7B5CFF] transition-all hover:text-[#8E73FF] group-hover:gap-3"
                    >
                      Request a live demo <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Have a project in mind?
          </h2>
          <p className="text-lg text-[#8E8CA3] max-w-xl mx-auto mb-10">
            Tell us what you need and we&apos;ll send a fixed-price quote and timeline for your website
            or web app.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#7B5CFF] px-10 py-5 text-lg font-semibold text-white transition-all hover:bg-[#8E73FF] active:scale-95"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-[#232330] px-10 py-5 text-lg font-semibold transition-all hover:border-[#38E1C6] hover:text-[#38E1C6]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsGrid;