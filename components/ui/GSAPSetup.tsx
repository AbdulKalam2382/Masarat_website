"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GSAPSetup() {
  const pathname = usePathname();
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    let mm = gsap.matchMedia();

    const timer = setTimeout(() => {
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const isMobile = window.innerWidth < 768;
        const startScale = isMobile ? 0.97 : 0.94; 
        const bgYPercent = isMobile ? 25 : 50;     // Increased parallax distance

        const sections = gsap.utils.toArray("section");
        
        sections.forEach((section: any, index: number) => {
          // Effect 3: Scale zoom on entry
          // Skip for the very first section (Hero) to ensure it's visible immediately
          if (index === 0) {
            gsap.set(section, { scale: 1, opacity: 1, willChange: 'transform' });
          } else {
            gsap.set(section, { willChange: 'transform' });
            gsap.fromTo(
              section,
              { scale: startScale, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                scrollTrigger: {
                  trigger: section,
                  start: "top 85%",
                  end: "top 30%",
                  scrub: 0.3, // Lower scrub for tighter follow
                }
              }
            );
          }

          // Effect 4: Parallax backgrounds
          // "Every section background element moves at 60 percent scroll speed."
          const bgs = section.querySelectorAll('.absolute.inset-0.bg-dot-grid, .absolute.inset-0.bg-diagonal-lines, .absolute.inset-0.bg-noise, [class*="bg-dot-grid"], [class*="bg-diagonal-lines"]');
          bgs.forEach((bg: any) => {
            gsap.set(bg, { willChange: 'transform' });
            gsap.to(bg, {
              yPercent: bgYPercent,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5, // Tighter follow
              }
            });
            // "Background glow color: rgba(26, 86, 219, 0.08)"
            bg.style.boxShadow = "inset 0 0 150px rgba(26, 86, 219, 0.08)";
            bg.style.backgroundColor = "rgba(26, 86, 219, 0.02)";
          });

          // Effect 5: Section progress indicator tracker
          let name = section.getAttribute("data-section-name") || section.getAttribute("aria-label") || section.id;
          if (!name) {
            const h = section.querySelector("h1, h2");
            if (h) {
              name = h.innerText.split('.')[0].trim();
            }
          }
          if (name && name.length < 30) { // Only use short names
            ScrollTrigger.create({
              trigger: section,
              start: "top 50%",
              end: "bottom 50%",
              onEnter: () => setCurrentSection(name),
              onEnterBack: () => setCurrentSection(name),
              onLeave: () => setCurrentSection(""),
              onLeaveBack: () => setCurrentSection("")
            });
          }
        });
      });
    }, 100);

    // CRITICAL FIX 5 — Add ScrollTrigger refresh after fonts and images load
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', handleLoad);
    
    // Also refresh after a short delay to catch late-loading components
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(refreshTimer);
      window.removeEventListener('load', handleLoad);
      mm.revert();
    };
  }, [pathname]);

  return null;
}
