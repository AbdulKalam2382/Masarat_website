"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import PageTransition from "@/components/layout/PageTransition";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import HeroBackground from "@/components/ui/HeroBackground";

export default function ContactPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div className={cn(isRTL ? "font-cairo text-right" : "font-inter")}>
      <Navbar />
      <main>
        <PageTransition>
          {/* HERO SECTION */}
          <section className="relative min-h-[60vh] flex items-center pt-[100px] overflow-hidden bg-white dark:bg-brand-navy">
            
            {/* PREMIUM CANVAS BACKGROUND */}
            <HeroBackground />

            <div className="container max-w-7xl mx-auto px-6 relative z-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="section-kicker text-brand-blue mb-6 block">
                  {t("contact_page.kicker")}
                </span>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 font-outfit uppercase text-brand-navy dark:text-white leading-[0.95]">
                  {t("contact_page.title")}
                </h1>
                <p className="text-xl md:text-2xl text-brand-muted dark:text-white/60 font-light max-w-3xl leading-relaxed">
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
