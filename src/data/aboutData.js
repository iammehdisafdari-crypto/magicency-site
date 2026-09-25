import { PROJECTS_DATA } from './projectsData';
import { FAQ_DATA } from './faqData';

/**
 * MAGICENCY ABOUT DATA — ADAPTED 11-SECTION EDITORIAL ARCHITECTURE
 * 
 * Modeled on Agency Partner Information Architecture & Section Sequencing:
 * 01 — HERO / ABOUT US (Statement-driven category positioning, 3 pillars, verified client marquee)
 * 02 — OUR DNA / WHY MAGICENCY EXISTS (Disconnected marketing problem vs connected system, studio visual)
 * 03 — PROOF / SCALE / NUMBERS (Verified case study telemetry, no fake statistics)
 * 04 — MISSION / VISION / VALUES (3 clearly differentiated conceptual areas)
 * 05 — THE PEOPLE BEHIND THE SYSTEM (Operating model: senior-led, specialist-driven, technology-enabled)
 * 06 — OUR FIRM / WHAT WE BELIEVE ("Growth isn't a channel. It's an operating system.")
 * 07 — HOW WE WORK (Continuous 6-layer visual editorial sequence bridge to /approach)
 * 08 — SELECTED EXPERIENCE (Verified client case study highlights connecting to /work)
 * 09 — JOURNAL / INSIGHTS (Editorial article showcase bridging to /blog)
 * 10 — BUILD WITH US / COLLABORATION (Transparent specialist collaboration, no fake job listings)
 * 11 — FINAL CTA (High-impact conversion manifesto & consultation trigger)
 */

export const ABOUT_DATA = {
  en: {
    // Navigator labels for desktop sticky rail
    navigator: [
      { id: 'section-hero', num: '01', label: 'ABOUT US' },
      { id: 'section-dna', num: '02', label: 'OUR DNA' },
      { id: 'section-proof', num: '03', label: 'VERIFIED PROOF' },
      { id: 'section-mission', num: '04', label: 'MISSION & VALUES' },
      { id: 'section-people', num: '05', label: 'THE PEOPLE' },
      { id: 'section-philosophy', num: '06', label: 'WHAT WE BELIEVE' },
      { id: 'section-how-we-work', num: '07', label: 'HOW WE WORK' },
      { id: 'section-experience', num: '08', label: 'SELECTED EXPERIENCE' },
      { id: 'section-journal', num: '09', label: 'JOURNAL' },
      { id: 'section-collaboration', num: '10', label: 'BUILD WITH US' },
      { id: 'section-cta', num: '11', label: 'INITIATION' }
    ],

    // 01 — HERO / ABOUT US
    hero: {
      chapterNum: '01',
      chapterTag: 'CHAPTER 01 // IDENTITY & ORIENTATION',
      eyebrow: 'PERFORMANCE MARKETING & DIGITAL GROWTH AGENCY',
      headlinePart1: 'Performance Marketing.',
      headlinePart2: 'Digital Growth.',
      headlinePart3: 'Built as a System.',
      subline: 'Traditional digital marketing is broken into disconnected channels that cancel each other out. We engineer unified growth systems that compound over time.',
      editorialQuote: '“Growth stops being accidental when strategy, creative, and engineering share the same feedback loop.”',
      pillars: [
        {
          num: '01',
          code: 'STRATEGY',
          title: 'Strategic Architecture',
          desc: 'Unit economics, margin profiling, and defensible market positioning that eliminate commercial ambiguity.'
        },
        {
          num: '02',
          code: 'EXPERIENCE',
          title: 'Digital Experience & Tech',
          desc: 'Zero-latency digital flagships, high-conversion UX architecture, and frictionless user velocity.'
        },
        {
          num: '03',
          code: 'PERFORMANCE',
          title: 'Performance & Growth Engines',
          desc: 'Algorithmic media acquisition, programmatic search infrastructure, and closed-loop telemetry.'
        }
      ],
      marqueeLabel: 'TRUSTED BY INNOVATIVE BRANDS ACROSS REGIONAL & GLOBAL MARKETS',
      clients: [
        'Tamir Online',
        'Atrash Store',
        'Classino',
        'Respina',
        'ITBfx',
        'Wine Amphorae',
        'Elysium Toys',
        'Codeyad',
        'Silvermotor',
        'Ordibehesht Book',
        'Photo Afshin',
        'Maryam Majidinejad'
      ],
      telemetry: {
        discipline: 'PERFORMANCE MARKETING & DIGITAL GROWTH',
        status: 'OPERATING SYSTEM ACTIVE // 2026',
        coords: '35.6892° N / 51.3890° E'
      }
    },

    // 02 — OUR DNA / WHY MAGICENCY EXISTS
    dna: {
      chapterNum: '02',
      chapterTag: 'CHAPTER 02 // WHY MAGICENCY EXISTS',
      eyebrow: 'OUR DNA // THE STRUCTURAL PROBLEM',
      headlinePart1: 'Marketing became fragmented.',
      headlinePart2: 'We engineer the connected system.',
      lead: 'Traditional digital marketing splits agency work into isolated silos: ad buyers burn budgets acquiring impressions without buyer journey context, creative agencies optimize for aesthetics without commercial leverage, web developers build without conversion attribution, and analytics teams report vanity metrics that never change an operational decision.',
      thesis: 'When strategic decisions live in vacuums, commercial capital leaks at every boundary. Magicency exists to eliminate this structural flaw—unifying strategy, craft, digital engineering, and telemetry into one closed feedback loop where every touchpoint reinforces the next.',
      toggleSilos: 'DISCONNECTED SILOS',
      toggleSystem: 'ONE CONNECTED SYSTEM',
      systemThesis: 'A closed feedback loop where every market interaction immediately informs the next strategic allocation.',
      workspace: {
        caption: 'MAGICENCY STUDIO // RESEARCH, SYSTEMS MAPPING & STRATEGIC ITERATION',
        image: '/assets/about/workspace.webp',
        headline: 'Engineered on reality, not agency guesswork.',
        copy: 'Every output stems from convergent disciplines interrogating problems together in real-time. No intermediaries, no junior handoffs, and zero agency fluff.'
      },
      fragments: [
        {
          id: 'strategy',
          num: '01',
          name: 'Strategy',
          isolatedIssue: 'Formulated in theoretical slide decks with zero contact with real market execution.',
          connectedRole: 'Governs capital allocation, margin structures, unit economics, and defensible positioning.',
          icon: 'Compass'
        },
        {
          id: 'creative',
          num: '02',
          name: 'Creative',
          isolatedIssue: 'Evaluated solely on subjective taste instead of commercial leverage and conversion power.',
          connectedRole: 'Communicates advantage, punctures category fatigue, and drives immediate action.',
          icon: 'Sparkles'
        },
        {
          id: 'performance',
          num: '03',
          name: 'Performance',
          isolatedIssue: 'Burns ad budgets buying fleeting clicks with zero buyer journey or retention alignment.',
          connectedRole: 'Scales proven value propositions and captures high-intent commercial demand.',
          icon: 'Activity'
        },
        {
          id: 'technology',
          num: '04',
          name: 'Technology',
          isolatedIssue: 'Over-engineered in technical isolation, causing severe onboarding friction and user drop-offs.',
          connectedRole: 'Engineers zero-latency digital experiences and frictionless buyer velocity.',
          icon: 'Cpu'
        },
        {
          id: 'data',
          num: '05',
          name: 'Telemetry & Data',
          isolatedIssue: 'Rearview vanity dashboards that report superficial clicks and never change an operational decision.',
          connectedRole: 'Provides deterministic server telemetry to steer the next high-leverage allocation.',
          icon: 'Database'
        }
      ]
    },

    // 03 — PROOF / SCALE / NUMBERS
    proof: {
      chapterNum: '03',
      chapterTag: 'CHAPTER 03 // MEASURABLE SCALE',
      eyebrow: 'VERIFIED PROOF // AUDITED OUTCOMES',
      title: 'Reality wins over agency claims.',
      lead: 'We do not invent vanity awards, fictitious follower counts, or unsupported claims. Our track record is documented in live commercial systems, verified server telemetry, and audited case studies.',
      metrics: [
        {
          num: '84.1K',
          label: 'VERIFIED ORGANIC CLICKS',
          client: 'ENTERPRISE SEARCH ENGINE',
          detail: 'Architected programmatic search infrastructure and dynamic index graphing, delivering 5.18M Google impressions over 12 months with a 1.6% CTR and 17.6 average position.'
        },
        {
          num: 'ROAS 11',
          label: 'PERFORMANCE MAX ENGINE',
          client: 'ATRASH STORE',
          detail: 'Re-engineered Google Ads into algorithmic Performance Max clusters with custom conversion telemetry, yielding 1.22K purchases at just €104 total cost in a 14-day sprint.'
        },
        {
          num: '1.28M',
          label: 'HIGH-INTENT IMPRESSIONS',
          client: 'TAMIR ONLINE',
          detail: 'Engineered high-intent search ads, dynamic geo-bidding, and lead funnel CRO, capturing 134K clicks and 9.03K verified repair requests with a peak 23.42% search ad CTR.'
        },
        {
          num: '5+',
          label: 'FLAGSHIP GROWTH SYSTEMS',
          client: 'ACTIVE CASE STUDIES',
          detail: 'End-to-end growth operating systems engineered across fintech, digital health, luxury e-commerce, home services, and international real estate advisory.'
        }
      ],
      principles: [
        {
          code: '01',
          title: '100% First-Party Server Telemetry',
          desc: 'Attribution pipelines immune to client-side ad-blockers and browser privacy loss.'
        },
        {
          code: '02',
          title: 'Zero-Latency Conversion UX',
          desc: 'High-speed digital flagships engineered for commercial velocity and high conversion rates.'
        },
        {
          code: '03',
          title: 'Closed-Loop Capital Allocation',
          desc: 'Every conversion signal immediately recalculates the next high-leverage marketing investment.'
        }
      ],
      caseStudyNote: 'EVERY METRIC BACKED BY SYSTEM ARCHITECTURE, SERVER TELEMETRY & DOCUMENTED CODE'
    },

    // 04 — MISSION / VISION / VALUES
    missionVisionValues: {
      chapterNum: '04',
      chapterTag: 'CHAPTER 04 // GOVERNING ARCHITECTURE',
      eyebrow: 'MISSION / VISION / VALUES',
      headline: 'The foundational principles that govern our growth systems.',
      mission: {
        label: 'OUR MISSION',
        tag: 'WHAT WE DO FOR CLIENTS',
        statement: 'Turn marketing activity into measurable business growth.',
        desc: 'We eliminate capital waste and disconnected noise by transforming digital marketing into an accountable, predictable commercial operating system that directly moves bottom-line enterprise value.'
      },
      vision: {
        label: 'OUR VISION',
        tag: 'THE FUTURE WE ARE BUILDING',
        statement: 'Growth should operate as a connected system that learns, adapts, and compounds.',
        desc: 'A future where business positioning, creative craft, digital engineering, and real-time market signals function as a synchronized whole, turning every customer interaction into compounding advantage.'
      },
      values: {
        label: 'OUR CORE PRINCIPLES',
        tag: 'GENUINE MAGICENCY VALUES',
        items: [
          {
            num: '01',
            title: 'Systems over isolated tactics',
            desc: 'A brilliant ad cannot rescue broken positioning, flawed unit economics, or a high-friction digital experience. Growth lives in the connection between layers.'
          },
          {
            num: '02',
            title: 'Evidence over assumptions',
            desc: 'Every allocation of capital is grounded in verified first-party telemetry and commercial reality rather than subjective opinion or vanity dashboards.'
          },
          {
            num: '03',
            title: 'Measurement before optimization',
            desc: 'You cannot optimize what you do not rigorously measure. Clean, server-side data instrumentation must precede all performance scaling.'
          },
          {
            num: '04',
            title: 'Strategy before execution',
            desc: 'Tactical velocity in the wrong direction is simply accelerated capital burn. Strategic clarity and unit economic modeling direct every deployment.'
          },
          {
            num: '05',
            title: 'Integration over silos',
            desc: 'When strategy, creative, and technical engineering share the same feedback loop, marketing stops leaking commercial value at every boundary.'
          },
          {
            num: '06',
            title: 'Compounding over short-term noise',
            desc: 'We build durable digital assets and commercial moats that become increasingly efficient with every market cycle, compounding value over time.'
          }
        ]
      }
    },

    // 05 — THE PEOPLE BEHIND THE SYSTEM
    people: {
      chapterNum: '05',
      chapterTag: 'CHAPTER 05 // THE HUMAN LAYER',
      eyebrow: 'THE PEOPLE BEHIND THE SYSTEM',
      headline: 'Senior rigor. Specialist craft. Zero agency fluff.',
      lead: 'Magicency operates on a senior-led agency model. We reject bureaucratic agency hierarchies, junior handoffs, and corporate theater. Ambitious founders and enterprise leaders work directly with the strategists and engineers who build their systems.',
      operatingModel: [
        {
          num: '01',
          code: 'STRATEGY-LED',
          title: 'High-Level Business Acumen',
          desc: 'Unit economics, margin structures, and commercial levers direct every architectural initiative.'
        },
        {
          num: '02',
          code: 'SPECIALIST-DRIVEN',
          title: 'Direct Senior Craft',
          desc: 'Deep mastery across positioning, performance media, CRO, and code without intermediate account layers.'
        },
        {
          num: '03',
          code: 'TECHNOLOGY-ENABLED',
          title: 'Automated Pipelines & Telemetry',
          desc: 'First-party server tracking, programmatic search architecture, and algorithmic media engines.'
        },
        {
          num: '04',
          code: 'COLLABORATIVE & DISTRIBUTED',
          title: 'Zero-Friction Operating Cadence',
          desc: 'Convergent disciplines working synchronously in an agile, transparent studio environment.'
        }
      ],
      workspace: {
        image: '/assets/about/workspace.webp',
        caption: 'MAGICENCY STUDIO // RESEARCH, SYSTEMS MAPPING & STRATEGIC ITERATION',
        headline: 'Direct contact with the minds engineering the system.',
        copy: 'Every output stems from convergent disciplines interrogating problems together in real-time. No intermediaries. No junior account managers. Pure accountability for the commercial outcome.'
      }
    },

    // 06 — OUR FIRM / WHAT WE BELIEVE
    philosophy: {
      chapterNum: '06',
      chapterTag: 'CHAPTER 06 // CORE BELIEF SYSTEM',
      eyebrow: 'OUR FIRM // WHAT WE BELIEVE',
      monumentQuote: 'Growth isn’t a channel. It’s an operating system.',
      lead: 'Most agencies view digital marketing as a checklist of isolated deliverables: run an ad, redesign a button, publish a blog. Magicency sees an interconnected machine where each component multiplies the value of the others.',
      pillars: [
        {
          num: '01',
          title: 'Business Understanding',
          desc: 'We diagnose unit economics, margin structures, and real operational constraints before recommending or touching a marketing campaign.'
        },
        {
          num: '02',
          title: 'Strategic Clarity',
          desc: 'Defensible brand positioning cuts through category noise, builds pricing power, and makes customer acquisition radically more cost-effective.'
        },
        {
          num: '03',
          title: 'Connected Execution',
          desc: 'Brand design, digital engineering, and performance acquisition are coordinated from day one under a shared commercial hypothesis.'
        },
        {
          num: '04',
          title: 'Telemetry & Measurement',
          desc: 'Wins and losses are both signal. Server-side tracking captures reality without platform bias, ensuring capital flows only to high-yield vectors.'
        },
        {
          num: '05',
          title: 'Systematic Compounding',
          desc: 'A growth system that learns with every transaction creates an insurmountable competitive moat, reducing CAC while accelerating LTV.'
        }
      ]
    },

    // 07 — HOW WE WORK (THE 6-LAYER BRIDGE SEQUENCE)
    howWeWork: {
      chapterNum: '07',
      chapterTag: 'CHAPTER 07 // THE 6-LAYER ARCHITECTURE',
      eyebrow: 'HOW WE WORK // METHODOLOGY BRIDGE',
      headline: 'From business reality to compounding growth.',
      lead: 'A continuous visual progression demonstrating how our beliefs materialize into execution.',
      stages: [
        {
          num: '01',
          code: 'STRATEGY',
          title: 'Strategy & Unit Economics',
          desc: 'Deconstruct unit economics, interrogate constraints, and establish polarized brand positioning that creates immediate commercial differentiation.'
        },
        {
          num: '02',
          code: 'EXPERIENCE',
          title: 'Digital Surface & UX',
          desc: 'Engineer zero-latency digital flagships, frictionless conversion journeys, and editorial design systems that command authority.'
        },
        {
          num: '03',
          code: 'ACQUISITION',
          title: 'Precision Acquisition',
          desc: 'Deploy algorithmic media buying, high-intent search engineering, and multi-channel demand capture focused strictly on profitable unit economics.'
        },
        {
          num: '04',
          code: 'MEASUREMENT',
          title: 'Server-Side Telemetry',
          desc: 'Install first-party server tracking and closed-loop attribution to capture authentic customer behavior without platform distortion.'
        },
        {
          num: '05',
          code: 'OPTIMIZATION',
          title: 'Continuous Calibration',
          desc: 'Continuously eliminate conversion friction points and reallocate capital into highest-yield vectors based on verified data.'
        },
        {
          num: '06',
          code: 'GROWTH',
          title: 'Compounding Scale',
          desc: 'Establish an autonomous compounding loop where market learning accumulates, customer acquisition cost falls, and enterprise value scales.'
        }
      ],
      bridgeCta: 'EXPLORE OUR COMPLETE GROWTH ARCHITECTURE'
    },

    // 08 — SELECTED EXPERIENCE
    selectedExperience: {
      chapterNum: '08',
      chapterTag: 'CHAPTER 08 // REAL-WORLD DEPLOYMENTS',
      eyebrow: 'SELECTED EXPERIENCE // CREDIBILITY',
      headline: 'Documented systems in active markets.',
      lead: 'We partner with a selective roster of ambitious clients to architect defensible competitive advantages.',
      projects: [
        {
          id: 'organic-growth-engine',
          slug: 'organic-growth-engine',
          num: '01',
          client: 'ENTERPRISE SEARCH & INTENT ENGINE',
          title: 'Programmatic Search Architecture & 84.1K Organic Click Scale',
          category: 'Programmatic SEO & Search Infrastructure',
          metric: '84.1K CLICKS // 5.18M IMPRESSIONS',
          image: '/project-1.webp'
        },
        {
          id: 'atrash-store',
          slug: 'atrash-store',
          num: '02',
          client: 'ATRASH STORE',
          title: 'Google Ads Performance Max Engine: ROAS 11 & Scalable Acquisition',
          category: 'E-Commerce & High-ROAS Paid Acquisition',
          metric: 'ROAS 11 // 1.22K PURCHASES',
          image: '/project-2.webp'
        },
        {
          id: 'tamir-online',
          slug: 'tamir-online',
          num: '03',
          client: 'TAMIR ONLINE',
          title: 'Search Ads Lead Gen Engine: 1.28M Impressions & 134K Clicks',
          category: 'On-Demand Services // High-Volume Lead Gen',
          metric: '1.28M IMPRESSIONS // 23.42% CTR',
          image: '/project-3.webp'
        },
        {
          id: 'wine-amphorae',
          slug: 'wine-amphorae',
          num: '04',
          client: 'WINE AMPHORAE',
          title: 'Heritage Terracotta Vessel Platform: Luxury Italian Website Experience',
          category: 'Luxury Brand Experience // Digital Flagship',
          metric: 'INTERNATIONAL INBOUND PLATFORM',
          image: '/project-4.webp'
        }
      ],
      cta: 'VIEW ALL DOCUMENTED WORK'
    },

    // 09 — JOURNAL / INSIGHTS
    journal: {
      chapterNum: '09',
      chapterTag: 'CHAPTER 09 // RESOURCE HUB',
      eyebrow: 'JOURNAL & INSIGHTS // THE RESOURCE HUB',
      headline: 'Strategic clarity from active systems.',
      lead: 'In-depth essays, architectural breakdowns, and strategic frameworks on performance marketing, digital systems, and compounding growth.',
      articles: [
        {
          id: 'article-1',
          title: 'The Death of Disconnected Marketing: Why Silos Burn Capital',
          category: 'GROWTH SYSTEMS',
          readTime: '7 MIN READ',
          summary: 'Why treating marketing as isolated channels wastes up to 60% of commercial spend, and how unified operating systems compound returns.',
          image: '/journal-1.webp',
          slug: '/blog'
        },
        {
          id: 'article-2',
          title: 'Engineering Compounding Growth: The 6-Layer Architecture',
          category: 'METHODOLOGY',
          readTime: '9 MIN READ',
          summary: 'A practical guide to connecting strategy, digital experience, acquisition vectors, and first-party telemetry into a closed loop.',
          image: '/journal-2.webp',
          slug: '/blog'
        }
      ],
      cta: 'VISIT THE MAGICENCY JOURNAL'
    },

    // 10 — BUILD WITH US / COLLABORATION
    collaboration: {
      chapterNum: '10',
      chapterTag: 'CHAPTER 10 // BUILD WITH US',
      eyebrow: 'CAREERS & COLLABORATION // TALENT HUB',
      headline: 'We build with exceptional specialists.',
      lead: 'Magicency is continuously expanding its network of high-conviction practitioners. We do not post fake job openings or build bloated corporate hierarchies. Instead, we collaborate with senior specialists, technical architects, and strategic partners on a project and retained basis.',
      areas: [
        {
          num: '01',
          code: 'STRATEGY',
          title: 'Growth Strategists & Economists',
          desc: 'Specialists in unit economics, market positioning, margin modeling, and commercial diagnostics.'
        },
        {
          num: '02',
          code: 'CREATIVE',
          title: 'Brand Designers & Art Directors',
          desc: 'Master practitioners in luxury digital flagships, typographic design systems, and brand worlds.'
        },
        {
          num: '03',
          code: 'ENGINEERING',
          title: 'Web Engineers & Technical SEOs',
          desc: 'Architects of modern headless web platforms, custom conversion pipelines, and programmatic search.'
        },
        {
          num: '04',
          code: 'PERFORMANCE',
          title: 'Performance & Media Specialists',
          desc: 'Experts in Google Ads Performance Max, Meta high-intent funnels, and server-side tracking telemetry.'
        }
      ],
      cta: 'INITIATE A COLLABORATION CONVERSATION',
      contact: 'COLLABORATE@MAGICENCY.COM'
    },

    // FAQ (HOMEPAGE SUPPORT)
    faq: FAQ_DATA.en,

    // 11 — FINAL CTA
    finalCta: {
      chapterNum: '11',
      chapterTag: 'CHAPTER 11 // INITIATION',
      eyebrow: 'THE CONCLUSION // NEXT STEP',
      headlinePart1: 'GROWTH IS AN OPERATING SYSTEM.',
      headlinePart2: 'BUILD THE ENGINE BEHIND IT.',
      lead: 'If your digital marketing is currently operating as a collection of disconnected activities, the next move is to diagnose the system and connect the levers that compound.',
      ctaButton: 'START A STRATEGIC CONVERSATION',
      secondaryAction: 'EXPLORE OUR WORK',
      badge: 'STRATEGIC CONSULTATION // 2026',
      directContact: 'DIRECT LINE: HELLO@MAGICENCY.COM'
    }
  },

  // PERSIAN (FA) — RTL
  fa: {
    navigator: [
      { id: 'section-hero', num: '۰۱', label: 'درباره ما' },
      { id: 'section-dna', num: '۰۲', label: 'دی‌ان‌ای ما' },
      { id: 'section-proof', num: '۰۳', label: 'سند عملکرد' },
      { id: 'section-mission', num: '۰۴', label: 'رسالت و ارزش‌ها' },
      { id: 'section-people', num: '۰۵', label: 'انسان‌ها' },
      { id: 'section-philosophy', num: '۰۶', label: 'فلسفه ما' },
      { id: 'section-how-we-work', num: '۰۷', label: 'شیوه کار' },
      { id: 'section-experience', num: '۰۸', label: 'پروژه‌های منتخب' },
      { id: 'section-journal', num: '۰۹', label: 'ژورنال' },
      { id: 'section-collaboration', num: '۱۰', label: 'با ما بسازید' },
      { id: 'section-cta', num: '۱۱', label: 'آغاز مسیر' }
    ],

    hero: {
      chapterNum: '۰۱',
      chapterTag: 'فصل اول // هویت و جایگاه',
      eyebrow: 'آژانس پرفورمنس مارکتینگ و رشد دیجیتال',
      headlinePart1: 'پرفورمنس مارکتینگ.',
      headlinePart2: 'رشد دیجیتال.',
      headlinePart3: 'مهندسی‌شده در قالب یک سیستم.',
      subline: 'بازاریابی سنتی دیجیتال به کانال‌های گسسته‌ای تبدیل شده که اثر یکدیگر را خنثی می‌کنند. ما سیستم‌های یکپارچه رشدی را مهندسی می‌کنیم که در گذر زمان ارزش مرکب خلق می‌کنند.',
      editorialQuote: '«هنگامی که استراتژی، خلاقیت و مهندسی در یک حلقه بازخورد مشترک قرار گیرند، رشد دیگر یک تصادف نخواهد بود.»',
      pillars: [
        {
          num: '۰۱',
          code: 'استراتژی',
          title: 'معماری استراتژیک',
          desc: 'اقتصاد واحد، تحلیل حاشیه سود و جایگاه‌یابی دفاع‌پذیر که ابهامات تجاری را به طور کامل حذف می‌کند.'
        },
        {
          num: '۰۲',
          code: 'تجربه',
          title: 'تجربه دیجیتال و وب',
          desc: 'پلتفرم‌های پرچمدار بدون تأخیر، معماری تجربه کاربری با نرخ تبدیل بالا و سرعت بخشیدن به تصمیم خرید.'
        },
        {
          num: '۰۳',
          code: 'پرفورمنس',
          title: 'موتورهای پرفورمنس و رشد',
          desc: 'جذب الگوریتمی تبلیغات، معماری سئو ساخت‌یافته و تله‌متری حلقه بسته برای مقیاس‌پذیری پایدار.'
        }
      ],
      marqueeLabel: 'مورد اعتماد برندهای پیشرو در بازارهای منطقه‌ای و بین‌المللی',
      clients: [
        'تعمیر آنلاین',
        'عطرش استور',
        'کلاسینو',
        'رسپینا',
        'آی‌تی‌بی فارکس',
        'واین آمفورا',
        'الیسیوم تویز',
        'کدیاد',
        'سیلورموتور',
        'کتاب اردیبهشت',
        'فوتو افشین',
        'مریم مجیدی‌نژاد'
      ],
      telemetry: {
        discipline: 'پرفورمنس مارکتینگ و رشد دیجیتال',
        status: 'سیستم عامل فعال // ۲۰۲۶',
        coords: '۳۵.۶۸۹۲° شمالی / ۵۱.۳۸۹۰° شرقی'
      }
    },

    dna: {
      chapterNum: '۰۲',
      chapterTag: 'فصل دوم // چرا مجیکنسـی متولد شد؟',
      eyebrow: 'ریشه‌ها و دی‌ان‌ای // مسئله ساختاری بازار',
      headlinePart1: 'بازاریابی به اجزای جدا از هم تبدیل شد.',
      headlinePart2: 'ما سیستم پیوسته را مهندسی می‌کنیم.',
      lead: 'مدل‌های سنتی بازاریابی، پروژه‌ها را به جزیره‌های مجزا تقسیم می‌کنند: خریداران رسانه بدون درک سفر مشتری بودجه را می‌سوزانند، تیم‌های طراحی صرفاً برای زیبایی بصری بدون اهرم تجاری تلاش می‌کنند، توسعه‌دهندگان وب بدون رهگیری نرخ تبدیل کد می‌زنند و تیم‌های تحلیل داده گزارش‌هایی ارائه می‌دهند که هرگز تغییری در تصمیمات عملیاتی ایجاد نمی‌کنند.',
      thesis: 'وقتی تصمیمات در خلأ گرفته شوند، سرمایه تجاری در هر مرز تلف می‌شود. مجیکنسـی برای حذف این نقص بنیادین متولد شد؛ پیوند استراتژی، هنر طراحی، مهندسی وب و تله‌متری در یک چرخه بسته بازخورد که در آن هر نقطه تماس، نقطه بعدی را تقویت می‌کند.',
      toggleSilos: 'جزیره‌های پراکنده',
      toggleSystem: 'یک سیستم یکپارچه',
      systemThesis: 'یک چرخه بازخورد پیوسته که در آن هر تعامل بازار، بلافاصله تصمیم راهبردی بعدی را بهینه‌تر می‌سازد.',
      workspace: {
        caption: 'استودیوی مجیکنسـی // پژوهش میدانی، نگاشت سیستم‌ها و تکرار استراتژیک',
        image: '/assets/about/workspace.webp',
        headline: 'معماری بر پایه حقیقت بازار، نه حدسیات اداری.',
        copy: 'هر خروجی حاصل بررسی مشترک و بی‌درنگ تخصص‌های همگرا در یک اتاق فکر است. بدون واسطه‌ها، بدون ارجاع به نیروهای کم‌تجربه و بدون اتلاف زمان.'
      },
      fragments: [
        {
          id: 'strategy',
          num: '۰۱',
          name: 'استراتژی',
          isolatedIssue: 'تدوین در اسلایدهای تئوریک بدون کوچک‌ترین تماس با واقعیت اجرای بازار.',
          connectedRole: 'جهت‌دهی به تخصیص سرمایه، ساختار حاشیه سود، اقتصاد واحد و جایگاه متمایز برند.',
          icon: 'Compass'
        },
        {
          id: 'creative',
          num: '۰۲',
          name: 'خلاقیت',
          isolatedIssue: 'قضاوت صرفاً بر پایه سلیقه و زیبایی بصری بدون توجه به اهرم تجاری و قدرت تبدیل.',
          connectedRole: 'انتقال مزیت رقابتی، شکستن هیاهوی تکراری بازار و ترغیب آنی به اقدام خرید.',
          icon: 'Sparkles'
        },
        {
          id: 'performance',
          num: '۰۳',
          name: 'پرفورمنس',
          isolatedIssue: 'اتلاف بودجه‌های تبلیغاتی برای خرید کلیک‌های زودگذر بدون درک مسیر تصمیم‌گیری مشتری.',
          connectedRole: 'مقیاس‌بخشی به ارزش اثبات‌شده و جذب مخاطبان با تمایل خرید بالا و پایدار.',
          icon: 'Activity'
        },
        {
          id: 'technology',
          num: '۰۴',
          name: 'فناوری و وب',
          isolatedIssue: 'توسعه پیچیده در انزوای فنی که اصطکاک و ریزش شدید مخاطبان را رقم می‌زند.',
          connectedRole: 'مهندسی تجربه‌های دیجیتال بدون تأخیر و تسریع مسیر خرید مشتری.',
          icon: 'Cpu'
        },
        {
          id: 'data',
          num: '۰۵',
          name: 'داده و تله‌متری',
          isolatedIssue: 'داشبوردهای نمایشی از گذشته که هرگز در تغییر یک تصمیم عملیاتی نقش ندارند.',
          connectedRole: 'ارائه تله‌متری قطعی سمت سرور برای هدایت هوشمندانه تصمیمات بعدی.',
          icon: 'Database'
        }
      ]
    },

    proof: {
      chapterNum: '۰۳',
      chapterTag: 'فصل سوم // مقیاس ملموس',
      eyebrow: 'سند اثبات عملکرد // نتایج مستند',
      title: 'حقیقت بازار بر هر ادعایی پیروز است.',
      lead: 'ما جوایز ساختگی، فالوئرهای جعلی یا ادعاهای بدون پشتوانه تولید نمی‌کنیم. کارنامه ما در سیستم‌های عملیاتی زنده، تله‌متری مستند سمت سرور و مطالعات موردی تأییدشده ثبت شده است.',
      metrics: [
        {
          num: '۸۴.۱ هزار',
          label: 'کلیک ارگانیک تأییدشده',
          client: 'موتور رشد ارگانیک و سئو سازمانی',
          detail: 'مهندسی سئو ساخت‌یافته و رفع موانع فنی ایندکسینگ، ثبت ۵.۱۸ میلیون ایمپرشن در ۱۲ ماه در سرچ کنسول با CTR معادل ۱.۶٪ و رتبه میانگین ۱۷.۶.'
        },
        {
          num: 'ROAS 11',
          label: 'موتور تبلیغات پرفورمنس مکس',
          client: 'عطرش استور',
          detail: 'بازطراحی صفر تا صد گوگل ادز به کلاسترهای الگوریتمی Performance Max با مانیتورینگ اختصاصی، ثبت ۱۲۲۰ خرید تنها با ۱۰۴ یورو در ۱۴ روز.'
        },
        {
          num: '۱.۲۸ میلیون',
          label: 'ایمپرشن جستجوی هدفمند',
          client: 'تعمیر آنلاین',
          detail: 'مدیریت کمپین‌های جستجوی فوری، بیدینگ منطقه‌ای و CRO فرم ثبت سفارش، جذب ۱۳۴ هزار کلیک و ۹,۰۳۰ لید واقعی با رکورد ۲۳.۴۲٪ CTR.'
        },
        {
          num: '۵+',
          label: 'سیستم رشد پرچمدار فعال',
          client: 'پروژه‌های مستند در حال اجرا',
          detail: 'سیستم‌های جامع رشد در حوزه‌های فین‌تک، سلامت دیجیتال، تجارت الکترونیک، خدمات آنلاین و سرمایه‌گذاری املاک بین‌المللی.'
        }
      ],
      principles: [
        {
          code: '۰۱',
          title: 'تله‌متری ۱۰۰٪ اختصاصی سمت سرور',
          desc: 'اتریبیوشن و رهگیری دقیق بدون ریزش داده ناشی از ادبلاکرها یا محدودیت‌های مرورگر.'
        },
        {
          code: '۰۲',
          title: 'تجربه کاربری با تأخیر صفر',
          desc: 'پلتفرم‌های دیجیتال پرسرعت ساخته‌شده برای حداکثر نرخ تبدیل و تسریع مسیر اقدام.'
        },
        {
          code: '۰۳',
          title: 'تخصیص سرمایه در حلقه بسته',
          desc: 'هر سیگنال خرید بلافاصله مسیر بهینه‌سازی بودجه بعدی را در سیستم مشخص می‌کند.'
        }
      ],
      caseStudyNote: 'تمامی معیارها مستند به معماری سیستم، داده‌های سرور و کدهای پیاده‌سازی‌شده هستند'
    },

    missionVisionValues: {
      chapterNum: '۰۴',
      chapterTag: 'فصل چهارم // چارچوب هدایتگر',
      eyebrow: 'رسالت / چشم‌انداز / ارزش‌های بنیادین',
      headline: 'اصول بنیادی حاکم بر تمامی سیستم‌هایی که مهندسی می‌کنیم.',
      mission: {
        label: 'رسالت ما (MISSION)',
        tag: 'آنچه برای کارفرمایان محقق می‌کنیم',
        statement: 'تبدیل فعالیت‌های بازاریابی به رشد ملموس و قابل سنجش تجاری.',
        desc: 'ما اتلاف سرمایه و سر و صدای پراکنده را با تبدیل بازاریابی دیجیتال به یک سیستم عامل پاسخگو و قابل پیش‌بینی حذف می‌کنیم؛ سیستمی که مستقیماً ارزش اقتصادی نهایی بیزنس را افزایش می‌دهد.'
      },
      vision: {
        label: 'چشم‌انداز ما (VISION)',
        tag: 'آینده‌ای که برای این حوزه می‌سازیم',
        statement: 'رشد باید مانند یک سیستم متصل عمل کند که می‌آموزد، سازگار می‌شود و تصاعدی عمل می‌کند.',
        desc: 'آینده‌ای که در آن وضوح جایگاه برند، جسارت خلاقیت، مهندسی وب و سیگنال‌های زنده بازار به عنوان یک کل هماهنگ عمل کنند و هر تعامل مشتری را به یک مزیت رقابتی پایدار تبدیل نمایند.'
      },
      values: {
        label: 'اصول بنیادین ما (VALUES)',
        tag: 'باورهای اصیل و غیرقابل مذاکره مجیکنسـی',
        items: [
          {
            num: '۰۱',
            title: 'سیستم برتر از تاکتیک‌های جداگانه',
            desc: 'یک تبلیغ درخشان هرگز نمی‌تواند جایگاه‌یابی مبهم، اقتصاد واحد ضعیف یا فرآیند پرریزش خرید را نجات دهد. رشد واقعی در پیوند میان لایه‌هاست.'
          },
          {
            num: '۰۲',
            title: 'شواهد عینی برتر از فرضیات',
            desc: 'هر تخصیص سرمایه بر پایه داده‌های اثبات‌شده سرور و واقعیت میدانی بازار شکل می‌گیرد، نه نظرات سلیقه‌ای یا گزارش‌های ظاهری.'
          },
          {
            num: '۰۳',
            title: 'سنجش دقیق پیش از بهینه‌سازی',
            desc: 'آنچه را که به دقت اندازه نگیرید، نمی‌توانید بهینه کنید. زیرساخت داده‌های سمت سرور باید پیش از هرگونه مقیاس‌بخشی بودجه مستقر شود.'
          },
          {
            num: '۰۴',
            title: 'استراتژی پیش از اجرای فنی',
            desc: 'سرعت بالا در مسیر اشتباه صرفاً شتاب بخشیدن به اتلاف سرمایه است. وضوح استراتژیک و مدل اقتصادی جهت هر گام عملیاتی را معین می‌سازد.'
          },
          {
            num: '۰۵',
            title: 'یکپارچگی برتر از جزیره‌های کاری',
            desc: 'وقتی استراتژی، خلاقیت و مهندسی در یک حلقه بازخورد مشترک قرار گیرند، اتلاف سرمایه در مرزهای کاری به صفر نزدیک می‌شود.'
          },
          {
            num: '۰۶',
            title: 'رشد تصاعدی برتر از هیجانات کوتاه‌مدت',
            desc: 'ما دارایی‌های بادوام دیجیتال و خندق‌های رقابتی می‌سازیم که با هر چرخه بازار کارآمدتر شده و بازدهی تصاعدی خلق می‌کنند.'
          }
        ]
      }
    },

    people: {
      chapterNum: '۰۵',
      chapterTag: 'فصل پنجم // لایه انسانی',
      eyebrow: 'انسان‌های پشت این سیستم',
      headline: 'سخت‌گیری متفکران. هنر سازندگان. بدون بوروکراسی.',
      lead: 'مجیکنسـی با یک مدل چابک و با هدایت متخصصان ارشد اداره می‌شود. ما ساختارهای کند سنتی، ارجاع کار به نیروهای تازه‌کار و نمایش‌های تشریفاتی را کنار گذاشته‌ایم. مدیران و بنیان‌گذاران مستقیماً با همان استراتژیست‌ها و مهندسانی کار می‌کنند که سیستم را می‌سازند.',
      operatingModel: [
        {
          num: '۰۱',
          code: 'هدایت استراتژیک',
          title: 'بینش تجاری در بالاترین سطح',
          desc: 'اقتصاد واحد، حاشیه سود و اهرم‌های واقعی بیزنس تمامی تصمیمات معماری سیستم را هدایت می‌کنند.'
        },
        {
          num: '۰۲',
          code: 'تخصص‌محور',
          title: 'اجرای مستقیم توسط متخصصان ارشد',
          desc: 'تسلط عمیق بر جایگاه‌یابی، پرفورمنس مارکتینگ، CRO و برنامه‌نویسی بدون واسطه‌های غیرضروری.'
        },
        {
          num: '۰۳',
          code: 'مبتنی بر فناوری',
          title: 'خطوط خودکار داده و تله‌متری',
          desc: 'رهگیری مستقیم سرور، معماری سئو ساخت‌یافته و موتورهای الگوریتمی جذب تقاضا.'
        },
        {
          num: '۰۴',
          code: 'همگرا و توزیع‌شده',
          title: 'ریتم عملیاتی بدون اصطکاک',
          desc: 'همکاری هماهنگ و بلادرنگ حوزه‌های تخصصی در محیطی کاملاً شفاف و چابک.'
        }
      ],
      workspace: {
        image: '/assets/about/workspace.webp',
        caption: 'استودیوی مجیکنسـی // پژوهش میدانی، نگاشت سیستم‌ها و تکرار استراتژیک',
        headline: 'ارتباط مستقیم با همان ذهن‌هایی که سیستم را می‌سازند.',
        copy: 'هر خروجی حاصل بررسی مشترک و بی‌درنگ تخصص‌های همگرا در یک اتاق فکر است. بدون واسطه‌ها، بدون ارجاع به نیروهای کم‌تجربه و با مسئولیت‌پذیری کامل برای نتایج تجاری.'
      }
    },

    philosophy: {
      chapterNum: '۰۶',
      chapterTag: 'فصل ششم // منظومه باورها',
      eyebrow: 'فلسفه شرکت // آنچه عمیقاً باور داریم',
      monumentQuote: 'رشد یک کانال نیست؛ یک سیستم عامل است.',
      lead: 'بسیاری از آژانس‌ها بازاریابی دیجیتال را فهرستی از وظایف پراکنده می‌بینند: اجرای یک تبلیغ، تغییر ظاهر یک دکمه، انتشار یک مقاله. مجیکنسـی آن را یک ماشین به هم پیوسته می‌داند که هر بخش ارزش بخش‌های دیگر را چند برابر می‌کند.',
      pillars: [
        {
          num: '۰۱',
          title: 'درک عمیق کسب‌وکار',
          desc: 'ما پیش از پیشنهاد یا اجرای هر کمپین، اقتصاد واحد، ساختار حاشیه سود و گلوگاه‌های واقعی عملیاتی را موشکافی می‌کنیم.'
        },
        {
          num: '۰۲',
          title: 'شفافیت استراتژیک',
          desc: 'جایگاه متمایز برند هیاهوی بازار را می‌شکافد، قدرت قیمت‌گذاری می‌آفریند و هزینه جذب مشتری را به طور چشمگیری کاهش می‌دهد.'
        },
        {
          num: '۰۳',
          title: 'اجرای به هم پیوسته',
          desc: 'طراحی برند، مهندسی وب و جذب پرفورمنس از روز نخست تحت یک فرضیه مشترک تجاری هماهنگ می‌شوند.'
        },
        {
          num: '۰۴',
          title: 'تله‌متری و یادگیری مداوم',
          desc: 'پیروزی‌ها و شکست‌ها هر دو داده هستند. رهگیری سمت سرور حقیقت را بدون سوگیری پلتفرم‌ها آشکار کرده و سرمایه را به کانال‌های سودآور هدایت می‌کند.'
        },
        {
          num: '۰۵',
          title: 'رشد تصاعدی و خوداتکا',
          desc: 'سیستم رشدی که با هر تراکنش بیاموزد، خندقی تسخیرناپذیر می‌سازد که هزینه جذب (CAC) را کاهش داده و ارزش دوره عمر (LTV) را افزایش می‌دهد.'
        }
      ]
    },

    howWeWork: {
      chapterNum: '۰۷',
      chapterTag: 'فصل هفتم // معماری ۶ لایه',
      eyebrow: 'شیوه کار ما // پل ارتباطی متدولوژی',
      headline: 'از حقیقت کسب‌وکار تا رشد مرکب و تصاعدی.',
      lead: 'پیشرفتی منظم و پیوسته که نشان می‌دهد چگونه باورهای ما به اجرای عملیاتی تبدیل می‌شوند.',
      stages: [
        {
          num: '۰۱',
          code: 'استراتژی',
          title: 'استراتژی و اقتصاد واحد',
          desc: 'واکاوی اقتصاد واحد، شناخت ریشه‌ای موانع و پایه‌گذاری جایگاهی متمایز که تمایز فوری تجاری خلق می‌کند.'
        },
        {
          num: '۰۲',
          code: 'تجربه',
          title: 'سطح دیجیتال و تجربه کاربری',
          desc: 'مهندسی پلتفرم‌های پرچمدار بدون تأخیر، مسیرهای تبدیل بدون اصطکاک و دیزاین سیستم‌های ادیتوریال مقتدر.'
        },
        {
          num: '۰۳',
          code: 'جذب',
          title: 'جذب دقیق و هدفمند',
          desc: 'مدیریت الگوریتمی تبلیغات، معماری سئو ساخت‌یافته و تسخیر تقاضای باکیفیت با تمرکز بر اقتصاد واحد سودآور.'
        },
        {
          num: '۰۴',
          code: 'سنجش',
          title: 'تله‌متری سمت سرور',
          desc: 'راه‌اندازی سیستم ثبت داده‌های سرور و اتریبیوشن حلقه بسته برای شناخت رفتار واقعی خریدار بدون تحریف پلتفرم‌ها.'
        },
        {
          num: '۰۵',
          code: 'بهینه‌سازی',
          title: 'کالیبراسیون و ارتقای مداوم',
          desc: 'حذف پیوسته نقاط اصطکاک و بازتخصیص هوشمندانه سرمایه به کانال‌های دارای بالاترین بازدهی بر اساس داده‌های قطعی.'
        },
        {
          num: '۰۶',
          code: 'رشد',
          title: 'مقیاس‌پذیری تصاعدی',
          desc: 'ایجاد چرخه‌ای خوداتکا که در آن یادگیری انباشته می‌شود، هزینه جذب کاهش می‌یابد و ارزش بیزنس اوج می‌گیرد.'
        }
      ],
      bridgeCta: 'مشاهده معماری جامع رویکرد مجیکنسـی'
    },

    selectedExperience: {
      chapterNum: '۰۸',
      chapterTag: 'فصل هشتم // استقرارهای واقعی',
      eyebrow: 'اعتبار تجاری // پروژه‌های منتخب',
      headline: 'سیستم‌های مهندسی‌شده با تأثیر مستند در بازار.',
      lead: 'ما با گزینش هوشمندانه کارفرمایان جسور، مزیت‌های رقابتی دفاع‌پذیر و پایدار خلق می‌کنیم.',
      projects: [
        {
          id: 'organic-growth-engine',
          slug: 'organic-growth-engine',
          num: '۰۱',
          client: 'موتور رشد ارگانیک و سئو سازمانی',
          title: 'معماری سئو تکنیکال و مهندسی رشد با ۸۴.۱ هزار کلیک ارگانیک',
          category: 'زیرساخت سئو سازمانی و معماری جذب ارگانیک',
          metric: '۸۴.۱ هزار کلیک // ۵.۱۸ میلیون ایمپرشن',
          image: '/project-1.webp'
        },
        {
          id: 'atrash-store',
          slug: 'atrash-store',
          num: '۰۲',
          client: 'عطرش استور',
          title: 'موتور تبلیغات Performance Max با ROAS 11 و جذب مقیاس‌پذیر',
          category: 'تجارت الکترونیک و پرفورمنس مارکتینگ گوگل ادز',
          metric: 'بازگشت سرمایه ROAS 11 // ۱۲۲۰ خرید',
          image: '/project-2.webp'
        },
        {
          id: 'tamir-online',
          slug: 'tamir-online',
          num: '۰۳',
          client: 'تعمیر آنلاین',
          title: 'موتور لید جنریشن گوگل ادز: ۱.۲۸ میلیون ایمپرشن و ۱۳۴ هزار کلیک',
          category: 'خدمات آنلاین // لید جنریشن با حجم بالا',
          metric: '۱.۲۸ میلیون ایمپرشن // ۲۳.۴۲٪ CTR',
          image: '/project-3.webp'
        },
        {
          id: 'wine-amphorae',
          slug: 'wine-amphorae',
          num: '۰۴',
          client: 'واین آمفورا',
          title: 'طراحی وب‌سایت لوکس، تجربه کاربری برندینگ و پلتفرم دیجیتال',
          category: 'پلتفرم لوکس دیجیتال // صنایع دست‌ساز ایتالیا',
          metric: 'پلتفرم پذیرش سفارشات بین‌المللی',
          image: '/project-4.webp'
        }
      ],
      cta: 'مشاهده همه پروژه‌های مستند'
    },

    journal: {
      chapterNum: '۰۹',
      chapterTag: 'فصل نهم // مرکز بینش‌ها',
      eyebrow: 'ژورنال و مقالات // مرکز بینش‌های راهبردی',
      headline: 'وضوح استراتژیک برگرفته از سیستم‌های فعال میدان.',
      lead: 'جستارهای عمیق، واکاوی معماری سیستم‌ها و چارچوب‌های راهبردی در پرفورمنس مارکتینگ و رشد تصاعدی.',
      articles: [
        {
          id: 'article-1',
          title: 'پایان بازاریابی جزیره‌ای: چرا مرزهای کاری سرمایه شما را می‌سوزانند؟',
          category: 'سیستم‌های رشد',
          readTime: 'زمان مطالعه: ۷ دقیقه',
          summary: 'چرا مدیریت بازاریابی در قالب کانال‌های مجزا تا ۶۰٪ بودجه را هدر می‌دهد و چگونه سیستم‌های یکپارچه بازدهی مرکب می‌سازند.',
          image: '/journal-1.webp',
          slug: '/blog'
        },
        {
          id: 'article-2',
          title: 'مهندسی رشد تصاعدی: چارچوب معماری ۶ لایه',
          category: 'متدولوژی',
          readTime: 'زمان مطالعه: ۹ دقیقه',
          summary: 'راهنمای کاربردی پیوند استراتژی، تجربه کاربری، بردارهای جذب و تله‌متری سمت سرور در یک چرخه بسته.',
          image: '/journal-2.webp',
          slug: '/blog'
        }
      ],
      cta: 'ورود به ژورنال تخصصی مجیکنسـی'
    },

    collaboration: {
      chapterNum: '۱۰',
      chapterTag: 'فصل دهم // با ما بسازید',
      eyebrow: 'همکاری و توسعه // جامعه متخصصان',
      headline: 'ما با متخصصان برجسته و پیشرو می‌سازیم.',
      lead: 'مجیکنسـی پیوسته در حال گسترش شبکه نخبگان باانگیزه است. ما آگهی‌های شغلی صوری منتشر نمی‌کنیم و بوروکراسی شرکتی نداریم؛ بلکه با متخصصان ارشد، معماران فنی و شرکای استراتژیک به شکل پروژه‌ای و بلندمدت همکاری می‌کنیم.',
      areas: [
        {
          num: '۰۱',
          code: 'استراتژی',
          title: 'استراتژیست‌های رشد و تحلیل‌گران اقتصادی',
          desc: 'متخصصان اقتصاد واحد، جایگاه‌یابی بازار، مدل‌سازی حاشیه سود و عارضه‌یابی تجاری.'
        },
        {
          num: '۰۲',
          code: 'خلاقیت',
          title: 'طراحان برند و آرت دایرکتورها',
          desc: 'هنرمندان مسلط بر پلتفرم‌های پرچمدار لوکس، دیزاین سیستم‌های تایپوگرافیک و جهان‌های برند.'
        },
        {
          num: '۰۳',
          code: 'مهندسی',
          title: 'مهندسان فول‌استک و متخصصان سئو فنی',
          desc: 'معماران پلتفرم‌های مدرن وب، پایپ‌لاین‌های اختصاصی تبدیل و سیستم‌های سئو ساخت‌یافته.'
        },
        {
          num: '۰۴',
          code: 'پرفورمنس',
          title: 'متخصصان پرفورمنس و تبلیغات الگوریتمی',
          desc: 'کارشناسان مسلط بر Performance Max، کمپین‌های با اینتنت بالا و تله‌متری سمت سرور.'
        }
      ],
      cta: 'آغاز گفتگوی همکاری',
      contact: 'COLLABORATE@MAGICENCY.COM'
    },

    // FAQ (HOMEPAGE SUPPORT)
    faq: FAQ_DATA.fa,

    finalCta: {
      chapterNum: '۱۱',
      chapterTag: 'فصل یازدهم // آغاز مسیر',
      eyebrow: 'نتیجه‌گیری و اقدام // گام بعدی',
      headlinePart1: 'رشد یک سیستم عامل است.',
      headlinePart2: 'موتور محرک آن را مهندسی کنید.',
      lead: 'اگر بازاریابی دیجیتال شما در حال حاضر به عنوان مجموعه‌ای از اقدامات گسسته عمل می‌کند، گام بعدی واکاوی سیستم و اتصال اهرم‌هایی است که رشد مرکب خلق می‌کنند.',
      ctaButton: 'آغاز گفتگوی استراتژیک',
      secondaryAction: 'مشاهده نمونه‌کارهای مستند',
      badge: 'مشاوره راهبردی و تشخیصی // ۲۰۲۶',
      directContact: 'تماس مستقیم: HELLO@MAGICENCY.COM'
    }
  }
};
