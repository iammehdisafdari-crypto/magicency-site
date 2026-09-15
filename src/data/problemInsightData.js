/**
 * PROBLEM INSIGHT DATA MODEL
 * 5 Distinct States following the Exact Skewed Split-Screen Architecture
 * Alternating:
 * State 1: Visual LEFT / Content RIGHT
 * State 2: Content LEFT / Visual RIGHT
 * State 3: Visual LEFT / Content RIGHT
 * State 4: Content LEFT / Visual RIGHT
 * State 5: Visual LEFT / Content RIGHT
 */

export const SKEWED_PAGES_DATA = [
  {
    page: 1,
    id: 'fragmentation',
    visualSide: 'left',
    contentSide: 'right',
    image: '/assets/capabilities/experimentation.webp',
    imageJpg: '/assets/capabilities/experimentation.jpg',
    visualBadge: {
      en: 'FRAGMENTATION // DISPERSED EFFORT',
      fa: 'اقدامات جزیره‌ای // پراکندگی توان'
    },
    visualItems: ['ADS', 'SEO', 'SOCIAL', 'CONTENT', 'WEBSITE', 'ANALYTICS', 'CRM', 'CAMPAIGNS'],
    eyebrow: {
      en: '01 / THE PROBLEM',
      fa: '۰۱ / مسئله بنیادین'
    },
    heading: {
      en: "Marketing doesn't fail because there aren't enough channels.",
      fa: 'شکست بازاریابی به دلیل کمبود کانال‌های تبلیغاتی نیست.'
    },
    description: {
      en: 'Businesses accumulate disconnected tools, channels, and campaigns. But activity without structural cohesion creates friction, not compounding growth.',
      fa: 'کسب‌وکارها کانال‌ها و ابزارهای پراکنده را روی هم تلنبار می‌کنند. اما فعالیت بدون معماری یکپارچه، صرفاً اصطکاک و هزینه ایجاد می‌کند، نه رشد تصاعدی.'
    },
    status: {
      en: 'STATE: DISCONNECTED SILOS',
      fa: 'وضعیت: جزیره‌های مستقل و بی‌ارتباط'
    }
  },
  {
    page: 2,
    id: 'channels',
    visualSide: 'right',
    contentSide: 'left',
    image: '/assets/capabilities/analytics.webp',
    imageJpg: '/assets/capabilities/analytics.jpg',
    visualBadge: {
      en: 'COMPLEXITY TRAP // DATA NOISE',
      fa: 'تله پیچیدگی // خطای داده‌ها'
    },
    visualItems: ['ISOLATED SILOS', 'ATTRIBUTION BLINDSPOTS', 'BUDGET COMPETITION', 'ZERO COMPOUNDING'],
    eyebrow: {
      en: '02 / MORE CHANNELS',
      fa: '۰۲ / کانال‌های بیشتر'
    },
    heading: {
      en: "More channels don't automatically create growth.",
      fa: 'کانال‌های بیشتر لزوماً رشد بیشتری خلق نمی‌کنند.'
    },
    description: {
      en: 'When every channel operates independently, the system becomes harder to understand, measure, and optimize. Disconnected channels compete for budget rather than multiplying return.',
      fa: 'وقتی هر کانال جداگانه عمل کند، سیستم غیرقابل اندازه‌گیری و اصلاح می‌شود. بخش‌های مختلف به جای هم‌افزایی، برای تصاحب بودجه رقابت می‌کنند.'
    },
    status: {
      en: 'STATE: MOUNTING FRICTION',
      fa: 'وضعیت: افزایش اصطکاک عملیاتی'
    }
  },
  {
    page: 3,
    id: 'insight',
    visualSide: 'left',
    contentSide: 'right',
    image: '/assets/capabilities/strategy.webp',
    imageJpg: '/assets/capabilities/strategy.jpg',
    visualBadge: {
      en: 'CORE DIAGNOSIS // THE CRITICAL FLAW',
      fa: 'تشخیص بنیادین // ریشه مسئله'
    },
    visualItems: ['TACTICAL BUSYNESS', 'VS', 'STRUCTURAL ALIGNMENT'],
    eyebrow: {
      en: '03 / THE INSIGHT',
      fa: '۰۳ / نگرش راهبردی'
    },
    heading: {
      en: "The problem isn't more marketing.",
      fa: 'مسئله بازاریابی بیشتر نیست.'
    },
    emphasis: {
      en: "It's disconnected marketing.",
      fa: 'مسئله بازاریابی نامتصل است.'
    },
    description: {
      en: 'Activity without unified architecture is just tactical noise that resets to zero every quarter. Compounding begins only when the pieces connect.',
      fa: 'فعالیت بدون معماری، صرفاً هیاهوی تاکتیکی است که با پایان هر فصل صفر می‌شود. هم‌افزایی واقعی تنها زمانی آغاز می‌شود که اجزا به هم متصل شوند.'
    },
    status: {
      en: 'STATE: ARCHITECTURAL AWAKENING',
      fa: 'وضعیت: آگاهی ساختاری'
    }
  },
  {
    page: 4,
    id: 'connection',
    visualSide: 'right',
    contentSide: 'left',
    image: '/assets/capabilities/performance.webp',
    imageJpg: '/assets/capabilities/performance.jpg',
    visualBadge: {
      en: 'INTEGRATED FLOW // CLOSED-LOOP ATTRIBUTION',
      fa: 'جریان یکپارچه // اتریبیوشن حلقه-بسته'
    },
    visualItems: ['STRATEGY', 'EXPERIENCE', 'ACQUISITION', 'MEASUREMENT', 'OPTIMIZATION'],
    eyebrow: {
      en: '04 / CONNECTION',
      fa: '۰۴ / اتصال سیستم'
    },
    heading: {
      en: 'Growth happens when the system starts working together.',
      fa: 'رشد زمانی رخ می‌دهد که سیستم به صورت یکپارچه کار کند.'
    },
    description: {
      en: 'Connecting brand positioning, frictionless digital experiences, high-intent acquisition, and full-funnel telemetry into a single continuous feedback loop.',
      fa: 'اتصال جایگاه‌یابی برند، تجربه دیجیتال روان، جذب هدفمند و تله‌متری سرتاسری در یک چرخه بسته بازخورد پیوسته.'
    },
    status: {
      en: 'STATE: SYNCHRONIZED ENGINE',
      fa: 'وضعیت: موتور هماهنگ رشد'
    }
  },
  {
    page: 5,
    id: 'operating-system',
    visualSide: 'left',
    contentSide: 'right',
    image: '/assets/capabilities/growth_systems.webp',
    imageJpg: '/assets/capabilities/growth_systems.jpg',
    visualBadge: {
      en: 'SYSTEM ACTIVE // COMPOUNDING VELOCITY',
      fa: 'سیستم فعال // سرعت رشد تصاعدی'
    },
    visualItems: ['STRATEGY → EXPERIENCE → ACQUISITION → MEASUREMENT → OPTIMIZATION → COMPOUNDING'],
    eyebrow: {
      en: '05 / THE OPERATING SYSTEM',
      fa: '۰۵ / سیستم‌عامل رشد'
    },
    heading: {
      en: "Growth isn't a channel.",
      fa: 'رشد یک کانال نیست.'
    },
    emphasis: {
      en: 'Growth is an operating system.',
      fa: 'رشد یک سیستم‌عامل است.'
    },
    description: {
      en: 'When every layer compounds together, marketing stops being a series of speculative bets and becomes an autonomous, predictable enterprise engine.',
      fa: 'وقتی تمام لایه‌ها به صورت هم‌افزا کار کنند، بازاریابی از شرط‌بندی‌های پرریسک خارج شده و به یک موتور قابل‌پیش‌بینی و پایدار رشد تبدیل می‌شود.'
    },
    status: {
      en: 'STATE: AUTONOMOUS GROWTH OPERATING SYSTEM',
      fa: 'وضعیت: سیستم‌عامل جامع و خودگردان رشد'
    }
  }
];
