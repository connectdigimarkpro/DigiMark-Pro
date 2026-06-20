"use client";

import useIsMobile from "@/components/useIsMobile";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  PhoneCall, 
  Mail, 
  Smartphone, 
  MapPin, 
  Star, 
  Heart, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  TrendingUp, 
  Activity, 
  Building2, 
  ShoppingBag, 
  User, 
  DollarSign, 
  Check, 
  Search, 
  Sparkles,
  UtensilsCrossed,
  Hotel,
  Stethoscope,
  GraduationCap,
  Briefcase,
  ShoppingCart,
  Building,
  Car,
  Bell,
  MessageSquare
} from "lucide-react";
import React, { useState } from "react";

interface Industry {
  title: string;
  desc: string;
  badge: string;
  features: string[];
  themeGradient: string; // Tailwind gradient classes
  accentColor: string;
  accentText: string;
  borderColor: string;
  shadowColor: string;
  svgIcon: React.ReactNode;
  laptopScreen: React.ReactNode;
  phoneScreen: React.ReactNode;
  floatingWidgets: {
    delay: number;
    position: string;
    content: React.ReactNode;
  }[];
}

// Reusable CSS Mockups
function LaptopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-[200px] sm:w-[220px] h-[115px] sm:h-[125px] bg-zinc-800 rounded-t-lg border-2 border-zinc-700 shadow-xl overflow-hidden">
      {/* Screen Frame Bezel */}
      <div className="w-full h-full bg-zinc-950 p-1 flex flex-col justify-between text-[6px]">
        {/* Top Camera Bar */}
        <div className="h-1 w-full bg-zinc-900 flex items-center px-1 justify-between flex-shrink-0">
          <div className="flex space-x-0.5">
            <span className="w-0.5 h-0.5 rounded-full bg-red-500/80" />
            <span className="w-0.5 h-0.5 rounded-full bg-yellow-500/80" />
            <span className="w-0.5 h-0.5 rounded-full bg-green-500/80" />
          </div>
          <div className="w-6 h-[1.5px] bg-zinc-800 rounded" />
          <div className="w-1" />
        </div>
        {/* Screen Content */}
        <div className="flex-1 w-full bg-zinc-900 rounded-[2px] overflow-hidden flex flex-col relative">
          {children}
        </div>
      </div>
      {/* Laptop Base Keyboard */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[220px] sm:w-[240px] h-[5px] bg-zinc-700 rounded-b-md border-t border-zinc-600 shadow-[0_1px_4px_rgba(0,0,0,0.5)]" />
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute bottom-1 right-2 sm:right-4 w-[50px] sm:w-[55px] h-[85px] sm:h-[95px] bg-zinc-900 rounded-lg border-[1.5px] border-zinc-700 shadow-[0_8px_20px_rgba(0,0,0,0.4)] p-[1.5px] flex flex-col z-20 overflow-hidden">
      {/* Phone Notch */}
      <div className="w-5 h-1 bg-zinc-950 rounded-full mx-auto flex-shrink-0" />
      {/* Phone Screen */}
      <div className="flex-1 w-full bg-zinc-950 rounded-sm mt-0.5 overflow-hidden flex flex-col">
        {children}
      </div>
    </div>
  );
}

export default function IndustriesSection() {
  const isMobile = useIsMobile();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Parallax calculations per card
  const [tilt, setTilt] = useState({ x: 0, y: 0, activeIdx: null as number | null });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    if (isMobile) return;
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Smooth 3D tilt angles (capped at max 8 degrees)
    setTilt({
      x: -(y / (box.height / 2)) * 6,
      y: (x / (box.width / 2)) * 6,
      activeIdx: idx
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, activeIdx: null });
    setHoveredIdx(null);
  };

  const industries: Industry[] = [
    {
      title: "Restaurants & Cafés",
      desc: "Local SEO, reservation funnels, reputation acceleration.",
      badge: "Hospitality & Dining",
      accentColor: "#C9A66B",
      accentText: "text-[#C9A66B]",
      borderColor: "hover:border-[#C9A66B]/50",
      shadowColor: "hover:shadow-[0_20px_50px_rgba(107,74,62,0.15)]",
      themeGradient: "from-[#2A1810] via-[#1F100B] to-[#140A07]",
      features: ["Google Maps Rank #1", "Reservation Widget", "Insta Feed Hub"],
      svgIcon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-[#C9A66B] stroke-2 fill-none">
          <circle cx="50" cy="72" r="32" strokeDasharray="4 4" />
          <ellipse cx="50" cy="72" rx="26" ry="6" />
          <path d="M26 62 C26 35, 74 35, 74 62 Z" />
          <circle cx="50" cy="30" r="4" fill="#C9A66B" />
          <path d="M42 20 Q50 12 42 6" strokeWidth="1.5" />
          <path d="M58 20 Q66 12 58 6" strokeWidth="1.5" />
        </svg>
      ),
      laptopScreen: (
        <div className="p-1 flex-1 flex flex-col text-[3px] text-white/95 bg-[#1F140E] select-none h-full justify-between">
          <div className="flex justify-between items-center border-b border-white/5 pb-0.5">
            <span className="font-bold text-[#C9A66B] font-sans scale-75 origin-left">BISTRO LORE</span>
            <div className="flex space-x-1 opacity-70 scale-75">
              <span>Menu</span>
              <span>Reserve</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center text-center py-1">
            <div className="font-bold text-[5px] text-amber-50">Artisanal Culinary Arts</div>
            <div className="text-[2.5px] text-gray-400 mt-0.5">Michelin Star Experience & Fine Wine Pairing</div>
            <div className="mt-1.5 bg-[#C9A66B] text-[#111111] px-1 py-0.5 rounded-[1px] font-bold text-[2.5px] shadow-sm">
              BOOK RESERVATION
            </div>
          </div>
          <div className="border-t border-white/5 pt-0.5 text-[2px] text-gray-500 text-center">
            ★ ★ ★ ★ ★ Rated 4.9 on Google Maps
          </div>
        </div>
      ),
      phoneScreen: (
        <div className="p-1 flex-1 flex flex-col justify-between text-[2.5px] text-white/90 bg-[#160D09] select-none h-full">
          <div className="flex justify-between items-center pb-0.5 border-b border-white/5">
            <span className="font-bold text-[#C9A66B]">Bistro</span>
            <span className="scale-75 text-gray-400">☰</span>
          </div>
          <div className="space-y-1 my-auto">
            <div className="h-4 bg-[#C9A66B]/10 rounded flex flex-col justify-center items-center p-0.5 border border-[#C9A66B]/20">
              <span className="text-[2.2px] text-gray-300">TABLE STATUS</span>
              <span className="text-[3px] text-[#C9A66B] font-bold">CONFIRMED 📅</span>
            </div>
            <div className="text-[2.2px] text-center text-gray-400">Tonight, 7:30 PM • 4 Guests</div>
          </div>
          <div className="bg-[#C9A66B] text-[#111] text-center py-0.5 rounded-sm font-bold text-[2.2px]">
            View Directions
          </div>
        </div>
      ),
      floatingWidgets: [
        {
          delay: 0,
          position: "top-[-5px] left-[5px]",
          content: (
            <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-md border border-[#C9A66B]/20 p-1.5 rounded-lg shadow-md text-[7px] text-[#111] font-bold">
              <MapPin className="w-2.5 h-2.5 text-[#C9A66B] fill-[#C9A66B]/20" />
              <span>Google Maps Rank #1</span>
            </div>
          )
        },
        {
          delay: 0.1,
          position: "top-[15px] right-[5px]",
          content: (
            <div className="flex flex-col bg-black/85 backdrop-blur-md border border-white/10 p-1.5 rounded-lg shadow-md text-[6px] text-white">
              <div className="flex items-center space-x-1 border-b border-white/5 pb-0.5 mb-0.5">
                <svg className="w-2 h-2 text-pink-500 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span className="font-semibold text-gray-300 text-[5.5px]">@bistrolore</span>
              </div>
              <div className="grid grid-cols-3 gap-0.5">
                <div className="w-4 h-4 rounded-sm bg-gradient-to-tr from-[#3E2723] to-[#C9A66B]" />
                <div className="w-4 h-4 rounded-sm bg-[#2A1810]" />
                <div className="w-4 h-4 rounded-sm bg-gradient-to-bl from-[#C9A66B] to-black" />
              </div>
            </div>
          )
        },
        {
          delay: 0.2,
          position: "bottom-[5px] left-[-5px]",
          content: (
            <div className="flex flex-col bg-white/90 backdrop-blur-md border border-black/5 p-1 rounded-lg shadow-sm text-[5.5px] text-[#111]">
              <div className="flex items-center text-amber-500 space-x-0.5">
                <Star className="w-1.5 h-1.5 fill-amber-500" />
                <Star className="w-1.5 h-1.5 fill-amber-500" />
                <Star className="w-1.5 h-1.5 fill-amber-500" />
                <Star className="w-1.5 h-1.5 fill-amber-500" />
                <Star className="w-1.5 h-1.5 fill-amber-500" />
                <span className="text-[#111] font-bold ml-0.5 text-[5px]">5.0</span>
              </div>
              <span className="text-gray-500 scale-90 origin-left">"A masterpiece culinary experience!"</span>
            </div>
          )
        }
      ]
    },
    {
      title: "Hotels & Resorts",
      desc: "Direct booking performance ads, virtual campaigns, brand design.",
      badge: "Luxury Travel",
      accentColor: "#C9A66B",
      accentText: "text-[#C9A66B]",
      borderColor: "hover:border-[#4B5E7D]/50",
      shadowColor: "hover:shadow-[0_20px_50px_rgba(11,21,40,0.2)]",
      themeGradient: "from-[#0F1E36] via-[#0A1424] to-[#040810]",
      features: ["Occupancy +34%", "Direct Booking Ads", "Interactive 3D Virtual Tour"],
      svgIcon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-[#C9A66B] stroke-2 fill-none">
          <rect x="25" y="32" width="50" height="48" rx="2" />
          <path d="M50 32 L50 80" strokeDasharray="3 3" />
          <path d="M45 80 L45 70 C45 67, 55 67, 55 70 L55 80" />
          <path d="M38 18 L40 21 H44 L41 23 L42 27 L38 25 L34 27 L35 23 L32 21 H36 Z" fill="#C9A66B" stroke="none" />
          <path d="M50 12 L52 15 H56 L53 17 L54 21 L50 19 L46 21 L47 17 L44 15 H48 Z" fill="#C9A66B" stroke="none" />
          <path d="M62 18 L64 21 H68 L65 23 L66 27 L62 25 L58 27 L59 23 L56 21 H60 Z" fill="#C9A66B" stroke="none" />
        </svg>
      ),
      laptopScreen: (
        <div className="p-1 flex-1 flex flex-col text-[3px] text-white/95 bg-[#0B1525] select-none h-full justify-between">
          <div className="flex justify-between items-center border-b border-white/5 pb-0.5">
            <span className="font-serif italic text-[#C9A66B] text-[4.5px]">The Grand Haven</span>
            <div className="flex space-x-1.5 opacity-60 scale-75">
              <span>Suites</span>
              <span>Wellness</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-start text-left px-1 mt-1">
            <div className="font-serif italic text-[5.5px] text-amber-50 leading-tight">Elevated Luxury,<br />Timeless Serenity.</div>
            <div className="text-[2.2px] text-gray-400 mt-0.5 max-w-[120px]">Book your direct getaway and save 15% on arrival.</div>
            <div className="mt-1 bg-[#C9A66B] text-black px-1.5 py-0.5 rounded-[1px] font-bold text-[2.5px]">
              EXPLORE ROOMS
            </div>
          </div>
          <div className="flex justify-between items-center border-t border-white/5 pt-0.5 text-[2px] text-gray-500">
            <span>RESORT & SPA</span>
            <span className="text-[#C9A66B]">★★★★★</span>
          </div>
        </div>
      ),
      phoneScreen: (
        <div className="p-1 flex-1 flex flex-col justify-between text-[2.5px] text-white/90 bg-[#070D18] select-none h-full">
          <div className="text-center font-serif text-[4px] border-b border-white/5 pb-0.5 text-[#C9A66B]">
            HAVEN
          </div>
          <div className="space-y-0.5 my-auto">
            <div className="bg-white/5 p-1 rounded border border-white/5">
              <div className="text-[2px] text-gray-400">CHECK-IN DETAILS</div>
              <div className="text-[2.5px] text-white font-bold mt-0.5">June 20 - 25</div>
              <div className="text-[2px] text-[#C9A66B] mt-0.5">2 Adults • 1 Suite</div>
            </div>
          </div>
          <div className="bg-[#C9A66B] text-black text-center py-0.5 rounded-sm font-bold text-[2.2px]">
            Confirm Booking
          </div>
        </div>
      ),
      floatingWidgets: [
        {
          delay: 0.05,
          position: "top-[-5px] left-[-8px]",
          content: (
            <div className="bg-white/95 backdrop-blur-md border border-gray-100 p-1.5 rounded-lg shadow-md text-[6.5px] text-slate-800 font-medium">
              <div className="text-[5px] text-gray-400 font-bold uppercase">RevPAR GROWTH</div>
              <div className="flex items-center space-x-1 text-[#0F766E] font-bold mt-0.5">
                <TrendingUp className="w-2.5 h-2.5" />
                <span>+22% RevPAR</span>
              </div>
            </div>
          )
        },
        {
          delay: 0.15,
          position: "top-[10px] right-[5px]",
          content: (
            <div className="flex flex-col bg-black/85 backdrop-blur-md border border-white/10 p-1.5 rounded-lg shadow-md text-[6px] text-white min-w-[55px]">
              <span className="text-[5px] text-gray-400">DIRECT BOOKINGS</span>
              <div className="flex items-end space-x-0.5 mt-1 h-6">
                <div className="w-1.5 bg-gray-700 h-[30%] rounded-t-sm" />
                <div className="w-1.5 bg-gray-700 h-[45%] rounded-t-sm" />
                <div className="w-1.5 bg-gray-700 h-[60%] rounded-t-sm" />
                <div className="w-1.5 bg-[#C9A66B] h-[95%] rounded-t-sm animate-pulse" />
              </div>
            </div>
          )
        },
        {
          delay: 0.25,
          position: "bottom-[5px] left-[5px]",
          content: (
            <div className="bg-slate-900/90 backdrop-blur-md border border-[#C9A66B]/20 p-1.5 rounded-lg shadow-md text-[6.5px] text-white flex items-center space-x-1">
              <Sparkles className="w-2.5 h-2.5 text-[#C9A66B]" />
              <span className="font-bold text-[#C9A66B]">360° Virtual Tour</span>
            </div>
          )
        }
      ]
    },
    {
      title: "Hospitals & Clinics",
      desc: "Patient acquisition funnels, local health SEO, appointment conversion.",
      badge: "Healthcare & Wellness",
      accentColor: "#0D9488",
      accentText: "text-[#0D9488]",
      borderColor: "hover:border-[#0D9488]/50",
      shadowColor: "hover:shadow-[0_20px_50px_rgba(13,148,136,0.15)]",
      themeGradient: "from-[#082928] via-[#051C1B] to-[#020A0A]",
      features: ["Local Patient SEO #1", "+145 leads / month", "HIPAA Friendly UI"],
      svgIcon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-[#C9A66B] stroke-2 fill-none">
          <path d="M25 24 C45 24, 50 16, 50 16 C50 16, 55 24, 75 24 C75 52, 50 78, 50 78 C50 78, 25 52, 25 24 Z" />
          <path d="M43 36 H57 V50 H71 V64 H57 V78 H43 V64 H29 V50 H43 Z" strokeWidth="1.5" />
          <path d="M12 48 L22 48 L26 38 L31 58 L36 44 L40 48 L88 48" strokeWidth="1" strokeOpacity="0.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      laptopScreen: (
        <div className="p-1 flex-1 flex flex-col text-[3px] text-slate-800 bg-[#F0FDFA] select-none h-full justify-between">
          <div className="flex justify-between items-center border-b border-teal-100 pb-0.5">
            <span className="font-bold text-teal-800 flex items-center gap-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 inline-block" />
              <span>APEX MEDICAL</span>
            </span>
            <div className="flex space-x-1.5 text-teal-600 font-semibold scale-75">
              <span>Doctors</span>
              <span>Services</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center text-center px-2">
            <div className="font-bold text-[5.5px] text-teal-900 leading-snug">Compassionate Care,<br />Advanced Medicine.</div>
            <div className="text-[2.2px] text-teal-600/80 mt-0.5">Schedule online appointments in under 2 minutes.</div>
            <div className="mt-1.5 bg-teal-600 text-white px-2 py-0.5 rounded-[1px] font-bold text-[2.5px] hover:bg-teal-700 shadow-sm">
              BOOK ONLINE
            </div>
          </div>
          <div className="border-t border-teal-100 pt-0.5 text-[2px] text-teal-600 text-center">
            ✔ HIPAA Compliant Platform • Secure Data Encryption
          </div>
        </div>
      ),
      phoneScreen: (
        <div className="p-1 flex-1 flex flex-col justify-between text-[2.5px] text-slate-800 bg-[#F0FDF4] select-none h-full">
          <div className="text-center font-bold text-[4px] border-b border-teal-100 pb-0.5 text-teal-800">
            APEX PORTAL
          </div>
          <div className="space-y-1 my-auto">
            <div className="bg-white p-1 rounded border border-teal-100 shadow-xs">
              <div className="text-[2px] text-gray-400">APPOINTMENT SET</div>
              <div className="text-[2.5px] text-teal-800 font-bold mt-0.5">Dr. Sarah Jenkins</div>
              <div className="text-[2px] text-gray-500">Tomorrow • 10:30 AM</div>
            </div>
          </div>
          <div className="bg-teal-600 text-white text-center py-0.5 rounded-sm font-bold text-[2.2px]">
            Message Doctor
          </div>
        </div>
      ),
      floatingWidgets: [
        {
          delay: 0,
          position: "top-[-5px] left-[-8px]",
          content: (
            <div className="bg-white/95 backdrop-blur-md border border-teal-100 p-1.5 rounded-lg shadow-md text-[6.5px] text-teal-950 font-bold flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-ping" />
              <span>+145 Bookings This Month</span>
            </div>
          )
        },
        {
          delay: 0.1,
          position: "top-[15px] right-[5px]",
          content: (
            <div className="bg-white/95 backdrop-blur-md border border-teal-100 p-1.5 rounded-lg shadow-md text-[6px] text-teal-950 min-w-[55px] space-y-1">
              <span className="text-[5px] text-gray-400 font-bold uppercase">PATIENT METRICS</span>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Leads</span>
                <span className="font-extrabold text-teal-600">+48%</span>
              </div>
            </div>
          )
        },
        {
          delay: 0.2,
          position: "bottom-[5px] left-[5px]",
          content: (
            <div className="bg-teal-950/95 border border-teal-800 p-1.5 rounded-lg shadow-md text-[6px] text-white flex items-center space-x-1">
              <CheckCircle2 className="w-2.5 h-2.5 text-teal-400" />
              <span className="font-medium">#1 Local Clinic SEO</span>
            </div>
          )
        }
      ]
    },
    {
      title: "Schools & Education",
      desc: "Enrollment campaigns, academic brand authority, inquiry portals.",
      badge: "Education & Academics",
      accentColor: "#C9A66B",
      accentText: "text-[#C9A66B]",
      borderColor: "hover:border-[#991B1B]/50",
      shadowColor: "hover:shadow-[0_20px_50px_rgba(153,27,27,0.15)]",
      themeGradient: "from-[#2A080C] via-[#1E0508] to-[#0F0204]",
      features: ["Enrollment Rate +38%", "Admissions Portal UI", "Authority SEO rank"],
      svgIcon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-[#C9A66B] stroke-2 fill-none">
          <polygon points="50,18 86,34 50,50 14,34" />
          <path d="M26,43 V64 C26,70, 50,76, 50,76 C50,76, 74,70, 74,64 V43" />
          <path d="M86,34 V54 L82,60" strokeWidth="2.5" />
          <path d="M30,62 C40,58, 50,62, 50,62 C50,62, 60,58, 70,62" strokeWidth="2" />
        </svg>
      ),
      laptopScreen: (
        <div className="p-1 flex-1 flex flex-col text-[3px] text-white/95 bg-[#250406] select-none h-full justify-between">
          <div className="flex justify-between items-center border-b border-white/5 pb-0.5">
            <span className="font-bold text-[#C9A66B] scale-75 origin-left">OAKRIDGE ACADEMY</span>
            <div className="flex space-x-1.5 opacity-60 scale-75">
              <span>Portal</span>
              <span>Events</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center text-center px-1">
            <div className="font-serif text-[6px] text-amber-50">Shaping Tomorrow's Leaders</div>
            <div className="text-[2.2px] text-gray-400 mt-0.5">Admissions open for autumn term 2026.</div>
            <div className="mt-1.5 bg-[#C9A66B] text-black px-1.5 py-0.5 rounded-[1px] font-bold text-[2.5px] shadow-sm">
              APPLY ONLINE
            </div>
          </div>
          <div className="border-t border-white/5 pt-0.5 text-[2px] text-gray-500 text-center">
            ★ Top Ranked Academic Institute in the Region
          </div>
        </div>
      ),
      phoneScreen: (
        <div className="p-1 flex-1 flex flex-col justify-between text-[2.5px] text-white/90 bg-[#160203] select-none h-full">
          <div className="text-center font-bold text-[4px] border-b border-white/5 pb-0.5 text-[#C9A66B]">
            CAMPUS HUB
          </div>
          <div className="space-y-1 my-auto">
            <div className="bg-white/5 p-1 rounded border border-white/5">
              <div className="text-[2px] text-[#C9A66B]">NEXT EVENT</div>
              <div className="text-[2.5px] text-white font-bold mt-0.5">Campus Open Day</div>
              <div className="text-[2px] text-gray-400">July 15 • 10 AM</div>
            </div>
          </div>
          <div className="bg-[#C9A66B] text-black text-center py-0.5 rounded-sm font-bold text-[2.2px]">
            Schedule Visit
          </div>
        </div>
      ),
      floatingWidgets: [
        {
          delay: 0.05,
          position: "top-[-5px] left-[-8px]",
          content: (
            <div className="bg-white/95 backdrop-blur-md border border-red-100 p-1.5 rounded-lg shadow-md text-[6.5px] text-[#111] font-bold flex items-center space-x-1">
              <GraduationCap className="w-2.5 h-2.5 text-[#C9A66B]" />
              <span>Admissions Rate +38%</span>
            </div>
          )
        },
        {
          delay: 0.15,
          position: "top-[10px] right-[5px]",
          content: (
            <div className="bg-black/85 backdrop-blur-md border border-white/10 p-1.5 rounded-lg shadow-md text-[6px] text-white min-w-[60px] space-y-1">
              <span className="text-[5px] text-gray-400 uppercase">ENQUIRY PIPELINE</span>
              <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                <div className="bg-[#C9A66B] w-[82%] h-full" />
              </div>
              <span className="text-[5px] text-[#C9A66B] font-bold">82% Verified Lead Qualified</span>
            </div>
          )
        },
        {
          delay: 0.25,
          position: "bottom-[5px] left-[5px]",
          content: (
            <div className="bg-[#2A080C] border border-[#C9A66B]/20 p-1.5 rounded-lg shadow-md text-[6px] text-white flex items-center space-x-1">
              <Calendar className="w-2 h-2 text-[#C9A66B]" />
              <span>Open House: 15 July</span>
            </div>
          )
        }
      ]
    },
    {
      title: "Corporate Businesses",
      desc: "Corporate UX redesigns, high-intent SEO, enterprise lead generation.",
      badge: "B2B & Enterprise",
      accentColor: "#C9A66B",
      accentText: "text-[#C9A66B]",
      borderColor: "hover:border-[#4B5563]/50",
      shadowColor: "hover:shadow-[0_20px_50px_rgba(31,41,55,0.2)]",
      themeGradient: "from-[#1F2937] via-[#111827] to-[#030712]",
      features: ["YoY Growth +28%", "High-Intent SEO Keywords", "Enterprise CRM Integrations"],
      svgIcon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-[#C9A66B] stroke-2 fill-none">
          <rect x="22" y="28" width="22" height="52" rx="2" />
          <rect x="48" y="16" width="24" height="64" rx="2" />
          <line x1="30" y1="38" x2="36" y2="38" strokeOpacity="0.4" />
          <line x1="30" y1="48" x2="36" y2="48" strokeOpacity="0.4" />
          <line x1="30" y1="58" x2="36" y2="58" strokeOpacity="0.4" />
          <line x1="56" y1="26" x2="64" y2="26" stroke="#C9A66B" />
          <line x1="56" y1="36" x2="64" y2="36" strokeOpacity="0.4" />
          <line x1="56" y1="46" x2="64" y2="46" strokeOpacity="0.4" />
          <line x1="56" y1="56" x2="64" y2="56" strokeOpacity="0.4" />
          <path d="M12 70 L32 52 L54 62 L82 34" stroke="#C9A66B" strokeWidth="2.5" />
          <circle cx="82" cy="34" r="3.5" fill="#C9A66B" stroke="none" />
        </svg>
      ),
      laptopScreen: (
        <div className="p-1 flex-1 flex flex-col text-[3px] text-white/95 bg-[#121824] select-none h-full justify-between">
          <div className="flex justify-between items-center border-b border-white/5 pb-0.5">
            <span className="font-black text-[#C9A66B] tracking-tight scale-75 origin-left">VERTEX CORP</span>
            <div className="flex space-x-1.5 opacity-60 scale-75">
              <span>Solutions</span>
              <span>Case Studies</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-start text-left px-1 mt-1">
            <div className="font-bold text-[6px] text-white">Scale Enterprise Operations.</div>
            <div className="text-[2.2px] text-gray-400 mt-0.5 max-w-[130px]">Integrated cloud systems, premium B2B branding & strategy.</div>
            <div className="mt-1 bg-[#C9A66B] text-black px-1.5 py-0.5 rounded-[1px] font-bold text-[2.5px]">
              TALK TO AN EXPERT
            </div>
          </div>
          <div className="border-t border-white/5 pt-0.5 text-[2px] text-gray-500 text-center">
            Leading B2B Enterprises to Market Prominence
          </div>
        </div>
      ),
      phoneScreen: (
        <div className="p-1 flex-1 flex flex-col justify-between text-[2.5px] text-white/90 bg-[#0A0D14] select-none h-full">
          <div className="text-center font-black tracking-wider text-[3.5px] border-b border-white/5 pb-0.5 text-[#C9A66B]">
            KPI PORTAL
          </div>
          <div className="space-y-0.5 my-auto">
            <div className="bg-white/5 p-1 rounded border border-white/5 text-center">
              <span className="text-[1.8px] text-gray-400 block uppercase">MONTHLY SALES</span>
              <span className="text-[3px] text-emerald-400 font-bold block mt-0.5">+32% Q2 GROWTH</span>
            </div>
          </div>
          <div className="bg-[#C9A66B] text-black text-center py-0.5 rounded-sm font-bold text-[2.2px]">
            Open Analytics
          </div>
        </div>
      ),
      floatingWidgets: [
        {
          delay: 0,
          position: "top-[-5px] left-[-8px]",
          content: (
            <div className="bg-white/95 backdrop-blur-md border border-gray-200 p-1.5 rounded-lg shadow-md text-[6.5px] text-slate-900 font-bold flex items-center space-x-1">
              <DollarSign className="w-2.5 h-2.5 text-emerald-600" />
              <span>Revenue: $485k (+28%)</span>
            </div>
          )
        },
        {
          delay: 0.1,
          position: "top-[15px] right-[5px]",
          content: (
            <div className="bg-black/85 border border-white/10 p-1.5 rounded-lg shadow-md text-[6px] text-white min-w-[50px] space-y-1">
              <span className="text-[5px] text-gray-400 font-bold uppercase">MARKET POSITION</span>
              <span className="text-emerald-400 font-bold block text-[5.5px]">▲ 12 Key SEO Rank #1</span>
            </div>
          )
        },
        {
          delay: 0.2,
          position: "bottom-[5px] left-[5px]",
          content: (
            <div className="bg-[#121824] border border-[#C9A66B]/20 p-1 rounded-lg shadow-md text-[5.5px] text-white">
              <div className="flex items-center space-x-1">
                <Check className="w-2 h-2 text-[#C9A66B]" />
                <span>CRM Connected</span>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "E-commerce Stores",
      desc: "Cart abandonment automation, paid catalog ads, conversion optimization.",
      badge: "Retail & E-comm",
      accentColor: "#A855F7",
      accentText: "text-[#A855F7]",
      borderColor: "hover:border-[#A855F7]/50",
      shadowColor: "hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]",
      themeGradient: "from-[#200A38] via-[#120521] to-[#06010D]",
      features: ["Conversion Rate +2.4%", "Cart Recovery System", "Paid Catalog Campaigns"],
      svgIcon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-[#C9A66B] stroke-2 fill-none">
          <path d="M16 28 H26 L36 64 H76 L86 36 H31" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="41" cy="74" r="6" />
          <circle cx="71" cy="74" r="6" />
          <path d="M41 50 L53 38 L65 44 L77 28" stroke="#C9A66B" strokeWidth="2" strokeLinecap="round" />
          <polygon points="77,28 72,32 75,27" fill="#C9A66B" stroke="none" />
        </svg>
      ),
      laptopScreen: (
        <div className="p-1 flex-1 flex flex-col text-[3px] text-white/95 bg-[#170B22] select-none h-full justify-between">
          <div className="flex justify-between items-center border-b border-white/5 pb-0.5">
            <span className="font-bold tracking-widest text-[#C9A66B] scale-75 origin-left">VELVET</span>
            <div className="flex space-x-2 opacity-70 scale-75">
              <span>Catalog</span>
              <ShoppingCart className="w-2 h-2 text-white" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1 my-1 flex-1 items-center">
            <div className="bg-white/5 rounded p-0.5 border border-white/5 flex flex-col items-center">
              <div className="w-4 h-4 bg-gradient-to-tr from-[#A855F7] to-[#C9A66B] rounded-sm" />
              <span className="text-[2px] text-gray-300 mt-0.5">$120</span>
            </div>
            <div className="bg-white/5 rounded p-0.5 border border-white/5 flex flex-col items-center">
              <div className="w-4 h-4 bg-gray-800 rounded-sm" />
              <span className="text-[2px] text-gray-300 mt-0.5">$85</span>
            </div>
            <div className="bg-white/5 rounded p-0.5 border border-white/5 flex flex-col items-center">
              <div className="w-4 h-4 bg-gradient-to-bl from-[#C9A66B] to-[#120521] rounded-sm" />
              <span className="text-[2px] text-gray-300 mt-0.5">$210</span>
            </div>
          </div>
          <div className="bg-[#C9A66B] text-black text-center py-0.5 rounded-[1px] font-bold text-[2.5px] uppercase">
            Checkout Now • Free Delivery
          </div>
        </div>
      ),
      phoneScreen: (
        <div className="p-1 flex-1 flex flex-col justify-between text-[2.5px] text-white/90 bg-[#0B0411] select-none h-full">
          <div className="flex justify-between items-center border-b border-white/5 pb-0.5">
            <span className="font-bold">VELVET</span>
            <span className="text-purple-400 font-bold">🛒 2</span>
          </div>
          <div className="space-y-0.5 my-auto">
            <div className="bg-white/5 p-1 rounded border border-white/5 text-[2px]">
              <div className="flex justify-between">
                <span>Luxury Watch</span>
                <span>$210</span>
              </div>
              <div className="text-emerald-400 mt-0.5">Discount Applied -10%</div>
            </div>
          </div>
          <div className="bg-[#C9A66B] text-black text-center py-0.5 rounded-sm font-bold text-[2.2px]">
            Swipe to Buy
          </div>
        </div>
      ),
      floatingWidgets: [
        {
          delay: 0,
          position: "top-[-5px] left-[-8px]",
          content: (
            <div className="bg-white/95 backdrop-blur-md border border-purple-100 p-1.5 rounded-lg shadow-md text-[6.5px] text-[#111] font-bold flex items-center space-x-1">
              <TrendingUp className="w-2.5 h-2.5 text-purple-600" />
              <span>Conversion: +2.4%</span>
            </div>
          )
        },
        {
          delay: 0.1,
          position: "top-[15px] right-[5px]",
          content: (
            <div className="bg-purple-950 border border-purple-800 p-1.5 rounded-lg shadow-md text-[6px] text-white min-w-[55px] space-y-0.5">
              <span className="text-[4.5px] text-purple-300 block uppercase">CART RECOVERY</span>
              <span className="font-bold text-emerald-400 block text-[5.5px]">+18% Revenue Saved</span>
            </div>
          )
        },
        {
          delay: 0.2,
          position: "bottom-[5px] left-[5px]",
          content: (
            <div className="bg-black/90 border border-[#C9A66B]/20 p-1 rounded-lg shadow-md text-[5.5px] text-white">
              <span>Order: $240 from Tokyo! ⚡</span>
            </div>
          )
        }
      ]
    },
    {
      title: "Real Estate",
      desc: "Buyer lead gen funnels, Google display targeted ads, interactive map systems.",
      badge: "Real Estate & Housing",
      accentColor: "#059669",
      accentText: "text-[#059669]",
      borderColor: "hover:border-[#059669]/50",
      shadowColor: "hover:shadow-[0_20px_50px_rgba(5,150,105,0.15)]",
      themeGradient: "from-[#022C22] via-[#011C15] to-[#000A08]",
      features: ["Premium Leads +45%", "Google Display Targeting", "Interactive Maps & Pins"],
      svgIcon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-[#C9A66B] stroke-2 fill-none">
          <path d="M16 78 V42 L50 20 L84 42 V78 Z" />
          <path d="M12 45 L50 16 L88 45" strokeWidth="2.5" />
          <rect x="40" y="56" width="20" height="22" rx="1" />
          <rect x="28" y="38" width="12" height="12" rx="1" />
          <rect x="60" y="38" width="12" height="12" rx="1" />
          <path d="M72 16 C66 16, 62 20, 62 26 C62 34, 72 43, 72 43 C72 43, 82 34, 82 26 C82 20, 78 16, 72 16 Z" />
          <circle cx="72" cy="26" r="3" fill="#C9A66B" stroke="none" />
        </svg>
      ),
      laptopScreen: (
        <div className="p-1 flex-1 flex flex-col text-[3px] text-white/95 bg-[#051813] select-none h-full justify-between">
          <div className="flex justify-between items-center border-b border-white/5 pb-0.5">
            <span className="font-bold text-[#C9A66B] scale-75 origin-left">ROYAL ESTATE</span>
            <div className="flex space-x-1.5 opacity-65 scale-75">
              <span>Listings</span>
              <span>Contact</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center text-center px-1">
            <div className="font-serif text-[6px] text-amber-50">Discover Luxury Living</div>
            <div className="text-[2.2px] text-gray-400 mt-0.5">Curated penthouses, estates, and private islands.</div>
            <div className="mt-1.5 bg-[#C9A66B] text-black px-1.5 py-0.5 rounded-[1px] font-bold text-[2.5px] shadow-sm">
              SCHEDULE PRIVATE TOUR
            </div>
          </div>
          <div className="border-t border-white/5 pt-0.5 text-[2px] text-gray-500 text-center">
            ★ Real Estate Elite Solutions • Secure Direct Lead Forms
          </div>
        </div>
      ),
      phoneScreen: (
        <div className="p-1 flex-1 flex flex-col justify-between text-[2.5px] text-white/90 bg-[#011410] select-none h-full">
          <div className="text-center font-serif text-[4px] border-b border-white/5 pb-0.5 text-[#C9A66B]">
            ROYALPORTAL
          </div>
          <div className="space-y-1 my-auto">
            <div className="bg-white/5 p-1 rounded border border-white/5">
              <div className="text-[2px] text-[#C9A66B]">MAP SELECTOR</div>
              <div className="text-[2.5px] text-white font-bold mt-0.5">3 BHK Hills Villa</div>
              <div className="text-[2px] text-gray-400">Emerald Hills • $2.4M</div>
            </div>
          </div>
          <div className="bg-[#C9A66B] text-black text-center py-0.5 rounded-sm font-bold text-[2.2px]">
            Schedule Call
          </div>
        </div>
      ),
      floatingWidgets: [
        {
          delay: 0,
          position: "top-[-5px] left-[-8px]",
          content: (
            <div className="bg-white/95 backdrop-blur-md border border-emerald-100 p-1.5 rounded-lg shadow-md text-[6.5px] text-[#111] font-bold flex items-center space-x-1">
              <MapPin className="w-2.5 h-2.5 text-emerald-600" />
              <span>Villa Pin Drop Configured</span>
            </div>
          )
        },
        {
          delay: 0.1,
          position: "top-[15px] right-[5px]",
          content: (
            <div className="bg-emerald-950 border border-emerald-800 p-1.5 rounded-lg shadow-md text-[6px] text-white min-w-[55px] space-y-0.5">
              <span className="text-[4.5px] text-emerald-300 block uppercase">LEAD TARGET</span>
              <span className="font-bold text-[#C9A66B] block text-[5.5px]">Leads +45% YoY Growth</span>
            </div>
          )
        },
        {
          delay: 0.2,
          position: "bottom-[5px] left-[5px]",
          content: (
            <div className="bg-[#022C22] border border-[#C9A66B]/20 p-1.5 rounded-lg shadow-md text-[6px] text-white flex items-center space-x-1">
              <CheckCircle2 className="w-2.5 h-2.5 text-[#C9A66B]" />
              <span>Agent Alert Set</span>
            </div>
          )
        }
      ]
    },
    {
      title: "Automobile & Service",
      desc: "Hyperlocal booking schedulers, automotive trackers, WhatsApp triggers.",
      badge: "Automobile & Repair",
      accentColor: "#EA580C",
      accentText: "text-[#EA580C]",
      borderColor: "hover:border-[#EA580C]/50",
      shadowColor: "hover:shadow-[0_20px_50px_rgba(234,88,12,0.15)]",
      themeGradient: "from-[#2A1009] via-[#1E0B06] to-[#0F0503]",
      features: ["Scheduler Bookings x3", "Vehicle Status Tracker", "WhatsApp Leads Hub"],
      svgIcon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-[#C9A66B] stroke-2 fill-none">
          <path d="M12,62 C12,62 18,52 28,50 C38,48 45,38 58,38 C70,38 85,45 88,58 C90,66 82,68 82,68 H12 Z" strokeLinejoin="round" />
          <circle cx="28" cy="68" r="8" />
          <circle cx="70" cy="68" r="8" />
          <line x1="28" y1="60" x2="28" y2="76" stroke="#C9A66B" />
          <line x1="20" y1="68" x2="36" y2="68" stroke="#C9A66B" />
          <line x1="70" y1="60" x2="70" y2="76" stroke="#C9A66B" />
          <line x1="62" y1="68" x2="78" y2="68" stroke="#C9A66B" />
          <path d="M50,22 C38,22 32,30 32,30" strokeOpacity="0.4" />
          <path d="M50,22 C62,22 68,30 68,30" stroke="#C9A66B" />
          <line x1="50" y1="30" x2="56" y2="24" stroke="#C9A66B" strokeWidth="2.5" />
        </svg>
      ),
      laptopScreen: (
        <div className="p-1 flex-1 flex flex-col text-[3px] text-white/95 bg-[#1C0D0A] select-none h-full justify-between">
          <div className="flex justify-between items-center border-b border-white/5 pb-0.5">
            <span className="font-bold text-[#C9A66B] scale-75 origin-left">APEX AUTO</span>
            <div className="flex space-x-1.5 opacity-65 scale-75">
              <span>Services</span>
              <span>Tracker</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center text-center px-1">
            <div className="font-bold text-[5.5px] text-amber-50 leading-snug">Elite Mechanical Care & Diagnostics</div>
            <div className="text-[2.2px] text-gray-400 mt-0.5">Live service dashboard, booking online in seconds.</div>
            <div className="mt-1.5 bg-[#C9A66B] text-black px-1.5 py-0.5 rounded-[1px] font-bold text-[2.5px] shadow-sm">
              BOOK SERVICE SLOT
            </div>
          </div>
          <div className="border-t border-white/5 pt-0.5 text-[2px] text-gray-500 text-center">
            ★ Instant WhatsApp Booking Confirmation Set
          </div>
        </div>
      ),
      phoneScreen: (
        <div className="p-1 flex-1 flex flex-col justify-between text-[2.5px] text-white/90 bg-[#0F0604] select-none h-full">
          <div className="text-center font-bold text-[3.5px] border-b border-white/5 pb-0.5 text-[#C9A66B]">
            SERVICE HUB
          </div>
          <div className="space-y-1 my-auto">
            <div className="bg-white/5 p-1 rounded border border-white/5">
              <div className="text-[1.8px] text-gray-400">VEHICLE TRACKER</div>
              <div className="text-[2.2px] text-white font-bold mt-0.5">Diagnostics: COMPLETE ✔</div>
              <div className="text-[2.2px] text-[#C9A66B]">Oil Change: IN PROGRESS ⏳</div>
            </div>
          </div>
          <div className="bg-[#C9A66B] text-black text-center py-0.5 rounded-sm font-bold text-[2.2px]">
            Message Advisor
          </div>
        </div>
      ),
      floatingWidgets: [
        {
          delay: 0,
          position: "top-[-5px] left-[-8px]",
          content: (
            <div className="bg-white/95 backdrop-blur-md border border-orange-100 p-1.5 rounded-lg shadow-md text-[6.5px] text-[#111] font-bold flex items-center space-x-1">
              <Clock className="w-2.5 h-2.5 text-orange-600 animate-pulse" />
              <span>Real-Time Slot Bookings x3</span>
            </div>
          )
        },
        {
          delay: 0.1,
          position: "top-[15px] right-[5px]",
          content: (
            <div className="bg-orange-950 border border-orange-800 p-1.5 rounded-lg shadow-md text-[6px] text-white min-w-[55px] space-y-0.5">
              <span className="text-[4.5px] text-orange-300 block uppercase">WHATSAPP SYNC</span>
              <span className="font-bold text-emerald-400 block text-[5.5px]">Leads Auto-Routed</span>
            </div>
          )
        },
        {
          delay: 0.2,
          position: "bottom-[5px] left-[5px]",
          content: (
            <div className="bg-black/90 border border-[#C9A66B]/20 p-1 rounded-lg shadow-md text-[5.5px] text-white">
              <span>Rating: 4.9★ Local SEO Apex</span>
            </div>
          )
        }
      ]
    }
  ];

  return (
    <section id="industries" className="py-24 md:py-32 bg-[#FAF8F4] relative overflow-hidden border-t border-black/[0.03]">
      {/* Editorial subtle light gradients */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-amber-500/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[40rem] h-[40rem] bg-[#C9A66B]/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-20">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0 : 0.5 }}
            className="inline-flex items-center space-x-2 bg-[#C9A66B]/8 px-4 py-1.5 rounded-full border border-[#C9A66B]/15"
          >
            <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#C9A66B] font-sans">
              ✦ Industries We Empower
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0 : 0.6, delay: isMobile ? 0 : 0.1 }}
            className="font-sans text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#111111] leading-none"
          >
            Digital Solutions Tailored For Every Industry
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0 : 0.6, delay: isMobile ? 0 : 0.2 }}
            className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-sans font-medium"
          >
            Every industry has unique challenges. We create custom websites, branding, SEO, automation, and marketing strategies designed specifically for your business goals.
          </motion.p>
        </div>

        {/* 8 Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            const currentTiltX = tilt.activeIdx === idx ? tilt.x : 0;
            const currentTiltY = tilt.activeIdx === idx ? tilt.y : 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: isMobile ? 0 : 0.6, delay: isMobile ? 0 : idx * 0.05 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseMove={(e) => handleMouseMove(e, idx)}
                onMouseLeave={handleMouseLeave}
                className={`group bg-white border border-black/[0.04] p-6 md:p-8 rounded-[20px] h-[480px] sm:h-[500px] flex flex-col justify-between hover:border-[#C9A66B]/50 transition-all duration-500 relative overflow-hidden ${item.shadowColor}`}
                style={{
                  perspective: 1000,
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Background transition color/gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${item.themeGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0`}
                />

                {/* Animated soft gradient mesh ring on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A66B]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                {/* Grid card content */}
                <div className="relative z-10 flex flex-col h-full justify-between pointer-events-none">
                  
                  {/* Top Header details */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <span className={`text-[9px] font-extrabold tracking-widest uppercase transition-colors duration-500 ${isHovered ? "text-[#C9A66B]" : "text-gray-400"}`}>
                        {item.badge}
                      </span>
                      <ArrowUpRight className={`w-4 h-4 transition-all duration-500 ${isHovered ? "text-[#C9A66B] translate-x-0.5 -translate-y-0.5" : "text-gray-400"}`} />
                    </div>
                    <div className="space-y-1">
                      <h3 className={`font-sans font-bold text-xl transition-colors duration-500 ${isHovered ? "text-white" : "text-[#111111]"}`}>
                        {item.title}
                      </h3>
                      <p className={`text-xs leading-relaxed transition-colors duration-500 ${isHovered ? "text-gray-300" : "text-gray-500"}`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Mid Illustration container -> transitions into immersive previews on hover */}
                  <div 
                    className="relative w-full h-[180px] sm:h-[200px] flex items-center justify-center overflow-visible my-4"
                    style={{
                      transform: isMobile 
                        ? "none" 
                        : `rotateX(${currentTiltX}deg) rotateY(${currentTiltY}deg) translateZ(15px)`,
                      transition: isHovered ? "none" : "transform 0.5s ease"
                    }}
                  >
                    {/* Default line illustration */}
                    <motion.div
                      animate={{
                        opacity: isHovered ? 0 : 1,
                        y: isHovered ? -20 : 0,
                        scale: isHovered ? 0.95 : 1
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-24 h-24 rounded-[20px] bg-[#FAF8F5] border border-black/[0.02] flex items-center justify-center group-hover:bg-[#C9A66B]/5 transition-colors duration-300">
                        {item.svgIcon}
                      </div>
                    </motion.div>

                    {/* Immersive Case Study Preview Elements */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 30, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 30, scale: 0.9 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute inset-0 flex flex-col justify-end w-full select-none"
                        >
                          {/* Laptop Preview Frame */}
                          <div 
                            className="relative w-full"
                            style={{
                              transform: isMobile ? "none" : "translateZ(10px)"
                            }}
                          >
                            <LaptopFrame>
                              {item.laptopScreen}
                            </LaptopFrame>

                            {/* Phone Mockup Frame overlapping laptop */}
                            <PhoneFrame>
                              {item.phoneScreen}
                            </PhoneFrame>

                            {/* Floating Micro-Widgets */}
                            {item.floatingWidgets.map((widget, wIdx) => (
                              <motion.div
                                key={wIdx}
                                custom={wIdx}
                                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                  delay: widget.delay,
                                  duration: 0.4,
                                  ease: [0.16, 1, 0.3, 1]
                                }}
                                className={`absolute ${widget.position} z-30 shadow-lg`}
                                style={{
                                  transform: isMobile ? "none" : `translateZ(${(wIdx + 1) * 15}px)`
                                }}
                              >
                                {widget.content}
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Bottom features / CTA */}
                  <div className="relative w-full h-[32px] overflow-hidden flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      {!isHovered ? (
                        <motion.div
                          key="features"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full flex justify-between items-center border-t border-black/[0.04] pt-2"
                        >
                          <div className="flex flex-wrap gap-1 md:gap-1.5 w-full justify-between items-center">
                            {item.features.slice(0, 2).map((feat, fIdx) => (
                              <div key={fIdx} className="flex items-center space-x-1 text-slate-800">
                                <span className="w-1 h-1 rounded-full bg-[#C9A66B]" />
                                <span className="text-[8px] font-black uppercase tracking-wider text-gray-500">{feat}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      ) : (
                        <motion.a
                          href="#contact"
                          key="cta"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="w-full inline-flex items-center justify-between bg-[#C9A66B] text-black px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md hover:bg-white hover:text-black transition-colors duration-300"
                        >
                          <span>View Industry Strategy</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </motion.a>
                      )}
                    </AnimatePresence>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0 : 0.7 }}
          className="relative rounded-3xl bg-[#111111] p-8 md:p-16 overflow-hidden text-center shadow-2xl border border-white/[0.04]"
        >
          {/* Subtle Background Glow Rings */}
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full border border-[#C9A66B]/10 opacity-30 pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full border border-white/5 opacity-30 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#C9A66B]/10 via-transparent to-transparent opacity-40 pointer-events-none blur-3xl" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="inline-flex items-center gap-1.5 bg-[#C9A66B]/10 px-4 py-1.5 rounded-full border border-[#C9A66B]/20 text-[10px] font-bold uppercase tracking-widest text-[#C9A66B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A66B] animate-pulse" />
              <span>Boost Your Conversions</span>
            </span>

            <h3 className="font-sans text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Ready to Grow Your Business?
            </h3>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Let&apos;s create a custom marketing strategy for your industry.
            </p>

            {/* CTA Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto pt-6 text-left">
              {/* Card 1: Call Us */}
              <div className="group bg-[#1A1A1A] border border-[#C9A14A]/10 rounded-[20px] p-5 sm:p-6 text-center space-y-4 transition-all duration-300 hover:border-[#C9A14A]/30 hover:shadow-[0_8px_24px_rgba(201,166,107,0.08)] flex flex-col justify-between items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#C9A14A]/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="space-y-3 flex flex-col items-center relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#111111] border border-[#C9A14A]/20 flex items-center justify-center text-[#C9A14A] group-hover:scale-105 transition-transform duration-300 shadow-sm">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans font-bold text-base text-white">Call Us</h4>
                    <p className="text-gray-400 text-xs leading-relaxed max-w-[200px] mx-auto">
                      Speak directly with our strategist for quick consultation.
                    </p>
                  </div>
                  <div className="text-[#C9A14A] font-bold text-sm tracking-wider pt-1">
                    +91 96469-00628
                  </div>
                </div>

                <a
                  href="tel:+919646900628"
                  className="relative z-10 w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#C9A14A] text-[#111111] text-[10px] font-bold uppercase tracking-wider hover:bg-white hover:text-[#111111] transition-all duration-300 shadow-sm font-sans font-semibold"
                >
                  Call Now
                </a>
              </div>

              {/* Card 2: Email Us */}
              <div className="group bg-[#1A1A1A] border border-[#C9A14A]/10 rounded-[20px] p-5 sm:p-6 text-center space-y-4 transition-all duration-300 hover:border-[#C9A14A]/30 hover:shadow-[0_8px_24px_rgba(201,166,107,0.08)] flex flex-col justify-between items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#C9A14A]/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="space-y-3 flex flex-col items-center relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#111111] border border-[#C9A14A]/20 flex items-center justify-center text-[#C9A14A] group-hover:scale-105 transition-transform duration-300 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans font-bold text-base text-white">Email Us</h4>
                    <p className="text-gray-400 text-xs leading-relaxed max-w-[200px] mx-auto">
                      Send details of your project for a scope review.
                    </p>
                  </div>
                  <div className="text-[#C9A14A] font-semibold text-xs tracking-normal pt-1 break-all max-w-[220px] mx-auto">
                    connect.digimarkpro@gmail.com
                  </div>
                </div>

                <a
                  href="mailto:connect.digimarkpro@gmail.com"
                  className="relative z-10 w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-[#C9A14A]/40 text-[#C9A14A] text-[10px] font-bold uppercase tracking-wider hover:bg-[#C9A14A] hover:text-[#111111] transition-all duration-300 shadow-sm font-sans font-semibold"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
