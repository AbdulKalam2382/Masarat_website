"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import PageTransition from "@/components/layout/PageTransition";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div className={cn(isRTL ? "font-cairo text-right" : "font-inter")}>
      <Navbar />
      <main>
        <PageTransition>
          {/* HERO SECTION - CHANGE 2 Treatments */}
          <section className="relative min-h-[60vh] flex items-center pt-[100px] overflow-hidden bg-brand-navy">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=90&w=1920&auto=format&fit=crop"
                alt="Contact Masarat"
                fill
                className="object-cover opacity-60"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/95 via-[#0D1B2A]/80 to-[#0D1B2A]/40" />
            </div>

            {/* Animated Dot Grid */}
            <div className="absolute inset-0 z-10 bg-dot-grid opacity-60 pointer-events-none" />
            
            {/* Glow Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-brand-blue opacity-[0.07] blur-[140px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-cyan opacity-[0.04] blur-[100px] pointer-events-none" />

            <div className="container max-w-7xl mx-auto px-6 relative z-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="section-kicker text-brand-cyan mb-6">
                  {t("contact_page.kicker")}
                </span>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 font-outfit uppercase text-white leading-[0.95]">
                  {t("contact_page.title")}
                </h1>
                <p className="text-xl md:text-2xl text-white/60 font-light max-w-3xl leading-relaxed">
                  {t("contact_page.body")}
                </p>
              </motion.div>
            </div>
          </section>

          {/* CONTACT FORM SECTION - WHITE with Noise */}
          <section className="relative py-32 bg-white border-t border-brand-blue/10 bg-noise overflow-hidden">
             <div className={cn(
              "absolute text-[200px] font-black text-brand-blue/[0.015] leading-none select-none pointer-events-none tracking-tighter",
              isRTL ? "left-0 bottom-0" : "right-0 bottom-0"
            )}>
              M
            </div>
            <div className="container max-w-7xl mx-auto px-6 relative z-10">
              <Contact />
            </div>
          </section>
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}
