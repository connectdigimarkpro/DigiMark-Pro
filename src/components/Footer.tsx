import Link from "next/link";
import { ArrowUpRight, Mail, MessageSquare } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFFFFF] border-t border-black/[0.04] py-16 px-6 md:px-12 relative overflow-hidden">
      {/* Subtle bottom-grid aesthetic */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-6">
          <Link href="/#home" className="inline-block transition-transform duration-300 hover:scale-[1.02]">
            <Logo heightClassName="h-20 md:h-24" />
          </Link>
          <p className="text-sm text-[#6B7280] max-w-sm leading-relaxed">
            Where Growth Meets Innovation. We help premium brands scale through strategic branding, custom web development, and growth-focused marketing.
          </p>
          {/* Social Icons */}
          <div className="flex items-center space-x-4 pt-2">
            <a
              href="https://www.linkedin.com/company/digimark-pro25/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#0077B5] text-[#FFFFFF] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_4px_12px_rgba(0,119,181,0.15)] hover:shadow-[0_6px_16px_rgba(0,119,181,0.3)]"
              aria-label="LinkedIn"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/digimark.pro_/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-[#FFFFFF] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_4px_12px_rgba(221,42,123,0.15)] hover:shadow-[0_6px_16px_rgba(221,42,123,0.3)]"
              aria-label="Instagram"
            >
              <svg className="w-4.5 h-4.5 fill-none stroke-current" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a
              href="mailto:connect.digimarkpro@gmail.com"
              className="w-10 h-10 rounded-full bg-[#EA4335] text-[#FFFFFF] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_4px_12px_rgba(234,67,53,0.15)] hover:shadow-[0_6px_16px_rgba(234,67,53,0.3)]"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://wa.me/919646900628"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#25D366] text-[#FFFFFF] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_4px_12px_rgba(37,211,102,0.15)] hover:shadow-[0_6px_16px_rgba(37,211,102,0.3)]"
              aria-label="WhatsApp"
            >
              <MessageSquare size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#111111] mb-6">
            Quick Links
          </h3>
          <ul className="space-y-4">
            <li>
              <Link href="/#home" className="text-sm text-[#6B7280] hover:text-[#111111] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#work" className="text-sm text-[#6B7280] hover:text-[#111111] transition-colors">
                Work Portfolio
              </Link>
            </li>
            <li>
              <Link href="/#services" className="text-sm text-[#6B7280] hover:text-[#111111] transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#process" className="text-sm text-[#6B7280] hover:text-[#111111] transition-colors">
                Our Process
              </Link>
            </li>
            <li>
              <Link href="/#about" className="text-sm text-[#6B7280] hover:text-[#111111] transition-colors">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services & Agency Info */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#111111] mb-6">
            Services
          </h3>
          <ul className="space-y-4">
            <li className="text-sm text-[#6B7280]">Branding & Identity</li>
            <li className="text-sm text-[#6B7280]">Website Development</li>
            <li className="text-sm text-[#6B7280]">Digital Marketing</li>
            <li className="text-sm text-[#6B7280]">Growth Solutions</li>
            <li>
              <Link
                href="/#contact"
                className="text-sm text-[var(--color-accent)] hover:text-[#111111] transition-colors inline-flex items-center"
              >
                Book Consultation
                <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto border-t border-black/[0.04] mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#6B7280]">
        <p>© {currentYear} DigiMark Pro. All rights reserved.</p>
        <p className="mt-4 md:mt-0 flex items-center font-medium tracking-tight">
          Made with precision by&nbsp;
          <span className="text-[#111111] font-semibold">DigiMark Pro</span>
        </p>
      </div>
    </footer>
  );
}
