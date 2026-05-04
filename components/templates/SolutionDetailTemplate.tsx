"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ChevronRight, ChevronLeft, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";
import Image from "next/image";
import { useRef } from "react";

interface SolutionDetailTemplateProps {
  slug: string;
  name: string;
  category: string;
  description: string;
  heroImage: string;
  bannerImage: string;
  deliverables: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  approach: {
    title: string;
    description: string;
  }[];
  children?: React.ReactNode;
}

export default function SolutionDetailTemplate({
  slug,
  name,
  category,
  description,
  heroImage,
  bannerImage,
  deliverables,
  approach,
  children
}: SolutionDetailTemplateProps) {
  const { t, isRTL } = useLanguage();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const timelineSteps = [
    { title: isRTL ? "التقييم والتخطيط" : "Assessment & Planning", brief: isRTL ? "فهم المتطلبات" : "Understanding requirements" },
    { title: isRTL ? "الهندسة والتصميم" : "Architecture & Design", brief: isRTL ? "بناء المخطط" : "Building the blueprint" },
    { title: isRTL ? "التنفيذ والتكامل" : "Implementation & Integration", brief: isRTL ? "النشر الفعلي" : "Actual deployment" },
    { title: isRTL ? "الاختبار والنشر" : "Testing & Deployment", brief: isRTL ? "ضمان الجودة" : "Ensuring quality" },
    { title: isRTL ? "العمليات والتحسين" : "Operations & Optimization", brief: isRTL ? "الدعم المستمر" : "Ongoing support" }
  ];

  return (
    <div className={cn(isRTL ? "font-cairo" : "font-inter")}>
      <Navbar />
      <main className="bg-white dark:bg-brand-navy overflow-hidden">
        
        {/* SECTION 1: Hero - CHANGE 8 */}
        <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden bg-brand-navy">
          <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
            <Image
              src={heroImage}
              alt={name}
              fill
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/95 via-[#0D1B2A]/80 to-[#0D1B2A]/40" />
          </motion.div>

          <div className="absolute inset-0 z-10 bg-dot-grid opacity-40 pointer-events-none" />

          <div className="container max-w-7xl mx-auto px-6 relative z-20 pt-20">
            {/* Breadcrumb */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn("flex items-center gap-2 text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-12", isRTL && "flex-row-reverse")}
            >
              <Link href="/solutions" className="hover:text-brand-cyan transition-colors">{isRTL ? "الحلول" : "Solutions"}</Link>
              {isRTL ? <ChevronLeft size={10} /> : <ChevronRight size={10} />}
              <span className="text-white/80">{name}</span>
            </motion.div>

            <div className={cn("max-w-4xl", isRTL ? "text-right" : "text-left")}>
              <motion.span
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block px-5 py-2 rounded-full bg-brand-blue/20 border border-brand-blue/30 text-brand-cyan text-[10px] font-black uppercase tracking-[0.3em] mb-8"
              >
                {category}
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8 font-outfit leading-[0.95]"
              >
                {name}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-white/60 font-light mb-12 max-w-xl leading-relaxed"
              >
                {description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={cn("flex flex-wrap gap-4", isRTL && "flex-row-reverse")}
              >
                <Link 
                  href="/contact" 
                  className="bg-brand-blue text-white px-10 py-5 rounded-full font-bold hover:bg-brand-cyan transition-all hover:scale-105 shadow-xl shadow-brand-blue/20 uppercase tracking-widest text-xs"
                >
                  {isRTL ? "احجز استشارة" : "Schedule a Consultation"}
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-all uppercase tracking-widest text-xs backdrop-blur-md"
                >
                  {isRTL ? "تحميل الملف" : "Download Overview"}
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Overview - CHANGE 8 */}
        <section className="py-32 bg-white dark:bg-brand-navy">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="mb-20">
              <span className="text-[10px] font-black tracking-[0.3em] text-brand-blue uppercase mb-4 block">
                {category}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-outfit text-brand-navy dark:text-white">
                {isRTL ? "ما نقوم بتسليمه" : "What We Deliver"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {deliverables.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={cn(
                    "flex flex-col gap-6",
                    isRTL ? "items-end text-right" : "items-start text-left"
                  )}
                >
                  <div className="w-14 h-14 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lg shadow-brand-blue/20">
                    {item.icon}
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-brand-navy dark:text-white tracking-tight">{item.title}</h4>
                    <p className="text-sm text-brand-muted dark:text-white/40 leading-relaxed font-medium">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Approach - CHANGE 8 */}
        <section className="py-32 bg-brand-surface dark:bg-white/[0.02]">
          <div className="container max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-outfit text-brand-navy dark:text-white mb-20">
              {isRTL ? "نهجنا" : "Our Approach"}
            </h2>

            <div className="space-y-24">
              {approach.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative group max-w-3xl"
                >
                  <div className={cn(
                    "absolute -top-16 text-[100px] md:text-[140px] font-black text-brand-blue/[0.06] dark:text-white/[0.04] leading-none pointer-events-none select-none z-0 transition-all group-hover:scale-110",
                    isRTL ? "-right-8" : "-left-8"
                  )}>
                    0{i + 1}
                  </div>
                  <div className="relative z-10 pt-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-navy dark:text-white mb-4 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-brand-muted dark:text-white/40 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: How We Deliver - CHANGE 8 */}
        <section className="py-32 bg-white dark:bg-brand-navy overflow-hidden">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="mb-20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-outfit text-brand-navy dark:text-white mb-6">
                {isRTL ? "كيف نقوم بالتسليم" : "How We Deliver"}
              </h2>
              <p className="text-brand-muted dark:text-white/40 max-w-xl mx-auto">
                {isRTL ? "نموذج التسليم المعتمد لدينا في الممارسة العملية." : "Our proven delivery model in practice."}
              </p>
            </div>

            {/* Timeline - Horizontal on Desktop, Vertical on Mobile */}
            <div className="relative">
              {/* Desktop Line */}
              <div className="hidden lg:block absolute top-12 left-0 right-0 h-[2px] bg-brand-surface dark:bg-white/10 z-0" />
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6">
                {timelineSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center text-center relative z-10"
                  >
                    <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold mb-6 shadow-lg shadow-brand-blue/30 border-4 border-white dark:border-brand-navy group-hover:scale-110 transition-transform">
                      {i + 1}
                    </div>
                    <h4 className="text-sm font-black text-brand-navy dark:text-white mb-2 uppercase tracking-tighter">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-brand-muted dark:text-white/40 font-medium">
                      {step.brief}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Image Banner - CHANGE 8 */}
        <section className="relative h-[280px] w-full overflow-hidden">
          <Image
            src={bannerImage}
            alt="Single-point accountability"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-[2px] flex items-center justify-center p-6">
            <h3 className="text-xl md:text-3xl font-light text-white text-center max-w-3xl leading-relaxed">
              {isRTL 
                ? "يتم التسليم مع مسؤولية نقطة واحدة وقدرة تنفيذ مثبتة."
                : "Delivered with single-point accountability and proven execution capability."}
            </h3>
          </div>
        </section>

        {children && (
          <div className="bg-white dark:bg-brand-navy">
            {children}
          </div>
        )}

        {/* SECTION 6: CTA - CHANGE 8 */}
        <section className="py-32 bg-brand-navy text-center">
          <div className="container max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-outfit text-white mb-8">
              {isRTL ? "هل أنت مستعد للبدء؟" : "Ready to get started?"}
            </h2>
            <p className="text-xl text-white/50 mb-12 font-light">
              {isRTL 
                ? "تحدث مع فريق الحلول لدينا حول متطلباتك المحددة."
                : "Talk to our solutions team about your specific requirements."}
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-brand-blue text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-cyan hover:shadow-2xl hover:shadow-brand-cyan/20 transition-all"
            >
              {isRTL ? "احجز استشارة" : "Schedule a Consultation"}
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
