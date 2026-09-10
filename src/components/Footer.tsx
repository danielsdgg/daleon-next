"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatusPill from '@/src/components/ui/StatusPill';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-canvas text-ink-muted relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top row: brand, links, socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="bg-white p-1.5 rounded-lg">
              <Image
                src="/assets/logo.png"
                alt="Daleon Dynamics"
                width={28}
                height={28}
                className="w-6 h-6 object-contain"
              />
            </div>
            <span className="font-semibold text-lg tracking-tight text-ink">
              Daleon<span className="text-primary">Dynamics</span>
            </span>
          </Link>

          {/* Essential links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-ink-muted hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-5 flex-shrink-0">
            <a href="https://www.facebook.com/daleondynamics" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <FacebookIcon />
            </a>
            <a href="https://x.com/daleondynamics" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <XLogo />
            </a>
            <a href="https://linkedin.com/company/daleon-dynamics" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <LinkedinIcon />
            </a>
            <a href="https://instagram.com/daleondynamics" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Bottom row: status, copyright, legal */}
        <div className="mt-8 pt-6 border-t border-line flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-dim">
          <StatusPill label="Nairobi, Kenya · accepting new projects" tone="live" />

          <p>© {currentYear} Daleon Dynamics. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-ink-muted transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-ink-muted transition-colors">Terms</Link>
            <a href="mailto:daleondynamics@gmail.com" className="hover:text-ink-muted transition-colors">
              daleondynamics@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ==================== SOCIAL ICONS (unchanged — official brand colors) ==================== */
const FacebookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const XLogo = () => (
  <svg width="22" height="22" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="#ffffff"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#0A66C2">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <path d="M8 11v6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 11v6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 11v6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="8" cy="7" r="1.2" fill="#ffffff"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="igGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f58529"/>
        <stop offset="33%" stopColor="#dd2a7b"/>
        <stop offset="66%" stopColor="#8134af"/>
        <stop offset="100%" stopColor="#515bd4"/>
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#igGradient)" strokeWidth="2"/>
    <circle cx="12" cy="12" r="5" stroke="url(#igGradient)" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1.5" fill="url(#igGradient)"/>
  </svg>
);

export default Footer;