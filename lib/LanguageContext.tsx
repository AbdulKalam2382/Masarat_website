'use client'
import React, { 
  createContext, 
  useContext, 
  useState, 
  useEffect,
  ReactNode 
} from 'react'

type Language = 'en' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  isRTL: boolean
  t: (key: string) => string
}

const enTranslations = {
  nav: {
    solutions: "Solutions",
    about: "About",
    career: "Career",
    resources: "Resources",
    contact: "Contact",
    cta: "Schedule Consultation",
    dropdowns: {
      about: {
        who_we_are: { title: "Who We Are", brief: "Our legacy and commitment to Kuwait." },
        vision_mission: { title: "Vision & Mission", brief: "The pillars of our corporate strategy." },
        delivery_model: { title: "Delivery Model", brief: "How we ensure mission-critical success." },
        tech_partners: { title: "Technology Partners", brief: "Collaborating with global leaders." }
      },
      solutions: {
        enterprise: { title: "Digital Platforms", brief: "Enterprise transformation & automation." },
        ai_data: { title: "AI & Data", brief: "Intelligent systems & advanced analytics." },
        cybersecurity: { title: "Cybersecurity", brief: "Digital trust & infrastructure protection." },
        elv: { title: "ELV & Smart Systems", brief: "Integrated building & security solutions." },
        infrastructure: { title: "Critical Infrastructure", brief: "Data centers & mission-critical systems." }
      },
      resources: {
        knowledge: { title: "Knowledge Hub", brief: "Insights on emerging technologies." },
        case_studies: { title: "Case Studies", brief: "Our proven track record in action." },
        downloads: { title: "Downloads", brief: "Whitepapers and corporate profiles." }
      },
      career: {
        why_masarat: { title: "Why Masarat", brief: "Our values and work culture." },
        benefits: { title: "Perks & Benefits", brief: "How we take care of our people." },
        positions: { title: "Open Positions", brief: "Join the elite team in Kuwait." }
      }
    }
  },
  hero: {
    label: "Kuwait's IT Partner",
    line1: "WE ARCHITECT",
    line2: "DIGITAL TRUST.",
    line3: "INTELLIGENTLY.",
    sub: "Enterprise Intelligence · Cybersecurity · Infrastructure",
    btn1: "Explore Solutions",
    btn2: "Contact Us",
    scroll: "Scroll"
  },
  home: {
    vision_eyebrow: "Our Vision",
    vision_text: "To be the most trusted architect of digital intelligence and national infrastructure in Kuwait.",
    mission_eyebrow: "Our Mission",
    mission_text: "To deliver mission-critical technology solutions with single-point accountability and proven execution excellence.",
    power_quote: "Technology is the lever. Trust is the fulcrum.",
    power_sub: "We don't just deploy systems; we architect institutional resilience.",
    power_btn: "Our Approach",
    learn_more: "Learn More"
  },
  about_page: {
    kicker: "About Masarat",
    title: "Partners in Success.",
    body: "Masarat Technologies is a leading enterprise IT solutions provider based in Kuwait. \n\nWe specialize in architecting the mission-critical pillars of digital transformation — from national cybersecurity to intelligent infrastructure.",
    quality_title: "Enterprise Excellence & Compliance",
    quality_body: "Our solutions are governed by international standards and local regulatory frameworks, ensuring your institution remains compliant, secure, and resilient.",
    quality_footer: "ISO 27001 · SOC2 · NCA Compliant · CITRA Certified",
    challenges_title: "Solving Kuwait's Toughest Tech Challenges.",
    challenge1_title: "Data Sovereignty",
    challenge1_desc: "Architecting systems that keep Kuwait's data safe and localized within national borders.",
    challenge2_title: "Legacy Modernization",
    challenge2_desc: "Transforming aging infrastructure into high-performance digital platforms without operational downtime.",
    challenge3_title: "Cyber Resilience",
    challenge3_desc: "Building proactive defense systems against evolving global and regional cyber threats.",
    challenges_callout: "We don't just solve problems; we architect long-term institutional stability."
  },
  about: {
    kicker: "Who We Are",
    title: "Architecting Digital Trust since 2026.",
    body: "Based in the heart of Kuwait, Masarat Technologies was founded to bridge the gap between complex global technologies and local institutional needs. We are more than an IT provider; we are strategic architects of the digital future.",
    metrics: {
      m1t: "Mission-Critical",
      m1d: "Environments we operate in",
      m2t: "End-to-End",
      m2d: "Ownership & accountability"
    }
  },
  solutions: {
    kicker: "Our Capabilities",
    page_title: "Integrated Solutions.",
    page_sub: "Five core capabilities. One accountable partner.",
    title: "Integrated Solutions.",
    link: "Know More",
    cta_title: "Ready to get started?",
    cta_sub: "Talk to our solutions team about your specific requirements.",
    cta_btn1: "Schedule a Consultation",
    s1title: "Enterprise Transformation & Digital Platforms",
    s1desc: "Enabling organisations to redesign, automate, and scale their core operations.",
    s2title: "AI, Data & Intelligent Systems",
    s2desc: "Building the data and AI foundation for intelligent decision-making.",
    s3title: "Cybersecurity & Digital Trust",
    s3desc: "Protecting critical environments through enterprise-grade security frameworks.",
    s4title: "ELV & Smart Systems",
    s4desc: "Designing and implementing integrated physical and smart environments.",
    s5title: "Mission-Critical Infrastructure",
    s5desc: "Specialized data center and critical environment lifecycle management.",
    detail: {
      overview: "Overview",
      process: "Methodology",
      approach: "Our Approach",
      why: "The Advantage",
      deliver_title: "What We Deliver",
      deliver_desc: "Our proven delivery model in practice.",
      how_deliver: "How We Deliver",
      download: "Download Overview",
      ctabanner: "Delivered with single-point accountability and proven execution capability.",
      cta: "Schedule Consultation",
      btn1: "Get Started",
      timeline: {
        s1t: "Assessment & Planning", "s1d": "Understanding requirements",
        s2t: "Architecture & Design", "s2d": "Building the blueprint",
        s3t: "Implementation & Integration", "s3d": "Actual deployment",
        s4t: "Testing & Deployment", "s4d": "Ensuring quality",
        s5t: "Operations & Optimization", "s5d": "Ongoing support"
      }
    }
  },
  sectors: {
    kicker: "Sectors We Serve",
    title: "Trusted across Kuwait's most demanding industries.",
    desc: "From government and banking to oil & gas and enterprise infrastructure — our solutions are designed for environments where performance, security, and reliability are non-negotiable.",
    s1t: "Government & Regulatory",
    s1d: "Central Bank of Kuwait and government institutions",
    s2t: "Banking & Financial Services",
    s2d: "Kuwait's leading banks and financial institutions",
    s3t: "Oil & Gas",
    s3d: "KOC, KGOC and energy sector infrastructure",
    s4t: "Enterprise & Private Sector",
    s4d: "Regional enterprises, healthcare & telecoms"
  },
  footer: {
    copy: "© 2026 Masarat Technologies · Kuwait",
    tagline: "Architecting Digital Trust & Enterprise Intelligence",
    insights: "Knowledge Hub",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    nav_label: "Navigation",
    connect_label: "Connectivity",
    support_label: "Support Inquiry"
  },
  insights_page: {
    kicker: "Knowledge Hub",
    title: "Insights & Perspectives.",
    body: "Thoughts on technology, security, and digital transformation in Kuwait.",
    read_article: "Read Article →",
    all: "All",
    filter_cyber: "Cybersecurity",
    filter_cloud: "Cloud",
    filter_ai: "AI",
    read_time: "min read",
    related: "Related Articles",
    back: "← Back to Insights",
    share: "Share this article",
    home_title: "Latest Insights",
    home_link: "All Articles →"
  },
  common: {
    loading: "Loading...",
    error: "Something went wrong",
    back_home: "Back to Home",
    page_not_found: "Page not found",
    offline: "You are offline",
    check_connection: "Please check your connection",
    skip: "Click to skip"
  }
}

const arTranslations = {
  nav: {
    solutions: "الحلول",
    about: "من نحن",
    career: "الوظائف",
    resources: "الموارد",
    contact: "تواصل معنا",
    cta: "حجز استشارة",
    dropdowns: {
      about: {
        who_we_are: { title: "من نحن", brief: "تراثنا والتزامنا تجاه الكويت." },
        vision_mission: { title: "الرؤية والرسالة", brief: "ركائز استراتيجية شركتنا." },
        delivery_model: { title: "نموذج التسليم", brief: "كيف نضمن نجاح المشاريع الحيوية." },
        tech_partners: { title: "شركاء التقنية", brief: "التعاون مع القادة العالميين." }
      },
      solutions: {
        enterprise: { title: "المنصات الرقمية", brief: "التحول المؤسسي والأتمتة." },
        ai_data: { title: "الذكاء الاصطناعي والبيانات", brief: "الأنظمة الذكية والتحليلات المتقدمة." },
        cybersecurity: { title: "الأمن السيبراني", brief: "الثقة الرقمية وحماية البنية التحتية." },
        elv: { title: "أنظمة ELV والأنظمة الذكية", brief: "حلول المباني والأمن المتكاملة." },
        infrastructure: { title: "البنية التحتية الحيوية", brief: "مراكز البيانات والأنظمة الحساسة." }
      },
      resources: {
        knowledge: { title: "مركز المعرفة", brief: "رؤى حول التقنيات الناشئة." },
        case_studies: { title: "دراسات الحالة", brief: "سجل إنجازاتنا المثبت في العمل." },
        downloads: { title: "التحميلات", brief: "الأوراق البيضاء وملفات الشركة." }
      },
      career: {
        why_masarat: { title: "لماذا مسارات", brief: "قيمنا وثقافة عملنا." },
        benefits: { title: "المزايا والفوائد", brief: "كيف نعتني بموظفينا." },
        positions: { title: "الوظائف الشاغرة", brief: "انضم إلى فريق النخبة في الكويت." }
      }
    }
  },
  hero: {
    label: "شريكك التقني في الكويت",
    line1: "نحن نبني",
    line2: "الثقة الرقمية.",
    line3: "على نطاق واسع.",
    sub: "الذكاء المؤسسي · الأمن السيبراني · البنية التحتية",
    btn1: "استكشف الحلول",
    btn2: "تواصل معنا",
    scroll: "اسحب لأسفل"
  },
  home: {
    vision_eyebrow: "رؤيتنا",
    vision_text: "أن نكون الشريك الأكثر ثقة في بناء الذكاء الرقمي والبنية التحتية الوطنية في الكويت.",
    mission_eyebrow: "رسالتنا",
    mission_text: "تقديم حلول تقنية حيوية مع مسؤولية نقطة واحدة وتميز مشهود في التنفيذ.",
    power_quote: "التقنية هي الرافعة. والثقة هي المرتكز.",
    power_sub: "نحن لا نقوم فقط بنشر الأنظمة؛ نحن نبني المرونة المؤسسية.",
    power_btn: "نهجنا",
    learn_more: "اعرف المزيد"
  },
  about_page: {
    kicker: "عن مسارات",
    title: "شركاء في النجاح.",
    body: "مسارات تكنولوجيز هي شركة رائدة في تقديم حلول تقنية المعلومات للمؤسسات ومقرها الكويت. \n\nنحن متخصصون في بناء الركائز الحيوية للتحول الرقمي — من الأمن السيبراني الوطني إلى البنية التحتية الذكية.",
    quality_title: "التميز المؤسسي والامتثال",
    quality_body: "تخضع حلولنا للمعايير الدولية والأطر التنظيمية المحلية، مما يضمن بقاء مؤسستك ممتثلة وآمنة ومرنة.",
    quality_footer: "ISO 27001 · SOC2 · NCA Compliant · CITRA Certified",
    challenges_title: "حل أصعب التحديات التقنية في الكويت.",
    challenge1_title: "سيادة البيانات",
    challenge1_desc: "هندسة الأنظمة التي تحافظ على سلامة بيانات الكويت وتوطينها داخل الحدود الوطنية.",
    challenge2_title: "تحديث الأنظمة القديمة",
    challenge2_desc: "تحويل البنية التحتية المتهالكة إلى منصات رقمية عالية الأداء دون توقف العمليات.",
    challenge3_title: "المرونة السيبرانية",
    challenge3_desc: "بناء أنظمة دفاع استباقية ضد التهديدات السيبرانية العالمية والإقليمية المتطورة.",
    challenges_callout: "نحن لا نحل المشاكل فحسب؛ بل نبني استقراراً مؤسسياً طويل الأمد."
  },
  about: {
    kicker: "من نحن",
    title: "بناء الثقة الرقمية منذ عام ٢٠٢٦.",
    body: "تأسست مسارات تكنولوجيز في قلب الكويت لردم الفجوة بين التقنيات العالمية المعقدة والاحتياجات المؤسسية المحلية. نحن أكثر من مجرد مزود لخدمات تقنية المعلومات؛ نحن المعماريون الاستراتيجيون للمستقبل الرقمي.",
    metrics: {
      m1t: "بيئات حيوية",
      m1d: "البيئات التي نعمل فيها",
      m2t: "من البداية للنهاية",
      m2d: "الملكية والمسؤولية الكاملة"
    }
  },
  solutions: {
    kicker: "قدراتنا",
    page_title: "حلول متكاملة.",
    page_sub: "خمس قدرات أساسية. شريك واحد مسؤول.",
    title: "حلول متكاملة.",
    link: "اعرف المزيد",
    cta_title: "هل أنت مستعد للبدء؟",
    cta_sub: "تحدث مع فريق الحلول لدينا حول متطلباتك المحددة.",
    cta_btn1: "حجز استشارة",
    s1title: "التحول المؤسسي والمنصات الرقمية",
    s1desc: "تمكين المؤسسات من إعادة تصميم وأتمتة وتوسيع عملياتها الأساسية.",
    s2title: "الذكاء الاصطناعي والبيانات والأنظمة الذكية",
    s2desc: "بناء أساس البيانات والذكاء الاصطناعي لاتخاذ قرارات ذكية.",
    s3title: "الأمن السيبراني والثقة الرقمية",
    s3desc: "حماية البيئات الحيوية من خلال أطر أمنية مؤسسية.",
    s4title: "أنظمة ELV والأنظمة الذكية",
    s4desc: "تصميم وتنفيذ البيئات المادية والذكية المتكاملة.",
    s5title: "البنية التحتية الحيوية",
    s5desc: "إدارة متخصصة لمراكز البيانات ودورة حياة البيئات الحيوية.",
    detail: {
      overview: "نظرة عامة",
      process: "المنهجية",
      approach: "نهجنا",
      why: "الميزة",
      deliver_title: "ما نقوم بتسليمه",
      deliver_desc: "نموذج التسليم المعتمد لدينا في الممارسة العملية.",
      how_deliver: "كيف نقوم بالتسليم",
      download: "تحميل الملف",
      ctabanner: "يتم التسليم مع مسؤولية نقطة واحدة وقدرة تنفيذ مثبتة.",
      cta: "حجز استشارة",
      btn1: "ابدأ الآن",
      timeline: {
        s1t: "التقييم والتخطيط", "s1d": "فهم المتطلبات",
        s2t: "الهندسة والتصميم", "s2d": "بناء المخطط",
        s3t: "التنفيذ والتكامل", "s3d": "النشر الفعلي",
        s4t: "الاختبار والنشر", "s4d": "ضمان الجودة",
        s5t: "العمليات والتحسين", "s5d": "الدعم المستمر"
      }
    }
  },
  sectors: {
    kicker: "القطاعات التي نخدمها",
    title: "موثوقون في أهم الصناعات وأكثرها تطلباً في الكويت.",
    desc: "من القطاع الحكومي والمصرفي إلى النفط والغاز والبنية التحتية للمؤسسات — صُممت حلولنا للبيئات التي لا تقبل المساومة على الأداء والأمن والموثوقية.",
    s1t: "الحكومة والجهات التنظيمية",
    s1d: "البنك المركزي الكويتي والمؤسسات الحكومية",
    s2t: "البنوك والخدمات المالية",
    s2d: "البنوك والمؤسسات المالية الكبرى في الكويت",
    s3t: "النفط والغاز",
    s3d: "شركة نفط الكويت والبنية التحتية للطاقة",
    s4t: "المؤسسات والقطاع الخاص",
    s4d: "الشركات الإقليمية والرعاية الصحية والاتصالات"
  },
  footer: {
    copy: "© ٢٠٢٦ مسارات تكنولوجيز · الكويت",
    tagline: "نبني الثقة الرقمية والذكاء المؤسسي",
    insights: "مركز المعرفة",
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
    nav_label: "التنقل",
    connect_label: "التواصل",
    support_label: "استفسار الدعم"
  },
  insights_page: {
    kicker: "مركز المعرفة",
    title: "رؤى ووجهات نظر.",
    body: "أفكار حول التقنية والأمن والتحول الرقمي في الكويت.",
    read_article: "اقرأ المقال ←",
    all: "الكل",
    filter_cyber: "الأمن السيبراني",
    filter_cloud: "السحابة",
    filter_ai: "الذكاء الاصطناعي",
    read_time: "دقيقة قراءة",
    related: "مقالات ذات صلة",
    back: "→ العودة إلى المقالات",
    share: "شارك هذا المقال",
    home_title: "أحدث المقالات",
    home_link: "← عرض جميع المقالات"
  },
  common: {
    loading: "جارٍ التحميل...",
    error: "حدث خطأ ما",
    back_home: "العودة للرئيسية",
    page_not_found: "الصفحة غير موجودة",
    offline: "أنت غير متصل بالإنترنت",
    check_connection: "يرجى التحقق من اتصالك",
    skip: "انقر للتخطي"
  }
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  isRTL: false,
  t: (key) => key
})

export function LanguageProvider({ 
  children 
}: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    // Load saved language from localStorage
    const saved = localStorage.getItem('masarat_language') as Language
    if (saved) {
      setLanguageState(saved)
      document.documentElement.lang = saved
      document.documentElement.dir = saved === 'ar' ? 'rtl' : 'ltr'
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('masarat_language', lang)
    // Apply to entire document instantly
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }

  const isRTL = language === 'ar'

  // Translation function
  const t = (key: string): string => {
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = language === 'ar' ? arTranslations : enTranslations;
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = (value as Record<string, unknown>)[k];
      } else {
        value = undefined;
        break;
      }
    }
    return (typeof value === 'string' ? value : key);
  }

  return (
    <LanguageContext.Provider 
      value={{ language, setLanguage, isRTL, t }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
