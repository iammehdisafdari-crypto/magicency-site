import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FoldRevealSection, FoldRevealText } from '../FoldReveal';

export default function CapabilitiesHero() {
  const { lang, isRTL } = useLanguage();

  const handleScrollToServices = (e) => {
    e.preventDefault();
    const elem = document.getElementById('services');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="cap-hero" id="hero" aria-label="Capabilities Overview">
      <div className="cap-hero-inner">
        {/* Subtle Ambient Glow */}
        <div className="cap-hero-ambient" aria-hidden="true" />

        <div className="cap-hero-content">
          {/* Eyebrow */}
          <div className="cap-hero-eyebrow">
            <span className="cap-pill-indicator" />
            <span className="cap-pill-text">
              {lang === 'fa' ? 'توانمندی‌ها / ۰۱' : 'CAPABILITIES / 01'}
            </span>
          </div>

          {/* Large Editorial Headline */}
          <FoldRevealSection replay={true} stagger={0.12} className="cap-hero-header-group">
            <FoldRevealText
              as="h1"
              className="cap-hero-headline"
              text={lang === 'fa' ? 'سیستم‌هایی برای خلق رشد.' : 'Systems built to move growth.'}
            />

            {/* Minimal Supporting Line */}
            <FoldRevealText
              as="p"
              className="cap-hero-sub"
              text={lang === 'fa'
                ? 'توانمندی‌هایی هماهنگ برای حرکت در قالب یک سیستم واحد رشد.'
                : 'Capabilities designed to work as one growth system.'}
            />
          </FoldRevealSection>

          {/* Fast Transition Cue to Services */}
          <div className="cap-hero-action">
            <a
              href="#services"
              onClick={handleScrollToServices}
              className="cap-hero-scroll-link"
              aria-label={lang === 'fa' ? 'ورود به توانمندی‌ها' : 'Explore Capabilities'}
            >
              <span>{lang === 'fa' ? 'کاوش در توانمندی‌ها' : 'Explore Capabilities'}</span>
              <span className="cap-hero-arrow" aria-hidden="true">
                {isRTL ? '↓' : '↓'}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
