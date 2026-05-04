"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Heart, Lightbulb, Shield, Zap, Globe, GraduationCap, Trophy, Users } from "lucide-react";

export default function CareerPage() {
  const { t, isRTL } = useLanguage();

  const values = [
    { title: t('career_page.v1t'), desc: t('career_page.v1d'), icon: Shield },
    { title: t('career_page.v2t'), desc: t('career_page.v2d'), icon: Lightbulb },
    { title: t('career_page.v3t'), desc: t('career_page.v3d'), icon: Users },
  ];

  const benefits = [
    { title: t('career_page.b1t'), desc: t('career_page.b1d'), icon: Trophy },
    { title: t('career_page.b2t'), desc: t('career_page.b2d'), icon: GraduationCap },
    { title: t('career_page.b3t'), desc: t('career_page.b3d'), icon: Globe },
    { title: t('career_page.b4t'), desc: t('career_page.b4d'), icon: Zap },
    { title: t('career_page.b5t'), desc: t('career_page.b5d'), icon: Heart },
    { title: t('career_page.b6t'), desc: t('career_page.b6d'), icon: Briefcase },
  ];

  return (
    <div className={cn(isRTL ? "font-cairo text-right" : "font-inter")}>
      <Navbar />
      <div className="pt-[88px] md:pt-[110px] min-h-screen bg-white dark:bg-brand-navy transition-colors duration-500 overflow-hidden">
        <PageTransition>
          
          {/* 1. Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-dot-grid opacity-[0.4] dark:opacity-[0.2]" />
            <div className="container max-w-7xl mx-auto px-6 relative z-10">
              <div className={cn("max-w-4xl", isRTL ? "ml-auto" : "mr-auto")}>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="section-kicker mb-6"
                >
                  {t("career_page.kicker")}
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 font-outfit text-brand-navy dark:text-white leading-[1.1]"
                >
                  {t("career_page.hero_title")}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl md:text-2xl text-brand-muted dark:text-white/60 font-light max-w-2xl leading-relaxed"
                >
                  {t("career_page.hero_sub")}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-12 flex flex-col sm:flex-row gap-4"
                >
                  <button 
                    onClick={() => document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-10 py-5 bg-brand-blue text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-navy dark:hover:bg-brand-cyan transition-all"
                  >
                    {t("career_page.hero_cta")}
                  </button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* 2. Why Masarat (Values) */}
          <section className="py-32 bg-brand-surface dark:bg-white/[0.02]">
            <div className="container max-w-7xl mx-auto px-6">
              <div className={cn("mb-20 max-w-3xl", isRTL && "ml-auto text-right")}>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-outfit text-brand-navy dark:text-white mb-6">
                  {t('career_page.why_title')}
                </h2>
                <p className="text-lg text-brand-muted dark:text-white/50 leading-relaxed font-light">
                  {t('career_page.why_statement')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white dark:bg-white/5 p-10 rounded-[2rem] border border-brand-border dark:border-white/10 hover:shadow-2xl transition-all group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center text-brand-blue mb-8 group-hover:scale-110 transition-transform">
                      <value.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-brand-muted dark:text-white/40 leading-relaxed font-light">
                      {value.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. Benefits Grid */}
          <section className="py-32 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-cyan/[0.03] -skew-x-12 translate-x-1/2 pointer-events-none" />
            <div className="container max-w-7xl mx-auto px-6 relative z-10">
              <div className={cn("mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8", isRTL && "md:flex-row-reverse text-right")}>
                <div className="max-w-2xl">
                  <span className="section-kicker mb-6">{isRTL ? "المزايا" : "Perks & Benefits"}</span>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-outfit text-brand-navy dark:text-white">
                    {t('career_page.benefits_title')}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-8 bg-brand-surface dark:bg-white/5 rounded-3xl border border-brand-border dark:border-white/5 flex flex-col gap-4"
                  >
                    <benefit.icon size={24} className="text-brand-cyan" />
                    <h3 className="text-lg font-bold text-brand-navy dark:text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-brand-muted dark:text-white/40 leading-relaxed font-light">
                      {benefit.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. Open Positions */}
          <section id="positions" className="py-32 bg-brand-navy text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-dot-grid opacity-[0.1]" />
            <div className="container max-w-7xl mx-auto px-6 relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="section-kicker text-brand-cyan justify-center mb-6">{isRTL ? "الفرص" : "Opportunities"}</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-outfit mb-6">
                  {t('career_page.positions_title')}
                </h2>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-20 text-center">
                <div className="w-20 h-20 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue mx-auto mb-8">
                  <Briefcase size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-6">
                  {t('career_page.no_positions_title')}
                </h3>
                <p className="text-lg text-white/50 max-w-xl mx-auto mb-12 font-light leading-relaxed">
                  {t('career_page.no_positions_desc')}
                </p>
                <div className="flex flex-col items-center gap-6">
                   <a 
                    href={`mailto:${t("career_page.email")}`}
                    className="px-12 py-5 bg-white text-brand-navy rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-surface transition-all flex items-center gap-3 group"
                  >
                    {t("career_page.send_cv")}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <span className="text-brand-cyan font-bold tracking-widest text-sm">
                    {t("career_page.email")}
                  </span>
                </div>
              </div>
            </div>
          </section>

        </PageTransition>
      </div>
      <Footer />
    </div>
  );
}
