"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

export default function CareerPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div className={cn(isRTL ? "font-cairo text-right" : "font-inter")}>
      <Navbar />
      <div className="pt-[56px] min-h-screen bg-white dark:bg-[#0F1C2E] transition-colors duration-500">
        <PageTransition>
          <section className="py-24 border-b border-brand-border dark:border-[#1E3150] transition-colors duration-500">
            <div className="container max-w-7xl mx-auto px-6">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-blue mb-4 block">
                {t("career_page.kicker")}
              </span>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 font-outfit uppercase text-brand-ink dark:text-[#F5F5F7]">
                {t("career_page.title")}
              </h1>
              <p className="text-xl text-brand-muted dark:text-[#A1A1A6] font-light max-w-3xl leading-relaxed">
                {t("career_page.body")}
              </p>
            </div>
          </section>

          <section className="py-32">
            <div className="container max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-2xl font-bold text-brand-ink dark:text-[#F5F5F7] mb-4">
                {t("career_page.no_positions")}
              </h2>
              <p className="text-lg text-brand-muted dark:text-[#A1A1A6] mb-8 font-light">
                {isRTL ? "لكننا نسعد دائمًا بالتواصل مع الموهوبين للمشاريع المستقبلية." : "But we're always happy to hear from talented individuals for future state-level projects."}
              </p>
              <a 
                href={`mailto:${t("career_page.email")}`}
                className="inline-block bg-brand-blue text-white px-10 py-5 rounded-full font-bold hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-brand-blue/20"
              >
                {t("career_page.send_cv")} {t("career_page.email")}
              </a>
            </div>
          </section>
        </PageTransition>
      </div>
      <Footer />
    </div>
  );
}
