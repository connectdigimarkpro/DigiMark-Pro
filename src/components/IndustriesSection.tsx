"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Industry {
  title: string;
  desc: string;
  features: string[];
  svg: React.ReactNode;
}

export default function IndustriesSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    setIsMobile(media.matches);
    const listener = () => setIsMobile(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const industries: Industry[] = [
    {
      title: "Restaurants & Cafes",
      desc: "Local SEO, social media marketing, online reputation management.",
      features: ["Google Maps Optimization", "Instagram Feed Aesthetic", "Review Acceleration"],
      svg: (
        <svg viewBox="0 0 100 100" className="w-20 h-20 transition-transform duration-500 group-hover:scale-110">
          <defs>
            <linearGradient id="grad-restaurant" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C9A66B" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#111111" />
            </linearGradient>
          </defs>
          {/* Plate / Base */}
          <ellipse cx="50" cy="75" rx="35" ry="8" fill="none" stroke="url(#grad-restaurant)" strokeWidth="2.5" />
          <ellipse cx="50" cy="75" rx="28" ry="5" fill="none" stroke="#6B7280" strokeWidth="1.5" />
          {/* Cloche cover */}
          <path d="M22 65 C22 35, 78 35, 78 65 Z" fill="none" stroke="url(#grad-restaurant)" strokeWidth="3" />
          <circle cx="50" cy="31" r="5" fill="none" stroke="url(#grad-restaurant)" strokeWidth="2.5" />
          {/* Heart representing likes / social */}
          <path d="M50 48 C48 44, 42 44, 42 49 C42 55, 50 60, 50 60 C50 60, 58 55, 58 49 C58 44, 52 44, 50 48 Z" fill="#C9A66B" className="animate-pulse origin-center" style={{ transformOrigin: "50px 52px" }} />
          {/* Steam lines */}
          <path d="M45 20 Q48 15 45 10" fill="none" stroke="#C9A66B" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M55 20 Q58 15 55 10" fill="none" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Hotels & Resorts",
      desc: "Booking campaigns, branding, social media marketing.",
      features: ["Direct Booking Ads", "Virtual Tour Promos", "Luxury Brand Identity"],
      svg: (
        <svg viewBox="0 0 100 100" className="w-20 h-20 transition-transform duration-500 group-hover:scale-110">
          <defs>
            <linearGradient id="grad-hotel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C9A66B" />
              <stop offset="100%" stopColor="#333333" />
            </linearGradient>
          </defs>
          {/* Luxury Resort Facade */}
          <rect x="25" y="35" width="50" height="45" rx="3" fill="none" stroke="url(#grad-hotel)" strokeWidth="3" />
          <line x1="50" y1="35" x2="50" y2="80" stroke="url(#grad-hotel)" strokeWidth="1.5" strokeDasharray="3 3" />
          {/* Windows */}
          <rect x="33" y="45" width="8" height="6" rx="1" fill="none" stroke="#6B7280" strokeWidth="1.5" />
          <rect x="59" y="45" width="8" height="6" rx="1" fill="none" stroke="#6B7280" strokeWidth="1.5" />
          <rect x="33" y="60" width="8" height="6" rx="1" fill="none" stroke="#6B7280" strokeWidth="1.5" />
          <rect x="59" y="60" width="8" height="6" rx="1" fill="none" stroke="#6B7280" strokeWidth="1.5" />
          {/* Entrance */}
          <path d="M45 80 L45 70 C45 67, 55 67, 55 70 L55 80" fill="none" stroke="url(#grad-hotel)" strokeWidth="2" />
          {/* Stars */}
          <path d="M38 22 L40 25 L44 25 L41 27 L42 31 L38 29 L34 31 L35 27 L32 25 L36 25 Z" fill="#C9A66B" />
          <path d="M50 16 L52 19 L56 19 L53 21 L54 25 L50 23 L46 25 L47 21 L44 19 L48 19 Z" fill="#C9A66B" />
          <path d="M62 22 L64 25 L68 25 L65 27 L66 31 L62 29 L58 31 L59 27 L56 25 L60 25 Z" fill="#C9A66B" />
        </svg>
      )
    },
    {
      title: "Hospitals & Clinics",
      desc: "Patient acquisition, local SEO, online visibility.",
      features: ["HIPAA-Compliant Funnels", "Doctor Profile SEO", "Lead Gen for Treatments"],
      svg: (
        <svg viewBox="0 0 100 100" className="w-20 h-20 transition-transform duration-500 group-hover:scale-110">
          <defs>
            <linearGradient id="grad-hospital" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C9A66B" />
              <stop offset="100%" stopColor="#111111" />
            </linearGradient>
          </defs>
          {/* Shield Outline representing security & health */}
          <path d="M25 20 C45 20, 50 12, 50 12 C50 12, 55 20, 75 20 C75 50, 50 78, 50 78 C50 78, 25 50, 25 20 Z" fill="none" stroke="url(#grad-hospital)" strokeWidth="3" />
          {/* Medical Cross */}
          <path d="M44 32 H56 V44 H68 V56 H56 V68 H44 V56 H32 V44 H44 Z" fill="none" stroke="url(#grad-hospital)" strokeWidth="2.5" />
          {/* Heart Rate signal passing through cross */}
          <path d="M15 48 L22 48 L26 38 L30 58 L34 44 L38 48 L85 48" fill="none" stroke="#C9A66B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40" />
        </svg>
      )
    },
    {
      title: "Schools & Educational Institutes",
      desc: "Admission campaigns, branding, lead generation.",
      features: ["Student Enrollment Ads", "Campus Video Marketing", "Authority SEO Campaigns"],
      svg: (
        <svg viewBox="0 0 100 100" className="w-20 h-20 transition-transform duration-500 group-hover:scale-110">
          <defs>
            <linearGradient id="grad-school" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C9A66B" />
              <stop offset="100%" stopColor="#111111" />
            </linearGradient>
          </defs>
          {/* Graduation Cap */}
          <polygon points="50,15 88,32 50,49 12,32" fill="none" stroke="url(#grad-school)" strokeWidth="3" />
          <path d="M26 42 V65 C26 72, 50 78, 50 78 C50 78, 74 72, 74 65 V42" fill="none" stroke="url(#grad-school)" strokeWidth="2" />
          {/* Cap Tassel */}
          <path d="M88 32 V55 L84 62" fill="none" stroke="#C9A66B" strokeWidth="2.5" strokeLinecap="round" />
          {/* Open Book */}
          <path d="M28 64 C38 60, 50 64, 50 64 C50 64, 62 60, 72 64" fill="none" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="50" y1="52" x2="50" y2="74" stroke="#6B7280" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: "Corporate Businesses",
      desc: "Lead generation, SEO, website development.",
      features: ["B2B LinkedIn Campaigns", "Corporate UX Websites", "High-Intent SEO Keywords"],
      svg: (
        <svg viewBox="0 0 100 100" className="w-20 h-20 transition-transform duration-500 group-hover:scale-110">
          <defs>
            <linearGradient id="grad-corporate" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C9A66B" />
              <stop offset="100%" stopColor="#333333" />
            </linearGradient>
          </defs>
          {/* Corporate Towers */}
          <rect x="20" y="25" width="22" height="55" rx="2" fill="none" stroke="url(#grad-corporate)" strokeWidth="3" />
          <rect x="48" y="15" width="24" height="65" rx="2" fill="none" stroke="url(#grad-corporate)" strokeWidth="3" />
          {/* Window dots */}
          <line x1="28" y1="35" x2="34" y2="35" stroke="#6B7280" strokeWidth="2" />
          <line x1="28" y1="45" x2="34" y2="45" stroke="#6B7280" strokeWidth="2" />
          <line x1="28" y1="55" x2="34" y2="55" stroke="#6B7280" strokeWidth="2" />
          <line x1="56" y1="25" x2="64" y2="25" stroke="#C9A66B" strokeWidth="2" />
          <line x1="56" y1="35" x2="64" y2="35" stroke="#6B7280" strokeWidth="2" />
          <line x1="56" y1="45" x2="64" y2="45" stroke="#6B7280" strokeWidth="2" />
          <line x1="56" y1="55" x2="64" y2="55" stroke="#6B7280" strokeWidth="2" />
          <line x1="56" y1="65" x2="64" y2="65" stroke="#6B7280" strokeWidth="2" />
          {/* Line Chart showing growth overlay */}
          <path d="M12 70 L30 52 L54 62 L82 35" fill="none" stroke="#C9A66B" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="82" cy="35" r="4.5" fill="#C9A66B" />
        </svg>
      )
    },
    {
      title: "E-commerce Stores",
      desc: "Conversion optimization, product marketing, paid advertising.",
      features: ["Meta & Catalog Ads", "Cart Abandonment Recovery", "Shopify/Woo Platform CRO"],
      svg: (
        <svg viewBox="0 0 100 100" className="w-20 h-20 transition-transform duration-500 group-hover:scale-110">
          <defs>
            <linearGradient id="grad-ecommerce" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C9A66B" />
              <stop offset="100%" stopColor="#111111" />
            </linearGradient>
          </defs>
          {/* Shopping Cart */}
          <path d="M15 25 H25 L38 62 H78 L88 33 H30" fill="none" stroke="url(#grad-ecommerce)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="42" cy="74" r="7" fill="none" stroke="url(#grad-ecommerce)" strokeWidth="2.5" />
          <circle cx="72" cy="74" r="7" fill="none" stroke="url(#grad-ecommerce)" strokeWidth="2.5" />
          {/* Growth graph inside cart */}
          <path d="M42 50 L54 38 L68 44 L80 28" fill="none" stroke="#C9A66B" strokeWidth="2" strokeLinecap="round" />
          <polygon points="80,28 75,32 78,27" fill="#C9A66B" />
        </svg>
      )
    },
    {
      title: "Real Estate",
      desc: "Property lead generation and branding campaigns.",
      features: ["High-Quality Buyer Leads", "Local Builder Branding", "Google Display Target Ads"],
      svg: (
        <svg viewBox="0 0 100 100" className="w-20 h-20 transition-transform duration-500 group-hover:scale-110">
          <defs>
            <linearGradient id="grad-realestate" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C9A66B" />
              <stop offset="100%" stopColor="#333333" />
            </linearGradient>
          </defs>
          {/* Modern Building & House */}
          <path d="M15 80 V42 L45 22 L75 42 V80 Z" fill="none" stroke="url(#grad-realestate)" strokeWidth="3" strokeLinejoin="round" />
          {/* Roof Line */}
          <path d="M10 45 L45 18 L80 45" fill="none" stroke="url(#grad-realestate)" strokeWidth="3.5" strokeLinecap="round" />
          {/* Keyhole door */}
          <rect x="38" y="58" width="14" height="22" rx="1" fill="none" stroke="url(#grad-realestate)" strokeWidth="2" />
          {/* Window */}
          <rect x="28" y="38" width="10" height="10" rx="1" fill="none" stroke="#6B7280" strokeWidth="1.5" />
          <rect x="52" y="38" width="10" height="10" rx="1" fill="none" stroke="#6B7280" strokeWidth="1.5" />
          {/* Location Pin */}
          <path d="M72 16 C66 16, 62 20, 62 26 C62 34, 72 43, 72 43 C72 43, 82 34, 82 26 C82 20, 78 16, 72 16 Z" fill="none" stroke="#C9A66B" strokeWidth="2" />
          <circle cx="72" cy="25" r="3.5" fill="#C9A66B" />
        </svg>
      )
    },
    {
      title: "Automobile & Service Centers",
      desc: "Local marketing and customer acquisition.",
      features: ["Service Booking Funnels", "New Model Launch Hype", "Hyperlocal Meta Ads"],
      svg: (
        <svg viewBox="0 0 100 100" className="w-20 h-20 transition-transform duration-500 group-hover:scale-110">
          <defs>
            <linearGradient id="grad-auto" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C9A66B" />
              <stop offset="100%" stopColor="#111111" />
            </linearGradient>
          </defs>
          {/* Sports Car Outline */}
          <path d="M12 60 C12 60, 18 52, 28 50 C38 48, 45 38, 58 38 C70 38, 85 45, 88 56 C90 64, 82 66, 82 66 H12 Z" fill="none" stroke="url(#grad-auto)" strokeWidth="3" strokeLinejoin="round" />
          {/* Wheels */}
          <circle cx="28" cy="66" r="8.5" fill="none" stroke="url(#grad-auto)" strokeWidth="2.5" />
          <circle cx="70" cy="66" r="8.5" fill="none" stroke="url(#grad-auto)" strokeWidth="2.5" />
          {/* Wheel spokes */}
          <line x1="28" y1="57.5" x2="28" y2="74.5" stroke="#C9A66B" strokeWidth="1.5" />
          <line x1="19.5" y1="66" x2="36.5" y2="66" stroke="#C9A66B" strokeWidth="1.5" />
          <line x1="70" y1="57.5" x2="70" y2="74.5" stroke="#C9A66B" strokeWidth="1.5" />
          <line x1="61.5" y1="66" x2="78.5" y2="66" stroke="#C9A66B" strokeWidth="1.5" />
          {/* Speed wave/grow dashboard */}
          <path d="M50 22 C38 22, 32 30, 32 30" fill="none" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M50 22 C62 22, 68 30, 68 30" fill="none" stroke="#C9A66B" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="50" y1="30" x2="55" y2="24" stroke="#C9A66B" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  return (
    <section id="industries" className="py-24 bg-white relative overflow-hidden border-t border-black/[0.03]">
      {/* Decorative Grid Line Patterns */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-20">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0 : 0.5 }}
            className="inline-flex items-center space-x-2 bg-[var(--color-accent)]/5 px-4 py-1.5 rounded-full border border-[var(--color-accent)]/10"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
            <span className="text-xs font-bold tracking-wider uppercase text-[var(--color-accent)] font-sans">
              Market Adaptability
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0 : 0.6, delay: isMobile ? 0 : 0.1 }}
            className="font-sans text-3xl md:text-5xl font-black tracking-tight text-[#111111]"
          >
            Industries We Serve
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0 : 0.6, delay: isMobile ? 0 : 0.2 }}
            className="text-[#6B7280] text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-sans"
          >
            We help businesses across diverse industries grow their online presence, generate quality leads, and increase revenue through strategic digital marketing.
          </motion.p>
        </div>

        {/* 8 Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: isMobile ? 0 : 0.5, delay: isMobile ? 0 : idx * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-white border border-black/[0.04] p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:border-[var(--color-accent)]/30 hover:shadow-[0_12px_30px_rgba(201,166,107,0.03)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Top border decoration on hover */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--color-accent)] to-[#111] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="space-y-6">
                {/* SVG Illustration Container */}
                <div className="w-20 h-20 rounded-2xl bg-[#FAF8F5] border border-black/[0.02] flex items-center justify-center group-hover:bg-[var(--color-accent)]/5 transition-colors duration-300">
                  {item.svg}
                </div>

                <div className="space-y-3">
                  <h3 className="font-sans font-bold text-lg text-[#111111] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Quick specs / tags */}
              <div className="mt-6 pt-4 border-t border-black/[0.03] space-y-1.5">
                {item.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] flex-shrink-0" />
                    <span className="text-[10px] font-semibold text-[#111111]/80 uppercase tracking-wider">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0 : 0.7 }}
          className="relative rounded-3xl bg-[#111111] p-8 md:p-16 overflow-hidden text-center shadow-2xl border border-white/[0.04]"
        >
          {/* Subtle Background Glow Rings */}
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full border border-[var(--color-accent)]/10 opacity-30 pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full border border-white/5 opacity-30 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[var(--color-accent)]/10 via-transparent to-transparent opacity-40 pointer-events-none blur-3xl" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-4 py-1.5 rounded-full border border-[var(--color-accent)]/20">
              Boost Your Conversions
            </span>

            <h3 className="font-sans text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Ready to Grow Your Business?
            </h3>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Let's create a custom marketing strategy for your industry.
            </p>

            <div className="pt-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[var(--color-accent)] text-[#111111] text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#111111] transition-all duration-300 shadow-lg"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
