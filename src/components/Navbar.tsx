"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF8F5]/80 backdrop-blur-md border-b border-black/[0.04] py-3 sm:py-4 shadow-[0_2px_20px_-10px_rgba(17,17,17,0.05)]"
            : "bg-transparent py-4 sm:py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-12 flex items-center justify-between">
          <Link href="/#home" className="flex items-center -ml-1 sm:-ml-2 md:-ml-6 lg:-ml-8 group transition-transform duration-300 hover:scale-[1.02]">
            <Logo heightClassName="h-[60px] sm:h-[72px] md:h-[88px]" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans text-sm font-medium text-[#6B7280] hover:text-[#111111] transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#111111] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[var(--color-accent)] hover:text-[#111111] transition-all duration-300 shadow-sm border border-transparent hover:border-[#111111]/10 group"
            >
              Book Consultation
              <ArrowUpRight className="ml-1 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#111111] p-2 -mr-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 top-[72px] sm:top-[84px] z-30 bg-[#FAF8F5] border-t border-black/[0.04] px-4 sm:px-6 py-8 md:hidden flex flex-col justify-between transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-5">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                onClick={handleLinkClick}
                className="font-sans text-xl sm:text-2xl font-bold text-[#111111] hover:text-[var(--color-accent)] transition-colors block"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="mt-auto">
          <Link
            href="/#contact"
            onClick={handleLinkClick}
            className="w-full inline-flex items-center justify-center py-4 rounded-xl bg-[#111111] text-[#FAF8F5] font-semibold text-sm uppercase tracking-wider hover:bg-[var(--color-accent)] hover:text-[#111111] transition-all duration-300"
          >
            Book Consultation
            <ArrowUpRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
