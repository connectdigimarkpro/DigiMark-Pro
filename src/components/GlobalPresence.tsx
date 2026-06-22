"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, ArrowRight, Clock, Star, Zap } from "lucide-react";

// Simplified Custom SVG Flags in circles for crisp rendering without external assets
const USFlag = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10 rounded-full shadow-sm flex-shrink-0 border border-black/[0.04]">
    <defs>
      <clipPath id="us-clip">
        <circle cx="50" cy="50" r="50" />
      </clipPath>
    </defs>
    <g clipPath="url(#us-clip)">
      <rect width="100" height="100" fill="#B22234" />
      {Array.from({ length: 7 }).map((_, idx) => (
        <rect key={idx} y={idx * 15.38} width="100" height="7.69" fill="#FFFFFF" />
      ))}
      <rect width="45" height="50" fill="#3C3B6E" />
      {/* Small grid of stars (represented as white circles for geometric style) */}
      {Array.from({ length: 4 }).map((_, r) =>
        Array.from({ length: 4 }).map((_, c) => (
          <circle key={`${r}-${c}`} cx={9 + c * 9} cy={10 + r * 10} r="1.8" fill="#FFFFFF" />
        ))
      )}
    </g>
  </svg>
);

const UKFlag = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10 rounded-full shadow-sm flex-shrink-0 border border-black/[0.04]">
    <defs>
      <clipPath id="uk-clip">
        <circle cx="50" cy="50" r="50" />
      </clipPath>
    </defs>
    <g clipPath="url(#uk-clip)">
      <rect width="100" height="100" fill="#012169" />
      <path d="M0,0 L100,100 M100,0 L0,100" stroke="#FFFFFF" strokeWidth="12" />
      <path d="M0,0 L100,100 M100,0 L0,100" stroke="#C8102E" strokeWidth="6" />
      <path d="M50,0 L50,100 M0,50 L100,50" stroke="#FFFFFF" strokeWidth="20" />
      <path d="M50,0 L50,100 M0,50 L100,50" stroke="#C8102E" strokeWidth="12" />
    </g>
  </svg>
);

const CAFlag = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10 rounded-full shadow-sm flex-shrink-0 border border-black/[0.04]">
    <defs>
      <clipPath id="ca-clip">
        <circle cx="50" cy="50" r="50" />
      </clipPath>
    </defs>
    <g clipPath="url(#ca-clip)">
      <rect width="25" height="100" fill="#FF0000" />
      <rect x="25" width="50" height="100" fill="#FFFFFF" />
      <rect x="75" width="25" height="100" fill="#FF0000" />
      {/* Maple Leaf */}
      <path d="M50,25 L53,37 L61,34 L58,43 L67,43 L59,51 L62,63 L50,56 L38,63 L41,51 L33,43 L42,43 L39,34 L47,37 Z" fill="#FF0000" />
      <rect x="48.5" y="56" width="3" height="16" fill="#FF0000" />
    </g>
  </svg>
);

const DEFlag = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10 rounded-full shadow-sm flex-shrink-0 border border-black/[0.04]">
    <defs>
      <clipPath id="de-clip">
        <circle cx="50" cy="50" r="50" />
      </clipPath>
    </defs>
    <g clipPath="url(#de-clip)">
      <rect width="100" height="33.3" fill="#000000" />
      <rect y="33.3" width="100" height="33.3" fill="#DD0000" />
      <rect y="66.6" width="100" height="33.4" fill="#FFCC00" />
    </g>
  </svg>
);

const UAEFlag = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10 rounded-full shadow-sm flex-shrink-0 border border-black/[0.04]">
    <defs>
      <clipPath id="ae-clip">
        <circle cx="50" cy="50" r="50" />
      </clipPath>
    </defs>
    <g clipPath="url(#ae-clip)">
      <rect width="25" height="100" fill="#FF0000" />
      <rect x="25" width="75" height="33.3" fill="#00732F" />
      <rect x="25" y="33.3" width="75" height="33.3" fill="#FFFFFF" />
      <rect x="25" y="66.6" width="75" height="33.4" fill="#000000" />
    </g>
  </svg>
);

const INFlag = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10 rounded-full shadow-sm flex-shrink-0 border border-black/[0.04]">
    <defs>
      <clipPath id="in-clip">
        <circle cx="50" cy="50" r="50" />
      </clipPath>
    </defs>
    <g clipPath="url(#in-clip)">
      <rect width="100" height="33.3" fill="#FF9933" />
      <rect y="33.3" width="100" height="33.3" fill="#FFFFFF" />
      <rect y="66.6" width="100" height="33.4" fill="#128807" />
      <circle cx="50" cy="50" r="8" stroke="#000080" strokeWidth="1.2" fill="none" />
      <circle cx="50" cy="50" r="1.5" fill="#000080" />
      <line x1="50" y1="42" x2="50" y2="58" stroke="#000080" strokeWidth="0.6" />
      <line x1="42" y1="50" x2="58" y2="50" stroke="#000080" strokeWidth="0.6" />
      <line x1="44.3" y1="44.3" x2="55.7" y2="55.7" stroke="#000080" strokeWidth="0.6" />
      <line x1="44.3" y1="55.7" x2="55.7" y2="44.3" stroke="#000080" strokeWidth="0.6" />
    </g>
  </svg>
);

const SGFlag = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10 rounded-full shadow-sm flex-shrink-0 border border-black/[0.04]">
    <defs>
      <clipPath id="sg-clip">
        <circle cx="50" cy="50" r="50" />
      </clipPath>
    </defs>
    <g clipPath="url(#sg-clip)">
      <rect width="100" height="50" fill="#EF3340" />
      <rect y="50" width="100" height="50" fill="#FFFFFF" />
      <path d="M22,15 A12,12 0 1,0 36,31 A10,10 0 1,1 22,15 Z" fill="#FFFFFF" />
      <circle cx="34" cy="18" r="1.2" fill="#FFFFFF" />
      <circle cx="38" cy="21" r="1.2" fill="#FFFFFF" />
      <circle cx="36" cy="25" r="1.2" fill="#FFFFFF" />
      <circle cx="31" cy="25" r="1.2" fill="#FFFFFF" />
      <circle cx="30" cy="21" r="1.2" fill="#FFFFFF" />
    </g>
  </svg>
);

const AUFlag = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10 rounded-full shadow-sm flex-shrink-0 border border-black/[0.04]">
    <defs>
      <clipPath id="au-clip">
        <circle cx="50" cy="50" r="50" />
      </clipPath>
    </defs>
    <g clipPath="url(#au-clip)">
      <rect width="100" height="100" fill="#071D49" />
      <g transform="scale(0.45)">
        <rect width="100" height="100" fill="#012169" />
        <path d="M0,0 L100,100 M100,0 L0,100" stroke="#FFFFFF" strokeWidth="12" />
        <path d="M0,0 L100,100 M100,0 L0,100" stroke="#C8102E" strokeWidth="6" />
        <path d="M50,0 L50,100 M0,50 L100,50" stroke="#FFFFFF" strokeWidth="20" />
        <path d="M50,0 L50,100 M0,50 L100,50" stroke="#C8102E" strokeWidth="12" />
      </g>
      {/* Southern Cross & Star */}
      <polygon points="25,65 27,71 33,71 28,75 30,81 25,77 20,81 22,75 17,71 23,71" fill="#FFFFFF" />
      <polygon points="75,20 76,23 79,23 77,25 78,28 75,26 72,28 73,25 71,23 74,23" fill="#FFFFFF" />
      <polygon points="85,38 86,41 89,41 87,43 88,46 85,44 82,46 83,43 81,41 84,41" fill="#FFFFFF" />
      <polygon points="75,60 76,63 79,63 77,65 78,68 75,66 72,68 73,65 71,63 74,63" fill="#FFFFFF" />
      <polygon points="65,42 66,45 69,45 67,47 68,50 65,48 62,50 63,47 61,45 64,45" fill="#FFFFFF" />
    </g>
  </svg>
);

const countries = [
  {
    id: "us",
    name: "United States",
    flag: <USFlag />,
    timezone: "EST / PST (Synchronized Sync)",
    service: "Growth Strategy & Meta Scaling",
    desc: "Deploying high-performance campaigns and custom-engineered web experiences for North American startups and enterprises.",
    coords: { x: 180, y: 160 }
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: <UKFlag />,
    timezone: "GMT / BST Support",
    service: "SEO (GEO) & CRO Architecture",
    desc: "Capturing high-intent search queries and engineering conversion optimization flows targeting UK consumers.",
    coords: { x: 385, y: 130 }
  },
  {
    id: "ca",
    name: "Canada",
    flag: <CAFlag />,
    timezone: "EST / MST Coverage",
    service: "Brand Engineering & Local SEO",
    desc: "Fostering market authority and local search visibility for high-growth e-commerce and retail client segments.",
    coords: { x: 140, y: 110 }
  },
  {
    id: "de",
    name: "Germany & EU",
    flag: <DEFlag />,
    timezone: "CET / CEST Synchronization",
    service: "B2B Lead Pipelines & Analytics",
    desc: "Integrating enterprise-level marketing automation architectures and GDPR-compliant attribution setups.",
    coords: { x: 425, y: 135 }
  },
  {
    id: "ae",
    name: "United Arab Emirates",
    flag: <UAEFlag />,
    timezone: "GST (UTC+4)",
    service: "Luxury Branding & Web Portals",
    desc: "Building ultra-premium digital representations and performance pipelines for real estate and luxury firms in Dubai.",
    coords: { x: 475, y: 220 }
  },
  {
    id: "sg",
    name: "Singapore & APAC",
    flag: <SGFlag />,
    timezone: "SGT (UTC+8)",
    service: "APAC Ads & Chatbot Systems",
    desc: "Scaling omni-channel campaigns across Southeast Asia supported by intelligent customer communication automation.",
    coords: { x: 595, y: 310 }
  },
  {
    id: "au",
    name: "Australia",
    flag: <AUFlag />,
    timezone: "AEST / AWST Coverage",
    service: "Local Growth & Scaling Audits",
    desc: "Optimizing conversion funnels and lead networks to drive pipeline value in the Australian service sector.",
    coords: { x: 710, y: 385 }
  },
  {
    id: "in",
    name: "India Hub",
    flag: <INFlag />,
    timezone: "IST (Operational Center)",
    service: "Development & Creative Base",
    desc: "Our primary office driving high-fidelity React architectures, creative campaigns, and strategic delivery.",
    coords: { x: 525, y: 245 }
  }
];

export default function GlobalPresence() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const centralHub = countries.find(c => c.id === "in")?.coords || { x: 525, y: 245 };

  return (
    <section id="global-reach" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#FAF8F5] relative overflow-hidden border-t border-black/[0.02]">
      {/* Background radial lines / grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#111 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px"
        }}
      />
      
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-4 px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">✦ Global Ecosystem</span>
          <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[#111111]">
            Empowering Brands Worldwide
          </h2>
          <p className="text-[#6B7280] text-sm leading-relaxed">
            Distance is obsolete. We operate as a unified creative force, synchronizing with global timezones to scale ambitious startups and enterprises.
          </p>
        </div>

        {/* Dynamic Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Country Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {countries.map((country) => {
              const isHub = country.id === "in";
              const isHovered = hoveredCountry === country.id;
              
              return (
                <div
                  key={country.id}
                  onMouseEnter={() => setHoveredCountry(country.id)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  className={`bg-white border p-5 rounded-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-pointer group shadow-[0_4px_25px_rgba(0,0,0,0.01)] ${
                    isHovered
                      ? "border-[var(--color-accent)] translate-y-[-2px] shadow-[0_8px_30px_rgba(201,166,107,0.08)]"
                      : "border-black/[0.04] hover:border-black/[0.12]"
                  } ${isHub ? "sm:col-span-2 bg-gradient-to-br from-white to-[#FAF8F5]/30 border-[var(--color-accent)]/20" : ""}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {country.flag}
                        <div>
                          <h3 className="font-sans font-bold text-sm text-[#111111] flex items-center gap-1.5">
                            {country.name}
                            {isHub && (
                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-bold uppercase tracking-wider">
                                Hub
                              </span>
                            )}
                          </h3>
                          <div className="flex items-center gap-1 text-[10px] text-[#6B7280] font-medium mt-0.5">
                            <Clock size={10} className="text-[var(--color-accent)]" />
                            <span>{country.timezone}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-[11px] font-bold text-[var(--color-accent)] uppercase tracking-wider flex items-center gap-1">
                        <Zap size={9} fill="currentColor" />
                        {country.service}
                      </h4>
                      <p className="text-xs text-[#6B7280] leading-relaxed">
                        {country.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-end pt-3 mt-4 border-t border-black/[0.03] text-[10px] font-bold uppercase tracking-wider text-[#111111] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1.5">
                      {isHub ? "Connect with Strategy" : "Target Market Operations"}
                    </span>
                    <ArrowRight size={12} className="transform transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Network SVG Map */}
          <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-square bg-white border border-black/[0.04] rounded-3xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.01)] flex flex-col justify-between overflow-hidden group/map">
            
            {/* Ambient Map Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FAF8F5]/50 via-white to-transparent pointer-events-none" />
            
            <div className="z-10 flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Interactive Network Map</span>
                <h4 className="text-xs font-bold text-[#111111] mt-0.5">Live Delivery Pipelines</h4>
              </div>
              <div className="flex items-center gap-1.5 bg-[#FAF8F5] border border-black/[0.03] px-2 py-1 rounded-full">
                <Globe size={11} className="text-[var(--color-accent)] animate-spin [animation-duration:15s]" />
                <span className="text-[9px] font-black text-[#111111] uppercase tracking-wider">Sync Active</span>
              </div>
            </div>

            {/* Dynamic Map SVG */}
            <div className="relative flex-1 w-full flex items-center justify-center min-h-[220px]">
              <svg viewBox="0 0 800 480" className="w-full h-full text-gray-200">
                {/* Simplified Vector World Map Background Grid lines */}
                <path d="M 50,0 L 50,480 M 150,0 L 150,480 M 250,0 L 250,480 M 350,0 L 350,480 M 450,0 L 450,480 M 550,0 L 550,480 M 650,0 L 650,480 M 750,0 L 750,480" stroke="rgba(17,17,17,0.015)" strokeWidth="1" />
                <path d="M 0,50 L 800,50 M 0,150 L 800,150 M 0,250 L 800,250 M 0,350 L 800,350 M 0,450 L 800,450" stroke="rgba(17,17,17,0.015)" strokeWidth="1" />
                
                {/* Decorative Dotted Landmass shapes for visual premium style */}
                {/* North America */}
                <path d="M 80,80 Q 150,90 190,140 T 220,250 T 150,300" fill="none" stroke="rgba(17,17,17,0.02)" strokeWidth="8" strokeLinecap="round" strokeDasharray="2 12" />
                {/* Europe */}
                <path d="M 370,110 Q 420,90 460,130 T 450,190" fill="none" stroke="rgba(17,17,17,0.02)" strokeWidth="8" strokeLinecap="round" strokeDasharray="2 12" />
                {/* Asia / India */}
                <path d="M 480,180 Q 560,200 630,240 T 600,330 T 520,300" fill="none" stroke="rgba(17,17,17,0.02)" strokeWidth="8" strokeLinecap="round" strokeDasharray="2 12" />
                {/* Australia */}
                <path d="M 660,350 Q 720,380 730,420 T 680,410" fill="none" stroke="rgba(17,17,17,0.02)" strokeWidth="8" strokeLinecap="round" strokeDasharray="2 12" />

                {/* Draw connecting route curves from Hub to other nodes */}
                {countries.map((country) => {
                  if (country.id === "in") return null;
                  
                  const isHovered = hoveredCountry === country.id;
                  
                  // Calculate dynamic control point for Bezier curve (curving upward)
                  const mx = (centralHub.x + country.coords.x) / 2;
                  const my = (centralHub.y + country.coords.y) / 2 - 40;
                  
                  const pathD = `M ${centralHub.x},${centralHub.y} Q ${mx},${my} ${country.coords.x},${country.coords.y}`;
                  
                  return (
                    <g key={`route-${country.id}`}>
                      {/* Glow Shadow Underlay Line */}
                      <motion.path
                        d={pathD}
                        fill="none"
                        stroke={isHovered ? "var(--color-accent)" : "rgba(201,166,107,0.2)"}
                        strokeWidth={isHovered ? 4 : 1.5}
                        strokeOpacity={isHovered ? 0.3 : 0}
                        animate={{ strokeWidth: isHovered ? [4, 8, 4] : 1.5 }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="transition-all duration-300 ease-out"
                      />
                      {/* Actual Pathway Line */}
                      <path
                        d={pathD}
                        fill="none"
                        stroke={isHovered ? "var(--color-accent)" : "rgba(17, 17, 17, 0.08)"}
                        strokeWidth={isHovered ? 2.5 : 1}
                        strokeDasharray={isHovered ? "4 4" : "3 6"}
                        className="transition-all duration-300 ease-out"
                      />
                      {/* Animated Glow Dot moving along path */}
                      <circle r={isHovered ? 4 : 2.5} fill="var(--color-accent)">
                        <animateMotion
                          dur={isHovered ? "2.5s" : "6s"}
                          repeatCount="indefinite"
                          path={pathD}
                        />
                      </circle>
                    </g>
                  );
                })}

                {/* Country Node Marks */}
                {countries.map((country) => {
                  const isHub = country.id === "in";
                  const isHovered = hoveredCountry === country.id;
                  
                  return (
                    <g
                      key={`node-${country.id}`}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredCountry(country.id)}
                      onMouseLeave={() => setHoveredCountry(null)}
                    >
                      {/* Pulse ring for active nodes */}
                      {(isHub || isHovered) && (
                        <circle
                          cx={country.coords.x}
                          cy={country.coords.y}
                          r={isHub ? 18 : 12}
                          fill="none"
                          stroke="var(--color-accent)"
                          strokeWidth="1.5"
                          opacity="0.5"
                        >
                          <animate
                            attributeName="r"
                            values={isHub ? "10;25;10" : "6;18;6"}
                            dur={isHub ? "3s" : "2s"}
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="opacity"
                            values="0.8;0;0.8"
                            dur={isHub ? "3s" : "2s"}
                            repeatCount="indefinite"
                          />
                        </circle>
                      )}
                      
                      {/* Node Center Circle */}
                      <circle
                        cx={country.coords.x}
                        cy={country.coords.y}
                        r={isHub ? 7 : isHovered ? 5.5 : 4.5}
                        fill={isHub ? "var(--color-accent)" : isHovered ? "#111111" : "rgba(17,17,17,0.3)"}
                        stroke="white"
                        strokeWidth={isHovered || isHub ? 2 : 1.5}
                        className="transition-all duration-300 shadow-sm"
                      />

                      {/* Tooltip Labels (visible on hover) */}
                      {(isHovered || isHub) && (
                        <g>
                          <rect
                            x={country.coords.x - 45}
                            y={country.coords.y - 28}
                            width="90"
                            height="18"
                            rx="4"
                            fill="#111111"
                            opacity="0.9"
                          />
                          <text
                            x={country.coords.x}
                            y={country.coords.y - 16}
                            fill="#FFFFFF"
                            fontSize="8"
                            fontWeight="bold"
                            textAnchor="middle"
                            fontFamily="var(--font-sans)"
                          >
                            {country.name}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Hub Legend / Stats */}
            <div className="z-10 bg-[#FAF8F5] border border-black/[0.04] p-3 rounded-2xl flex items-center justify-between gap-4 mt-auto">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                <span className="text-[10px] font-black uppercase text-[#111111] tracking-wider">India HQ</span>
              </div>
              <span className="text-[9px] text-[#6B7280] font-medium leading-none">
                Direct routing connecting all active client portals.
              </span>
            </div>
            
          </div>

        </div>

      </div>
    </section>
  );
}
