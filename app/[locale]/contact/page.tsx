"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import PageTransition from "@/components/layout/PageTransition";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div className={cn(isRTL ? "font-cairo text-right" : "font-inter")}>
      <Navbar />
      <div className="pt-[56px] min-h-screen bg-white dark:bg-[#0F1C2E] transition-colors duration-500">
        <PageTransition>
          <section className="py-24 border-b border-brand-border dark:border-[#1E3150] transition-colors duration-500">
            <div className="container max-w-7xl mx-auto px-6">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-blue mb-4 block">
                {t("contact_page.kicker")}
              </span>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 font-outfit uppercase text-brand-ink dark:text-[#F5F5F7]">
                {t("contact_page.title")}
              </h1>
              <p className="text-xl text-brand-muted dark:text-[#A1A1A6] font-light max-w-3xl leading-relaxed">
                {t("contact_page.body")}
              </p>
            </div>
          </section>
          
          <Contact />
        </PageTransition>
      </div>
      <Footer />
    </div>
  );
}
