"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const processSteps = [
  {
    num: "01",
    title: "RESEARCH",
    desc: "Deep market analysis and audience research focused on identifying scalable growth opportunities.",
    badge: "+120% Growth"
  },
  {
    num: "02",
    title: "STRATEGY",
    desc: "Creating conversion-focused digital roadmaps tailored for business growth and positioning.",
    badge: null
  },
  {
    num: "03",
    title: "DESIGN",
    desc: "Building modern visual systems and premium brand experiences that create impact.",
    badge: "8.7K Conversions"
  },
  {
    num: "04",
    title: "DEVELOPMENT",
    desc: "Developing responsive, high-performance digital platforms optimized for speed and usability.",
    badge: null
  },
  {
    num: "05",
    title: "GROWTH",
    desc: "Scaling brands using performance marketing, AI-enhanced systems, and measurable strategies.",
    badge: "250% ROI"
  }
];

export default function ProcessTimeline() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    setIsMobile(media.matches);
    const listener = () => setIsMobile(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return (
    <div className="max-w-4xl mx-auto relative pl-6 md:pl-12 border-l border-black/[0.06] space-y-12">
      {processSteps.map((step, idx) => (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: isMobile ? 0 : 0.6, delay: isMobile ? 0 : idx * 0.1 }}
          key={idx}
          className="relative group"
        >
          {/* Timeline Bullet */}
          <div className="absolute -left-[31px] md:-left-[55px] w-4 h-4 rounded-full bg-[#FAF8F5] border-2 border-[var(--color-accent)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300" />

          <div className="bg-white border border-black/[0.04] p-6 md:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-[var(--color-accent)] transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[var(--color-accent)] tracking-widest uppercase">
                Phase {step.num}
              </span>
              {step.badge && (
                <span className="text-[10px] font-bold text-[#111111] bg-black/[0.03] border border-black/[0.05] px-2 py-0.5 rounded-md">
                  {step.badge}
                </span>
              )}
            </div>
            <h3 className="font-sans text-xl font-bold text-[#111111] mb-3 uppercase tracking-tight">
              {step.title}
            </h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              {step.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
