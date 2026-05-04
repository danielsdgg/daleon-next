"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/assets/logo.png"
              alt="Daleon Dynamics"
              width={40}
              height={40}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div>
              <span className="text-xl font-semibold tracking-tight text-gray-900">
                Daleon
                <span className="text-blue-600 ml-1">Dynamics</span>
              </span>
              <p className="text-[10px] text-gray-500 -mt-1 tracking-widest">NAIROBI • KENYA</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "relative text-sm font-medium transition-all duration-200",
                  isActive(link.path)
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                {link.name}
                {/* Active underline */}
                <span
                  className={cn(
                    "absolute left-0 -bottom-1.5 h-[2.5px] bg-blue-600 rounded-full transition-all duration-300",
                    isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-2xl text-sm font-semibold transition-all active:scale-[0.97] shadow-lg shadow-blue-200"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden bg-white border-t border-gray-100 transition-all duration-300",
          isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 py-8 flex flex-col gap-6 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "font-medium transition-colors py-1",
                isActive(link.path)
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              )}
            >
              {link.name}
            </Link>
          ))}

          {/* Strong Mobile CTA */}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold text-base active:scale-[0.98] transition-all"
          >
            Get Your Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>

          <a
            href="https://wa.me/254142021359"
            target="_blank"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-3 border border-gray-300 hover:border-gray-400 text-gray-700 py-4 rounded-2xl font-medium transition-all"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;