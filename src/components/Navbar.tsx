"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Monitor,
  Code2,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/src/lib/utils";

const WHATSAPP_URL = "https://wa.me/254142021359";

type NavItem = {
  name: string;
  path: string;
  dropdown?: { name: string; path: string; desc: string; icon: LucideIcon }[];
};

const navLinks: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Services",
    path: "/services",
    dropdown: [
      {
        name: "High-Converting Websites",
        path: "/services/high-converting-website",
        desc: "From KES 55,000",
        icon: Monitor,
      },
      {
        name: "Custom Web Apps",
        path: "/services/custom-web-apps",
        desc: "From KES 200,000",
        icon: Code2,
      },
    ],
  },
  { name: "Projects", path: "/projects" },
  { name: "Blogs", path: "/blogs" },
  // { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) =>
    path === "/"
      ? pathname === "/"
      : pathname === path || pathname.startsWith(`${path}/`);

  const closeMenu = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  // Compact, shadowed header once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu: close on Escape and lock page scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setMobileServicesOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const desktopLink =
    "relative inline-flex items-center gap-1.5 rounded py-1.5 text-sm font-semibold tracking-tight transition-colors";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300",
        scrolled
          ? "border-[#232330] bg-[#0A0A0F]/90 shadow-lg shadow-black/30"
          : "border-transparent bg-[#0A0A0F]/70"
      )}
    >
      {/* Skip link for keyboard and screen-reader users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-[#7B5CFF] focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <nav aria-label="Main" className="mx-auto max-w-7xl px-6">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            scrolled ? "h-16" : "h-20"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Daleon Dynamics home"
            className="group flex items-center gap-3 rounded"
          >
            <Image
              src="/assets/logo.png"
              alt=""
              width={44}
              height={44}
              priority
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tight text-[#F2F1F7]">
                Daleon <span className="text-[#7B5CFF]">Dynamics</span>
              </span>
              <span className="mt-1 hidden font-mono text-[10px] tracking-[3px] text-[#8E8CA3] sm:block">
                NAIROBI • KENYA
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              const colour = active
                ? "text-[#F2F1F7]"
                : "text-[#8E8CA3] hover:text-[#F2F1F7]";

              if (link.dropdown) {
                return (
                  <div key={link.path} className="group relative">
                    <Link
                      href={link.path}
                      aria-current={active ? "page" : undefined}
                      className={cn(desktopLink, colour)}
                    >
                      {link.name}
                      <ChevronDown
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                      />
                      <span
                        className={cn(
                          "absolute -bottom-1 left-0 h-0.5 rounded-full bg-[#7B5CFF] transition-all duration-300",
                          active ? "w-full" : "w-0 group-hover:w-full"
                        )}
                      />
                    </Link>

                    {/* Dropdown: opens on hover and on keyboard focus */}
                    <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="overflow-hidden rounded-2xl border border-[#232330] bg-[#131319] p-2 shadow-2xl shadow-black/50">
                        {link.dropdown.map((sub) => {
                          const Icon = sub.icon;
                          return (
                            <Link
                              key={sub.path}
                              href={sub.path}
                              className="group/item flex items-center gap-4 rounded-xl px-4 py-3 transition-colors hover:bg-[#1A1A22]"
                            >
                              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#7B5CFF]/10 text-[#7B5CFF] transition-colors group-hover/item:bg-[#7B5CFF]/20">
                                <Icon className="h-5 w-5" aria-hidden="true" />
                              </span>
                              <span className="flex flex-col">
                                <span className="font-semibold text-[#F2F1F7] transition-colors group-hover/item:text-[#38E1C6]">
                                  {sub.name}
                                </span>
                                <span className="text-xs text-[#8E8CA3]">
                                  {sub.desc}
                                </span>
                              </span>
                            </Link>
                          );
                        })}

                        <Link
                          href="/services"
                          className="mt-1 flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-[#38E1C6] transition-colors hover:bg-[#1A1A22]"
                        >
                          View all services
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  aria-current={active ? "page" : undefined}
                  className={cn("group", desktopLink, colour)}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 rounded-full bg-[#7B5CFF] transition-all duration-300",
                      active ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#232330] text-[#8E8CA3] transition-colors hover:border-[#38E1C6] hover:text-[#38E1C6]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#7B5CFF] px-6 py-3 text-sm font-semibold tracking-tight text-white shadow-lg shadow-[#7B5CFF]/20 transition-all hover:bg-[#8E73FF] active:scale-[0.97]"
            >
              Get Free Quote
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="rounded-lg p-3 text-[#8E8CA3] transition-all hover:text-[#F2F1F7] active:scale-95 md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        inert={!isOpen}
        className={cn(
          "overflow-y-auto bg-[#0A0A0F] transition-all duration-300 md:hidden",
          isOpen
            ? "max-h-[calc(100dvh-4rem)] border-t border-[#232330] opacity-100"
            : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-6">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            const rowClass = cn(
              "block rounded-lg px-3 py-3 text-lg font-medium transition-colors",
              active
                ? "bg-[#131319] text-[#F2F1F7]"
                : "text-[#C9C8D6] hover:bg-[#131319] hover:text-[#F2F1F7]"
            );

            if (link.dropdown) {
              return (
                <div key={link.path}>
                  <div className="flex items-center">
                    <Link
                      href={link.path}
                      onClick={closeMenu}
                      aria-current={active ? "page" : undefined}
                      className={cn(rowClass, "flex-1")}
                    >
                      {link.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      aria-expanded={mobileServicesOpen}
                      aria-controls="mobile-services"
                      aria-label="Toggle services submenu"
                      className="rounded-lg p-3 text-[#8E8CA3] hover:text-[#F2F1F7]"
                    >
                      <ChevronDown
                        aria-hidden="true"
                        className={cn(
                          "h-5 w-5 transition-transform",
                          mobileServicesOpen && "rotate-180"
                        )}
                      />
                    </button>
                  </div>

                  {mobileServicesOpen && (
                    <div
                      id="mobile-services"
                      className="ml-4 mt-1 flex flex-col gap-1 border-l border-[#232330] pl-4"
                    >
                      {link.dropdown.map((sub) => {
                        const Icon = sub.icon;
                        return (
                          <Link
                            key={sub.path}
                            href={sub.path}
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-lg px-3 py-3 text-[#C9C8D6] hover:bg-[#131319] hover:text-[#38E1C6]"
                          >
                            <Icon className="h-5 w-5" aria-hidden="true" />
                            <span className="flex flex-col leading-tight">
                              <span className="font-medium">{sub.name}</span>
                              <span className="text-xs text-[#8E8CA3]">
                                {sub.desc}
                              </span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={closeMenu}
                aria-current={active ? "page" : undefined}
                className={rowClass}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="mt-4 flex flex-col gap-3 border-t border-[#232330] pt-6">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#7B5CFF] py-4 text-base font-semibold text-white shadow-lg shadow-[#7B5CFF]/30 transition-all active:scale-[0.98]"
            >
              Get Your Free Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-[#232330] py-4 text-base font-semibold text-[#F2F1F7] transition-colors hover:border-[#38E1C6] hover:text-[#38E1C6]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;