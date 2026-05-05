"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  LayoutDashboard, 
  Brain, 
  Shield, 
  Building2, 
  Database
} from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SolutionsPage() {
  const { t, isRTL } = useLanguage();
  const pinnedSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let mm = gsap.matchMedia(pinnedSectionRef);

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const isMobile = window.innerWidth < 768;
      const xOffset = isMobile ? 150 : 300;

      // Explicitly set willChange
      gsap.set(".solution-card", { willChange: "transform" });

      // Card entry animations
      gsap.fromTo(
        ".solution-card",
        { x: xOffset, opacity: 0, backgroundColor: "#DBEAFE" },
        {
          x: 0,
          opacity: 1,
          backgroundColor: "#ffffff",
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: pinnedSectionRef.current,
            start: "top top",
            end: "+=600",
            pin: true,
            scrub: 0.3, // Changed from 1
          }
        }
      );
    });

    return () => mm.revert();
  }, []);

  const solutions = [
    {
      domain: isRTL ? "ذكاء" : "Intelligence",
      title: isRTL ? "الذكاء الاصطناعي والبيانات والأنظمة الذكية" : "AI, Data & Intelligent Systems",
      slug: "ai-data",
      icon: Brain,
      keyPoints: isRTL ? [
        "استراتيجية الذكاء الاصطناعي وتقييم الجاهزية",
        "منصات البيانات والتحليلات المتقدمة",
        "حلول الذكاء الاصطناعي المخصصة والأتمتة"
      ] : [
        "AI strategy & readiness assessment",
        "Data platforms & advanced analytics",
        "Custom AI solutions & automation"
      ]
    },
    {
      domain: isRTL ? "أمن" : "Security",
      title: isRTL ? "الأمن السيبراني والثقة الرقمية" : "Cybersecurity & Digital Trust",
      slug: "cybersecurity",
      icon: Shield,
      keyPoints: isRTL ? [
        "الأمن السيبراني لتقنية المعلومات والتقنيات التشغيلية",
        "حماية البنية التحتية والشبكات",
        "المخاطر والامتثال والمراقبة"
      ] : [
        "IT and OT cybersecurity",
        "Infrastructure & network protection",
        "Risk, compliance & monitoring"
      ]
    },
    {
      domain: isRTL ? "بنية تحتية" : "Infrastructure",
      title: isRTL ? "أنظمة ELV والأنظمة الذكية" : "ELV & Smart Systems",
      slug: "elv-smart-systems",
      icon: Building2,
      keyPoints: isRTL ? [
        "أنظمة ELV والأمن المتكاملة",
        "أنظمة الإطفاء وسلامة الحياة",
        "المباني الذكية وأنظمة إدارة المباني (BMS)"
      ] : [
        "ELV & integrated security systems",
        "Fire & life safety systems",
        "Smart buildings & BMS"
      ]
    },
    {
      domain: isRTL ? "حيوي" : "Mission-Critical",
      title: isRTL ? "البنية التحتية الحيوية ومراكز البيانات" : "Mission-Critical Infrastructure & Data Centers",
      slug: "mission-critical",
      icon: Database,
      keyPoints: isRTL ? [
        "تصميم وبناء وترقية مراكز البيانات",
        "تسليم بنية تحتية متوافقة مع المستوى الثالث",
        "ترقية البيئات الحية بأقل قدر من التوقف"
      ] : [
        "Data center design, build & upgrade",
        "Tier III aligned infrastructure",
        "Live upgrades with minimal downtime"
      ]
    },
    {
      domain: isRTL ? "مؤسسي" : "Enterprise",
      title: isRTL ? "التحول المؤسسي والمنصات الرقمية" : "Enterprise Transformation & Digital Platforms",
      slug: "digital-transformation",
      icon: LayoutDashboard,
      keyPoints: isRTL ? [
        "منصات المؤسسات للحوكمة",
        "أتمتة العمليات ورقمنة سير العمل",
        "تكامل الأنظمة عبر وظائف الأعمال"
      ] : [
        "Enterprise platforms for governance",
        "Process automation & workflow digitization",
        "System integration across business functions"
      ]
    },
  ];

  return (
    <div className={cn(isRTL ? "font-cairo text-right" : "font-inter")}>
      <Navbar />
      <main>
        {/* HERO SECTION - CHANGE 7 + CHANGE 2 Treatments */}
        <section className="relative min-h-[60vh] flex items-center pt-[100px] overflow-hidden bg-white dark:bg-brand-navy">
          {/* Subtle Dot Grid Background */}
          <div className="absolute inset-0 z-0 bg-dot-grid opacity-10 dark:opacity-20 pointer-events-none" />
          
          {/* Glow Orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-brand-blue opacity-[0.07] blur-[140px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-blue-soft opacity-[0.04] blur-[100px] pointer-events-none" />

          <div className="container max-w-7xl mx-auto px-6 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="section-kicker text-brand-blue mb-6">
                {isRTL ? "حلول متكاملة" : "Integrated Solutions"}
              </span>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 font-outfit uppercase text-brand-navy dark:text-white leading-[0.95]">
                {isRTL ? "حلول متكاملة." : "Integrated Solutions."}
              </h1>
              <p className="text-xl md:text-2xl text-brand-muted dark:text-white/60 font-light max-w-2xl leading-relaxed">
                {isRTL 
                  ? "خمس قدرات أساسية. شريك واحد مسؤول."
                  : "Five capabilities. One accountable partner."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* SOLUTIONS GRID - CHANGE 7 */}
        <section ref={pinnedSectionRef} className="relative py-32 bg-brand-surface overflow-hidden">
          <div className="absolute inset-0 bg-diagonal-lines pointer-events-none opacity-50" />
          
          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-20">
              <span className="section-kicker text-brand-blue mb-4 block">
                {isRTL ? "ما نقوم بحله" : "What We Solve"}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-navy dark:text-white font-outfit">
                {isRTL ? "ما نقوم بحله" : "What We Solve"}
              </h2>
              <p className="text-lg text-brand-muted mt-6 max-w-2xl leading-relaxed">
                {isRTL 
                  ? "تغطي قدراتنا مجموعة المؤسسة الكاملة - من المنصات الرقمية والذكاء الاصطناعي إلى البنية التحتية المادية ومراكز البيانات."
                  : "Our capabilities span the full enterprise stack — from digital platforms and AI to physical infrastructure and data centers."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, i) => (
                <div
                  key={solution.slug}
                  className="solution-card group relative rounded-2xl overflow-hidden border border-[#E2EAF8] dark:border-[#1E3150] bg-white dark:bg-[#0D1B2A] hover:border-[#1A56DB]/50 hover:shadow-2xl hover:shadow-[#1A56DB]/8 transition-all duration-300 flex flex-col"
                >
                  {/* Top accent bar */}
                  <div className="h-[3px] w-full bg-[#1A56DB]" />
                  
                  <div className="p-8 flex flex-col h-full">
                    {/* Domain tag */}
                    <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-blue-soft mb-6 block">
                      {solution.domain}
                    </span>
                    
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-brand-surface dark:bg-brand-blue/10 border border-[#E2EAF8] dark:border-brand-blue/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                      <solution.icon size={24} className="text-brand-blue" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold tracking-tight text-brand-navy dark:text-white mb-6 leading-tight min-h-[3.5rem]">
                      {solution.title}
                    </h3>
                    
                    {/* Key points */}
                    <ul className="space-y-4 mb-10 flex-1">
                      {solution.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[13px] text-brand-muted leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-soft mt-1.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Know More arrow button */}
                    <Link href={`/solutions/${solution.slug}`}>
                      <div className={cn(
                        "flex items-center gap-3 text-brand-blue text-sm font-bold group/link",
                        isRTL && "flex-row-reverse"
                      )}>
                        <span className="group-hover/link:underline underline-offset-8 transition-all">
                          {isRTL ? "تعرف على المزيد" : "Know More"}
                        </span>
                        <div className="w-8 h-8 rounded-full border border-brand-blue/20 flex items-center justify-center group-hover/link:bg-brand-blue group-hover/link:border-brand-blue transition-all duration-300">
                          <ArrowRight 
                            size={14} 
                            className={cn(
                              "text-brand-blue group-hover/link:text-white transition-all duration-300 group-hover/link:translate-x-0.5",
                              isRTL && "rotate-180 group-hover/link:-translate-x-0.5"
                            )} 
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 bg-brand-navy overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-20" />
          <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
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
              className="inline-block px-12 py-5 bg-brand-blue text-white rounded-full font-bold text-sm uppercase tracking-widest hover:shadow-2xl hover:shadow-brand-blue/40 hover:scale-105 transition-all"
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
