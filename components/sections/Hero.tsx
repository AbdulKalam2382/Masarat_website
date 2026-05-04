"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const dots: Dot[] = [];
    const spacing = 40;

    class Dot {
      x: number;
      y: number;
      baseX: number;
      baseY: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = "rgba(37, 99, 235, 0.15)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        ctx.fill();
      }

      update(time: number) {
        // Slow movement
        this.x = this.baseX + Math.sin(time * 0.001 + this.baseY) * 5;
        this.y = this.baseY + Math.cos(time * 0.001 + this.baseX) * 5;
      }
    }

    const init = () => {
      dots.length = 0;
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          dots.push(new Dot(x, y));
        }
      }
    };

    let animationFrameId: number;
    const animate = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      dots.forEach((dot) => {
        dot.update(time);
        dot.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate(0);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const headlineLines = [
    { text: t("hero.line1"), weight: 300, color: "text-white" },
    { text: t("hero.line2"), weight: 700, color: "text-white" },
    { text: t("hero.line3"), weight: 700, color: "text-brand-blue" },
  ];

  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-[#1B3A6B] overflow-hidden transition-colors duration-500"
      style={{
        background: 'linear-gradient(135deg, #1B3A6B 0%, #1E4080 50%, #1B3A6B 100%)'
      }}
    >
      {/* Animated Grid Lines Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }}
      />
      
      {/* Dot Grid Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
      />

      {/* Radial Gradient behind Headline */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[#2563EB] opacity-[0.06] blur-[120px]" />
      </div>

      {/* Floating Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute top-24 right-8 z-10 hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/50 text-xs tracking-widest uppercase"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        Kuwait
      </motion.div>

      <div className="container relative z-10 px-6 max-w-7xl mx-auto">
        <div className={cn("flex flex-col", isRTL ? "items-start text-right" : "items-center text-center")}>
          {/* Floating Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-bold tracking-[0.3em] text-white/50 uppercase"
          >
            {t("hero.label")}
          </motion.div>

          {/* Headline with ClipPath Reveal */}
          <div className="flex flex-col mb-10">
            {headlineLines.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h1
                  initial={{ clipPath: isRTL ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={cn(
                    "text-5xl sm:text-6xl md:text-[80px] tracking-tighter leading-[1.05] font-outfit",
                    line.color
                  )}
                  style={{ fontWeight: line.weight }}
                >
                  {line.text}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "text-lg md:text-xl text-[#A1A1A1] dark:text-[#8E8E93] mb-12 max-w-2xl font-light leading-relaxed",
              !isRTL && "mx-auto"
            )}
          >
            {t("hero.sub")}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link
              href="/solutions"
              className="px-10 py-5 bg-brand-blue text-white font-bold rounded-full hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-brand-blue/30 text-center"
            >
              {t("hero.btn1")}
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all text-center"
            >
              {t("hero.btn2")}
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator (Bottom-Right) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          className={cn(
            "absolute bottom-12 hidden md:flex flex-col items-center gap-6",
            isRTL ? "left-6" : "right-6"
          )}
        >
          <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/30 rotate-90 origin-center translate-y-[-20px]">
            {isRTL ? "اسحب لأسفل" : "Scroll"}
          </span>
          <div className="w-[1px] h-20 bg-gradient-to-t from-brand-blue to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
