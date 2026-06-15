"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
    projectImg: "/project_web_dev.webp",
  }
];

export default function FeaturedWork() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    setIsMobile(media.matches);
    const listener = () => setIsMobile(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

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
                    priority={idx === 0}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none pointer-events-none"
                  />
                  {proj.logoSrc && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-black/[0.04] flex items-center justify-center shadow-sm z-10">
                      <Image
                        src={proj.logoSrc}
                        alt={`${proj.title} Logo`}
                        width={60}
                        height={24}
                        style={{ width: "auto" }}
                        className="h-6 object-contain select-none pointer-events-none mix-blend-multiply"
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
                        {tag}
                      </span>
                    ))}
                  </div>

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
      </div>
    </section>
  );
}
