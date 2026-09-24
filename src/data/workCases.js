/**
 * MAGICENCY WORK & CASE STUDY DATA ARCHITECTURE
 * 
 * Modular, decoupled data structure for Documented Case Studies on /work.
 * Easily editable without touching component presentation code.
 */

export const CASE_STUDY_FILTERS = [
  { id: 'all', label: { en: 'All', fa: 'همه' } },
  { id: 'performance', label: { en: 'Performance', fa: 'پرفورمنس مارکتینگ' } },
  { id: 'strategy-growth', label: { en: 'Strategy & Growth', fa: 'استراتژی و رشد' } },
  { id: 'web-experience', label: { en: 'Web & Experience', fa: 'وب و تجربه کاربری' } },
  { id: 'content-creative', label: { en: 'Content & Creative', fa: 'محتوا و دیزاین' } },
  { id: 'real-estate', label: { en: 'Real Estate', fa: 'املاک و مستغلات' } }
];

export const WORK_CASES = [
  {
    id: 'case-01-enterprise-search',
    slug: 'enterprise-search-architecture',
    filterCategory: 'performance',
    featured: true,
    num: '01',
    category: {
      en: 'PERFORMANCE / ORGANIC SEARCH',
      fa: 'پرفورمنس / معماری سئو سازمانی'
    },
    type: {
      en: 'Programmatic Search Engine',
      fa: 'موتور جذب ارگانیک'
    },
    duration: {
      en: '12-Month Scaled Architecture',
      fa: 'دوره ۱۲ ماهه رشد تصاعدی'
    },
    status: {
      en: 'Performance Snapshot',
      fa: 'تله‌متری عملکرد'
    },
    title: {
      en: 'Programmatic Search Architecture & 84.1K Organic Click Scale',
      fa: 'معماری سئو تکنیکال و مهندسی رشد با ۸۴.۱ هزار کلیک ارگانیک'
    },
    description: {
      en: 'An enterprise platform held back by crawl-budget bloat and keyword cannibalization transformed into an autonomous search engine through programmatic intent mapping and dynamic link graphs.',
      fa: 'پلتفرمی با توقف رشد ارگانیک و قفل شدن بودجه خزش که از طریق مهندسی خوشه‌های اینتنت، رفع موانع فنی ایندکسینگ و ساخت گراف پیوند داخلی به موتور جذب پایدار تبدیل شد.'
    },
    scope: {
      en: 'Search Intent Mapping & Technical Indexing Architecture',
      fa: 'معماری فنی ایندکسینگ و نگاشت دقیق سرچ اینتنت'
    },
    market: {
      en: 'Middle East & Global Search',
      fa: 'خاورمیانه و جستجوی بین‌المللی'
    },
    industry: {
      en: 'Enterprise Search & High-Intent Acquisition',
      fa: 'زیرساخت سئو سازمانی و جذب مشتری'
    },
    engagement: {
      en: 'Full-Scope Technical Search Architecture',
      fa: 'همکاری جامع مهندسی زیرساخت سئو'
    },
    outcome: {
      en: '84.1K reported clicks, 5.18M impressions, 1.6% average CTR over 12 months.',
      fa: '۸۴.۱ هزار کلیک ارگانیک، ۵.۱۸ میلیون ایمپرشن و ثبت رشد تصاعدی در سرچ کنسول.'
    },
    metrics: [
      { label: { en: 'Reported Clicks', fa: 'کلیک‌های ارگانیک' }, value: '84.1K' },
      { label: { en: 'Google Impressions', fa: 'ایمپرشن جستجو' }, value: '5.18M' }
    ],
    image: '/assets/work/velox_primary.jpg',
    secondaryImage: '/assets/work/velox_secondary.jpg'
  },
  {
    id: 'case-02-atrash-store',
    slug: 'atrash-store-google-ads-pmax',
    filterCategory: 'performance',
    featured: false,
    num: '02',
    category: {
      en: 'PERFORMANCE / PAID ACQUISITION',
      fa: 'پرفورمنس مارکتینگ / گوگل ادز'
    },
    type: {
      en: 'Google Ads Performance Max Engine',
      fa: 'موتور تبلیغات Performance Max'
    },
    duration: {
      en: '14-Day Sprint & Ongoing',
      fa: 'اسپرینت فشرده و کمپین‌های مداوم'
    },
    status: {
      en: 'Reported ROAS 11.0x',
      fa: 'ROAS 11.0x ثبت‌شده'
    },
    title: {
      en: 'Google Ads PMax Engine: ROAS 11 & Scalable Micro-CPC Acquisition',
      fa: 'موتور تبلیغات Performance Max با ROAS 11 و جذب مقیاس‌پذیر'
    },
    description: {
      en: 'An e-commerce retailer struggling with uncalibrated ad spend and attribution blind spots restructured into machine-learning bidding clusters with real-time conversion monitoring.',
      fa: 'فروشگاه آنلاینی که با کمپین‌های زیان‌ده و عدم شفافیت در اتریبیوشن روبرو بود، با بازطراحی ساختار PMax و مانیتورینگ اختصاصی تبدیل به بازدهی چشمگیر رسید.'
    },
    scope: {
      en: 'PMax Strategy, Real-Time Telemetry & Smart Bidding Calibration',
      fa: 'معماری PMax، تله‌متری لحظه‌ای و بهینه‌سازی هوشمند بیدینگ'
    },
    market: {
      en: 'E-Commerce / Direct-to-Consumer',
      fa: 'تجارت الکترونیک و فروش مستقیم'
    },
    industry: {
      en: 'Online Retail & High-ROAS Media Buying',
      fa: 'خرده‌فروشی آنلاین و مدیا بایینگ'
    },
    engagement: {
      en: 'Algorithmic Media Buying & Telemetry Setup',
      fa: 'مدیریت الگوریتمی تبلیغات و راه‌اندازی تله‌متری'
    },
    outcome: {
      en: 'ROAS 11 achieved with 1.22K purchases at €104 total cost during reported test sprint.',
      fa: 'دستیابی به بازگشت سرمایه ۱۱ برابری با ثبت ۱,۲۲۰ خرید تنها با ۱۰۴ یورو هزینه.'
    },
    metrics: [
      { label: { en: 'Reported ROAS', fa: 'بازگشت سرمایه' }, value: '11.0x' },
      { label: { en: 'Total Purchases', fa: 'خریدهای ثبت‌شده' }, value: '1.22K' }
    ],
    image: '/assets/work/atrash_primary.png',
    secondaryImage: '/assets/work/atrash_secondary.png'
  },
  {
    id: 'case-03-tamir-online',
    slug: 'tamir-online-lead-engine',
    filterCategory: 'performance',
    featured: false,
    num: '03',
    category: {
      en: 'PERFORMANCE / HIGH-INTENT LEAD GEN',
      fa: 'پرفورمنس / لید جنریشن مقیاس بالا'
    },
    type: {
      en: 'Search Lead Generation Architecture',
      fa: 'معماری لید جنریشن گوگل ادز'
    },
    duration: {
      en: '12-Month High-Volume Pipeline',
      fa: 'پایپ‌لاین ۱۲ ماهه مداوم'
    },
    status: {
      en: '9.03K Reported Leads',
      fa: '۹,۰۳۰ لید ثبت‌شده'
    },
    title: {
      en: 'Search Ads Lead Gen Engine: 1.28M Impressions, 134K Clicks & 23.42% Peak CTR',
      fa: 'موتور لید جنریشن جستجو: ۱.۲۸ میلیون ایمپرشن و ۹ هزار لید ثبت‌شده'
    },
    description: {
      en: 'A high-demand on-demand home services platform facing aggressive auction inflation re-architected search funnels around urgent query intent and frictionless form submissions.',
      fa: 'پلتفرم خدمات آنلاین در بازاری با رقابت فشرده و افزایش هزینه کلیک که با مهندسی صفحات فرود فوری و ردیابی لحظه‌ای سفارشات به نرخ تبدیل ۶.۶۷٪ دست یافت.'
    },
    scope: {
      en: 'Urgent Intent Search Campaigns, Dynamic Geo-Bidding & Form CRO',
      fa: 'کمپین‌های جستجوی فوری، بیدینگ منطقه‌ای و بهینه‌سازی فرم'
    },
    market: {
      en: 'On-Demand Urban Services',
      fa: 'خدمات فوری و آنلاین شهری'
    },
    industry: {
      en: 'Appliance Repair & Immediate Service Fulfillment',
      fa: 'تعمیرات لوازم خانگی و خدمات سریع'
    },
    engagement: {
      en: 'Dedicated Paid Media & Conversion Architecture',
      fa: 'مدیریت کمپین‌های جذب و معماری تبدیل'
    },
    outcome: {
      en: '1.28M impressions, 134K clicks, 9.03K form leads (6.67% CVR) with 23.42% peak CTR.',
      fa: '۱.۲۸ میلیون ایمپرشن، ۱۳۴ هزار کلیک و ۹,۰۳۰ فرم ثبت سفارش با میانگین تبدیل ۶.۶۷٪.'
    },
    metrics: [
      { label: { en: 'Search Clicks', fa: 'کلیک‌های ثبت‌شده' }, value: '134K' },
      { label: { en: 'Reported Leads', fa: 'لیدهای فرم' }, value: '9.03K' }
    ],
    image: '/assets/work/tamir_online_primary.png',
    secondaryImage: '/assets/work/tamir_online_secondary.png'
  },
  {
    id: 'case-04-wine-amphorae',
    slug: 'wine-amphorae-digital-flagship',
    filterCategory: 'web-experience',
    featured: false,
    num: '04',
    category: {
      en: 'WEB & EXPERIENCE / DIGITAL FLAGSHIP',
      fa: 'وب و تجربه کاربری / پلتفرم لوکس'
    },
    type: {
      en: 'Artisanal Craft & Global Inbound Platform',
      fa: 'پلتفرم دیجیتال پرچمدار'
    },
    duration: {
      en: 'Flagship Rebuild',
      fa: 'بازطراحی کامل پلتفرم'
    },
    status: {
      en: 'Live Global Platform',
      fa: 'پلتفرم فعال بین‌المللی'
    },
    title: {
      en: 'Heritage Terracotta Vessel Platform: Luxury Italian Website Design & Experience',
      fa: 'طراحی وب‌سایت لوکس، تجربه کاربری برندینگ و پلتفرم دیجیتال واین آمفورا'
    },
    description: {
      en: 'A historic Tuscan amphora workshop with centuries of artisanal legacy elevated into an international digital flagship combining sculptural craft storytelling with direct luxury inquiry channels.',
      fa: 'برند سازنده ظروف سفالی اصیل ایتالیایی که پلتفرم دیجیتال آن با فضاسازی ادیتوریال، مینیمال و چندزبانه به درگاه سفارشات مستقیم تولیدکنندگان فاخر تبدیل شد.'
    },
    scope: {
      en: 'Bespoke UI/UX Architecture, Editorial Art Direction & Multilingual CMS',
      fa: 'معماری اختصاصی UI/UX، مدیریت هنری ادیتوریال و زیرساخت چندزبانه'
    },
    market: {
      en: 'Italy, Europe & International Viticulture',
      fa: 'ایتالیا، اروپا و بازار جهانی شراب‌سازی'
    },
    industry: {
      en: 'Luxury Winemaking & Ancient Artisanal Heritage',
      fa: 'صنایع دستی لوکس و میراث باستانی سفالگری'
    },
    engagement: {
      en: 'Digital Flagship Concept, Design & Technical Build',
      fa: 'طراحی مفهومی، دیزاین پلتفرم و پیاده‌سازی فنی'
    },
    outcome: {
      en: 'Unified international identity and seamless inbound pathways for high-ticket winery commissions.',
      fa: 'هویت یکپارچه جهانی و گشایش مسیر پذیرش مستقیم سفارشات با ارزش بالا.'
    },
    metrics: [
      { label: { en: 'Language Tracks', fa: 'نسخه‌های زبانی' }, value: '3 Tracks' },
      { label: { en: 'Inquiry Pathway', fa: 'مسیر سفارش' }, value: 'High-Ticket B2B' }
    ],
    image: '/assets/work/wine_amphorae_primary.png',
    secondaryImage: '/assets/work/wine_amphorae_secondary.png'
  },
  {
    id: 'case-05-zarin-real-estate',
    slug: 'zarin-real-estate-dubai',
    filterCategory: 'real-estate',
    featured: false,
    num: '05',
    category: {
      en: 'REAL ESTATE / STRATEGY & POSITIONING',
      fa: 'املاک / جایگاه‌یابی و سیستم اعتماد'
    },
    type: {
      en: 'High-Intent Investor Acquisition System',
      fa: 'سیستم جذب سرمایه‌گذاران ملک در دبی'
    },
    duration: {
      en: 'Ongoing Strategic Partnership',
      fa: 'شراکت استراتژیک بلندمدت'
    },
    status: {
      en: 'Active Advisory Model',
      fa: 'مدل فعال مشاوره‌ای'
    },
    title: {
      en: 'Turning Experience into a Growth Engine: High-Intent Dubai Real Estate Advisory',
      fa: 'تبدیل اعتبار و تجربه به سیستم رشد: جایگاه‌یابی و جذب سرمایه‌گذاران ملک در دبی'
    },
    description: {
      en: 'Years of Dubai market expertise trapped in ad-hoc word-of-mouth repositioned from transactional brokerage into a trusted advisory system with high-conviction investor qualification.',
      fa: 'سال‌ها سابقه در بازار املاک دبی که از مدل سنتی به «شریک امین سرمایه‌گذاری» تغییر جایگاه داد و با پالایش هوشمند لید، مشتریان آماده معامله را جذب کرد.'
    },
    scope: {
      en: 'Strategic Positioning, Decision-Journey Mapping & Trust Architecture',
      fa: 'جایگاه‌یابی استراتژیک، نگاشت سفر تصمیم‌گیری و معماری اعتمادسازی'
    },
    market: {
      en: 'Dubai, UAE & International Capital',
      fa: 'دبی، امارات و سرمایه‌گذاران بین‌المللی'
    },
    industry: {
      en: 'Prime Real Estate & Cross-Border Wealth Advisory',
      fa: 'املاک لوکس و مشاوره تخصصی سرمایه‌گذاری'
    },
    engagement: {
      en: 'Brand Repositioning & Multi-Channel Acquisition Architecture',
      fa: 'تغییر جایگاه برند و مهندسی سیستم جذب چندکاناله'
    },
    outcome: {
      en: 'Shifted buyer mindset from price-shopping to strategic wealth allocation, filtering for high-conviction investors.',
      fa: 'تغییر نگاه مخاطب از مقایسه قیمت به جلسات استراتژیک و فیلتر خریداران با سرمایه واقعی.'
    },
    metrics: [
      { label: { en: 'Advisory Funnel', fa: 'مدل تعامل' }, value: 'High-Ticket' },
      { label: { en: 'Target Asset Class', fa: 'کلاس دارایی' }, value: 'Prime UAE' }
    ],
    image: '/assets/work/zarin_primary.png',
    secondaryImage: '/assets/work/zarin_secondary.png'
  }
];
