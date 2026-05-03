"use client";
import React from "react";

import { Link } from "@/i18n/routing";
import { ArrowRight, Shield, Brain, LayoutDashboard, Server, Database } from "lucide-react";
import { motion } from "framer-motion";

import BentoCard from "@/components/ui/BentoCard";

import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

export default function ServicesPreview() {
  const { t, isRTL } = useLanguage();

  const previewServices = [
    {
      title: t('services.s1title'),
      description: t('services.s1desc'),
      href: '/services/digital-transformation',
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
      title: t('services.s2title'),
      description: t('services.s2desc'),
      href: '/services/ai-data',
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
      title: t('services.s3title'),
      description: t('services.s3desc'),
      href: '/services/cybersecurity',
      tag: isRTL ? 'أمن' : 'Security',
      number: '03',
      variant: 'gold' as const,
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
    },
    {
      title: t('services.s4title'),
      description: t('services.s4desc'),
      href: '/services/elv-smart-systems',
      tag: isRTL ? 'بنية تحتية' : 'Infrastructure',
      number: '04',
      variant: 'offwhite' as const,
      icon: <Server size={24} />,
      bullets: isRTL ? [
        'أنظمة ELV والأمن المتكاملة (كاميرات، تحكم بالوصول، مراكز القيادة)',
        'أنظمة الإطفاء وسلامة الحياة',
        'أنظمة إدارة المباني (BMS)',
        'المباني الذكية وأتمتة المرافق',
        'المراقبة والتحكم في الوقت الفعلي',
        'تحسين الكفاءة التشغيلية'
      ] : [
        'ELV and integrated security systems (CCTV, access control, command centers)',
        'Fire and life safety systems',
        'Building management systems (BMS)',
        'Smart buildings and facility automation',
        'Real-time monitoring and control',
        'Improved operational efficiency'
      ]
    },
    {
      title: t('services.s5title'),
      description: t('services.s5desc'),
      href: '/services/mission-critical',
      tag: isRTL ? 'حيوي' : 'Mission-Critical',
      number: '05',
      variant: 'outline' as const,
      icon: <Database size={24} />,
      bullets: isRTL ? [
        'تصميم وبناء وترقية مراكز البيانات',
        'تسليم بنية تحتية متوافقة مع المستوى الثالث (Tier III)',
        'ترقية البيئات الحية بأقل قدر من التوقف',
        'بيئات عالية الكثافة وجاهزة للذكاء الاصطناعي والحوسبة عالية الأداء',
        'إدارة شاملة للمرافق والعمليات'
      ] : [
        'Data center design, build, and upgrade',
        'Tier III aligned infrastructure delivery',
        'Live environment upgrades with minimal downtime',
        'High-density, AI and HPC-ready environments',
        'End-to-end facility management and operations'
      ]
    },
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
      className="relative py-32 bg-[#F0F5FF] dark:bg-[#0B1221] overflow-hidden transition-colors duration-500"
    >
      {/* Decorative Background Number */}
      <div className={cn("absolute -top-8 text-[180px] font-black text-[#1d1d1f]/[0.03] dark:text-white/[0.03] leading-none select-none pointer-events-none hidden lg:block", isRTL ? "right-8" : "-left-4")}>
        02
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/[0.02] -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className={cn("mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12", isRTL ? "md:flex-row-reverse" : "")}>
          <div className={cn("max-w-2xl", isRTL ? "text-right" : "text-left")}>
            <span className={cn("section-kicker mb-6", isRTL ? "flex-row-reverse" : "")}>
              {t("services.kicker")}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight font-outfit text-brand-ink dark:text-[#F5F5F7] leading-[1.1]">
              {t("services.title")}
            </h2>
          </div>
          <Link 
            href="/services" 
            className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-brand-ink dark:text-[#F5F5F7] hover:text-brand-blue transition-all duration-300"
          >
            <span className="border-b border-transparent group-hover:border-brand-blue transition-all">
              {t("services.link")}
            </span>
            <div className="w-10 h-10 rounded-full border border-brand-ink/10 dark:border-white/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white transition-all duration-300">
              <ArrowRight className={cn("w-4 h-4 transition-transform", isRTL ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1")} />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewServices.map((service, i) => (
            <BentoCard
              key={i}
              {...service}
              className="min-h-[480px] cursor-pointer"
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
