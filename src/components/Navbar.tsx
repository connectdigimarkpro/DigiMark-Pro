"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";
<<<<<<< HEAD
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Work", href: "/#work" },
=======

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
>>>>>>> ad4664a9251c0a2b414fbe46b7d81e5cfaa740b8
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
<<<<<<< HEAD
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAF8F4]/80 backdrop-blur-xl border-b border-black/[0.03] py-2 sm:py-3 shadow-[0_2px_30px_-15px_rgba(17,17,17,0.03)]"
            : "bg-[#FAF8F4]/10 backdrop-blur-[2px] py-4 sm:py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          <Link href="/#home" className="flex items-center -ml-1 sm:-ml-2 group transition-transform duration-300 hover:scale-[1.01]">
            <Logo heightClassName="h-[50px] sm:h-[60px] md:h-[72px]" />
=======
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
>>>>>>> ad4664a9251c0a2b414fbe46b7d81e5cfaa740b8
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
<<<<<<< HEAD
                className="font-sans text-xs font-bold uppercase tracking-wider text-[#6B7280] hover:text-[#111111] transition-colors relative py-1.5 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A66B] transition-all duration-300 group-hover:w-full" />
=======
                className="font-sans text-sm font-medium text-[#6B7280] hover:text-[#111111] transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
>>>>>>> ad4664a9251c0a2b414fbe46b7d81e5cfaa740b8
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/#contact"
<<<<<<< HEAD
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#111111] text-[#FAF8F4] text-xs font-bold uppercase tracking-wider hover:bg-[#C9A66B] hover:text-[#111111] transition-all duration-300 shadow-sm border border-transparent hover:border-black/5 group"
            >
              Book Free Consultation &rarr;
=======
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#111111] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[var(--color-accent)] hover:text-[#111111] transition-all duration-300 shadow-sm border border-transparent hover:border-[#111111]/10 group"
            >
              Book Consultation
              <ArrowUpRight className="ml-1 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
>>>>>>> ad4664a9251c0a2b414fbe46b7d81e5cfaa740b8
            </Link>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#111111] p-2 -mr-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
<<<<<<< HEAD
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-[72px] sm:top-[84px] z-30 bg-[#FAF8F4]/95 backdrop-blur-lg border-t border-black/[0.04] px-6 py-8 md:hidden flex flex-col justify-between"
          >
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.label}
                >
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="font-sans text-xl font-bold uppercase tracking-wide text-[#111111] hover:text-[#C9A66B] transition-colors block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-auto"
            >
              <Link
                href="/#contact"
                onClick={handleLinkClick}
                className="w-full inline-flex items-center justify-center py-4 rounded-xl bg-[#111111] text-[#FAF8F4] font-bold text-xs uppercase tracking-wider hover:bg-[#C9A66B] hover:text-[#111111] transition-all duration-300"
              >
                Book Free Consultation
                <ArrowUpRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
=======
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
>>>>>>> ad4664a9251c0a2b414fbe46b7d81e5cfaa740b8
    </>
  );
}
