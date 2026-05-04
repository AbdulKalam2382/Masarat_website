"use client";
import SolutionDetailTemplate from "@/components/templates/SolutionDetailTemplate";
import { CheckSquare, Settings, BarChart2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

export default function MissionCriticalPage() {
  const { isRTL } = useLanguage();
  return (
    <SolutionDetailTemplate
      name={isRTL ? "البنية التحتية الحيوية ومراكز البيانات" : "Mission-Critical Infrastructure & Data Centers"}
      category={isRTL ? "الحلول" : "Solutions"}
      description={isRTL
        ? "مسارات، بالتعاون مع هيدروتيك للهندسة، تقدم قدرات متخصصة في مراكز البيانات والبيئات الحيوية — من التصميم حتى التشغيل."
        : "Masarat, together with Hydrotek Engineering, delivers specialized capabilities in data center and mission-critical environments — covering the full lifecycle from design to operations."}
      deliverables={isRTL ? [
        "تصميم وبناء وترقية مراكز البيانات",
        "تسليم بنية تحتية متوافقة مع المستوى الثالث (Tier III)",
        "ترقية البيئات الحية بأقل قدر من التوقف",
        "بيئات عالية الكثافة وجاهزة للذكاء الاصطناعي والحوسبة عالية الأداء",
        "إدارة شاملة للمرافق والعمليات"
      ] : [
        "Data center design, build, and upgrade",
        "Tier III aligned infrastructure delivery",
        "Live environment upgrades with minimal downtime",
        "High-density, AI and HPC-ready environments",
        "End-to-end facility management and operations"
      ]}
      steps={isRTL ? [
        { title: "التخطيط", description: "تصميم مركز البيانات وتخطيط الطاقة ومتطلبات الامتثال." },
        { title: "البناء", description: "تنسيق بناء المرفق وتكامل الأنظمة." },
        { title: "التشغيل", description: "تشغيل مضبوط مع انضباط تشغيلي كامل." },
        { title: "الإدارة", description: "إدارة المرافق المستمرة والمراقبة وتقارير الطاقة." }
      ] : [
        { title: "Plan", description: "Data center design, capacity planning, and compliance requirements." },
        { title: "Build", description: "Facility construction coordination and systems integration." },
        { title: "Operate", description: "Controlled go-live with full operational discipline." },
        { title: "Manage", description: "Ongoing facility management, monitoring, and capacity reporting." }
      ]}
      differentiators={isRTL ? [
        { title: "تسليم حقيقي", description: "مراكز بيانات معتمدة من Tier III وخبرة ترقية حية وإدارة تشغيل مستمرة.", icon: <CheckSquare size={20} /> },
        { title: "شراكة هيدروتيك", description: "مسارات وهيدروتيك تجمعان نقاط قوة متكاملة للبنية التحتية الحيوية.", icon: <Settings size={20} /> },
        { title: "إدارة الطاقة", description: "تخطيط الطاقة والإبلاغ وممارسات الانضباط التشغيلي لأعلى مستوى من الجاهزية.", icon: <BarChart2 size={20} /> }
      ] : [
        { title: "Real Delivery", description: "Tier III certified environments, live upgrade experience, and ongoing operational management.", icon: <CheckSquare size={20} /> },
        { title: "Hydrotek Partnership", description: "Masarat and Hydrotek combine complementary strengths for mission-critical infrastructure delivery.", icon: <Settings size={20} /> },
        { title: "Capacity Management", description: "Capacity planning, reporting, and SOP/MOP/EOP operational discipline for maximum uptime.", icon: <BarChart2 size={20} /> }
      ]}
    >
      <section className="py-24 border-t border-brand-border dark:border-white/5">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className={cn(isRTL ? "text-right" : "text-left")}>
              <h3 className="text-3xl font-bold tracking-tighter mb-8 font-outfit text-brand-navy dark:text-white">
                {isRTL ? "خبرة مثبتة" : "Proven Experience"}
              </h3>
              <ul className="space-y-4">
                {(isRTL ? [
                  "تسليم مراكز بيانات المستوى الثالث في القطاع المصرفي",
                  "ترقية مراكز البيانات الحية لعملاء الاتصالات والمؤسسات",
                  "تطوير بيئات بنية تحتية واسعة النطاق جاهزة للذكاء الاصطناعي"
                ] : [
                  "Delivery of Tier III data centers in banking sector",
                  "Upgrade of live data centers for telecom and enterprise clients",
                  "Development of large-scale AI-ready infrastructure environments"
                ]).map((item, idx) => (
                  <li key={idx} className={cn("flex items-start gap-4", isRTL ? "flex-row-reverse" : "")}>
                    <div className="w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-brand-blue" />
                    </div>
                    <span className="text-lg text-brand-muted dark:text-white/40 font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={cn(isRTL ? "text-right" : "text-left")}>
              <h3 className="text-3xl font-bold tracking-tighter mb-8 font-outfit text-brand-navy dark:text-white">
                {isRTL ? "القيمة للعملاء" : "Value to Clients"}
              </h3>
              <ul className="space-y-4">
                {(isRTL ? [
                  "شريك مسؤول واحد عبر التصميم والبناء والعمليات",
                  "تقليل المخاطر في البيئات الحيوية",
                  "تحسين الأداء والكفاءة وقابلية التوسع"
                ] : [
                  "Single accountable partner across design, build, and operations",
                  "Reduced risk in mission-critical environments",
                  "Optimized performance, efficiency, and scalability"
                ]).map((item, idx) => (
                  <li key={idx} className={cn("flex items-start gap-4", isRTL ? "flex-row-reverse" : "")}>
                    <div className="w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-brand-blue" />
                    </div>
                    <span className="text-lg text-brand-muted dark:text-white/40 font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SolutionDetailTemplate>
  );
}
