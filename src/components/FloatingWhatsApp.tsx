"use client";

import React, { useState, useEffect } from "react";

export default function FloatingWhatsApp() {
  const [mounted, setMounted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Show tooltip after a brief delay, then hide it automatically
    const showTimer = setTimeout(() => setShowTooltip(true), 2500);
    const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 pointer-events-none">
      {/* Tooltip */}
      <div
        className={`px-4 py-2 bg-white text-[#111111] text-xs font-semibold rounded-xl border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out transform ${
          showTooltip 
            ? "opacity-100 translate-x-0 scale-100 pointer-events-auto" 
            : "opacity-0 translate-x-4 scale-95 pointer-events-none"
        }`}
      >
        Chat on WhatsApp
      </div>

      {/* Floating Button */}
      <a
        href="https://wa.me/919646900628"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="pointer-events-auto w-14 h-14 rounded-full bg-[#25D366] text-[#FFFFFF] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_24px_rgba(37,211,102,0.5)] group relative"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing ring background */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none group-hover:animate-none" />

        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 fill-current relative z-10 transition-transform duration-300 group-hover:rotate-12"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.004 2c-5.518 0-9.996 4.477-9.996 9.995 0 1.763.459 3.486 1.332 5.006L2 22l5.127-1.344a9.94 9.94 0 004.877 1.28c5.519 0 10-4.478 10-9.996 0-5.518-4.481-9.995-10-9.995zm4.846 14.195c-.272.766-1.353 1.39-1.859 1.488-.5.1-1.161.166-1.867-.061a9.924 9.924 0 01-3.774-2.189 11.233 11.233 0 01-2.585-3.324c-.453-.78-.716-1.583-.716-2.42 0-1.637.844-2.443 1.258-2.866.27-.276.536-.341.765-.341.229 0 .458.005.656.015.207.01.486-.079.76.577.283.676.969 2.365 1.054 2.535.085.17.142.368.028.594-.113.226-.17.368-.34.566-.17.198-.357.443-.51.594-.17.17-.348.354-.15.697.198.34.879 1.445 1.884 2.343.834.745 1.537.976 1.932 1.146.395.17.621.142.853-.113.23-.255.99-1.15 1.259-1.547.269-.396.538-.34.905-.203.368.137 2.336 1.103 2.733 1.302.396.198.66.297.755.462.095.165.095.957-.177 1.724z" />
        </svg>
      </a>
    </div>
  );
}
