"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, 
  Sparkles, 
  TrendingUp, 
  Clock, 
  Search, 
  Monitor, 
  ArrowUpRight, 
  Layers,
  Star,
  Check
} from "lucide-react";

// List of tabs/screens in the cycle
const SCREENS = [
  { id: "web", label: "Web Design" },
  { id: "seo", label: "SEO Dashboard" },
  { id: "ads", label: "Ads Campaign" },
  { id: "brand", label: "Branding Guide" }
];

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Parallax mouse movements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) / 45;
      const y = (clientY - window.innerHeight / 2) / 45;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-cycling logic
  const startAutoplay = () => {
    stopAutoplay();
    autoPlayRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % SCREENS.length);
    }, 4500);
  };

  const stopAutoplay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    startAutoplay(); // Reset autoplay timer on click
  };

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-square flex flex-col justify-center items-center select-none max-w-[650px] mx-auto">
      
      {/* Background Soft Glow Layer */}
      <motion.div 
        animate={{
          x: mousePos.x * -0.4,
          y: mousePos.y * -0.4,
        }}
        className="absolute w-[80%] h-[80%] rounded-full bg-[#C9A66B]/5 blur-[80px] pointer-events-none -z-10"
      />

      {/* Floating Card 1: Google Reviews (Top-Left) */}
      <motion.div
        animate={{
          x: mousePos.x * 0.8,
          y: mousePos.y * 0.8 + Math.sin(Date.now() / 1000) * 3, // Custom floating animation combined
        }}
        className="absolute top-[8%] left-[2%] z-20 w-[170px] xs:w-[200px] p-3 sm:p-4 bg-white/70 backdrop-blur-xl border border-black/[0.04] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col gap-1 pointer-events-none hidden xs:flex"
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">Google Review</span>
          <div className="flex gap-0.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} fill="currentColor" />
            ))}
          </div>
        </div>
        <p className="text-[11px] font-medium leading-normal text-[#111111] mt-0.5">
          &ldquo;Outstanding digital craft. Our sales doubled in 3 months!&rdquo;
        </p>
        <span className="text-[9px] text-[#C9A66B] font-bold mt-0.5">5.0 Rating • Clean & Premium</span>
      </motion.div>

      {/* Floating Card 2: SEO Health Score (Bottom-Left) */}
      <motion.div
        animate={{
          x: mousePos.x * 0.6,
          y: mousePos.y * 0.6 + Math.cos(Date.now() / 1200) * 4,
        }}
        className="absolute bottom-[18%] left-[-4%] z-20 w-[140px] xs:w-[160px] p-3 sm:p-4 bg-white/75 backdrop-blur-xl border border-black/[0.04] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex items-center gap-3 pointer-events-none hidden xs:flex"
      >
        {/* Simple SVG Circular Progress */}
        <div className="relative w-10 h-10 flex items-center justify-center flex-shrink-0">
          <svg className="w-full h-full transform -rotate-95" viewBox="0 0 36 36">
            <path
              className="text-gray-100"
              strokeWidth="3"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-[#C9A66B]"
              strokeDasharray="98, 100"
              strokeWidth="3.5"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <span className="absolute text-[10px] font-black text-[#111111]">98%</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-[#111111] uppercase tracking-wider">SEO Score</span>
          <span className="text-[9px] text-[#6B7280] font-medium leading-none mt-0.5">Perfect Indexing</span>
        </div>
      </motion.div>

      {/* Floating Card 3: Meta Ads 5.2x ROAS (Top-Right) */}
      <motion.div
        animate={{
          x: mousePos.x * 0.9,
          y: mousePos.y * 0.9 + Math.sin(Date.now() / 1100) * 3.5,
        }}
        className="absolute top-[5%] right-[2%] z-20 w-[150px] xs:w-[170px] p-3 sm:p-4 bg-white/70 backdrop-blur-xl border border-black/[0.04] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col gap-1.5 pointer-events-none hidden xs:flex"
      >
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#1877F2]" />
          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Campaign Metrics</span>
        </div>
        <div className="flex items-baseline justify-between mt-0.5">
          <span className="text-[15px] font-black text-[#111111]">5.2x ROAS</span>
          <span className="text-[9px] font-bold text-green-500 bg-green-50 px-1 py-0.5 rounded">+18% MoM</span>
        </div>
        {/* Tiny Sparkline */}
        <svg className="w-full h-5 text-[#C9A66B]" viewBox="0 0 100 20" fill="none">
          <path
            d="M0,15 Q15,5 30,12 T60,4 T90,14 L100,2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Floating Card 4: Business Growth Chart (Bottom-Right) */}
      <motion.div
        animate={{
          x: mousePos.x * 0.7,
          y: mousePos.y * 0.7 + Math.cos(Date.now() / 1300) * 3,
        }}
        className="absolute bottom-[16%] right-[-4%] z-20 w-[160px] xs:w-[185px] p-3 sm:p-4 bg-white/75 backdrop-blur-xl border border-black/[0.04] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col gap-1 pointer-events-none hidden xs:flex"
      >
        <div className="flex justify-between items-center">
          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Conversion Scaling</span>
          <span className="text-[9px] font-black text-[#C9A66B]">Live</span>
        </div>
        <div className="flex items-baseline gap-1 mt-0.5">
          <span className="text-[14px] font-black text-[#111111]">+240%</span>
          <span className="text-[8px] font-medium text-[#6B7280]">Pipeline Value</span>
        </div>
        {/* SVG line chart showing exponential curve */}
        <svg className="w-full h-8 text-[#111111] mt-1" viewBox="0 0 120 40" fill="none">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C9A66B" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#C9A66B" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,35 C15,35 30,30 45,22 C60,14 75,18 90,8 C105,-2 120,4 120,4"
            stroke="#111111"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M0,35 C15,35 30,30 45,22 C60,14 75,18 90,8 C105,-2 120,4 120,4 L120,40 L0,40 Z"
            fill="url(#chartGrad)"
          />
        </svg>
      </motion.div>

      {/* Main MacBook Composition Container */}
      <motion.div
        animate={{
          x: mousePos.x * 0.3,
          y: mousePos.y * 0.3,
          rotateY: mousePos.x * 0.15,
          rotateX: mousePos.y * -0.15,
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-[90%] sm:w-[95%] max-w-[490px] z-10 transition-transform duration-200 ease-out"
      >
        
        {/* MacBook Screen Bezel & Content */}
        <div className="relative aspect-[16/10] bg-[#0E0E0E] rounded-t-[18px] p-[2.5%] pb-[3.5%] border-t border-x border-white/[0.08] shadow-[inset_0_4px_10px_rgba(255,255,255,0.05),0_30px_70px_rgba(17,17,17,0.15)] flex flex-col items-center justify-center overflow-hidden">
          
          {/* Glass glare effect overlay */}
          <div className="absolute top-0 right-0 w-[50%] h-[150%] bg-gradient-to-tr from-transparent via-white/[0.025] to-transparent rotate-[35deg] origin-top pointer-events-none z-10" />

          {/* Camera slot */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#181818] border border-white/[0.03] flex items-center justify-center">
            <div className="w-0.5 h-0.5 rounded-full bg-[#202840]" />
          </div>

          {/* Actual Screen Content Display (Dashboard slides) */}
          <div className="w-full h-full bg-[#FAF8F4] rounded-[6px] overflow-hidden relative shadow-[inset_0_2px_8px_rgba(0,0,0,0.06)] flex flex-col">
            <AnimatePresence mode="wait">
              {activeTab === 0 && (
                <motion.div
                  key="web-design"
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-[#0B0F17] text-white flex flex-col text-left p-[5%]"
                >
                  {/* Laptop Mock Header */}
                  <div className="flex justify-between items-center border-b border-white/10 pb-1.5 mb-2.5">
                    <span className="text-[9px] font-black tracking-widest text-[#C9A66B] uppercase">DigiMark Studio</span>
                    <div className="flex gap-2.5 text-[8px] font-medium text-gray-400">
                      <span>Showcase</span>
                      <span>Services</span>
                      <span>Journal</span>
                    </div>
                  </div>

                  {/* Laptop Mock Hero Content */}
                  <div className="flex flex-col gap-1.5 mt-1.5">
                    <span className="text-[7px] font-bold text-[#C9A66B] tracking-widest uppercase">Next-Gen Agency</span>
                    <h3 className="text-[14px] xs:text-[18px] font-black leading-tight tracking-tight max-w-[200px] text-white">
                      Bespoke Code. Luxurious Design. Real Growth.
                    </h3>
                    <p className="text-[8px] text-gray-400 leading-normal max-w-[210px]">
                      We curate world-class brand identities and high-fidelity React platforms engineered to drive conversion scaling.
                    </p>
                  </div>

                  {/* Laptop Mock Bento cards inside screen */}
                  <div className="grid grid-cols-2 gap-2 mt-auto">
                    <div className="border border-white/5 bg-white/[0.02] p-2 rounded-lg flex flex-col justify-between">
                      <span className="text-[7px] font-black text-gray-400 uppercase">Interactive UI</span>
                      <div className="w-full h-1 bg-white/10 rounded-full mt-1.5 overflow-hidden">
                        <div className="w-[75%] h-full bg-[#C9A66B]" />
                      </div>
                      <span className="text-[6px] text-gray-500 mt-1">Component Layout</span>
                    </div>
                    <div className="border border-white/5 bg-white/[0.02] p-2 rounded-lg flex flex-col justify-between">
                      <span className="text-[7px] font-black text-[#C9A66B] uppercase">High Performance</span>
                      <span className="text-[10px] font-black mt-1">99.8% Speed Score</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 1 && (
                <motion.div
                  key="seo-dashboard"
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-[#FAF8F4] text-[#111111] flex flex-col text-left p-[5%]"
                >
                  {/* Dashboard Mock Header */}
                  <div className="flex justify-between items-center border-b border-black/[0.05] pb-1.5 mb-2.5">
                    <div className="flex items-center gap-1.5">
                      <Search size={10} className="text-[#C9A66B]" />
                      <span className="text-[9px] font-black uppercase tracking-wider text-[#111111]">SEO Growth Engine</span>
                    </div>
                    <span className="text-[8px] font-bold text-green-600 bg-green-50 px-1 rounded-full border border-green-200">Active</span>
                  </div>

                  {/* Dashboard Metrics */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white border border-black/[0.03] p-1.5 rounded-lg text-center">
                      <span className="text-[6px] font-black uppercase tracking-widest text-[#6B7280]">Organic Traffic</span>
                      <span className="block text-[11px] font-black text-green-600 mt-0.5">+145%</span>
                    </div>
                    <div className="bg-white border border-black/[0.03] p-1.5 rounded-lg text-center">
                      <span className="text-[6px] font-black uppercase tracking-widest text-[#6B7280]">Domain Rank</span>
                      <span className="block text-[11px] font-black text-[#111111] mt-0.5">DR 82</span>
                    </div>
                    <div className="bg-white border border-black/[0.03] p-1.5 rounded-lg text-center">
                      <span className="text-[6px] font-black uppercase tracking-widest text-[#6B7280]">Audit Score</span>
                      <span className="block text-[11px] font-black text-[#C9A66B] mt-0.5">99 / 100</span>
                    </div>
                  </div>

                  {/* SVG line chart representing organic traffic growth */}
                  <div className="bg-white border border-black/[0.03] p-2 rounded-lg mt-2.5 flex-1 flex flex-col">
                    <span className="text-[6px] font-black uppercase tracking-widest text-[#6B7280] mb-1.5">Search Impressions Overview</span>
                    <svg className="w-full flex-1 text-[#C9A66B]" viewBox="0 0 150 40" fill="none">
                      <path
                        d="M0,35 C15,32 30,28 45,24 C60,18 75,20 90,12 C105,5 120,8 135,2 C145,0 150,0 150,0"
                        stroke="#C9A66B"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <circle cx="135" cy="2" r="3" fill="#111111" />
                    </svg>
                  </div>
                </motion.div>
              )}

              {activeTab === 2 && (
                <motion.div
                  key="google-ads"
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-[#0B0F17] text-white flex flex-col text-left p-[5%]"
                >
                  {/* Google Ads Mock Header */}
                  <div className="flex justify-between items-center border-b border-white/10 pb-1.5 mb-2.5">
                    <div className="flex items-center gap-1.5">
                      <TrendingUp size={10} className="text-[#C9A66B]" />
                      <span className="text-[9px] font-black uppercase tracking-wider text-white">CPC & ROAS Tracking</span>
                    </div>
                    <span className="text-[7px] font-bold text-gray-400">Total Leads: +220%</span>
                  </div>

                  {/* Key KPIs */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="bg-white/[0.02] border border-white/5 p-2 rounded-lg flex flex-col justify-between">
                      <span className="text-[7px] font-bold text-gray-400 uppercase tracking-widest">Meta Campaigns</span>
                      <span className="text-[13px] font-black text-white mt-1">4.8x ROAS</span>
                      <p className="text-[6px] text-gray-500 mt-0.5">Average Cost Per Acquisition: -24%</p>
                    </div>
                    <div className="bg-white/[0.02] border border-white/5 p-2 rounded-lg flex flex-col justify-between">
                      <span className="text-[7px] font-bold text-gray-400 uppercase tracking-widest">Google Campaigns</span>
                      <span className="text-[13px] font-black text-[#C9A66B] mt-1">5.2x ROAS</span>
                      <p className="text-[6px] text-gray-500 mt-0.5">High-Intent Traffic Scaling</p>
                    </div>
                  </div>

                  {/* Mini ROI Bar Chart inside the laptop screen */}
                  <div className="bg-white/[0.01] border border-white/5 p-2 rounded-lg mt-2.5 flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[6px] font-bold text-gray-400 uppercase tracking-widest">Month-Over-Month Conversion Value</span>
                      <span className="text-[6px] text-[#C9A66B] font-bold">Scaling Up</span>
                    </div>
                    <div className="flex items-end justify-between gap-1 h-[25px] px-1">
                      {[15, 25, 12, 38, 20, 48, 30, 65, 45, 80].map((val, i) => (
                        <div key={i} className="flex-1 bg-white/10 rounded-sm relative" style={{ height: `${val}%` }}>
                          {i === 9 && <div className="absolute inset-0 bg-[#C9A66B] rounded-sm" />}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 3 && (
                <motion.div
                  key="branding-showcase"
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-[#FAF8F4] text-[#111111] flex flex-col text-left p-[5%]"
                >
                  {/* Branding Guide Mock Header */}
                  <div className="flex justify-between items-center border-b border-black/[0.05] pb-1.5 mb-2">
                    <div className="flex items-center gap-1.5">
                      <Sparkles size={10} className="text-[#C9A66B]" />
                      <span className="text-[9px] font-black uppercase tracking-wider text-[#111111]">Corporate Brand System</span>
                    </div>
                    <span className="text-[7px] font-bold text-gray-400">V1.0.2 Draft</span>
                  </div>

                  {/* Brand Grid */}
                  <div className="flex-1 grid grid-cols-2 gap-2 mt-1">
                    
                    {/* Typo Scale */}
                    <div className="bg-white border border-black/[0.03] p-2 rounded-lg flex flex-col justify-between">
                      <span className="text-[6px] font-black uppercase text-gray-400">Editorial Typography</span>
                      <div className="my-1.5 text-center">
                        <span className="font-serif text-[18px] tracking-tight italic text-[#111111] font-bold">Aa</span>
                        <p className="text-[6px] text-gray-500 mt-0.5">Bespoke Serif Font Spec</p>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <div className="w-[85%] h-1 bg-[#111111]/80 rounded-sm" />
                        <div className="w-[50%] h-0.5 bg-[#111111]/50 rounded-sm" />
                      </div>
                    </div>

                    {/* Color Swatches */}
                    <div className="bg-white border border-black/[0.03] p-2 rounded-lg flex flex-col justify-between">
                      <span className="text-[6px] font-black uppercase text-gray-400">Luxury Palette</span>
                      <div className="flex justify-center gap-1.5 my-1.5">
                        <div className="w-4.5 h-4.5 rounded-full bg-[#111111] border border-black/10 shadow-sm" />
                        <div className="w-4.5 h-4.5 rounded-full bg-[#C9A66B] border border-black/5 shadow-sm" />
                        <div className="w-4.5 h-4.5 rounded-full bg-[#FAF8F4] border border-black/10 shadow-sm" />
                        <div className="w-4.5 h-4.5 rounded-full bg-[#6B7280] border border-black/5 shadow-sm" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <div className="w-[70%] h-1 bg-[#C9A66B]/80 rounded-sm" />
                        <div className="w-[40%] h-0.5 bg-[#C9A66B]/50 rounded-sm" />
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* MacBook Base Keyboard Tray */}
        <div className="relative w-[114%] -left-[7%] h-[15px] bg-[#C5C5C7] rounded-b-[18px] border-b-2 border-[#8E8E93] shadow-[0_25px_50px_rgba(17,17,17,0.18)] flex items-center justify-center">
          {/* Subtle aluminum shine highlight */}
          <div className="absolute inset-x-0 top-0 h-[3px] bg-white/40" />
          
          {/* Display Opening notch */}
          <div className="absolute top-0 w-[14%] h-[4px] bg-[#1a1a1a] rounded-b-[4px]" />
          
          {/* Subtle horizontal keyboard texture shadow */}
          <div className="absolute top-[2px] w-[80%] h-[1px] bg-black/10" />
        </div>

        {/* MacBook Base Trackpad Tray / Bottom shadow */}
        <div className="relative w-[84%] -left-[2%] mx-auto h-[3px] bg-[#979799] rounded-b-[12px] border-b border-black/15 shadow-[0_4px_10px_rgba(0,0,0,0.1)]" />

      </motion.div>

      {/* Manual Controls: Tab Switcher Pills */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-1.5 sm:gap-2.5 mt-8 px-4 relative z-20"
      >
        {SCREENS.map((screen, idx) => {
          const isActive = idx === activeTab;
          return (
            <button
              key={screen.id}
              onClick={() => handleTabClick(idx)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 border focus:outline-none flex items-center gap-1.5 ${
                isActive
                  ? "bg-[#111111] text-[#FAF8F4] border-transparent shadow-sm"
                  : "bg-white/40 backdrop-blur-md text-[#6B7280] border-black/[0.04] hover:bg-white/70 hover:text-[#111111]"
              }`}
            >
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-[#C9A66B]" />
              )}
              {screen.label}
            </button>
          );
        })}
      </motion.div>
      
    </div>
  );
}
