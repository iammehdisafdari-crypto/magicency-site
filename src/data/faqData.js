/**
 * MAGICENCY FAQ DATA — Modular Single Source of Truth
 * 
 * Separated from aboutData.js to decouple FAQ presentation from About Page metadata
 * and prevent pulling the entire ~60KB aboutData module into the homepage bundle.
 */

export const FAQ_DATA = {
  en: {
    chapterNum: '08',
    chapterTag: 'CLARITY & TRANSPARENCY',
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

  // PERSIAN (FA) — RTL
  fa: {
    chapterNum: '۰۸',
    chapterTag: 'شفافیت و پاسخگویی',
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
  }
};
