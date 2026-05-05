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
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-2xl border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo + Brand */}
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
              <div className="absolute inset-0 bg-blue-600/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
            </div>
            <div className="-space-y-1">
              <span className="text-2xl font-bold tracking-tighter text-gray-900">
                Daleon
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Dynamics</span>
              </span>
              <p className="text-[10px] font-mono tracking-[3px] text-gray-500">NAIROBI • KENYA</p>
            </div>
          </Link>

          {/* Desktop Nav */}
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
                      "flex items-center gap-1.5 text-sm font-semibold tracking-tight transition-all duration-200 py-1.5",
                      isActive(link.path)
                        ? "text-gray-900"
                        : "text-gray-600 hover:text-gray-900"
                    )}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" />
                  </button>

                  {/* Icon Dropdown */}
                  <div className={cn(
                    "absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-3 group-hover:translate-y-0"
                  )}>
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 w-72 py-2 overflow-hidden">
                      {link.dropdown.map((sub) => {
                        const Icon = sub.icon;
                        return (
                          <Link
                            key={sub.path}
                            href={sub.path}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-all duration-200 group/item"
                          >
                            <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover/item:bg-blue-100 transition-colors">
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="font-semibold text-gray-900 group-hover/item:text-blue-600 transition-colors">
                              {sub.name}
                            </span>
                          </Link>
                        );
                      })}

                      <div className="border-t border-gray-100 mt-2 pt-2 px-6 py-4">
                        <Link 
                          href="/services" 
                          className="flex items-center justify-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                          onClick={() => setServicesOpen(false)}
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
                    "relative text-sm font-semibold tracking-tight py-1.5 transition-all duration-200 group",
                    isActive(link.path)
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-300",
                    isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group relative flex items-center gap-3 overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:brightness-110 text-white px-8 py-3.5 rounded-2xl text-sm font-semibold tracking-tight transition-all duration-300 active:scale-[0.97] shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:-translate-x-[200%] transition-transform duration-700" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 text-gray-700 hover:text-gray-900 transition-all active:scale-95"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Kept simple with icons too */}
      <div
        className={cn(
          "md:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 py-10 flex flex-col gap-8 text-[17px]">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.path} className="space-y-4">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full font-semibold text-gray-800"
                >
                  {link.name}
                  <ChevronDown className={cn("w-5 h-5 transition-transform", servicesOpen && "rotate-180")} />
                </button>
                
                {servicesOpen && (
                  <div className="ml-6 space-y-5">
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
                          className="flex items-center gap-3 text-gray-600 hover:text-blue-600 font-medium"
                        >
                          <Icon className="w-5 h-5" />
                          {sub.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "font-semibold py-1 block",
                  isActive(link.path) ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                )}
              >
                {link.name}
              </Link>
            )
          )}

          <div className="pt-6 border-t border-gray-100">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-semibold text-base active:scale-[0.97] shadow-lg transition-all"
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