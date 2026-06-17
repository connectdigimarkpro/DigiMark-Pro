"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable smooth scroll on desktop (fine pointer) to save mobile TBT
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsDesktop(mediaQuery.matches);
    
    if (!mediaQuery.matches) {
      // Setup simple anchor click handler for mobile native smooth scroll
      const handleAnchorClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest("a");
        
        if (anchor && anchor.hash && anchor.origin === window.location.origin) {
          const targetElement = document.querySelector(anchor.hash);
          if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      };

      document.addEventListener("click", handleAnchorClick);
      return () => {
        document.removeEventListener("click", handleAnchorClick);
      };
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Global scroll links listener to work nicely with Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -80, // Offset for sticky navbar
            duration: 1.2,
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <>
      {isDesktop && <CustomCursor />}
      {children}
    </>
  );
}
