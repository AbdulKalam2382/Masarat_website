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
    services: "Services",
    about: "About",
    career: "Career",
    contact: "Contact",
    cta: "Start a Project"
  },
  hero: {
    label: "Kuwait's IT Partner",
    line1: "We architect",
    line2: "digital trust.",
    line3: "for Kuwait.",
    sub: "Cybersecurity · Cloud · AI · IT Consulting",
    btn1: "Explore Services",
    btn2: "Contact Us"
  },
  about: {
    kicker: "Who We Are",
    title: "Partners & Committers to Success.",
    body: "Masarat Technologies is a Kuwait-based enterprise technology partner delivering integrated digital transformation, artificial intelligence, and mission-critical infrastructure solutions. We enable organizations to design, build, and operate intelligent, secure, and scalable environments — combining strategic advisory with deep execution capability.\n\nThrough our integrated delivery model, established in close partnership with Hydrotek Engineering, Masarat provides a single point of accountability across both digital platforms and physical infrastructure.",
    link: "Learn More About Us"
  },
  services: {
    kicker: "Core Capabilities",
    title: "Integrated solutions for mission-critical environments.",
    page_title: "End-to-end technology solutions.",
    page_sub: "Built for Kuwait's most demanding government, banking, oil & gas, and enterprise environments.",
    body: "From enterprise transformation and AI integration to cybersecurity, intelligent infrastructure, and data center delivery — Masarat delivers with accountability and long-term value.",
    s1title: "Enterprise Transformation & Digital Platforms",
    s1desc: "Enabling organisations to redesign, automate, and scale their core operations through integrated enterprise platforms.",
    s2title: "AI, Data & Intelligent Systems",
    s2desc: "Building the data and AI foundation that enables intelligent decision-making at enterprise scale.",
    s3title: "Cybersecurity & Digital Trust",
    s3desc: "Protecting Kuwait's most critical digital environments through enterprise-grade security frameworks.",
    s4title: "ELV & Smart Systems",
    s4desc: "Designing and deploying integrated IT infrastructure and smart environments for modern enterprises.",
    s5title: "Mission-Critical Infrastructure & Data Centers",
    s5desc: "Full lifecycle data center delivery — from design and construction to operations and facility management.",
    link: "Explore Capabilities",
    learnmore: "Explore Capabilities →",
    cta_title: "Not sure where to start?",
    cta_sub: "Our team will assess your environment and recommend the right capabilities for your organisation.",
    cta_btn1: "Schedule a Consultation",
    detail: {
      overview: "What We Deliver",
      process: "How We Do It",
      why: "Why Masarat",
      cta: "Get a Free Consultation",
      ctabanner: "Ready to get started?",
      ctasub: "Talk to our experts today.",
      btn1: "Start a Project",
      btn2: "Contact Us"
    }
  },
  process: {
    kicker: "Delivery Model",
    title: "A process built on precision.",
    p1t: "Assessment & Planning",
    p1d: "Deep-dive assessment of your current infrastructure, risks, and strategic goals.",
    p2t: "Architecture & Design",
    p2d: "Custom blueprints engineered for your organisation's exact scale and requirements.",
    p3t: "Implementation & Integration",
    p3d: "Zero-downtime execution with full accountability from our engineering team.",
    p4t: "Testing & Deployment",
    p4d: "Rigorous validation and controlled go-live across all integrated systems."
  },
  about_page: {
    kicker: "Our Story",
    title: "40 years of building trust.",
    body: "Masarat Technologies is a Kuwait-based enterprise technology partner delivering integrated digital transformation, artificial intelligence, and mission-critical infrastructure solutions. We enable organizations to design, build, and operate intelligent, secure, and scalable environments — combining strategic advisory with deep execution capability.\n\nThrough our integrated delivery model, established in close partnership with Hydrotek Engineering, Masarat provides a single point of accountability across both digital platforms and physical infrastructure.",
    vision_title: "Our Vision",
    vision_body: "To be a trusted partner driving digital transformation and intelligent technology adoption in Kuwait and the region.",
    mission_title: "Our Mission",
    mission_body: "To deliver reliable and high-quality digital, AI, and infrastructure solutions through strong partnerships, skilled teams, and a commitment to creating real value for our customers.",
    team_kicker: "Our Team",
    team_title: "Certified professionals.",
    challenges_title: "The Challenges We Solve",
    challenge1_title: "Fragmented Systems",
    challenge1_desc: "Systems that are not fully integrated across business functions.",
    challenge2_title: "Underutilised Data",
    challenge2_desc: "Growing data volumes without clear utilization or actionable insights.",
    challenge3_title: "Security & Operational Pressure",
    challenge3_desc: "Increasing security demands alongside growing operational complexity.",
    challenges_callout: "Solutions that are simple to operate, data-driven, and effective in real working environments.",
    quality_title: "Quality & Compliance",
    quality_body: "Masarat operates in line with international standards:",
    quality_iso1: "ISO 9001 — Quality Management",
    quality_iso2: "ISO 27001 — Information Security",
    quality_iso3: "ISO 20000 — IT Service Management",
    quality_footer: "Ensuring consistency, security, and operational excellence."
  },
  contact_page: {
    kicker: "Get in Touch",
    title: "Let's build something",
    title_accent: "great.",
    body: "Ready to transform your organisation's technology stack? Our team is standing by.",
    website_label: "Website",
    email_label: "Email",
    phone_label: "Phone",
    form_firstname: "First name",
    form_lastname: "Last name",
    form_email: "Work email",
    form_company: "Company name",
    form_message: "Tell us about your project...",
    form_submit: "Submit",
    form_sending: "Sending...",
    form_sent: "Message Sent ✓",
    form_success: "We will be in touch within 24 hours.",
    form_error: "Something went wrong. Please try again."
  },
  career_page: {
    kicker: "Join Our Team",
    title: "Build the future with us.",
    body: "We are always looking for talented IT professionals in Kuwait.",
    no_positions: "No open positions right now.",
    send_cv: "Send your CV to:",
    email: "info@masaratkwt.com"
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
  footer: {
    tagline: "Architecting Digital Trust & Enterprise Intelligence",
    services: "Services",
    about: "About",
    career: "Career",
    contact: "Contact",
    insights: "Insights",
    tech_partners: "Technology Partners",
    privacy: "Privacy",
    terms: "Terms",
    copy: "© 2026 Masarat Technologies · Kuwait · All rights reserved"
  },
  common: {
    loading: "Loading...",
    error: "Something went wrong",
    back_home: "Back to Home",
    page_not_found: "Page not found",
    offline: "You are offline",
    check_connection: "Please check your connection"
  }
}

const arTranslations = {
  nav: {
    services: "الخدمات",
    about: "من نحن",
    career: "الوظائف",
    contact: "تواصل معنا",
    cta: "ابدأ مشروعك"
  },
  hero: {
    label: "شريكك التقني في الكويت",
    line1: "نحن نبني",
    line2: "الثقة الرقمية.",
    line3: "للكويت.",
    sub: "الأمن السيبراني · السحابة · الذكاء الاصطناعي · استشارات تقنية",
    btn1: "استكشف خدماتنا",
    btn2: "تواصل معنا"
  },
  about: {
    kicker: "من نحن",
    title: "شركاء وملتزمون بالنجاح.",
    body: "مسارات تكنولوجيز شريك تقني مؤسسي مقره الكويت، يقدم حلولاً متكاملة للتحول الرقمي والذكاء الاصطناعي والبنية التحتية الحيوية. نمكّن المؤسسات من تصميم وبناء وتشغيل بيئات ذكية وآمنة وقابلة للتوسع.\n\nمن خلال نموذج التسليم المتكامل بالشراكة مع هيدروتيك للهندسة، تقدم مسارات نقطة مساءلة واحدة عبر المنصات الرقمية والبنية التحتية المادية.",
    link: "اعرف أكثر عنّا"
  },
  services: {
    kicker: "القدرات الأساسية",
    title: "حلول متكاملة للبيئات الحيوية.",
    page_title: "حلول تقنية شاملة من البداية إلى النهاية.",
    page_sub: "مصممة لأكثر بيئات الكويت تطلبًا في القطاع الحكومي والمصرفي والنفط والغاز والمؤسسات.",
    body: "من التحول المؤسسي وتكامل الذكاء الاصطناعي إلى الأمن السيبراني والبنية التحتية الذكية وتسليم مراكز البيانات — تقدم مسارات بمساءلة وقيمة طويلة الأمد.",
    s1title: "التحول المؤسسي والمنصات الرقمية",
    s1desc: "تمكين المؤسسات من إعادة تصميم وأتمتة وتوسيع عملياتها الأساسية من خلال منصات مؤسسية متكاملة.",
    s2title: "الذكاء الاصطناعي والبيانات والأنظمة الذكية",
    s2desc: "بناء أساس البيانات والذكاء الاصطناعي الذي يُمكّن من اتخاذ قرارات ذكية على نطاق مؤسسي.",
    s3title: "الأمن السيبراني والثقة الرقمية",
    s3desc: "حماية البيئات الرقمية الأكثر أهمية في الكويت من خلال أطر أمنية على مستوى المؤسسات.",
    s4title: "أنظمة ELV والأنظمة الذكية",
    s4desc: "تصميم ونشر البنية التحتية لتقنية المعلومات المتكاملة والبيئات الذكية للمؤسسات الحديثة.",
    s5title: "البنية التحتية الحيوية ومراكز البيانات",
    s5desc: "تسليم كامل لدورة حياة مراكز البيانات — من التصميم والإنشاء إلى التشغيل وإدارة المرافق.",
    link: "استكشف قدراتنا",
    learnmore: "استكشف قدراتنا →",
    cta_title: "لا تعرف من أين تبدأ؟",
    cta_sub: "سيقيّم فريقنا بيئتك ويوصي بالقدرات المناسبة لمؤسستك.",
    cta_btn1: "جدوِّل استشارة",
    detail: {
      overview: "ما نقدمه",
      process: "كيف نعمل",
      why: "لماذا مسارات",
      cta: "احصل على استشارة مجانية",
      ctabanner: "هل أنت مستعد للبدء؟",
      ctasub: "تحدث مع خبرائنا اليوم.",
      btn1: "ابدأ مشروعًا",
      btn2: "تواصل معنا"
    }
  },
  process: {
    kicker: "نموذج التسليم",
    title: "منهجية مبنية على الدقة.",
    p1t: "التقييم والتخطيط",
    p1d: "تقييم معمّق للبنية التحتية الحالية والمخاطر والأهداف الاستراتيجية.",
    p2t: "الهندسة المعمارية والتصميم",
    p2d: "مخططات مخصصة مصممة وفق الحجم والمتطلبات الدقيقة لمؤسستك.",
    p3t: "التنفيذ والتكامل",
    p3d: "تنفيذ بدون توقف مع المساءلة الكاملة من فريق هندستنا.",
    p4t: "الاختبار والنشر",
    p4d: "التحقق الصارم والتشغيل المضبوط عبر جميع الأنظمة المتكاملة."
  },
  about_page: {
    kicker: "قصتنا",
    title: "٤٠ عامًا من بناء الثقة.",
    body: "مسارات تكنولوجيز شريك تقني مؤسسي مقره الكويت، يقدم حلولاً متكاملة للتحول الرقمي والذكاء الاصطناعي والبنية التحتية الحيوية. نمكّن المؤسسات من تصميم وبناء وتشغيل بيئات ذكية وآمنة وقابلة للتوسع.\n\nمن خلال نموذج التسليم المتكامل بالشراكة مع هيدروتيك للهندسة، تقدم مسارات نقطة مساءلة واحدة عبر المنصات الرقمية والبنية التحتية المادية.",
    vision_title: "رؤيتنا",
    vision_body: "أن نكون شريكاً موثوقاً يقود التحول الرقمي واعتماد التقنية الذكية في الكويت والمنطقة.",
    mission_title: "مهمتنا",
    mission_body: "تقديم حلول رقمية وذكاء اصطناعي وبنية تحتية موثوقة وعالية الجودة من خلال شراكات قوية وفرق متخصصة والتزام بخلق قيمة حقيقية لعملائنا.",
    team_kicker: "فريقنا",
    team_title: "محترفون معتمدون.",
    challenges_title: "التحديات التي نحلها",
    challenge1_title: "أنظمة مجزأة",
    challenge1_desc: "أنظمة غير متكاملة بالكامل عبر وظائف الأعمال.",
    challenge2_title: "بيانات غير مستغلة",
    challenge2_desc: "كميات بيانات متنامية دون استخدام واضح أو رؤى قابلة للتنفيذ.",
    challenge3_title: "ضغط أمني وتشغيلي",
    challenge3_desc: "متطلبات أمنية متزايدة جنباً إلى جنب مع تعقيد تشغيلي متنامٍ.",
    challenges_callout: "حلول سهلة التشغيل ومبنية على البيانات وفعّالة في بيئات العمل الحقيقية.",
    quality_title: "الجودة والامتثال",
    quality_body: "تعمل مسارات وفق المعايير الدولية:",
    quality_iso1: "ISO 9001 — إدارة الجودة",
    quality_iso2: "ISO 27001 — أمن المعلومات",
    quality_iso3: "ISO 20000 — إدارة خدمات تقنية المعلومات",
    quality_footer: "لضمان الاتساق والأمن والتميز التشغيلي."
  },
  contact_page: {
    kicker: "تواصل معنا",
    title: "لنبني شيئًا",
    title_accent: "رائعًا.",
    body: "هل أنت مستعد لتحويل بنيتك التقنية؟ فريقنا في انتظارك.",
    website_label: "الموقع",
    email_label: "البريد الإلكتروني",
    phone_label: "الهاتف",
    form_firstname: "الاسم الأول",
    form_lastname: "اسم العائلة",
    form_email: "البريد الإلكتروني للعمل",
    form_company: "اسم الشركة",
    form_message: "أخبرنا عن مشروعك...",
    form_submit: "إرسال",
    form_sending: "جارٍ الإرسال...",
    form_sent: "تم الإرسال ✓",
    form_success: "سنتواصل معك خلال ٢٤ ساعة.",
    form_error: "حدث خطأ ما. يرجى المحاولة مرة أخرى."
  },
  career_page: {
    kicker: "انضم إلى فريقنا",
    title: "ابنِ المستقبل معنا.",
    body: "نبحث دائمًا عن محترفين تقنيين موهوبين في الكويت.",
    no_positions: "لا توجد وظائف شاغرة حاليًا.",
    send_cv: "أرسل سيرتك الذاتية إلى:",
    email: "info@masaratkwt.com"
  },
  insights_page: {
    kicker: "مركز المعرفة",
    title: "رؤى ووجهات نظر.",
    body: "أفكار حول التقنية والأمن والتحول الرقمي في الكويت.",
    read_article: "اقرأ المقال →",
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
  footer: {
    tagline: "نبني الثقة الرقمية والذكاء المؤسسي",
    services: "الخدمات",
    about: "من نحن",
    career: "الوظائف",
    contact: "تواصل معنا",
    insights: "المقالات",
    tech_partners: "شركاء التقنية",
    privacy: "الخصوصية",
    terms: "الشروط",
    copy: "© ٢٠٢٦ مسارات تكنولوجيز · الكويت · جميع الحقوق محفوظة"
  },
  common: {
    loading: "جارٍ التحميل...",
    error: "حدث خطأ ما",
    back_home: "العودة للرئيسية",
    page_not_found: "الصفحة غير موجودة",
    offline: "أنت غير متصل بالإنترنت",
    check_connection: "يرجى التحقق من اتصالك"
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
