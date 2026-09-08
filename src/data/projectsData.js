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
    id: 'organic-growth-engine',
    slug: 'organic-growth-engine',
    featured: true,
    num: '01',
    numFa: '۰۱',
    year: '2024 - 2025',
    challengeCategory: '04-acquisition',
    client: {
      en: 'ENTERPRISE SEARCH & INTENT ENGINE',
      fa: 'موتور رشد ارگانیک و سئو سازمانی'
    },
    title: {
      en: 'Programmatic Search Architecture & 84.1K Organic Click Scale',
      fa: 'معماری سئو تکنیکال و مهندسی رشد تصاعدی با ۸۴.۱ هزار کلیک ارگانیک'
    },
    industry: {
      en: 'Enterprise SEO & Search Infrastructure',
      fa: 'زیرساخت سئو سازمانی و معماری جذب ارگانیک'
    },
    metrics: [
      {
        id: 'clicks',
        value: '84.1K',
        label: { en: 'Total Clicks', fa: 'مجموع کلیک‌های ارگانیک' },
        subtext: { en: '12-Month Organic Search Volume', fa: 'کلیک ورودی از نتایج گوگل' },
        variant: 'blue',
        checked: true
      },
      {
        id: 'impressions',
        value: '5.18M',
        label: { en: 'Total Impressions', fa: 'مجموع ایمپرشن جستجو' },
        subtext: { en: 'Organic Search Footprint', fa: 'دیده شدن در نتایج هدفمند' },
        variant: 'purple',
        checked: true
      },
      {
        id: 'ctr',
        value: '1.6%',
        label: { en: 'Average CTR', fa: 'میانگین CTR ارگانیک' },
        subtext: { en: 'High-Intent SERP Snippets', fa: 'نرخ کلیک صفحات فرود' },
        variant: 'neutral',
        checked: false
      },
      {
        id: 'position',
        value: '17.6',
        label: { en: 'Average Position', fa: 'میانگین رتبه در نتایج' },
        subtext: { en: 'Compounding SERP Authority', fa: 'میانگین جایگاه در رتبه‌بندی' },
        variant: 'neutral',
        checked: false
      }
    ],
    timeline: {
      en: '12-Month Compounding Window (04/04/2024 – 03/04/2025)',
      fa: 'دوره ۱۲ ماهه رشد تصاعدی (۱۴۰۳/۰۱/۱۶ – ۱۴۰۴/۰۱/۱۴)'
    },
    challenge: {
      en: 'An enterprise platform held back by stagnant organic visibility: severe crawl-budget bloat, keyword cannibalization across core pages, and an unsustainable reliance on rising paid ad spend.',
      fa: 'پلتفرمی با توقف رشد ارگانیک و وابستگی پرهزینه به تبلیغات کلیکی: قفل شدن بودجه خزش (Crawl Budget)، هم‌خواری کلمات کلیدی (Cannibalization) و ریزش ترافیک در کوئری‌های با نرخ تبدیل بالا.'
    },
    theMove: {
      en: 'Architected a programmatic search engine: resolved technical index traps, mapped distinct intent clusters, deployed dynamic internal link graph modeling, and built compounding content hubs.',
      fa: 'طراحی و پیاده‌سازی معماری سئو ساخت‌یافته: رفع موانع فنی ایندکسینگ، مدل‌سازی خوشه‌های اینتنت (Search Intent)، بهینه‌سازی گراف پیوند داخلی و باز کردن مسیر رشد تصاعدی در سرچ کنسول.'
    },
    services: {
      en: ['Search Intent Mapping', 'Technical Indexing Architecture', 'Dynamic Link Graphing', 'Organic Growth Engine'],
      fa: ['نگاشت دقیق سرچ اینتنت', 'معماری فنی ایندکسینگ', 'گراف لینک‌سازی داخلی', 'موتور رشد ارگانیک']
    },
    outcome: {
      en: 'Scaled from a flat baseline to 84.1K qualified clicks and 5.18M search impressions over 12 months with a 1.6% CTR and 17.6 average position, transforming organic search into an autonomous, compounding acquisition engine.',
      fa: 'جهش از خط مبنا به ۸۴.۱ هزار کلیک ارگانیک و ۵.۱۸ میلیون ایمپرشن در طول ۱۲ ماه با میانگین CTR معادل ۱.۶٪ و رتبه ۱۷.۶، و تبدیل جستجوی ارگانیک به یک مزیت رقابتی پایدار بدون هزینه تبلیغات.'
    },
    qualitativeHighlights: {
      en: ['84.1K Verified Organic Clicks', '5.18M Google Impressions Moat', 'Compounding 12-Month Flywheel'],
      fa: ['۸۴.۱ هزار کلیک ارگانیک تأییدشده', '۵.۱۸ میلیون ایمپرشن در نتایج جستجو', 'چرخه ورودی پایدار بدون تبلیغ']
    },
    media: {
      primary: '/assets/work/velox_primary.jpg',
      secondary: '/assets/work/velox_secondary.jpg',
      badgeEn: 'GOOGLE SEARCH CONSOLE // AUDITED 12-MO DATA',
      badgeFa: 'داده‌های مستند سرچ کنسول گوگل // ۱۲ ماهه'
    },
    footerNote: {
      en: 'Engineered programmatic SEO architecture, crawl optimization & 84.1K click compounding scale.',
      fa: 'مهندسی معماری سئو، بهینه‌سازی بودجه خزش و ثبت ۵.۱۸ میلیون ایمپرشن و ۸۴.۱ هزار کلیک ارگانیک در سرچ کنسول.'
    }
  },
  {
    id: 'atrash-store',
    slug: 'atrash-store',
    featured: false,
    num: '02',
    numFa: '۰۲',
    year: '2023 - 2024',
    challengeCategory: '04-acquisition',
    client: {
      en: 'ATRASH STORE',
      fa: 'عطرش استور (ATRASH STORE)'
    },
    title: {
      en: 'Google Ads PMax Engine: ROAS 11 & Scalable Micro-CPC Acquisition',
      fa: 'موتور تبلیغات Performance Max با ROAS 11 و جذب مقیاس‌پذیر با هزینه حداقلی'
    },
    industry: {
      en: 'E-Commerce & High-ROAS Paid Acquisition',
      fa: 'تجارت الکترونیک و پرفورمنس مارکتینگ (Google Ads)'
    },
    challenge: {
      en: 'An e-commerce brand trapped in expensive and unprofitable paid ad campaigns, low conversion attribution, and an inability to scale ad spend profitably.',
      fa: 'فروشگاه آنلاینی که با هزینه‌های سنگین تبلیغات کلیکی، کمپین‌های زیان‌ده، نرخ تبدیل پایین و ناتوانی در افزایش مقیاس بودجه تبلیغاتی دست‌وپنجه نرم می‌کرد.'
    },
    theMove: {
      en: 'Re-architected Google Ads into algorithmic Performance Max clusters, deployed custom real-time conversion telemetry, and optimized machine-learning bidding for high-intent purchases.',
      fa: 'مهندسی صفر تا صد کمپین‌های Performance Max در گوگل ادز، اتصال سیستم تله‌متری و مانیتورینگ اختصاصی ردیابی تبدیل، و بهینه‌سازی هوشمند الگوریتم‌های بیدینگ روی خریدهای واقعی.'
    },
    services: {
      en: ['Performance Max Architecture', 'Google Ads Telemetry', 'ROAS Optimization', 'Real-Time Monitoring'],
      fa: ['معماری Performance Max', 'تله‌متری گوگل ادز', 'بهینه‌سازی نرخ بازگشت (ROAS)', 'مانیتورینگ اختصاصی تبدیل']
    },
    outcome: {
      en: 'Generated ROAS 11 with 1.22K purchases at just €104 total cost (€0.00 micro-CPC) in 14 days, alongside 74K impressions, 8.5K clicks, and 452 conversions in a 1-week sprint.',
      fa: 'دستیابی به بازگشت سرمایه تبلیغاتی خیره‌کننده (ROAS 11) با ثبت ۱۲۲۰ خرید تنها با ۱۰۴ یورو هزینه در ۱۴ روز، در کنار ۷۴ هزار ایمپرشن و ۴۵۲ تبدیل در یک اسپرینت هفتگی.'
    },
    qualitativeHighlights: {
      en: ['ROAS 11 & 1.22K Purchases (€104 Cost)', '74K Impressions with 11.49% CTR', 'Custom Conversion Monitoring System'],
      fa: ['دستیابی به ROAS 11 و ۱۲۲۰ خرید با ۱۰۴ یورو', '۷۴ هزار ایمپرشن با CTR استثنایی ۱۱.۴۹٪', 'پلتفرم مانیتورینگ و رهگیری اختصاصی']
    },
    media: {
      primary: '/assets/work/atrash_primary.png',
      secondary: '/assets/work/atrash_secondary.png',
      badgeEn: 'GOOGLE ADS PMAX // AUDITED ROAS 11',
      badgeFa: 'گوگل ادز پرفورمنس مکس // ROAS 11 تأییدشده'
    }
  },
  {
    id: 'tamir-online',
    slug: 'tamir-online',
    featured: false,
    num: '03',
    numFa: '۰۳',
    year: '2024 - 2025',
    challengeCategory: '04-acquisition',
    client: {
      en: 'TAMIR ONLINE',
      fa: 'تعمیر آنلاین (TAMIR ONLINE)'
    },
    title: {
      en: 'Search Ads Lead Gen Engine: 1.28M Impressions, 134K Clicks & 23.42% Peak CTR',
      fa: 'موتور لید جنریشن گوگل ادز: ۱.۲۸ میلیون ایمپرشن، ۱۳۴ هزار کلیک و رکورد CTR معادل ۲۳.۴۲٪'
    },
    industry: {
      en: 'On-Demand Home Services // High-Volume Lead Gen',
      fa: 'خدمات آنلاین و تعمیرات لوازم خانگی // لید جنریشن مقیاس بالا'
    },
    challenge: {
      en: 'A high-demand appliance repair platform struggling with aggressive CPC bidding inflation, low ad click-through rates, and unpredictable lead acquisition costs in a hyper-competitive market.',
      fa: 'پلتفرم خدمات تعمیرات آنلاین در بازاری با رقابت شدید، افزایش سرسام‌آور هزینه هر کلیک (CPC)، نرخ پایین کلیک تبلیغات و هزینه‌های غیرقابل پیش‌بینی در جذب لید و مشتری.'
    },
    theMove: {
      en: 'Restructured high-intent search campaigns around real-time urgent user queries, built frictionless form-submission tracking, and optimized geo-bidding to achieve a breakthrough 23.42% peak CTR.',
      fa: 'مهندسی کمپین‌های متمرکز بر جستجوهای فوری و با قصد بالای کاربران، ردیابی بی‌درنگ فرم‌های ثبت سفارش و بهینه‌سازی بیدینگ جغرافیایی که به ثبت نرخ کلیک (CTR) فوق‌العاده ۲۳.۴۲٪ انجامید.'
    },
    services: {
      en: ['High-Intent Google Ads', 'Lead Funnel CRO', 'Dynamic Geo-Bidding', 'Telemetry Tracking'],
      fa: ['کمپین‌های جستجوی فوری', 'بهینه‌سازی نرخ تبدیل فرم', 'بیدینگ هوشمند منطقه‌ای', 'تله‌متری لید جنریشن']
    },
    outcome: {
      en: 'Delivered 1.28M impressions, 134K qualified clicks, and 9.03K verified repair lead forms over 1 year (6.67% conversion rate), with seasonal high-intent campaigns hitting a staggering 23.42% CTR.',
      fa: 'ثبت ۱.۲۸ میلیون ایمپرشن، ۱۳۴ هزار کلیک هدفمند و ۹,۰۳۰ فرم ثبت درخواست در یک سال با نرخ تبدیل ۶.۶۷٪، همراه با ثبت رکورد شگفت‌انگیز CTR معادل ۲۳.۴۲٪ در کمپین‌های هدفمند.'
    },
    qualitativeHighlights: {
      en: ['1.28M Impressions & 134K Clicks', '9.03K Form Submissions (6.67% Conv)', 'Peak 23.42% Search Ad CTR'],
      fa: ['۱.۲۸ میلیون ایمپرشن و ۱۳۴ هزار کلیک', '۹,۰۳۰ فرم ثبت درخواست (تبدیل ۶.۶۷٪)', 'رکورد استثنایی CTR معادل ۲۳.۴۲٪']
    },
    media: {
      primary: '/assets/work/tamir_online_primary.png',
      secondary: '/assets/work/tamir_online_secondary.png',
      badgeEn: 'GOOGLE ADS // 1.28M IMPRESSIONS & 9K LEADS',
      badgeFa: 'گوگل ادز // ۱.۲۸ میلیون ایمپرشن و ۹ هزار لید'
    }
  },
  {
    id: 'wine-amphorae',
    slug: 'wine-amphorae',
    featured: false,
    num: '04',
    numFa: '۰۴',
    year: '2024 - 2025',
    challengeCategory: '02-experience',
    client: {
      en: 'WINE AMPHORAE',
      fa: 'واین آمفورا (WINE AMPHORAE)'
    },
    title: {
      en: 'Heritage Terracotta Vessel Platform: Luxury Italian Website Design & Experience',
      fa: 'طراحی وب‌سایت لوکس، تجربه کاربری برندینگ و پلتفرم دیجیتال آمفورای ایتالیایی'
    },
    industry: {
      en: 'Artisanal Terracotta & Winemaking Heritage // Luxury Website Design',
      fa: 'صنایع دست‌ساز و سفالگری باستانی ایتالیا // طراحی وب‌سایت لوکس'
    },
    challenge: {
      en: 'A prestigious Italian artisanal amphora atelier whose digital presence failed to reflect the centuries-old heritage, tactile material luxury, and technical excellence of their handcrafted wine vessels.',
      fa: 'برند اصیل ایتالیایی سازنده ظروف سفالی باستانی که پلتفرم دیجیتال آن توانایی انتقال ارزش‌های لوکس دست‌ساز، میراث تاریخی و عمق مهندسی محصول را به خریداران و تولیدکنندگان بین‌المللی نداشت.'
    },
    theMove: {
      en: 'Designed an immersive editorial digital flagship featuring sculptural vessel presentation, rich Italian craft storytelling, multi-language internationalization, and seamless direct inquiry pathways.',
      fa: 'طراحی و پیاده‌سازی پلتفرم دیجیتال پرچمدار با فضاسازی ادیتوریال و سینمایی ظروف، ساختار بصری مینیمال و متریال‌محور، سیستم چندزبانه و ایجاد مسیر اختصاصی ثبت سفارش و مشاوره بین‌المللی.'
    },
    services: {
      en: ['Bespoke Website Design', 'Editorial Art Direction', 'Luxury UX Architecture', 'International Inbound Flow'],
      fa: ['طراحی اختصاصی وب‌سایت', 'مدیریت هنری و ادیتوریال', 'معماری تجربه کاربری لوکس', 'مسیر ثبت سفارش بین‌المللی']
    },
    outcome: {
      en: 'Transformed the digital presence into an international cultural showpiece, elevating brand perception across global viticulture markets and unlocking high-value direct inquiries from luxury wineries.',
      fa: 'تبدیل هویت دیجیتال به یک اثر هنری متمایز در بازار اروپا، ارتقای جایگاه ادراکی برند به عنوان پیشگام این حوزه و جذب سفارشات مستقیم و با ارزش بالا از تولیدکنندگان بین‌المللی.'
    },
    qualitativeHighlights: {
      en: ['Immersive Luxury Visual System', 'Multilingual International UI', 'High-Ticket Inbound Pathways'],
      fa: ['طراحی بصری ادیتوریال و سینمایی', 'رابط کاربری چندزبانه بین‌المللی', 'مسیر مستقیم پذیرش سفارشات فاخر']
    },
    media: {
      primary: '/assets/work/wine_amphorae_primary.png',
      secondary: '/assets/work/wine_amphorae_secondary.png',
      badgeEn: 'LUXURY DIGITAL FLAGSHIP // ITALIAN HERITAGE',
      badgeFa: 'طراحی پلتفرم لوکس وب // واین آمفورا'
    }
  },
  {
    id: 'zarin-real-estate',
    slug: 'zarin-real-estate',
    featured: false,
    num: '05',
    numFa: '۰۵',
    year: '2025 - 2026',
    challengeCategory: '01-position',
    client: {
      en: 'ZARIN REAL ESTATE DUBAI',
      fa: 'املاک زرین دبی (ZARIN REAL ESTATE)'
    },
    title: {
      en: 'Turning Experience into a Growth Engine: High-Intent Dubai Real Estate Advisory',
      fa: 'تبدیل اعتبار و تجربه به سیستم رشد: جایگاه‌یابی و جذب سرمایه‌گذاران ملک در دبی'
    },
    industry: {
      en: 'Dubai Real Estate Investment & Wealth Advisory',
      fa: 'سرمایه‌گذاری املاک دبی و مشاوره تخصصی دارایی'
    },
    challenge: {
      en: 'Years of proven Dubai market credibility trapped in unstructured ad hoc referrals: high lead volume with low qualification, price-shopper friction, and lack of a cohesive digital trust system.',
      fa: 'سال‌ها اعتبار و سابقه موفق در بازار املاک دبی که به سیستم منسجم رشد تبدیل نشده بود: لیدهای بدون پالایش، تمرکز صرف مخاطب روی قیمت و فقدان فرآیند اعتمادسازی برای تصمیم‌گیری کلان سرمایه‌گذار.'
    },
    theMove: {
      en: 'Re-positioned the brand from generic property broker to "Trusted Investment Partner": engineered an educational decision journey, high-intent lead qualification filters, and a cross-channel trust architecture.',
      fa: 'تغییر جایگاه برند از «فروشنده ملک» به «شریک امین سرمایه‌گذاری در دبی»: طراحی سفر تصمیم‌گیری شفاف، فیلتر لیدهای واجد شرایط (Qualified Leads) و ساخت معماری اعتماد چندکاناله.'
    },
    services: {
      en: ['Investment Positioning', 'Lead Qualification UX', 'Trust Architecture', 'Full-Funnel Content System'],
      fa: ['جایگاه‌یابی استراتژیک برند', 'پالایش هوشمند لید (Lead Qualification)', 'معماری اعتمادسازی دیجیتال', 'سیستم محتوای تصمیم‌ساز']
    },
    outcome: {
      en: 'Shifted buyer mindset from "What is the price?" to strategic advisory conversations, filtering for high-conviction investors and constructing an autonomous multi-stage acquisition and retention system.',
      fa: 'گذر از سؤال سطحی «قیمت چنده؟» به جلسات مشاوره استراتژیک سرمایه‌گذاری، جذب سرمایه‌گذاران با پتانسیل واقعی و ایجاد چرخه پایدار جذب تا معامله و خدمات پس از خرید در دبی.'
    },
    qualitativeHighlights: {
      en: ['From Property Seller to Investment Partner', 'High-Conviction Lead Qualification', 'Integrated Multi-Channel Trust System'],
      fa: ['تبدیل برند به شریک امین سرمایه‌گذاری', 'پالایش لیدهای آماده خرید (Qualified Leads)', 'سیستم یکپارچه اعتماد و همراهی سرمایه‌گذار']
    },
    media: {
      primary: '/assets/work/zarin_primary.png',
      secondary: '/assets/work/zarin_secondary.png',
      badgeEn: 'INVESTMENT ADVISORY // DUBAI REAL ESTATE',
      badgeFa: 'سیستم رشد و جذب سرمایه‌گذاری املاک دبی'
    }
  }
];
