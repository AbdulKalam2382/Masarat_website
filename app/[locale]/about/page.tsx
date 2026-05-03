"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Process from "@/components/sections/Process";
import Testimonial from "@/components/sections/Testimonial";
import Challenges from "@/components/sections/Challenges";
import QualityCompliance from "@/components/sections/QualityCompliance";
import Partners from "@/components/sections/Partners";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div className={cn(isRTL ? "font-cairo text-right" : "font-inter")}>
      <Navbar />
      <div className="pt-[56px] min-h-screen bg-white dark:bg-[#0B1221] transition-colors duration-500">
        <section className="py-24 border-b border-brand-border dark:border-[#1E3150] transition-colors duration-500">
          <div className="container max-w-7xl mx-auto px-6">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-blue mb-4 block">
              {t("about_page.kicker")}
            </span>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 font-outfit uppercase text-brand-ink dark:text-[#F5F5F7]">
              {t("about_page.title")}
            </h1>
            <p className="text-xl text-brand-muted dark:text-[#A1A1A6] font-light max-w-3xl leading-relaxed whitespace-pre-line">
              {t("about_page.body")}
            </p>
          </div>
        </section>
        
        <Challenges />
        <QualityCompliance />
        <Partners />
        
        <Process />
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
}
