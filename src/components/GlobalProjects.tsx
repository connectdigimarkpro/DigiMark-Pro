"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Globe, 
  Code, 
  Zap, 
  TrendingUp, 
  ExternalLink
} from "lucide-react";

// Count-up helper component for stats
interface CounterProps {
  value: string; // e.g. "1", "1+", "100%", "24/7"
}

function CounterNumber({ value }: CounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const match = value.match(/^(\d+)(.*)$/);
  const numericPart = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = numericPart;
    if (start === end) {
      setDisplayValue(end);
      return;
    }

    const duration = 1200;
    const stepTime = Math.max(Math.floor(duration / end), 20);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 30);
      if (start >= end) {
        clearInterval(timer);
        setDisplayValue(end);
      } else {
        setDisplayValue(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, numericPart]);

  if (value === "24/7") {
    return (
      <span ref={ref} className="tabular-nums">
        {isInView ? "24/7" : "0/7"}
      </span>
    );
  }

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
}

// Australia Flag SVG component
const AUFlagIcon = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 rounded-full shadow-lg border border-black/[0.04] flex-shrink-0 bg-[#071D49] p-0.5 animate-bounce [animation-duration:6s]">
    <defs>
      <clipPath id="flag-clip">
        <circle cx="50" cy="50" r="48" />
      </clipPath>
    </defs>
    <g clipPath="url(#flag-clip)">
      <rect width="100" height="100" fill="#071D49" />
      <g transform="scale(0.45)">
        <rect width="100" height="100" fill="#012169" />
        <path d="M0,0 L100,100 M100,0 L0,100" stroke="#FFFFFF" strokeWidth="12" />
        <path d="M0,0 L100,100 M100,0 L0,100" stroke="#C8102E" strokeWidth="6" />
        <path d="M50,0 L50,100 M0,50 L100,50" stroke="#FFFFFF" strokeWidth="20" />
        <path d="M50,0 L50,100 M0,50 L100,50" stroke="#C8102E" strokeWidth="12" />
      </g>
      {/* Southern Cross stars */}
      <polygon points="25,65 27,71 33,71 28,75 30,81 25,77 20,81 22,75 17,71 23,71" fill="#FFFFFF" />
      <polygon points="75,20 76,23 79,23 77,25 78,28 75,26 72,28 73,25 71,23 74,23" fill="#FFFFFF" />
      <polygon points="85,38 86,41 89,41 87,43 88,46 85,44 82,46 83,43 81,41 84,41" fill="#FFFFFF" />
      <polygon points="75,60 76,63 79,63 77,65 78,68 75,66 72,68 73,65 71,63 74,63" fill="#FFFFFF" />
      <polygon points="65,42 66,45 69,45 67,47 68,50 65,48 62,50 63,47 61,45 64,45" fill="#FFFFFF" />
    </g>
  </svg>
);

export default function GlobalProjects() {
  const achievements = [
    { label: "Country", value: "Australia 🇦🇺", icon: Globe },
    { label: "Service", value: "Custom Website Development", icon: Code },
    { label: "Performance", value: "SEO Optimized & Mobile Responsive", icon: Zap },
    { label: "Result", value: "International Client Successfully Delivered", icon: TrendingUp }
  ];

  const stats = [
    { value: "1", label: "Country Served" },
    { value: "1+", label: "International Client" },
    { value: "100%", label: "Custom Designed" },
    { value: "24/7", label: "Support" }
  ];

  const timeline = [
    { title: "Project Discovery", desc: "Scope alignment" },
    { title: "UI/UX Design", desc: "Bespoke mockups" },
    { title: "Development", desc: "Next.js core code" },
    { title: "Testing", desc: "Page speed tuning" },
    { title: "Launch 🚀", desc: "Production release" }
  ];

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#FAF8F4] via-[#F4F1EA] to-[#FAF8F4] text-[#111111] overflow-hidden border-t border-black/[0.04]">
      
      {/* Background grid lines overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none select-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(17, 17, 17, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(17, 17, 17, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px"
        }}
      />

      {/* Subtle connection pathway SVG on light background */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none select-none z-0">
        <svg viewBox="0 0 1000 600" className="w-full h-full text-neutral-400">
          <path d="M 600,320 Q 750,300 850,420" fill="none" stroke="#C9A66B" strokeWidth="2" strokeDasharray="5 5" />
          <circle cx="600" cy="320" r="4.5" fill="#C9A66B" />
          <circle cx="850" cy="420" r="4.5" fill="#EA580C" />
          <circle cx="850" cy="420" r="12" fill="none" stroke="#EA580C" strokeWidth="1" opacity="0.4" />
        </svg>
      </div>

      {/* Decorative ambient glowing circles */}
      <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] max-w-[500px] rounded-full bg-[#C9A66B]/8 blur-[100px] pointer-events-none z-0 animate-float-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[500px] rounded-full bg-[#EA580C]/4 blur-[120px] pointer-events-none z-0 animate-float-medium" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        
        {/* Header Block with scroll reveals */}
        <div className="space-y-4 max-w-3xl">
          {/* Section badge */}
          <div className="inline-flex items-center space-x-2 bg-[#C9A66B]/10 px-4 py-1.5 rounded-full border border-[#C9A66B]/25">
            <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#B38728] font-sans">
              🌍 Global Spotlight
            </span>
          </div>

          {/* Word-by-word reveal headline */}
          <h2 className="font-sans text-4xl sm:text-5xl font-black tracking-tight text-[#111111] leading-none">
            <span className="block overflow-hidden relative">
              <motion.span 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                GLOBAL
              </motion.span>
            </span>
            <span className="block overflow-hidden relative text-neutral-400 mt-1">
              <motion.span 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                PROJECTS
              </motion.span>
            </span>
          </h2>

          <div className="space-y-1.5">
            <p className="text-neutral-700 text-sm sm:text-base font-semibold">
              Building digital experiences that help businesses grow across borders.
            </p>
            <p className="text-[#EA580C] text-xs sm:text-sm font-semibold tracking-wide uppercase">
              From India to Australia — delivering world-class digital solutions.
            </p>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Side: Stats and Achievements */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Project description copy */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-black text-[#111111]">
                Case Study: National Recyclers
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-medium">
                We engineered a high-performance web experience for Perth&apos;s scrap metal and recycling authorities. By embedding search engine optimizations, lightweight Next.js architectures, and direct instant-quote pipelines, we established premium market authority and captured high-intent commercial leads.
              </p>
            </div>

            {/* Parameter list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {achievements.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx}
                    className="group bg-white/70 border border-black/[0.04] p-4 rounded-xl flex items-start gap-3 hover:border-[#EA580C]/20 hover:bg-white transition-all duration-300 shadow-sm backdrop-blur-md"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-black/[0.03] flex items-center justify-center text-[#C9A66B] group-hover:bg-[#C9A66B]/10 group-hover:text-[#111111] transition-all duration-300 flex-shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <span className="block text-[9px] font-black uppercase text-neutral-400 tracking-wider">
                        {item.label}
                      </span>
                      <span className="block text-xs font-semibold text-[#111111] truncate">
                        {item.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mini Stats counter layout */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/50 border border-black/[0.04] text-center shadow-sm backdrop-blur-md">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <span className="block font-sans font-black text-2xl sm:text-3xl text-[#111111] tracking-tight leading-none">
                    <CounterNumber value={stat.value} />
                  </span>
                  <span className="block text-[8px] font-bold text-neutral-500 uppercase tracking-widest leading-none mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Side: Showcase Mockup */}
          <div className="lg:col-span-6">
            
            <div className="group relative bg-white border border-black/[0.05] rounded-[24px] sm:rounded-[32px] p-5 sm:p-6 space-y-6 transition-all duration-500 hover:border-[#EA580C]/30 hover:shadow-[0_20px_50px_rgba(234,88,12,0.06)] shadow-[0_12px_40px_rgba(0,0,0,0.02)] relative overflow-hidden">
              
              {/* Glow Highlight overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#EA580C]/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Floating Achievements Badge */}
              <div className="absolute top-5 left-5 z-30 inline-flex items-center space-x-1.5 bg-neutral-900 border border-white/10 px-3 py-1.5 rounded-full shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A66B] animate-pulse" />
                <span className="text-[8px] font-black uppercase text-white tracking-wider">
                  🌎 INTERNATIONAL PROJECT
                </span>
                <span className="text-[8px] text-[#C9A66B] font-bold">
                  • Delivered Successfully
                </span>
              </div>

              {/* Australia flag badge */}
              <div className="absolute top-5 right-5 z-30 group-hover:scale-105 transition-transform duration-500 shadow-2xl">
                <AUFlagIcon />
              </div>

              {/* Laptop & Mobile Phone Mockup Container */}
              <div className="relative w-full aspect-[16/10] bg-[#FAF8F5] rounded-2xl flex items-center justify-center p-6 border border-black/[0.03] mt-6">
                
                {/* Laptop Mockup frame */}
                <div className="relative w-[85%] aspect-[16/10] bg-[#16161a] rounded-t-lg border-t-[2.5px] border-x-[2.5px] border-neutral-700 shadow-2xl overflow-hidden transition-transform duration-500 group-hover:-translate-y-1.5">
                  <div className="w-full h-full bg-[#121415] overflow-hidden relative select-none">
                    <Image 
                      src="/NationalRecyclers.png" 
                      alt="National Recyclers Website Screenshot Preview" 
                      fill 
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] via-transparent to-white/[0.04] pointer-events-none" />
                </div>

                {/* Laptop deck base */}
                <div className="absolute bottom-[22px] left-[4.5%] w-[91%] h-[5px] bg-neutral-600 rounded-b-lg border-t border-neutral-500 shadow-lg z-10 transition-transform duration-500 group-hover:-translate-y-1.5">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-neutral-800 rounded-b-sm" />
                </div>

                {/* Mobile Phone Mockup overlapping */}
                <div className="absolute bottom-3 right-6 w-[23%] aspect-[9/18] bg-black border-[1.5px] border-neutral-700 rounded-[12px] shadow-2xl overflow-hidden z-20 transition-transform duration-500 group-hover:rotate-3 group-hover:translate-x-0.5">
                  <div className="w-full h-full bg-[#0E0F10] overflow-hidden relative select-none">
                    <Image 
                      src="/NationalRecyclers.png" 
                      alt="National Recyclers Mobile Screenshot Preview" 
                      fill 
                      sizes="15vw"
                      className="object-cover object-center scale-[1.05]"
                    />
                  </div>
                </div>

              </div>

              {/* Meta details footer inside the card */}
              <div className="space-y-4 border-t border-black/[0.05] pt-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <h4 className="text-lg font-black text-[#111111] leading-none">
                      National Recyclers
                    </h4>
                    <span className="text-[10px] text-neutral-500 font-medium block">
                      Scrap Metal & Recycling • Australia 🇦🇺
                    </span>
                  </div>
                  
                  {/* Live Badge */}
                  <span className="inline-flex items-center gap-1.5 bg-[#00A859]/10 px-2.5 py-1 rounded-full border border-[#00A859]/30 text-[8px] font-bold text-[#00A859] uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A859] animate-pulse" />
                    Live
                  </span>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {["Australia-Based", "Globally Focused"].map((pill) => (
                    <span 
                      key={pill}
                      className="px-2.5 py-0.5 rounded-full bg-[#FAF8F5] border border-black/[0.04] text-[9px] font-semibold text-neutral-500"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                {/* Visit website button */}
                <a
                  href="https://www.nationalrecyclers.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-3 rounded-lg bg-[#111111] text-[#FAF8F4] font-black text-xs uppercase tracking-widest shadow-md transition-all duration-300 hover:bg-[#EA580C] hover:text-white active:scale-[0.98]"
                >
                  Visit Website <ExternalLink size={11} className="ml-1.5" />
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* Timeline Workflow */}
        <div className="border-t border-black/[0.06] pt-12 mt-12 w-full space-y-6">
          <span className="text-[9px] font-extrabold uppercase tracking-widest text-neutral-400 block text-center">
            Delivery Framework Timeline
          </span>

          <div className="relative">
            {/* Glowing lines for desktop and mobile */}
            <div className="absolute top-[20px] left-5 sm:left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#C9A66B]/50 via-[#EA580C]/30 to-neutral-200 hidden sm:block" />
            <div className="absolute top-[20px] left-5 bottom-[20px] w-[2px] bg-gradient-to-b from-[#C9A66B]/50 via-[#EA580C]/30 to-neutral-200 sm:hidden block" />

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 relative z-10">
              {timeline.map((step, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-row sm:flex-col items-center gap-4 sm:gap-3 text-left sm:text-center"
                >
                  {/* Timeline Bullet Node */}
                  <div className="w-10 h-10 rounded-full bg-white border border-black/[0.08] flex items-center justify-center text-xs font-bold text-[#111111] shadow-sm flex-shrink-0 z-20 transition-colors duration-300">
                    {idx + 1}
                  </div>

                  {/* Step Description */}
                  <div className="bg-white/60 border border-black/[0.04] p-3.5 rounded-xl backdrop-blur-md flex-1 sm:flex-initial shadow-sm">
                    <h4 className="text-[10px] font-black uppercase text-[#111111] tracking-wider">
                      {step.title}
                    </h4>
                    <p className="text-[9px] text-neutral-500 mt-0.5 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mini CTA row */}
        <div className="text-center pt-8 max-w-xl mx-auto space-y-4">
          <p className="text-neutral-500 text-xs sm:text-sm font-medium">
            Ready to build the next global success story?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#111111] text-white text-xs font-extrabold uppercase tracking-wider hover:bg-[#EA580C] hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md group"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
