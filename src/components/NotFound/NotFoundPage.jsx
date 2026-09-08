import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useRouter } from '../../context/RouterContext';
import { ArrowLeft, ArrowRight, Home, Compass, BookOpen } from 'lucide-react';
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
          <button
            type="button"
            className="notfound-btn-primary"
            onClick={() => navigate('/')}
            aria-label={lang === 'fa' ? 'بازگشت به صفحه اصلی' : 'Return to Home'}
          >
            <Home size={16} />
            <span>{lang === 'fa' ? 'بازگشت به خانه' : 'RETURN TO HOME'}</span>
          </button>

          <button
            type="button"
            className="notfound-btn-secondary"
            onClick={() => navigate('/work')}
            aria-label={lang === 'fa' ? 'مشاهده پروژه‌ها' : 'Explore Work'}
          >
            <Compass size={16} />
            <span>{lang === 'fa' ? 'مشاهده پروژه‌ها' : 'EXPLORE WORK'}</span>
          </button>

          <button
            type="button"
            className="notfound-btn-secondary"
            onClick={() => navigate('/blog')}
            aria-label={lang === 'fa' ? 'مطالعه مقالات' : 'Read Journal'}
          >
            <BookOpen size={16} />
            <span>{lang === 'fa' ? 'نشریه تحلیلی' : 'READ JOURNAL'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
