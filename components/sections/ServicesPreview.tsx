"use client";
import React from "react";

import { Link } from "@/i18n/routing";
import { ArrowRight, Shield, Brain, LayoutDashboard, Building2, Database } from "lucide-react";
import { motion } from "framer-motion";

import BentoCard from "@/components/ui/BentoCard";

import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

export default function SolutionsPreview() {
  const { t, isRTL } = useLanguage();

  const previewSolutions = [
    {
      title: t('solutions.s1title'),
      description: t('solutions.s1desc'),
      href: '/solutions/digital-transformation',
      tag: isRTL ? 'مؤسسات' : 'Enterprise',
      number: '01',
      variant: 'blue' as const,
      icon: <LayoutDashboard size={24} />,
      bullets: isRTL ? [
        'منصات المؤسسات للحوكمة والأداء',
        'أتمتة العمليات ورقمنة سير العمل',
        'التكامل عبر أنظمة وظائف الأعمال',
        'نماذج تشغيل متصلة وقابلة للقياس والتوسع'
      ] : [
        'Enterprise platforms for governance and performance',
        'Process automation and workflow digitization',
        'Integration across business systems and functions',
        'Connected, measurable, and scalable operating models'
      ]
    },
    {
      title: t('solutions.s2title'),
      description: t('solutions.s2desc'),
      href: '/solutions/ai-data',
      tag: isRTL ? 'ذكاء' : 'Intelligence',
      number: '02',
      variant: 'dark' as const,
      icon: <Brain size={24} />,
      bullets: isRTL ? [
        'استراتيجية الذكاء الاصطناعي وتقييم الجاهزية',
        'منصات البيانات وتكاملها',
        'التحليلات المتقدمة والرؤى التنبؤية',
        'حلول الذكاء الاصطناعي المخصصة والأتمتة',
        'التدريب والتمكين',
        'الذكاء الاصطناعي مُطبَّق فعلياً وليس مجرد تجريب.'
      ] : [
        'AI strategy and readiness assessment',
        'Data platforms and data integration',
        'Advanced analytics and predictive insights',
        'Custom AI solutions and automation',
        'Training and enablement',
        'AI is practically deployed and operationalized — not limited to experimentation.'
      ]
    },
    {
      title: t('solutions.s3title'),
      description: t('solutions.s3desc'),
      href: '/solutions/cybersecurity',
      tag: isRTL ? 'أمن' : 'Security',
      number: '03',
      variant: 'blue' as const,
      icon: <Shield size={24} />,
      bullets: isRTL ? [
        'الأمن السيبراني لتقنية المعلومات والتقنيات التشغيلية',
        'حماية البنية التحتية والشبكات',
        'المخاطر والامتثال والمراقبة',
        'الأمن مدمج في جميع الحلول',
        'الأمن مبدأ تصميم أساسي وليس طبقة إضافية.'
      ] : [
        'IT and OT cybersecurity',
        'Infrastructure and network protection',
        'Risk, compliance, and monitoring',
        'Security embedded across all solutions',
        'Security is a core design principle, not an add-on layer.'
      ]
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  return (
    <motion.section 
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="relative py-32 bg-white dark:bg-brand-navy overflow-hidden transition-colors duration-500"
    >
      {/* Decorative Background Number */}
      <div className={cn("absolute -top-8 text-[180px] font-black text-brand-navy/[0.03] dark:text-white/[0.03] leading-none select-none pointer-events-none hidden lg:block", isRTL ? "right-8" : "-left-4")}>
        03
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className={cn("mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12", isRTL ? "md:flex-row-reverse" : "")}>
          <div className={cn("max-w-2xl", isRTL ? "text-right" : "text-left")}>
            <span className={cn("section-kicker mb-6", isRTL ? "flex-row-reverse" : "")}>
              {t("solutions.kicker")}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight font-outfit text-brand-navy dark:text-[#F5F5F7] leading-[1.1]">
              {t("solutions.title")}
            </h2>
          </div>
          <Link 
            href="/solutions" 
            className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-brand-navy dark:text-[#F5F5F7] hover:text-brand-blue transition-all duration-300"
          >
            <span className="border-b border-transparent group-hover:border-brand-blue transition-all">
              {t("solutions.link")}
            </span>
            <div className="w-10 h-10 rounded-full border border-brand-navy/10 dark:border-white/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white transition-all duration-300">
              <ArrowRight className={cn("w-4 h-4 transition-transform", isRTL ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1")} />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewSolutions.map((solution, i) => (
            <BentoCard
              key={i}
              {...solution}
              className="min-h-[480px] cursor-pointer"
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
