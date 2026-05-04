"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  LayoutDashboard, 
  Brain, 
  Shield, 
  Building2, 
  Database,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { Link } from "@/i18n/routing";

export default function SolutionsPage() {
  const { t, isRTL } = useLanguage();

  const solutions = [
    {
      id: "digital-transformation",
      title: t('solutions.s1title'),
      desc: t('solutions.s1desc'),
      icon: LayoutDashboard,
      color: "text-brand-blue",
      bg: "bg-brand-blue/10",
      features: isRTL ? ['منصات المؤسسات', 'أتمتة العمليات', 'التكامل', 'نماذج التشغيل'] : ['Enterprise Platforms', 'Process Automation', 'Integration', 'Operating Models']
    },
    {
      id: "ai-data",
      title: t('solutions.s2title'),
      desc: t('solutions.s2desc'),
      icon: Brain,
      color: "text-brand-cyan",
      bg: "bg-brand-cyan/10",
      features: isRTL ? ['استراتيجية الذكاء الاصطناعي', 'منصات البيانات', 'التحليلات', 'الحلول المخصصة'] : ['AI Strategy', 'Data Platforms', 'Analytics', 'Custom Solutions']
    },
    {
      id: "cybersecurity",
      title: t('solutions.s3title'),
      desc: t('solutions.s3desc'),
      icon: Shield,
      color: "text-brand-blue",
      bg: "bg-brand-blue/10",
      features: isRTL ? ['الأمن السيبراني', 'حماية البنية التحتية', 'المخاطر والامتثال', 'أمن الشبكات'] : ['Cybersecurity', 'Infrastructure Protection', 'Risk & Compliance', 'Network Security']
    },
    {
      id: "elv-smart-systems",
      title: t('solutions.s4title'),
      desc: t('solutions.s4desc'),
      icon: Building2,
      color: "text-brand-cyan",
      bg: "bg-brand-cyan/10",
      features: isRTL ? ['أنظمة ELV', 'إدارة المباني', 'الأتمتة الذكية', 'المراقبة'] : ['ELV Systems', 'BMS', 'Smart Automation', 'Monitoring']
    },
    {
      id: "mission-critical",
      title: t('solutions.s5title'),
      desc: t('solutions.s5desc'),
      icon: Database,
      color: "text-brand-blue",
      bg: "bg-brand-blue/10",
      features: isRTL ? ['تصميم مراكز البيانات', 'بنية تحتية Tier III', 'العمليات', 'إدارة المرافق'] : ['Data Center Design', 'Tier III Infrastructure', 'Operations', 'Facility Management']
    }
  ];

  return (
    <div className={cn(isRTL ? "font-cairo text-right" : "font-inter")}>
      <Navbar />
      <div className="pt-[88px] md:pt-[110px] min-h-screen bg-white dark:bg-brand-navy transition-colors duration-500">
        <PageTransition>
          
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden border-b border-brand-border dark:border-white/10">
            <div className="absolute inset-0 bg-dot-grid opacity-[0.4] dark:opacity-[0.2]" />
            <div className="container max-w-7xl mx-auto px-6 relative z-10">
              <div className="max-w-3xl">
                <span className="section-kicker mb-6">{t("solutions.kicker")}</span>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 font-outfit text-brand-navy dark:text-white">
                  {t("solutions.page_title")}
                </h1>
                <p className="text-xl md:text-2xl text-brand-muted dark:text-white/60 font-light leading-relaxed">
                  {t("solutions.page_sub")}
                </p>
              </div>
            </div>
          </section>

          {/* Solutions Grid */}
          <section className="py-32">
            <div className="container max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 gap-16 md:gap-32">
                {solutions.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                      "flex flex-col md:flex-row gap-12 md:gap-24 items-center",
                      i % 2 !== 0 && "md:flex-row-reverse"
                    )}
                  >
                    {/* Visual Side */}
                    <div className="w-full md:w-1/2 relative group">
                      <div className={cn(
                        "absolute inset-0 rounded-[3rem] blur-3xl opacity-20 transition-opacity duration-700 group-hover:opacity-40",
                        item.bg
                      )} />
                      <div className="relative aspect-[4/3] bg-brand-surface dark:bg-white/5 rounded-[3rem] border border-brand-border dark:border-white/10 flex items-center justify-center overflow-hidden">
                        <item.icon size={120} className={cn("opacity-20", item.color)} />
                        {/* Decorative elements */}
                        <div className="absolute inset-0 bg-diagonal-lines opacity-10" />
                        <div className="absolute top-10 right-10 text-8xl font-black text-brand-navy/[0.03] dark:text-white/[0.03]">
                          0{i+1}
                        </div>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-1/2 space-y-8">
                      <div className={cn(
                        "w-14 h-14 rounded-2xl flex items-center justify-center",
                        item.bg, item.color
                      )}>
                        <item.icon size={28} />
                      </div>
                      
                      <div className="space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-outfit text-brand-navy dark:text-white">
                          {item.title}
                        </h2>
                        <p className="text-lg text-brand-muted dark:text-white/50 leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {item.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle2 size={16} className="text-brand-cyan" />
                            <span className="text-sm font-medium text-brand-navy dark:text-white/70">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href={`/solutions/${item.id}`}
                        className={cn(
                          "inline-flex items-center gap-2 px-8 py-4 bg-brand-navy dark:bg-white text-white dark:text-brand-navy rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-blue dark:hover:bg-brand-cyan transition-all group",
                          isRTL && "flex-row-reverse"
                        )}
                      >
                        {t('solutions.link')}
                        <ArrowRight size={18} className={cn("group-hover:translate-x-1 transition-transform", isRTL && "rotate-180 group-hover:-translate-x-1")} />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-32 bg-brand-surface dark:bg-white/[0.02]">
            <div className="container max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-outfit text-brand-navy dark:text-white mb-8">
                {t('solutions.cta_title')}
              </h2>
              <p className="text-lg text-brand-muted dark:text-white/50 mb-12 font-light">
                {t('solutions.cta_sub')}
              </p>
              <Link
                href="/contact"
                className="px-12 py-5 bg-brand-blue text-white rounded-full font-bold text-sm uppercase tracking-widest hover:shadow-2xl hover:shadow-brand-blue/20 transition-all"
              >
                {t('solutions.cta_btn1')}
              </Link>
            </div>
          </section>

        </PageTransition>
      </div>
      <Footer />
    </div>
  );
}
