import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { EASING } from '../motion';
import CTA from '../Common/CTA';

const AsteriskIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 2V22M2 12H22M4.929 4.929L19.071 19.071M4.929 19.071L19.071 4.929" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export default function WorkCTA() {
  const { lang, isRTL, setIsModalOpen } = useLanguage();

  const content = {
    en: {
      eyebrow: 'ACTION // STRATEGIC DISCOVERY',
      heading: 'What are you trying to change?',
      subtext: "Tell us what isn't working. We'll help you understand what needs to change first.",
      cta: 'START A PROJECT'
    },
    fa: {
      eyebrow: 'اقدام // کشف استراتژیک چالش',
      heading: 'در کسب‌وکار خود قصد دارید چه چیزی را تغییر دهید؟',
      subtext: 'آنچه را که در بیزنس به‌درستی کار نمی‌کند با ما مطرح کنید؛ به شما کمک می‌کنیم تا ابتدا اولویت‌های تغییر ساختاری را شناسایی کنید.',
      cta: 'شروع پروژه'
    }
  };

  const c = content[lang] || content.en;

  return (
    <section className="work-cta-section shared-section" aria-label="Work Final Call to Action">
      <div className="container work-cta-container">
        <div className="work-cta-card">
          
          <div className="work-cta-glow" aria-hidden="true" />

          <div className="work-cta-badge">
            <span className="work-badge-dot" />
            <span>{c.eyebrow}</span>
          </div>

          <h2 className="work-cta-title">
            {c.heading}
          </h2>

          <p className="work-cta-subtext">
            {c.subtext}
          </p>

          <div className="work-cta-actions">
            <CTA
              variant="primary"
              onClick={() => setIsModalOpen(true)}
              trackingName="start_project"
              trackingLocation="work_cta_section"
              ariaLabel={c.cta}
              className="work-primary-cta"
            >
              {c.cta}
            </CTA>
          </div>

          <div className="work-cta-guarantee-note">
            <span>
              {lang === 'fa' 
                ? 'پاسخ‌گویی مستقیم تیم استراتژی ارشد مجیکنسـی ظرف حداکثر ۴۸ ساعت کاری' 
                : 'Direct response from Magicency Senior Strategy within 48 business hours.'}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
