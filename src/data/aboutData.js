/**
 * Magicency About Data
 * Core Positioning: Why Magicency Exists, What We Believe, The People & Disciplines, Vendor vs. Partner
 */

export const ABOUT_DATA = {
  en: {
    hero: {
      eyebrow: 'ABOUT MAGICENCY',
      headlinePart1: 'We believe growth',
      headlinePart2: 'should make sense.',
      subline1: 'Not more activity.',
      subline2: 'Better decisions.',
      manifestoBadge: 'WHY WE EXIST // CONNECTED REASONING'
    },
    whyWeExist: {
      eyebrow: '01 / IDENTITY & CAUSE',
      headline: 'Marketing became too fragmented.',
      copy: 'Too many businesses are solving different parts of the same problem with disconnected decisions. Magicency exists to connect those decisions.',
      unifiedBadge: 'ONE CONNECTED SYSTEM',
      unifiedStatement: 'When strategy, creative, digital, media, and data converge into one continuous feedback loop, growth stops being accidental.',
      fragments: [
        {
          id: 'strategy',
          num: '01',
          label: 'Strategy',
          isolatedIssue: 'Isolated from execution realities',
          connectedRole: 'Directs capital & positioning'
        },
        {
          id: 'creative',
          num: '02',
          label: 'Creative',
          isolatedIssue: 'Judged on aesthetics, not leverage',
          connectedRole: 'Communicates advantage & conversion'
        },
        {
          id: 'digital',
          num: '03',
          label: 'Digital',
          isolatedIssue: 'Built in technical silos',
          connectedRole: 'Engineers customer velocity'
        },
        {
          id: 'media',
          num: '04',
          label: 'Media',
          isolatedIssue: 'Buys impressions without context',
          connectedRole: 'Amplifies proven value propositions'
        },
        {
          id: 'data',
          num: '05',
          label: 'Data',
          isolatedIssue: 'Rearview dashboards with no action',
          connectedRole: 'Governs the next strategic decision'
        }
      ]
    },
    beliefs: {
      eyebrow: '02 / PHILOSOPHICAL FOUNDATION',
      title: 'What We Believe.',
      subtitle: 'Five non-negotiable principles that guide every system we engineer.',
      items: [
        {
          id: '01',
          number: '01',
          title: 'BUSINESS FIRST.',
          explanation: 'Understand the business before making the output.',
          elaboration: 'We do not start in Figma or ad managers. We begin with unit economics, margin structures, operational bottlenecks, and customer realities.'
        },
        {
          id: '02',
          number: '02',
          title: 'QUESTION THE BRIEF.',
          explanation: "The requested solution isn't always the real problem.",
          elaboration: 'Clients frequently come asking for a redesign or media campaign when the real leak is positioning, pricing clarity, or conversion friction.'
        },
        {
          id: '03',
          number: '03',
          title: 'CONNECTED THINKING.',
          explanation: 'Strategy, creative, digital and growth should work together.',
          elaboration: 'Silos kill momentum. When brand storytelling, technical speed, and analytical precision are unified, compound advantage emerges.'
        },
        {
          id: '04',
          number: '04',
          title: 'REALITY WINS.',
          explanation: 'Ideas become valuable when they survive contact with the market.',
          elaboration: 'Internal enthusiasm means nothing until real customers exchange attention, trust, or currency. We prioritize market truth over agency dogma.'
        },
        {
          id: '05',
          number: '05',
          title: 'KEEP LEARNING.',
          explanation: 'Every result should improve the next decision.',
          elaboration: 'Wins and losses are both telemetry. Every experiment, sprint, and conversion cycle feeds intelligence directly back into the core growth system.'
        }
      ]
    },
    people: {
      eyebrow: '03 / THE HUMAN LAYER',
      headline: 'The People Behind the System.',
      subline: 'Magicency brings together different perspectives, disciplines, and relentless craft into one cohesive practice.',
      conceptPath: ['PEOPLE', 'DISCIPLINES', 'PERSPECTIVES', 'ONE SYSTEM'],
      // Structured authentic team members (No fake stock people)
      teamMembers: [
        {
          id: 'mehdi-safdari',
          name: 'Mehdi Safdari',
          role: 'Growth Architect & Strategic Lead',
          descriptor: 'Directs high-level business strategy, system architecture, and client partnerships.',
          image: '/assets/about/portrait.jpg',
          alt: 'Mehdi Safdari — Growth Architect & Strategic Lead at Magicency',
          badge: 'LEADERSHIP // SYSTEM ARCHITECTURE'
        }
      ],
      workspaceImage: '/assets/about/workspace.jpg',
      workspaceCaption: 'RESEARCH, SYSTEMS MAPPING & STRATEGIC ITERATION',
      // Multidisciplinary perspective pillars
      disciplines: [
        {
          id: 'strategy',
          num: '01',
          code: 'STRATEGIC COUNSEL',
          title: 'Business Architecture',
          description: 'Diagnosing unit economics, identifying leverage points, and defining uncompromising market positioning.'
        },
        {
          id: 'creative',
          num: '02',
          code: 'CREATIVE ENGINEERING',
          title: 'Design & Brand Systems',
          description: 'Building brand identities, digital interfaces, and communications designed to withstand scrutiny and command attention.'
        },
        {
          id: 'performance',
          num: '03',
          code: 'PERFORMANCE INFRASTRUCTURE',
          title: 'Digital & Growth Engines',
          description: 'Engineering resilient technical stacks, conversion flywheels, and scalable acquisition systems.'
        },
        {
          id: 'intelligence',
          num: '04',
          code: 'CONTINUOUS INTELLIGENCE',
          title: 'Data & Market Feedback',
          description: 'Transforming telemetry, customer sentiment, and behavioral data into actionable operational clarity.'
        }
      ]
    },
    vendorVsPartner: {
      eyebrow: '04 / HOW WE SHOW UP',
      headlinePart1: 'Not a vendor.',
      headlinePart2: 'Not an extra pair of hands.',
      headlineEmphasis: 'A strategic partner.',
      subline: 'We do not operate as an order-taker that executes tasks blindly. We share accountability for the outcome.',
      comparisons: [
        {
          dimension: '01 / INITIATIVE',
          vendor: {
            title: 'Waits for the brief.',
            description: 'Accepts requirements at face value, avoiding difficult questions about viability.'
          },
          partner: {
            title: 'Challenges the brief.',
            description: 'Interrogates assumptions to ensure resources solve the highest-leverage business constraint.'
          }
        },
        {
          dimension: '02 / ACCOUNTABILITY',
          vendor: {
            title: 'Delivers the task.',
            description: 'Considers the job complete when deliverables are handed over, regardless of business impact.'
          },
          partner: {
            title: 'Owns the problem.',
            description: 'Measures success by actual commercial velocity, customer response, and system durability.'
          }
        },
        {
          dimension: '03 / CONTINUITY',
          vendor: {
            title: 'Moves to the next project.',
            description: 'Treats the relationship as a transaction, leaving the client to decipher aftermath.'
          },
          partner: {
            title: 'Learns from the last one.',
            description: 'Compounds insights across cycles, making every subsequent decision faster and more effective.'
          }
        }
      ]
    },
    ambition: {
      eyebrow: '05 / THE AMBITION',
      headline: 'Build things that matter.',
      copy: 'We want to work with businesses where better thinking, better systems, and better execution can create meaningful change.',
      closingQuestion: 'WHAT ARE YOU TRYING TO CHANGE?',
      ctaLabel: 'START A PROJECT',
      badge: 'CLOSED-LOOP IMPACT // 2026'
    }
  },
  fa: {
    hero: {
      eyebrow: 'درباره مجیکنسـی',
      headlinePart1: 'ما باور داریم رشد',
      headlinePart2: 'باید منطقی و معنادار باشد.',
      subline1: 'نه فعالیت‌های پراکنده و بی‌پایان.',
      subline2: 'تصمیم‌های درست‌تر.',
      manifestoBadge: 'علت وجودی // پیوند خرد و اجرا'
    },
    whyWeExist: {
      eyebrow: '۰۱ / هویت و چرایی وجود',
      headline: 'بازاریابی بیش از حد تکه‌تکه و پراکنده شد.',
      copy: 'کسب‌وکارهای بی‌شماری تلاش می‌کنند بخش‌های متفاوتی از یک مسئله را با تصمیم‌های پراکنده حل کنند. مجیکنسـی برای پیوند دادن این تصمیم‌ها به وجود آمده است.',
      unifiedBadge: 'یک سیستم پیوسته و یکپارچه',
      unifiedStatement: 'هنگامی که استراتژی، خلاقیت، فناوری، رسانه و داده در یک چرخه بازخورد مستمر به هم متصل شوند، رشد دیگر یک اتفاق تصادفی نخواهد بود.',
      fragments: [
        {
          id: 'strategy',
          num: '۰۱',
          label: 'استراتژی',
          isolatedIssue: 'جداافتاده از واقعیات اجرایی بازار',
          connectedRole: 'جهت‌دهی به سرمایه و جایگاه برند'
        },
        {
          id: 'creative',
          num: '۰۲',
          label: 'خلاقیت',
          isolatedIssue: 'قضاوت بر پایه زیبایی بدون اهرم رشد',
          connectedRole: 'انتقال مزیت رقابتی و ترغیب به تبدیل'
        },
        {
          id: 'digital',
          num: '۰۳',
          label: 'دیجیتال',
          isolatedIssue: 'توسعه جزیره‌ای در بن‌بست‌های فنی',
          connectedRole: 'مهندسی شتاب سفر مشتری'
        },
        {
          id: 'media',
          num: '۰۴',
          label: 'رسانه',
          isolatedIssue: 'خرید نمایش‌های بی‌ارتباط با بستر کسب‌وکار',
          connectedRole: 'تقویت پیشنهادهای ارزش اثبات‌شده'
        },
        {
          id: 'data',
          num: '۰۵',
          label: 'داده‌ها',
          isolatedIssue: 'داشبوردهای نمایشی بدون قدرت تصمیم‌گیری',
          connectedRole: 'هدایت تصمیمات راهبردی آینده'
        }
      ]
    },
    beliefs: {
      eyebrow: '۰۲ / شالوده فکری و مانیفست',
      title: 'باورهای بنیادی ما.',
      subtitle: 'پنج اصل تغییرناپذیر که تک‌تک سیستم‌های مهندسی‌شده ما را هدایت می‌کنند.',
      items: [
        {
          id: '01',
          number: '۰۱',
          title: 'اول درک کسب‌وکار.',
          explanation: 'درک عمیق کسب‌وکار قبل از هر خروجی.',
          elaboration: 'ما کار را با طراحی یا تبلیغات آغاز نمی‌کنیم. نقطه شروع ما اقتصاد واحد، حاشیه سود، گلوگاه‌های عملیاتی و واقعیت‌های مشتری است.'
        },
        {
          id: '02',
          number: '۰۲',
          title: 'به چالش کشیدن بریف.',
          explanation: 'راه‌حل درخواستی لزوماً صورت‌مسئله اصلی نیست.',
          elaboration: 'بسیاری از کسب‌وکارها با تقاضای یک کمپین تبلیغاتی یا بازطراحی به سراغ ما می‌آیند، در حالی که نشتی واقعی در وضوح جایگاه‌یابی یا اصطکاک تبدیل است.'
        },
        {
          id: '03',
          number: '۰۳',
          title: 'تفکر پیوسته و متصل.',
          explanation: 'استراتژی، خلاقیت، دیجیتال و رشد باید هماهنگ عمل کنند.',
          elaboration: 'جزیره‌ای کار کردن، شتاب رشد را از بین می‌برد. پیوند داستان‌سرایی برند، سرعت زیرساخت فنی و دقت تحلیلی، مزیت رقابتی مرکب می‌سازد.'
        },
        {
          id: '04',
          number: '۰۴',
          title: 'پیروزی از آن واقعیت است.',
          explanation: 'ایده‌ها زمانی ارزشمندند که در مواجهه با واقعیت بازار دوام بیاورند.',
          elaboration: 'اشتیاق پشت درهای بسته تا زمانی که مخاطب واقعی زمان، اعتماد یا هزینه صرف نکند بی‌ارزش است. حقیقت بازار بر هر تعصب آژانسی ارجحیت دارد.'
        },
        {
          id: '05',
          number: '۰۵',
          title: 'یادگیری توقف‌ناپذیر.',
          explanation: 'هر نتیجه باید تصمیم بعدی را هوشمندانه‌تر کند.',
          elaboration: 'موفقیت‌ها و شکست‌ها هر دو داده‌های تله‌متری ارزشمندند. هر آزمایش و بازخورد مشتری مستقیماً هوش سیستم رشد را تقویت می‌کند.'
        }
      ]
    },
    people: {
      eyebrow: '۰۳ / لایه انسانی',
      headline: 'انسان‌های پشت این سیستم.',
      subline: 'مجیکنسـی تلفیقی از دیدگاه‌های متمایز، تخصص‌های راهبردی و تعهدی عمیق به ظرافت و نتیجه است.',
      conceptPath: ['انسان‌ها', 'رشته‌های تخصصی', 'زاویه‌های دید', 'یک سیستم واحد'],
      teamMembers: [
        {
          id: 'mehdi-safdari',
          name: 'مهدی صفدری',
          role: 'معمار ارشد رشد و استراتژی',
          descriptor: 'هدایت استراتژی‌های کلان تجاری، معماری سیستم‌های دیجیتال و شراکت‌های راهبردی.',
          image: '/assets/about/portrait.jpg',
          alt: 'مهدی صفدری — معمار رشد و استراتژیست ارشد مجیکنسـی',
          badge: 'رهبری راهبردی // معماری سیستم'
        }
      ],
      workspaceImage: '/assets/about/workspace.jpg',
      workspaceCaption: 'پژوهش میدانی، نگاشت سیستم‌ها و تکرار استراتژیک',
      disciplines: [
        {
          id: 'strategy',
          num: '۰۱',
          code: 'مشاوره راهبردی',
          title: 'معماری مدل کسب‌وکار',
          description: 'واکاوی اقتصاد واحد، شناسایی گلوگاه‌های رشد و تثبیت موقعیت متمایز در بازار.'
        },
        {
          id: 'creative',
          num: '۰۲',
          code: 'مهندسی خلاقیت',
          title: 'سیستم‌های برند و دیزاین',
          description: 'خلق هویت‌های بصری و رابط‌های دیجیتالی که توجه بازار را به خود جلب و ماندگار می‌کنند.'
        },
        {
          id: 'performance',
          num: '۰۳',
          code: 'زیرساخت پرفورمنس',
          title: 'موتورهای دیجیتال و جذب',
          description: 'توسعه پلتفرم‌های فنی مقاوم، چرخه‌های تبدیل بهینه و کانال‌های پایدار مقیاس‌پذیری.'
        },
        {
          id: 'intelligence',
          num: '۰۴',
          code: 'هوشمندی مستمر',
          title: 'داده‌ها و بازخورد بازار',
          description: 'تبدیل رفتارهای کاربر و داده‌های تحلیلی به شفافیت عملیاتی و تصمیمات بعدی.'
        }
      ]
    },
    vendorVsPartner: {
      eyebrow: '۰۴ / شیوه همکاری ما',
      headlinePart1: 'نه یک مجری صرف.',
      headlinePart2: 'نه فقط یک دست اضافه.',
      headlineEmphasis: 'یک شریک راهبردی.',
      subline: 'ما یک دستورپذیر ساده نیستیم که وظایف را کورکورانه تحویل دهد؛ ما در نتایج واقعی کسب‌وکار شریک می‌شویم.',
      comparisons: [
        {
          dimension: '۰۱ / ابتکار عمل',
          vendor: {
            title: 'منتظر بریف می‌ماند.',
            description: 'درخواست را بدون بازبینی می‌پذیرد و از پرسیدن سوالات بنیادین طفره می‌رود.'
          },
          partner: {
            title: 'بریف را به چالش می‌کشد.',
            description: 'پیش‌فرض‌ها را به دقت بررسی می‌کند تا اطمینان یابد منابع روی مهم‌ترین گلوگاه صرف می‌شوند.'
          }
        },
        {
          dimension: '۰۲ / پذیرش مسئولیت',
          vendor: {
            title: 'صرفاً تسک را تحویل می‌دهد.',
            description: 'ماموریت را با تحویل فایل یا پایان ساعت کاری خاتمه‌یافته می‌داند.'
          },
          partner: {
            title: 'مسئله را از آن خود می‌داند.',
            description: 'موفقیت را با شتاب تجاری واقعی، رشد مشتریان و پایداری سیستم ارزیابی می‌کند.'
          }
        },
        {
          dimension: '۰۳ / تداوم و یادگیری',
          vendor: {
            title: 'به سرعت سراغ پروژه بعدی می‌رود.',
            description: 'همکاری را یک معامله تک‌باره می‌داند و پیامدها را به کارفرما واگذار می‌کند.'
          },
          partner: {
            title: 'از پروژه قبلی می‌آموزد.',
            description: 'داده‌ها و تجارب را به کار می‌گیرد تا تصمیمات بعدی سریع‌تر و موثرتر شوند.'
          }
        }
      ]
    },
    ambition: {
      eyebrow: '۰۵ / آرمان و هدف',
      headline: 'خلق چیزهایی که واقعاً اهمیت دارند.',
      copy: 'ما مشتاق همکاری با کسب‌وکارهایی هستیم که در آن‌ها تفکر عمیق‌تر، سیستم‌های کارآمدتر و اجرای دقیق بتواند تحولی پایدار و معنادار بیافریند.',
      closingQuestion: 'شما در پی تغییر چه چیزی در بازار هستید؟',
      ctaLabel: 'شروع یک پروژه',
      badge: 'تاثیرگذاری پایدار و اثبات‌شده // ۲۰۲۶'
    }
  }
};
