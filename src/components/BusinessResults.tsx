"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Zap, 
  Globe, 
  Star, 
  Clock 
} from "lucide-react";

// Count-up animation helper component
interface AnimatedNumberProps {
  value: string; // e.g., "50+", "12+", "99%", "24/7"
}

function AnimatedNumber({ value }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Parse the raw number and suffix (handles format like "50+", "99%", "12+", "24/7")
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

    const duration = 1500; // Total count-up duration in ms
    const stepTime = Math.max(Math.floor(duration / end), 16); // cap speed at ~60fps
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 40); // Larger steps for scaling speed
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

export default function BusinessResults() {
  const stats = [
    {
      metric: "50+",
      label: "Projects Delivered",
      icon: Zap,
    },
    {
      metric: "12+",
      label: "Industries Served",
      icon: Globe,
    },
    {
      metric: "99%",
      label: "Client Satisfaction",
      icon: Star,
    },
    {
      metric: "24/7",
      label: "Support & Maintenance",
      icon: Clock,
    },
  ];

  const industries = [
    "Healthcare",
    "Education",
    "Manufacturing",
    "Real Estate",
    "Consulting",
    "Hospitality",
  ];

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-[#0B0B0C] text-[#FAF8F5] border-t border-white/[0.04] overflow-hidden">
      
      {/* Background Gradients & Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none select-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px"
        }}
      />
      
      {/* Editorial Glowing Radial Circles */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-[#C9A66B]/5 blur-[120px] pointer-events-none z-0 animate-float-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-amber-500/3 blur-[140px] pointer-events-none z-0 animate-float-medium" />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and description */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 sm:space-y-8"
          >
            {/* Section Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#C9A66B]/10 px-4 py-1.5 rounded-full border border-[#C9A66B]/25">
              <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#C9A66B] font-sans">
                ✦ OUR IMPACT
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Real Business Results.
                <span className="block text-neutral-500 font-bold mt-1">Not Just Beautiful Websites.</span>
              </h2>
            </div>

            {/* Subheading & Short Paragraph */}
            <div className="space-y-4 max-w-xl">
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans font-medium">
                We help businesses grow through premium web development, SEO, digital marketing, and performance-driven digital experiences that deliver measurable outcomes.
              </p>
              <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                Our approach integrates high-speed engineering with visual luxury to establish absolute market authority. Every line of code, pixel, and conversion funnel is meticulously calibrated for pipeline scaling.
              </p>
            </div>

            {/* CTA Group */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-6">
              <Link 
                href="/work" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-[#C9A66B] hover:text-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md group"
              >
                View Case Studies
                <ArrowRight className="ml-2 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-white hover:text-[#C9A66B] transition-colors duration-300 border-b border-white/20 hover:border-[#C9A66B] pb-1"
              >
                Book Free Consultation
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Statistics Grid */}
          <div className="lg:col-span-7">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            >
              {stats.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { type: "spring", stiffness: 100, damping: 15 } 
                      }
                    }}
                    className="group relative bg-white/[0.02] border border-white/[0.06] backdrop-blur-md p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] transition-all duration-300 hover:border-[#C9A66B]/30 hover:bg-white/[0.04] hover:-translate-y-1.5 shadow-2xl shadow-black/40 flex flex-col justify-between min-h-[160px] sm:min-h-[180px] overflow-hidden"
                  >
                    {/* Hover light highlight effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Small Icon */}
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#C9A66B] group-hover:bg-[#C9A66B]/10 group-hover:text-white transition-all duration-300 mb-6">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Animated Number and Label */}
                    <div className="space-y-1">
                      <span className="block font-sans font-black text-4xl sm:text-5xl text-white tracking-tight leading-none">
                        <AnimatedNumber value={item.metric} />
                      </span>
                      <span className="block text-xs font-semibold text-neutral-400 mt-1 uppercase tracking-wider">
                        {item.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>

        {/* Divider and Served Sectors */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/[0.08] mt-16 sm:mt-24 pt-8 w-full"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="text-[10px] font-black uppercase tracking-widest text-neutral-500 flex-shrink-0">
              Trusted by businesses across
            </div>
            <div className="flex flex-wrap gap-2 md:justify-end">
              {industries.map((pill) => (
                <span 
                  key={pill} 
                  className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs text-neutral-400 font-semibold tracking-wide hover:text-[#C9A66B] hover:border-[#C9A66B]/30 hover:bg-white/[0.05] transition-all duration-300"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
