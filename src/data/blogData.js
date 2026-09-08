/**
 * MAGICENCY® EDITORIAL PUBLICATION DATA ARCHITECTURE
 * Curated bilingual thought-leadership articles, categories, and editorial principles.
 */

export const BLOG_CATEGORIES = [
  { id: 'all', labelEn: 'ALL INSIGHTS', labelFa: 'تمام دیدگاه‌ها' },
  { id: 'strategy', labelEn: 'STRATEGY', labelFa: 'استراتژی' },
  { id: 'brand-creative', labelEn: 'BRAND & CREATIVE', labelFa: 'برند و خلاقیت' },
  { id: 'digital', labelEn: 'DIGITAL', labelFa: 'دیجیتال' },
  { id: 'growth', labelEn: 'GROWTH', labelFa: 'رشد و جذب' },
  { id: 'ai-tech', labelEn: 'AI & TECH', labelFa: 'هوش مصنوعی و فناوری' },
  { id: 'opinion', labelEn: 'OPINION', labelFa: 'یادداشت سردبیر' }
];

export const EDITORIAL_PRINCIPLES = [
  {
    num: '01',
    id: 'observe',
    tagEn: 'OBSERVE',
    tagFa: 'مشاهده',
    questionEn: 'What is actually changing in the commercial landscape?',
    questionFa: 'در چشم‌انداز واقعی بازار چه چیزی در حال دگرگونی است؟',
    descEn: 'We look past marketing hype to document underlying customer behavior, shifting unit economics, and structural friction.',
    descFa: 'ما فراتر از هیاهوهای مقطعی، رفتار عینی مشتریان، اقتصاد واحد محصول و اصطکاک‌های ساختاری را مشاهده و ثبت می‌کنیم.'
  },
  {
    num: '02',
    id: 'question',
    tagEn: 'QUESTION',
    tagFa: 'پرسشگری',
    questionEn: 'What assumptions are businesses getting wrong?',
    questionFa: 'کدام فرضیات رایج توسط کسب‌وکارها اشتباه گرفته می‌شوند؟',
    descEn: 'Most failure comes from flawlessly executing bad assumptions. We challenge traditional briefs, vanity metrics, and isolated tactics.',
    descFa: 'بیشتر شکست‌ها ناشی از اجرای بی‌نقص فرضیات اشتباه است. ما بریف‌های کلیشه‌ای، آمارهای نمایشی و اقدامات جزیره‌ای را به چالش می‌کشیم.'
  },
  {
    num: '03',
    id: 'share',
    tagEn: 'SHARE',
    tagFa: 'هم‌افزایی',
    questionEn: 'What insight can make the next decision better?',
    questionFa: 'چه دانشی می‌تواند تصمیم بعدی کارآفرین را هوشمندانه‌تر کند؟',
    descEn: 'Growth is compounding learning. We share field notes, empirical data, and architectural models to elevate the standard of commercial execution.',
    descFa: 'رشد، انباشت سود حاصل از یادگیری است. ما تجربیات میدانی و مدل‌های مهندسی‌شده را برای اتخاذ تصمیم‌های با اطمینان بالا به اشتراک می‌گذاریم.'
  }
];

export const BLOG_ARTICLES = [
  {
    id: 'more-marketing-not-more-growth',
    slug: 'more-marketing-not-more-growth',
    featured: true,
    number: '01',
    category: 'strategy',
    categoryLabelEn: 'STRATEGY',
    categoryLabelFa: 'استراتژی',
    format: 'ESSAY',
    formatLabelEn: 'ESSAY',
    formatLabelFa: 'جستار تحلیلی',
    date: 'SEP 2026',
    dateFa: 'شهریور ۱۴۰۵',
    readTime: '8 MIN READ',
    readTimeFa: '۸ دقیقه مطالعه',
    author: 'Magicency Editorial',
    authorEn: 'Magicency Editorial',
    authorFa: 'تحریریه مجیکانسی',
    coverImage: '/journal-1.jpg',
    titleEn: "Why more marketing doesn't always create more growth.",
    titleFa: 'چرا بازاریابی بیشتر همیشه رشد بیشتر خلق نمی‌کند.',
    excerptEn: 'When companies hit a growth ceiling, the default reaction is to increase spend, launch more ads, and publish more content. But scaling a broken system only accelerates exhaustion.',
    excerptFa: 'هنگامی که کسب‌وکارها به سقف رشد برخورد می‌کنند، واکنش غریزی افزایش بودجه و لانچ تبلیغات بیشتر است؛ اما مقیاس‌گذاری یک سیستم معیوب، صرفاً سرعت هدررفت سرمایه را چندبرابر می‌کند.',
    pullQuoteEn: 'Scaling a broken conversion architecture does not produce scale. It produces expensive chaos.',
    pullQuoteFa: 'مقیاس‌گذاری یک معماری تبدیل نشتی‌دار، رشد خلق نمی‌کند؛ بلکه هرج‌ومرجی گران‌قیمت می‌آفریند.',
    contentEn: [
      {
        heading: 'The Fallacy of Pure Volume',
        text: 'For the past decade, digital marketing taught founders a dangerous half-truth: that growth is a direct function of output volume. More blog posts, more ad variants, more reels, more touchpoints. But marketing volume is subject to aggressive diminishing returns when the foundational positioning is ambiguous.'
      },
      {
        heading: 'The Leaky Funnel Paradox',
        text: 'Pumping qualified audience into a digital experience that fails to answer the buyer’s core risk calculations results in escalating customer acquisition costs (CAC). Before pouring fuel into media buying, businesses must diagnose whether their value proposition is mathematically distinct.'
      },
      {
        heading: 'From Spend to System Architecture',
        text: 'Sustainable companies do not view marketing as a collection of periodic expenditures. They engineer a closed feedback loop: positioning informs creative conviction, digital platforms capture and convert demand, and telemetry continuously refines the next commercial move.'
      }
    ],
    contentFa: [
      {
        heading: 'توهم مقیاس از طریق افزایش حجم',
        text: 'در دهه گذشته، بازاریابی دیجیتال سنتی یک باور گمراه‌کننده را به مدیران تلقین کرد: اینکه رشد نتیجه مستقیم افزایش حجم خروجی است. تبلیغات بیشتر، پست‌های بیشتر و کمپین‌های پرسر و صداتر. اما زمانی که جایگاه‌یابی بنیادین مبهم باشد، افزایش حجم صرفاً اتلاف منابع را سرعت می‌بخشد.'
      },
      {
        heading: 'پارادوکس قیف‌های سوراخ',
        text: 'هدایت ترافیک گران‌قیمت به سمت تجربه‌ای دیجیتال که قادر به خنثی کردن تردیدهای مشتری نیست، نتیجه‌ای جز جهش هزینه جذب مشتری (CAC) ندارد. پیش از تزریق بودجه به کانال‌های پولی، باید ممیزی شود که آیا گزاره ارزش برند واقعاً تمایز اقتصادی ایجاد می‌کند یا خیر.'
      },
      {
        heading: 'گذار از هزینه به معماری سیستم',
        text: 'کسب‌وکارهای ماندگار، بازاریابی را به عنوان هزینه‌ای مقطعی نمی‌بینند. آن‌ها یک مدار بسته خودتنظیم مهندسی می‌کنند: استراتژی، ایمان خلاقانه می‌آفریند؛ پلتفرم دیجیتال تقاضا را نقد می‌کند؛ و تله‌متری داده مسیر تصمیم بعدی را شفاف می‌سازد.'
      }
    ],
    keyTakeawaysEn: [
      'Volume without positioning creates noise, not market power.',
      'A 10% lift in conversion efficiency compounds faster than a 50% increase in ad spend.',
      'Closed-loop systems widen competitive moats over time.'
    ],
    keyTakeawaysFa: [
      'حجم تبلیغات بدون جایگاه‌یابی شفاف، آلودگی صوتی تولید می‌کند نه قدرت تجاری.',
      'افزایش ۱۰ درصدی در نرخ تبدیل، سریع‌تر از افزایش ۵۰ درصدی بودجه تبلیغات رشد ایجاد می‌کند.',
      'سیستم‌های مداربسته رشد، با گذشت زمان خندق رقابتی کسب‌وکار را عمیق‌تر می‌سازند.'
    ]
  },
  {
    id: 'more-content-is-not-fixing-problem',
    slug: 'more-content-is-not-fixing-problem',
    featured: false,
    number: '02',
    category: 'brand-creative',
    categoryLabelEn: 'BRAND & CREATIVE',
    categoryLabelFa: 'برند و خلاقیت',
    format: 'ANALYSIS',
    formatLabelEn: 'ANALYSIS',
    formatLabelFa: 'تحلیل ساختاری',
    date: 'AUG 2026',
    dateFa: 'مرداد ۱۴۰۵',
    readTime: '6 MIN READ',
    readTimeFa: '۶ دقیقه مطالعه',
    author: 'Magicency Editorial',
    authorEn: 'Magicency Editorial',
    authorFa: 'تحریریه مجیکانسی',
    coverImage: '/journal-2.jpg',
    titleEn: "More content isn't fixing your marketing problem.",
    titleFa: 'تولید محتوای بیشتر مشکل بازاریابی شما را حل نمی‌کند.',
    excerptEn: 'When organic engagement stalls, marketing teams default to publishing more frequently. But content without strategic point of view is merely digital clutter.',
    excerptFa: 'وقتی نرخ تعامل ارگانیک افت می‌کند، تیم‌ها انتشار محتوا را فشرده‌تر می‌کنند. اما محتوای بدون زاویه دید و نگرش اختصاصی، تنها انباشت سر و صدا در فضای وب است.',
    pullQuoteEn: 'If your perspective is indistinguishable from your category, no publishing cadence will generate authority.',
    pullQuoteFa: 'اگر زاویه دید شما از متوسط بازار غیرقابل تشخیص باشد، هیچ تکراری نمی‌تواند مرجعیت بسازد.',
    contentEn: [
      {
        heading: 'The Content Treadmill Trap',
        text: 'Brands exhaust creative teams producing daily posts that generate transient vanity impressions but zero commercial conviction. The marketplace does not suffer from a deficit of content; it suffers from an acute deficit of original perspective.'
      },
      {
        heading: 'Conviction Over Cadence',
        text: 'Publishing one definitive, deeply researched monograph or high-production digital showcase shifts perception more profoundly than 100 formulaic social carousels. High-value buyers gravitate toward intellectual clarity.'
      }
    ],
    contentFa: [
      {
        heading: 'تله تردمیل تولید محتوا',
        text: 'برندها تیم‌های خلاقه خود را با تولید روزانه محتواهایی که لایک‌های زودگذر دارند اما منجر به اعتماد تجاری نمی‌شوند فرسوده می‌کنند. بازار از کمبود محتوا رنج نمی‌برد؛ بلکه دچار قحطی دیدگاه‌های دست‌اول و اصیل است.'
      },
      {
        heading: 'اقتدار به جای تکرار مکانیکی',
        text: 'انتشار یک گزارش عمیق، مستند و مهندسی‌شده، ادراک بازار را بسیار قدرتمندتر از صدها پست اینستاگرامی تکراری دگرگون می‌کند. مشتریان باارزش همیشه به سمت شفافیت فکری جذب می‌شوند.'
      }
    ],
    keyTakeawaysEn: [
      'Stop feeding algorithm calendars; start articulating category conviction.',
      'Authority stems from what you dare to question, not what you summarize.'
    ],
    keyTakeawaysFa: [
      'به جای خوراک دادن به الگوریتم، موضع خود را در صنعت مشخص کنید.',
      'مرجعیت برند از جرات زیر سوال بردن اصول سنتی شکل می‌گیرد.'
    ]
  },
  {
    id: 'website-has-conviction-problem',
    slug: 'website-has-conviction-problem',
    featured: false,
    number: '03',
    category: 'digital',
    categoryLabelEn: 'DIGITAL',
    categoryLabelFa: 'دیجیتال',
    format: 'INSIGHT',
    formatLabelEn: 'INSIGHT',
    formatLabelFa: 'بینش راهبردی',
    date: 'JUL 2026',
    dateFa: 'تیر ۱۴۰۵',
    readTime: '5 MIN READ',
    readTimeFa: '۵ دقیقه مطالعه',
    author: 'Magicency Editorial',
    authorEn: 'Magicency Editorial',
    authorFa: 'تحریریه مجیکانسی',
    coverImage: '/journal-3.jpg',
    titleEn: "Your website may not have a design problem — it has a conviction problem.",
    titleFa: 'وبسایت شما مشکل طراحی ندارد؛ مشکل فقدان ایمان و شفافیت دارد.',
    excerptEn: 'Many redesigns obsess over trendy animations and aesthetic gloss while failing to articulate why the business deserves to win. Pretty interfaces cannot rescue timid positioning.',
    excerptFa: 'بسیاری از بازطراحی‌ها درگیر ترندهای ظاهری می‌شوند اما در انتقال اینکه چرا کسب‌وکار شایسته انتخاب است شکست می‌خورند. زیبایی ظاهری نمی‌تواند ضعف جایگاه‌یابی را پنهان کند.',
    pullQuoteEn: 'Design is commercial proof architecture. If the logic is hollow, visual polish only amplifies the void.',
    pullQuoteFa: 'طراحی، معماری اثبات ارزش تجاری است. اگر منطق توخالی باشد، زیبایی بصری تنها سرعت شکست را آشکارتر می‌کند.',
    contentEn: [
      {
        heading: 'The Redesign Mirage',
        text: 'A business experiences slumping sales and commissions a website redesign. The agency delivers a modern layout with subtle micro-interactions. Three months post-launch, conversion rates remain flat. Why? Because the core narrative remained unchanged.'
      },
      {
        heading: 'Architecture of Commercial Proof',
        text: 'Every scroll, headline, and layout choice on a digital flagship must dismantle a specific commercial hesitation. When design is treated as a strategic instrument of proof, bounce rates collapse and conversion velocities compound.'
      }
    ],
    contentFa: [
      {
        heading: 'سراب بازطراحی سطحی',
        text: 'کسب‌وکار با افت فروش مواجه می‌شود و تصمیم به بازطراحی وبسایت می‌گیرد. رابط کاربری مدرن می‌شود اما ۳ ماه بعد نرخ تبدیل تغییر محسوسی نمی‌کند. چرا؟ چون روایت بنیادین و گزاره تمایز همچنان بدون تغییر مانده است.'
      },
      {
        heading: 'معماری اثبات تجاری',
        text: 'هر اسکرول، تیتر و فاصله‌ای در یک پلتفرم دیجیتال باید تردیدی مشخص در ذهن خریدار را خنثی کند. وقتی دیزاین به عنوان ابزار مهندسی اثبات به کار گرفته شود، نرخ پرش کاهش یافته و فروش سرعت می‌گیرد.'
      }
    ],
    keyTakeawaysEn: [
      'Never redesign a digital platform without sharpening the commercial thesis.',
      'Frictionless user experience must serve unequivocal value clarity.'
    ],
    keyTakeawaysFa: [
      'هرگز یک پلتفرم دیجیتال را بدون بازنگری در تز تجاری آن بازطراحی نکنید.',
      'تجربه کاربری روان باید در خدمت وضوح بی‌چون‌وچرای ارزش برند باشد.'
    ]
  },
  {
    id: 'why-campaigns-reset-growth',
    slug: 'why-campaigns-reset-growth',
    featured: false,
    number: '04',
    category: 'growth',
    categoryLabelEn: 'GROWTH',
    categoryLabelFa: 'رشد و جذب',
    format: 'FIELD NOTE',
    formatLabelEn: 'FIELD NOTE',
    formatLabelFa: 'گزارش میدانی',
    date: 'JUN 2026',
    dateFa: 'خرداد ۱۴۰۵',
    readTime: '7 MIN READ',
    readTimeFa: '۷ دقیقه مطالعه',
    author: 'Magicency Editorial',
    authorEn: 'Magicency Editorial',
    authorFa: 'تحریریه مجیکانسی',
    coverImage: '/project-1.jpg',
    titleEn: 'Why campaigns keep resetting your growth to zero.',
    titleFa: 'چرا کمپین‌ها رشد شما را پس از پایان بودجه به نقطه صفر بازمی‌گردانند.',
    excerptEn: 'Campaign-dependent businesses live on an adrenaline drip. When media budgets pause, acquisition evaporates. Here is how to engineer permanent retention flywheels.',
    excerptFa: 'کسب‌وکارهای وابسته به کمپین روی سرم آدرنالین زندگی می‌کنند. با توقف بودجه تبلیغات، جذب مشتری محو می‌شود. راهکار، ساخت فلای‌ویل‌های بازگشتی است.',
    pullQuoteEn: 'Campaigns are tactical spikes. Systems build compounding momentum that outlives the budget.',
    pullQuoteFa: 'کمپین‌ها قله‌های مقطعی‌اند؛ اما سیستم‌ها شتابی تصاعدی خلق می‌کنند که فراتر از شارژ بودجه زنده می‌ماند.',
    contentEn: [
      {
        heading: 'The Adrenaline Drip Trap',
        text: 'Traditional agency models encourage continuous campaign launches because it bills billable hours. But for the business, it creates extreme financial volatility. Once the paid media switch is flipped off, traffic drops to zero.'
      },
      {
        heading: 'Building Compounding Growth Engines',
        text: 'Modern growth replaces the campaign mindset with systematic asset engineering: organic inbound moats, viral loops, high-LTV onboarding sequences, and programmatic optimization engines that get stronger with every customer gained.'
      }
    ],
    contentFa: [
      {
        heading: 'تله اتکا به آدرنالین تبلیغات',
        text: 'مدل سنتی آژانس‌ها لانچ مداوم کمپین‌ها را تشویق می‌کند چون ساعت کاری فاکتور می‌شود. اما برای کارفرما، این مدل نوسان شدید مالی به همراه دارد؛ به محض خاموش شدن تبلیغات پولی، ورودی سیستم قطع می‌شود.'
      },
      {
        heading: 'ساخت موتورهای رشد مرکب',
        text: 'رشد مدرن ذهنیت کمپین‌محور را با مهندسی دارایی‌های پایدار جایگزین می‌کند: خندق سئوی ارگانیک، توالی‌های خودکار ارتقای ارزش دوره عمر، و چرخه‌های بازخورد داده که با هر مشتری جدید قوی‌تر می‌شوند.'
      }
    ],
    keyTakeawaysEn: [
      'Shift marketing budget from pure media burn into permanent digital assets.',
      'Measure growth sustainability by what happens when paid ads pause for 30 days.'
    ],
    keyTakeawaysFa: [
      'بودجه را از هدررفت صرف در تبلیغات به سمت ساخت دارایی‌های دیجیتال ماندگار سوق دهید.',
      'پایداری رشد کسب‌وکار خود را با وضعیت آن پس از توقف ۳۰ روزه تبلیغات بسنجید.'
    ]
  },
  {
    id: 'ai-creative-volume-fallacy',
    slug: 'ai-creative-volume-fallacy',
    featured: false,
    number: '05',
    category: 'ai-tech',
    categoryLabelEn: 'AI & TECH',
    categoryLabelFa: 'هوش مصنوعی و فناوری',
    format: 'OPINION',
    formatLabelEn: 'OPINION',
    formatLabelFa: 'یادداشت انتقادی',
    date: 'MAY 2026',
    dateFa: 'اردیبهشت ۱۴۰۵',
    readTime: '5 MIN READ',
    readTimeFa: '۵ دقیقه مطالعه',
    author: 'Magicency Editorial',
    authorEn: 'Magicency Editorial',
    authorFa: 'تحریریه مجیکانسی',
    coverImage: '/project-2.jpg',
    titleEn: "AI can produce more creative. That doesn't mean you need more creative.",
    titleFa: 'هوش مصنوعی می‌تواند خروجی نامحدود بسازد؛ اما شما به محتوای بیشتر نیاز ندارید.',
    excerptEn: 'Generative tools have reduced the marginal cost of content creation to near zero. But when everyone can generate thousands of assets instantly, discernment becomes the only moat.',
    excerptFa: 'ابزارهای هوش مصنوعی هزینه تولید محتوا را به صفر رسانده‌اند. اما وقتی همه می‌توانند هزاران طرح در ثانیه بسازند، قدرت تشخیص و سلیقه استراتژیک تنها خندق رقابتی باقی‌مانده است.',
    pullQuoteEn: 'When creation becomes frictionless, editing and taste become the ultimate competitive advantage.',
    pullQuoteFa: 'وقتی تولید بدون اصطکاک و بی‌نهایت شد، قدرت گزینش، حذف و سلیقه به بالاترین مزیت رقابتی تبدیل می‌شود.',
    contentEn: [
      {
        heading: 'The Infinity Engine Illusion',
        text: 'Marketers rush to deploy autonomous agents generating 500 ad copy variations per day. The result is an avalanche of bland, statistically average creative assets that audiences learn to ignore within microseconds.'
      },
      {
        heading: 'The Premium of Taste and Asymmetry',
        text: 'AI excels at synthesis of past patterns. It cannot invent bold cultural contradictions or original commercial positioning. The future belongs to small, highly leveraged teams with sharp discernment and relentless taste.'
      }
    ],
    contentFa: [
      {
        heading: 'توهم ماشین تولید بی‌نهایت',
        text: 'بسیاری از بازاریابان هیجان‌زده به سمت ایجنت‌های تولید خودکار صدها واریانت تبلیغاتی هجوم برده‌اند. نتیجه، سیلی از محتواهای متوسط و بی‌هویت است که مخاطبان در چند میکروثانیه از روی آن عبور می‌کنند.'
      },
      {
        heading: 'ارزش سلیقه و جسارت استراتژیک',
        text: 'هوش مصنوعی در بازآفرینی الگوهای گذشته استاد است؛ اما قادر به خلق پارادوکس‌های جسورانه فرهنگی یا جایگاه‌های بدیع نیست. آینده متعلق به تیم‌های چابکی است که سلیقه، تشخیص و نگاه انسانی اختصاصی دارند.'
      }
    ],
    keyTakeawaysEn: [
      'Use AI for computational speed and telemetry, not as an excuse to pollute feeds.',
      'Taste, discretion, and strategic restraint are more valuable than infinite volume.'
    ],
    keyTakeawaysFa: [
      'از هوش مصنوعی برای سرعت تحلیل داده و زیرساخت استفاده کنید، نه برای پر کردن اینترنت از مطالب بی‌هویت.',
      'سلیقه متمایز، انضباط و گزینش استراتژیک باارزش‌تر از خروجی‌های نامحدود هستند.'
    ]
  },
  {
    id: 'seo-traffic-vs-commercial-growth',
    slug: 'seo-traffic-vs-commercial-growth',
    featured: false,
    number: '06',
    category: 'growth',
    categoryLabelEn: 'GROWTH',
    categoryLabelFa: 'رشد و جذب',
    format: 'CASE NOTE',
    formatLabelEn: 'CASE NOTE',
    formatLabelFa: 'یادداشت پرونده',
    date: 'APR 2026',
    dateFa: 'فروردین ۱۴۰۵',
    readTime: '6 MIN READ',
    readTimeFa: '۶ دقیقه مطالعه',
    author: 'Magicency Editorial',
    authorEn: 'Magicency Editorial',
    authorFa: 'تحریریه مجیکانسی',
    coverImage: '/project-3.jpg',
    titleEn: 'SEO traffic is not the same thing as commercial growth.',
    titleFa: 'ترافیک سئو با رشد تجاری و درآمد سودآور یکسان نیست.',
    excerptEn: 'Rankings and impressions look great on monthly agency reports. But if organic visitors never convert into high-margin clients, search becomes an expensive vanity project.',
    excerptFa: 'رتبه‌ها و ورودی‌های سئو در گزارش‌های ماهیانه چشم‌نوازند؛ اما اگر بازدیدکنندگان ارگانیک تبدیل به مشتریان سودآور نشوند، سئو صرفاً پروژه‌ای تجملی و پرهزینه است.',
    pullQuoteEn: 'Ranking for keywords is a technical exercise. Converting intent into pipeline is an economic discipline.',
    pullQuoteFa: 'رتبه گرفتن روی کلمات، تمرینی تکنیکال است؛ اما تبدیل تمایل کاربر به فروش واقعی، یک دیسیپلین اقتصادی است.',
    contentEn: [
      {
        heading: 'The Keyword Volume Trap',
        text: 'Traditional SEO agencies celebrate rank-one positions for broad informational queries that have zero commercial intent. Ten thousand monthly visitors reading generic definitions contribute nothing to enterprise EBITDA.'
      },
      {
        heading: 'High-Intent Commercial Moats',
        text: 'Strategic search focuses ruthlessly on high-conviction decision queries, decision frameworks, and category comparison architectures. It prioritizes pipeline velocity over empty session counts.'
      }
    ],
    contentFa: [
      {
        heading: 'تله جستجوهای عمومی و بدون ارزش خرید',
        text: 'آژانس‌های سنتی رتبه یک گرفتن روی کلمات تعریفی و عمومی را جشن می‌گیرند؛ در حالی که ده هزار بازدیدکننده برای خواندن «سئو چیست» ریالی سود برای کسب‌وکار ایجاد نمی‌کنند.'
      },
      {
        heading: 'خندق کلمات کلیدی با تمایل تجاری بالا',
        text: 'سئوی استراتژیک منحصراً بر جستجوهایی تمرکز می‌کند که پشت آن‌ها نیاز واقعی و بودجه آماده خرید وجود دارد. هدف، سرعت‌بخشی به خط لوله فروش است نه جمع‌آوری آمارهای توخالی.'
      }
    ],
    keyTakeawaysEn: [
      'Stop reporting on total impressions; report on inbound pipeline generated from search.',
      'Build search hubs around commercial decisions, not dictionary definitions.'
    ],
    keyTakeawaysFa: [
      'گزارش‌دهی ایمپرشن را متوقف کنید؛ میزان سود و لیدهای ایجادشده از سرچ را بسنجید.',
      'محتواهای ارگانیک را پیرامون تصمیم‌گیری‌های خریدار طراحی کنید نه تعاریف ابتدایی.'
    ]
  }
];
