"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown, Monitor, Code2, ShieldCheck } from "lucide-react";
import { cn } from "@/src/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        {
          name: "High-Converting Websites",
          path: "/services/high-converting-website",
          icon: Monitor,
        },
        {
          name: "Custom Web Apps",
          path: "/services/custom-web-apps",
          icon: Code2,
        },
        {
          name: "Access Control Systems",
          path: "/services/access-control-systems",
          icon: ShieldCheck,
        },
      ],
    },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-[#0A0A0F]/95 backdrop-blur-2xl border-b border-[#232330] transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/assets/logo.png"
                alt="Daleon Dynamics Logo"
                width={48}
                height={48}
                className="object-contain transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
                priority
              />
            </div>
            <div className="-space-y-1">
              <span className="text-2xl font-bold tracking-tighter text-[#F2F1F7]">
                Daleon<span className="text-[#7B5CFF]">Dynamics</span>
              </span>
              <p className="text-[10px] font-mono tracking-[3px] text-[#8E8CA3]">NAIROBI • KENYA</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.path}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1.5 text-sm font-semibold tracking-tight py-1.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B5CFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F] rounded",
                      isActive(link.path) ? "text-[#F2F1F7]" : "text-[#8E8CA3] hover:text-[#F2F1F7]"
                    )}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" />
                  </button>

                  {/* Desktop Dropdown */}
                  <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-3 group-hover:translate-y-0">
                    <div className="bg-[#131319] rounded-2xl shadow-2xl shadow-black/40 border border-[#232330] w-72 py-2 overflow-hidden">
                      {link.dropdown.map((sub) => {
                        const Icon = sub.icon;
                        return (
                          <Link
                            key={sub.path}
                            href={sub.path}
                            className="flex items-center gap-4 px-6 py-4 hover:bg-[#1A1A22] transition-all group/item"
                          >
                            <div className="w-9 h-9 rounded-xl bg-[#7B5CFF]/10 flex items-center justify-center text-[#7B5CFF] group-hover/item:bg-[#7B5CFF]/20 transition-colors">
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="font-semibold text-[#F2F1F7] group-hover/item:text-[#38E1C6] transition-colors">
                              {sub.name}
                            </span>
                          </Link>
                        );
                      })}

                      <div className="border-t border-[#232330] mt-2 pt-2 px-6 py-4">
                        <Link
                          href="/services"
                          className="flex items-center justify-center gap-2 text-sm font-semibold text-[#38E1C6] hover:text-[#5EEBD4] transition-colors"
                        >
                          Explore All Services
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    "relative text-sm font-semibold tracking-tight py-1.5 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B5CFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F] rounded",
                    isActive(link.path) ? "text-[#F2F1F7]" : "text-[#8E8CA3] hover:text-[#F2F1F7]"
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute left-0 -bottom-1 h-0.5 bg-[#7B5CFF] rounded-full transition-all duration-300",
                      isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-[#7B5CFF] hover:bg-[#8E73FF] active:scale-[0.97] text-white px-8 py-3.5 rounded-xl text-sm font-semibold tracking-tight shadow-lg shadow-[#7B5CFF]/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38E1C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F]"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 text-[#8E8CA3] hover:text-[#F2F1F7] transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B5CFF] rounded-lg"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={cn(
          "md:hidden bg-[#0A0A0F] border-t border-[#232330] transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-[750px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 py-10 flex flex-col gap-8 text-[17px] font-medium">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.path} className="space-y-5">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-[#F2F1F7] py-2"
                  aria-expanded={servicesOpen}
                >
                  {link.name}
                  <ChevronDown className={cn("w-5 h-5 transition-transform", servicesOpen && "rotate-180")} />
                </button>

                {servicesOpen && (
                  <div className="ml-6 space-y-6 border-l border-[#232330] pl-6">
                    {link.dropdown.map((sub) => {
                      const Icon = sub.icon;
                      return (
                        <Link
                          key={sub.path}
                          href={sub.path}
                          onClick={() => {
                            setIsOpen(false);
                            setServicesOpen(false);
                          }}
                          className="flex items-center gap-3 text-[#8E8CA3] hover:text-[#38E1C6] active:text-[#5EEBD4]"
                        >
                          <Icon className="w-5 h-5" />
                          {sub.name}
                        </Link>
                      );
                    })}

                    <Link
                      href="/services"
                      onClick={() => {
                        setIsOpen(false);
                        setServicesOpen(false);
                      }}
                      className="flex items-center gap-3 text-[#7B5CFF] hover:text-[#8E73FF] font-semibold pt-4 border-t border-[#232330]"
                    >
                      Explore All Services
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "py-2 block transition-colors",
                  isActive(link.path) ? "text-[#7B5CFF]" : "text-[#F2F1F7] hover:text-[#7B5CFF]"
                )}
              >
                {link.name}
              </Link>
            )
          )}

          {/* Mobile CTA */}
          <div className="pt-8 border-t border-[#232330]">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#7B5CFF] text-white py-4 rounded-xl font-semibold text-base active:scale-[0.97] shadow-lg shadow-[#7B5CFF]/30 transition-all"
            >
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;