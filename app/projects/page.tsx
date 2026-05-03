import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Real Results, Real Impact | Daleon Dynamics',
  description: 'Explore our portfolio of high-impact projects, from insurance platforms to learning management systems and secure access solutions. See how we deliver real results for Kenyan businesses.',
  
  keywords: [
    'web development projects kenya',
    'custom software development nairobi',
    'website design kenya',
    'high converting websites kenya',
    'custom web applications kenya',
    'access control systems kenya',
    'biometric access control nairobi',
    'business automation software kenya',
    'software development company kenya',
    'm-pesa integration kenya',
    'daleon dynamics services'
  ],

  alternates: {
    canonical: 'https://daleondynamics.com/projects',
  },

  openGraph: {
    title: 'Projects - Real Results, Real Impact | Daleon Dynamics',
    description: 'Explore our portfolio of high-impact projects, from insurance platforms to learning management systems and secure access solutions. See how we deliver real results for Kenyan businesses.',
    url: 'https://daleondynamics.com/projects',
    images: [
      {
        url: 'https://daleondynamics.com/_next/image?url=%2Fassets%2Flogo.png&w=48&q=75', 
        width: 1200,
        height: 630,
        alt: 'Daleon Dynamics Projects - Web Development Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
};

const Projects = () => {
  const projects = [
    {
      title: "An Insurance Platform",
      category: "Insurance Kenya Portal",
      year: "2025",
      description: "A modern, secure, and user-friendly insurance platform with seamless policy management, claims processing, and customer portal.",
      liveUrl: "https://insurancekenya.vercel.app",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
    },
    {
      title: "Morgan-LMS",
      category: "Learning Management System",
      year: "2024",
      description: "Powerful learning management system with course creation, student progress tracking, and interactive content delivery for educational institutions.",
      liveUrl: "https://canvas-1-jxo5.onrender.com/",
      image: "https://res.cloudinary.com/ddei3mzex/image/upload/v1775549982/1A9A6803_pp58u4.jpg"
    },
    {
      title: "SecureGate Access Control",
      category: "Security System",
      year: "2025",
      description: "Advanced cloud-based access control system with biometric integration, real-time monitoring, and centralized management.",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
    },
    {
      title: "Ecommerce Store",
      category: "Fashions Ecommerce",
      year: "2024",
      description: "A sleek, high-performance fashions ecommerce platform with intuitive product browsing, secure checkout, and seamless payment integration.",
      liveUrl: "https://herocloth.vercel.app",
      image: "https://res.cloudinary.com/ddei3mzex/image/upload/v1729598578/videoediting2_itg2qh.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - More Impactful */}
      <section className="relative py-32 lg:py-44 overflow-hidden bg-zinc-950">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=2000')",
            filter: "blur(6px) brightness(0.55)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-7 py-3 rounded-full text-sm font-medium mb-6 border border-white/20">
            OUR SELECTED WORK
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-[82px] font-bold tracking-tighter text-white leading-none mb-8">
            Projects That<br /> 
            <span className="text-blue-400">Speak for Themselves</span>
          </h1>
          
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From insurance platforms to learning systems and secure access solutions — 
            every project showcases our dedication to building high-quality, impactful digital products.
          </p>
        </div>
      </section>

      {/* Projects Grid - Premium Layout */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-[380px] overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-6 right-6 bg-black/70 text-white text-xs font-medium px-4 py-1.5 rounded-full backdrop-blur-md">
                    {project.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-10">
                  <div className="uppercase text-blue-600 text-sm font-semibold tracking-widest mb-3">
                    {project.category}
                  </div>
                  
                  <h3 className="text-3xl font-semibold tracking-tight text-gray-900 mb-5">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-[15.5px] mb-10 line-clamp-4">
                    {project.description}
                  </p>

                  {project.liveUrl !== "#" ? (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-4 transition-all"
                    >
                      View Live Project 
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-3 text-gray-400 font-medium">
                      Coming Soon
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing / CTA Section - More Convincing */}
      <section className="py-28 bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
            Ready to See Your Vision<br />Come to Life?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Let’s build something exceptional together. Whether you need a website, 
            a full web application, or a complex custom system — we’re ready.
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

export default Projects;