"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Code, 
  Sparkles, 
  TrendingUp, 
  Layers, 
  ChevronDown 
} from "lucide-react";
import HeroVisual from "./HeroVisual";
import GridPattern from "./GridPattern";

// Animated entry variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
  }
};

const badgeContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.7
    }
  }
};

const badgeItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" as const } 
  }
};

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showScrollIndicator = scrollY < 50;

  return (
    <section 
      id="home" 
      className="min-h-[100svh] relative flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      <GridPattern />
      {/* Scroll Progress Bar */}
      <div 
        id="scroll-progress" 
        style={{ transform: "scaleX(0)" }} 
        className="fixed top-0 left-0 right-0 h-1 bg-[#C9A66B] z-50 origin-left" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center relative z-10">
        
        {/* Left Side Content Column */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-6"
        >
          {/* Small Premium Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-white border border-black/[0.04] px-4 py-1.5 rounded-full shadow-[0_2px_15px_rgba(17,17,17,0.02)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A66B] shadow-[0_0_8px_#C9A66B]" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#111111] font-sans flex items-center gap-1">
              ✦ Premium Digital Solutions
            </span>
          </motion.div>

          {/* Heading (Editorial 3 lines) */}
          <div className="space-y-1">
            <h1 className="font-sans text-[clamp(2.1rem,4.2vw,3.6rem)] md:text-[54px] lg:text-[60px] xl:text-[72px] font-black tracking-tight text-[#111111] leading-[1.06]">
              <motion.span variants={itemVariants} className="block">
                Premium Websites.
              </motion.span>
              <motion.span variants={itemVariants} className="block text-gold-gradient py-0.5">
                Powerful Brands.
              </motion.span>
              <motion.span variants={itemVariants} className="block">
                Real Business Growth.
              </motion.span>
            </h1>
          </div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="font-sans text-sm sm:text-base md:text-lg text-[#6B7280] max-w-xl leading-relaxed"
          >
            We help businesses grow through premium website development, branding, SEO, Google Ads, Meta Ads, and high-converting digital marketing strategies designed to generate real results.
          </motion.p>

          {/* Twin CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto pt-2"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#111111] text-[#FAF8F4] text-xs font-bold uppercase tracking-wider hover:bg-[#C9A66B] hover:text-[#111111] hover:-translate-y-0.5 transition-all duration-300 shadow-md"
            >
              Start Your Project &rarr;
            </Link>
            <Link
              href="#work"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-black/[0.08] bg-white/40 backdrop-blur-sm hover:bg-black/[0.02] text-[#111111] text-xs font-bold uppercase tracking-wider hover:-translate-y-0.5 transition-all duration-300"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Staggered Trust Section Feature Badges */}
          <motion.div 
            variants={badgeContainerVariants}
            className="pt-6 sm:pt-8 border-t border-black/[0.04] grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full"
          >
            {[
              { text: "Premium Website Development", icon: <Code className="w-4 h-4 text-[#C9A66B] flex-shrink-0" /> },
              { text: "Branding & Visual Identity", icon: <Sparkles className="w-4 h-4 text-[#C9A66B] flex-shrink-0" /> },
              { text: "SEO & Digital Marketing", icon: <TrendingUp className="w-4 h-4 text-[#C9A66B] flex-shrink-0" /> },
              { text: "Fast Support & Transparent Process", icon: <Layers className="w-4 h-4 text-[#C9A66B] flex-shrink-0" /> },
            ].map((badge, idx) => (
              <motion.div 
                key={idx} 
                variants={badgeItemVariants}
                className="flex items-center justify-center lg:justify-start space-x-3 py-3 px-4 rounded-xl bg-white/40 backdrop-blur-sm border border-black/[0.03] shadow-sm hover:border-[#C9A66B]/30 transition-colors duration-300"
              >
                <div className="w-7 h-7 rounded-lg bg-white border border-black/[0.03] flex items-center justify-center shadow-xs">
                  {badge.icon}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#111111]">
                  {badge.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side Visual Column */}
        <div className="lg:col-span-5 w-full flex items-center justify-center lg:justify-end">
          <HeroVisual />
        </div>

      </div>

      {/* Smooth Scroll Indicator (Bottom Center) */}
      <div 
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-all duration-700 ease-out hidden lg:block ${
          showScrollIndicator ? "opacity-60 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[9px] font-bold uppercase tracking-widest text-[#6B7280]">Scroll to Explore</span>
          <div className="w-5 h-9 rounded-full border-2 border-black/10 flex justify-center p-1.5 bg-white/20 backdrop-blur-xs">
            <motion.div 
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-1.5 rounded-full bg-[#C9A66B]"
            />
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-[#C9A66B] animate-pulse" />
        </div>
      </div>
    </section>
  );
}
