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
    cta: "Start a Project",
    dropdowns: {
      about: {
        who_we_are: { title: "Who We Are", brief: "Our story and founding" },
        vision_mission: { title: "Vision & Mission", brief: "What drives us forward" },
        delivery_model: { title: "Delivery Model", brief: "How we work" },
        tech_partners: { title: "Technology Partners", brief: "Our global ecosystem" }
      },
      solutions: {
        enterprise: { title: "Enterprise Transformation", brief: "Digital platforms & automation" },
        ai_data: { title: "AI, Data & Intelligent Systems", brief: "End-to-end AI lifecycle" },
        cybersecurity: { title: "Cybersecurity & Digital Trust", brief: "Enterprise security" },
        elv: { title: "ELV & Smart Systems", brief: "Integrated physical systems" },
        infrastructure: { title: "Mission-Critical Infrastructure", brief: "Data centers & operations" }
      },
      resources: {
        knowledge: { title: "Knowledge Hub", brief: "Insights & perspectives" },
        case_studies: { title: "Case Studies", brief: "Delivered projects" },
        downloads: { title: "Downloads", brief: "Company profile & brochures" }
      },
      career: {
        why_masarat: { title: "Why Work at Masarat", brief: "Our culture & values" },
        benefits: { title: "Our Benefits", brief: "What we offer our team" },
        positions: { title: "Open Positions", brief: "Current opportunities" }
      }
    }
  },
  hero: {
    label: "Kuwait's IT Partner",
    line1: "We architect",
    line2: "digital trust.",
    line3: "for Kuwait.",
    sub: "Cybersecurity · Cloud · AI · IT Consulting",
    btn1: "Explore Solutions",
    btn2: "Contact Us"
  },
  home: {
    power_quote: "We don't just implement technology. We take ownership of outcomes — delivering solutions that are secure, intelligent, and built to last.",
    power_sub: "Masarat Technologies partners with Kuwait's most critical organisations to design, build, and operate intelligent digital and infrastructure environments.",
    power_btn: "Why We Are Different →",
    vision_eyebrow: "OUR VISION",
    vision_text: "To be a trusted partner driving digital transformation and intelligent technology adoption in Kuwait and the region.",
    mission_eyebrow: "OUR MISSION",
    mission_text: "To deliver reliable and high-quality digital, AI, and infrastructure solutions through strong partnerships, skilled teams, and a commitment to creating real value.",
    learn_more: "Learn More →"
  },
  solutions: {
    kicker: "Core Capabilities",
    title: "Integrated solutions for mission-critical environments.",
    page_title: "Integrated Solutions.",
    page_sub: "Five capabilities. One accountable partner.",
    grid_title: "What We Solve",
    grid_sub: "Our capabilities span the full enterprise stack — from digital platforms and AI to physical infrastructure and data centers.",
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
    link: "Know More",
    learnmore: "Know More →",
    cta_title: "Ready to get started?",
    cta_sub: "Talk to our solutions team about your specific requirements.",
    cta_btn1: "Schedule a Consultation",
    detail: {
      overview: "What We Deliver",
      process: "How We Deliver",
      process_sub: "Our proven delivery model in practice.",
      approach: "Our Approach",
      why: "Why Masarat",
      cta: "Schedule a Consultation",
      ctabanner: "Ready to get started?",
      ctasub: "Talk to our solutions team about your specific requirements.",
      btn1: "Schedule a Consultation",
      btn2: "Download Overview",
      banner_text: "Delivered with single-point accountability and proven execution capability."
    }
  },
  career_page: {
    kicker: "Join Our Team",
    hero_title: "Build What Matters.",
    hero_sub: "Join a team delivering enterprise technology to Kuwait's most critical institutions.",
    hero_cta: "View Open Positions",
    why_title: "Why Work at Masarat",
    why_statement: "We build technology that powers Kuwait's most important organisations. When you join Masarat, your work matters from day one.",
    v1t: "Meaningful Work",
    v1d: "Your work directly impacts government, banking, and critical infrastructure across Kuwait.",
    v2t: "Real Growth",
    v2d: "Exposure to enterprise-scale projects, leading global technology partners, and senior client engagement.",
    v3t: "Strong Team",
    v3d: "Work alongside certified professionals with deep domain expertise across IT, AI, and infrastructure.",
    benefits_title: "What We Offer",
    b1t: "Competitive Compensation",
    b1d: "Market-aligned packages with performance-based rewards.",
    b2t: "Learning & Development",
    b2d: "Certifications, training programs, and access to global tech partner learning platforms.",
    b3t: "Exposure to Global Tech",
    b3d: "Work with Broadcom, Huawei, Qlik, Nozomi and other world-class vendors.",
    b4t: "Fast Career Progression",
    b4d: "Merit-based advancement in a growing company with expanding capabilities.",
    b5t: "Collaborative Culture",
    b5d: "A team that values accountability, quality, and delivering real results.",
    b6t: "Based in Kuwait",
    b6d: "Work on local projects that shape the technology landscape of Kuwait and the GCC.",
    culture_title: "Our Work Culture",
    culture_quote: "We do not just deploy technology. We take ownership of outcomes.",
    p1t: "Accountability First",
    p1d: "Every team member owns their deliverables end to end.",
    p2t: "Quality Without Compromise",
    p2d: "We operate in environments where failure is not an option.",
    p3t: "Integrated Thinking",
    p3d: "We connect digital and physical — no silos, no handover gaps.",
    positions_title: "Current Opportunities",
    no_positions_title: "No open roles right now",
    no_positions_desc: "We are always interested in connecting with talented people. Send your CV and we will reach out when the right opportunity arises.",
    send_cv: "Send Your CV",
    email: "info@masaratkwt.com"
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
    solutions: "Solutions",
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
    solutions: "الحلول",
    about: "من نحن",
    career: "الوظائف",
    resources: "الموارد",
    contact: "تواصل معنا",
    cta: "ابدأ مشروعك",
    dropdowns: {
      about: {
        who_we_are: { title: "من نحن", brief: "قصتنا وتأسيسنا" },
        vision_mission: { title: "الرؤية والرسالة", brief: "ما يدفعنا للأمام" },
        delivery_model: { title: "نموذج التسليم", brief: "كيف نعمل" },
        tech_partners: { title: "شركاء التقنية", brief: "نظامنا العالمي" }
      },
      solutions: {
        enterprise: { title: "التحول المؤسسي", brief: "المنصات الرقمية والأتمتة" },
        ai_data: { title: "الذكاء الاصطناعي والبيانات", brief: "دورة حياة الذكاء الاصطناعي" },
        cybersecurity: { title: "الأمن السيبراني", brief: "أمن المؤسسات" },
        elv: { title: "أنظمة ELV والأنظمة الذكية", brief: "الأنظمة المادية المتكاملة" },
        infrastructure: { title: "البنية التحتية الحيوية", brief: "مراكز البيانات والعمليات" }
      },
      resources: {
        knowledge: { title: "مركز المعرفة", brief: "رؤى ووجهات نظر" },
        case_studies: { title: "دراسات الحالة", brief: "المشاريع المنفذة" },
        downloads: { title: "التحميلات", brief: "ملف الشركة والكتيبات" }
      },
      career: {
        why_masarat: { title: "لماذا تعمل في مسارات", brief: "ثقافتنا وقيمنا" },
        benefits: { title: "ميزاتنا", brief: "ما نقدمه لفريقنا" },
        positions: { title: "الوظائف الشاغرة", brief: "الفرص الحالية" }
      }
    }
  },
  hero: {
    label: "شريكك التقني في الكويت",
    line1: "نحن نبني",
    line2: "الثقة الرقمية.",
    line3: "للكويت.",
    sub: "الأمن السيبراني · السحابة · الذكاء الاصطناعي · استشارات تقنية",
    btn1: "استكشف الحلول",
    btn2: "تواصل معنا"
  },
  home: {
    power_quote: "نحن لا نكتفي بتنفيذ التقنية، بل نتحمل مسؤولية النتائج — لنقدم حلولاً آمنة وذكية ومبنية لتدوم.",
    power_sub: "تتعاون مسارات تكنولوجيز مع المؤسسات الأكثر حيوية في الكويت لتصميم وبناء وتشغيل البيئات الرقمية والبنية التحتية الذكية.",
    power_btn: "لماذا نحن مختلفون ←",
    vision_eyebrow: "رؤيتنا",
    vision_text: "أن نكون شريكاً موثوقاً يقود التحول الرقمي واعتماد التقنية الذكية في الكويت والمنطقة.",
    mission_eyebrow: "مهمتنا",
    mission_text: "تقديم حلول رقمية وذكاء اصطناعي وبنية تحتية موثوقة وعالية الجودة من خلال شراكات قوية وفرق متخصصة والتزام بخلق قيمة حقيقية.",
    learn_more: "اعرف المزيد ←"
  },
  solutions: {
    kicker: "القدرات الأساسية",
    title: "حلول متكاملة للبيئات الحيوية.",
    page_title: "حلول متكاملة.",
    page_sub: "خمس قدرات. شريك واحد مسؤول.",
    grid_title: "ما نحله",
    grid_sub: "تغطي قدراتنا كامل النطاق المؤسسي — من المنصات الرقمية والذكاء الاصطناعي إلى البنية التحتية المادية ومراكز البيانات.",
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
    link: "اعرف المزيد",
    learnmore: "اعرف المزيد ←",
    cta_title: "هل أنت مستعد للبدء؟",
    cta_sub: "تحدث مع فريق الحلول لدينا حول متطلباتك المحددة.",
    cta_btn1: "جدوِّل استشارة",
    detail: {
      overview: "ما نقدمه",
      process: "كيف نسلم",
      process_sub: "نموذج التسليم المثبت لدينا في الممارسة.",
      approach: "منهجيتنا",
      why: "لماذا مسارات",
      cta: "جدوِّل استشارة",
      ctabanner: "هل أنت مستعد للبدء؟",
      ctasub: "تحدث مع فريق الحلول لدينا حول متطلباتك المحددة.",
      btn1: "جدوِّل استشارة",
      btn2: "تحميل العرض العام",
      banner_text: "يتم التسليم بمسؤولية نقطة واحدة وقدرة تنفيذ مثبتة."
    }
  },
  career_page: {
    kicker: "انضم إلى فريقنا",
    hero_title: "ابنِ ما يهم.",
    hero_sub: "انضم إلى فريق يقدم تقنية المؤسسات لأهم المؤسسات الحيوية في الكويت.",
    hero_cta: "عرض الوظائف الشاغرة",
    why_title: "لماذا تعمل في مسارات",
    why_statement: "نحن نبني التقنية التي تدير أهم المؤسسات في الكويت. عندما تنضم إلى مسارات، فإن عملك يهم من اليوم الأول.",
    v1t: "عمل هادف",
    v1d: "يؤثر عملك بشكل مباشر على الحكومة والخدمات المصرفية والبنية التحتية الحيوية في جميع أنحاء الكويت.",
    v2t: "نمو حقيقي",
    v2d: "التعرض لمشاريع على مستوى المؤسسات، وشركاء تقنية عالميين رائدين، وتفاعل رفيع المستوى مع العملاء.",
    v3t: "فريق قوي",
    v3d: "اعمل جنبًا إلى جنب مع محترفين معتمدين يتمتعون بخبرة عميقة في مجالات تقنية المعلومات والذكاء الاصطناعي والبنية التحتية.",
    benefits_title: "ما نقدمه",
    b1t: "تعويضات تنافسية",
    b1d: "حزم متوافقة مع السوق مع مكافآت قائمة على الأداء.",
    b2t: "التعلم والتطوير",
    b2d: "شهادات وبرامج تدريبية والوصول إلى منصات التعلم لشركاء التقنية العالميين.",
    b3t: "التعرض للتقنية العالمية",
    b3d: "العمل مع Broadcom و Huawei و Qlik و Nozomi وغيرهم من الموردين العالميين.",
    b4t: "تقدم وظيفي سريع",
    b4d: "تقدم قائم على الجدارة في شركة متنامية ذات قدرات متوسعة.",
    b5t: "ثقافة تعاونية",
    b5d: "فريق يقدر المساءلة والجودة وتقديم نتائج حقيقية.",
    b6t: "مقرنا في الكويت",
    b6d: "اعمل في مشاريع محلية تشكل المشهد التقني في الكويت ودول مجلس التعاون الخليجي.",
    culture_title: "ثقافة عملنا",
    culture_quote: "نحن لا نكتفي بنشر التقنية، بل نتحمل مسؤولية النتائج.",
    p1t: "المساءلة أولاً",
    p1d: "كل عضو في الفريق يمتلك مخرجاته من البداية إلى النهاية.",
    p2t: "الجودة دون مساومة",
    p2d: "نحن نعمل في بيئات لا يكون الفشل فيها خيارًا.",
    p3t: "التفكير المتكامل",
    p3d: "نحن نربط الرقمي والمادي — لا حواجز، لا فجوات في التسليم.",
    positions_title: "الفرص الحالية",
    no_positions_title: "لا توجد أدوار شاغرة حاليًا",
    no_positions_desc: "نحن مهتمون دائمًا بالتواصل مع الموهوبين. أرسل سيرتك الذاتية وسنتواصل معك عندما تظهر الفرصة المناسبة.",
    send_cv: "أرسل سيرتك الذاتية",
    email: "info@masaratkwt.com"
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
  footer: {
    tagline: "نبني الثقة الرقمية والذكاء المؤسسي",
    solutions: "الحلول",
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
