/**
 * MAGICENCY CAPABILITIES / SERVICES DATA ARCHITECTURE
 * Structured 1:1 against CR38 Digital's services data model.
 * Exactly 8 capabilities, with numerical index, title, description,
 * supporting sub-services tags, and visual assets for row hover & expand.
 * Bilingual: English and Persian.
 */

export const SERVICES_DATA = [
  {
    id: 'performance-marketing',
    slug: 'performance-marketing',
    num: '(001)',
    nameEn: 'Performance Marketing',
    nameFa: 'پرفورمنس مارکتینگ',
    descEn: 'Performance marketing engineered around measurable customer acquisition, capital allocation efficiency, conversion quality, and compounding business growth.',
    descFa: 'بازاریابی عملکردی مهندسی‌شده بر پایه جذب مشتریان سنجش‌پذیر، بهره‌وری در تخصیص سرمایه، کیفیت بالای تبدیل و رشد تصاعدی کسب‌وکار.',
    overviewEn: 'We treat performance marketing not as disconnected media spend, but as an empirical capital allocation engine. Every dollar deployed is instrumented with full-funnel conversion telemetry, rapid creative iteration, and rigorous unit economics. We identify where marginal acquisition cost is lowest and conversion intent is highest, continuously recalibrating targeting algorithms to produce compounding return on capital.',
    overviewFa: 'ما پرفورمنس مارکتینگ را نه صرفاً هزینه‌کرد بودجه تبلیغاتی، بلکه یک موتور تخصیص تجربی سرمایه می‌دانیم. تمام بودجه‌های تخصیص‌یافته با تلمتری کامل قیف تبدیل، تکرار پرشتاب ایده‌های خلاق و تحلیل دقیق اقتصاد واحد پایش می‌شوند تا با حداقل هزینه نهایی جذب و بالاترین قصد خرید، بازده تصاعدی سرمایه محقق گردد.',
    systemRoleEn: 'Validates commercial demand hypotheses, uncovers high-converting messaging, and feeds immediate conversion telemetry into organic search and retention loops.',
    systemRoleFa: 'فرضیه‌های تقاضای تجاری را اعتبارسنجی می‌کند، پیام‌های با بیشترین تبدیل را کشف می‌نماید و داده‌های زنده تبدیل را به حلقه‌های سئو و نگه‌داشت تزریق می‌کند.',
    deliverablesEn: [
      'Full-Funnel Paid Media Strategy',
      'High-Velocity Creative Testing',
      'Bid Management & Capital Allocation',
      'Custom Attribution & Telemetry Models',
      'Landing Page Conversion Optimization',
      'Weekly Unit Economic Reporting'
    ],
    deliverablesFa: [
      'استراتژی جامع رسانه‌های پولی در تمام طول قیف',
      'تست و ارزیابی پرشتاب ایده‌های خلاق تبلیغاتی',
      'مدیریت هوشمند بید و تخصیص بهینه سرمایه',
      'مدل‌های سفارشی تحلیل اتربیوشن و تلمتری تبدیل',
      'بهینه‌سازی نرخ تبدیل صفحات فرود',
      'گزارش‌دهی هفتگی شاخص‌های اقتصادی واحد'
    ],
    tagsEn: [
      'Paid Acquisition',
      'Campaign Strategy',
      'Conversion Optimization',
      'Media Buying',
      'Performance Creative',
      'Growth Analytics'
    ],
    tagsFa: [
      'جذب پولی',
      'استراتژی کمپین',
      'بهینه‌سازی نرخ تبدیل',
      'مدیا بایینگ',
      'خلاقیت عملکردی',
      'تحلیل داده‌های رشد'
    ],
    image: '/assets/capabilities/performance.webp',
    altText: 'Performance Marketing Acquisition System'
  },
  {
    id: 'ppc-campaigns',
    slug: 'ppc-campaigns',
    num: '(002)',
    nameEn: 'PPC Campaigns',
    nameFa: 'کمپین‌های پرداخت به ازای کلیک (PPC)',
    descEn: 'High-intent search campaigns, Google Ads, and Performance Max architectures built to intercept active commercial interest and maximize return on ad spend.',
    descFa: 'کمپین‌های جستجوی با قصد خرید بالا، گوگل ادز و ساختارهای Performance Max طراحی‌شده برای تسخیر تقاضای فعال بازار و بیشینه‌سازی بازده بودجه تبلیغات.',
    overviewEn: 'We engineer PPC campaigns to dominate commercial search intent at the precise moment a prospect is deciding to buy. By combining hyper-segmented keyword frameworks, negative match discipline, automated smart-bidding scripts, and tailored landing experiences, our paid search setups consistently outperform generic agency setups on conversion yield and customer acquisition efficiency.',
    overviewFa: 'ما کمپین‌های کلیکی (PPC) را طوری مهندسی می‌کنیم که در لحظه تصمیم‌گیری دقیق خریدار، جستجوهای تجاری را در اختیار بگیرید. از طریق ساختارهای کلیدواژه فوق‌تخصصی، کنترل دقیق کلیدواژه‌های منفی، اسکریپت‌های مناقصه هوشمند و صفحات فرود سفارشی، حساب‌های تبلیغاتی ما بالاترین نرخ تبدیل را با بهینه‌ترین هزینه ایجاد می‌کنند.',
    systemRoleEn: 'Intercepts existing commercial demand with surgical precision, accelerating revenue while discovering query patterns to enrich SEO content strategy.',
    systemRoleFa: 'تقاضای تجاری فعال بازار را با دقت بالا تسخیر می‌کند، درآمد نقد را افزایش می‌دهد و الگوهای جستجوی پربازده را برای استراتژی محتوای سئو استخراج می‌نماید.',
    deliverablesEn: [
      'Google Ads & Search Structure Architecture',
      'Performance Max (PMax) Asset Optimization',
      'Negative Keyword Governance & Waste Elimination',
      'Audience Segment Ingestion & First-Party Data Sync',
      'Conversion Value Rules & Profit-Based Bidding',
      'Continuous Search Query Mining'
    ],
    deliverablesFa: [
      'معماری و بازسازی ساختار کمپین‌های جستجوی گوگل ادز',
      'بهینه‌سازی دارایی‌های کمپین‌های Performance Max',
      'حذف هدفمند کلیدواژه‌های غیرمرتبط و جلوگیری از هدررفت بودجه',
      'همگام‌سازی بخش‌های مخاطبان با داده‌های دست‌اول',
      'تنظیم قوانین ارزش تبدیل بر مبنای سود خالص',
      'پایش و تحلیل مستمر کوئری‌های جستجو'
    ],
    tagsEn: [
      'Google Ads Search',
      'Performance Max (PMax)',
      'Google Shopping',
      'High-Intent Acquisition',
      'Bid & Budget Optimization',
      'Conversion Telemetry'
    ],
    tagsFa: [
      'جستجوی گوگل ادز',
      'کمپین‌های Performance Max',
      'شاپینگ ادز',
      'جذب مخاطبان با قصد خرید',
      'بهینه‌سازی مناقصه و بودجه',
      'تلمتری تبدیل'
    ],
    image: '/assets/work/atrash_secondary.png',
    altText: 'PPC & Search Campaign Architecture'
  },
  {
    id: 'seo',
    slug: 'seo',
    num: '(003)',
    nameEn: 'SEO',
    nameFa: 'سئو و بهینه‌سازی موتورهای جستجو',
    descEn: 'Search engine optimization from technical crawl architectures to search-intent modeling, turning organic search into an enduring, compounding commercial asset.',
    descFa: 'بهینه‌سازی موتورهای جستجو از معماری فنی خزش و ایندکس تا مدل‌سازی نیت جستجو، با هدف تبدیل سرچ ارگانیک به یک دارایی تجاری پایدار و تصاعدی.',
    overviewEn: 'We approach organic search not through superficial keyword density, but as durable technical infrastructure and information retrieval engineering. We resolve crawl bottlenecks, optimize core web vitals, build structured internal links, and map content clusters to commercial search intent. The result is compounding organic acquisition that reduces reliance on paid media over time.',
    overviewFa: 'نگاه ما به سئو نه تکنیک‌های سطحی کیورد استافینگ، بلکه ساخت زیرساخت فنی پایدار و مهندسی بازیابی اطلاعات است. با رفع موانع خزش، بهینه‌سازی سرعت هسته وب (Core Web Vitals)، لینک‌سازی داخلی ساختارمند و نگاشت خوشه‌های محتوایی به نیت‌های تجاری، یک دارایی ارگانیک تصاعدی خلق می‌کنیم که وابستگی به تبلیغات پولی را کاهش می‌دهد.',
    systemRoleEn: 'Establishes enduring organic inbound authority, lowering blended customer acquisition cost and securing high-intent category real estate.',
    systemRoleFa: 'اعتبار ارگانیک پایدار خلق می‌کند، میانگین هزینه کل جذب مشتری را به مرور زمان کاهش می‌دهد و جایگاه تجاری برند را در جستجوهای کلیدی تثبیت می‌نماید.',
    deliverablesEn: [
      'Technical SEO & Crawl Budget Architecture',
      'Core Web Vitals & Render Performance Engineering',
      'Information Architecture & Internal Link Graph',
      'Commercial Search Intent Clustering',
      'Entity-First Structured Data (Schema.org)',
      'Algorithmic Penalty & Migration Safeguarding'
    ],
    deliverablesFa: [
      'معماری فنی سئو و مدیریت بودجه خزش بات‌ها',
      'مهندسی شاخص‌های سرعت هسته وب و بارگذاری',
      'معماری اطلاعات و شبکه ارتباطی لینک‌های داخلی',
      'خوشه‌بندی نیت‌های تجاری خریداران',
      'داده‌های ساختاریافته هویت‌محور بر مبنای اسکیما',
      'حفاظت در برابر افت‌های الگوریتمی و مهاجرت سایت'
    ],
    tagsEn: [
      'Technical SEO',
      'Search Architecture',
      'Organic Acquisition',
      'Search Intent Mapping',
      'Content Systems',
      'Crawl Optimization'
    ],
    tagsFa: [
      'سئوی تکنیکال',
      'معماری ساختار جستجو',
      'جذب ارگانیک',
      'نقشه‌برداری نیت جستجو',
      'سیستم‌های محتوا',
      'بهینه‌سازی خزش'
    ],
    image: '/assets/work/velox_secondary.webp',
    altText: 'Technical SEO & Search Crawl Architecture'
  },
  {
    id: 'social-media-marketing',
    slug: 'social-media-marketing',
    num: '(004)',
    nameEn: 'Social Media Marketing',
    nameFa: 'بازاریابی شبکه‌های اجتماعی',
    descEn: 'Transforming social media attention into audience ownership and pipeline velocity through organic editorial distribution and conversion-oriented paid campaigns.',
    descFa: 'تبدیل توجه در شبکه‌های اجتماعی به مالکیت مخاطب و سرعت در جذب مشتری از طریق توزیع محتوای ادیتوریال و کمپین‌های پولی معطوف به فروش.',
    overviewEn: 'We bridge the gap between creative storytelling and hard commercial pipeline. By engineering platform-native content formats with strict visual taste and deploying high-converting paid social funnels, we turn transient social views into measurable audience ownership, community engagement, and pipeline momentum.',
    overviewFa: 'ما فاصله میان داستان‌سرایی برند و درآمد ملموس را پر می‌کنیم. با تولید قالب‌های محتوایی بومی هر پلتفرم همراه با سلیقه بصری برجسته و اجرای قیف‌های پولی با نرخ تبدیل بالا، توجه زودگذر در شبکه‌های اجتماعی را به مالکیت واقعی مخاطب، مشارکت وفادار و جذب فروش تبدیل می‌سازیم.',
    systemRoleEn: 'Generates category awareness and emotional resonance that drives brand searches, lowers paid search CPCs, and feeds retargeting pools.',
    systemRoleFa: 'آگاهی در سطح بازار و ارتباط احساسی عمیق ایجاد می‌کند که موجب افزایش جستجوهای نام برند، کاهش هزینه کلیک‌ها و تقویت استخرهای ریتارگتینگ می‌گردد.',
    deliverablesEn: [
      'Social Distribution Strategy & Content Frameworks',
      'Short-Form Video & Editorial Production',
      'Paid Social Campaign Funnels (Meta, LinkedIn)',
      'Audience Engagement & Community Management',
      'Creative Performance Testing & Iteration',
      'Full-Funnel Pipeline Attribution'
    ],
    deliverablesFa: [
      'استراتژی توزیع محتوا و چارچوب‌های روایی سوشال',
      'تولید ویدیوهای کوتاه و محتوای ادیتوریال جذاب',
      'قیف‌های تبلیغاتی پولی در پلتفرم‌ها',
      'مدیریت حرفه‌ای تعامل و مشارکت کامیونیتی',
      'تست و بهینه‌سازی پیوسته خلاقیت‌های بصری',
      'اتربیوشن ترافیک به چرخه فروش'
    ],
    tagsEn: [
      'Social Acquisition',
      'Organic Social Systems',
      'Paid Social Advertising',
      'Audience Development',
      'Demand Generation',
      'Conversion Strategy'
    ],
    tagsFa: [
      'جذب از شبکه‌های اجتماعی',
      'سیستم‌های توزیع ارگانیک',
      'تبلیغات نتیجه‌محور در سوشال',
      'پرورش مخاطبان هدف',
      'خلق تقاضا',
      'استراتژی تبدیل'
    ],
    image: '/whatwedo-2.webp',
    altText: 'Social Media Acquisition & Creative Distribution'
  },
  {
    id: 'content-marketing',
    slug: 'content-marketing',
    num: '(005)',
    nameEn: 'Content Marketing',
    nameFa: 'بازاریابی محتوا',
    descEn: 'Strategic narrative architectures engineered to answer high-value commercial questions, educate your category, and position your brand as the definitive authority.',
    descFa: 'معماری‌های روایی استراتژیک برای پاسخ به سوالات کلیدی خریداران، آموزش عمیق بازار و تثبیت نام تجاری به عنوان مرجع قطعی و معتبر صنعت.',
    overviewEn: 'Content without positioning is noise. We construct editorial narrative architectures that answer the complex questions your highest-value prospects research before buying. By combining proprietary data insights, thought leadership, and modular multi-channel repurposing, we turn your intellectual capital into an undeniable moat.',
    overviewFa: 'محتوا بدون جایگاه‌سازی مشخص، صرفاً سر و صدا است. ما معماری‌های روایی ادیتوریالی خلق می‌کنیم که به دشوارترین سوالات خریداران کلیدی شما پاسخ می‌دهند. با ترکیب بینش‌های تحلیلی، رهبری فکری و سیستم‌های توزیع چندکاناله، تخصص شما را به یک مزیت رقابتی غیرقابل کپی تبدیل می‌کنیم.',
    systemRoleEn: 'Educates the market, builds institutional trust, and fuels both technical SEO search real estate and commercial sales enablement.',
    systemRoleFa: 'بازار را آموزش می‌دهد، اعتماد عمیق سازمانی می‌آفریند و سوخت موردنیاز سئو تکنیکال و ابزارهای تسهیل فروش تیم شما را تامین می‌کند.',
    deliverablesEn: [
      'Content Architecture & Category Positioning Playbooks',
      'Long-Form Editorial & Diagnostic Whitepapers',
      'Commercial Landing & Pillar Page Assets',
      'Modular Multi-Platform Repurposing Workflows',
      'Executive Ghostwriting & Thought Leadership',
      'Performance Telemetry & Pipeline Impact Tracking'
    ],
    deliverablesFa: [
      'پلی‌بوک‌های معماری محتوا و جایگاه‌یابی در صنعت',
      'مقاله‌ها و گزارش‌های تشخیصی تخصصی عمیق',
      'دارایی‌های متنی صفحات پیلار و لندینگ‌های فروش',
      'جریان‌های تبدیل یک محتوا به چندین قالب چندکاناله',
      'تولید محتوای رهبری فکری برای مدیران ارشد',
      'سنجش اثرگذاری تجاری محتوا بر پایپ‌لاین فروش'
    ],
    tagsEn: [
      'Content Strategy',
      'Demand Generation Content',
      'Search-Led Content',
      'Thought Leadership',
      'Conversion Content',
      'Multi-Channel Distribution'
    ],
    tagsFa: [
      'استراتژی جامع محتوا',
      'محتوای تقاضاساز',
      'محتوای جستجومحور',
      'رهبری فکری و اعتبار',
      'دارایی‌های محتوایی فروش',
      'توزیع چندکاناله'
    ],
    image: '/assets/capabilities/creative.webp',
    altText: 'Content Marketing & Authority Systems'
  },
  {
    id: 'digital-experience',
    slug: 'digital-experience',
    num: '(006)',
    nameEn: 'Digital Experience',
    nameFa: 'تجربه دیجیتال و پلتفرم',
    descEn: 'Conversion-focused web platforms, UX architectures, and high-velocity landing experiences engineered to turn traffic into pipeline momentum.',
    descFa: 'پلتفرم‌های وب متمرکز بر تبدیل، معماری تجربه کاربری (UX) و صفحات فرود پرسرعت طراحی‌شده برای تبدیل ترافیک ورودی به درآمد ملموس تجاری.',
    overviewEn: 'We treat digital experiences as the commercial transaction engine of your business. Rather than pretty cosmetic redesigns, we architect digital touchpoints around behavioral psychology, frictionless conversion pathways, sub-second page performance, and rich interactive clarity. Every layout decision is designed to maximize conversion velocity.',
    overviewFa: 'ما تجربه‌های دیجیتال را موتور اصلی تراکنش‌های تجاری سازمان شما می‌دانیم. به جای طراحی‌های ظاهری سطحی، نقاط تماس دیجیتال را بر پایه روانشناسی رفتار کاربر، مسیرهای بدون اصطکاک تبدیل، سرعت بارگذاری زیر ثانیه و وضوح تعاملی بنا می‌کنیم تا هر کلیک به بیشترین شتاب تجاری ختم شود.',
    systemRoleEn: 'The critical destination where all paid, organic, and social traffic converges, directly determining the yield and unit economics of all other marketing channels.',
    systemRoleFa: 'نقطه عطف حیاتی که تمام ترافیک پولی، ارگانیک و شبکه‌های اجتماعی در آن به هم می‌رسند و بازدهی نهایی کل سرمایه‌گذاری‌های بازاریابی را رقم می‌زند.',
    deliverablesEn: [
      'High-Conversion Web & Landing Page Architecture',
      'Frictionless UX/UI Design & Prototyping',
      'Front-End Engineering & Interaction Development',
      'A/B Testing Frameworks & Funnel Optimization',
      'Core Web Vitals & Sub-Second Loading Optimization',
      'Conversion Tracking & Heatmap Instrumentation'
    ],
    deliverablesFa: [
      'معماری وب‌سایت و لندینگ پیج‌های با نرخ تبدیل بالا',
      'طراحی رابط و تجربه کاربری (UI/UX) روان و بدون اصطکاک',
      'توسعه فرانت‌اند و پیاده‌سازی انیمیشن‌های تعاملی',
      'چارچوب‌های تست A/B و رفع گلوگاه‌های قیف',
      'بهینه‌سازی سرعت بارگذاری صفحات در کسری از ثانیه',
      'نصب ابزارهای هیت‌مپ و تلمتری دقیق تبدیل'
    ],
    tagsEn: [
      'Conversion Websites',
      'UX Architecture',
      'Landing Experiences',
      'CRO Interfaces',
      'User Journey Mapping',
      'Acquisition Integration'
    ],
    tagsFa: [
      'وب‌سایت‌های تبدیل‌محور',
      'معماری تجربه کاربری',
      'تجربه‌های فرود سریع',
      'رابط‌های بهینه‌سازی تبدیل (CRO)',
      'نقشه‌برداری مسیر کاربر',
      'یکپارچگی با کانال‌های جذب'
    ],
    image: '/project-4.webp',
    altText: 'Digital Experience & High-Conversion UX'
  },
  {
    id: 'retention-marketing',
    slug: 'retention-marketing',
    num: '(007)',
    nameEn: 'Retention Marketing',
    nameFa: 'بازاریابی بازگشتی و نگه‌داشت',
    descEn: 'Lifecycle marketing automation, CRM architecture, and behavioral re-engagement loops engineered to compound customer lifetime value and eliminate churn.',
    descFa: 'اتوماسیون بازاریابی چرخه عمر، معماری CRM و چرخه‌های بازگشت مشتری طراحی‌شده برای افزایش تصاعدی ارزش طول عمر مشتری و پیشگیری از ریزش.',
    overviewEn: 'Acquisition without retention is a leaky bucket that destroys enterprise margin. We build automated lifecycle engines, predictive CRM segmentation, churn prevention triggers, and personalized re-engagement campaigns. By expanding repeat transactions and maximizing customer lifetime value, your marketing spend produces durable enterprise compounding.',
    overviewFa: 'جذب بدون نگه‌داشت مشتری، سطل سوراخی است که حاشیه سود سازمان را می‌بلعد. ما موتورهای خودکار چرخه عمر، بخش‌بندی هوشمند CRM، تریگرهای پیشگیری از ریزش و کمپین‌های بازگشت اختصاصی می‌سازیم تا ارزش طول عمر مشتری (LTV) به حداکثر رسیده و بازده سرمایه‌گذاری بازاریابی پایدار بماند.',
    systemRoleEn: 'Unlocks higher allowable customer acquisition costs (CAC) by maximizing lifetime revenue per customer, giving your business an unassailable acquisition advantage.',
    systemRoleFa: 'با افزایش درآمد مادام‌العمر هر مشتری، سقف مجاز هزینه جذب (CAC) را بالا برده و دست بازتری برای پیروزی در تبلیغات به شما می‌دهد.',
    deliverablesEn: [
      'CRM Architecture & Customer Data Platform Integration',
      'Behavioral Email & SMS Automation Workflows',
      'Cohort-Based Retention & Churn Telemetry',
      'VIP & Repeat Purchase Incentive Loops',
      'Predictive LTV Modeling & Segmentation',
      'Re-engagement & Win-Back Playbooks'
    ],
    deliverablesFa: [
      'معماری CRM و یکپارچه‌سازی پلتفرم‌های داده مشتریان',
      'جریان‌های خودکار ایمیل و پیامک مبتنی بر رفتار',
      'تلمتری تحلیل کوهورت و سنجش نرخ ریزش',
      'چرخه‌های تشویق خرید مجدد و وفاداری مشتریان کلیدی',
      'مدل‌سازی ارزش طول عمر و دسته‌بندی پیش‌بینانه',
      'پلی‌بوک‌های بازگرداندن مشتریان غیرفعال'
    ],
    tagsEn: [
      'CRM Architecture',
      'Lifecycle Marketing',
      'Behavioral Re-engagement',
      'Repeat Purchase Loops',
      'Customer LTV Expansion',
      'Retention Systems'
    ],
    tagsFa: [
      'معماری و یکپارچه‌سازی CRM',
      'بازاریابی چرخه عمر مشتری',
      'بازگرداندن تعاملی کاربران',
      'چرخه‌های تکرار خرید',
      'افزایش ارزش طول عمر (LTV)',
      'سیستم‌های حفظ مشتری'
    ],
    image: '/assets/capabilities/growth_systems.webp',
    altText: 'Retention Marketing & Lifecycle Loops'
  },
  {
    id: 'event-marketing',
    slug: 'event-marketing',
    num: '(008)',
    nameEn: 'Event Marketing',
    nameFa: 'بازاریابی رویداد و راه‌اندازی',
    descEn: 'Multi-channel launch campaigns and experiential activations engineered to concentrate market momentum, generate demand spikes, and acquire qualified audiences.',
    descFa: 'کمپین‌های رونمایی چندکاناله و فعال‌سازی‌های تجربی برند مهندسی‌شده برای متمرکز کردن توجه بازار، خلق جهش‌های تقاضا و جذب سریع مخاطبان بالقوه.',
    overviewEn: 'We engineer event marketing and product launch activations to create concentrated surges of market demand. By synchronizing teaser campaigns, experiential storytelling, VIP guest lists, live digital interactions, and rapid post-event sales funnels, we turn milestone launches into permanent pipeline inflection points.',
    overviewFa: 'ما بازاریابی رویداد و کمپین‌های رونمایی را به عنوان ابزاری برای خلق جهش‌های متمرکز تقاضا مهندسی می‌کنیم. با هماهنگ‌سازی کمپین‌های پیش‌از رویداد، تجارب تعاملی زنده، دعوت هدفمند از افراد کلیدی صنعت و قیف‌های سریع فروش پس از رویداد، لانچ‌های محصول را به نقاط عطف جهش درآمد تبدیل می‌کنیم.',
    systemRoleEn: 'Concentrates category attention into sudden demand spikes, infusing the entire growth engine with fresh qualified pipeline and brand momentum.',
    systemRoleFa: 'توجه صنعت را در جهش‌های قدرتمند تقاضا متمرکز ساخته و روح تازه‌ای از لیدهای واجد شرایط و تکانه برند را به کل سیستم رشد تزریق می‌کند.',
    deliverablesEn: [
      'Multi-Channel Launch & Event Playbooks',
      'High-Impact Digital & Physical Registration Funnels',
      'VIP Attendee Acquisition & Account-Based Invitations',
      'Live Event Broadcast & Real-Time Social Amplification',
      'Rapid Post-Event Follow-Up & Pipeline Conversion',
      'Commercial ROI & Deal-Sourcing Reporting'
    ],
    deliverablesFa: [
      'پلی‌بوک‌های چندکاناله رونمایی محصول و رویداد',
      'قیف‌های ثبت‌نام پرسرعت آنلاین و حضوری',
      'جذب اختصاصی مخاطبان کلیدی و مدیران تصمیم‌گیر',
      'پوشش زنده رویداد و انتشار پرشتاب در شبکه‌های اجتماعی',
      'پیگیری سریع لیدها بلافاصله پس از رویداد',
      'گزارش‌دهی دقیق بازگشت سرمایه و قراردادهای شکل‌گرفته'
    ],
    tagsEn: [
      'Event Campaigns',
      'Product Launches',
      'Experiential Activations',
      'Demand Spikes',
      'Audience Acquisition',
      'Launch Momentum'
    ],
    tagsFa: [
      'کمپین‌های رویدادمحور',
      'رونمایی از محصولات',
      'فعال‌سازی‌های تجربی',
      'جهش‌های متمرکز تقاضا',
      'جذب پرشتاب مخاطب',
      'تکانه لانچ موفق'
    ],
    image: '/whatwedo-1.webp',
    altText: 'Event Marketing & Launch Activation'
  }
];

export const PROOF_STATS = [
  {
    number: '134K+',
    labelEn: 'Search Clicks Delivered',
    labelFa: 'کلیک‌های ثبت‌شده جستجو',
    descEn: 'High-intent search traffic captured across competitive verticals.'
  },
  {
    number: '11.0x',
    labelEn: 'Reported ROAS Peak',
    labelFa: 'بیشینه بازگشت هزینه تبلیغات',
    descEn: 'Performance Max e-commerce sprint efficiency.'
  },
  {
    number: '84.1K',
    labelEn: 'Organic Clicks Scaled',
    labelFa: 'کلیک‌های ارگانیک سئو',
    descEn: 'Generated via technical search architecture and crawl optimization.'
  },
  {
    number: '9.03K',
    labelEn: 'Reported Leads Generated',
    labelFa: 'لیدهای تجاری جذب‌شده',
    descEn: 'Direct commercial form inquiries produced for urban service client.'
  }
];

export const CAPABILITIES_FAQS = [
  {
    qEn: 'How do your capabilities work together as a growth system?',
    qFa: 'توانمندی‌های مختلف مجیکنسـی چگونه به عنوان یک سیستم یکپارچه با یکدیگر کار می‌کنند؟',
    aEn: 'Rather than running disconnected marketing tactics, every capability feeds telemetry and insight into the next. Paid acquisition tests demand hypotheses that inform our SEO content architecture; conversion data from digital experiences recalibrates advertising bidding; and retention data establishes true customer lifetime value.',
    aFa: 'به جای اجرای اقدامات تبلیغاتی پراکنده، هر توانمندی تلمتری و داده‌های خود را به مؤلفه بعدی انتقال می‌دهد. کمپین‌های جذب فرضیه‌های تقاضا را برای معماری سئو اعتبارسنجی می‌کنند؛ داده‌های تبدیل تجربه دیجیتال مدل‌های بیدینگ تبلیغات را هوشمند می‌سازند و داده‌های نگه‌داشت، ارزش واقعی مشتری را برای تخصیص بهینه سرمایه مشخص می‌کنند.'
  },
  {
    qEn: 'Do you work on individual channels or only complete growth systems?',
    qFa: 'آیا روی تک‌کانال‌ها هم کار می‌کنید یا تنها سیستم کامل رشد را اجرا می‌کنید؟',
    aEn: 'We routinely begin engagements by solving a specific bottleneck—such as restructuring a PPC account, engineering a technical SEO crawl framework, or rebuilding a high-velocity landing experience. However, every single capability is delivered with system-level architecture, ensuring it naturally compounds with your broader business economics.',
    aFa: 'همکاری‌ها معمولاً از حل یک گلوگاه مشخص آغاز می‌شود؛ مانند بازطراحی حساب گوگل ادز، ارتقای زیرساخت فنی سئو یا طراحی لندینگ‌پیج‌های پرسرعت. با این حال، حتی اجرای تک‌توانمندی نیز با دیدگاه معماری سیستم صورت می‌گیرد تا با رشد کسب‌وکار شما همگام شود.'
  },
  {
    qEn: 'Can we start with one capability and scale from there?',
    qFa: 'آیا می‌توانیم از یک توانمندی آغاز کنیم و سپس آن را گسترش دهیم؟',
    aEn: 'Yes. Starting with a single vector allows us to establish immediate commercial traction and baseline telemetry before deploying adjacent capabilities such as lifecycle retention or programmatic content systems.',
    aFa: 'بله. آغاز با یک بردار خاص به ما امکان می‌دهد سریعاً شتاب تجاری اولیه و تلمتری دقیق را مستقر کنیم، پیش از آنکه مؤلفه‌های مجاور مانند اتوماسیون نگه‌داشت یا سیستم‌های محتوایی را فعال نماییم.'
  },
  {
    qEn: 'How do you measure performance across multiple channels?',
    qFa: 'عملکرد و بازدهی سرمایه در کانال‌های مختلف چگونه سنجیده می‌شود؟',
    aEn: 'We track blended customer acquisition cost (CAC), payback velocity, and customer lifetime value (LTV). By looking beyond channel-level vanity metrics, we ensure capital is deployed where it drives the highest marginal commercial return.',
    aFa: 'ما هزینه واقعی جذب مشتری (CAC)، سرعت بازگشت سرمایه و ارزش طول عمر مشتری (LTV) را ارزیابی می‌کنیم و با عبور از شاخص‌های سطحی، مطمئن می‌شویم سرمایه در پربازده‌ترین مسیرها هزینه می‌شود.'
  },
  {
    qEn: 'What happens before an engagement begins?',
    qFa: 'مراحل قبل از آغاز رسمی همکاری به چه صورت است؟',
    aEn: 'We conduct an Architectural Growth Discovery to analyze your current unit economics, acquisition funnels, conversion friction, and market positioning. We then present a clear diagnostic roadmap of priorities before executing.',
    aFa: 'ما یک فرآیند تشخیصی معماری رشد برگزار می‌کنیم تا وضعیت اقتصاد واحد، قیف‌های جذب، اصطکاک تبدیل و جایگاه بازار شما را بررسی کنیم؛ سپس نقشه راه مشخصی از اولویت‌های اجرایی ارائه می‌دهیم.'
  },
  {
    qEn: 'Why do you call it Digital Experience instead of Web Design?',
    qFa: 'چرا به جای «طراحی وب‌سایت»، از عنوان «تجربه دیجیتال» استفاده می‌کنید؟',
    aEn: 'Web design often refers to cosmetic visual layout. Digital Experience focuses on conversion architecture: user journey psychology, page load velocity, interactive friction removal, and deep integration with acquisition telemetry to maximize commercial yield.',
    aFa: 'طراحی وب اغلب بر چیدمان ظاهری تمرکز دارد؛ در حالی که تجربه دیجیتال بر معماری تبدیل تجاری تمرکز دارد: روانشناسی رفتار کاربر، سرعت پاسخگویی، رفع موانع ثبت سفارش و اتصال عمیق با داده‌های جذب برای دستیابی به بالاترین نرخ تبدیل.'
  }
];
