import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useRouter } from '../../context/RouterContext';
import { ArrowLeft, ArrowRight, Home, Compass, BookOpen } from 'lucide-react';
import CTA from '../Common/CTA';
import './NotFound.css';

export default function NotFoundPage() {
  const { lang, isRTL } = useLanguage();
  const { navigate } = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
    document.title = lang === 'fa'
      ? 'صفحه پیدا نشد (۴۰۴) // مجیکنسـی (MAGICENCY®)'
      : 'Page Not Found (404) // MAGICENCY®';

    const robotsMeta = document.querySelector('meta[name="robots"]');
    const prevRobots = robotsMeta ? robotsMeta.getAttribute('content') : null;
    if (robotsMeta) {
      robotsMeta.setAttribute('content', 'noindex, follow');
    }
    return () => {
      if (robotsMeta && prevRobots) {
        robotsMeta.setAttribute('content', prevRobots);
      }
    };
  }, [lang]);

  return (
    <div className={`notfound-page-root ${isRTL ? 'is-rtl' : 'is-ltr'}`}>
      <div className="notfound-grid-backdrop" aria-hidden="true" />
      <div className="notfound-radial-glow" aria-hidden="true" />

      <div className="notfound-container">
        {/* Status Protocol Pill */}
        <div className="notfound-badge-wrap">
          <span className="notfound-badge-dot" />
          <span className="notfound-badge-text">
            {lang === 'fa' ? 'خطای ۴۰۴ // مسیر تعریف‌نشده' : 'STATUS 404 // UNDEFINED ROUTE'}
          </span>
        </div>

        {/* Big Monolithic Numeral */}
        <div className="notfound-big-num" aria-hidden="true">
          404
        </div>

        {/* Main Editorial Headline */}
        <h1 className="notfound-title">
          {lang === 'fa'
            ? 'صفحه مورد نظر در این آدرس وجود ندارد.'
            : 'The requested route does not exist.'}
        </h1>

        {/* Narrative Explanation */}
        <p className="notfound-lead">
          {lang === 'fa'
            ? 'ممکن است آدرس را اشتباه وارد کرده باشید یا این صفحه به ساختار دیگری از سیستم رشد منتقل شده باشد.'
            : 'The page you are looking for may have been moved, renamed, or is temporarily unavailable within our architecture.'}
        </p>

        {/* Action Directives */}
        <div className="notfound-actions">
          <CTA
            variant="primary"
            href="/"
            icon={<Home size={16} />}
            ariaLabel={lang === 'fa' ? 'بازگشت به صفحه اصلی' : 'Return to Home'}
            className="notfound-cta-primary"
          >
            {lang === 'fa' ? 'بازگشت به خانه' : 'RETURN TO HOME'}
          </CTA>

          <CTA
            variant="secondary"
            href="/work"
            icon={<Compass size={16} />}
            ariaLabel={lang === 'fa' ? 'مشاهده پروژه‌ها' : 'Explore Work'}
            className="notfound-cta-secondary"
          >
            {lang === 'fa' ? 'مشاهده پروژه‌ها' : 'EXPLORE WORK'}
          </CTA>

          <CTA
            variant="secondary"
            href="/blog"
            icon={<BookOpen size={16} />}
            ariaLabel={lang === 'fa' ? 'مطالعه مقالات' : 'Read Journal'}
            className="notfound-cta-secondary"
          >
            {lang === 'fa' ? 'نشریه تحلیلی' : 'READ JOURNAL'}
          </CTA>
        </div>
      </div>
    </div>
  );
}
