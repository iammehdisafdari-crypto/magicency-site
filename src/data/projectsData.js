/**
 * MAGICENCY CENTRALIZED WORK & CASE STUDY DATA MODEL
 * 
 * Philosophy: "Proof of Thinking + Proof of Execution"
 * Architected to scale for future dedicated /work/[slug] routes.
 */

export const CHALLENGE_CATEGORIES = {
  en: [
    { id: 'all', code: '00', label: 'ALL CHALLENGES', desc: 'Complete index of strategic solutions' },
    { id: '01-position', code: '01', label: 'FIND THE POSITION', desc: 'Positioning / Brand Strategy / Identity' },
    { id: '02-experience', code: '02', label: 'BUILD THE EXPERIENCE', desc: 'Websites / Digital Products / UX' },
    { id: '03-demand', code: '03', label: 'CREATE DEMAND', desc: 'Campaigns / Content / Creative Velocity' },
    { id: '04-acquisition', code: '04', label: 'SCALE ACQUISITION', desc: 'Performance Marketing / Inbound Architecture' },
    { id: '05-system', code: '05', label: 'CONNECT THE SYSTEM', desc: 'Integrated Growth / Telemetry / Measurement' }
  ],
  fa: [
    { id: 'all', code: '۰۰', label: 'همه چالش‌ها', desc: 'ایندکس کامل سیستم‌های مهندسی‌شده' },
    { id: '01-position', code: '۰۱', label: 'تثبیت جایگاه برند', desc: 'جایگاه‌یابی / استراتژی برند / هویت' },
    { id: '02-experience', code: '۰۲', label: 'خلق تجربه دیجیتال', desc: 'پلتفرم‌های وب / محصولات دیجیتال / UX' },
    { id: '03-demand', code: '۰۳', label: 'خلق تقاضا و کشش بازار', desc: 'کمپین‌ها / تولید محتوا / سناریونویسی' },
    { id: '04-acquisition', code: '۰۴', label: 'مقیاس‌پذیری جذب', desc: 'پرفورمنس مارکتینگ / معماری ورودی' },
    { id: '05-system', code: '۰۵', label: 'یکپارچه‌سازی سیستم رشد', desc: 'سیستم جامع رشد / تله‌متری / اتریبیوشن' }
  ]
};

export const POINT_OF_VIEW_DATA = {
  en: {
    eyebrow: 'PHILOSOPHY // HOW WE THINK',
    heading: 'The brief is rarely the whole problem.',
    lead: 'Clients often describe the symptom, not the structural cause. Magicency looks underneath the initial request to engineer what actually moves the business.',
    steps: [
      {
        num: '01',
        type: 'THE REQUEST',
        example: '"We need a new website."',
        reality: 'A client usually asks for visual restyling when conversions stall.',
        insight: 'Design without positioning is just decoration.'
      },
      {
        num: '02',
        type: 'THE REAL PROBLEM',
        example: '"The positioning is unclear."',
        reality: 'Visitors leave because value proposition and buyer journey are broken.',
        insight: 'Friction lives in the thinking before it lives in the UI.'
      },
      {
        num: '03',
        type: 'THE SYSTEM',
        example: '"Engineer the operating engine."',
        reality: 'We construct connected messaging, digital experience, and acquisition loops.',
        insight: 'When every layer synchronizes, scale becomes predictable.'
      }
    ]
  },
  fa: {
    eyebrow: 'فلسفه فکری // چارچوب نگرش مجیکنسـی',
    heading: 'مسئله واقعی به‌ندرت در خود بریف خلاصه می‌شود.',
    lead: 'کسب‌وکارها معمولاً نشانه را مطرح می‌کنند، نه ریشه ساختاری را. مجیکنسـی به لایه‌های زیرین درخواست ورود می‌کند تا سیستمی را مهندسی کند که واقعاً بیزنس را متحول سازد.',
    steps: [
      {
        num: '۰۱',
        type: 'درخواست اولیه',
        example: '«ما به یک وب‌سایت جدید نیاز داریم.»',
        reality: 'کسب‌وکارها معمولاً هنگام افت نرخ تبدیل به فکر تغییر ظاهر سایت می‌افتند.',
        insight: 'طراحی بدون جایگاه‌یابی دقیق، صرفاً تغییر دکوراسیون است.'
      },
      {
        num: '۰۲',
        type: 'مسئله بنیادین',
        example: '«جایگاه و ارزش پیشنهادی شفاف نیست.»',
        reality: 'کاربران از دست می‌روند چون پیام برند و مسیر تصمیم‌گیری نامتعادل است.',
        insight: 'اصطکاک پیش از آنکه در کد باشد، در مدل ذهنی و پیام‌رسانی است.'
      },
      {
        num: '۰۳',
        type: 'سیستم یکپارچه',
        example: '«مهندسی موتور عملیاتی رشد.»',
        reality: 'پیام برند، پلتفرم دیجیتال و چرخه‌های جذب را در یک ساختار هماهنگ می‌کنیم.',
        insight: 'وقتی تمام اجزا به هم متصل شوند، رشد دیگر اتفاقی نیست.'
      }
    ]
  }
};

export const SELECTIVITY_DATA = {
  en: {
    badge: 'SELECTIVITY // CREDIBILITY',
    headline: 'Selected, not exhaustive.',
    subtext: "We'd rather show fewer projects with enough context to understand the thinking behind them than fill the page with screenshots.",
    qualitativeStrip: [
      { label: 'STRONGER POSITIONING', desc: 'Clear differentiation that filters for ideal clients' },
      { label: 'BETTER EXPERIENCE', desc: 'Frictionless digital touchpoints built for conversion' },
      { label: 'CONNECTED SYSTEM', desc: 'Synchronized telemetry and acquisition feedback loops' },
      { label: 'CLEARER ACQUISITION', desc: 'Predictable capital allocation with closed-loop attribution' },
      { label: 'MEASURABLE GROWTH', desc: 'Compounding enterprise value over superficial volume' }
    ]
  },
  fa: {
    badge: 'گزینش‌گری // اعتبار حرفه‌ای',
    headline: 'منتخب، نه پرحجم و نمایشی.',
    subtext: 'ما ترجیح می‌دهیم پروژه‌های کمتری را با زمینه فکری، تصمیم‌ها و جزئیات مهندسی کافی نشان دهیم، تا اینکه صفحه را با اسکرین‌شات‌های بی‌پشتوانه پر کنیم.',
    qualitativeStrip: [
      { label: 'تثبیت جایگاه برند', desc: 'تمایز معنادار که مشتریان هدف رده‌بالا را جذب می‌کند' },
      { label: 'تجربه کاربری بی‌نقص', desc: 'نقاط تماس دیجیتال روان که نرخ تبدیل را افزایش می‌دهند' },
      { label: 'سیستم متصل و هماهنگ', desc: 'تله‌متری دقیق و چرخه‌های پیوسته بازخورد جذب' },
      { label: 'جذب هدفمند و شفاف', desc: 'تخصیص حساب‌شده سرمایه با رهگیری دقیق کانال‌ها' },
      { label: 'رشد پایدار کسب‌وکار', desc: 'خلق ارزش تصاعدی برای بیزنس به جای آمارهای سطحی' }
    ]
  }
};

export const PROJECTS_DATA = [
  {
    id: 'velox-financial',
    slug: 'velox-financial',
    featured: true,
    num: '01',
    numFa: '۰۱',
    year: '2026',
    challengeCategory: '02-experience',
    client: {
      en: 'VELOX FINANCIAL',
      fa: 'فین‌تک ولوکس (VELOX)'
    },
    title: {
      en: 'Algorithmic Onboarding & Wealth Infrastructure',
      fa: 'موتور الگوریتمی ثبت‌نام و پلتفرم معاملاتی'
    },
    industry: {
      en: 'Fintech & Wealth Infrastructure',
      fa: 'زیرساخت فین‌تک و مدیریت دارایی'
    },
    challenge: {
      en: 'A high-frequency trading platform struggling with onboarding friction: 62% drop-off before initial deposit and severe UX fragmentation between desktop and mobile environments.',
      fa: 'پلتفرم پیشرفته معاملاتی با ریزش ۶۲ درصدی کاربران در فرآیند احراز هویت اولیه و عدم پیوستگی تجربه کاربر بین نسخه‌های وب و اپلیکیشن موبایل.'
    },
    theMove: {
      en: 'Re-architected the entire account creation lifecycle into an instant 3-step verification flow with real-time biometric validation and deterministic attribution telemetry.',
      fa: 'بازطراحی صفر تا صد چرخه ثبت‌نام به یک فرآیند ۳ مرحله‌ای آنی با احراز هویت هوشمند و یکپارچه‌سازی تله‌متری جذب.'
    },
    services: {
      en: ['Product Architecture', 'Frictionless Onboarding', 'High-Intent CRO', 'Performance Infrastructure'],
      fa: ['معماری محصول دیجیتال', 'ساده‌سازی آنبردینگ', 'بهینه‌سازی نرخ تبدیل', 'زیرساخت پرفورمنس']
    },
    outcome: {
      en: 'Created a unified digital operating system that compressed onboarding friction by 70%, unlocking instant liquidity deposits and compounding active trader retention.',
      fa: 'ایجاد سیستم یکپارچه معاملاتی، کاهش ۷۰ درصدی زمان ثبت‌نام و تبدیل کاربران جدید به معامله‌گران فعال با وفاداری بلندمدت.'
    },
    qualitativeHighlights: {
      en: ['Seamless Instant Onboarding', 'Zero-Latency Verification', 'Unified Web & Mobile Architecture'],
      fa: ['آنبردینگ بدون اصطکاک', 'احراز هویت بدون تأخیر', 'معماری یکپارچه وب و اپ']
    },
    media: {
      primary: '/assets/work/velox_primary.jpg',
      secondary: '/assets/work/velox_secondary.jpg',
      badgeEn: 'DESKTOP PLATFORM UI',
      badgeFa: 'معماری پلتفرم وب'
    }
  },
  {
    id: 'lumina-luxury',
    slug: 'lumina-luxury',
    featured: false,
    num: '02',
    numFa: '۰۲',
    year: '2025 - 2026',
    challengeCategory: '03-demand',
    client: {
      en: 'LUMINA LUXURY',
      fa: 'برند لومینا (LUMINA)'
    },
    title: {
      en: 'High-Velocity Narrative & Direct-to-Consumer Engine',
      fa: 'موتور هویت روایی و فروش مستقیم به مشتری'
    },
    industry: {
      en: 'Direct-to-Consumer // Luxury Apparel',
      fa: 'پوشاک لوکس و خرده‌فروشی D2C'
    },
    challenge: {
      en: 'A heritage apparel atelier trapped in traditional retail wholesale, lacking direct consumer ownership, scalable digital brand storytelling, and predictable VIP client retention.',
      fa: 'برند اصیل پوشاک که در الگوهای سنتی عمده‌فروشی متوقف شده بود و فاقد کانال مستقیم ارتباط با مشتری، روایت دیجیتال و تکرار خرید بود.'
    },
    theMove: {
      en: 'Engineered an editorial direct-to-consumer digital flagship backed by dynamic video lookbooks, psychological storytelling hooks, and automated VIP client retention cycles.',
      fa: 'طراحی و پیاده‌سازی فروشگاه دیجیتال پرچمدار، تولید لوک‌بوک‌های ویدیویی سینمایی و اتوماسیون چرخه‌های وفاداری مشتریان VIP.'
    },
    services: {
      en: ['Brand Positioning', 'Editorial Art Direction', 'Creative Hook Testing', 'D2C Flagship Architecture'],
      fa: ['استراتژی جایگاه برند', 'مدیریت هنری و محتوا', 'سناریونویسی تبلیغات', 'معماری پلتفرم D2C']
    },
    outcome: {
      en: 'Direct consumer relationship unlocked, elevating customer lifetime loyalty and establishing an autonomous digital revenue channel independent of wholesale middlemen.',
      fa: 'شکل‌گیری کانال مستقیم و مستقل فروش، ارتقای پیوستگی مخاطبان لوکس و ایجاد جریان درآمدی پایدار بدون وابستگی به واسطه‌ها.'
    },
    qualitativeHighlights: {
      en: ['Direct Consumer Ownership', 'Compounding VIP Repeat Rate', 'Editorial Visual System'],
      fa: ['مالکیت مستقیم مخاطب', 'نرخ بالای خرید مجدد VIP', 'سیستم بصری اختصاصی']
    },
    media: {
      primary: '/assets/work/lumina_primary.jpg',
      secondary: '/assets/work/lumina_secondary.jpg',
      badgeEn: 'EDITORIAL CAMPAIGN & D2C FLAGSHIP',
      badgeFa: 'لوک‌بوک ادیتوریال و فروشگاه D2C'
    }
  },
  {
    id: 'synapse-ai',
    slug: 'synapse-ai',
    featured: false,
    num: '03',
    numFa: '۰۳',
    year: '2026',
    challengeCategory: '01-position',
    client: {
      en: 'SYNAPSE AI',
      fa: 'سیناپس هوش مصنوعی (SYNAPSE)'
    },
    title: {
      en: 'Category Creation & Enterprise Growth Architecture',
      fa: 'خلق دسته‌بندی جدید و زیرساخت جذب سازمانی'
    },
    industry: {
      en: 'Enterprise B2B SaaS // Machine Intelligence',
      fa: 'نرم‌افزار ابری سازمانی و هوش مصنوعی B2B'
    },
    challenge: {
      en: 'Positioned vaguely as a generic AI tool, resulting in low executive buyer comprehension, bloated 9-month sales cycles, and high friction in demo scheduling.',
      fa: 'جایگاه‌یابی مبهم به عنوان ابزار هوش مصنوعی عمومی که منجر به سردرگمی مدیران ارشد، چرخه طولانی ۹ ماهه فروش و نرخ پایین دمو می‌شد.'
    },
    theMove: {
      en: 'Reframed the company around "Automated Enterprise Decision Intelligence", built an interactive live demo simulator, and restructured the inbound pipeline for enterprise accounts.',
      fa: 'بازتعریف جایگاه برند حول «زیرساخت تصمیم‌گیری سازمانی»، توسعه شبیه‌ساز زنده دمو و مهندسی مجدد پایپ‌لاین فروش B2B.'
    },
    services: {
      en: ['Category Strategy', 'Executive Messaging', 'Interactive Product Tour', 'Account-Based Pipeline'],
      fa: ['استراتژی خلق دسته‌بندی', 'پیام‌رسانی در سطح مدیران', 'تور تعاملی محصول', 'پایپ‌لاین فروش سازمانی']
    },
    outcome: {
      en: 'Shifted commercial conversations from tactical tool debates to high-level strategic infrastructure deployments, cutting sales cycle friction dramatically.',
      fa: 'تغییر جنس جلسات فروش از ابزار ساده به زیرساخت حیاتی سازمانی و کاهش چشمگیر اصطکاک چرخه فروش.'
    },
    qualitativeHighlights: {
      en: ['Defensible Category Leadership', 'Executive-Level Clarity', 'Interactive Simulation Funnel'],
      fa: ['رهبری دسته‌بندی بازار', 'وضوح در سطح مدیران ارشد', 'قیف تعاملی شبیه‌ساز']
    },
    media: {
      primary: '/assets/work/synapse_primary.jpg',
      secondary: '/assets/work/synapse_secondary.jpg',
      badgeEn: 'CRO DEMO FUNNEL LAB',
      badgeFa: 'شبیه‌ساز تعاملی و قیف دمو'
    }
  },
  {
    id: 'nexus-health',
    slug: 'nexus-health',
    featured: false,
    num: '04',
    numFa: '۰۴',
    year: '2025 - 2026',
    challengeCategory: '05-system',
    client: {
      en: 'NEXUS HEALTH',
      fa: 'نکسوس سلامت (NEXUS)'
    },
    title: {
      en: 'Telemetry Engine & Patient Care Loop Architecture',
      fa: 'موتور تله‌متری و مدل‌سازی سفر بیمار'
    },
    industry: {
      en: 'Digital Health & Telemedicine',
      fa: 'سلامت دیجیتال و پزشکی از راه دور'
    },
    challenge: {
      en: 'Fragmented patient acquisition data, unreliable third-party ad tracking, and severe drop-offs between initial symptom consultation and care plan adherence.',
      fa: 'انقطاع داده‌های جذب بیمار، ردیابی غیرقابل اعتماد تبلیغات و افت شدید میان مشاوره اولیه و ادامه درمان.'
    },
    theMove: {
      en: 'Deployed HIPAA-compliant server-side event streaming, multi-touch patient journey modeling, and automated retention check-ins based on clinical milestones.',
      fa: 'پیاده‌سازی تله‌متری اختصاصی سمت سرور مطابق استاندارد سلامت، مدل‌سازی سفر بیمار و اتوماسیون تعاملات پیگیری درمان.'
    },
    services: {
      en: ['Server-Side Telemetry', 'Patient Journey UX', 'Retention Infrastructure', 'Attribution Intelligence'],
      fa: ['تله‌متری سمت سرور', 'تجربه کاربری سفر بیمار', 'زیرساخت حفظ و تکرار', 'مدل اتریبیوشن داده']
    },
    outcome: {
      en: 'Total visibility across the patient lifecycle, turning scattered traffic into a predictable, clinical-grade patient care engine.',
      fa: 'دید کامل روی تمام چرخه حیات بیمار و تبدیل ترافیک پراکنده به یک موتور منظم و پایدار خدمت‌رسانی پزشکی.'
    },
    qualitativeHighlights: {
      en: ['Deterministic Server Tracking', 'Closed-Loop Care Retention', 'Full Lifecycle Visibility'],
      fa: ['ردیابی قطعی سرور', 'حلقه‌های پیوسته مراقبت', 'شفافیت کامل چرخه درمان']
    },
    media: {
      primary: '/assets/work/nexus_primary.jpg',
      secondary: '/assets/work/nexus_secondary.jpg',
      badgeEn: 'TELEMETRY ATTRIBUTION ENGINE',
      badgeFa: 'موتور تله‌متری و رهگیری داده'
    }
  },
  {
    id: 'vakeso-identity',
    slug: 'vakeso-identity',
    featured: false,
    num: '05',
    numFa: '۰۵',
    year: '2025',
    challengeCategory: '04-acquisition',
    client: {
      en: 'VAKESO ARCHITECTURE',
      fa: 'استودیو معماری واکیسو (VAKESO)'
    },
    title: {
      en: 'Monolithic Spatial Identity & Inbound Commission Architecture',
      fa: 'هویت یکپارچه برند و سیستم جذب سفارشات فاخر'
    },
    industry: {
      en: 'Spatial Design & Architecture Practice',
      fa: 'طراحی معماری و استودیو فضاسازی'
    },
    challenge: {
      en: 'An elite architecture practice whose digital surface was silent and disorganized, failing to attract international developers and high-value private commissions.',
      fa: 'استودیوی نخبه معماری که پلتفرم دیجیتال آن توان انتقال عمق مهندسی فضاها و جذب کارفرمایان و پروژه‌های شاخص بین‌المللی را نداشت.'
    },
    theMove: {
      en: 'Constructed a monumental digital publication with tactile spatial typography, monolithic project folios, and direct commission inquiry pathways.',
      fa: 'خلق پلتفرم دیجیتال ادیتوریال با ساختار تایپوگرافی حجمی، پرونده‌های مفصل پروژه‌ها و مسیر مستقیم پذیرش سفارش پروژه‌های فاخر.'
    },
    services: {
      en: ['Brand Identity', 'Spatial Portfolio Architecture', 'Monolithic Typography', 'Editorial Interaction'],
      fa: ['هویت برند', 'معماری دیجیتال پورتفولیو', 'تایپوگرافی مونوگرام', 'تعاملات ادیتوریال']
    },
    outcome: {
      en: 'Elevated positioning that instantly filters for high-value architectural commissions and establishes the practice as an international cultural institution.',
      fa: 'ارتقای سطح ادراکی برند، جذب کارفرمایان رده‌بالا و تثبیت جایگاه استودیو به عنوان مرجع فرهنگی طراحی.'
    },
    qualitativeHighlights: {
      en: ['Tactile Material Aesthetics', 'Monolithic Grid System', 'High-Tier Commission Filtering'],
      fa: ['زیبایی‌شناسی متریال‌محور', 'گرید یکپارچه مونوکروم', 'پالایش هوشمند سفارشات']
    },
    media: {
      primary: '/project-1.jpg',
      secondary: '/project-2.jpg',
      badgeEn: 'SPATIAL DIGITAL MONOGRAPH',
      badgeFa: 'مونوگراف فضایی ادیتوریال'
    }
  }
];
