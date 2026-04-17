"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 pt-20 pb-12 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-12 gap-y-16">

          {/* Brand Section */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              {/* Logo with white background for visibility on dark footer */}
              <div className="bg-white p-3 rounded-2xl">
                <Image
                  src="/assets/logo11.png"
                  alt="Daleon Dynamics"
                  width={52}
                  height={52}
                  className="w-11 h-11 object-contain"
                  priority
                />
              </div>

              <div>
                <span className="font-bold text-4xl tracking-tighter text-white">Daleon</span>
                <span className="font-semibold text-4xl tracking-tighter text-blue-500 block -mt-2">Dynamics</span>
              </div>
            </div>

            <p className="text-gray-400 max-w-xs text-[17px] leading-relaxed">
              We craft exceptional digital experiences through custom software, 
              websites, and innovative solutions that drive business growth.
            </p>

            {/* Social Media */}
            <div className="mt-12">
              <p className="uppercase text-xs tracking-widest text-gray-500 mb-5">Follow us on</p>
              <div className="flex items-center gap-6">
                <a href="https://facebook.com/daleon-dynamics" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
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
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4 text-[15.5px]">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Our Projects</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><Link href="/blogs" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-4 text-[15.5px]">
              <li><Link href="/services" className="hover:text-white transition-colors">Custom Software</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Websites & Web Apps</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Mobile Applications</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Access Control Systems</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-lg mb-6">Get In Touch</h3>
            
            <div className="space-y-8">
              <div className="flex gap-5">
                <Mail className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:info@daleondynamics.com" className="text-gray-400 hover:text-white transition-colors">
                    info@daleondynamics.com
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <Phone className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a href="tel:+254707319080" className="text-gray-400 hover:text-white transition-colors">
                    +254 707 319 080
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <MapPin className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Office</p>
                  <p className="text-gray-400">Kikuyu Town, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p className="text-gray-500">
            © {currentYear} Daleon Dynamics. All rights reserved.
          </p>
          
          <div className="flex items-center gap-8 text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>

          <p className="text-gray-500 text-center md:text-right">
            Built with passion for innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

/* ==================== SOCIAL ICONS (unchanged) ==================== */
const FacebookIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const XLogo = () => (
  <svg width="28" height="28" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="#ffffff"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="#0A66C2">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <path d="M8 11v6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 11v6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 11v6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="8" cy="7" r="1.2" fill="#ffffff"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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