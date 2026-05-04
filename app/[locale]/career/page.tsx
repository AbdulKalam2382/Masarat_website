"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Briefcase, 
  Heart, 
  Lightbulb, 
  Shield, 
  Users, 
  Trophy, 
  GraduationCap, 
  Globe, 
  Zap,
  Activity,
  Rocket
} from "lucide-react";
import Image from "next/image";

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
  ];

  return (
    <div className={cn(isRTL ? "font-cairo text-right" : "font-inter")}>
      <Navbar />
      <main>
        <PageTransition>
          
          {/* HERO SECTION - CHANGE 10 + CHANGE 2 */}
          <section className="relative min-h-[70vh] flex items-center pt-[100px] overflow-hidden bg-brand-navy">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=90&w=1920&auto=format&fit=crop"
                alt="Career at Masarat"
                fill
                className="object-cover opacity-50"
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
                className="max-w-4xl"
              >
                <span className="section-kicker text-brand-cyan mb-6">
                  {t("career_page.kicker")}
                </span>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 font-outfit uppercase text-white leading-[0.95]">
                  {t("career_page.hero_title")}
                </h1>
                <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl leading-relaxed">
                  {t("career_page.hero_sub")}
                </p>
                <div className="mt-12">
                  <button 
                    onClick={() => document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-10 py-5 bg-brand-blue text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-cyan transition-all shadow-xl shadow-brand-blue/20"
                  >
                    {t("career_page.hero_cta")}
                  </button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* VALUES SECTION - CHANGE 10 (White bg) */}
          <section className="relative py-32 bg-white border-t border-brand-blue/10 bg-noise overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6 relative z-10">
              <div className="mb-20">
                <span className="section-kicker text-brand-blue mb-4 block">
                  {isRTL ? "قيمنا" : "Our Values"}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-outfit text-brand-navy">
                  {t('career_page.why_title')}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {values.map((value, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={cn(
                      "flex flex-col gap-6",
                      isRTL ? "items-end text-right" : "items-start text-left"
                    )}
                  >
                    <div className="w-14 h-14 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lg shadow-brand-blue/20">
                      <value.icon size={24} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-brand-navy tracking-tight">{value.title}</h3>
                      <p className="text-brand-muted leading-relaxed font-medium">{value.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* BENEFITS SECTION - CHANGE 10 (Surface bg) */}
          <section className="relative py-32 bg-brand-surface overflow-hidden">
            <div className="absolute inset-0 bg-diagonal-lines pointer-events-none opacity-40" />
            <div className="container max-w-7xl mx-auto px-6 relative z-10">
              <div className="mb-20">
                <span className="section-kicker text-brand-blue mb-4 block">
                  {isRTL ? "المزايا" : "Perks & Benefits"}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-outfit text-brand-navy">
                  {t('career_page.benefits_title')}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-8 bg-white rounded-3xl border border-brand-border flex flex-col gap-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                      <benefit.icon size={18} className="text-brand-blue" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-brand-muted leading-relaxed font-medium">
                      {benefit.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CULTURE BANNER - CHANGE 10 */}
          <section className="relative h-[300px] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=85&w=1920&auto=format&fit=crop"
              alt="Work Culture"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-[2px] flex items-center justify-center p-6">
              <h3 className="text-2xl md:text-4xl font-bold text-white text-center font-outfit uppercase tracking-tighter">
                {isRTL ? "بيئة عمل ملهمة" : "An Inspiring Work Culture"}
              </h3>
            </div>
          </section>

          {/* OPEN POSITIONS */}
          <section id="positions" className="relative py-32 bg-brand-navy overflow-hidden">
            <div className="absolute inset-0 bg-dot-grid opacity-20" />
            <div className="container max-w-7xl mx-auto px-6 relative z-10 text-center">
              <div className="max-w-3xl mx-auto">
                <span className="section-kicker text-brand-cyan justify-center mb-6">
                  {isRTL ? "الفرص الحالية" : "Current Openings"}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-outfit text-white mb-12">
                  {t('career_page.positions_title')}
                </h2>
                
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-20">
                  <div className="w-20 h-20 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue mx-auto mb-8">
                    <Briefcase size={40} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    {t('career_page.no_positions_title')}
                  </h3>
                  <p className="text-lg text-white/50 mb-12 font-light leading-relaxed">
                    {t('career_page.no_positions_desc')}
                  </p>
                  <div className="flex flex-col items-center gap-6">
                    <a 
                      href={`mailto:${t("career_page.email")}`}
                      className="px-12 py-5 bg-brand-blue text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-cyan transition-all shadow-xl shadow-brand-blue/20"
                    >
                      {t("career_page.send_cv")}
                    </a>
                    <span className="text-brand-cyan font-bold tracking-widest text-sm">
                      {t("career_page.email")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}
