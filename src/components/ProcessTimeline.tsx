"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Timeline steps data
const processSteps = [
  {
    num: "01",
    label: "Discover",
    title: "Research",
    desc: "We analyze competitor data, user behaviors, and analytics to uncover high-impact growth channels.",
    image: "/Research.png",
    accentColor: "#10B981" // Emerald Green
  },
  {
    num: "02",
    label: "Plan",
    title: "Strategy",
    desc: "We compile roadmaps, sticky planning boards, and blueprints to map your conversion trajectory.",
    image: "/Strategy.png",
    accentColor: "#2563EB" // Royal Blue
  },
  {
    num: "03",
    label: "Create",
    title: "Design",
    desc: "We design Figma wireframes, luxury interfaces, and high-fidelity brand style guides.",
    image: "/design.png",
    accentColor: "#8B5CF6" // Purple
  },
  {
    num: "04",
    label: "Build",
    title: "Development",
    desc: "We hand-code responsive Next.js applications optimized for page speed and clean architecture.",
    image: "/Development.png",
    accentColor: "#F97316" // Orange
  },
  {
    num: "05",
    label: "Scale",
    title: "Growth",
    desc: "We scale channels using SEO optimizations, Ads management, and marketing dashboard metrics.",
    image: "/Growth.png",
    accentColor: "#C9A66B" // Gold
  }
];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Track scroll position of the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth scroll progression line
  const scaleLine = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Listen to scroll progression to highlight the current active card
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest > 0.85) setActiveStep(5);
      else if (latest > 0.65) setActiveStep(4);
      else if (latest > 0.45) setActiveStep(3);
      else if (latest > 0.25) setActiveStep(2);
      else if (latest > 0.05) setActiveStep(1);
      else setActiveStep(0);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="relative w-full py-10">
      
      {/* ────────────────── TIMELINE LINES (Desktop and Mobile) ────────────────── */}
      
      {/* Diagonal Line connecting circle nodes above the cards (Desktop) */}
      <svg 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none" 
        className="absolute inset-0 w-full h-[95%] -z-10 hidden lg:block"
      >
        <defs>
          <linearGradient id="processGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#C9A66B" />
          </linearGradient>
        </defs>
        {/* Base background line */}
        <path 
          d="M 10 24 L 90 0" 
          stroke="rgba(17, 17, 17, 0.04)" 
          strokeWidth="0.25" 
          strokeLinecap="round" 
        />
        {/* Animated drawing line */}
        <motion.path 
          d="M 10 24 L 90 0" 
          stroke="url(#processGrad)" 
          strokeWidth="0.3" 
          strokeLinecap="round"
          style={{ pathLength: scaleLine }}
        />
      </svg>

      {/* Vertical Line on the left (Mobile / Tablet) */}
      <div className="absolute top-[30px] bottom-[30px] left-[27px] w-[2px] bg-black/[0.04] -z-10 block lg:hidden">
        <motion.div 
          style={{ scaleY: scaleLine, transformOrigin: "top" }}
          className="w-full h-full bg-gradient-to-b from-[#10B981] via-[#8B5CF6] to-[#C9A66B]" 
        />
      </div>

      {/* ────────────────── CARDS LAYOUT ────────────────── */}
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-5 w-full relative z-10">
        {processSteps.map((step, idx) => {
          const stepNum = idx + 1;
          const isActive = activeStep === stepNum || (activeStep === 0 && stepNum === 1);
          
          // Staircase layout translations: climbing upward from Step 1 to Step 5
          const getStaircaseTranslation = (index: number) => {
            switch (index) {
              case 0: return "lg:translate-y-[24%]";
              case 1: return "lg:translate-y-[18%]";
              case 2: return "lg:translate-y-[12%]";
              case 3: return "lg:translate-y-[6%]";
              case 4: return "lg:translate-y-0";
              default: return "";
            }
          };

          return (
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              key={step.num}
              className={`relative flex flex-col items-center lg:items-stretch group ${getStaircaseTranslation(idx)} transition-transform duration-500`}
            >
              
              {/* Connecting Circle Node (Desktop - top center; Mobile - left center) */}
              <div 
                className="absolute top-0 lg:left-1/2 lg:-translate-x-1/2 left-[11px] w-8 h-8 rounded-full border bg-white flex items-center justify-center font-bold text-xs shadow-xs transition-all duration-500 z-20"
                style={{ 
                  borderColor: isActive ? step.accentColor : "rgba(17, 17, 17, 0.08)",
                  color: isActive ? step.accentColor : "#6B7280",
                  boxShadow: isActive ? `0 0 12px ${step.accentColor}25` : undefined
                }}
              >
                <span>{step.num}</span>
                {isActive && (
                  <span 
                    className="absolute inset-0 rounded-full opacity-20 animate-ping"
                    style={{ backgroundColor: step.accentColor }}
                  />
                )}
              </div>

              {/* Vertical spacing spacer between workflow node and card on desktop */}
              <div className="h-14 hidden lg:block" />

              {/* Step Card Element */}
              <div 
                style={{ 
                  borderColor: isActive ? step.accentColor : "rgba(17, 17, 17, 0.04)",
                  boxShadow: isActive ? `0 12px 30px -10px ${step.accentColor}18` : undefined
                }}
                className={`w-[85%] sm:w-[320px] lg:w-full ml-12 lg:ml-0 bg-white border rounded-2xl p-5 sm:p-6 flex flex-col justify-between min-h-[360px] lg:min-h-[390px] relative overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-[0_4px_25px_rgba(0,0,0,0.01)]`}
              >
                {/* Dynamic colored top hairline edge */}
                <div 
                  className="absolute top-0 inset-x-0 h-[3px] transition-opacity duration-500"
                  style={{ 
                    backgroundColor: step.accentColor, 
                    opacity: isActive ? 1 : 0.08 
                  }}
                />

                {/* Step Action Label */}
                <div className="flex justify-end items-center w-full">
                  <span 
                    style={{ 
                      color: isActive ? step.accentColor : "#6B7280",
                      backgroundColor: isActive ? `${step.accentColor}08` : "rgba(17,17,17,0.03)"
                    }}
                    className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border border-black/[0.02]"
                  >
                    {step.label}
                  </span>
                </div>

                {/* Main Illustration (Real scene with slow float) */}
                <div className="relative w-full h-[140px] flex items-center justify-center my-3 overflow-hidden rounded-xl bg-gray-50/50 border border-black/[0.01]">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3.2 + idx * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative w-[95%] h-[95%] group-hover:scale-105 transition-transform duration-700 ease-out"
                  >
                    <Image
                      src={step.image}
                      alt={`${step.title} illustration`}
                      fill
                      sizes="(max-width: 768px) 100vw, 20vw"
                      className="object-contain select-none pointer-events-none"
                    />
                  </motion.div>
                </div>

                {/* Text Content */}
                <div className="space-y-2 mt-auto">
                  <h4 className="font-sans font-bold text-lg text-[#111111] leading-tight">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed max-w-sm line-clamp-2">
                    {step.desc}
                  </p>
                </div>

              </div>

            </motion.div>
          );
        })}
      </div>

      {/* ────────────────── BOTTOM CTA CALLOUT CARD ────────────────── */}
      
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mt-28 sm:mt-36 max-w-4xl mx-auto p-8 sm:p-12 md:p-16 border border-black/[0.04] rounded-3xl shadow-[0_12px_40px_-15px_rgba(17,17,17,0.02)] relative overflow-hidden bg-white/70 backdrop-blur-md text-center flex flex-col items-center justify-center gap-6 sm:gap-8 group"
      >
        {/* Subtle diagonal background sheen */}
        <div className="absolute inset-0 w-[50%] h-[150%] bg-gradient-to-tr from-transparent via-[#C9A66B]/5 to-transparent rotate-[35deg] origin-top pointer-events-none -z-10" />

        <div className="space-y-4 max-w-2xl">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#C9A66B]">
            ✦ Start Your Journey
          </span>
          <h3 className="font-sans text-xl sm:text-2xl md:text-3xl font-black text-[#111111] leading-tight max-w-xl mx-auto">
            Ready to turn your idea into a high-performing digital experience?
          </h3>
          <p className="text-sm text-[#6B7280] leading-relaxed font-medium">
            Let&apos;s build something your customers will remember.
          </p>
        </div>

        <Link
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#111111] text-[#FAF8F4] text-xs font-bold uppercase tracking-wider hover:bg-[#C9A66B] hover:text-[#111111] transition-all duration-300 shadow-md group-hover:scale-[1.02]"
        >
          Start Your Project &rarr;
        </Link>
      </motion.div>

    </div>
  );
}
