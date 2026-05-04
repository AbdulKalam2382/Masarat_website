"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ChevronRight, ChevronLeft, CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";
import Image from "next/image";

interface SolutionDetailTemplateProps {
  name: string;
  category: string;
  description: string;
  deliverables: string[];
  steps: {
    title: string;
    description: string;
  }[];
  differentiators: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  children?: React.ReactNode;
}

export default function SolutionDetailTemplate({
  name,
  category,
  description,
  deliverables,
  steps,
  differentiators,
  children
}: SolutionDetailTemplateProps) {
  const { t, isRTL } = useLanguage();

  return (
    <div className={cn(isRTL ? "font-cairo" : "font-inter")}>
      <Navbar />
      <div className="bg-white dark:bg-brand-navy transition-colors duration-500 overflow-hidden">
        
        {/* SECTION 1: Hero */}
        <section className="relative pt-[140px] pb-32 overflow-hidden bg-brand-navy">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-dot-grid opacity-[0.2]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            {/* Breadcrumb */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn("flex items-center gap-2 text-white/30 text-xs font-bold uppercase tracking-widest mb-12", isRTL && "flex-row-reverse")}
            >
              <Link href="/solutions" className="hover:text-brand-cyan transition-colors">{t("nav.solutions")}</Link>
              {isRTL ? <ChevronLeft size={12} /> : <ChevronRight size={12} />}
              <span className="text-white/60">{name}</span>
            </motion.div>

            <div className={cn("max-w-4xl", isRTL ? "text-right mr-0 ml-auto" : "text-left")}>
              <motion.span
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
              >
                {category}
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8 font-outfit leading-[1]"
              >
                {name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl text-white/50 font-light mb-12 max-w-2xl leading-relaxed"
              >
                {description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={cn("flex flex-wrap gap-4", isRTL && "justify-end")}
              >
                <Link 
                  href="/contact" 
                  className="bg-white text-brand-navy px-10 py-5 rounded-full font-bold hover:bg-brand-surface transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5 uppercase tracking-widest text-sm"
                >
                  {t('solutions.detail.cta')}
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Decorative Number */}
          <div className={cn(
            "absolute -bottom-20 text-[300px] font-black text-white/[0.02] leading-none pointer-events-none select-none",
            isRTL ? "left-10" : "right-10"
          )}>
            01
          </div>
        </section>

        {/* SECTION 2: Overview / Deliverables */}
        <section className="py-32 relative">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/[0.02] -skew-x-12 translate-x-1/2 pointer-events-none" />
          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <div className={cn("grid grid-cols-1 lg:grid-cols-12 gap-16", isRTL && "rtl")}>
              <div className={cn("lg:col-span-4", isRTL ? "text-right" : "text-left")}>
                <span className="section-kicker mb-6">
                  {t('solutions.detail.overview')}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-outfit text-brand-navy dark:text-white">
                  {isRTL ? "ما نقدمه." : "What we deliver."}
                </h2>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {deliverables.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={cn(
                      "flex items-start gap-4 p-8 rounded-3xl bg-brand-surface dark:bg-white/5 border border-brand-border dark:border-white/5 hover:border-brand-cyan/50 transition-all group",
                      isRTL ? "flex-row-reverse text-right" : "flex-row"
                    )}
                  >
                    <div className="p-2 bg-brand-cyan/10 text-brand-cyan rounded-xl group-hover:bg-brand-cyan group-hover:text-white transition-all">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-lg font-bold text-brand-navy dark:text-white/90 leading-tight">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: The Process */}
        <section className="py-32 bg-brand-navy text-white relative">
          <div className="absolute inset-0 bg-dot-grid opacity-[0.1]" />
          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
              <span className="section-kicker text-brand-cyan justify-center mb-6">
                {t('solutions.detail.process')}
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter font-outfit">
                {t('solutions.detail.approach')}
              </h2>
            </div>
            
            <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative", isRTL && "flex-row-reverse")}>
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center text-4xl font-black text-brand-cyan mb-10 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                    0{i + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-base text-white/40 leading-relaxed font-light">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Advantage */}
        <section className="py-32 bg-white dark:bg-brand-navy">
          <div className="container max-w-7xl mx-auto px-6">
            <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-24 items-center", isRTL && "rtl")}>
              <div className={isRTL ? "text-right" : "text-left"}>
                <span className="section-kicker mb-6">
                  {t('solutions.detail.why')}
                </span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter font-outfit text-brand-navy dark:text-white mb-10 leading-[1.1]">
                  {isRTL ? `لماذا تختار مسارات لـ ${name}.` : `Why choose Masarat for ${name}.`}
                </h2>
                <div className="grid grid-cols-1 gap-8">
                  {differentiators.map((diff, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={cn(
                        "flex items-start gap-8 p-10 rounded-[2.5rem] border border-brand-border dark:border-white/5 hover:bg-brand-surface dark:hover:bg-white/5 transition-all group",
                        isRTL ? "flex-row-reverse text-right" : "flex-row"
                      )}
                    >
                      <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all">
                        {diff.icon}
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold text-brand-navy dark:text-white">{diff.title}</h4>
                        <p className="text-base text-brand-muted dark:text-white/40 font-light leading-relaxed">{diff.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-[4rem] bg-brand-surface dark:bg-white/5 overflow-hidden border border-brand-border dark:border-white/5 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-dot-grid opacity-[0.2]" />
                  <div className="absolute inset-0 bg-diagonal-lines opacity-[0.05]" />
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10 w-[80%] h-[60%]"
                  >
                    <Image
                      src="/images/Masarat Logo.png"
                      alt="Masarat Technologies"
                      fill
                      sizes="600px"
                      className="object-contain mix-blend-multiply dark:mix-blend-normal"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {children && (
          <div className="bg-white dark:bg-brand-navy">
            {children}
          </div>
        )}

        {/* SECTION 5: CTA Banner */}
        <section className="py-32">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="bg-brand-navy rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-dot-grid opacity-[0.1]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[100px] pointer-events-none" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white font-outfit mb-12">
                  {t('solutions.detail.ctabanner')}
                </h2>
                <div className={cn("flex flex-col sm:flex-row justify-center gap-6", isRTL && "flex-row-reverse")}>
                  <Link 
                    href="/contact" 
                    className="bg-brand-blue text-white px-12 py-6 rounded-full font-bold hover:bg-blue-700 transition-all hover:scale-105 shadow-2xl shadow-brand-blue/20 uppercase tracking-widest text-sm"
                  >
                    {t('solutions.detail.btn1')}
                  </Link>
                  <Link 
                    href="/contact" 
                    className="bg-white/10 text-white border border-white/20 px-12 py-6 rounded-full font-bold hover:bg-white/20 transition-all uppercase tracking-widest text-sm backdrop-blur-md"
                  >
                    {t("nav.contact")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
