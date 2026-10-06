// src/components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/254142021359";
const EMAIL = "daleondynamics@gmail.com";
const PHONE_DISPLAY = "+254 142 021 359";
const PHONE_HREF = "tel:+254142021359";

const serviceLinks = [
  { name: "High-Converting Websites", path: "/services/high-converting-website" },
  { name: "Custom Web Apps & Systems", path: "/services/custom-web-apps" },
  { name: "All Services", path: "/services" },
];

const companyLinks = [
  { name: "About Us", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blogs", path: "/blogs" },
  // { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/daleondynamics", Icon: FacebookIcon },
  { name: "X (Twitter)", href: "https://x.com/daleondynamics", Icon: XLogo },
  { name: "LinkedIn", href: "https://linkedin.com/company/daleon-dynamics", Icon: LinkedinIcon },
  { name: "Instagram", href: "https://instagram.com/daleondynamics", Icon: InstagramIcon },
];

const linkClass = "text-[#8E8CA3] transition-colors hover:text-[#38E1C6]";
const headingClass =
  "mb-5 font-mono text-xs uppercase tracking-[2px] text-[#F2F1F7]";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0A0A0F] text-[#8E8CA3]">
      {/* Top glow line */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7B5CFF]/40 to-transparent"
      />

      {/* CTA band */}
      <div className="border-b border-[#232330]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#F2F1F7] md:text-3xl">
              Need a website or web app for your business?
            </h2>
            <p className="mt-2 text-[#8E8CA3]">
              Websites from KES 55,000 · Custom web apps from KES 200,000
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#7B5CFF] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#7B5CFF]/20 transition-all hover:bg-[#8E73FF] active:scale-[0.97]"
            >
              Get Free Quote
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#232330] px-7 py-3.5 text-sm font-semibold text-[#F2F1F7] transition-colors hover:border-[#38E1C6] hover:text-[#38E1C6]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main columns */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="Daleon Dynamics home"
              className="inline-flex items-center gap-3"
            >
              {/* White badge keeps the logo's white background looking intentional */}
              <span className="rounded-lg bg-white p-1.5">
                <Image
                  src="/assets/logo.png"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              </span>
              <span className="text-lg font-semibold tracking-tight text-[#F2F1F7]">
                Daleon <span className="text-[#7B5CFF]">Dynamics</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              A Nairobi web design and custom software company building
              high-converting websites, web apps, and business systems for
              businesses across Kenya.
            </p>

            <ul className="mt-6 flex items-center gap-4" aria-label="Social media">
              {socialLinks.map(({ name, href, Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Daleon Dynamics on ${name}`}
                    className="block rounded transition-transform duration-300 hover:scale-110"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h2 className={headingClass}>Services</h2>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((l) => (
                <li key={l.path}>
                  <Link href={l.path} className={linkClass}>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h2 className={headingClass}>Company</h2>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((l) => (
                <li key={l.path}>
                  <Link href={l.path} className={linkClass}>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className={headingClass}>Contact</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#38E1C6]"
                  aria-hidden="true"
                />
                <span>Nairobi, Kenya. Serving clients nationwide and remotely.</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#38E1C6]"
                  aria-hidden="true"
                />
                <a href={PHONE_HREF} className={linkClass}>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#38E1C6]"
                  aria-hidden="true"
                />
                <a href={`mailto:${EMAIL}`} className={`${linkClass} break-all`}>
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#38E1C6]"
                  aria-hidden="true"
                />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Message us on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#232330]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-[#8E8CA3] md:flex-row">
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#38E1C6] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#38E1C6]" />
            </span>
            <span>Nairobi, Kenya · accepting new projects</span>
          </div>

          <p>© {currentYear} Daleon Dynamics. All rights reserved.</p>

          <nav aria-label="Legal" className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-[#F2F1F7]">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-[#F2F1F7]">
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

/* ==================== SOCIAL ICONS (official brand colours) ==================== */
function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function XLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 1200 1227" fill="none" aria-hidden="true">
      <path
        d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
        fill="#ffffff"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <path d="M8 11v6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 11v6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 11v6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <circle cx="8" cy="7" r="1.2" fill="#ffffff" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="igGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f58529" />
          <stop offset="33%" stopColor="#dd2a7b" />
          <stop offset="66%" stopColor="#8134af" />
          <stop offset="100%" stopColor="#515bd4" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#igGradient)" strokeWidth="2" />
      <circle cx="12" cy="12" r="5" stroke="url(#igGradient)" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="url(#igGradient)" />
    </svg>
  );
}

export default Footer;