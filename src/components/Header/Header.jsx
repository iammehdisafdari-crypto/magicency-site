import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useRouter } from '../../context/RouterContext';
import ScrambleText from './ScrambleText';
import StaggeredMenu from './StaggeredMenu';
import { trackCtaClick, trackLanguageSwitch, trackContactClick, trackOutboundClick } from '../../utils/analytics';
import { SocialIcon } from '../Common/SocialIcons';
import './Header.css';

// Asterisk Icon matching Desktop Reference Image 1: "✱ START A PROJECT"
const AsteriskIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 2V22M2 12H22M4.929 4.929L19.071 19.071M4.929 19.071L19.071 4.929" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

function MobileMenuExtra({ closeMenu, startProjectLabel, onStartProject }) {
  return (
    <div className="sm-panel-cta-box">
      <button
        type="button"
        onClick={() => {
          trackCtaClick('start_project', 'header_mobile_menu');
          closeMenu?.();
          onStartProject?.();
        }}
        className="sm-panel-cta-btn"
      >
        <span className="vm-pill-asterisk"><AsteriskIcon /></span>
        <span>{startProjectLabel}</span>
      </button>
      <a
        href="mailto:itsmehdisafdari@gmail.com"
        className="sm-panel-contact-link"
        onClick={() => trackContactClick('email', 'header_mobile_menu')}
      >
        itsmehdisafdari@gmail.com
      </a>
    </div>
  );
}

export default function Header() {
  const { t, lang, toggleLanguage, setIsModalOpen, isRTL } = useLanguage();
  const router = useRouter();
  const { navigate, currentPath, isHomePage, isWorkPage, isApproachPage, isCapabilitiesPage, isBlogPage, isAboutPage, localePath, switchLangPath } = router;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetHref) => {
    e?.preventDefault?.();
    const homeHref = localePath('/');
    if (targetHref === currentPath || (targetHref === homeHref && isHomePage)) {
      if (window.__lenis) {
        try { window.__lenis.scrollTo(0, { immediate: false }); } catch (_) {}
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    navigate(targetHref);
  };

  const navItems = [
    { id: 'work', label: t.nav.work, href: localePath('/work'), number: '01', isActive: isWorkPage },
    { id: 'capabilities', label: t.nav.capabilities, href: localePath('/capabilities'), number: '02', isActive: isCapabilitiesPage },
    { id: 'approach', label: t.nav.approach, href: localePath('/approach'), number: '03', isActive: isApproachPage },
    { id: 'about', label: t.nav.about, href: localePath('/about'), number: '04', isActive: isAboutPage },
    { id: 'journal', label: t.journal?.badge || (lang === 'fa' ? 'ژورنال' : 'Blog'), href: localePath('/blog'), number: '05', isActive: isBlogPage }
  ];

  // Mobile staggered menu items targeting full page routes
  const mobileMenuItems = [
    {
      label: lang === 'fa' ? 'صفحه اصلی' : 'Home',
      ariaLabel: 'Go to home page',
      link: localePath('/'),
      id: 'home',
      isActive: isHomePage
    },
    {
      label: t.nav.work,
      ariaLabel: 'View our work',
      link: localePath('/work'),
      id: 'work',
      isActive: isWorkPage
    },
    {
      label: t.nav.capabilities,
      ariaLabel: 'View our capabilities and services',
      link: localePath('/capabilities'),
      id: 'capabilities',
      isActive: isCapabilitiesPage
    },
    {
      label: t.nav.approach,
      ariaLabel: 'Learn about our approach',
      link: localePath('/approach'),
      id: 'approach',
      isActive: isApproachPage
    },
    {
      label: t.nav.about,
      ariaLabel: 'Learn about us',
      link: localePath('/about'),
      id: 'about',
      isActive: isAboutPage
    },
    {
      label: t.journal?.badge || (lang === 'fa' ? 'ژورنال' : 'Blog'),
      ariaLabel: 'Read our blog and journal',
      link: localePath('/blog'),
      id: 'blog',
      isActive: isBlogPage
    }
  ];

  const mobileSocialItems = [
    { 
      label: 'Instagram', 
      link: 'https://instagram.com', 
      icon: <SocialIcon name="Instagram" size={18} />,
      onClick: () => trackOutboundClick('https://instagram.com', 'instagram') 
    },
    { 
      label: 'LinkedIn', 
      link: 'https://linkedin.com', 
      icon: <SocialIcon name="LinkedIn" size={18} />,
      onClick: () => trackOutboundClick('https://linkedin.com', 'linkedin') 
    },
    { 
      label: 'Threads', 
      link: 'https://threads.net', 
      icon: <SocialIcon name="Threads" size={18} />,
      onClick: () => trackOutboundClick('https://threads.net', 'threads') 
    }
  ];

  const renderExtraContent = React.useCallback(({ closeMenu }) => (
    <MobileMenuExtra
      closeMenu={closeMenu}
      startProjectLabel={(t.nav.startProject || 'START A PROJECT').toUpperCase()}
      onStartProject={() => setIsModalOpen(true)}
    />
  ), [t.nav.startProject]);

  return (
    <>
      {/* =========================================================
          DESKTOP HEADER (> 920px)
          Brand wordmark + Desktop Nav + Language + Start Project
          ========================================================= */}
      <header className={`vm-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="vm-header-inner">
          
          {/* Brand Wordmark */}
          <a 
            href={localePath('/')} 
            className="vm-brand" 
            aria-label="Magicency Home"
            onClick={(e) => {
              e.preventDefault();
              const homeUrl = localePath('/');
              if (isWorkPage || isApproachPage || isCapabilitiesPage || isBlogPage || isAboutPage) {
                navigate(homeUrl);
              } else {
                if (window.__lenis) {
                  try { window.__lenis.scrollTo(0, { immediate: false }); } catch (_) {}
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <span className="vm-brand-text">MAGICENCY</span>
            <span className="vm-brand-registered">®</span>
          </a>

          {/* Desktop Navigation */}
          <div className="vm-header-desktop-right">
            <nav className="vm-desktop-nav" aria-label="Primary Navigation">
              {navItems.map((item) => (
                <a 
                  key={item.id}
                  href={item.href} 
                  className={`vm-desktop-nav-link ${item.isActive ? 'is-active' : ''}`} 
                  aria-current={item.isActive ? 'page' : undefined}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <ScrambleText text={item.label.toUpperCase()} />
                </a>
              ))}
            </nav>

            {/* Desktop Language Switcher */}
            <a 
              href={switchLangPath}
              onClick={(e) => {
                e.preventDefault();
                trackLanguageSwitch(lang === 'en' ? 'fa' : 'en');
                navigate(switchLangPath);
              }} 
              className="vm-desktop-lang-pill"
              aria-label={lang === 'en' ? 'Switch to Persian' : 'Switch to English'}
              title={lang === 'en' ? 'تغییر به فارسی' : 'Switch to English'}
            >
              <span className="vm-desktop-lang-code">{lang === 'en' ? 'FA' : 'EN'}</span>
            </a>

            {/* Desktop Primary Pill Button (* START A PROJECT) */}
            <button
              type="button"
              onClick={() => {
                trackCtaClick('start_project', 'header_desktop');
                setIsModalOpen(true);
              }}
              className="vm-start-project-pill-btn"
            >
              <span className="vm-pill-asterisk">
                <AsteriskIcon />
              </span>
              <span className="vm-pill-label">
                {(t.nav.startProject || 'START A PROJECT').toUpperCase()}
              </span>
            </button>
          </div>

        </div>
      </header>

      {/* =========================================================
          MOBILE STAGGERED NAVIGATION (<= 920px)
          Exact ReactBits StaggeredMenu Technique Requested by User:
          Multi-layer curtain wipe + kinetic typography + numbering + socials
          ========================================================= */}
      <div className="vm-mobile-staggered-container">
        <StaggeredMenu
          position="right"
          items={mobileMenuItems}
          socialItems={mobileSocialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#ffffff"
          changeMenuColorOnOpen={true}
          colors={['#050505', '#07101C']}
          accentColor="#C58A3A"
          panelBackground="#07101C"
          isFixed={true}
          isRTL={isRTL}
          className={isScrolled ? 'is-scrolled' : ''}
          menuLabel={lang === 'fa' ? 'منو' : 'MENU'}
          closeLabel={lang === 'fa' ? 'بستن' : 'CLOSE'}
          logoContent={
            <a
              href={localePath('/')}
              className="vm-brand"
              aria-label="Magicency Home"
              onClick={(e) => {
                e.preventDefault();
                const homeUrl = localePath('/');
                if (isWorkPage || isApproachPage || isCapabilitiesPage || isBlogPage || isAboutPage) {
                  navigate(homeUrl);
                } else {
                  if (window.__lenis) {
                    try { window.__lenis.scrollTo(0, { immediate: false }); } catch (_) {}
                  }
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <span className="vm-brand-text">MAGICENCY</span>
              <span className="vm-brand-registered">®</span>
            </a>
          }
          headerExtra={
            <a
              href={switchLangPath}
              onClick={(e) => {
                e.preventDefault();
                trackLanguageSwitch(lang === 'en' ? 'fa' : 'en');
                navigate(switchLangPath);
              }}
              className="vm-mobile-lang-btn"
              aria-label={lang === 'en' ? 'Switch to Persian' : 'Switch to English'}
              title={lang === 'en' ? 'تغییر به فارسی' : 'Switch to English'}
            >
              <span className="vm-mobile-lang-text">{lang === 'en' ? 'FA' : 'EN'}</span>
            </a>
          }
          extraContent={renderExtraContent}
          onMenuOpen={() => {
            console.log('Menu opened');
          }}
          onMenuClose={() => {
            console.log('Menu closed');
          }}
        />
      </div>
    </>
  );
}
