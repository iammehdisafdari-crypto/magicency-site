import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      brand: 'MAGICENCY',
      brandTag: 'GROWTH ARCHITECTURE',
      work: 'Work',
      capabilities: 'Capabilities',
      approach: 'Approach',
      about: 'About',
      contactUs: 'Let’s Talk',
      startProject: 'Start a Project',
      startConversation: 'Start a Project',
      switchLang: 'فارسی',
      menuToggle: 'Menu'
    },
    hero: {
      category: 'CONNECTED GROWTH ARCHITECTURE',
      badge: '✦ CONNECTED GROWTH ARCHITECTURE',
      titleLine1: "We don't just execute ",
      italicWord1: 'marketing.',
      titleLine2: 'We engineer ',
      italicWord2: 'growth systems.',
      titleLine2Suffix: '',
      headline: "We don't just execute marketing. We engineer growth systems.",
      statement: {
        line1: 'Connected growth systems',
        line2: 'unifying strategy, creative, performance,',
        line3: 'technology, and AI automation.'
      },
      brandStatement: 'We unify strategy, design, technology, and performance to build digital experiences and scalable growth systems that move ambitious brands forward.',
      editorialStatement: 'We unify strategy, design, technology, and performance to build digital experiences and scalable growth systems that move ambitious brands forward.',
      playReel: 'Play reel',
      reelDuration: '01:42 SHOWREEL',
      primaryCta: 'BUILD YOUR GROWTH SYSTEM',
      secondaryCta: 'SEE HOW WE THINK',
      clients: [
        'tamir online',
        'atrash store',
        'classino',
        'respina',
        'Itbfx',
        'Maryam Majidinejad',
        'browja',
        'Elysium Toys',
        'Wine Amphorae',
        'codeyad',
        'silvermotor',
        'ordibeheshbook',
        'photoafshin'
      ],
      telemetry: {
        status: 'GROWTH SYSTEM: ACTIVE',
        ticker: 'STRATEGY • CREATIVE • PERFORMANCE • TECH • AI AUTOMATION',
        focus: 'STRATEGY → ACQUISITION → CONVERSION → RETENTION',
        model: 'DETERMINISTIC PERFORMANCE ENGINE',
        metric: 'CONNECTED GROWTH FLYWHEEL'
      },
      chipLabel: 'GROWTH',
      chipSub: 'CORE SYSTEM',
      nodes: {
        acquisition: { id: 'acquisition', symbol: 'ACQ', label: 'Paid Acquisition', role: 'Algorithmic media buying & multi-channel demand capture' },
        experimentation: { id: 'experimentation', symbol: 'EXP', label: 'Creative Testing', role: 'High-velocity creative & hook experimentation loops' },
        data: { id: 'data', symbol: 'DATA', label: 'Attribution & Intel', role: 'Full-funnel telemetry, tracking & conversion modeling' },
        optimization: { id: 'optimization', symbol: 'OPT', label: 'Conversion Architecture', role: 'CRO, offer engineering & CAC compression' }
      }
    },
    featuredWork: {
      eyebrow: 'Featured work',
      seeAllWork: 'SEE ALL WORK',
      projects: [
        {
          id: 'branding',
          num: '01',
          category: 'Brand',
          categoryItalic: 'ing',
          client: 'atrash store',
          clientTag: 'CLIENT',
          image: '/branding-client.png',
          alt: 'atrash store Branding & Identity Design',
          color: '#DD0060'
        },
        {
          id: 'web',
          num: '02',
          category: 'Web',
          categoryItalic: '',
          client: 'GR8 Real Estate',
          clientTag: 'CLIENT',
          image: '/web-client.png',
          alt: 'GR8 Real Estate Worldwide Web Platform',
          color: '#DD0060'
        },
        {
          id: 'mobile',
          num: '03',
          category: 'Strat',
          categoryItalic: 'egy',
          client: 'Zarin Real Estate',
          clientTag: 'CLIENT',
          image: '/zarin-strategy.png',
          alt: 'Zarin Real Estate Strategy Case Study',
          color: '#DD0060'
        },
        {
          id: 'motion',
          num: '04',
          category: 'Performance',
          categoryItalic: ' Achievements',
          client: 'Klasino',
          clientTag: 'CLIENT',
          image: '/performance-achievements.png',
          alt: 'Klasino Performance Achievements Case Study',
          color: '#DD0060'
        }
      ]
    },
    whatWeDo: {
      badge: 'WHAT WE DO',
      eyebrow: 'WHAT WE DO',
      heading: 'We turn marketing into a growth system.',
      headline: 'We turn marketing into a growth system.',
      supportingLine: 'Strategy, performance, creativity, and technology — connected to move the business forward.',
      introStatement: 'Strategy, performance, creativity, and technology — connected to move the business forward.',
      pillars: [
        {
          number: '01',
          title: 'Strategy & Growth',
          tag: 'DIRECTION // DIAGNOSIS',
          description: 'The thinking, diagnosis and strategic direction behind compounding growth.',
          image: '/whatwedo-1.jpg',
          alt: 'Strategy and Growth Architecture',
          services: [
            'Growth Strategy',
            'Marketing Strategy',
            'Brand Strategy',
            'Customer & Market Research',
            'Funnel & Conversion Strategy',
            'Go-to-Market Strategy',
            'Growth Analytics'
          ]
        },
        {
          number: '02',
          title: 'Performance & Creative',
          tag: 'EXECUTION // CONVERSION',
          description: 'Turning strategy into campaigns, communication and high-performing digital experiences.',
          image: '/whatwedo-2.jpg',
          alt: 'Performance and Creative Execution',
          services: [
            'Performance Marketing',
            'Paid Media',
            'Conversion Rate Optimization',
            'Creative Strategy',
            'Campaign Creative',
            'Content Strategy',
            'Social Media',
            'Landing Pages',
            'Web Design',
            'UI/UX Design',
            'Motion & Interactive Design'
          ]
        },
        {
          number: '03',
          title: 'Technology, AI & Automation',
          tag: 'SYSTEM // INTELLIGENCE',
          description: 'The technology layer that makes the growth system scalable and intelligent.',
          image: '/whatwedo-3.jpg',
          alt: 'Technology, AI and Automation Systems',
          services: [
            'Web Development',
            'Digital Product Development',
            'Marketing Technology',
            'Analytics & Tracking',
            'CRM & Marketing Automation',
            'AI Integration',
            'AI Automation',
            'Custom Business Automation',
            'Data & Reporting Systems'
          ]
        }
      ]
    },
    compoundingGrowth: {
      eyebrow: 'BUILT FOR',
      headline: 'COMPOUNDING\nGROWTH',
      headlinePart1: 'COMPOUNDING',
      headlinePart2: 'GROWTH',
      supportingStatement: 'Growth gets stronger when everything works together.',
      disciplines: [
        { id: '01', number: '01', title: 'STRATEGY', desc: 'The diagnostic foundation and architecture directing every commercial move.' },
        { id: '02', number: '02', title: 'EXPERIENCE', desc: 'Frictionless digital touchpoints engineered for immediate clarity and trust.' },
        { id: '03', number: '03', title: 'ACQUISITION', desc: 'Precision performance channels capturing high-intent commercial demand.' },
        { id: '04', number: '04', title: 'MEASUREMENT', desc: 'Full-funnel telemetry eliminating attribution bias and blind spots.' },
        { id: '05', number: '05', title: 'OPTIMIZATION', desc: 'Continuous feedback loops converting live signals into improved yield.' },
        { id: '06', number: '06', title: 'COMPOUNDING', desc: 'All disciplines connected into an autonomous, self-reinforcing growth system.' }
      ]
    },
    journal: {
      badge: 'Blog',
      headline: 'Ideas between growth and technology.',
      inFocusLabel: 'In focus',
      allArticlesLabel: 'All Articles',
      filters: ['ALL', 'STRATEGY', 'PERFORMANCE', 'CREATIVE', 'TECHNOLOGY', 'AI'],
      featuredArticles: [
        {
          id: 'article-1',
          slug: 'more-marketing-not-more-growth',
          number: '01',
          title: 'Why Growth Problems Are Rarely Marketing Problems',
          category: 'STRATEGY',
          date: 'SEP 2026',
          readTime: '06 MIN',
          image: '/journal-1.jpg',
          alt: 'Why Growth Problems Are Rarely Marketing Problems'
        },
        {
          id: 'article-2',
          slug: 'more-content-is-not-fixing-problem',
          number: '02',
          title: 'From Traffic to Systems: Designing a Better Conversion Engine',
          category: 'PERFORMANCE',
          date: 'SEP 2026',
          readTime: '08 MIN',
          image: '/journal-2.jpg',
          alt: 'From Traffic to Systems: Designing a Better Conversion Engine'
        },
        {
          id: 'article-3',
          slug: 'ai-creative-volume-fallacy',
          number: '03',
          title: 'Where AI Actually Creates Leverage in Modern Marketing',
          category: 'AI & TECHNOLOGY',
          date: 'SEP 2026',
          readTime: '05 MIN',
          image: '/journal-3.jpg',
          alt: 'Where AI Actually Creates Leverage in Modern Marketing'
        }
      ]
    },
    footer: {
      ctaLine1: 'Have a growth problem worth solving?',
      ctaLine2: "Let's build what moves it forward.",
      startProject: 'Start a Project',
      locations: [
        { city: 'Manager', email: 'itsmehdisafdari@gmail.com' }
      ],
      socials: [
        { name: 'X', url: 'https://x.com' },
        { name: 'Instagram', url: 'https://instagram.com' },
        { name: 'LinkedIn', url: 'https://linkedin.com' },
        { name: 'Dribbble', url: 'https://dribbble.com' },
        { name: 'Behance', url: 'https://behance.net' }
      ],
      nav: [
        { label: 'WORK', href: '/work' },
        { label: 'CAPABILITIES', href: '/capabilities' },
        { label: 'APPROACH', href: '/approach' },
        { label: 'ABOUT', href: '/about' },
        { label: 'BLOG', href: '/blog' }
      ],
      legal: [
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Terms of Use', href: '#terms' }
      ],
      copyright: '© 2026 MAGICENCY®'
    },
    proof: {
      eyebrow: '07 / PROOF',
      headline: 'The system leaves evidence.',
      subheadline: 'Strategy means little without measurable change. You don’t have to take our word for it. Look at what changed.',
      states: [
        {
          num: '01',
          code: 'REAL WORK',
          badge: '01 / REAL WORK // DELIVERABLE',
          client: 'VELOX FINANCIAL',
          industry: 'FINTECH & WEALTH INFRASTRUCTURE',
          scope: 'FULL-FUNNEL PLATFORM ARCHITECTURE & 1-TAP ONBOARDING',
          desc: 'Institutional-grade wealth web platform and iOS execution interface engineered for zero-friction conversion.'
        },
        {
          num: '02',
          code: 'REAL SIGNALS',
          badge: '02 / REAL SIGNALS // TELEMETRY',
          title: 'Deterministic Telemetry & CAC Compression',
          desc: 'Live telemetry reveals measurable conversion signals across every touchpoint.',
          metrics: [
            { label: 'CONVERSION VELOCITY', val: '+84.2%', sub: 'INSTANT ONBOARDING' },
            { label: 'CAC COMPRESSION', val: '-34.8%', sub: 'AVERAGE REDUCTION' },
            { label: 'PIPELINE CAPACITY', val: '3.2X', sub: 'QUALIFIED CAPITAL FLOW' }
          ]
        },
        {
          num: '03',
          code: 'REAL TRANSFORMATION',
          badge: '03 / REAL TRANSFORMATION // BEFORE → AFTER',
          title: 'Stalled Funnel ➔ Compounding Conversion Machine',
          desc: 'Drag or scroll to inspect the operational transformation between baseline fragmentation and synchronized architecture.',
          beforeLabel: 'BEFORE // STALLED 4.2% CVR',
          afterLabel: 'AFTER // SYNCHRONIZED 12.8% CVR'
        },
        {
          num: '04',
          code: 'REAL IMPACT',
          badge: '04 / REAL IMPACT // OUTCOMES',
          title: 'Action → Signal → Business Impact',
          steps: [
            { label: 'ACTION', val: 'Frictionless 1-Tap Onboarding & Positioning Re-Architecture' },
            { label: 'SIGNAL', val: '+148% LTV Expansion & -34% Blended CAC' },
            { label: 'OUTCOME', val: '+$18.4M Compounding Capital Momentum' }
          ]
        },
        {
          num: '05',
          code: 'REAL TRUST',
          badge: '05 / REAL TRUST // EVIDENCE',
          quote: '“Magicency didn’t give us marketing slides. They built an operating machine that doubled our customer lifetime value while compressing acquisition costs across every channel.”',
          author: 'MANAGING PARTNER',
          company: 'VELOX CAPITAL GROUP'
        }
      ]
    },
    about: {},
    capabilities: {
      pageMeta: {
        title: 'Integrated Marketing Capabilities // What We Build // MAGICENCY®',
        description: 'Explore our integrated marketing capabilities: commercial strategy, high-conviction creative, full-stack digital platforms, and conversion architecture.'
      },
      hero: {
        eyebrow: 'INTEGRATED MARKETING CAPABILITIES',
        headlineLine1: 'What we can build',
        headlineLine2: 'when the pieces connect.',
        subline: 'Strategy, high-conviction creative, digital platforms, and conversion architecture — integrated capabilities engineered as one system.',
        metaphor: 'COMPONENTS ≠ SERVICES // CAPABILITIES = SYSTEM'
      },
      system: {
        badge: '01 / ARCHITECTURE',
        title: 'The Capability System',
        subtext: 'Every capability becomes significantly more powerful when connected.',
        instruction: 'SELECT A DOMAIN TO REVEAL ITS INTERNAL COMPONENTS',
        connectedTo: 'CONNECTS TO'
      },
      builder: {
        badge: '02 / ASSEMBLY',
        title: 'Build the System',
        subtext: 'We do not sell packages. We snap capabilities together to solve concrete commercial challenges.',
        challengeLabel: 'SELECT COMMERCIAL CHALLENGE',
        builtLabel: 'SYSTEM ASSEMBLED'
      },
      depth: {
        badge: '03 / DEPTH',
        title: 'Capability Depth',
        subtext: 'High-conviction components engineered for commercial velocity.'
      },
      outcome: {
        badge: '04 / TRANSFORMATION',
        title: 'From Capability to Outcome',
        subtext: 'Our value is not the isolated service — it is the permanent compounding system created by combining them.'
      },
      closing: {
        eyebrow: 'GET STARTED',
        statementLine1: "Don't know which capability you need?",
        statementLine2: "That's exactly where we start.",
        ctaButton: 'START A PROJECT'
      }
    },
    blog: {
      pageMeta: {
        title: 'Growth Marketing Insights // Editorial Publication // MAGICENCY®',
        description: 'Field notes, empirical frameworks, and growth marketing insights on brand conviction, retention flywheels, and conversion architecture.'
      },
      hero: {
        eyebrow: 'GROWTH MARKETING INSIGHTS // VOL. 04',
        headlineLine1: 'Ideas worth',
        headlineLine2: 'thinking about.',
        subline: 'Strategy, creativity, digital and growth — from the perspective of people building them.',
        searchPlaceholder: 'Search insights, essays, or field notes...'
      },
      featured: {
        badge: 'FEATURED STORY',
        readArticle: 'READ ARTICLE'
      },
      stream: {
        badge: 'EDITORIAL ARCHIVE',
        title: 'All Publications',
        readArticle: 'READ ARTICLE',
        noResults: 'No insights found matching your query.'
      },
      pov: {
        badge: 'EDITORIAL CREED',
        headline: "We don't publish to fill a calendar.",
        subline: 'We publish what we are learning, questioning and seeing in the real commercial world.'
      },
      newsletter: {
        badge: 'DISPATCH',
        headline: 'Stay curious.',
        subline: 'New thinking on strategy, digital, creativity and growth.',
        placeholder: 'ENTER YOUR EMAIL',
        button: 'SUBSCRIBE',
        successMsg: 'Thank you for subscribing to Magicency Dispatches.'
      },
      reader: {
        close: 'CLOSE',
        backToBlog: '← BACK TO ALL INSIGHTS',
        keyTakeaways: 'KEY TAKEAWAYS',
        relatedArticles: 'RELATED INSIGHTS'
      }
    },
    approach: {
      pageMeta: {
        title: 'Approach // Growth Architecture // MAGICENCY®',
        description: 'Growth is not a channel. It is an operating system. How Magicency approaches performance marketing and digital growth architecture.'
      },
      hero: {
        eyebrow: 'PERFORMANCE MARKETING & DIGITAL GROWTH AGENCY',
        headlineLine1: "Growth isn't a channel.",
        headlineLine2: "It's an operating system.",
        supporting: "We don't just execute marketing. We engineer growth systems.",
        boardBadge: 'SYSTEM ARCHITECTURE',
        boardFlow: '01 INPUT → 06 COMPOUNDING',
        cta: 'EXPLORE THE ARCHITECTURE',
        scrollNote: 'SCROLL TO EXPLORE ARCHITECTURE'
      },
      statement: {
        eyebrow: '01 / THE DEFINITION',
        headline: 'Growth is not a campaign. It is a system of connected decisions.',
        p1: 'Most businesses do not suffer from a lack of marketing activity. They suffer from disconnected decisions.',
        p2: 'Ad spend is pushed without understanding unit economics. Landing pages are built without buying psychology. Conversion tracking reports what happened in the past rather than directing where capital should move next.',
        p3: 'Growth is not about doing more marketing. It is about understanding the business, making better decisions, executing those decisions, reading the signals, optimizing based on evidence, and allowing what is learned to compound.'
      },
      pillars: {
        eyebrow: '02 / THE ARCHITECTURE',
        headline: 'Every growth problem has an architecture behind it.',
        lead: 'When growth stalls, the issue is rarely ad spend. It is a misalignment across the three foundational pillars of the commercial engine.'
      },
      operatingModel: {
        eyebrow: '03 / METHODOLOGY',
        headline: 'How the system operates.',
        desc: 'Growth is not a series of disconnected campaigns. It is a continuous decision loop where each layer feeds directly into the next.',
        sub: 'Six continuous layers. One unified engine.'
      },
      comparison: {
        eyebrow: '04 / THE SHIFT',
        headline: 'A different way of working.',
        lead: 'Traditional agencies manage channel tactics. We build and calibrate growth architecture.',
        colArea: 'Decision Area',
        colTraditional: 'Traditional Agency',
        colGrowth: 'Magicency Growth Architecture'
      },
      principle: {
        eyebrow: '05 / CORE PRINCIPLE',
        quote: '“Marketing is the execution layer. Growth architecture is the decision system.”',
        subtext: 'When the architecture is sound, marketing scales with compounding conviction.'
      },
      faq: {
        eyebrow: '06 / FREQUENT QUESTIONS',
        headline: 'Understanding the approach.'
      },
      closingCta: {
        eyebrow: 'NEXT STEP',
        headline: 'Your business may not need more marketing. It may need a better architecture.',
        subhead: 'Let’s diagnose your commercial constraints and build a system that scales.',
        button: 'Start Growth Diagnosis'
      }
    }
  },
  fa: {
    nav: {
      brand: 'مجیکنسـی',
      brandTag: 'معماری یکپارچه رشد',
      work: 'نمونه‌کارها',
      capabilities: 'توانمندی‌ها',
      approach: 'متدولوژی ما',
      about: 'درباره مجیکنسـی',
      contactUs: 'ارتباط مستقیم',
      startProject: 'شروع پروژه',
      startConversation: 'شروع پروژه',
      switchLang: 'English',
      menuToggle: 'منو'
    },
    hero: {
      category: 'معماری یکپارچه رشد و تحول دیجیتال',
      badge: '✦ معماری یکپارچه سیستم‌های رشد',
      titleLine1: 'ما فقط بازاریابی را\u00A0',
      italicWord1: 'اجرا نمیکنیم.',
      titleLine2: 'ما سیستمهای رشد را\u00A0',
      italicWord2: 'مهندسی میکنیم.',
      titleLine2Suffix: '',
      headline: 'ما فقط بازاریابی را اجرا نمیکنیم. ما سیستمهای رشد را مهندسی میکنیم.',
      statement: {
        line1: 'ما سیستم‌های یکپارچه رشد خلق می‌کنیم؛',
        line2: 'همگام‌سازی استراتژی، خلاقیت، پرفورمنس،',
        line3: 'فناوری و اتوماسیون هوشمند.'
      },
      subheadline: 'مجیکنسـی سیستم‌های متصل رشد را طراحی می‌کند — همگام‌سازی استراتژی جذب، آزمایش‌های پرسرعت خلاقانه، پرفورمنس مارکتینگ و اتوماسیون هوشمند برای رشد تصاعدی کسب‌وکارها.',
      brandStatement: 'ما با همگام‌سازی استراتژی، طراحی، فناوری و پرفورمنس، تجربیات دیجیتال و سیستم‌های مقیاس‌پذیر رشد را برای برندهای پیشرو مهندسی می‌کنیم.',
      editorialStatement: 'ما با همگام‌سازی استراتژی، طراحی، فناوری و پرفورمنس، تجربیات دیجیتال و سیستم‌های مقیاس‌پذیر رشد را برای برندهای پیشرو مهندسی می‌کنیم.',
      playReel: 'مشاهده شو‌ریل',
      reelDuration: '۰۱:۴۲ شو‌ریل',
      primaryCta: 'سیستم رشد خود را بسازید',
      secondaryCta: 'دیدگاه و رویکرد ما',
      clients: [
        'tamir online',
        'atrash store',
        'classino',
        'respina',
        'Itbfx',
        'Maryam Majidinejad',
        'browja',
        'Elysium Toys',
        'Wine Amphorae',
        'codeyad',
        'silvermotor',
        'ordibeheshbook',
        'photoafshin'
      ],
      telemetry: {
        status: 'سیستم رشد: فعال و یکپارچه',
        ticker: 'استراتژی • خلاقیت • پرفورمنس • فناوری • اتوماسیون هوشمند',
        focus: 'استراتژی ← جذب مخاطب ← تبدیل ← حفظ و وفادارسازی',
        model: 'موتور محاسباتی عملکرد بازاریابی',
        metric: 'چرخه هم‌افزای رشد تصاعدی'
      },
      chipLabel: 'رشد',
      chipSub: 'هسته سیستم',
      nodes: {
        acquisition: {
          id: 'acquisition',
          symbol: 'جذب',
          label: 'جذب هدفمند مخاطب',
          role: 'مدیریت و بهینه‌سازی الگوریتمی کانال‌های تبلیغاتی'
        },
        experimentation: {
          id: 'experimentation',
          symbol: 'تست',
          label: 'آزمایش‌های خلاقیت',
          role: 'اعتبارسنجی پرسرعت پیام‌ها، محتوا و سناریوهای تبلیغاتی'
        },
        data: {
          id: 'data',
          symbol: 'داده',
          label: 'اتریبیوشن و سنجش',
          role: 'ردیابی دقیق سفر مشتری و مدل‌سازی نرخ تبدیل'
        },
        optimization: {
          id: 'optimization',
          symbol: 'تبدیل',
          label: 'بهینه‌سازی نرخ تبدیل (CRO)',
          role: 'طراحی مسیر تبدیل، بهبود پیشنهادها و کاهش CAC'
        },
        retention: {
          id: 'retention',
          symbol: 'LTV',
          label: 'بازگشت و چرخه‌های ارزش',
          role: 'حفظ مشتری، بازاریابی مجدد و افزایش ارزش طول عمر'
        },
        scale: {
          id: 'scale',
          symbol: 'مقیاس',
          label: 'مقیاس‌پذیری تصاعدی',
          role: 'تخصیص موثر سرمایه و توسعه پایدار سهم بازار'
        }
      }
    },
    featuredWork: {
      eyebrow: 'پروژه‌های برگزیده',
      seeAllWork: 'مشاهده همه پروژه‌ها',
      projects: [
        {
          id: 'branding',
          num: '۰۱',
          category: 'برند',
          categoryItalic: 'ینگ',
          client: 'atrash store',
          clientTag: 'کارفرما',
          image: '/branding-client.png',
          alt: 'هویت بصری و برندینگ atrash store',
          color: '#DD0060'
        },
        {
          id: 'web',
          num: '۰۲',
          category: 'وب و پلتفرم',
          categoryItalic: '',
          client: 'GR8 Real Estate',
          clientTag: 'کارفرما',
          image: '/web-client.png',
          alt: 'پلتفرم جهانی وب GR8 Real Estate',
          color: '#DD0060'
        },
        {
          id: 'mobile',
          num: '۰۳',
          category: 'استراتژی',
          categoryItalic: '',
          client: 'Zarin Real Estate',
          clientTag: 'کارفرما',
          image: '/zarin-strategy.png',
          alt: 'کیس استادی استراتژی املاک زرین دبی',
          color: '#DD0060'
        },
        {
          id: 'motion',
          num: '۰۴',
          category: 'دستاوردهای',
          categoryItalic: ' عملکرد',
          client: 'کلاسینو',
          clientTag: 'کارفرما',
          image: '/performance-achievements.png',
          alt: 'کیس استادی دستاوردهای عملکرد کلاسینو',
          color: '#DD0060'
        }
      ]
    },
    whatWeDo: {
      badge: 'چه کاری انجام میدهیم',
      eyebrow: 'چه کاری انجام میدهیم',
      heading: 'بازاریابی را به یک سیستم رشد تبدیل میکنیم.',
      headline: 'بازاریابی را به یک سیستم رشد تبدیل میکنیم.',
      supportingLine: 'استراتژی، پرفورمنس، خلاقیت و فناوری را به هم متصل میکنیم تا رشد قابل اندازهگیری ایجاد شود.',
      introStatement: 'استراتژی، پرفورمنس، خلاقیت و فناوری را به هم متصل میکنیم تا رشد قابل اندازهگیری ایجاد شود.',
      pillars: [
        {
          number: '۰۱',
          title: 'استراتژی و رشد',
          tag: 'جهت‌گیری // عارضه‌یابی',
          description: 'تفکر، عارضه‌یابی و جهت‌گیری استراتژیک زیربنای رشد تصاعدی کسب‌وکارها.',
          image: '/whatwedo-1.jpg',
          alt: 'معماری استراتژی و رشد',
          services: [
            'استراتژی رشد',
            'استراتژی بازاریابی',
            'استراتژی برند',
            'تحقیقات بازار و مشتری',
            'استراتژی قیف و تبدیل',
            'استراتژی ورود به بازار (GTM)',
            'آنالیتیکس رشد'
          ]
        },
        {
          number: '۰۲',
          title: 'پرفورمنس و خلاقیت',
          tag: 'اقدام // خلق تجربه',
          description: 'تبدیل استراتژی به کمپین‌های بازاریابی، ارتباط موثر و تجربه‌های دیجیتال با عملکرد بالا.',
          image: '/whatwedo-2.jpg',
          alt: 'پرفورمنس و خلق تجربه دیجیتال',
          services: [
            'پرفورمنس مارکتینگ',
            'مدیریت رسانه‌های پولی',
            'بهینه‌سازی نرخ تبدیل (CRO)',
            'استراتژی خلاقیت',
            'خلق کمپین‌های تبلیغاتی',
            'استراتژی محتوا',
            'رسانه‌های اجتماعی',
            'لندینگ پیج‌های تخصصی',
            'طراحی وب',
            'طراحی رابط و تجربه کاربری (UI/UX)',
            'موشن گرافیک و طراحی تعاملی'
          ]
        },
        {
          number: '۰۳',
          title: 'فناوری، هوش مصنوعی و اتوماسیون',
          tag: 'سیستم // هوشمندی',
          description: 'لایه فنی و زیرساختی که سیستم رشد را مقیاس‌پذیر، هوشمند و خودکار می‌سازد.',
          image: '/whatwedo-3.jpg',
          alt: 'زیرساخت فناوری، هوش مصنوعی و اتوماسیون',
          services: [
            'توسعه و برنامه‌نویسی وب',
            'توسعه محصولات دیجیتال',
            'فناوری‌های بازاریابی (MarTech)',
            'آنالیتیکس و ردیابی داده',
            'اتوماسیون CRM و بازاریابی',
            'یکپارچه‌سازی هوش مصنوعی',
            'اتوماسیون فرآیندها با AI',
            'اتوماسیون اختصاصی کسب‌وکار',
            'سیستم‌های گزارش‌دهی و داده'
          ]
        }
      ]
    },
    compoundingGrowth: {
      eyebrow: 'طراحی شده برای',
      headline: 'رشد تصاعدی',
      headlinePart1: 'رشد',
      headlinePart2: 'تصاعدی',
      supportingStatement: 'رشد زمانی قدرتمندتر می‌شود که تمام بخش‌ها هماهنگ کار کنند.',
      disciplines: [
        { id: '01', number: '۰۱', title: 'استراتژی', desc: 'زیربنای عارضه‌یابی و معماری هدایت‌کننده هر اقدام تجاری.' },
        { id: '02', number: '۰۲', title: 'تجربه دیجیتال', desc: 'نقاط تماس دیجیتال بدون اصطکاک مهندسی‌شده برای وضوح و اعتماد آنی.' },
        { id: '03', number: '۰۳', title: 'جذب مخاطب', desc: 'کانال‌های پرفورمنس دقیق برای جذب تقاضای تجاری با قصد بالا.' },
        { id: '04', number: '۰۴', title: 'سنجش و اندازه‌گیری', desc: 'ردیابی داده در تمام مسیر قیف جهت حذف خطاهای نسبت‌دهی.' },
        { id: '05', number: '۰۵', title: 'بهینه‌سازی', desc: 'حلقه‌های بازخورد مداوم برای تبدیل سیگنال‌های زنده به بازدهی بالاتر.' },
        { id: '06', number: '۰۶', title: 'رشد تصاعدی', desc: 'اتصال تمام بخش‌ها در قالب یک سیستم رشد خودکار و هم‌افزا.' }
      ]
    },
    journal: {
      badge: 'Blog',
      headline: 'ایده‌ها و بینش‌های میان رشد، خلق ارزش و فناوری.',
      inFocusLabel: 'مقالات برگزیده',
      allArticlesLabel: 'همه مقالات',
      filters: ['همه', 'استراتژی', 'پرفورمنس', 'خلاقیت', 'فناوری', 'هوش مصنوعی'],
      featuredArticles: [
        {
          id: 'article-1',
          slug: 'more-marketing-not-more-growth',
          number: '۰۱',
          title: 'چرا مسائل رشد به ندرت صرفاً مسائل بازاریابی هستند',
          category: 'استراتژی',
          date: 'شهریور ۱۴۰۵',
          readTime: '۶ دقیقه',
          image: '/journal-1.jpg',
          alt: 'چرا مسائل رشد به ندرت صرفاً مسائل بازاریابی هستند'
        },
        {
          id: 'article-2',
          slug: 'more-content-is-not-fixing-problem',
          number: '۰۲',
          title: 'از ترافیک خام تا سیستم متصل: مهندسی موتور تبدیل پایدار',
          category: 'پرفورمنس',
          date: 'شهریور ۱۴۰۵',
          readTime: '۸ دقیقه',
          image: '/journal-2.jpg',
          alt: 'از ترافیک خام تا سیستم متصل: مهندسی موتور تبدیل پایدار'
        },
        {
          id: 'article-3',
          slug: 'ai-creative-volume-fallacy',
          number: '۰۳',
          title: 'هوش مصنوعی در کجای مارکتینگ مدرن اهرم واقعی خلق می‌کند',
          category: 'فناوری و هوش مصنوعی',
          date: 'شهریور ۱۴۰۵',
          readTime: '۵ دقیقه',
          image: '/journal-3.jpg',
          alt: 'هوش مصنوعی در کجای مارکتینگ مدرن اهرم واقعی خلق می‌کند'
        }
      ]
    },
    footer: {
      ctaLine1: 'مسئله رشدی دارید که ارزش حل کردن دارد؟',
      ctaLine2: 'بیایید آنچه را که کسب‌وکارتان را به جلو می‌برد بسازیم.',
      startProject: 'شروع پروژه',
      locations: [
        { city: 'واحد مدیریت', email: 'itsmehdisafdari@gmail.com' }
      ],
      socials: [
        { name: 'X', url: 'https://x.com' },
        { name: 'Instagram', url: 'https://instagram.com' },
        { name: 'LinkedIn', url: 'https://linkedin.com' },
        { name: 'Dribbble', url: 'https://dribbble.com' },
        { name: 'Behance', url: 'https://behance.net' }
      ],
      nav: [
        { label: 'پروژه‌ها', href: '/work' },
        { label: 'قابلیت‌ها', href: '/capabilities' },
        { label: 'متدولوژی ما', href: '/approach' },
        { label: 'درباره ما', href: '/about' },
        { label: 'بلاگ', href: '/blog' }
      ],
      legal: [
        { label: 'حریم خصوصی', href: '#privacy' },
        { label: 'شرایط استفاده', href: '#terms' }
      ],
      copyright: '© ۲۰۲۶ MAGICENCY®'
    },
    proof: {
      eyebrow: '۰۷ / شواهد و نتایج سیستم',
      headline: 'سیستم رشد از خود شواهد ملموس به‌جا می‌گذارد.',
      subheadline: 'استراتژی بدون تغییرات قابل اندازه‌گیری معنایی ندارد. نیازی نیست حرف ما را قبول کنید؛ نتایج و تغییرات واقعی را ببینید.',
      states: [
        {
          num: '۰۱',
          code: 'خروجی‌های واقعی',
          badge: '۰۱ / خروجی واقعی // دارایی محصول',
          client: 'فین‌تک ولوکس (VELOX)',
          industry: 'زیرساخت فین‌تک و مدیریت ثروت',
          scope: 'معماری جامع پلتفرم و ثبت‌نام با ۱ لمس',
          desc: 'پلتفرم تحت وب معاملات سازمانی و رابط کاربری موبایل iOS مهندسی‌شده برای تبدیل بدون‌اصطکاک.'
        },
        {
          num: '۰۲',
          code: 'سیگنال‌های زنده',
          badge: '۰۲ / سیگنال‌های واقعی // تله‌متری زنده',
          title: 'تله‌متری قطعی و کاهش مستمر هزینه جذب',
          desc: 'ردیابی زنده سیگنال‌های تبدیل در تمام نقاط سفر مخاطب.',
          metrics: [
            { label: 'شتاب نرخ تبدیل', val: '+۸۴.۲٪', sub: 'ثبت‌نام آنی' },
            { label: 'کاهش هزینه جذب (CAC)', val: '-۳۴.۸٪', sub: 'کاهش میانگین' },
            { label: 'ظرفیت خط لوله فروش', val: '۳.۲X', sub: 'جریان سرمایه هدفمند' }
          ]
        },
        {
          num: '۰۳',
          code: 'دگرگونی سیستم',
          badge: '۰۳ / دگرگونی واقعی // قبل ➔ بعد',
          title: 'قیف متوقف ➔ ماشین تبدیل تصاعدی',
          desc: 'اسکرول کنید تا تحول میان قیف پراکنده اولیه و معماری یکپارچه جدید را مقایسه کنید.',
          beforeLabel: 'قبل // قیف متوقف ۴.۲٪ CVR',
          afterLabel: 'بعد // سیستم یکپارچه ۱۲.۸٪ CVR'
        },
        {
          num: '۰۴',
          code: 'اثرگذاری تجاری',
          badge: '۰۴ / اثرگذاری ملموس // چرخه ارزش',
          title: 'اقدام ➔ سیگنال ➔ اثر مالی بر بیزنس',
          steps: [
            { label: 'اقدام استراتژیک', val: 'آنبوردینگ بدون‌اصطکاک و مهندسی مجدد جایگاه‌یابی' },
            { label: 'سیگنال اولیه', val: '+۱۴۸٪ افزایش ارزش طول عمر و ۳۴٪ کاهش CAC' },
            { label: 'اثر نهایی', val: '+$۱۸.۴M جریان سرمایه پایدار و تصاعدی' }
          ]
        },
        {
          num: '۰۵',
          code: 'اعتماد اثبات‌شده',
          badge: '۰۵ / اعتماد واقعی // شواهد اثر',
          quote: '«مجیکنسـی به ما اسلایدهای بازاریابی تحویل نداد؛ آنها یک ماشین عملیاتی ساختند که ارزش طول عمر مشتریان ما را دوبرابر کرد و هزینه‌های جذب را در تمام کانال‌ها شکست.»',
          author: 'مدیر ارشد سرمایه‌گذاری',
          company: 'گروه مالی ولوکس کپیتال'
        }
      ]
    },
    about: {},
    capabilities: {
      pageMeta: {
        title: 'توانمندی‌های یکپارچه بازاریابی // آنچه می‌سازیم // مجیکنسـی (MAGICENCY®)',
        description: 'کالبدشکافی توانمندی‌های یکپارچه بازاریابی: استراتژی تجاری، خلاقیت متقاعدکننده، پلتفرم‌های دیجیتال و معماری تبدیل.'
      },
      hero: {
        eyebrow: 'توانمندی‌های یکپارچه بازاریابی',
        headlineLine1: 'آنچه می‌سازیم',
        headlineLine2: 'وقتی اجزا به هم متصل می‌شوند.',
        subline: 'استراتژی تجاری، خلاقیت برند، مهندسی پلتفرم‌های دیجیتال و نرخ تبدیل — در قالب یک معماری یکپارچه.',
        metaphor: 'توانمندی ≠ خدمات جزیره‌ای // توانمندی = اجزای یک سیستم'
      },
      system: {
        badge: '۰۱ / معماری سیستم',
        title: 'سیستم جامع توانمندی‌ها',
        subtext: 'هر توانمندی زمانی که در یک مدار متصل قرار می‌گیرد، قدرتی چندبرابر پیدا می‌کند.',
        instruction: 'یک حوزه را انتخاب کنید تا اجزای درونی و اتصالات آن آشکار شوند',
        connectedTo: 'اتصال به حوزه‌های'
      },
      builder: {
        badge: '۰۲ / اتصال اجزا',
        title: 'مهندسی ترکیب سیستم',
        subtext: 'ما پکیج‌های کلیشه‌ای نمی‌فروشیم. توانمندی‌ها را برای حل چالش‌های واقعی کسب‌وکار به هم متصل می‌کنیم.',
        challengeLabel: 'انتخاب چالش تجاری',
        builtLabel: 'سیستم یکپارچه‌شده'
      },
      depth: {
        badge: '۰۳ / عمق توانمندی‌ها',
        title: 'کالبدشکافی توانمندی‌ها',
        subtext: 'اجزای با پرفورمنس بالا که برای سرعت‌بخشی به رشد تجاری مهندسی شده‌اند.'
      },
      outcome: {
        badge: '۰۴ / تحول ساختاری',
        title: 'از توانمندی تا دستاورد تجاری',
        subtext: 'ارزش مجیکنسـی در خدمات تکه‌تکه نیست؛ در سیستم پایداری است که از هم‌افزایی آن‌ها ساخته می‌شود.'
      },
      closing: {
        eyebrow: 'شروع همکاری',
        statementLine1: 'نمی‌دانید به کدام توانمندی نیاز دارید؟',
        statementLine2: 'ما دقیقاً از همین نقطه شروع می‌کنیم.',
        ctaButton: 'شروع پروژه'
      }
    },
    blog: {
      pageMeta: {
        title: 'بینش‌های بازاریابی رشد // نشریه تحلیلی // مجیکنسـی (MAGICENCY®)',
        description: 'جستارهای تحلیلی، بینش‌های بازاریابی رشد، معماری تبدیل، فلای‌ویل‌های حفظ مشتری و بازاریابی عصر هوش مصنوعی.'
      },
      hero: {
        eyebrow: 'بینش‌های بازاریابی رشد // دوره چهارم',
        headlineLine1: 'ایده‌هایی که ارزش',
        headlineLine2: 'اندیشیدن دارند.',
        subline: 'استراتژی، خلاقیت، دیجیتال و رشد — از زاویه دید مهندسانی که آن‌ها را می‌سازند.',
        searchPlaceholder: 'جستجو در دیدگاه‌ها، جستارها و یادداشت‌ها...'
      },
      featured: {
        badge: 'مقاله برگزیده سردبیر',
        readArticle: 'مطالعه مقاله'
      },
      stream: {
        badge: 'آرشیو نشریه',
        title: 'تمام مقالات و بینش‌ها',
        readArticle: 'مطالعه مقاله',
        noResults: 'مقاله‌ای مطابق با عبارت جستجوی شما یافت نشد.'
      },
      pov: {
        badge: 'مانیفست انتشار',
        headline: 'ما برای پر کردن تقویم محتوایی منتشر نمی‌کنیم.',
        subline: 'ما آموخته‌ها، پرسش‌ها و مشاهدات تجربی در دنیای واقعی کسب‌وکار را به اشتراک می‌گذاریم.'
      },
      newsletter: {
        badge: 'خبرنامه سردبیری',
        headline: 'کنجکاو بمانید.',
        subline: 'دیدگاه‌های تازه پیرامون استراتژی، دیجیتال، خلاقیت و مدل‌های رشد.',
        placeholder: 'ایمیل خود را وارد کنید',
        button: 'عضویت در خبرنامه',
        successMsg: 'با تشکر! عضویت شما در خبرنامه تحلیلی مجیکنسـی با موفقیت ثبت شد.'
      },
      reader: {
        close: 'بستن',
        backToBlog: '← بازگشت به تمام مقالات',
        keyTakeaways: 'نکات کلیدی و راهبردی',
        relatedArticles: 'دیدگاه‌های مرتبط'
      }
    },
    approach: {
      pageMeta: {
        title: 'معماری رشد و سیستم‌عامل کسب‌وکار // رویکرد ما // مجیکنسـی (MAGICENCY®)',
        description: 'رشد یک کانال تبلیغاتی نیست؛ یک سیستم‌عامل است. نحوه نگرش و عملکرد آژانس پرفورمنس مارکتینگ و معماری رشد مجیکنسـی.'
      },
      hero: {
        eyebrow: 'آژانس پرفورمنس مارکتینگ و معماری رشد دیجیتال',
        headlineLine1: 'رشد یک کانال بازاریابی نیست.',
        headlineLine2: 'رشد یک سیستم‌عامل است.',
        supporting: 'ما فقط بازاریابی را اجرا نمی‌کنیم؛ ما سیستم‌های رشد را مهندسی می‌کنیم.',
        boardBadge: 'معماری سیستم',
        boardFlow: '۰۱ ورودی ← ۰۶ رشد تصاعدی',
        cta: 'بررسی معماری سیستم',
        scrollNote: 'اسکرول برای کاوش در معماری'
      },
      statement: {
        eyebrow: '۰۱ / تعریف بنیادین',
        headline: 'رشد یک کمپین موقت نیست؛ یک سیستم از تصمیم‌های به هم پیوسته است.',
        p1: 'بیشتر کسب‌وکارها از کمبود فعالیت‌های بازاریابی آسیب نمی‌بینند، بلکه از تکه‌تکه بودن و قطع ارتباط میان تصمیم‌ها رنج می‌برند.',
        p2: 'بودجه‌های تبلیغاتی بدون محاسبه اقتصاد واحد تزریق می‌شوند؛ صفحات فرود بدون درک روان‌شناسی خرید ساخته می‌شوند؛ و تحلیل داده تنها گذشته را گزارش می‌دهد به جای اینکه مسیر حرکت بعدی سرمایه را تعیین کند.',
        p3: 'رشد در انجام کارهای بیشتر بازاریابی نیست؛ در شناخت کسب‌وکار، اتخاذ تصمیم‌های بهتر، اجرای دقیق آن‌ها، رصد سیگنال‌های واقعی، بهینه‌سازی مبتنی بر شواهد و ایجاد هم‌افزایی تصاعدی از آموخته‌هاست.'
      },
      pillars: {
        eyebrow: '۰۲ / معماری رشد',
        headline: 'پشت هر چالش رشد، یک معماری ساختاری نهفته است.',
        lead: 'زمانی که رشد متوقف می‌شود، مشکل به ندرت کمبود بودجه تبلیغات است؛ مسئله عدم هماهنگی میان سه ستون بنیادین موتور تجاری است.'
      },
      operatingModel: {
        eyebrow: '۰۳ / متدولوژی عملیاتی',
        headline: 'سیستم چگونه کار می‌کند.',
        desc: 'رشد مجموعه‌ای از کمپین‌های پراکنده نیست؛ یک حلقه تصمیم‌گیری پیوسته است که در آن هر لایه مستقیماً لایه بعدی را تغذیه می‌کند.',
        sub: 'شش لایه پیوسته. یک موتور یکپارچه.'
      },
      comparison: {
        eyebrow: '۰۴ / تغییر پارادایم',
        headline: 'رویکردی متفاوت در همکاری.',
        lead: 'آژانس‌های سنتی صرفاً تاکتیک‌های کانال‌ها را مدیریت می‌کنند؛ ما معماری رشد را طراحی و کالیبره می‌کنیم.',
        colArea: 'حوزه تصمیم‌گیری',
        colTraditional: 'آژانس سنتی دیجیتال',
        colGrowth: 'معماری رشد مجیکنسـی'
      },
      principle: {
        eyebrow: '۰۵ / اصل محوری',
        quote: '«بازاریابی لایه اجراست؛ معماری رشد سیستم تصمیم‌گیری است.»',
        subtext: 'هنگامی که معماری سالم و استوار باشد، بازاریابی با اطمینان تصاعدی مقیاس می‌پذیرد.'
      },
      faq: {
        eyebrow: '۰۶ / پرسش‌های متداول',
        headline: 'درک رویکرد معماری رشد.'
      },
      closingCta: {
        eyebrow: 'گام بعدی',
        headline: 'شاید کسب‌وکار شما به بازاریابی بیشتر نیاز ندارد؛ بلکه به معماری بهتری نیاز دارد.',
        subhead: 'بیایید گلوگاه‌های تجاری شما را عارضه‌یابی کرده و سیستمی بسازیم که واقعاً مقیاس‌پذیر باشد.',
        button: 'شروع عارضه‌یابی رشد'
      }
    }
  }
};

export const LanguageProvider = ({ children, initialLang }) => {
  const [lang, setLang] = useState(initialLang || 'en');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeNode, setActiveNode] = useState(null);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'fa' : 'en'));
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLanguage,
        isRTL: lang === 'fa',
        t,
        isModalOpen,
        setIsModalOpen,
        activeNode,
        setActiveNode
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
