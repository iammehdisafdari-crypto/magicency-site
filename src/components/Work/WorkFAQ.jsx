import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { EASING } from '../motion';

export default function WorkFAQ() {
  const { lang, isRTL } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const content = {
    en: {
      eyebrow: 'QUESTIONS BEFORE THE NEXT STEP',
      heading: 'Clear answers before we start.',
      lead: 'Short, direct answers to help you evaluate fit and prepare the right strategic conversation.',
      faqs: [
        {
          q: 'What kind of work does Magicency take on?',
          a: 'We engineer full-funnel growth systems: strategic diagnosis, positioning, conversion-focused websites, programmatic search, and algorithmic paid acquisition for brands ready to scale predictably.'
        },
        {
          q: 'Can you work with an existing marketing team?',
          a: 'Yes. We frequently partner with in-house marketing leads and founders as the senior growth architecture layer, building the telemetry, campaign engines, or digital flagships that internal teams operate.'
        },
        {
          q: 'Do you work on both strategy and execution?',
          a: 'Always. Strategy without execution is theoretical, and execution without strategy is expensive noise. We connect diagnostic positioning directly to media buying, web engineering, and conversion architecture.'
        },
        {
          q: 'Can I see detailed case studies?',
          a: 'Yes. We share audited performance decks, Search Console telemetry, and campaign breakdowns relevant to your industry during our initial strategic review.'
        },
        {
          q: 'How do we start a project?',
          a: 'Click "Start a Project" to complete our diagnostic intake protocol. We review your market, current bottleneck, and commercial goal, then respond within 48 business hours with an objective starting point.'
        }
      ]
    },
    fa: {
      eyebrow: 'پرسش‌های پیش از اقدام',
      heading: 'پاسخ‌های شفاف پیش از آغاز همکاری.',
      lead: 'پاسخ‌های کوتاه و صریح برای ارزیابی تناسب پروژه و آماده‌سازی گفتگوی راهبردی.',
      faqs: [
        {
          q: 'مجیکنسـی چه پروژه‌هایی را می‌پذیرد؟',
          a: 'ما سیستم‌های کامل رشد را مهندسی می‌کنیم: جایگاه‌یابی استراتژیک، پلتفرم‌های وب متمرکز بر تبدیل، معماری سئو سازمانی و کمپین‌های الگوریتمی جذب مشتری برای کسب‌وکارهای در حال توسعه.'
        },
        {
          q: 'آیا با تیم مارکتینگ مستقر در مجموعه همکاری می‌کنید؟',
          a: 'بله. ما به‌عنوان بازوی ارشد معماری رشد در کنار مدیران مارکتینگ و بنیان‌گذاران قرار می‌گیریم تا سیستم‌های تله‌متری، موتورهای تبلیغاتی و زیرساخت‌های دیجیتال را پیاده‌سازی کنیم.'
        },
        {
          q: 'آیا هم بر استراتژی و هم بر اجرای فنی نظارت دارید؟',
          a: 'دقیقاً. استراتژی بدون اجرا صرفاً ایده است و اجرا بدون استراتژی هزینه بیهوده. ما تحلیل ساختاری را مستقیماً به اجرای تبلیغات، کدنویسی پلتفرم و معماری تبدیل متصل می‌کنیم.'
        },
        {
          q: 'آیا امکان مشاهده گزارش‌های فنی و پرونده‌های کامل‌تر وجود دارد؟',
          a: 'بله. در جلسه ارزیابی اولیه، گزارش‌های مستند سرچ کنسول، داشبوردهای گوگل ادز و اسناد تحلیلی مرتبط با صنعت شما را به اشتراک می‌گذاریم.'
        },
        {
          q: 'فرآیند آغاز همکاری چگونه است؟',
          a: 'با انتخاب دکمه «شروع پروژه» فرم کوتاه ارزیابی را تکمیل کنید. چالش، بازار و اهداف شما را بررسی کرده و ظرف حداکثر ۴۸ ساعت کاری نقشه مسیر اولیه را ارائه می‌دهیم.'
        }
      ]
    }
  };

  const c = content[lang] || content.en;

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="work-faq-section shared-section" aria-labelledby="work-faq-heading">
      <div className="container work-faq-container">
        
        {/* Left Column: Heading */}
        <div className="work-faq-header">
          <span className="work-kicker">
            <span className="work-kicker-dot" />
            <span>{c.eyebrow}</span>
          </span>
          <h2 id="work-faq-heading" className="work-faq-heading">
            {c.heading}
          </h2>
          <p className="work-faq-lead">
            {c.lead}
          </p>
        </div>

        {/* Right Column: Clean Accordion / Details */}
        <div className="work-faq-accordion" role="region" aria-label="FAQ Accordion">
          {c.faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`work-faq-item ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="work-faq-question-btn"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="work-faq-num">0{idx + 1}</span>
                  <span className="work-faq-question-text">{item.q}</span>
                  <span className="work-faq-icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div 
                  id={`faq-answer-${idx}`}
                  className="work-faq-answer-wrap"
                  style={{ display: isOpen ? 'block' : 'none' }}
                >
                  <p className="work-faq-answer">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
