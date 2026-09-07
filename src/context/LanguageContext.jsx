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
      primaryCta: 'Start a Project',
      secondaryCta: 'Explore Approach',
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
          color: '#E3C280'
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
          color: '#C68B59'
        },
        {
          id: 'mobile',
          num: '03',
          category: 'Mob',
          categoryItalic: 'ile',
          client: 'Sona',
          clientTag: 'CLIENT',
          image: '/project-3.jpg',
          alt: 'Sona AI Mobile Product',
          color: '#A855F7'
        },
        {
          id: 'motion',
          num: '04',
          category: 'Mo',
          categoryItalic: 'tion',
          client: 'Vault Bank',
          clientTag: 'CLIENT',
          image: '/project-4.jpg',
          alt: 'Vault Bank Fintech & Motion',
          color: '#EAB308'
        }
      ]
    },
    problemInsight: {
      badge: 'THE CORE PREMISE',
      sectionIndex: '03',
      sectionLabel: 'PROBLEM // INSIGHT',
      beats: [
        {
          id: 'problem',
          num: '01',
          tag: 'THE PROBLEM',
          headline: 'More content. More campaigns. More channels.',
          insight: 'But more activity does not necessarily create more growth.',
          status: 'STATE: DISPERSED ACTIVITY',
          metric: 'HIGH NOISE // ZERO COMPOUNDING'
        },
        {
          id: 'insight',
          num: '02',
          tag: 'THE INSIGHT',
          headline: "Growth doesn't come from isolated marketing actions.",
          insight: 'It comes from connecting the right decisions together.',
          status: 'STATE: CONVERGING SIGNALS',
          metric: 'DISCONNECTED SILOS → SHARED AXIS'
        },
        {
          id: 'system',
          num: '03',
          tag: 'THE SYSTEM',
          headline: 'Strategy → Creative → Digital → Acquisition → Measurement',
          insight: 'A synchronized architecture moving as one continuous pipeline.',
          status: 'STATE: SYNCHRONIZED PIPELINE',
          metric: 'CLOSED-LOOP ATTRIBUTION & FLOW'
        },
        {
          id: 'outcome',
          num: '04',
          tag: 'THE OUTCOME',
          headline: 'When everything compounds together, marketing becomes a growth engine.',
          insight: 'Deterministic scale. Compounding velocity. Zero wasted energy.',
          status: 'STATE: COMPOUNDING FLYWHEEL',
          metric: 'AUTONOMOUS GROWTH ARCHITECTURE'
        }
      ],
      nodes: [
        { id: 'strategy', num: '01', label: 'STRATEGY', sub: 'DIRECTION' },
        { id: 'creative', num: '02', label: 'CREATIVE', sub: 'ATTENTION' },
        { id: 'digital', num: '03', label: 'DIGITAL', sub: 'CONVERSION' },
        { id: 'acquisition', num: '04', label: 'ACQUISITION', sub: 'SCALE' },
        { id: 'measurement', num: '05', label: 'MEASUREMENT', sub: 'FEEDBACK' }
      ]
    },
    whatWeDo: {
      badge: 'WHAT WE DO',
      eyebrow: 'WHAT WE DO',
      heading: 'What we do',
      introStatement: 'Strategy sets the direction. Performance and creative turn strategy into action. Technology, AI and automation make growth measurable and compounding.',
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
    journal: {
      badge: 'Blog',
      headline: 'Ideas between growth and technology.',
      inFocusLabel: 'In focus',
      allArticlesLabel: 'All Articles',
      filters: ['ALL', 'STRATEGY', 'PERFORMANCE', 'CREATIVE', 'TECHNOLOGY', 'AI'],
      featuredArticles: [
        {
          id: 'article-1',
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
    narrative: {
      badge: 'MARKETING ECOSYSTEM // BUSY ≠ GROWTH',
      systemLabel: 'MARKETING ECOSYSTEM // ACTIVITY WALL',
      scrollPrompt: 'SCROLL TO TRANSFORM ECOSYSTEM',
      stages: [
        {
          id: 'activity',
          num: '01',
          code: 'STAGE // 01',
          tag: 'ACTIVITY',
          title: 'BUSY BUT UNCONNECTED',
          headline: 'A lot is happening. Very little is connected.',
          description: 'High velocity ad creatives, soaring traffic, live campaigns — but each asset operates in its own isolated bubble without driving compounding revenue.',
          statusBadge: 'STATE: DISPERSED ACTIVITY // ATTRITION: 78%',
          frictionAlert: 'HIGH VANITY METRICS // UNALIGNED ASSETS'
        },
        {
          id: 'fragmentation',
          num: '02',
          code: 'STAGE // 02',
          tag: 'FRAGMENTATION',
          title: 'ISOLATED SILOS',
          headline: 'Activity exists. The system does not.',
          description: 'Creatives drift away from landing pages. Search traffic enters generic flows. Channels compete for budget instead of compounding returns.',
          statusBadge: 'STATE: FRAGMENTED SILOS // SIGNAL DRIFT',
          frictionAlert: 'MISALIGNED TOUCHPOINTS // DISCONNECTED FUNNELS'
        },
        {
          id: 'friction',
          num: '03',
          code: 'STAGE // 03',
          tag: 'FRICTION',
          title: 'VISIBLE BREAKPOINTS',
          headline: 'Where growth leaks: broken handoffs & dead ends.',
          description: 'Traffic enters but 82% drops off at intent mismatches. Ad spend burns on fatigue while CRM data remains completely siloed.',
          statusBadge: 'STATE: 4 CRITICAL CHOKEPOINTS IDENTIFIED',
          frictionAlert: '82% DROP-OFF // SILOED ATTRIBUTION'
        },
        {
          id: 'diagnosis',
          num: '04',
          code: 'STAGE // 04',
          tag: 'DIAGNOSIS',
          title: 'PRECISION DIAGNOSIS',
          headline: 'Isolating where the system breaks.',
          description: 'Examining the relationships between creative hooks, offer architecture, and checkout conversion to pinpoint high-leverage growth constraints.',
          statusBadge: 'STATE: ROOT CAUSE ISOLATED // FOCUS LOCKED',
          frictionAlert: 'SURGICAL ATTRIBUTION CALIBRATION'
        },
        {
          id: 'connection',
          num: '05',
          code: 'STAGE // 05',
          tag: 'CONNECTION',
          title: 'SYNCHRONIZED SYSTEM',
          headline: 'Physical alignment into one cohesive growth machine.',
          description: 'Media assets physically reorder into a seamless growth pipeline: Ad Creative ➔ Dynamic Landing Page ➔ Checkout ➔ CRM ➔ Telemetry feedback loop.',
          statusBadge: 'STATE: PIPELINE SYNCHRONIZED // 0% LEAKAGE',
          frictionAlert: 'CLOSED-LOOP REVENUE ATTRIBUTION'
        },
        {
          id: 'insight',
          num: '06',
          code: 'STAGE // 06',
          tag: 'GROWTH SYSTEM',
          title: 'COMPOUNDING SCALE',
          headline: "More activity doesn't create growth. Better connection does.",
          description: 'When every creative, experience, and data vector connects into a single operating engine, growth stops being accidental and becomes predictable.',
          statusBadge: 'STATE: OPTIMAL FLYWHEEL // +3.4X EFFICIENCY',
          frictionAlert: 'AUTONOMOUS GROWTH ARCHITECTURE'
        }
      ],
      mediaLabels: {
        ad: { title: 'Paid Video Ad', metric: 'CTR 4.8%', sub: 'High-Velocity Hook Testing' },
        landing: { title: 'High-Intent Landing Page', metric: '1,842 Live', sub: 'Offer & Value Architecture' },
        mobile: { title: 'Mobile Checkout UI', metric: '$392 AOV', sub: '1-Tap Conversion Architecture' },
        analytics: { title: 'Attribution & Telemetry', metric: '$182.7K', sub: 'Deterministic Multi-Touch' },
        social: { title: 'Narrative Campaign', metric: '1.4M Reach', sub: 'Psychological Market Resonance' },
        search: { title: 'Intent Demand Capture', metric: '4.8X ROAS', sub: 'Algorithmic Media Bidding' },
        crm: { title: 'Lifecycle & Retention', metric: '+89% LTV', sub: 'Automated Retention Engine' }
      },
      conclusion: {
        badge: 'THE MAGICENCY ARCHITECTURE',
        titlePrefix: 'More activity doesn’t create growth.',
        titleHighlight: 'Better connection does.',
        subtitle: 'We eliminate disconnected marketing silos by engineering a single, interconnected performance engine around your business.',
        cta: 'Build Your Growth System'
      }
    },
    legacyCapabilities: {
      eyebrow: 'CAPABILITIES',
      headline: "We don't just market.\nWe build growth systems.",
      supporting: 'From strategy and creative to acquisition, experimentation and analytics — every capability is connected to one objective: sustainable growth.',
      cards: [
        {
          num: '01',
          total: '06',
          name: 'STRATEGY',
          badge: 'FOUNDATION',
          statement: 'Before we grow anything, we find what is worth growing.',
          desc: 'We turn business objectives, customer behavior and market signals into a clear, validated growth architecture that prevents wasted capital.',
          tags: ['POSITIONING', 'GO-TO-MARKET', 'CUSTOMER RESEARCH', 'UNIT ECONOMICS', 'GROWTH BLUEPRINT'],
          visualType: 'strategy'
        },
        {
          num: '02',
          total: '06',
          name: 'CREATIVE & IDENTITY',
          badge: 'ATTENTION',
          statement: 'Ideas are not decoration. They are growth infrastructure.',
          desc: 'High-velocity narrative testing and psychological art direction that captivates target audiences and lowers customer acquisition friction.',
          tags: ['NARRATIVE TESTING', 'PSYCHOLOGICAL HOOKS', 'CREATIVE VELOCITY', 'DYNAMIC ASSETS'],
          visualType: 'creative'
        },
        {
          num: '03',
          total: '06',
          name: 'PERFORMANCE MARKETING',
          badge: 'ACQUISITION',
          statement: "Attention is useless if it doesn't move the numbers.",
          desc: 'Algorithmic media deployment, cross-channel capital allocation and bidding intelligence engineered to compress customer acquisition costs.',
          tags: ['PAID SOCIAL & SEARCH', 'CAC COMPRESSION', 'ALGORITHMIC ALLOCATION', 'BLENDED ROAS'],
          visualType: 'performance'
        },
        {
          num: '04',
          total: '06',
          name: 'CRO & EXPERIMENTATION',
          badge: 'CONVERSION',
          statement: "We don't guess. We test.",
          desc: 'Iterative hypothesis testing across conversion funnels, landing pages, and offer architectures that turns traffic into compounding revenue.',
          tags: ['HYPOTHESIS TESTING', 'LANDING PAGE ARCHITECTURE', 'FUNNEL CRO', 'OFFER OPTIMIZATION'],
          visualType: 'experimentation'
        },
        {
          num: '05',
          total: '06',
          name: 'DATA & ANALYTICS',
          badge: 'INTELLIGENCE',
          statement: 'What gets measured gets understood.',
          desc: 'Deterministic tracking, server-side attribution and full-funnel telemetry that eliminate blind spots and inform the next strategic pivot.',
          tags: ['SERVER-SIDE TELEMETRY', 'MULTI-TOUCH ATTRIBUTION', 'COHORT MODELING', 'SIGNAL TRACKING'],
          visualType: 'data'
        },
        {
          num: '06',
          total: '06',
          name: 'GROWTH SYSTEMS',
          badge: 'COMPOUNDING',
          statement: "The goal isn't another campaign. It's a system that keeps growing.",
          desc: 'All five capabilities converging into a single, predictable growth machine that compounds valuation and scales revenue sustainably.',
          tags: ['FULL-SYSTEM SYNCHRONIZATION', 'GROWTH LOOPS', 'COMPOUNDING SCALE', 'AUTONOMOUS PERFORMANCE'],
          visualType: 'systems'
        }
      ]
    },
    clarityEngine: {
      eyebrow: 'HOW MAGICENCY THINKS',
      headline: 'We don’t chase growth.\nWe engineer it.',
      shatteredWords: ['UNCERTAINTY', 'NOISE', 'ASSUMPTION', 'TACTICS', 'SILOS'],
      resolvedStatement: 'CLARITY CREATES GROWTH.',
      statementRow1: 'CLARITY',
      statementRow2: 'CREATES',
      statementHighlight: 'GROWTH.',
      subheadline: 'Marketing isn’t a collection of random tactics. It is an unbroken sequence of deterministic decisions.',
      states: {
        chaos: 'STATE 01 // UNCERTAINTY & AMBIGUITY',
        signal: 'STATE 02 // PATTERN FORMATION & ALIGNMENT',
        clarity: 'STATE 03 // CRYSTALLIZED CONVERGENCE',
        decision: 'STATE 04 // THE DECISION SEQUENCE'
      },
      decisionSequence: [
        { code: '01', step: 'OBSERVE', fa: 'مشاهده', desc: 'Isolate customer behavioral friction & unit metrics' },
        { code: '02', step: 'UNDERSTAND', fa: 'درک', desc: 'Identify deterministic intent behind the data' },
        { code: '03', step: 'DECIDE', fa: 'تصمیم', desc: 'Engineer highest-leverage growth hypotheses' },
        { code: '04', step: 'CREATE', fa: 'خلق', desc: 'Produce high-converting narrative hooks & assets' },
        { code: '05', step: 'LAUNCH', fa: 'انتشار', desc: 'Deploy algorithmic multi-channel media vectors' },
        { code: '06', step: 'MEASURE', fa: 'سنجش', desc: 'Capture server-side deterministic attribution' },
        { code: '07', step: 'LEARN', fa: 'یادگیری', desc: 'Synthesize winning variations & discard noise' },
        { code: '08', step: 'REPEAT', fa: 'تکرار', desc: 'Compound scale into self-reinforcing flywheel' }
      ],
      cta: 'Explore Decision Architecture'
    },
    growthOS: {
      eyebrow: 'GROWTH OPERATING SYSTEM',
      headline: 'Growth isn’t a channel.\nIt’s an operating system.',
      subheadline: 'Every decision creates a signal. Every signal creates a new decision. That’s how growth compounds over time.',
      statusLabel: 'OPERATING LOOP',
      modeLive: 'AUTONOMOUS CYCLE ACTIVE',
      interactiveHint: 'Click or hover any node to inspect the growth feedback loop.',
      states: [
        {
          id: 'input',
          step: '01',
          code: 'INPUT // BASELINE',
          title: 'Something isn’t growing.',
          statement: 'A baseline business bottleneck with uncalibrated CAC or stalled market traction.',
          mechanism: 'We audit business economics, customer friction, and fragmented ad spend to isolate the root constraint.',
          telemetry: {
            label: 'ROOT BOTTLENECK ISOLATION',
            metric: '100% UNBIASED AUDIT',
            signalState: 'INITIALIZING TELEMETRY',
            status: 'NORMAL'
          }
        },
        {
          id: 'insight',
          step: '02',
          code: 'INSIGHT // PATTERN',
          title: 'We find the signal inside the noise.',
          statement: 'Separating vanity metrics from deterministic buying psychology and real conversion drivers.',
          mechanism: 'Data filtering extracts high-intent customer clusters and high-yield creative opportunities.',
          telemetry: {
            label: 'SIGNAL-TO-NOISE RATIO',
            metric: '98.4% HIGH CONFIDENCE',
            signalState: 'PATTERN IDENTIFIED',
            status: 'ACTIVE'
          }
        },
        {
          id: 'action',
          step: '03',
          code: 'ACTION // EXECUTION',
          title: 'Insight becomes unified action.',
          statement: 'Strategy, creative assets, and algorithmic acquisition launch in synchronized lockstep.',
          mechanism: 'Simultaneous deployment of narrative hooks, landing page architecture, and bidding models.',
          telemetry: {
            label: 'DEPLOYMENT SYNCHRONICITY',
            metric: '<48H ITERATION VELOCITY',
            signalState: 'CAMPAIGNS ARMED',
            status: 'ACTIVE'
          }
        },
        {
          id: 'signal',
          step: '04',
          code: 'SIGNAL // TELEMETRY',
          title: 'Every action creates a measurable signal.',
          statement: 'First-party tracking records real-time conversion patterns, micro-conversions, and unit economics.',
          mechanism: 'Multi-touch deterministic attribution maps revenue back to exact creative and media vectors.',
          telemetry: {
            label: 'ATTRIBUTION RESOLUTION',
            metric: 'DETERMINISTIC 1:1 MATCH',
            signalState: 'FEEDBACK RECEIVED',
            status: 'STREAMING'
          }
        },
        {
          id: 'optimization',
          step: '05',
          code: 'OPTIMIZE // SYNTHESIS',
          title: 'What works gets amplified. What doesn’t gets redesigned.',
          statement: 'Zero emotional bias. Capital automatically reallocates to winning variations.',
          mechanism: 'Winner amplification compresses CAC by up to 45% while fatigued creatives are dynamically phased out.',
          telemetry: {
            label: 'CAC COMPRESSION RATE',
            metric: '-38% AVG REDUCTION',
            signalState: 'CAPITAL REALLOCATED',
            status: 'OPTIMIZING'
          }
        },
        {
          id: 'compounding',
          step: '06',
          code: 'COMPOUND // SCALE',
          title: 'That’s how growth compounds.',
          statement: 'Each loop informs the next, creating an autonomous machine with compounding scale.',
          mechanism: 'The business valuation expands as the growth infrastructure operates predictably at higher spend.',
          telemetry: {
            label: 'COMPOUNDING MULTIPLIER',
            metric: '3.4X CAPITAL EFFICIENCY',
            signalState: 'FLYWEEL SUSTAINED',
            status: 'EXPONENTIAL'
          }
        }
      ],
      bottomCta: {
        statement: 'Ready to turn your marketing into a compounding operating system?',
        btn: 'Initialize Growth System'
      }
    },
    growthShift: {
      eyebrow: 'THE STRATEGIC SHIFT',
      assumptionRow1: 'MORE TRAFFIC',
      assumptionOp: '≠',
      assumptionRow2: 'MORE GROWTH',
      frictionLeak: 'WITHOUT SYSTEM CONVERSION ARCHITECTURE, CAPITAL EVAPORATES',
      reframeVariables: [
        { label: 'POSITIONING', symbol: '01' },
        { label: 'CREATIVE', symbol: '02' },
        { label: 'ACQUISITION', symbol: '03' },
        { label: 'CONVERSION', symbol: '04' }
      ],
      systemFormula: 'BETTER INPUTS → BETTER OUTCOMES',
      resolutionRow1: 'GROWTH ISN’T FOUND.',
      resolutionHighlight: 'IT’S ENGINEERED.',
      resolutionSub: 'Change the inputs. Synchronize the system. Experience predictable, compounding scale.',
      cta: 'Engineer Your Growth Architecture'
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
    theBrief: {
      eyebrow: '09 / THE BRIEF',
      subeyebrow: 'DON’T CONTACT US. START SOMEWHERE.',
      step1: {
        question: 'WHAT ARE YOU TRYING TO CHANGE?',
        sub: 'Select the primary strategic vector for your business.',
        options: [
          { id: 'grow', label: 'GROW FASTER', context: 'Acquisition velocity, funnel acceleration & compounding pipeline.' },
          { id: 'reposition', label: 'REPOSITION', context: 'High-conviction brand narrative, offer architecture & market clarity.' },
          { id: 'build', label: 'BUILD SOMETHING NEW', context: 'Full-stack web application, conversion UX & digital products.' },
          { id: 'fix', label: 'FIX WHAT’S NOT WORKING', context: 'Diagnostic audits, friction elimination & conversion recovery.' },
          { id: 'other', label: 'SOMETHING ELSE', context: 'A custom strategic challenge or unmapped market opportunity.' }
        ]
      },
      step2: {
        question: 'WHAT’S GETTING IN THE WAY?',
        sub: 'Identify the core operational or strategic bottleneck.',
        options: [
          { id: 'direction', label: 'NO CLEAR DIRECTION', context: 'Fragmented tactics without an overarching growth thesis.' },
          { id: 'conversion', label: 'LOW CONVERSION', context: 'Traffic is landing, but visitors drop off before commercial commitment.' },
          { id: 'outgrown', label: 'OUTGROWN OUR CURRENT SYSTEM', context: 'Previous marketing architecture can no longer support current scale.' },
          { id: 'compounding', label: 'MARKETING ISN’T COMPOUNDING', context: 'Every month feels like starting from zero with rising CAC.' },
          { id: 'zero', label: 'WE NEED TO START FROM ZERO', context: 'Building from the ground up for an unreleased product or pivot.' },
          { id: 'other_obstacle', label: 'OTHER FRICTION', context: 'Internal or market complexity requiring bespoke diagnosis.' }
        ]
      },
      step3: {
        question: 'WHERE DO YOU WANT TO GO?',
        sub: 'Define the intended commercial outcome.',
        options: [
          { id: 'demand', label: 'MORE DEMAND', context: 'High-velocity qualified inbound flow.' },
          { id: 'positioning', label: 'BETTER POSITIONING', context: 'Unfair market pricing power & category leadership.' },
          { id: 'experience', label: 'A STRONGER DIGITAL EXPERIENCE', context: 'World-class product & conversion interfaces.' },
          { id: 'system', label: 'A SCALABLE GROWTH SYSTEM', context: 'Automated, predictable, and compounding growth engine.' },
          { id: 'unsure', label: 'NOT SURE YET', context: 'Need an objective architectural audit first.' }
        ]
      },
      summary: {
        badge: 'YOUR STRATEGIC BRIEF',
        readyHeadline: 'We have somewhere to start.',
        readySub: 'Your brief is locked into our diagnostic intake protocol.',
        ctaBtn: 'SEND THE BRIEF →',
        resetBtn: 'REVISE BRIEF',
        finalStatement1: 'Not another campaign.',
        finalStatement2: 'A better system.'
      }
    },
    theReveal: {
      eyebrow: 'THE MAGICENCY APPROACH',
      surfaceLead: 'THERE’S ALWAYS MORE',
      surfaceHighlight: 'BENEATH THE SURFACE.',
      surfaceSub: 'No templates. No guesswork. No disconnected tactics. Scroll to peel back the layers of growth architecture.',
      layers: [
        {
          num: '01',
          code: 'UNDERSTAND',
          headline: 'Before we build, we understand what matters.',
          desc: 'Deep ICP analysis, unit economics calibration, and behavioral telemetry.',
          tags: ['CUSTOMER', 'MARKET', 'DATA', 'CONTEXT']
        },
        {
          num: '02',
          code: 'DEFINE',
          headline: 'We turn complexity into a clear direction.',
          desc: 'High-conviction positioning and offer architecture that cuts through market noise.',
          tags: ['POSITIONING', 'OFFER', 'MESSAGE', 'OBJECTIVE']
        },
        {
          num: '03',
          code: 'BUILD',
          headline: 'Strategy becomes something people can experience.',
          desc: 'High-converting creative assets, dynamic landing pages, and frictionless checkout flows.',
          tags: ['CREATIVE', 'EXPERIENCE', 'CAMPAIGN', 'SYSTEM']
        },
        {
          num: '04',
          code: 'LEARN',
          headline: 'Every interaction creates a measurable signal.',
          desc: 'Multi-touch deterministic tracking that turns every user action into operational intelligence.',
          tags: ['DATA', 'EXPERIMENT', 'FEEDBACK', 'INSIGHT']
        },
        {
          num: '05',
          code: 'SCALE',
          headline: 'What works becomes the foundation for what’s next.',
          desc: 'Algorithmic capital reallocation, CAC compression, and compounding valuation.',
          tags: ['OPTIMIZE', 'AMPLIFY', 'AUTOMATE', 'GROW']
        }
      ],
      climax: {
        headline: 'Growth is a system.',
        highlight: 'Not a sequence of tactics.',
        subheadline: 'When every layer connects in harmony, scale becomes inevitable and predictable.',
        cta: 'Experience The Architecture'
      }
    },
    selectedWork: {
      eyebrow: 'SELECTED WORK',
      headline: 'Ideas are only valuable\nwhen they move the business.',
      subheadline: 'A curated selection of strategies, digital experiences, and growth systems built to engineer measurable commercial momentum.',
      scrollHint: 'SCROLL TO EXPLORE EXHIBITION',
      projects: [
        {
          num: '01',
          total: '04',
          client: 'VELOX FINANCIAL',
          industry: 'FINTECH & WEALTH INFRASTRUCTURE',
          statement: 'Full funnel conversion architecture and algorithmic acquisition scaling active trading accounts.',
          scope: ['GROWTH STRATEGY', 'PAID ACQUISITION', 'CONVERSION ARCHITECTURE'],
          primaryMetric: '+148%',
          metricLabel: 'LTV EXPANSION',
          secondaryMetric: '-34% CAC',
          accent: '#FF5500',
          visualType: 'fintech'
        },
        {
          num: '02',
          total: '04',
          client: 'LUMINA LUXURY',
          industry: 'DIRECT-TO-CONSUMER // APPAREL',
          statement: 'Psychological narrative testing and high-velocity video hooks transforming ad spend into compounding retail scale.',
          scope: ['CREATIVE VELOCITY', 'PSYCHOLOGICAL HOOKS', 'PAID SOCIAL'],
          primaryMetric: '4.8X',
          metricLabel: 'BLENDED ROAS',
          secondaryMetric: '+$14M REVENUE',
          accent: '#FFAA44',
          visualType: 'luxury'
        },
        {
          num: '03',
          total: '04',
          client: 'SYNAPSE AI',
          industry: 'ENTERPRISE B2B SAAS',
          statement: 'Category repositioning, high-intent demo funnel redesign, and deterministic account-based acquisition.',
          scope: ['B2B POSITIONING', 'DEMO FUNNEL CRO', 'ATTRIBUTION INTEL'],
          primaryMetric: '+210%',
          metricLabel: 'PIPELINE VELOCITY',
          secondaryMetric: '68% DEMO CONVERSION',
          accent: '#00F59B',
          visualType: 'saas'
        },
        {
          num: '04',
          total: '04',
          client: 'NEXUS HEALTH',
          industry: 'DIGITAL HEALTH & TELEMEDICINE',
          statement: 'Deterministic server-side tracking, multi-touch patient journey modeling, and scalable patient acquisition loops.',
          scope: ['TELEMETRY & DATA', 'RETENTION LOOPS', 'CAC COMPRESSION'],
          primaryMetric: '+89%',
          metricLabel: 'PATIENT RETENTION',
          secondaryMetric: '3.2X CAPITAL EFFICIENCY',
          accent: '#FF5500',
          visualType: 'health'
        }
      ]
    },
    modal: {
      title: 'Start a Growth Conversation',
      subtitle: 'Tell us about your current business baseline and where you want to scale. We will review your growth bottlenecks and discuss strategy.',
      stageLabel: 'Current Stage & Scale',
      stages: ['Early Traction', 'Scaling Growth', 'Established Brand', 'Enterprise'],
      objectiveLabel: 'Primary Growth Priority',
      objectives: ['Paid Acquisition & CAC Reduction', 'Full Growth System Architecture', 'Creative Strategy & Testing', 'Conversion & Funnel Optimization'],
      emailLabel: 'Work Email / Direct Contact',
      submitBtn: 'Initiate Strategic Conversation',
      disclaimer: 'We review every inquiry directly. Strictly confidential.',
      successTitle: 'Conversation Initiated',
      successMessage: 'Thank you. A senior growth partner will review your business context and reach out directly.'
    },
    projectDiscovery: {
      eyebrow: '01 / 08',
      title: 'START A PROJECT',
      steps: {
        step1: {
          id: 'about',
          number: '01',
          title: 'ABOUT YOU',
          fields: {
            name: 'Full Name',
            company: 'Company',
            role: 'Role',
            email: 'Work Email'
          }
        },
        step2: {
          id: 'challenge',
          number: '02',
          title: 'THE CHALLENGE',
          options: [
            { id: 'grow', label: 'GROW FASTER', desc: 'Acquisition velocity & scaling' },
            { id: 'reposition', label: 'REPOSITION', desc: 'Brand narrative & market clarity' },
            { id: 'build', label: 'BUILD NEW', desc: 'Web applications & products' },
            { id: 'fix', label: 'FIX ISSUES', desc: 'Conversion recovery & audits' }
          ]
        },
        step3: {
          id: 'needs',
          number: '03',
          title: 'WHAT YOU NEED',
          options: [
            'Strategy & Growth',
            'Performance & Creative',
            'Technology, AI & Automation',
            'Not sure, need a diagnostic audit'
          ]
        },
        step4: {
          id: 'timeline',
          number: '04',
          title: 'TIMELINE',
          options: [
            'As soon as possible',
            'Within 1-2 months',
            'Within 3-6 months',
            'Just exploring options'
          ]
        },
        step5: {
          id: 'investment',
          number: '05',
          title: 'INVESTMENT',
          options: [
            'Under $5k',
            '$5k - $10k',
            '$10k - $25k',
            '$25k+'
          ]
        },
        step6: {
          id: 'brief',
          number: '06',
          title: 'PROJECT BRIEF',
          placeholder: 'Tell us a bit more about what you are trying to achieve...'
        },
        step7: {
          id: 'review',
          number: '07',
          title: 'REVIEW',
          summaryTitle: 'Your inputs',
          submitBtn: 'SUBMIT BRIEF'
        },
        step8: {
          id: 'sent',
          number: '08',
          title: 'SENT',
          successTitle: 'Brief Received.',
          successMessage: 'Our strategic team will review your context and reach out shortly.'
        }
      },
      controls: {
        next: 'NEXT',
        prev: 'PREV',
        close: 'CLOSE'
      }
    },
    approach: {
      pageMeta: {
        title: 'Approach // How Magicency Thinks // MAGICENCY®',
        description: 'We understand the business first. Then we engineer the system that makes it grow.'
      },
      hero: {
        eyebrow: 'APPROACH',
        headlineLine1: "We don't start",
        headlineLine2: "with the answer.",
        subline: 'We start with what needs to change.',
        metaphor: 'CHAOS → CONNECTION → CLARITY'
      },
      deconstruction: {
        badge: '01 / DIAGNOSIS',
        title: 'From Request to Problem',
        requestPrompt: 'THE REQUEST',
        requestQuote: '“I need a new website.”',
        subtext: 'We deconstruct the request to uncover what actually needs to change.',
        revealedTitle: 'THE REAL PROBLEM',
        problems: [
          {
            id: 'positioning',
            title: 'Positioning',
            desc: 'The brand is not communicating clear commercial value.'
          },
          {
            id: 'experience',
            title: 'Experience',
            desc: 'The customer journey has high friction and low resonance.'
          },
          {
            id: 'conversion',
            title: 'Conversion',
            desc: 'Traffic enters leaky pages with no systematic proof architecture.'
          },
          {
            id: 'acquisition',
            title: 'Acquisition',
            desc: 'Channels are isolated without compounding retention loops.'
          }
        ]
      },
      systemNetwork: {
        badge: '02 / THE SYSTEM',
        headline: 'Nothing works in isolation.',
        subheadline: 'When marketing fails, it is because disciplines are disconnected. We engineer a living circuit.',
        centralNode: 'BUSINESS',
        nodes: [
          { id: 'strategy', label: 'STRATEGY', micro: 'Direction.' },
          { id: 'creative', label: 'CREATIVE', micro: 'Meaning.' },
          { id: 'digital', label: 'DIGITAL', micro: 'Experience.' },
          { id: 'acquisition', label: 'ACQUISITION', micro: 'Demand.' },
          { id: 'measurement', label: 'MEASUREMENT', micro: 'Learning.' }
        ],
        loopReturn: 'MEASUREMENT → INSIGHT → STRATEGY'
      },
      shift: {
        badge: '03 / THE SHIFT',
        headline: 'From Isolated Actions to Connected Growth',
        subheadline: 'Tactics reset to zero after each campaign. Systems build permanent compounding momentum.',
        tacticsTitle: 'TACTICS',
        tacticsSubtitle: 'Isolated Actions',
        tacticsItems: ['Campaign', 'Website', 'Content', 'Ads'],
        systemTitle: 'SYSTEM',
        systemSubtitle: 'Connected Growth',
        systemItems: ['Strategy', 'Creative', 'Digital', 'Acquisition', 'Measurement']
      },
      compounding: {
        badge: '04 / COMPOUNDING',
        headline: 'Why we think in systems.',
        axiom: 'Better decisions create better systems.\nBetter systems create better growth.',
        subtext: 'Every cycle makes the next cycle stronger.',
        steps: [
          '1 DECISION',
          'DECISION + LEARNING',
          'DECISION + LEARNING + DATA',
          'DECISION + LEARNING + DATA + EXPERIENCE',
          'COMPOUNDING SCALE'
        ]
      },
      closing: {
        statement: "Growth isn't a collection of tactics.\nIt's a system of better decisions.",
        ctaButton: 'START A PROJECT'
      }
    },
    capabilities: {
      pageMeta: {
        title: 'Capabilities // What We Can Build // MAGICENCY®',
        description: 'What we can build when the pieces connect. Strategy, creative, digital and growth engineered as one system.'
      },
      hero: {
        eyebrow: 'CAPABILITIES',
        headlineLine1: 'What we can build',
        headlineLine2: 'when the pieces connect.',
        subline: 'Strategy, creative, digital and growth — engineered as one system.',
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
        title: 'Blog // Editorial Publication // MAGICENCY®',
        description: 'Ideas worth thinking about. Strategy, creativity, digital and growth from the perspective of people building them.'
      },
      hero: {
        eyebrow: 'INSIGHTS // VOL. 04',
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
      primaryCta: 'شروع پروژه',
      secondaryCta: 'بررسی متدولوژی',
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
          color: '#E3C280'
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
          color: '#C68B59'
        },
        {
          id: 'mobile',
          num: '۰۳',
          category: 'محصول ',
          categoryItalic: 'موبایل',
          client: 'Sona AI',
          clientTag: 'کارفرما',
          image: '/project-3.jpg',
          alt: 'اپلیکیشن هوش مصنوعی سونا',
          color: '#A855F7'
        },
        {
          id: 'motion',
          num: '۰۴',
          category: 'موشن و ',
          categoryItalic: 'فین‌تک',
          client: 'Vault Bank',
          clientTag: 'کارفرما',
          image: '/project-4.jpg',
          alt: 'سیستم موشن و کارت‌های والت بنک',
          color: '#EAB308'
        }
      ]
    },
    problemInsight: {
      badge: 'فرضیه بنیادین',
      sectionIndex: '۰۳',
      sectionLabel: 'مسئله // نگرش',
      beats: [
        {
          id: 'problem',
          num: '۰۱',
          tag: 'مسئله اصلی',
          headline: 'محتوای بیشتر. کمپین‌های بیشتر. کانال‌های بیشتر.',
          insight: 'اما فعالیت بیشتر لزوماً رشد بیشتری خلق نمی‌کند.',
          status: 'وضعیت: اقدامات پراکنده و جزیره‌ای',
          metric: 'تلاش مضاعف // عدم هم‌افزایی'
        },
        {
          id: 'insight',
          num: '۰۲',
          tag: 'نگرش کلیدی',
          headline: 'رشد از اقدامات پراکنده و جزیره‌ای حاصل نمی‌شود.',
          insight: 'رشد حاصل همگام‌سازی و اتصال تصمیم‌های درست به یکدیگر است.',
          status: 'وضعیت: همگرایی سیگنال‌ها',
          metric: 'عبور از سیلوها به یک محور واحد'
        },
        {
          id: 'system',
          num: '۰۳',
          tag: 'معماری سیستم',
          headline: 'استراتژی ← خلاقیت ← دیجیتال ← جذب ← سنجش داده‌ها',
          insight: 'یک معماری یکپارچه که مانند جریانی پیوسته و بدون اتلاف عمل می‌کند.',
          status: 'وضعیت: خط لوله همگام‌سازی‌شده',
          metric: 'جریان پیوسته و بدون نشتی تبدیل'
        },
        {
          id: 'outcome',
          num: '۰۴',
          tag: 'نتیجه و دستاورد',
          headline: 'وقتی همه اجزا هم‌افزا شوند، بازاریابی به یک موتور رشد تبدیل می‌شود.',
          insight: 'مقیاس‌پذیری قابل پیش‌بینی، شتاب فزاینده و صفر درصد اتلاف انرژی.',
          status: 'وضعیت: چرخه رشد خودافزا',
          metric: 'معماری رشد تصاعدی و پایدار'
        }
      ],
      nodes: [
        { id: 'strategy', num: '۰۱', label: 'استراتژی', sub: 'جهت‌گیری' },
        { id: 'creative', num: '۰۲', label: 'خلاقیت', sub: 'تمایز و اثرگذاری' },
        { id: 'digital', num: '۰۳', label: 'دیجیتال', sub: 'تجربه و تبدیل' },
        { id: 'acquisition', num: '۰۴', label: 'جذب مخاطب', sub: 'ترافیک هدفمند' },
        { id: 'measurement', num: '۰۵', label: 'سنجش داده', sub: 'اتریبیوشن و بازخورد' }
      ]
    },
    whatWeDo: {
      badge: 'آنچه انجام می‌دهیم',
      eyebrow: 'آنچه انجام می‌دهیم',
      heading: 'آنچه انجام می‌دهیم',
      introStatement: 'استراتژی جهت حرکت را تعیین می‌کند. خلاقیت و پرفورمنس، استراتژی را به اقدام تبدیل می‌کنند. فناوری و هوش مصنوعی رشد را تصاعدی و سنجش‌پذیر می‌سازند.',
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
    journal: {
      badge: 'Blog',
      headline: 'ایده‌ها و بینش‌های میان رشد، خلق ارزش و فناوری.',
      inFocusLabel: 'مقالات برگزیده',
      allArticlesLabel: 'همه مقالات',
      filters: ['همه', 'استراتژی', 'پرفورمنس', 'خلاقیت', 'فناوری', 'هوش مصنوعی'],
      featuredArticles: [
        {
          id: 'article-1',
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
    narrative: {
      badge: 'اکوسیستم مارکتینگ // شلوغی ≠ رشد',
      systemLabel: 'دیوار فعالیت و اکوسیستم مارکتینگ',
      scrollPrompt: 'برای تحول اکوسیستم اسکرول کنید',
      stages: [
        {
          id: 'activity',
          num: '۰۱',
          code: 'مرحله // ۰۱',
          tag: 'فعالیت خام',
          title: 'شلوغ اما بدون اتصال',
          headline: 'بیشترین فعالیت. کمترین اتصال و بازدهی.',
          description: 'تبلیغات ویدیویی پرسرعت، کمپین‌های زنده، افزایش ترافیک — اما هر دارایی در جزیره مستقل خود عمل کرده و به درآمد تصاعدی متصل نمی‌شود.',
          statusBadge: 'وضعیت: فعالیت پراکنده // هدررفت: ۷۸٪',
          frictionAlert: 'شاخص‌های فریبنده // دارایی‌های ناهمگام'
        },
        {
          id: 'fragmentation',
          num: '۰۲',
          code: 'مرحله // ۰۲',
          tag: 'گسستگی و انزوا',
          title: 'جزیره‌های مستقل',
          headline: 'فعالیت وجود دارد؛ اما سیستم وجود ندارد.',
          description: 'محتوا و تبلیغات از صفحات فرود فاصله می‌گیرند. ترافیک جستجو به مسیرهای عمومی هدایت می‌شود و کانال‌ها به‌جای تقویت یکدیگر، برای بودجه رقابت می‌کنند.',
          statusBadge: 'وضعیت: جزیره‌های گسسته // انحراف سیگنال',
          frictionAlert: 'نقاط تماس ناهمگام // قیف‌های قطعی'
        },
        {
          id: 'friction',
          num: '۰۳',
          code: 'مرحله // ۰۳',
          tag: 'اصطکاک و نشتی',
          title: 'نقاط شکست و گلوگاه‌ها',
          headline: 'محل هدررفت سرمایه: مسیرهای بن‌بست و گسستگی.',
          description: 'ترافیک وارد می‌شود اما ۸۲٪ در پی عدم تطابق نیت کاربر تبخیر می‌گردد. بودجه تبلیغات فرسوده می‌شود درحالی‌که داده‌های CRM کاملاً قفل شده‌اند.',
          statusBadge: 'وضعیت: ۴ گلوگاه بحرانی شناسایی شد',
          frictionAlert: '۸۲٪ ریزش ترافیک // داده‌های جزیره‌ای'
        },
        {
          id: 'diagnosis',
          num: '۰۴',
          code: 'مرحله // ۰۴',
          tag: 'دیاگنوستیک دقیق',
          title: 'عیب‌یابی تحلیلی',
          headline: 'جداسازی دقیق محل شکست سیستم.',
          description: 'بررسی ارتباط مستقیم میان قلاب‌های تبلیغاتی، معماری صفحات فرود و نرخ تبدیل نهایی برای ایزولاسیون اصلی‌ترین موانع رشد کسب‌وکار.',
          statusBadge: 'وضعیت: مانع اصلی ایزوله شد // تمرکز قفل شد',
          frictionAlert: 'کالیبراسیون جراحی اتریبیوشن'
        },
        {
          id: 'connection',
          num: '۰۵',
          code: 'مرحله // ۰۵',
          tag: 'همگام‌سازی',
          title: 'سیستم یکپارچه و متصل',
          headline: 'تغییر آرایش فیزیکی اجزا به یک ماشین رشد یکپارچه.',
          description: 'دارایی‌های رسانه‌ای به شکل فیزیکی در یک پایپ‌لاین پیوسته همگام می‌شوند: ویدیوی تبلیغاتی ➔ صفحه فرود پویا ➔ چک‌اوت ➔ CRM ➔ تزریق مجدد داده‌ها به مزایده.',
          statusBadge: 'وضعیت: پایپ‌لاین همگام شد // ۰٪ نشتی',
          frictionAlert: 'اتریبیوشن درآمدی حلقه بسته'
        },
        {
          id: 'insight',
          num: '۰۶',
          code: 'مرحله // ۰۶',
          tag: 'سیستم رشد',
          title: 'مقیاس‌پذیری تصاعدی',
          headline: 'فعالیت بیشتر رشد نمی‌آفریند؛ اتصال هوشمندانه‌تر رشد می‌سازد.',
          description: 'هنگامی که تمام خلاقیت‌ها، تجربه‌های کاربر و داده‌ها در قالب یک سیستم‌عامل واحد همگام می‌شوند، رشد از تصادفی به پیش‌بین تبدیل می‌گردد.',
          statusBadge: 'وضعیت: فلای‌ویل بهینه // ۳.۴ برابر کارایی',
          frictionAlert: 'معماری خودکار و پایدار رشد'
        }
      ],
      mediaLabels: {
        ad: { title: 'ویدیوی تبلیغاتی هدفمند', metric: 'CTR ۴.۸٪', sub: 'اعتبارسنجی پرسرعت قلاب روایی' },
        landing: { title: 'صفحه فرود با قصد بالا', metric: '۱,۸۴۲ آنلاین', sub: 'معماری ارزش و پیشنهاد' },
        mobile: { title: 'تجربه پرداخت موبایلی', metric: '$۳۹۲ سبد خرید', sub: 'معماری تبدیل تک‌کلیکی' },
        analytics: { title: 'اتریبیوشن و تله‌متری', metric: '$۱۸۲.۷K', sub: 'ردیابی قطعی چندکاناله' },
        social: { title: 'کمپین روایی برند', metric: '۱.۴M مخاطب', sub: 'رزونانس روان‌شناختی پیام' },
        search: { title: 'جذب نیت جستجو', metric: '۴.۸X بازدهی', sub: 'قیمت‌گذاری الگوریتمی مزایده' },
        crm: { title: 'حفظ و بازگشت کاربر', metric: '+۸۹٪ ارزش LTV', sub: 'موتور خودکار ریتنشن' }
      },
      conclusion: {
        badge: 'معماری اختصاصی مجیکنسـی',
        titlePrefix: 'فعالیت بیشتر رشد نمی‌آفریند؛',
        titleHighlight: 'اتصال هوشمندانه‌تر رشد می‌سازد.',
        subtitle: 'ما جزیره‌های پراکنده بازاریابی را با مهندسی یک موتور عملکردی یکپارچه و پیش‌بین برای کسب‌وکار شما جایگزین می‌کنیم.',
        cta: 'طراحی سیستم رشد اختصاصی شما'
      }
    },
    legacyCapabilities: {
      eyebrow: 'توانمندی‌های سیستم رشد',
      headline: 'ما فقط تبلیغ نمی‌کنیم؛\nما سیستم‌های رشد می‌سازیم.',
      supporting: 'از استراتژی و خلاقیت تا جذب، آزمایش‌های مداوم و تحلیل داده — هر توانمندی به یک هدف مشترک متصل است: رشد پایدار و مقیاس‌پذیر.',
      cards: [
        {
          num: '۰۱',
          total: '۰۶',
          name: 'استراتژی رشد',
          badge: 'پایه‌گذاری',
          statement: 'قبل از اینکه چیزی را رشد دهیم، باید بدانیم چه چیزی ارزش رشد کردن دارد.',
          desc: 'ما اهداف تجاری، رفتار مخاطب و سیگنال‌های بازار را به یک معماری شفاف رشد تبدیل می‌کنیم تا از هدررفت سرمایه جلوگیری شود.',
          tags: ['جایگاه‌یابی برند', 'استراتژی ورود به بازار', 'تحقیقات مخاطب', 'اقتصاد واحد', 'بلوپرینت رشد'],
          visualType: 'strategy'
        },
        {
          num: '۰۲',
          total: '۰۶',
          name: 'خلاقیت و هویت پیام',
          badge: 'جلب توجه',
          statement: 'ایده‌ها تزیین نیستند؛ آن‌ها زیرساخت اصلی رشد هستند.',
          desc: 'تولید و اعتبارسنجی پرسرعت قلاب‌های روایی و آرت‌دایرکشن روان‌شناسانه که توجه مخاطب هدف را قبل از فرسودگی محتوا جذب می‌کند.',
          tags: ['اعتبارسنجی قلاب‌ها', 'روان‌شناسی پیام', 'سرعت تولید دارایی‌ها', 'محتوای پویا'],
          visualType: 'creative'
        },
        {
          num: '۰۳',
          total: '۰۶',
          name: 'پرفورمنس مارکتینگ و جذب',
          badge: 'جذب هدفمند',
          statement: 'توجه مخاطب اگر اعداد بیزنس را تغییر ندهد، بی‌فایده است.',
          desc: 'تخصیص الگوریتمی رسانه، توزیع بودجه در چند کانال و هوشمندی در مزایده‌های تبلیغاتی برای کاهش پایدار هزینه جذب مشتری (CAC).',
          tags: ['تبلیغات کلیکی و سوشال', 'کاهش مستمر CAC', 'تخصیص الگوریتمی بودجه', 'بازدهی تلفیقی ROAS'],
          visualType: 'performance'
        },
        {
          num: '۰۴',
          total: '۰۶',
          name: 'بهینه‌سازی نرخ تبدیل (CRO)',
          badge: 'معماری تبدیل',
          statement: 'ما حدس نمی‌زنیم؛ ما آزمایش می‌کنیم.',
          desc: 'تست مداوم فرضیه‌ها در صفحات فرود، مسیر خرید و مهندسی پیشنهادها برای تبدیل حداکثری بازدیدکنندگان به خریداران واقعی.',
          tags: ['تست‌های A/B/C', 'معماری صفحات فرود', 'بهبود اصطکاک قیف', 'بهینه‌سازی ارزش پیشنهاد'],
          visualType: 'experimentation'
        },
        {
          num: '۰۵',
          total: '۰۶',
          name: 'هوش داده و اتریبیوشن',
          badge: 'هوش تصمیم‌گیری',
          statement: 'چیزی که سنجیده شود، به درستی فهمیده و بهینه‌سازی می‌شود.',
          desc: 'ردیابی قطعی سمت سرور، اتریبیوشن چندکاناله و تله‌متری کل قیف که نقاط کور تصمیم‌گیری را از بین برده و چرخه بعدی رشد را هدایت می‌کند.',
          tags: ['ردیابی سمت سرور', 'اتریبیوشن چندکاناله', 'مدل‌سازی کوهورت', 'ردیابی سیگنال‌ها'],
          visualType: 'data'
        },
        {
          num: '۰۶',
          total: '۰۶',
          name: 'معماری سیستم‌های رشد',
          badge: 'مقیاس تصاعدی',
          statement: 'هدف نهایی کمپین بعدی نیست؛ یک سیستم پایدار است که خودبه‌خود رشد می‌کند.',
          desc: 'همگرایی هر ۵ توانمندی به یک موتور واحد و پیش‌بین که رشد پایدار ارزش برند و درآمد را تضمین می‌کند.',
          tags: ['همگام‌سازی کامل سیستم', 'چرخه‌های رشد ارگانیک', 'مقیاس‌پذیری تصاعدی', 'عملکرد مستقل'],
          visualType: 'systems'
        }
      ]
    },
    clarityEngine: {
      eyebrow: 'رویکرد و نحوه تفکر مجیکنسـی',
      headline: 'ما به دنبال رشد تصادفی نمی‌دویم؛\nما آن را مهندسی می‌کنیم.',
      shatteredWords: ['عدم قطعیت', 'نویز و شلوغی', 'فرضیات اثبات‌نشده', 'تاکتیک‌های مقطعی', 'جزیره‌های پراکنده'],
      resolvedStatement: 'وضوح، خلق‌کننده رشد است.',
      statementRow1: 'وضوح،',
      statementRow2: 'خلق‌کننده',
      statementHighlight: 'رشد است.',
      subheadline: 'بازاریابی مجموعه‌ای از تاکتیک‌های پراکنده و تصادفی نیست؛ زنجیره‌ای پیوسته از تصمیم‌های هوشمندانه و قطعی است.',
      states: {
        chaos: 'فاز ۰۱ // عدم قطعیت و پراکندگی سیگنال‌ها',
        signal: 'فاز ۰۲ // کشف الگو و هم‌راستاسازی',
        clarity: 'فاز ۰۳ // تبلور و همگرایی وضوح',
        decision: 'فاز ۰۴ // زنجیره تصمیم‌گیری استراتژیک'
      },
      decisionSequence: [
        { code: '۰۱', step: 'مشاهده', fa: 'مشاهده', desc: 'جداسازی اصطکاک رفتاری مخاطب و شاخص‌های اقتصاد واحد' },
        { code: '۰۲', step: 'درک عمیق', fa: 'درک', desc: 'شناسایی نیت واقعی و محرک‌های روان‌شناختی خرید' },
        { code: '۰۳', step: 'تصمیم‌گیری', fa: 'تصمیم', desc: 'مهندسی فرضیه‌های رشد با بالاترین ضریب اهرمی' },
        { code: '۰۴', step: 'خلق دارایی', fa: 'خلق', desc: 'تولید سریع قلاب‌های روایی و صفحات فرود پربازده' },
        { code: '۰۵', step: 'انتشار رسانه', fa: 'انتشار', desc: 'توزیع الگوریتمی رسانه در کانال‌های چندگانه' },
        { code: '۰۶', step: 'سنجش قطعی', fa: 'سنجش', desc: 'اتریبیوشن ۱ به ۱ و ردیابی دقیق سفر مشتری' },
        { code: '۰۷', step: 'یادگیری', fa: 'یادگیری', desc: 'تقویت برندگان، حذف نویزها و کاهش مستمر CAC' },
        { code: '۰۸', step: 'تکرار چرخه', fa: 'تکرار', desc: 'تبدیل شتاب رشد به یک فلای‌ویل خودکار و تصاعدی' }
      ],
      cta: 'بررسی معماری زنجیره تصمیم‌گیری'
    },
    growthOS: {
      eyebrow: 'سیستم‌عامل اختصاصی رشد',
      headline: 'رشد یک کانال تبلیغاتی نیست؛\nیک سیستم‌عامل تعاملی است.',
      subheadline: 'هر تصمیم یک سیگنال تولید می‌کند. هر سیگنال تصمیم بعدی را هدایت می‌کند. این‌گونه است که رشد در گذر زمان تصاعدی می‌شود.',
      statusLabel: 'چرخه عملیاتی فعال',
      modeLive: 'حالت چرخه خودکار: فعال',
      interactiveHint: 'روی هر مرحله کلیک یا هاور کنید تا رفتار سیستم در آن فاز را بررسی نمایید.',
      states: [
        {
          id: 'input',
          step: '۰۱',
          code: 'ورودی // کشف گلوگاه',
          title: 'یک بخش در کسب‌وکار رشد نمی‌کند.',
          statement: 'گلوگاه اولیه کسب‌وکار با هزینه جذب کنترل‌نشده یا توقف رشد در کانال‌های فعلی.',
          mechanism: 'تحلیل ساختار مالی، اصطکاک تجربه خرید مشتری و اصلاح هزینه‌های پراکنده برای یافتن مانع اصلی.',
          telemetry: {
            label: 'جداسازی گلوگاه ریشه‌ای',
            metric: '۱۰۰٪ ممیزی بدون‌سوگیری',
            signalState: 'آماده‌سازی داده‌ها',
            status: 'نرمال'
          }
        },
        {
          id: 'insight',
          step: '۰۲',
          code: 'بینش // الگوهای داده',
          title: 'ما سیگنال واقعی را از میان نویزها استخراج می‌کنیم.',
          statement: 'تفکیک شاخص‌های سطحی از روان‌شناسی تصمیم‌گیری مشتری و محرک‌های اصلی خرید.',
          mechanism: 'فیلتر داده‌ها برای شناسایی کلاسترهای مشتریان با ارزش بالا و فرصت‌های بکر خلاقیت.',
          telemetry: {
            label: 'نسبت سیگنال به نویز',
            metric: '۹۸.۴٪ ضریب اطمینان',
            signalState: 'الگو کشف شد',
            status: 'فعال'
          }
        },
        {
          id: 'action',
          step: '۰۳',
          code: 'اقدام // همگام‌سازی',
          title: 'بینش‌ها به اقدامات یکپارچه تبدیل می‌شوند.',
          statement: 'استراتژی، دارایی‌های خلاق و جذب الگوریتمی همزمان و هماهنگ فعال می‌شوند.',
          mechanism: 'انتشار همگام قلاب‌های روایی، معماری صفحات فرود و مدل‌های قیمت‌گذاری مزایده.',
          telemetry: {
            label: 'سرعت تبدیل بینش به اقدام',
            metric: 'کمتر از ۴۸ ساعت چرخه اجرا',
            signalState: 'کمپین‌ها مسلح شدند',
            status: 'فعال'
          }
        },
        {
          id: 'signal',
          step: '۰۴',
          code: 'سیگنال // تله‌متری زنده',
          title: 'هر اقدام یک سیگنال ملموس خلق می‌کند.',
          statement: 'ردیابی دقیق داده‌ها، ثبت الگوهای تبدیل، میکروکانورژن‌ها و اقتصاد واحد هر کاربر.',
          mechanism: 'اتریبیوشن چندکاناله قطعی که درآمد حاصل را به پیام، مخاطب و کانال دقیق متصل می‌سازد.',
          telemetry: {
            label: 'وضوح اتریبیوشن درآمدی',
            metric: 'تطبیق قطعی ۱ به ۱',
            signalState: 'بازخورد ثبت شد',
            status: 'درحال جریان'
          }
        },
        {
          id: 'optimization',
          step: '۰۵',
          code: 'بهینه‌سازی // تقویت برندگان',
          title: 'آنچه نتیجه می‌دهد تقویت می‌شود؛ آنچه کار نمی‌کند بازطراحی می‌گردد.',
          statement: 'بدون تعصب؛ بودجه تبلیغاتی به سرعت به سناریوها و کانال‌های برنده منتقل می‌شود.',
          mechanism: 'تزریق سرمایه به پربازده‌ترین مسیرها و کاهش تا ۴۵ درصدی هزینه جذب مشتری (CAC).',
          telemetry: {
            label: 'میزان کاهش هزینه جذب (CAC)',
            metric: '۳۸٪ کاهش میانگین',
            signalState: 'بودجه بازتوزیع شد',
            status: 'درحال بهینه‌سازی'
          }
        },
        {
          id: 'compounding',
          step: '۰۶',
          code: 'مقیاس // رشد تصاعدی',
          title: 'این‌گونه است که رشد تصاعدی رخ می‌دهد.',
          statement: 'هر چرخه، چرخه بعدی را باهوش‌تر می‌کند و یک فلای‌ویل رشد پایدار خلق می‌سازد.',
          mechanism: 'ارزش و درآمد کسب‌وکار با کارایی بالاتر سرمایه و مقیاس‌پذیری پایدار اوج می‌گیرد.',
          telemetry: {
            label: 'ضریب بهره‌وری سرمایه',
            metric: '۳.۴ برابر بازدهی خالص',
            signalState: 'چرخه شتاب گرفت',
            status: 'تصاعدی'
          }
        }
      ],
      bottomCta: {
        statement: 'آیا برای تبدیل بازاریابی خود به یک سیستم‌عامل رشد تصاعدی آماده‌اید؟',
        btn: 'راه‌اندازی سیستم‌عامل رشد'
      }
    },
    growthShift: {
      eyebrow: 'تحول استراتژیک در نگاه به رشد',
      assumptionRow1: 'ترافیک بیشتر',
      assumptionOp: '≠',
      assumptionRow2: 'رشد بیشتر',
      frictionLeak: 'بدون معماری تبدیل و تجربه بی‌اصطکاک، سرمایه تبلیغات تبخیر می‌شود',
      reframeVariables: [
        { label: 'جایگاه‌یابی', symbol: '۰۱' },
        { label: 'خلاقیت پیام', symbol: '۰۲' },
        { label: 'جذب هدفمند', symbol: '۰۳' },
        { label: 'معماری تبدیل', symbol: '۰۴' }
      ],
      systemFormula: 'ورودی‌های بهتر ➔ نتایج مقیاس‌پذیرتر',
      resolutionRow1: 'رشد تصادفی پیدا نمی‌شود؛',
      resolutionHighlight: 'مهندسی می‌شود.',
      resolutionSub: 'ورودی‌ها را تغییر دهید. اجزا را همگام کنید. مقیاس‌پذیری تصاعدی و قابل پیش‌بینی را تجربه نمایید.',
      cta: 'مهندسی معماری رشد کسب‌وکار شما'
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
    theBrief: {
      eyebrow: '۰۹ / بریف اختصاصی رشد',
      subeyebrow: 'فرم تماس پر نکنید؛ از یک تصمیم استراتژیک شروع کنید.',
      step1: {
        question: 'قصد دارید چه چیزی را در کسب‌وکارتان تغییر دهید؟',
        sub: 'جهت‌گیری استراتژیک و بردار اصلی هدف خود را انتخاب کنید.',
        options: [
          { id: 'grow', label: 'رشد و اسکیل سریع‌تر', context: 'افزایش سرعت جذب، شتاب‌بخشی به قیف فروش و درآمد تصاعدی.' },
          { id: 'reposition', label: 'بازتعریف جایگاه برند', context: 'روایت هویتی قاطع، معماری ارزش پیشنهادی و تمایز در بازار.' },
          { id: 'build', label: 'ساخت یک دارایی جدید', context: 'توسعه پلتفرم وب، تجربه کاربری با نرخ تبدیل بالا و محصولات دیجیتال.' },
          { id: 'fix', label: 'اصلاح نقاط ناکارآمد', context: 'ممیزی جامع اصطکاک، رفع نشتی قیف و بازیابی نرخ تبدیل.' },
          { id: 'other', label: 'موردی دیگر', context: 'چالشی خاص یا فرصتی جدید در بازار که نیاز به طراحی اختصاصی دارد.' }
        ]
      },
      step2: {
        question: 'چه مانعی سر راه این هدف قرار دارد؟',
        sub: 'گلوگاه عملیاتی یا استراتژیک اصلی را مشخص نمایید.',
        options: [
          { id: 'direction', label: 'نبود مسیر و جهت شفاف', context: 'تاکتیک‌های پراکنده بدون یک تز جامع و هدایت‌کننده رشد.' },
          { id: 'conversion', label: 'نرخ تبدیل پایین کاربران', context: 'مخاطب وارد می‌شود اما قبل از تصمیم‌گیری نهایی ریزش می‌کند.' },
          { id: 'outgrown', label: 'محدودیت سیستم فعلی', context: 'زیرساخت قبلی دیگر توان پاسخگویی به مقیاس فعلی بیزنس را ندارد.' },
          { id: 'compounding', label: 'رشد نیافتن تصاعدی بازاریابی', context: 'هر ماه با هزینه‌های رو به افزایش جذب، کار از صفر شروع می‌شود.' },
          { id: 'zero', label: 'شروع کامل از نقطه صفر', context: 'ساخت معماری رشد از پایه برای محصول جدید یا چرخش استراتژیک.' },
          { id: 'other_obstacle', label: 'سایر موانع پیچیده', context: 'مسائل داخلی یا نوسانات بازار که نیازمند عارضه‌یابی اختصاصی است.' }
        ]
      },
      step3: {
        question: 'مقصد نهایی کجاست و چه نتیجه‌ای می‌خواهید؟',
        sub: 'خروجی تجاری مورد انتظار خود را مشخص کنید.',
        options: [
          { id: 'demand', label: 'تقاضا و سرنخ‌های باکیفیت‌تر', context: 'جریان مداوم و پرسرعت لیدها و خریداران هدفمند.' },
          { id: 'positioning', label: 'جایگاه‌یابی و ارزش برتر برند', context: 'قدرت قیمت‌گذاری انحصاری و رهبری در دسته بازار.' },
          { id: 'experience', label: 'تجربه دیجیتال و محصولی برتر', context: 'محصولات تعاملی و وب‌سایتی با کلاس جهانی.' },
          { id: 'system', label: 'یک سیستم رشد مقیاس‌پذیر و خودکار', context: 'چرخ‌دنده‌ای پایدار، قابل پیش‌بینی و خودکار برای رشد بلندمدت.' },
          { id: 'unsure', label: 'هنوز کاملاً مطمئن نیستم', context: 'نیاز به یک ممیزی و ارزیابی استراتژیک اولیه داریم.' }
        ]
      },
      summary: {
        badge: 'بریف استراتژیک شما',
        readyHeadline: 'اکنون نقطه‌ای شفاف برای آغاز داریم.',
        readySub: 'پاسخ‌های شما در پروتکل تحلیل و عارضه‌یابی مجیکنسـی ثبت شد.',
        ctaBtn: 'ارسال بریف و آغاز گفتگو →',
        resetBtn: 'ویرایش بریف',
        finalStatement1: 'نه فقط یک کمپین دیگر؛',
        finalStatement2: 'یک سیستم بهتر و پایدار.'
      }
    },
    theReveal: {
      eyebrow: 'متدولوژی و فرآیند خلق رشد',
      surfaceLead: 'همیشه در زیر سطح،',
      surfaceHighlight: 'چیزی عمیق‌تر در جریان است.',
      surfaceSub: 'بدون قالب‌های آماده. بدون حدس و گمان. بدون تاکتیک‌های پراکنده. برای کنار رفتن لایه‌های معماری رشد اسکرول کنید.',
      layers: [
        {
          num: '۰۱',
          code: 'شناخت عمیق',
          headline: 'قبل از ساختن هر چیز، آنچه واقعاً مهم است را درک می‌کنیم.',
          desc: 'تحلیل مخاطب هدف، کالیبراسیون اقتصاد واحد و تله‌متری رفتاری.',
          tags: ['شناخت مشتری', 'تحلیل بازار', 'داده‌های واقعی', 'زمینه کسب‌وکار']
        },
        {
          num: '۰۲',
          code: 'تعریف جهت',
          headline: 'پیچیدگی‌های بیزنس را به یک مسیر شفاف تبدیل می‌کنیم.',
          desc: 'جایگاه‌یابی قاطع و معماری پیشنهادی که در نویز بازار متمایز می‌شود.',
          tags: ['جایگاه‌یابی', 'ارزش پیشنهادی', 'هویت پیام', 'اهداف شفاف']
        },
        {
          num: '۰۳',
          code: 'ساخت دارایی',
          headline: 'استراتژی به چیزی تبدیل می‌شود که مخاطب آن را تجربه می‌کند.',
          desc: 'دارایی‌های خلاق پربازده، لندینگ پیج‌های پویا و مسیر خرید بدون‌اصطکاک.',
          tags: ['تولید خلاق', 'تجربه کاربر', 'کمپین‌های زنده', 'سیستم تبدیل']
        },
        {
          num: '۰۴',
          code: 'یادگیری مستمر',
          headline: 'هر تعامل کاربر یک سیگنال معنادار خلق می‌کند.',
          desc: 'ردیابی قطعی چندکاناله که هر کلیک را به هوش تصمیم‌گیری تبدیل می‌سازد.',
          tags: ['داده‌های دقیق', 'آزمایش‌های زنده', 'بازخورد سریع', 'بینش عملیاتی']
        },
        {
          num: '۰۵',
          code: 'مقیاس‌پذیری',
          headline: 'آنچه نتیجه داده، پایه‌ای برای جهش بعدی بیزنس می‌شود.',
          desc: 'تخصیص الگوریتمی سرمایه، کاهش مستمر CAC و رشد تصاعدی ارزش برند.',
          tags: ['بهینه‌سازی', 'تقویت برندگان', 'خودکارسازی', 'اسکیل تصاعدی']
        }
      ],
      climax: {
        headline: 'رشد یک سیستم یکپارچه است؛',
        highlight: 'نه زنجیره‌ای از تاکتیک‌های جداگانه.',
        subheadline: 'وقتی تمام لایه‌ها با هم همگام می‌شوند، مقیاس‌پذیری اجتناب‌ناپذیر و قابل پیش‌بینی می‌گردد.',
        cta: 'تجربه معماری یکپارچه رشد'
      }
    },
    selectedWork: {
      eyebrow: 'نمونه‌کارهای منتخب',
      headline: 'ایده‌ها زمانی ارزشمندند\nکه اعداد بیزنس را جابه‌جا کنند.',
      subheadline: 'منتخبی از استراتژی‌ها، تجربیات دیجیتال و سیستم‌های رشد مهندسی‌شده برای خلق نتایج تجاری ملموس و مقیاس‌پذیر.',
      scrollHint: 'اسکرول کنید تا نمایشگاه پروژه‌ها را مرور کنید',
      projects: [
        {
          num: '۰۱',
          total: '۰۴',
          client: 'فین‌تک ولوکس (VELOX)',
          industry: 'زیرساخت مدیریت دارایی و فین‌تک',
          statement: 'معماری مجدد سفر مشتری و مقیاس‌پذیری الگوریتمی در جذب کاربر فعال معاملات مالی.',
          scope: ['استراتژی رشد', 'جذب الگوریتمی', 'معماری تبدیل'],
          primaryMetric: '+۱۴۸٪',
          metricLabel: 'افزایش ارزش طول عمر (LTV)',
          secondaryMetric: '۳۴٪ کاهش هزینه جذب',
          accent: '#FF5500',
          visualType: 'fintech'
        },
        {
          num: '۰۲',
          total: '۰۴',
          client: 'برند لومینا (LUMINA)',
          industry: 'برندینگ مستقیم به مشتری (D2C)',
          statement: 'مهندسی هویت روایی، اعتبارسنجی قلاب‌های ویدیویی و بهینه‌سازی مسیر خرید برای خلق فروش تصاعدی.',
          scope: ['خلاقیت و سناریو', 'روان‌شناسی پیام', 'تبلیغات پولی'],
          primaryMetric: '۴.۸X',
          metricLabel: 'بازدهی تلفیقی بودجه (ROAS)',
          secondaryMetric: '+۱۴ میلیون دلار فروش',
          accent: '#FFAA44',
          visualType: 'luxury'
        },
        {
          num: '۰۳',
          total: '۰۴',
          client: 'سیناپس هوش مصنوعی (SYNAPSE)',
          industry: 'نرم‌افزار ابری سازمانی (B2B SaaS)',
          statement: 'تغییر موقعیت در بازار، بازطراحی قیف درخواست دمو و جذب حساب‌های کلیدی سازمانی.',
          scope: ['جایگاه‌یابی B2B', 'بهینه‌سازی دمو', 'اتریبیوشن داده'],
          primaryMetric: '+۲۱۰٪',
          metricLabel: 'شتاب پایپ‌لاین فروش',
          secondaryMetric: '۶۸٪ نرخ تبدیل دمو',
          accent: '#00F59B',
          visualType: 'saas'
        },
        {
          num: '۰۴',
          total: '۰۴',
          client: 'نکسوس سلامت (NEXUS)',
          industry: 'سلامت دیجیتال و پزشکی از راه دور',
          statement: 'ردیابی قطعی سمت سرور، مدل‌سازی سفر بیمار و چرخه‌های مقیاس‌پذیر جذب درمانجو.',
          scope: ['تله‌متری و داده', 'چرخه‌های بازگشت', 'کاهش CAC'],
          primaryMetric: '+۸۹٪',
          metricLabel: 'نرخ بازگشت بیماران',
          secondaryMetric: '۳.۲ برابر کارایی سرمایه',
          accent: '#FF5500',
          visualType: 'health'
        }
      ]
    },
    modal: {
      title: 'آغاز گفتگوی استراتژیک رشد با مجیکنسـی',
      subtitle: 'وضعیت فعلی کسب‌وکار و اهداف توسعه خود را با ما در میان بگذارید تا پس از بررسی گلوگاه‌های رشد، گفتگوی استراتژیک را آغاز کنیم.',
      stageLabel: 'Current Stage & Scale',
      stages: ['شروع جذب و اعتبارسنجی اولیه', 'رشد سریع و اسکیل فروش', 'برند تثبیت‌شده و توسعه کانال‌ها', 'مقیاس سازمانی (Enterprise)'],
      objectiveLabel: 'Primary Growth Priority',
      objectives: ['بهینه‌سازی تبلیغات پولی و کاهش CAC', 'پیاده‌سازی سیستم جامع و یکپارچه رشد', 'تولید و تست مستمر محتوا و دارایی‌های خلاق', 'بهبود نرخ تبدیل قیف فروش و لندینگ پیج‌ها'],
      emailLabel: 'ایمیل کاری یا شماره تماس مستقیم',
      submitBtn: 'ارسال درخواست و تعیین جلسه',
      disclaimer: 'اطلاعات شما کاملاً محرمانه بررسی خواهد شد.',
      successTitle: 'درخواست شما ثبت شد',
      successMessage: 'با سپاس. کارشناسان ارشد استراتژی مجیکنسـی پس از بررسی اولیه بیزنس شما، جهت هماهنگی تماس خواهند گرفت.'
    },
    projectDiscovery: {
      eyebrow: '۰۱ / ۰۸',
      title: 'شروع پروژه',
      steps: {
        step1: {
          id: 'about',
          number: '۰۱',
          title: 'درباره شما',
          fields: {
            name: 'نام و نام خانوادگی',
            company: 'نام شرکت',
            role: 'سمت شغلی',
            email: 'ایمیل کاری'
          }
        },
        step2: {
          id: 'challenge',
          number: '۰۲',
          title: 'چالش اصلی',
          options: [
            { id: 'grow', label: 'رشد سریع‌تر', desc: 'شتاب‌دهی به جذب مشتری و مقیاس‌پذیری' },
            { id: 'reposition', label: 'تغییر جایگاه', desc: 'بازطراحی هویت برند و شفافیت پیام' },
            { id: 'build', label: 'ساخت محصول جدید', desc: 'توسعه وب‌سایت، اپلیکیشن و محصول دیجیتال' },
            { id: 'fix', label: 'رفع مشکلات فعلی', desc: 'عارضه‌یابی و بهبود نرخ تبدیل' }
          ]
        },
        step3: {
          id: 'needs',
          number: '۰۳',
          title: 'نیاز شما',
          options: [
            'استراتژی و رشد',
            'پرفورمنس مارکتینگ و تولید محتوا',
            'تکنولوژی، هوش مصنوعی و اتوماسیون',
            'مطمئن نیستم، نیاز به بررسی دارم'
          ]
        },
        step4: {
          id: 'timeline',
          number: '۰۴',
          title: 'زمان‌بندی',
          options: [
            'در سریع‌ترین زمان ممکن',
            'طی ۱ تا ۲ ماه آینده',
            'طی ۳ تا ۶ ماه آینده',
            'فقط در حال بررسی هستم'
          ]
        },
        step5: {
          id: 'investment',
          number: '۰۵',
          title: 'بودجه تقریبی',
          options: [
            'کمتر از ۵۰ میلیون تومان',
            '۵۰ تا ۲۰۰ میلیون تومان',
            '۲۰۰ تا ۵۰۰ میلیون تومان',
            'بیشتر از ۵۰۰ میلیون تومان'
          ]
        },
        step6: {
          id: 'brief',
          number: '۰۶',
          title: 'خلاصه پروژه',
          placeholder: 'کمی بیشتر در مورد هدفی که می‌خواهید به آن برسید بنویسید...'
        },
        step7: {
          id: 'review',
          number: '۰۷',
          title: 'مروری بر اطلاعات',
          summaryTitle: 'اطلاعات وارد شده',
          submitBtn: 'ارسال درخواست'
        },
        step8: {
          id: 'sent',
          number: '۰۸',
          title: 'ارسال شد',
          successTitle: 'درخواست شما ثبت شد.',
          successMessage: 'تیم استراتژی ما درخواست شما را بررسی کرده و به زودی با شما تماس خواهد گرفت.'
        }
      },
      controls: {
        next: 'مرحله بعد',
        prev: 'مرحله قبل',
        close: 'بستن'
      }
    },
    approach: {
      pageMeta: {
        title: 'رویکرد ما // تفکر و سیستم رشد // مجیکنسـی (MAGICENCY®)',
        description: 'ما اول کسب‌وکار را عمیقاً می‌فهمیم، سپس سیستمی را مهندسی می‌کنیم که باعث رشد آن شود.'
      },
      hero: {
        eyebrow: 'رویکرد ما',
        headlineLine1: 'ما با پاسخ',
        headlineLine2: 'شروع نمی‌کنیم.',
        subline: 'با فهمیدن اینکه چه چیزی باید تغییر کند شروع می‌کنیم.',
        metaphor: 'هرج‌ومرج ← پیوند ← شفافیت'
      },
      deconstruction: {
        badge: '۰۱ / عارضه‌یابی',
        title: 'از درخواست تا صورت‌مسئله',
        requestPrompt: 'درخواست اولیه',
        requestQuote: '«ما به یک وبسایت جدید نیاز داریم.»',
        subtext: 'ما درخواست را کالبدشکافی می‌کنیم تا ریشه اصلی تحول را کشف کنیم.',
        revealedTitle: 'مسئله واقعی',
        problems: [
          {
            id: 'positioning',
            title: 'جایگاه‌یابی',
            desc: 'برند ارزش تجاری خود را به درستی و وضوح منتقل نمی‌کند.'
          },
          {
            id: 'experience',
            title: 'تجربه کاربر',
            desc: 'مسیر تعامل مشتری دارای اصطکاک بالا و کشش اندک است.'
          },
          {
            id: 'conversion',
            title: 'نرخ تبدیل',
            desc: 'ترافیک وارد صفحاتی فاقد معماری سیستماتیک اثبات ارزش می‌شود.'
          },
          {
            id: 'acquisition',
            title: 'جذب مخاطب',
            desc: 'کانال‌ها جزیره‌ای هستند و چرخه‌های رشد بازگشتی شکل نگرفته است.'
          }
        ]
      },
      systemNetwork: {
        badge: '۰۲ / سیستم',
        headline: 'هیچ چیزی در انزوا کار نمی‌کند.',
        subheadline: 'وقتی بازاریابی شکست می‌خورد، به این دلیل است که دیسیپلین‌ها متصل نیستند. ما یک مدار زنده مهندسی می‌کنیم.',
        centralNode: 'کسب‌وکار',
        nodes: [
          { id: 'strategy', label: 'استراتژی', micro: 'جهت و مسیر.' },
          { id: 'creative', label: 'خلاقیت', micro: 'معنا و هویت.' },
          { id: 'digital', label: 'دیجیتال', micro: 'تجربه تعاملی.' },
          { id: 'acquisition', label: 'جذب مخاطب', micro: 'کشش و تقاضا.' },
          { id: 'measurement', label: 'سنجش و داده', micro: 'یادگیری تجربی.' }
        ],
        loopReturn: 'سنجش داده‌ها ← بینش تحلیلی ← استراتژی بعدی'
      },
      shift: {
        badge: '۰۳ / گذار بنیادی',
        headline: 'از اقدامات جزیره‌ای تا رشد پیوسته و متصل',
        subheadline: 'تاکتیک‌ها پس از هر کمپین به نقطه صفر بازمی‌گردند. سیستم‌ها شتابی مرکب و دائمی می‌سازند.',
        tacticsTitle: 'تاکتیک‌ها',
        tacticsSubtitle: 'اقدامات جزیره‌ای',
        tacticsItems: ['کمپین', 'وبسایت', 'محتوا', 'تبلیغات'],
        systemTitle: 'سیستم',
        systemSubtitle: 'رشد پیوسته',
        systemItems: ['استراتژی', 'خلاقیت', 'دیجیتال', 'جذب مخاطب', 'سنجش داده']
      },
      compounding: {
        badge: '۰۴ / رشد تصاعدی',
        headline: 'چرا به شکل سیستم فکر می‌کنیم.',
        axiom: 'تصمیم‌های بهتر، سیستم‌های قوی‌تر می‌سازند.\nسیستم‌های قوی‌تر، رشد تصاعدی خلق می‌کنند.',
        subtext: 'هر چرخه، چرخه بعدی را هوشمندانه‌تر و قدرتمندتر می‌کند.',
        steps: [
          '۱ تصمیم استراتژیک',
          'تصمیم + یادگیری',
          'تصمیم + یادگیری + داده',
          'تصمیم + یادگیری + داده + تجربه',
          'مقیاس تصاعدی مرکب'
        ]
      },
      closing: {
        statement: 'رشد، مجموعه‌ای از تاکتیک‌های پراکنده نیست.\nرشد، سیستمِ اتخاذ تصمیم‌های بهتر است.',
        ctaButton: 'شروع پروژه'
      }
    },
    capabilities: {
      pageMeta: {
        title: 'توانمندی‌ها // آنچه می‌سازیم // مجیکنسـی (MAGICENCY®)',
        description: 'آنچه می‌سازیم وقتی اجزا به هم متصل می‌شوند. استراتژی، خلاقیت، دیجیتال و رشد — مهندسی‌شده در قالب یک سیستم واحد.'
      },
      hero: {
        eyebrow: 'توانمندی‌ها',
        headlineLine1: 'آنچه می‌سازیم',
        headlineLine2: 'وقتی اجزا به هم متصل می‌شوند.',
        subline: 'استراتژی، خلاقیت، دیجیتال و رشد — مهندسی‌شده در قالب یک سیستم واحد.',
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
        title: 'دیدگاه‌ها و مقالات // نشریه تحلیلی // مجیکنسـی (MAGICENCY®)',
        description: 'ایده‌هایی که ارزش اندیشیدن دارند. استراتژی، خلاقیت، دیجیتال و رشد از زاویه دید مهندسان آن‌ها.'
      },
      hero: {
        eyebrow: 'بینش و دیدگاه // دوره چهارم',
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
