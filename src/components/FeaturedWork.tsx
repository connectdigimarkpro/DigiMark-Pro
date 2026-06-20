"use client";

<<<<<<< HEAD
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Selected Projects data
const projectsData = [
  {
    slug: "web-development", // maps to BM Farms case study
    title: "BM Farms",
    subtitle: "Precision Poultry Infrastructure",
    description: "A precision contract broiler poultry farming system built for strict biosecurity protocols, automation, and advanced environmental systems to optimize poultry health and yield.",
    tags: ["Next.js", "Responsive Design", "SEO", "UI/UX"],
    projectImg: "/BM Farms.png",
    accentColor: "#006B44", // Deep green
    stats: "Speed: <0.4s"
  },
  {
    slug: "seren-education",
    title: "Seren Education Consultants",
    subtitle: "Global Study & Immigration Portals",
    description: "Certified study & immigration consultants facilitating global education journeys with a premium digital application portal and structured program pathways.",
    tags: ["Next.js", "Responsive Design", "SEO", "UI/UX"],
    projectImg: "/Seren.png",
    accentColor: "#C41E3A", // Elegant red
    stats: "+140% Inquiries"
  },
  {
    slug: "digimark-pro",
    title: "DigiMark Pro",
    subtitle: "Bespoke Corporate Marketing Engine",
    description: "Bespoke corporate website, high-converting lead frameworks, and elegant search visibility strategy for our growing digital agency.",
    tags: ["Next.js", "Responsive Design", "SEO", "UI/UX"],
    projectImg: "/DM.png",
    accentColor: "#C9A66B", // Black and Gold
    stats: "20K+ Reach"
  }
];

// Reusable MacBook Pro Mockup Component
function MacbookMockup({ imgUrl, accentColor, title }: { imgUrl: string; accentColor: string; title: string }) {
  return (
    <div className="relative w-full aspect-[16/10] max-w-[500px] sm:max-w-[540px] mx-auto filter drop-shadow-[0_20px_45px_rgba(17,17,17,0.06)] hover:drop-shadow-[0_25px_55px_rgba(17,17,17,0.12)] transition-all duration-700 ease-out group">
      
      {/* Dynamic ambient color glow */}
      <div 
        className="absolute inset-[5%] rounded-full blur-[65px] opacity-15 group-hover:opacity-25 transition-all duration-700 pointer-events-none -z-10"
        style={{ backgroundColor: accentColor }}
      />
      
      {/* MacBook Screen Bezel */}
      <div className="relative w-[92%] mx-auto aspect-[16/10] bg-[#0A0A0B] rounded-t-[14px] p-[2%] pb-[3%] border border-white/[0.06] shadow-[inset_0_2px_4px_rgba(255,255,255,0.03)] overflow-hidden">
        {/* Screen glass glare sheen */}
        <div className="absolute top-0 right-0 w-[55%] h-[150%] bg-gradient-to-tr from-transparent via-white/[0.015] to-transparent rotate-[32deg] origin-top pointer-events-none z-10" />

        {/* Camera dot */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#1c1c1e] flex items-center justify-center">
          <div className="w-0.5 h-0.5 rounded-full bg-[#2a3048]" />
        </div>

        {/* Inner Screen Area */}
        <div className="relative w-full h-full bg-[#FAF8F4] rounded-[3px] overflow-hidden border border-black/[0.1] shadow-[inset_0_2px_8px_rgba(0,0,0,0.05)]">
          <Image
            src={imgUrl}
            alt={`${title} Homepage Screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-full object-cover object-top transition-transform duration-[4000ms] ease-in-out group-hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* MacBook Base (Aluminum chassis) */}
      <div className="relative w-full h-[12px] bg-[#C5C5C7] rounded-b-[14px] border-b border-[#8E8E93] shadow-[0_12px_24px_rgba(0,0,0,0.1)] flex items-center justify-center">
        {/* Aluminum shine */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-white/40" />
        {/* Display open indentation */}
        <div className="absolute top-0 w-[14%] h-[4px] bg-[#1a1a1a] rounded-b-[3px]" />
      </div>

      {/* MacBook bottom edge contact shadow */}
      <div className="relative w-[88%] mx-auto h-[2.5px] bg-[#838385] rounded-b-[6px] opacity-60" />
    </div>
  );
}

export default function FeaturedWork() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-[#FAF8F4] relative border-t border-black/[0.02]">
      
      {/* Decorative organic background light */}
      <div className="absolute top-[20%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-[#FAF8F4]/30 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-15%] w-[45vw] h-[45vw] rounded-full bg-[#FAF8F4]/30 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
        
        {/* Section title & Header */}
        <div className="max-w-3xl border-b border-black/[0.04] pb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C9A66B] block mb-3">
            Selected Work
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#111111] leading-tight mb-4">
            Bespoke Digital Showcases
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] font-medium leading-relaxed">
            Every project is designed with a focus on performance, user experience, and measurable business impact. We partner with ambitious organizations to architect solutions that drive growth.
          </p>
        </div>

        {/* Selected Projects List */}
        <div className="space-y-24 md:space-y-36">
          {projectsData.map((project, idx) => {
            const isEven = idx % 2 === 1;
            
            return (
              <motion.div
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                key={project.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center"
              >
                {/* Visual Column (Device Showcase) */}
                <div className={`lg:col-span-6 w-full ${isEven ? "lg:order-last" : ""}`}>
                  <MacbookMockup 
                    imgUrl={project.projectImg} 
                    accentColor={project.accentColor} 
                    title={project.title}
                  />
                </div>

                {/* Details Column */}
                <div className="lg:col-span-6 flex flex-col items-start space-y-6">
                  {/* Category, stats and accent bar */}
                  <div className="flex items-center gap-3">
                    <span 
                      className="w-1.5 h-6 rounded-full" 
                      style={{ backgroundColor: project.accentColor }}
                    />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#6B7280]">
                      Featured Case Study
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-[#111111]/5 text-[#111111]">
                      {project.stats}
                    </span>
                  </div>

                  {/* Heading & Subtitle */}
                  <div className="space-y-2">
                    <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#111111] leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-gray-400">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description text */}
                  <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-xl font-medium">
                    {project.description}
                  </p>

                  {/* Glassmorphism Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wide text-gray-500 bg-white/40 backdrop-blur-md border border-black/[0.04] px-3.5 py-1.5 rounded-full"
                      >
=======
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import useIsMobile from "@/components/useIsMobile";

// Portfolio Projects data
const projectsData = [
  {
    slug: "seren-education",
    title: "Seren Education Consultants",
    category: "Branding",
    summary: "Luxury brand system for elite global university advisors.",
    tags: ["Branding", "Flex Design", "Marketing Materials"],
    stats: "+140% Inquiries",
    imageBg: "bg-radial from-[#C9A66B]/20 to-[#FAF8F5]",
    logoSrc: "/seren-logo.webp",
    logoWidth: 260,
    logoHeight: 106,
    projectImg: "/project_seren.webp",
  },
  {
    slug: "digimark-pro",
    title: "DigiMark Pro Brand Identity",
    category: "Branding",
    summary: "Minimalist brand book and corporate assets for our own agency.",
    tags: ["Logo Design", "Brand Identity", "LinkedIn Branding", "Brochure Design"],
    stats: "20K+ Impressions",
    imageBg: "bg-radial from-[#111111]/10 to-[#FAF8F5]",
    logoSrc: "/logo.webp",
    logoWidth: 837,
    logoHeight: 583,
    projectImg: "/project_digimark.webp",
  },
  {
    slug: "web-development",
    title: "Website Development Projects",
    category: "Web Development",
    summary: "High-performance digital products and Next.js applications.",
    tags: ["Next.js", "Landing Pages", "Full Stack Applications"],
    stats: "<0.4s Load Time",
    imageBg: "bg-radial from-[#C9A66B]/10 to-[#FAF8F5]",
    logoSrc: null,
    logoWidth: undefined,
    logoHeight: undefined,
    projectImg: "/project_web_dev.webp",
  }
];

export default function FeaturedWork() {
  const [activeFilter, setActiveFilter] = useState("All");
  const isMobile = useIsMobile();

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter(proj => proj.category === activeFilter);

  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-white relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/[0.06] pb-8">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Featured Work</span>
            <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[#111111]">
              Bespoke Showcases
            </h2>
          </div>
          
          {/* Category Filter Tab Bar */}
          <div className="flex flex-wrap items-center gap-2">
            {["All", "Branding", "Web Development"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 relative ${
                  activeFilter === filter
                    ? "text-[#FAF8F5]"
                    : "text-[#6B7280] hover:text-[#111111]"
                }`}
              >
                <span className="relative z-10">{filter}</span>
                {activeFilter === filter && (
                  <motion.span
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-[#111111] rounded-full z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => (
              <motion.div
                layout={isMobile ? false : "position"}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: isMobile ? 0 : 0.5 }}
                key={proj.slug}
                className="group flex flex-col bg-[#FAF8F5] border border-black/[0.04] rounded-2xl overflow-hidden p-6 md:p-8 hover:border-[var(--color-accent)] transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.01)] cursor-pointer"
                data-hover="true"
                data-hover-text="View Study"
              >
                {/* Decorative Project Card Artwork */}
                <div className="w-full aspect-[4/3] rounded-xl flex items-center justify-center mb-6 overflow-hidden border border-black/[0.04] relative bg-white">
                  <Image
                    src={proj.projectImg}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none pointer-events-none"
                  />
                  {proj.logoSrc && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-black/[0.04] flex items-center justify-center shadow-sm z-10">
                      <Image
                        src={proj.logoSrc}
                        alt={`${proj.title} Logo`}
                        width={proj.logoWidth}
                        height={proj.logoHeight}
                        className="h-6 w-auto object-contain select-none pointer-events-none mix-blend-multiply"
                      />
                    </div>
                  )}
                </div>

                <div className="flex-grow flex flex-col space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)]">
                      {proj.category}
                    </span>
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-[#111111]/5 text-[#111111]">
                      {proj.stats}
                    </span>
                  </div>

                  <h3 className="font-sans text-xl font-bold tracking-tight text-[#111111] group-hover:text-[var(--color-accent)] transition-colors">
                    {proj.title}
                  </h3>
                  
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {proj.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-medium text-[#6B7280] border border-black/[0.04] px-2 py-1 rounded-md bg-white">
>>>>>>> ad4664a9251c0a2b414fbe46b7d81e5cfaa740b8
                        {tag}
                      </span>
                    ))}
                  </div>

<<<<<<< HEAD
                  {/* Custom themed action button */}
                  <div className="pt-4">
                    <Link
                      href={`/work/${project.slug}`}
                      style={{ 
                        "--btn-accent": project.accentColor,
                        color: project.accentColor 
                      } as React.CSSProperties}
                      className="inline-flex items-center text-xs font-bold uppercase tracking-widest transition-all duration-300 gap-1.5 group/btn hover:translate-x-1"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight 
                        size={14} 
                        className="transition-transform duration-300 group-hover/btn:translate-x-1" 
                        style={{ color: project.accentColor }}
                      />
                    </Link>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

=======
                  <div className="pt-6 border-t border-black/[0.04] mt-auto flex items-center justify-between">
                    <Link
                      href={`/work/${proj.slug}`}
                      className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#111111] group-hover:text-[var(--color-accent)] transition-colors"
                    >
                      Explore Case Study
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
>>>>>>> ad4664a9251c0a2b414fbe46b7d81e5cfaa740b8
      </div>
    </section>
  );
}
