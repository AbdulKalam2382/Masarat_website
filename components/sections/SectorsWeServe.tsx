"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { Landmark, Banknote, Flame, Building2 } from 'lucide-react';

export default function SectorsWeServe() {
  const { isRTL } = useLanguage();

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

  const sectors = [
    {
      icon: Landmark,
      title: isRTL 
        ? 'الحكومة والجهات التنظيمية'
        : 'Government & Regulatory',
      desc: isRTL
        ? 'البنك المركزي الكويتي والمؤسسات الحكومية'
        : 'Central Bank of Kuwait and government institutions',
    },
    {
      icon: Banknote,
      title: isRTL
        ? 'البنوك والخدمات المالية'
        : 'Banking & Financial Services',
      desc: isRTL
        ? 'البنوك والمؤسسات المالية الكبرى في الكويت'
        : "Kuwait's leading banks and financial institutions",
    },
    {
      icon: Flame,
      title: isRTL
        ? 'النفط والغاز'
        : 'Oil & Gas',
      desc: isRTL
        ? 'شركة نفط الكويت والبنية التحتية للطاقة'
        : 'KOC, KGOC and energy sector infrastructure',
    },
    {
      icon: Building2,
      title: isRTL
        ? 'المؤسسات والقطاع الخاص'
        : 'Enterprise & Private Sector',
      desc: isRTL
        ? 'الشركات الإقليمية والرعاية الصحية والاتصالات'
        : 'Regional enterprises, healthcare & telecoms',
    },
  ];

  return (
    <motion.section 
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="py-[80px] bg-[#F0F5FF] dark:bg-[#0B1221] overflow-hidden transition-colors duration-500"
    >
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className={cn("flex flex-col lg:flex-row items-center gap-16 lg:gap-24", isRTL ? "lg:flex-row-reverse" : "")}>
          
          {/* Left Content */}
          <div className={cn("flex-1", isRTL ? "text-right" : "text-left")}>
            <span className={cn("section-kicker mb-6 text-brand-blue", isRTL ? "flex-row-reverse" : "")}>
              {isRTL ? "القطاعات التي نخدمها" : "Sectors We Serve"}
            </span>
            <h2 className="text-4xl md:text-[40px] font-bold tracking-tight text-[#1B3A6B] dark:text-white leading-tight mb-6 font-outfit">
              {isRTL 
                ? "موثوقون في أهم الصناعات وأكثرها تطلباً في الكويت." 
                : "Trusted across Kuwait's most demanding industries."}
            </h2>
            <p className="text-lg text-[#64748B] dark:text-[#A1A1A6] font-light leading-relaxed max-w-lg">
              {isRTL 
                ? "من القطاع الحكومي والمصرفي إلى النفط والغاز والبنية التحتية للمؤسسات — صُممت حلولنا للبيئات التي لا تقبل المساومة على الأداء والأمن والموثوقية."
                : "From government and banking to oil & gas and enterprise infrastructure — our solutions are designed for environments where performance, security, and reliability are non-negotiable."}
            </p>
          </div>

          {/* Right Grid */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sectors.map((sector, i) => {
                const Icon = sector.icon;
                return (
                  <div key={i} className="group p-6 
                    rounded-2xl border 
                    border-[#E2EAF8] dark:border-[#1E3150]
                    bg-white dark:bg-[#10192C]
                    hover:border-[#2563EB]/30 dark:hover:border-blue-500/50
                    hover:bg-[#EEF4FF] dark:hover:bg-[#162236]
                    transition-all duration-300
                    cursor-default shadow-sm">
                    
                    <div className="w-10 h-10 
                      rounded-xl mb-4
                      bg-[#F0F5FF] dark:bg-blue-600/10
                      border border-[#E2EAF8] dark:border-[#1E3150]
                      flex items-center justify-center
                      group-hover:bg-[#2563EB]/10
                      group-hover:border-[#2563EB]/20
                      transition-all duration-300">
                      <Icon 
                        size={18} 
                        className="text-[#2563EB]" 
                      />
                    </div>
                    
                    <h3 className="text-[#1B3A6B] dark:text-white 
                      font-semibold text-[14px] 
                      tracking-tight mb-2">
                      {sector.title}
                    </h3>
                    
                    <p className="text-[#64748B] dark:text-[#8E8E93] 
                      text-[12px] leading-relaxed">
                      {sector.desc}
                    </p>
                    
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </motion.section>
  );
}
