/**
 * PROBLEM INSIGHT DATA MODEL
 * 5 Problem Insight States matching the exact narrative specification:
 * 01 — THE PROBLEM (Image 11: 3D padlock)
 * 02 — MORE CHANNELS (Image 12: 3D antenna)
 * 03 — THE INSIGHT (Image 13: 3D magnifying glass)
 * 04 — CONNECTION (Image 14: 3D precision connectors)
 * 05 — GROWTH OPERATING SYSTEM (Image 15: 3D precision engine)
 */

export const PROBLEM_INSIGHT_STEPS = [
  {
    step: 1,
    id: 'fragmentation',
    imageName: '11',
    image: '/assets/problem-insight/11.webp',
    image400: '/assets/problem-insight/11-400w.webp',
    imagePng: '/assets/problem-insight/11.png',
    imageAlt: {
      en: '3D padlock representing a blocked growth system — The Problem',
      fa: 'قفل سه‌بعدی نماد سیستم رشد قفل‌شده — مسئله بنیادین'
    },
    eyebrow: {
      en: 'THE PROBLEM',
      fa: 'مسئله بنیادین'
    },
    titleLine1: {
      en: "Marketing doesn't fail",
      fa: 'شکست بازاریابی به دلیل'
    },
    titleLine2: {
      en: "because there aren't enough channels.",
      fa: 'کمبود کانال‌های تبلیغاتی نیست.'
    },
    description: {
      en: 'Businesses accumulate disconnected tools, channels, and campaigns. But activity without structural cohesion creates friction, not compounding growth.',
      fa: 'کسب‌وکارها ابزارها، کانال‌ها و کمپین‌های جداگانه را انباشته می‌کنند؛ اما فعالیت بدون انسجام ساختاری، صرفاً اصطکاک ایجاد می‌کند نه رشد هم‌افزا.'
    },
    chips: ['ADS', 'SEO', 'SOCIAL', 'CONTENT', 'WEBSITE', 'ANALYTICS', 'CRM', 'CAMPAIGNS'],
    status: {
      en: 'STATE: FRAGMENTED & DISCONNECTED',
      fa: 'وضعیت: جزیره‌ای و پراکنده'
    }
  },
  {
    step: 2,
    id: 'channels',
    imageName: '12',
    image: '/assets/problem-insight/12.webp',
    image400: '/assets/problem-insight/12-400w.webp',
    imagePng: '/assets/problem-insight/12.png',
    imageAlt: {
      en: '3D antenna representing multiple marketing channels — More Channels',
      fa: 'آنتن سه‌بعدی نماد کانال‌های بازاریابی پراکنده — کانال‌های بیشتر'
    },
    eyebrow: {
      en: 'MORE CHANNELS',
      fa: 'کانال‌های بیشتر'
    },
    titleLine1: {
      en: "More channels don't",
      fa: 'کانال‌های بیشتر لزوماً'
    },
    titleLine2: {
      en: 'automatically create growth.',
      fa: 'رشد خودکار خلق نمی‌کنند.'
    },
    supportingIdea: {
      en: 'Disconnected channels make growth harder to see, measure, and optimize.',
      fa: 'کانال‌های نامتصل مشاهده، سنجش و بهینه‌سازی رشد را پیچیده‌تر و مبهم‌تر می‌کنند.'
    },
    description: {
      en: 'Disconnected channels compete for budget rather than multiplying return, turning marketing into an increasingly complex attribution blindspot.',
      fa: 'کانال‌های نامتصل به جای هم‌افزایی و چندبرابر کردن بازده، برای تصاحب بودجه رقابت می‌کنند و سیستم را کدر می‌سازند.'
    },
    chips: ['ISOLATED SILOS', 'ATTRIBUTION BLINDSPOTS', 'BUDGET COMPETITION', 'ZERO COMPOUNDING'],
    status: {
      en: 'STATE: MOUNTING COMPLEXITY',
      fa: 'وضعیت: افزایش پیچیدگی'
    }
  },
  {
    step: 3,
    id: 'insight',
    imageName: '13',
    image: '/assets/problem-insight/13.webp',
    image400: '/assets/problem-insight/13-400w.webp',
    imagePng: '/assets/problem-insight/13.png',
    imageAlt: {
      en: '3D magnifying glass representing marketing insight — The Insight',
      fa: 'ذره‌بین سه‌بعدی نماد بینش و شفافیت بازاریابی — نگرش بنیادین'
    },
    eyebrow: {
      en: 'THE INSIGHT',
      fa: 'نگرش بنیادین'
    },
    titleLine1: {
      en: "The problem isn't",
      fa: 'مسئله بازاریابی'
    },
    titleLine2: {
      en: 'more marketing.',
      fa: 'بیشتر نیست.'
    },
    secondaryStatement: {
      en: "It's disconnected marketing.",
      fa: 'مسئله بازاریابی نامتصل است.'
    },
    description: {
      en: 'Activity without unified architecture is just tactical noise that resets to zero every quarter. Compounding begins only when the pieces connect.',
      fa: 'فعالیت بدون معماری یکپارچه هیاهوی تاکتیکی است که هر فصل صفر می‌شود. هم‌افزایی پایدار تنها با اتصال ساختاری آغاز می‌گردد.'
    },
    chips: ['TACTICAL NOISE', 'VS', 'STRUCTURAL ALIGNMENT'],
    status: {
      en: 'STATE: CONCEPTUAL CLIMAX',
      fa: 'وضعیت: اوج نگرش ساختاری'
    }
  },
  {
    step: 4,
    id: 'connection',
    imageName: '14',
    image: '/assets/problem-insight/14.webp',
    image400: '/assets/problem-insight/14-400w.webp',
    imagePng: '/assets/problem-insight/14.png',
    imageAlt: {
      en: '3D precision connectors representing connected marketing systems — Connection',
      fa: 'کانکتورهای دقیق سه‌بعدی نماد سیستم‌های متصل بازاریابی — اتصال سیستم'
    },
    eyebrow: {
      en: 'CONNECTION',
      fa: 'اتصال سیستم'
    },
    titleLine1: {
      en: 'Growth happens when the system',
      fa: 'رشد زمانی محقق می‌شود که'
    },
    titleLine2: {
      en: 'starts working together.',
      fa: 'سیستم به صورت هماهنگ کار کند.'
    },
    description: {
      en: 'Aligning strategy, user experience, high-intent acquisition, and full-funnel measurement into a synchronized, compounding pipeline.',
      fa: 'هماهنگ‌سازی استراتژی، تجربه کاربری، جذب هدفمند و اندازه‌گیری سرتاسری در یک زنجیره پیوسته و هم‌افزا.'
    },
    chips: ['STRATEGY ↓', 'EXPERIENCE ↓', 'ACQUISITION ↓', 'MEASUREMENT ↓', 'OPTIMIZATION'],
    status: {
      en: 'STATE: COORDINATED SYSTEM',
      fa: 'وضعیت: سیستم متصل و هماهنگ'
    }
  },
  {
    step: 5,
    id: 'growth-os',
    imageName: '15',
    image: '/assets/problem-insight/15.webp',
    image400: '/assets/problem-insight/15-400w.webp',
    imagePng: '/assets/problem-insight/15.png',
    imageAlt: {
      en: '3D precision engine representing a growth operating system — Growth Operating System',
      fa: 'موتور مهندسی سه‌بعدی نماد سیستم‌عامل رشد — سیستم‌عامل رشد'
    },
    eyebrow: {
      en: 'GROWTH OPERATING SYSTEM',
      fa: 'سیستم‌عامل رشد'
    },
    titleLine1: {
      en: "Growth isn't a channel.",
      fa: 'رشد یک کانال نیست.'
    },
    titleLine2: {
      en: 'Growth is an operating system.',
      fa: 'رشد یک سیستم‌عامل است.'
    },
    secondaryStatement: {
      en: 'Growth is an operating system.',
      fa: 'رشد یک سیستم‌عامل است.'
    },
    description: {
      en: 'When every layer compounds together, marketing stops being a series of speculative bets and becomes an autonomous, predictable engine.',
      fa: 'وقتی تمام لایه‌ها با هم هم‌افزا شوند، بازاریابی از شرط‌بندی‌های مقطعی رها شده و به موتوری خودگردان، پایدار و پیش‌بینی‌پذیر تبدیل می‌شود.'
    },
    chips: ['STRATEGY →', 'EXPERIENCE →', 'ACQUISITION →', 'MEASUREMENT →', 'OPTIMIZATION →', 'COMPOUNDING'],
    status: {
      en: 'STATE: RESOLUTION & AUTONOMY',
      fa: 'وضعیت: فرجام و سیستم‌عامل رشد'
    }
  }
];

