import { PROJECTS_DATA } from './projectsData';

/**
 * MAGICENCY ABOUT DATA — 9-CHAPTER EDITORIAL ARCHITECTURE
 * 
 * Chapter Progression:
 * 01 — WHO WE ARE
 * 02 — THE BELIEF
 * 03 — THE MAGICENCY SYSTEM
 * 04 — WHAT WE BRING (CAPABILITIES)
 * 05 — OUR APPROACH
 * 06 — PROOF
 * 07 — THE PEOPLE
 * 08 — FAQ
 * 09 — FINAL CTA
 */

export const ABOUT_DATA = {
  en: {
    // Navigator labels for desktop sticky rail
    navigator: [
      { id: 'section-01', num: '01', label: 'WHO WE ARE' },
      { id: 'section-02', num: '02', label: 'THE BELIEF' },
      { id: 'section-03', num: '03', label: 'THE SYSTEM' },
      { id: 'section-04', num: '04', label: 'CAPABILITIES' },
      { id: 'section-05', num: '05', label: 'OUR APPROACH' },
      { id: 'section-06', num: '06', label: 'PROOF' },
      { id: 'section-07', num: '07', label: 'THE PEOPLE' },
      { id: 'section-08', num: '08', label: 'FAQ' },
      { id: 'section-09', num: '09', label: 'MOMENTUM' }
    ],

    // 01 — WHO WE ARE
    hero: {
      chapterNum: '01',
      chapterTag: 'CHAPTER 01 // IDENTITY & ORIENTATION',
      eyebrow: 'ABOUT MAGICENCY®',
      headlinePart1: 'WE DON’T JUST RUN CAMPAIGNS.',
      headlinePart2: 'WE BUILD MOMENTUM.',
      subline: 'Marketing is broken into silos that cancel each other out. We engineer unified growth systems that compound over time.',
      editorialQuote: '“Growth stops being accidental when strategy, creative, and engineering share the same feedback loop.”',
      telemetry: {
        discipline: 'PERFORMANCE INTELLIGENCE',
        focus: 'DETERMINISTIC GROWTH ARCHITECTURE',
        status: 'SYSTEM DEPLOYED // 2026',
        coords: '35.6892° N / 51.3890° E'
      }
    },

    // 02 — THE BELIEF
    belief: {
      chapterNum: '02',
      chapterTag: 'CHAPTER 02 // PHILOSOPHICAL FOUNDATION',
      eyebrow: 'THE BELIEF',
      statementLine1: 'WE DON’T BELIEVE IN',
      statementLine2: 'DISCONNECTED MARKETING.',
      lead: 'Most brands lose momentum not because their ads are bad or their tech is outdated, but because every decision lives in a vacuum.',
      thesis: 'When strategy, creative, performance, technology, and data operate as five separate silos, capital leaks at every boundary. Connect them, and you unlock compounding commercial leverage.',
      toggleSilos: 'DISCONNECTED SILOS',
      toggleSystem: 'ONE CONNECTED SYSTEM',
      systemThesis: 'A closed feedback loop where every market interaction immediately informs the next strategic allocation.',
      fragments: [
        {
          id: 'strategy',
          num: '01',
          name: 'Strategy',
          isolatedIssue: 'Formulated in theoretical decks without contact with market execution.',
          connectedRole: 'Governs capital allocation, unit economics, and defensible positioning.',
          icon: 'Compass'
        },
        {
          id: 'creative',
          num: '02',
          name: 'Creative',
          isolatedIssue: 'Evaluated solely on subjective taste instead of commercial leverage.',
          connectedRole: 'Communicates advantage, punctures category fatigue, and drives conversion.',
          icon: 'Sparkles'
        },
        {
          id: 'performance',
          num: '03',
          name: 'Performance',
          isolatedIssue: 'Burns ad budgets buying fleeting impressions without buyer journey context.',
          connectedRole: 'Scales proven propositions and captures high-intent commercial demand.',
          icon: 'Activity'
        },
        {
          id: 'technology',
          num: '04',
          name: 'Technology',
          isolatedIssue: 'Over-engineered in technical isolation, causing severe onboarding friction.',
          connectedRole: 'Engineers zero-latency digital experiences and frictionless buyer velocity.',
          icon: 'Cpu'
        },
        {
          id: 'data',
          num: '05',
          name: 'Data & Feedback',
          isolatedIssue: 'Rearview mirror vanity dashboards that never change an operational decision.',
          connectedRole: 'Provides deterministic telemetry to steer the next high-leverage move.',
          icon: 'Database'
        }
      ]
    },

    // 03 — THE MAGICENCY SYSTEM
    system: {
      chapterNum: '03',
      chapterTag: 'CHAPTER 03 // OPERATING ENGINE',
      eyebrow: 'THE MAGICENCY SYSTEM',
      title: 'A continuous loop of compounding leverage.',
      subtitle: 'Growth is not an isolated sprint. It is a systematic feedback protocol that evolves as your business learns.',
      stages: [
        {
          num: '01',
          code: 'DIAGNOSE',
          title: 'Deconstruct the Real Constraint',
          lead: 'We do not accept the brief at surface level. We interrogate unit economics, margin structures, and conversion bottlenecks.',
          detail: 'Clients often ask for more ad spend when their positioning is fuzzy or onboarding friction is hemorrhaging 60% of buyers. We diagnose before prescribing.',
          artifact: 'Friction & Margin Audit Matrix',
          telemetryState: 'DIAGNOSTIC TELEMETRY: ACTIVE'
        },
        {
          num: '02',
          code: 'DEFINE',
          title: 'Uncontested Market Positioning',
          lead: 'Carve a defensible position that competitors cannot easily mimic or commoditize.',
          detail: 'If your value proposition requires a paragraph to explain, you will overpay for every single click. We construct sharp, polarized brand authority.',
          artifact: 'Commercial Value Architecture',
          telemetryState: 'POSITIONING CONVICTION: HIGH'
        },
        {
          num: '03',
          code: 'ARCHITECT',
          title: 'Connected Experience & Tech',
          lead: 'Build the digital surface where attention converts into commercial commitment.',
          detail: 'From frictionless onboarding UX to editorial design systems and headless digital flagships, we eliminate every drop of friction between intent and transaction.',
          artifact: 'Next-Gen Digital Platform',
          telemetryState: 'LATENCY PROFILE: ZERO'
        },
        {
          num: '04',
          code: 'DEPLOY',
          title: 'Precision Acquisition Vectors',
          lead: 'Targeted distribution engineered for high-intent buyers rather than vanity impressions.',
          detail: 'Multi-touch demand generation that aligns paid media, inbound organic authority, and retention funnels into one coordinated commercial engine.',
          artifact: 'High-Intent Pipeline Engine',
          telemetryState: 'ACQUISITION VELOCITY: NOMINAL'
        },
        {
          num: '05',
          code: 'LEARN',
          title: 'Deterministic Telemetry Loops',
          lead: 'First-party server-side intelligence that captures reality without platform bias.',
          detail: 'Wins and losses are both telemetry. Every transaction, drop-off, and customer action is fed back into the core model to improve the next allocation.',
          artifact: 'Server-Side Attribution Feed',
          telemetryState: 'CLOSED-LOOP ATTRIBUTION: 100%'
        },
        {
          num: '06',
          code: 'SCALE',
          title: 'Autonomous Compounding Growth',
          lead: 'When the loop is closed, scale becomes predictable and defensible.',
          detail: 'Every dollar invested yields compound learning, lowering customer acquisition cost while accelerating lifetime customer value.',
          artifact: 'Compounding Growth Flywheel',
          telemetryState: 'SYSTEM STATUS: COMPOUNDING'
        }
      ]
    },

    // 04 — WHAT WE BRING (CAPABILITIES)
    capabilities: {
      chapterNum: '04',
      chapterTag: 'CHAPTER 04 // CAPABILITY INDEX',
      eyebrow: 'WHAT WE BRING',
      title: 'Five convergent disciplines. Zero silos.',
      lead: 'We do not sell isolated design hours or media buys. We bring an integrated stack designed to move commercial needles.',
      items: [
        {
          num: '01',
          code: 'STRATEGY',
          name: 'Business & Brand Positioning',
          role: 'Defining high-conviction market positioning and transforming credibility into an acquisition system.',
          deliverables: PROJECTS_DATA[4].services.en,
          proofTag: 'ZARIN REAL ESTATE // Investment Positioning',
          previewImage: PROJECTS_DATA[4].media.primary,
          alt: 'Zarin Real Estate — High-Intent Dubai Investment Positioning Case Study',
          slug: PROJECTS_DATA[4].slug
        },
        {
          num: '02',
          code: 'CREATIVE',
          name: 'Editorial Art Direction & Design',
          role: 'Crafting signature brand worlds and heritage digital platforms that command respect and convert.',
          deliverables: PROJECTS_DATA[3].services.en,
          proofTag: 'WINE AMPHORAE // Luxury Digital Flagship',
          previewImage: PROJECTS_DATA[3].media.primary,
          alt: 'Wine Amphorae — Luxury Italian Terracotta Digital Flagship Case Study',
          slug: PROJECTS_DATA[3].slug
        },
        {
          num: '03',
          code: 'PERFORMANCE',
          name: 'High-Velocity Acquisition & ROAS',
          role: 'Engineered algorithmic media buying focused strictly on sustainable unit economics and profitable scale.',
          deliverables: PROJECTS_DATA[1].services.en,
          proofTag: 'ATRASH STORE // Audited ROAS 11 Engine',
          previewImage: PROJECTS_DATA[1].media.primary,
          alt: 'Atrash Store — Google Ads Performance Max ROAS 11 Case Study',
          slug: PROJECTS_DATA[1].slug
        },
        {
          num: '04',
          code: 'TECHNOLOGY',
          name: 'Inbound Search Infrastructure',
          role: 'High-throughput intent capture engineering built for speed, call tracking, and multi-city scale.',
          deliverables: PROJECTS_DATA[2].services.en,
          proofTag: 'TAMIR ONLINE // 1.28M Impressions & 134K Clicks',
          previewImage: PROJECTS_DATA[2].media.primary,
          alt: 'Tamir Online — Search Ads Lead Gen & 1.28M Impressions Case Study',
          slug: PROJECTS_DATA[2].slug
        },
        {
          num: '05',
          code: 'DATA & FEEDBACK',
          name: 'Telemetry & Organic Growth Engine',
          role: 'Server-side tracking infrastructure and programmatic index architecture that drives compounding traffic.',
          deliverables: PROJECTS_DATA[0].services.en,
          proofTag: 'GOOGLE SEARCH CONSOLE // 84.1K Verified Clicks',
          previewImage: PROJECTS_DATA[0].media.primary,
          alt: 'Enterprise Search & Intent Engine — Programmatic SEO & 84.1K Click Scale Case Study',
          slug: PROJECTS_DATA[0].slug
        }
      ]
    },

    // 05 — OUR APPROACH
    approach: {
      chapterNum: '05',
      chapterTag: 'CHAPTER 05 // SYSTEMATIC WORKFLOW',
      eyebrow: 'OUR APPROACH',
      title: 'A disciplined progression from problem to compounding system.',
      lead: 'We avoid bloated committee meetings and endless slide decks. Every phase delivers tangible commercial architecture.',
      steps: [
        {
          num: '01',
          title: 'Deconstruct the Brief',
          tag: 'UNCOVER ROOT CAUSES',
          desc: 'Clients arrive asking for tactical fixes. We look beneath the symptom to uncover the structural bottleneck in messaging, pricing, or experience.'
        },
        {
          num: '02',
          title: 'Align the Strategy',
          tag: 'ELIMINATE AMBIGUITY',
          desc: 'We map the precise commercial levers: who we are targeting, why they must choose you, and the unit economics required for sustainable scale.'
        },
        {
          num: '03',
          title: 'Engineer the Platform',
          tag: 'ZERO-LATENCY CRAFT',
          desc: 'We design and build the complete digital surface—interfaces, messaging, and data pipelines—with obsessive typographic and architectural precision.'
        },
        {
          num: '04',
          title: 'Deploy to Market',
          tag: 'REALITY TESTING',
          desc: 'We launch into the real world with immediate first-party telemetry tracking real consumer behavior, not speculative vanity metrics.'
        },
        {
          num: '05',
          title: 'Compound & Iterate',
          tag: 'CONTINUOUS LEVERAGE',
          desc: 'Telemetry feeds directly into the next sprint. Weak touchpoints are eliminated; high-performing vectors are amplified.'
        }
      ]
    },

    // 06 — PROOF
    proof: {
      chapterNum: '06',
      chapterTag: 'CHAPTER 06 // VERIFIED OUTCOMES',
      eyebrow: 'VERIFIED PROOF',
      title: 'Reality wins over agency claims.',
      lead: 'We do not invent vanity awards or fictitious follower counts. Our track record is documented in real architectural deployments.',
      metrics: [
        {
          num: '-70%',
          label: 'ONBOARDING FRICTION',
          client: 'Velox Financial',
          detail: 'Replaced a fragmented onboarding funnel with a 3-step biometric verification engine, accelerating active trader deposits.'
        },
        {
          num: '100%',
          label: 'SERVER TELEMETRY',
          client: 'Nexus Health',
          detail: 'Deployed HIPAA-compliant server-side event tracking, restoring complete cross-channel attribution without ad-blocker loss.'
        },
        {
          num: '3x',
          label: 'ENTERPRISE VELOCITY',
          client: 'Synapse AI',
          detail: 'Reframed positioning from generic AI tool to Enterprise Decision Intelligence, compressing enterprise sales friction.'
        },
        {
          num: '5+',
          label: 'FLAGSHIP DEPLOYMENTS',
          client: 'Active Case Studies',
          detail: 'End-to-end growth operating systems engineered across fintech, digital health, luxury D2C, and enterprise SaaS.'
        }
      ],
      caseStudyNote: 'EVERY METRIC BACKED BY SYSTEM ARCHITECTURE AND TELEMETRY'
    },

    // 07 — THE PEOPLE
    people: {
      chapterNum: '07',
      chapterTag: 'CHAPTER 07 // THE HUMAN LAYER',
      eyebrow: 'THE PEOPLE BEHIND THE WORK',
      title: 'Strategic rigor meets relentless craft.',
      lead: 'Magicency is led by thinkers and builders who share accountability for the commercial outcome.',
      leadMember: {
        name: 'Mehdi Safdari',
        role: 'Growth Architect & Strategic Lead',
        badge: 'LEADERSHIP // SYSTEM ARCHITECTURE',
        bio: 'Directs high-level business strategy, system architecture, and client partnerships. Focused on engineering defensible growth systems where creative conviction and technical precision converge.',
        image: '/assets/about/portrait.jpg',
        alt: 'Mehdi Safdari — Growth Architect & Strategic Lead at Magicency'
      },
      workspace: {
        caption: 'RESEARCH, SYSTEMS MAPPING & STRATEGIC ITERATION',
        image: '/assets/about/workspace.jpg',
        headline: 'Architected on reality, not guesswork.',
        copy: 'Every output stems from convergent disciplines interrogating problems together in real-time. No junior handoffs. No agency fluff.'
      },
      disciplines: [
        {
          num: '01',
          code: 'BUSINESS ARCHITECTURE',
          title: 'Strategy & Unit Economics',
          desc: 'Diagnosing market levers, operational friction, and competitive moats.'
        },
        {
          num: '02',
          code: 'CREATIVE ENGINEERING',
          title: 'Design & Visual Systems',
          desc: 'Crafting brand identities and UI architectures designed to withstand market scrutiny.'
        },
        {
          num: '03',
          code: 'PERFORMANCE INFRASTRUCTURE',
          title: 'Digital & Growth Engines',
          desc: 'Building scalable conversion funnels and resilient technical stacks.'
        },
        {
          num: '04',
          code: 'CONTINUOUS INTELLIGENCE',
          title: 'Data & Telemetry Loops',
          desc: 'Transforming telemetry, customer actions, and feedback into strategic clarity.'
        }
      ]
    },

    // 08 — FAQ
    faq: {
      chapterNum: '08',
      chapterTag: 'CHAPTER 08 // CLARITY & TRANSPARENCY',
      eyebrow: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Clear answers to strategic questions.',
      lead: 'Before engaging with us, here is what you need to know about how we operate, who we work with, and what we stand for.',
      items: [
        {
          id: 'faq-1',
          question: 'What does MAGICENCY actually do?',
          answer: 'We engineer connected growth systems for ambitious businesses. Instead of operating as a traditional advertising agency or isolated dev shop, we integrate business strategy, brand design, digital engineering, and performance acquisition into one continuous feedback loop that drives real enterprise value.'
        },
        {
          id: 'faq-2',
          question: 'Who do you work with?',
          answer: 'We partner with ambitious founders, executives, and marketing leaders who are ready to build a defensible market position. Typical partners include venture-backed startups scaling from seed to Series B, established brands undergoing digital transformation, and enterprises whose customer acquisition has hit a ceiling.'
        },
        {
          id: 'faq-3',
          question: 'Do you only run paid advertising campaigns?',
          answer: 'No. Paid acquisition without a clear positioning moat or a high-converting digital experience simply burns capital. We treat paid media as one component of a broader operating engine that includes brand authority, technical CRO, organic search moats, and customer retention loops.'
        },
        {
          id: 'faq-4',
          question: 'Do you handle both high-level strategy and technical execution?',
          answer: 'Yes, and this is our core advantage. Strategy without execution is purely academic; execution without strategy is expensive noise. We architect the overarching commercial roadmap and directly design, engineer, and deploy the digital products and performance funnels.'
        },
        {
          id: 'faq-5',
          question: 'How does an engagement typically begin?',
          answer: 'Every engagement starts with a Diagnostic Deep Dive. We examine your current unit economics, customer journey drop-offs, attribution reliability, and competitive positioning. Only once we have identified the true high-leverage constraint do we design a customized operating roadmap.'
        },
        {
          id: 'faq-6',
          question: 'How do you measure and attribute success?',
          answer: 'We agree upon clear commercial indicators before writing a single line of code or launching a single campaign—such as CAC reduction, activation rate, pipeline velocity, or net revenue expansion. We establish first-party server telemetry so results are verified without guesswork.'
        }
      ]
    },

    // 09 — FINAL CTA
    finalCta: {
      chapterNum: '09',
      chapterTag: 'CHAPTER 09 // CONCLUSION & INITIATION',
      eyebrow: 'THE CONCLUSION',
      headlinePart1: 'READY TO CREATE',
      headlinePart2: 'MOMENTUM?',
      lead: 'Let’s look underneath the current brief. We’ll audit your growth bottlenecks and outline an operating system that moves your business forward.',
      ctaButton: 'START A CONVERSATION',
      secondaryAction: 'EXPLORE OUR WORK',
      badge: 'STRATEGIC CONSULTATION // 2026',
      directContact: 'DIRECT LINE: HELLO@MAGICENCY.COM'
    }
  },

  // PERSIAN (FA) — RTL
  fa: {
    navigator: [
      { id: 'section-01', num: '۰۱', label: 'هویت ما' },
      { id: 'section-02', num: '۰۲', label: 'باور بنیادی' },
      { id: 'section-03', num: '۰۳', label: 'سیستم مجیکنسـی' },
      { id: 'section-04', num: '۰۴', label: 'توانمندی‌ها' },
      { id: 'section-05', num: '۰۵', label: 'رویکرد ما' },
      { id: 'section-06', num: '۰۶', label: 'اثبات و نتایج' },
      { id: 'section-07', num: '۰۷', label: 'انسان‌ها' },
      { id: 'section-08', num: '۰۸', label: 'پرسش‌های متداول' },
      { id: 'section-09', num: '۰۹', label: 'آغاز شتاب' }
    ],

    hero: {
      chapterNum: '۰۱',
      chapterTag: 'فصل اول // هویت و رویکرد',
      eyebrow: 'درباره مجیکنسـی (MAGICENCY®)',
      headlinePart1: 'ما فقط کمپین اجرا نمی‌کنیم.',
      headlinePart2: 'ما شتاب پایدار می‌سازیم.',
      subline: 'بازاریابی به جزیره‌های پراکنده‌ای تبدیل شده که اثر یکدیگر را خنثی می‌کنند. ما سیستم‌های یکپارچه رشدی را مهندسی می‌کنیم که در گذر زمان ارزش مرکب خلق می‌کنند.',
      editorialQuote: '«هنگامی که استراتژی، خلاقیت و مهندسی در یک حلقه بازخورد مشترک قرار گیرند، رشد دیگر یک تصادف نخواهد بود.»',
      telemetry: {
        discipline: 'هوشمندی پرفورمنس',
        focus: 'معماری قطعی رشد',
        status: 'سیستم فعال // ۲۰۲۶',
        coords: '۳۵.۶۸۹۲° شمالی / ۵۱.۳۸۹۰° شرقی'
      }
    },

    belief: {
      chapterNum: '۰۲',
      chapterTag: 'فصل دوم // شالوده فلسفی',
      eyebrow: 'باور بنیادی ما',
      statementLine1: 'ما به بازاریابی گسسته',
      statementLine2: 'و جزیره‌ای باور نداریم.',
      lead: 'بسیاری از برندها نه به خاطر کیفیت پایین تبلیغات، بلکه به این دلیل شتاب خود را از دست می‌دهند که هر تصمیم بازاریابی در انزوای کامل گرفته می‌شود.',
      thesis: 'وقتی استراتژی، خلاقیت، پرفورمنس، فناوری و داده در پنج جزیره جدا از هم کار کنند، سرمایه در هر مرز تلف می‌شود. آن‌ها را به هم پیوند دهید تا اهرم رشد مرکب آزاد شود.',
      toggleSilos: 'جزیره‌های پراکنده',
      toggleSystem: 'یک سیستم یکپارچه',
      systemThesis: 'یک چرخه بازخورد پیوسته که در آن هر تعامل بازار، بلافاصله تصمیم راهبردی بعدی را بهینه‌تر می‌سازد.',
      fragments: [
        {
          id: 'strategy',
          num: '۰۱',
          name: 'استراتژی',
          isolatedIssue: 'تدوین در اسلایدهای تئوریک بدون تماس مستقیم با واقعیت اجرای بازار.',
          connectedRole: 'جهت‌دهی به تخصیص سرمایه، اقتصاد واحد و جایگاه متمایز برند.',
          icon: 'Compass'
        },
        {
          id: 'creative',
          num: '۰۲',
          name: 'خلاقیت',
          isolatedIssue: 'قضاوت صرفاً بر پایه سلیقه و زیبایی بصری بدون توجه به اهرم تجاری.',
          connectedRole: 'انتقال مزیت رقابتی، شکستن هیاهوی بازار و ترغیب به اقدام خرید.',
          icon: 'Sparkles'
        },
        {
          id: 'performance',
          num: '۰۳',
          name: 'پرفورمنس',
          isolatedIssue: 'اتلاف بودجه‌های تبلیغاتی برای خرید نمایش‌های مقطعی بدون درک مسیر مخاطب.',
          connectedRole: 'مقیاس‌بخشی به ارزش اثبات‌شده و جذب مخاطبان با تمایل خرید بالا.',
          icon: 'Activity'
        },
        {
          id: 'technology',
          num: '۰۴',
          name: 'فناوری و وب',
          isolatedIssue: 'توسعه پیچیده در انزوای فنی که اصطکاک و ریزش شدید کاربران را رقم می‌زند.',
          connectedRole: 'مهندسی تجربه‌های دیجیتال بدون تأخیر و تسریع مسیر خرید مشتری.',
          icon: 'Cpu'
        },
        {
          id: 'data',
          num: '۰۵',
          name: 'داده و تله‌متری',
          isolatedIssue: 'داشبوردهای نمایشی از گذشته که هرگز در تغییر یک تصمیم عملیاتی نقش ندارند.',
          connectedRole: 'ارائه تله‌متری قطعی و شفاف برای هدایت هوشمندانه تصمیمات بعدی.',
          icon: 'Database'
        }
      ]
    },

    system: {
      chapterNum: '۰۳',
      chapterTag: 'فصل سوم // موتور عملیاتی',
      eyebrow: 'سیستم مجیکنسـی',
      title: 'چرخه پیوسته اهرم‌های رشد مرکب.',
      subtitle: 'رشد یک تلاش مقطعی و جداگانه نیست؛ یک پروتکل یادگیری مستمر است که همراه با بیزنس شما تکامل می‌یابد.',
      stages: [
        {
          num: '۰۱',
          code: 'تشخیص (DIAGNOSE)',
          title: 'واکاوی و ریشه‌یابی گلوگاه واقعی',
          lead: 'ما بریف اولیه را به عنوان حقیقت مطلق نمی‌پذیریم. اقتصاد واحد، حاشیه سود و گلوگاه‌های تبدیل را موشکافی می‌کنیم.',
          detail: 'کسب‌وکارها معمولاً تقاضای تبلیغات بیشتر دارند در حالی که وضوح جایگاه‌یابی ضعیف است یا اصطکاک ثبت‌نام بیش از ۶۰٪ لیدها را از بین می‌برد.',
          artifact: 'ماتریس ممیزی حاشیه و اصطکاک',
          telemetryState: 'تله‌متری تشخیصی: فعال'
        },
        {
          num: '۰۲',
          code: 'تعریف (DEFINE)',
          title: 'تثبیت جایگاه رقابتی دست‌نیافتنی',
          lead: 'خلق موقعیتی در ذهن بازار که رقبا نتوانند به سادگی از آن کپی‌برداری کنند.',
          detail: 'اگر توضیح ارزش پیشنهادی شما نیازمند یک پاراگراف طولانی باشد، هزینه سنگینی برای هر کلیک خواهید پرداخت. ما شفافیت و اقتدار برند را مهندسی می‌کنیم.',
          artifact: 'معماری ارزش و جایگاه بازار',
          telemetryState: 'اطمینان جایگاه‌یابی: بالا'
        },
        {
          num: '۰۳',
          code: 'معماری (ARCHITECT)',
          title: 'زیرساخت تجربه دیجیتال و فناوری',
          lead: 'ساخت سطحی از تعامل که توجه را مستقیماً به تعهد تجاری و خرید تبدیل می‌کند.',
          detail: 'از آنبردینگ ۳ مرحله‌ای بدون اصطکاک تا دیزاین سیستم ادیتوریال و پلتفرم‌های پرچمدار، هر عاملی که مانع تبدیل مخاطب به مشتری شود را حذف می‌کنیم.',
          artifact: 'پلتفرم دیجیتال نسل بعد',
          telemetryState: 'شاخص تأخیر: صفر'
        },
        {
          num: '۰۴',
          code: 'استقرار (DEPLOY)',
          title: 'موتور جذب هدفمند و باکیفیت',
          lead: 'توزیع حساب‌شده پیام برای خریداران با تمایل بالا، نه صرفاً نمایش‌های بدون نتیجه.',
          detail: 'همگرایی تبلیغات الگوریتمی، جذب ارگانیک و قیف‌های حفظ مشتری در یک موتور عملیاتی هماهنگ.',
          artifact: 'پایپ‌لاین لیدهای هدفمند',
          telemetryState: 'سرعت جذب: بهینه'
        },
        {
          num: '۰۵',
          code: 'یادگیری (LEARN)',
          title: 'حلقه‌های تله‌متری و داده‌های قطعی',
          lead: 'هوشمندی دست‌اول سمت سرور که رفتار واقعی مخاطب را بدون سوگیری پلتفرم‌ها آشکار می‌کند.',
          detail: 'موفقیت‌ها و ریزش‌ها هر دو داده‌های تله‌متری هستند. هر تعامل و خرید مجدداً به سیستم بازمی‌گردد تا تصمیم بعدی بهینه‌تر شود.',
          artifact: 'فید اتریبیوشن اختصاصی سرور',
          telemetryState: 'اتریبیوشن حلقه بسته: ۱۰۰٪'
        },
        {
          num: '۰۶',
          code: 'مقیاس (SCALE)',
          title: 'رشد تصاعدی و خوداتکا',
          lead: 'وقتی حلقه بازخورد بسته شد، مقیاس‌پذیری قابل پیش‌بینی و مدافع‌پذیر می‌شود.',
          detail: 'هر ریال سرمایه‌گذاری یادگیری مرکب می‌سازد، هزینه جذب مشتری (CAC) را کاهش داده و ارزش دوره عمر مشتری (LTV) را تصاعدی می‌کند.',
          artifact: 'چرخ‌دنده رشد مرکب',
          telemetryState: 'وضعیت سیستم: رشد تصاعدی'
        }
      ]
    },

    capabilities: {
      chapterNum: '۰۴',
      chapterTag: 'فصل چهارم // فهرست توانمندی‌ها',
      eyebrow: 'آنچه به میدان می‌آوریم',
      title: 'پنج حوزه تخصصی همگرا. بدون مرزهای سنتی.',
      lead: 'ما ساعت کاری طراحی یا خرید رسانه‌ای به صورت مجزا نمی‌فروشیم؛ ما یک سیستم کامل برای تکان دادن اعداد تجاری شما ارائه می‌دهیم.',
      items: [
        {
          num: '۰۱',
          code: 'استراتژی',
          name: 'استراتژی کسب‌وکار و جایگاه‌یابی برند',
          role: 'تعیین قلمرو رقابتی برند و تبدیل سال‌ها تجربه و اعتبار به سیستم منسجم جذب سرمایه‌گذار.',
          deliverables: PROJECTS_DATA[4].services.fa,
          proofTag: 'املاک زرین دبی // جایگاه‌یابی استراتژیک سرمایه‌گذاری',
          previewImage: PROJECTS_DATA[4].media.primary,
          alt: 'املاک زرین دبی — جایگاه‌یابی استراتژیک سرمایه‌گذاری و سیستم جذب لید ملکی',
          slug: PROJECTS_DATA[4].slug
        },
        {
          num: '۰۲',
          code: 'خلاقیت',
          name: 'آرت دایرکشن و سیستم‌های دیزاین',
          role: 'خلق جهان‌های بصری اصیل و پلتفرم‌های پرچمدار دیجیتال که اعتماد عمیق و پرستیژ ماندگار می‌سازند.',
          deliverables: PROJECTS_DATA[3].services.fa,
          proofTag: 'واین آمفورا // پلتفرم پرچمدار لوکس',
          previewImage: PROJECTS_DATA[3].media.primary,
          alt: 'واین آمفورا — طراحی وب‌سایت لوکس، تجربه کاربری برندینگ و پلتفرم دیجیتال آمفورا',
          slug: PROJECTS_DATA[3].slug
        },
        {
          num: '۰۳',
          code: 'پرفورمنس',
          name: 'جذب شتابان و بهینه‌سازی نرخ تبدیل (CRO)',
          role: 'مدیریت الگوریتمی بودجه تبلیغاتی با تمرکز ویژه بر بازگشت سرمایه، بهینه‌سازی نرخ تبدیل و سودآوری.',
          deliverables: PROJECTS_DATA[1].services.fa,
          proofTag: 'عطرش استور // موتور تبلیغات با ROAS 11',
          previewImage: PROJECTS_DATA[1].media.primary,
          alt: 'عطرش استور — موتور تبلیغات Performance Max با ROAS 11 و جذب مقیاس‌پذیر',
          slug: PROJECTS_DATA[1].slug
        },
        {
          num: '۰۴',
          code: 'فناوری',
          name: 'زیرساخت جذب تقاضا و مقیاس‌پذیری ورودی',
          role: 'مهندسی فنی جذب ورودی با حجم بالا، کال ترکینگ بی‌درنگ و پوشش خدمات در مقیاس چند شهر.',
          deliverables: PROJECTS_DATA[2].services.fa,
          proofTag: 'تعمیر آنلاین // ۱.۲۸ میلیون ایمپرشن و ۱۳۴ هزار کلیک',
          previewImage: PROJECTS_DATA[2].media.primary,
          alt: 'تعمیر آنلاین — موتور لید جنریشن گوگل ادز با ۱.۲۸ میلیون ایمپرشن و ۱۳۴ هزار کلیک',
          slug: PROJECTS_DATA[2].slug
        },
        {
          num: '۰۵',
          code: 'داده و تله‌متری',
          name: 'موتورهای رهگیری، اتریبیوشن و سئو سازمانی',
          role: 'زیرساخت ثبت داده‌های سمت سرور و معماری فنی سئو ساخت‌یافته برای ایجاد رشد ارگانیک مرکب و مدافع‌پذیر.',
          deliverables: PROJECTS_DATA[0].services.fa,
          proofTag: 'سرچ کنسول گوگل // ۸۴.۱ هزار کلیک ارگانیک',
          previewImage: PROJECTS_DATA[0].media.primary,
          alt: 'موتور رشد ارگانیک و سئو سازمانی — معماری سئو تکنیکال و مهندسی رشد با ۸۴.۱ هزار کلیک',
          slug: PROJECTS_DATA[0].slug
        }
      ]
    },

    approach: {
      chapterNum: '۰۵',
      chapterTag: 'فصل پنجم // روند اجرای منظم',
      eyebrow: 'رویکرد عملیاتی ما',
      title: 'پیشرفتی منظم و پیوسته از شناخت مسئله تا سیستمی تصاعدی.',
      lead: 'ما از جلسات فرسایشی طولانی و اسلایدهای بی‌نتیجه دوری می‌کنیم. هر گام خروجی ساختاریافته و قابل اتکا ارائه می‌دهد.',
      steps: [
        {
          num: '۰۱',
          title: 'واکاوی عمیق بریف',
          tag: 'کشف ریشه‌های ساختاری',
          desc: 'مشتریان معمولاً راهکارهای مقطعی را مطالبه می‌کنند. ما لایه‌های زیرین را می‌کاویم تا ریشه اصلی ضعف در پیام، قیمت‌گذاری یا تجربه را آشکار کنیم.'
        },
        {
          num: '۰۲',
          title: 'هم‌راستاسازی استراتژی',
          tag: 'رفع کامل ابهامات',
          desc: 'تعیین اهرم‌های دقیق اقتصادی: چه کسانی را هدف قرار می‌دهیم، چرا باید شما را برگزینند و چه اقتصاد واحدی برای پایداری رشد لازم است.'
        },
        {
          num: '۰۳',
          title: 'مهندسی پلتفرم و محصول',
          tag: 'ظرافت در حد کمال',
          desc: 'طراحی و ساخت کامل سطوح دیجیتال—رابط‌های کاربری، پیام‌رسانی و خطوط انتقال داده—با وسواس فنی و ادیتوریال.'
        },
        {
          num: '۰۴',
          title: 'استقرار در بازار واقعی',
          tag: 'آزمون در برابر حقیقت بازار',
          desc: 'راه‌اندازی سیستم در بازار با رهگیری تله‌متری دست‌اول که رفتارهای واقعی مخاطبان را به تصویر می‌کشد، نه آمار و ارقام سطحی.'
        },
        {
          num: '۰۵',
          title: 'رشد مرکب و تکرار سریع',
          tag: 'اهرم یادگیری مداوم',
          desc: 'تله‌متری مستقیماً برنامه اسپرینت بعدی را می‌سازد. نقاط ضعف برطرف شده و کانال‌های پربازده با شتاب تقویت می‌شوند.'
        }
      ]
    },

    proof: {
      chapterNum: '۰۶',
      chapterTag: 'فصل ششم // نتایج اثبات‌شده',
      eyebrow: 'سند اثبات عملکرد',
      title: 'حقیقت بازار بر هر ادعایی پیروز است.',
      lead: 'ما جوایز ساختگی یا فالوئرهای جعلی تولید نمی‌کنیم. کارنامه ما در استقرارهای واقعی و معماری سیستم‌های عملیاتی ثبت شده است.',
      metrics: [
        {
          num: '۷۰٪-',
          label: 'کاهش اصطکاک آنبردینگ',
          client: 'فین‌تک ولوکس (Velox)',
          detail: 'جایگزینی فرآیند پرریزش ثبت‌نام با سیستم احراز هویت ۳ مرحله‌ای آنی و افزایش چشمگیر حجم واریزی معامله‌گران فعال.'
        },
        {
          num: '۱۰۰٪',
          label: 'تله‌متری سمت سرور',
          client: 'نکسوس سلامت (Nexus)',
          detail: 'پیاده‌سازی رهگیری اختصاصی سمت سرور مطابق استاندارد سلامت و بازیابی کامل دقت رهگیری بدون مسدودی ادبلاکرها.'
        },
        {
          num: '۳ برابر',
          label: 'شتاب فروش سازمانی',
          client: 'سیناپس هوش مصنوعی (Synapse)',
          detail: 'بازتعریف جایگاه از یک ابزار عمومی به «زیرساخت تصمیم‌گیری سازمانی» و کاهش چشمگیر چرخه مذاکرات B2B.'
        },
        {
          num: '۵+',
          label: 'پروژه پرچمدار فعال',
          client: 'مطالعات موردی معتبر',
          detail: 'طراحی سیستم‌های یکپارچه رشد در فین‌تک، سلامت دیجیتال، تجارت الکترونیک لوکس و فناوری‌های سازمانی.'
        }
      ],
      caseStudyNote: 'تمامی معیارها مستند به معماری سیستم و داده‌های تله‌متری هستند'
    },

    people: {
      chapterNum: '۰۷',
      chapterTag: 'فصل هفتم // لایه انسانی',
      eyebrow: 'انسان‌های پشت این سیستم',
      title: 'سخت‌گیری استراتژیک در کنار وسواس در هنر اجرا.',
      lead: 'مجیکنسـی توسط متفکران و سازندگانی هدایت می‌شود که مستقیماً در نتایج نهایی کسب‌وکار شریک هستند.',
      leadMember: {
        name: 'مهدی صفدری',
        role: 'معمار رشد و استراتژیست ارشد',
        badge: 'رهبری راهبردی // معماری سیستم',
        bio: 'هدایت استراتژی‌های کلان تجاری، معماری سیستم‌های دیجیتال و شراکت‌های راهبردی. متمرکز بر مهندسی سیستم‌های پایدار رشد که در آن‌ها جسارت خلاقانه و دقت فنی به هم می‌پیوندند.',
        image: '/assets/about/portrait.jpg',
        alt: 'مهدی صفدری — معمار رشد و استراتژیست ارشد مجیکنسـی'
      },
      workspace: {
        caption: 'پژوهش میدانی، نگاشت سیستم‌ها و تکرار استراتژیک',
        image: '/assets/about/workspace.jpg',
        headline: 'معماری بر پایه حقیقت، نه فرضیات.',
        copy: 'هر خروجی حاصل ترکیب تخصص‌های همگرا در یک اتاق فکر منسجم است. بدون واسطه و بدون اتلاف زمان.'
      },
      disciplines: [
        {
          num: '۰۱',
          code: 'معماری کسب‌وکار',
          title: 'استراتژی و اقتصاد واحد',
          desc: 'واکاوی اهرم‌های بازار، اصطکاک‌های عملیاتی و خندق‌های تمایز رقابتی.'
        },
        {
          num: '۰۲',
          code: 'مهندسی خلاقیت',
          title: 'سیستم‌های دیزاین و هویت برند',
          desc: 'خلق هویت‌های اصیل و رابط‌های کاربری ساخته‌شده برای تاب‌آوری در برابر آزمون بازار.'
        },
        {
          num: '۰۳',
          code: 'زیرساخت پرفورمنس',
          title: 'موتورهای دیجیتال و جذب',
          desc: 'توسعه پلتفرم‌های فنی مقاوم، چرخه‌های تبدیل بهینه و کانال‌های پایدار مقیاس‌پذیری.'
        },
        {
          num: '۰۴',
          code: 'هوشمندی مستمر',
          title: 'داده‌ها و حلقه‌های تله‌متری',
          desc: 'تبدیل رفتارهای کاربر و داده‌های تحلیلی به شفافیت و تصمیمات راهبردی بعدی.'
        }
      ]
    },

    faq: {
      chapterNum: '۰۸',
      chapterTag: 'فصل هشتم // شفافیت و پاسخگویی',
      eyebrow: 'پرسش‌های متداول',
      title: 'پاسخ‌های شفاف به پرسش‌های کلیدی شما.',
      lead: 'پیش از آغاز همکاری، تمام آنچه باید درباره شیوه نگرش، نوع پروژه‌ها و استانداردهای مجیکنسـی بدانید.',
      items: [
        {
          id: 'faq-1',
          question: 'مجیکنسـی دقیقاً چه کاری انجام می‌دهد؟',
          answer: 'ما سیستم‌های یکپارچه رشد را برای کسب‌وکارهای بلندپرواز مهندسی می‌کنیم. به جای ایفای نقش به عنوان یک آژانس تبلیغاتی سنتی یا صرفاً تیم برنامه‌نویسی، ما استراتژی کسب‌وکار، هویت برند، مهندسی وب و جذب پرفورمنس را در یک چرخه بازخورد مستمر ادغام می‌کنیم که ارزش واقعی تجاری می‌آفریند.'
        },
        {
          id: 'faq-2',
          question: 'چه کسب‌وکارهایی برای همکاری با شما مناسب هستند؟',
          answer: 'ما با بنیان‌گذاران جسور و مدیران ارشدی همکاری می‌کنیم که آماده ساخت یک جایگاه متمایز و دفاع‌پذیر در بازار هستند؛ از استارتاپ‌های پیشرو که در مسیر مقیاس‌پذیری هستند تا برندهای ریشه‌داری که به دنبال تحول دیجیتال و شکستن سقف جذب مشتری خود می‌باشند.'
        },
        {
          id: 'faq-3',
          question: 'آیا شما فقط کمپین‌های تبلیغاتی پولی اجرا می‌کنید؟',
          answer: 'خیر. اجرای تبلیغات پولی بدون جایگاه شفاف برند یا تجربه وب پرسرعت با تبدیل بالا، صرفاً اتلاف سرمایه است. ما تبلیغات پولی را تنها یکی از اجزای یک موتور بزرگ‌تر می‌دانیم که شامل اقتدار برند، سئوی فنی ساختاریافته و چرخه‌های بازگشت مشتری است.'
        },
        {
          id: 'faq-4',
          question: 'آیا شما هم استراتژی کلان و هم اجرای فنی را بر عهده می‌گیرید؟',
          answer: 'بله، و این مزیت اصلی ماست. استراتژی بدون توان اجرای دقیق صرفاً یک نظریه دانشگاهی است، و اجرای فنی بدون استراتژی صرفاً سر و صدای پرهزینه. ما هم نقشه راه تجاری را تدوین می‌کنیم و هم پلتفرم‌های دیجیتال و قیف‌های آن را شخصاً مهندسی می‌نماییم.'
        },
        {
          id: 'faq-5',
          question: 'یک پروژه معمولاً چگونه آغاز می‌شود؟',
          answer: 'هر همکاری با یک واکاوی تشخیصی (Diagnostic Deep Dive) آغاز می‌شود. ما وضعیت اقتصاد واحد، نقاط ریزش در سفر مشتری، صحت داده‌ها و تمایز رقابتی شما را بررسی می‌کنیم. تنها پس از کشف دقیق گلوگاه اصلی، نقشه راه عملیاتی اختصاصی را طراحی می‌نماییم.'
        },
        {
          id: 'faq-6',
          question: 'موفقیت همکاری چگونه سنجیده و رهگیری می‌شود؟',
          answer: 'ما پیش از نوشتن حتی یک خط کد یا آغاز کمپین، بر سر شاخص‌های شفاف تجاری—مانند کاهش CAC، افزایش نرخ تبدیل، سرعت پایپ‌لاین فروش یا رشد درآمد—توافق می‌کنیم و با تله‌متری سرور صحت نتایج را اثبات می‌نماییم.'
        }
      ]
    },

    finalCta: {
      chapterNum: '۰۹',
      chapterTag: 'فصل نهم // جمع‌بندی و آغاز مسیر',
      eyebrow: 'نتیجه‌گیری و اقدام',
      headlinePart1: 'آماده خلق',
      headlinePart2: 'شتاب پایدار هستید؟',
      lead: 'بیایید به لایه‌های زیرین درخواست نگاه کنیم. ما گلوگاه‌های فعلی رشد شما را ممیزی کرده و معماری یک سیستم پیشرو را برای جهش کسب‌وکارتان ترسیم می‌کنیم.',
      ctaButton: 'آغاز گفتگو و بررسی پروژه',
      secondaryAction: 'مشاهده نمونه‌کارهای منتخب',
      badge: 'مشاوره راهبردی و تشخیصی // ۲۰۲۶',
      directContact: 'تماس مستقیم: HELLO@MAGICENCY.COM'
    }
  }
};
