"use client";

import { useEffect, useState, createContext, useContext } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";

const LenisContext = createContext<Lenis | null>(null);

export const useLenis = () => useContext(LenisContext);

/**
 * SmoothScrollProvider implements a high-performance Lenis setup 
 * perfectly synchronized with GSAP ticker.
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis exactly once
    const lenisInstance = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    setLenis(lenisInstance);

    // Synchronize with GSAP ticker for frame-perfect animations
    function update(time: number) {
      lenisInstance.raf(time * 1000);
    }

    gsap.ticker.add(update);
    
    // Lag smoothing 0 ensures GSAP doesn't skip frames during heavy scrolling
    gsap.ticker.lagSmoothing(0);

    // Cleanup
    return () => {
      gsap.ticker.remove(update);
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}
