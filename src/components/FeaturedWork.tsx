"use client";

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
                        {tag}
                      </span>
                    ))}
                  </div>

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

      </div>
    </section>
  );
}
