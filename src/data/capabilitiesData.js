/**
 * MAGICENCY® CAPABILITIES DATA ARCHITECTURE
 * Structured bilingual capabilities, domain models, and system combinations.
 */

export const CAPABILITY_DOMAINS = [
  {
    id: 'strategy',
    number: '01',
    titleEn: 'STRATEGY',
    titleFa: 'استراتژی',
    taglineEn: 'Define where the business should go and why.',
    taglineFa: 'تعیین اینکه کسب‌وکار به کجا باید برود و چرا.',
    color: '#ff5500',
    capabilities: [
      {
        id: 'positioning',
        num: '01',
        titleEn: 'Positioning',
        titleFa: 'جایگاه‌یابی برند',
        descEn: 'Carving an uncontested commercial space where competitors cannot easily follow.',
        descFa: 'خلق یک موقعیت تجاری دست‌نیافتنی که رقبا نتوانند به راحتی از آن کپی‌برداری کنند.',
        deliverableEn: 'Strategic Moat & Value Architecture',
        deliverableFa: 'معماری ارزش و خندق استراتژیک'
      },
      {
        id: 'brand-strategy',
        num: '02',
        titleEn: 'Brand Strategy',
        titleFa: 'استراتژی برند',
        descEn: 'Aligning identity, tone, and market perception directly with business model economics.',
        descFa: 'هماهنگ‌سازی هویت، لحن و ادراک بازار با مدل اقتصادی و اهداف کسب‌وکار.',
        deliverableEn: 'Brand Narrative & Market Conviction',
        deliverableFa: 'روایت برند و ایمان استراتژیک'
      },
      {
        id: 'growth-strategy',
        num: '03',
        titleEn: 'Growth Strategy',
        titleFa: 'استراتژی رشد',
        descEn: 'Engineering unit economics, expansion vectors, and compounding customer acquisition loops.',
        descFa: 'مهندسی اقتصاد واحد محصول، جهت‌های توسعه و چرخه‌های بازگشتی جذب مشتری.',
        deliverableEn: 'Growth Levers & Compounding Model',
        deliverableFa: 'اهرم‌های رشد و مدل تصاعدی'
      },
      {
        id: 'audience-insight',
        num: '04',
        titleEn: 'Audience Insight',
        titleFa: 'تحلیل عمیق مخاطب',
        descEn: 'Uncovering behavioral triggers and commercial friction across the buyer journey.',
        descFa: 'کشف محرک‌های رفتاری و اصطکاک‌های تجاری در کل مسیر خرید مشتری.',
        deliverableEn: 'Decision Psychology & Funnel Friction Mapping',
        deliverableFa: 'روانشناسی تصمیم‌گیری و نقشه‌برداری اصطکاک'
      }
    ],
    connectedDomains: ['brand-creative', 'digital', 'data']
  },
  {
    id: 'brand-creative',
    number: '02',
    titleEn: 'BRAND & CREATIVE',
    titleFa: 'برند و خلاقیت',
    taglineEn: 'Turn strategic direction into something people understand and remember.',
    taglineFa: 'تبدیل جهت‌گیری استراتژیک به چیزی ملموس که در ذهن بماند.',
    color: '#ff7722',
    capabilities: [
      {
        id: 'brand-identity',
        num: '01',
        titleEn: 'Brand Identity',
        titleFa: 'هویت بصری برند',
        descEn: 'Signature visual systems, typography hierarchies, and tactile brand worlds.',
        descFa: 'سیستم‌های بصری متمایز، سلسله‌مراتب تایپوگرافی و جهان ادراکی برند.',
        deliverableEn: 'Design Systems & Signature Visual Identity',
        deliverableFa: 'دیزاین سیستم و هویت بصری منحصربه‌فرد'
      },
      {
        id: 'creative-direction',
        num: '02',
        titleEn: 'Creative Direction',
        titleFa: 'دایرکشن خلاقه',
        descEn: 'Commanding visual authority and emotional resonance across every commercial touchpoint.',
        descFa: 'خلق اقتدار بصری و پیوند عاطفی عمیق در تمامی نقاط تماس با مشتری.',
        deliverableEn: 'Art Direction, Motion Language & Curation',
        deliverableFa: 'آرت دایرکشن، موشن و استانداردهای زیبایی‌شناختی'
      },
      {
        id: 'campaign-concepts',
        num: '03',
        titleEn: 'Campaign Concepts',
        titleFa: 'مفاهیم کمپین',
        descEn: 'High-conviction creative ideas that puncture noise and generate genuine market tension.',
        descFa: 'ایده‌های خلاقه جسورانه که هیاهوی بازار را شکافته و کشش واقعی ایجاد می‌کنند.',
        deliverableEn: 'High-Impact Cultural Concepts',
        deliverableFa: 'مفاهیم جریان‌ساز و اثرگذار'
      },
      {
        id: 'content-systems',
        num: '04',
        titleEn: 'Content Systems',
        titleFa: 'سیستم‌های محتوا',
        descEn: 'Repeatable, high-velocity narrative engines designed for distribution and authority.',
        descFa: 'موتورهای روایی پایدار و پرسرعت برای توزیع پیام و خلق اقتدار صنعتی.',
        deliverableEn: 'Content Architecture & Narrative Playbooks',
        deliverableFa: 'معماری محتوا و الگوهای تولید ارزش'
      }
    ],
    connectedDomains: ['strategy', 'digital', 'growth']
  },
  {
    id: 'digital',
    number: '03',
    titleEn: 'DIGITAL EXPERIENCE',
    titleFa: 'تجربه دیجیتال',
    taglineEn: 'Build the experience that turns attention into commercial action.',
    taglineFa: 'ساخت تجربه‌ای تعاملی که توجه را به اقدام تجاری تبدیل کند.',
    color: '#ff9944',
    capabilities: [
      {
        id: 'flagship-websites',
        num: '01',
        titleEn: 'Flagship Websites',
        titleFa: 'وبسایت‌های مرجع',
        descEn: 'Bespoke web platforms engineered with cinematic performance and zero compromise.',
        descFa: 'پلتفرم‌های وب اختصاصی با عملکرد سینمایی، سرعت بالا و نهایت استانداردهای فنی.',
        deliverableEn: 'Next-Gen Interactive Digital Platforms',
        deliverableFa: 'پلتفرم‌های دیجیتال تعاملی نسل بعد'
      },
      {
        id: 'digital-experiences',
        num: '02',
        titleEn: 'Digital Experiences',
        titleFa: 'تجربه‌های تعاملی',
        descEn: 'Immersive micro-interactions, responsive architectures, and tactile user flows.',
        descFa: 'میکرو-انیمیشن‌های شناور، معماری‌های واکنش‌گرا و جریان‌های کاربری روان.',
        deliverableEn: 'Motion Interactions & Product Flow Design',
        deliverableFa: 'تعاملات موشن و طراحی جریان محصول'
      },
      {
        id: 'ux-ui-systems',
        num: '03',
        titleEn: 'UX / UI Systems',
        titleFa: 'سیستم‌های UI / UX',
        descEn: 'Clean architectural interfaces that eliminate friction and command effortless navigation.',
        descFa: 'رابط‌های کاربری مهندسی‌شده که اصطکاک را از بین برده و ناوبری را شهودی می‌کنند.',
        deliverableEn: 'Scalable Component UI Libraries',
        deliverableFa: 'کتابخانه‌های کامپوننت مقیاس‌پذیر'
      },
      {
        id: 'conversion-architecture',
        num: '04',
        titleEn: 'Conversion Architecture',
        titleFa: 'معماری نرخ تبدیل',
        descEn: 'Psychological narrative sequencing engineered to convert casual visits into pipeline.',
        descFa: 'توالی روانشناختی پیام‌ها و المان‌ها برای تبدیل بازدیدکنندگان به مشتریان واقعی.',
        deliverableEn: 'High-Conversion Landing Architectures',
        deliverableFa: 'معماری لندینگ‌های با بازدهی بالا'
      }
    ],
    connectedDomains: ['brand-creative', 'growth', 'data']
  },
  {
    id: 'growth',
    number: '04',
    titleEn: 'GROWTH & ACQUISITION',
    titleFa: 'رشد و جذب مخاطب',
    taglineEn: 'Create and optimize the paths that generate predictable demand.',
    taglineFa: 'خلق و بهینه‌سازی مسیرهایی که تقاضای پایدار می‌آفرینند.',
    color: '#ff5500',
    capabilities: [
      {
        id: 'performance-marketing',
        num: '01',
        titleEn: 'Performance Marketing',
        titleFa: 'پرفورمنس مارکتینگ',
        descEn: 'Algorithmic media investment focused strictly on customer lifetime value and acquisition efficiency.',
        descFa: 'مدیریت الگوریتمی بودجه تبلیغاتی با تمرکز بر ارزش دوره عمر مشتری و بازگشت سرمایه.',
        deliverableEn: 'CAC Reduction & LTV Acceleration',
        deliverableFa: 'کاهش هزینه جذب و تسریع LTV'
      },
      {
        id: 'paid-acquisition',
        num: '02',
        titleEn: 'Paid Acquisition',
        titleFa: 'کانال‌های جذب پولی',
        descEn: 'High-intent search, programmatic, and paid social funnels built to capture high-margin buyers.',
        descFa: 'قیف‌های تبلیغاتی متمرکز بر مخاطبان با تمایل خرید بالا در شبکه‌های اجتماعی و موتورهای جستجو.',
        deliverableEn: 'Precision Acquisition Funnels',
        deliverableFa: 'قیف‌های دقیق جذب مشتری هدف'
      },
      {
        id: 'seo-search-systems',
        num: '03',
        titleEn: 'Search & Inbound Engines',
        titleFa: 'موتورهای ورودی و سئو',
        descEn: 'Structural technical SEO and commercial content clustering that compounds traffic over years.',
        descFa: 'سئوی فنی ساختاریافته و کلاسترهای محتوای تجاری که ترافیک ارگانیک ماندگار می‌سازند.',
        deliverableEn: 'Compounding Organic Search Moats',
        deliverableFa: 'خندق ترافیک ارگانیک پایدار'
      },
      {
        id: 'growth-experiments',
        num: '04',
        titleEn: 'Growth Experiments',
        titleFa: 'آزمایش‌های رشد و لید',
        descEn: 'Rapid-cadence hypothesis testing across creative hooks, offers, and qualification funnels.',
        descFa: 'تست فرضیات با سرعت بالا روی قلاب‌های خلاقانه، پیشنهادها و فیلترهای ورود لید.',
        deliverableEn: 'Continuous Funnel Velocity & Testing Loops',
        deliverableFa: 'چرخه‌های چابک تست و ارتقای قیف'
      }
    ],
    connectedDomains: ['digital', 'data', 'strategy']
  },
  {
    id: 'data',
    number: '05',
    titleEn: 'DATA & OPTIMIZATION',
    titleFa: 'داده و بهینه‌سازی',
    taglineEn: 'Measure reality and turn results into better decisions.',
    taglineFa: 'سنجش واقعیت و تبدیل نتایج تجربی به تصمیم‌های هوشمندانه‌تر.',
    color: '#ffaa44',
    capabilities: [
      {
        id: 'telemetry-analytics',
        num: '01',
        titleEn: 'Telemetry & Analytics',
        titleFa: 'تحلیل داده و تله‌متری',
        descEn: 'First-party tracking infrastructure that reveals user intent, drop-offs, and commercial velocity.',
        descFa: 'زیرساخت ثبت داده‌های دست‌اول برای کشف رفتار کاربر، نقاط ریزش و سرعت جریان مالی.',
        deliverableEn: 'Clean Behavioral Telemetry Infrastructure',
        deliverableFa: 'زیرساخت تله‌متری رفتاری کاربران'
      },
      {
        id: 'attribution-modeling',
        num: '02',
        titleEn: 'Attribution Modeling',
        titleFa: 'مدل‌سازی انتساب',
        descEn: 'Uncompromising cross-channel attribution showing which touches actually generated pipeline.',
        descFa: 'شفاف‌سازی سهم واقعی هر کانال تبلیغاتی در تولید سود و ورودی نهایی فروش.',
        deliverableEn: 'True Commercial Impact Modeling',
        deliverableFa: 'مدل سنجش سهم واقعی کانال‌ها'
      },
      {
        id: 'cro-optimization',
        num: '03',
        titleEn: 'Conversion Optimization',
        titleFa: 'بهینه‌سازی نرخ تبدیل (CRO)',
        descEn: 'Continuous empirical testing to eliminate friction points and systematically lift conversion rates.',
        descFa: 'آزمایش‌های تجربی مداوم برای حذف موانع ذهنی و ارتقای مرحله‌به‌مرحله نرخ تبدیل.',
        deliverableEn: 'Systematic Win Rates & Friction Removal',
        deliverableFa: 'حذف سیستماتیک اصطکاک‌های تبدیل'
      },
      {
        id: 'executive-reporting',
        num: '04',
        titleEn: 'Executive Intelligence',
        titleFa: 'هوش تصمیم‌گیری مدیریتی',
        descEn: 'Live dashboards stripping away vanity metrics to present unit economics and growth velocity.',
        descFa: 'داشبوردهای مدیریتی شفاف بدون آمارهای فریبنده برای رصد سرعت رشد و سلامت اقتصادی.',
        deliverableEn: 'Live Executive Control Centers',
        deliverableFa: 'داشبورد کنترل عملکرد کسب‌وکار'
      }
    ],
    connectedDomains: ['growth', 'strategy', 'digital']
  }
];

/**
 * SYSTEM COMBINATIONS (Section 03: Build the System)
 * Real business challenges mapped to connected capability systems.
 */
export const SYSTEM_COMBINATIONS = [
  {
    id: 'launch-brand',
    challengeEn: '“I need to launch a new brand.”',
    challengeFa: '«باید یک برند جدید را لانچ کنیم.»',
    summaryEn: 'Creating market conviction from day one with an interconnected identity, flagship platform, and demand engine.',
    summaryFa: 'خلق اعتبار در بازار از روز اول با هویت یکپارچه، پلتفرم پرچمدار و موتور ایجاد تقاضا.',
    components: [
      { domainId: 'strategy', nameEn: 'Positioning', nameFa: 'جایگاه‌یابی' },
      { domainId: 'brand-creative', nameEn: 'Brand Identity', nameFa: 'هویت برند' },
      { domainId: 'digital', nameEn: 'Flagship Website', nameFa: 'وبسایت مرجع' },
      { domainId: 'brand-creative', nameEn: 'Content Systems', nameFa: 'سیستم محتوا' },
      { domainId: 'growth', nameEn: 'Paid Acquisition', nameFa: 'جذب پولی' },
      { domainId: 'data', nameEn: 'Telemetry & Analytics', nameFa: 'تله‌متری و داده' }
    ],
    resultEn: 'Unified Market Launch Moat',
    resultFa: 'حضور قدرتمند و خندق رقابتی پایدار'
  },
  {
    id: 'qualified-leads',
    challengeEn: '“I need more qualified leads.”',
    challengeFa: '«به لیدهای باکیفیت و مشتریان راغب بیشتری نیاز داریم.»',
    summaryEn: 'Transforming leaky traffic into high-conviction inbound pipeline with calibrated qualification flows.',
    summaryFa: 'تبدیل ترافیک پراکنده به مشتریان راغب با قیف‌های ارزیابی و لندینگ‌های دقیق.',
    components: [
      { domainId: 'strategy', nameEn: 'Audience Insight', nameFa: 'تحلیل مخاطب' },
      { domainId: 'digital', nameEn: 'Conversion Architecture', nameFa: 'معماری تبدیل' },
      { domainId: 'growth', nameEn: 'Search & Inbound', nameFa: 'ورودی سئو و تبلیغات' },
      { domainId: 'brand-creative', nameEn: 'Creative Direction', nameFa: 'دایرکشن خلاقه' },
      { domainId: 'data', nameEn: 'Conversion Optimization', nameFa: 'بهینه‌سازی تبدیل' },
      { domainId: 'data', nameEn: 'Attribution Modeling', nameFa: 'مدل انتساب' }
    ],
    resultEn: 'High-Conviction Inbound Machine',
    resultFa: 'ماشین ورودی لیدهای هدفمند'
  },
  {
    id: 'scale-revenue',
    challengeEn: '“I need to scale digital revenue.”',
    challengeFa: '«باید درآمد دیجیتال را مقیاس‌پذیر کنیم.»',
    summaryEn: 'Widening margins by connecting performance acquisition, frictionless digital experiences, and compounding optimization loops.',
    summaryFa: 'افزایش حاشیه سود با پیوند زدن جذب پرفورمنس، تجربه دیجیتال روان و چرخه‌های بازخورد داده.',
    components: [
      { domainId: 'strategy', nameEn: 'Growth Strategy', nameFa: 'استراتژی رشد' },
      { domainId: 'digital', nameEn: 'Digital Experiences', nameFa: 'تجربه دیجیتال' },
      { domainId: 'growth', nameEn: 'Performance Marketing', nameFa: 'پرفورمنس مارکتینگ' },
      { domainId: 'growth', nameEn: 'Growth Experiments', nameFa: 'آزمایش‌های رشد' },
      { domainId: 'data', nameEn: 'Telemetry & Analytics', nameFa: 'تله‌متری داده' },
      { domainId: 'data', nameEn: 'Executive Intelligence', nameFa: 'هوش مدیریتی' }
    ],
    resultEn: 'Perpetual Growth Velocity',
    resultFa: 'رشد تصاعدی و دائمی ارزش کسب‌وکار'
  }
];

/**
 * OUTCOME TRANSFORMATION (Section 05: From Capability to Outcome)
 */
export const OUTCOME_FLOW = {
  stages: [
    {
      id: 'capabilities',
      titleEn: 'CAPABILITIES',
      titleFa: 'توانمندی‌ها',
      subtitleEn: 'Strategy • Creative • Digital • Growth • Data',
      subtitleFa: 'استراتژی • خلاقیت • دیجیتال • رشد • داده',
      tagEn: 'Component Layer',
      tagFa: 'لایه اجزا'
    },
    {
      id: 'system',
      titleEn: 'CONNECTED SYSTEM',
      titleFa: 'سیستم متصل و هماهنگ',
      subtitleEn: 'One synchronized commercial machine with zero dead ends',
      subtitleFa: 'یک ماشین تجاری یکپارچه بدون بن‌بست و اتلاف انرژی',
      tagEn: 'Architecture Layer',
      tagFa: 'لایه معماری'
    },
    {
      id: 'outcome',
      titleEn: 'COMMERCIAL OUTCOME',
      titleFa: 'دستاورد تجاری پایدار',
      subtitleEn: 'Clarity • Demand • Conversion • Learning • Compounding Moat',
      subtitleFa: 'شفافیت • کشش بازار • نرخ تبدیل بالا • یادگیری • خندق رقابتی',
      tagEn: 'Value Layer',
      tagFa: 'لایه ارزش'
    }
  ]
};
