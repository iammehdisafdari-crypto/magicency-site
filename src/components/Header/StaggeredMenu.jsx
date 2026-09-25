import React, { useCallback, useLayoutEffect, useEffect, useRef, useState } from 'react';
import { getGsap, runOnIdle } from '../../utils/gsapLoader';
import './StaggeredMenu.css';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const StaggeredMenu = ({
  position = 'right',
  colors = ['#050505', '#07101C'],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className = '',
  logoUrl = '',
  logoContent = null,
  menuButtonColor = '#ffffff',
  openMenuButtonColor = '#ffffff',
  accentColor = '#C58A3A',
  changeMenuColorOnOpen = true,
  isFixed = false,
  closeOnClickAway = true,
  onMenuOpen,
  onMenuClose,
  menuLabel = 'Menu',
  closeLabel = 'Close',
  headerExtra = null,
  extraContent = null,
  panelBackground = '#07101C',
  isRTL = false
}) => {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const panelRef = useRef(null);
  const preLayersRef = useRef(null);
  const preLayerElsRef = useRef([]);
  const plusHRef = useRef(null);
  const plusVRef = useRef(null);
  const iconRef = useRef(null);
  const textInnerRef = useRef(null);
  const textWrapRef = useRef(null);
  const [textLines, setTextLines] = useState([menuLabel, closeLabel]);

  const openTlRef = useRef(null);
  const closeTweenRef = useRef(null);
  const spinTweenRef = useRef(null);
  const textCycleAnimRef = useRef(null);
  const colorTweenRef = useRef(null);
  const toggleBtnRef = useRef(null);
  const busyRef = useRef(false);
  const itemEntranceTweenRef = useRef(null);
  const gsapRef = useRef(null);

  const ensureGsap = useCallback(() => {
    if (!gsapRef.current) {
      return getGsap().then((loaded) => {
        if (loaded) gsapRef.current = loaded;
        return loaded;
      });
    }
    return Promise.resolve(gsapRef.current);
  }, []);

  // Sync text labels on prop change
  useEffect(() => {
    setTextLines([menuLabel, closeLabel]);
  }, [menuLabel, closeLabel]);

  // Handle body scroll locking when opened
  useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      window.__lenis?.stop();
      return () => {
        document.body.style.overflow = originalOverflow;
        window.__lenis?.start();
      };
    }
  }, [open]);

  // Lazy GSAP setup deferred to idle time and batched via requestAnimationFrame
  useEffect(() => {
    let rafId = null;
    let ctx = null;
    let isMounted = true;

    const cancelIdle = runOnIdle(() => {
      ensureGsap().then((gsap) => {
        if (!isMounted || !gsap) return;
        rafId = requestAnimationFrame(() => {
          if (!isMounted) return;
          ctx = gsap.context(() => {
            const panel = panelRef.current;
            const preContainer = preLayersRef.current;
            const plusH = plusHRef.current;
            const plusV = plusVRef.current;
            const icon = iconRef.current;
            const textInner = textInnerRef.current;
            if (!panel || !plusH || !plusV || !icon || !textInner) return;

            let preLayers = [];
            if (preContainer) {
              preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer'));
            }
            preLayerElsRef.current = preLayers;

            const offscreen = position === 'left' ? -100 : 100;
            gsap.set([panel, ...preLayers], { xPercent: offscreen, opacity: 1 });
            if (preContainer) {
              gsap.set(preContainer, { xPercent: 0, opacity: 1 });
            }
            gsap.set(plusH, { transformOrigin: '50% 50%', rotate: 0 });
            gsap.set(plusV, { transformOrigin: '50% 50%', rotate: 90 });
            gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
            gsap.set(textInner, { yPercent: 0 });
            if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor });
          });
        });
      });
    }, 2500);

    return () => {
      isMounted = false;
      cancelIdle();
      if (rafId) cancelAnimationFrame(rafId);
      ctx?.revert();
    };
  }, [ensureGsap, menuButtonColor, position]);

  const buildOpenTimeline = useCallback((gsapInstance) => {
    const gsap = gsapInstance || gsapRef.current;
    if (!gsap) return null;

    const panel = panelRef.current;
    const layers = preLayerElsRef.current?.length
      ? preLayerElsRef.current
      : Array.from(preLayersRef.current?.querySelectorAll('.sm-prelayer') || []);
    if (!panel) return null;

    openTlRef.current?.kill();
    if (closeTweenRef.current) {
      closeTweenRef.current.kill();
      closeTweenRef.current = null;
    }
    itemEntranceTweenRef.current?.kill();

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
    const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'));
    const socialTitle = panel.querySelector('.sm-socials-title');
    const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));
    const extraEl = panel.querySelector('.sm-extra-slot');

    const offscreen = position === 'left' ? -100 : 100;
    const layerStates = layers.map((el) => ({ el, start: offscreen }));
    const panelStart = offscreen;

    if (itemEls.length) {
      gsap.set(itemEls, { yPercent: 140, rotate: isRTL ? -10 : 10 });
    }
    if (numberEls.length) {
      gsap.set(numberEls, { '--sm-num-opacity': 0 });
    }
    if (socialTitle) {
      gsap.set(socialTitle, { opacity: 0, y: 15 });
    }
    if (socialLinks.length) {
      gsap.set(socialLinks, { y: 25, opacity: 0 });
    }
    if (extraEl) {
      gsap.set(extraEl, { opacity: 0, y: 20 });
    }

    const tl = gsap.timeline({ paused: true });

    // Staggered preludes / layers
    layerStates.forEach((ls, i) => {
      tl.fromTo(
        ls.el,
        { xPercent: ls.start, opacity: 1 },
        { xPercent: 0, opacity: 1, duration: 0.52, ease: 'power4.out' },
        i * 0.08
      );
    });

    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.08 : 0;
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
    const panelDuration = 0.65;

    tl.fromTo(
      panel,
      { xPercent: panelStart, opacity: 1 },
      { xPercent: 0, opacity: 1, duration: panelDuration, ease: 'power4.out' },
      panelInsertTime
    );

    // Staggered reveal of nav items
    if (itemEls.length) {
      const itemsStartRatio = 0.16;
      const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;
      tl.to(
        itemEls,
        {
          yPercent: 0,
          rotate: 0,
          duration: 0.9,
          ease: 'power4.out',
          stagger: { each: 0.08, from: 'start' }
        },
        itemsStart
      );
      if (numberEls.length) {
        tl.to(
          numberEls,
          {
            duration: 0.5,
            ease: 'power2.out',
            '--sm-num-opacity': 1,
            stagger: { each: 0.07, from: 'start' }
          },
          itemsStart + 0.1
        );
      }
    }

    // Extra content reveal
    if (extraEl) {
      const extraStart = panelInsertTime + panelDuration * 0.35;
      tl.to(
        extraEl,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out'
        },
        extraStart
      );
    }

    // Socials reveal
    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.42;
      if (socialTitle) {
        tl.to(
          socialTitle,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: 'power2.out'
          },
          socialsStart
        );
      }
      if (socialLinks.length) {
        tl.to(
          socialLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power3.out',
            stagger: { each: 0.06, from: 'start' },
            onComplete: () => {
              gsap.set(socialLinks, { clearProps: 'opacity' });
            }
          },
          socialsStart + 0.05
        );
      }
    }

    openTlRef.current = tl;
    return tl;
  }, [position, isRTL]);

  const playOpen = useCallback(async () => {
    if (closeTweenRef.current) {
      closeTweenRef.current.kill();
      closeTweenRef.current = null;
    }
    busyRef.current = true;
    const gsap = await ensureGsap();
    if (!gsap) {
      busyRef.current = false;
      return;
    }
    const tl = buildOpenTimeline(gsap);
    if (tl) {
      tl.eventCallback('onComplete', () => {
        busyRef.current = false;
      });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline, ensureGsap]);

  const playClose = useCallback(async () => {
    openTlRef.current?.kill();
    openTlRef.current = null;
    itemEntranceTweenRef.current?.kill();

    const panel = panelRef.current;
    const layers = preLayerElsRef.current?.length
      ? preLayerElsRef.current
      : Array.from(preLayersRef.current?.querySelectorAll('.sm-prelayer') || []);
    if (!panel) return;

    const gsap = await ensureGsap();
    if (!gsap) return;

    const all = [...layers, panel];
    closeTweenRef.current?.kill();
    const offscreen = position === 'left' ? -100 : 100;
    closeTweenRef.current = gsap.to(all, {
      xPercent: offscreen,
      duration: 0.34,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => {
        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
        if (itemEls.length) {
          gsap.set(itemEls, { yPercent: 140, rotate: isRTL ? -10 : 10 });
        }
        const numberEls = Array.from(
          panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')
        );
        if (numberEls.length) {
          gsap.set(numberEls, { '--sm-num-opacity': 0 });
        }
        const socialTitle = panel.querySelector('.sm-socials-title');
        const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));
        const extraEl = panel.querySelector('.sm-extra-slot');
        if (socialTitle) gsap.set(socialTitle, { opacity: 0, y: 15 });
        if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });
        if (extraEl) gsap.set(extraEl, { opacity: 0, y: 20 });
        busyRef.current = false;
      }
    });
  }, [position, isRTL, ensureGsap]);

  const animateIcon = useCallback(async (opening) => {
    const icon = iconRef.current;
    if (!icon) return;
    const gsap = await ensureGsap();
    if (!gsap) return;
    spinTweenRef.current?.kill();
    if (opening) {
      spinTweenRef.current = gsap.to(icon, {
        rotate: 225,
        duration: 0.75,
        ease: 'power4.out',
        overwrite: 'auto'
      });
    } else {
      spinTweenRef.current = gsap.to(icon, {
        rotate: 0,
        duration: 0.35,
        ease: 'power3.inOut',
        overwrite: 'auto'
      });
    }
  }, [ensureGsap]);

  const animateColor = useCallback(
    async (opening) => {
      const btn = toggleBtnRef.current;
      if (!btn) return;
      const gsap = await ensureGsap();
      if (!gsap) return;
      colorTweenRef.current?.kill();
      if (changeMenuColorOnOpen) {
        const targetColor = opening ? openMenuButtonColor : menuButtonColor;
        colorTweenRef.current = gsap.to(btn, {
          color: targetColor,
          delay: 0.15,
          duration: 0.3,
          ease: 'power2.out'
        });
      } else {
        gsap.set(btn, { color: menuButtonColor });
      }
    },
    [openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen, ensureGsap]
  );

  useEffect(() => {
    if (toggleBtnRef.current) {
      const targetColor = openRef.current && changeMenuColorOnOpen ? openMenuButtonColor : menuButtonColor;
      if (gsapRef.current) {
        gsapRef.current.set(toggleBtnRef.current, { color: targetColor });
      } else {
        toggleBtnRef.current.style.color = targetColor;
      }
    }
  }, [changeMenuColorOnOpen, menuButtonColor, openMenuButtonColor]);

  const animateText = useCallback(
    async (opening) => {
      const inner = textInnerRef.current;
      if (!inner) return;
      const gsap = await ensureGsap();
      if (!gsap) return;
      textCycleAnimRef.current?.kill();

      const current = opening ? menuLabel : closeLabel;
      const target = opening ? closeLabel : menuLabel;
      const cycles = 2;
      const seq = [current];
      let last = current;
      for (let i = 0; i < cycles; i++) {
        last = last === menuLabel ? closeLabel : menuLabel;
        seq.push(last);
      }
      if (last !== target) seq.push(target);
      seq.push(target);
      setTextLines(seq);

      gsap.set(inner, { yPercent: 0 });
      const lineCount = seq.length;
      const finalShift = ((lineCount - 1) / lineCount) * 100;
      textCycleAnimRef.current = gsap.to(inner, {
        yPercent: -finalShift,
        duration: 0.45 + lineCount * 0.06,
        ease: 'power4.out'
      });
    },
    [menuLabel, closeLabel, ensureGsap]
  );

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);
    if (target) {
      onMenuOpen?.();
      playOpen();
    } else {
      onMenuClose?.();
      playClose();
    }
    animateIcon(target);
    animateColor(target);
    animateText(target);
  }, [playOpen, playClose, animateIcon, animateColor, animateText, onMenuOpen, onMenuClose]);

  const closeMenu = useCallback(() => {
    if (openRef.current) {
      openRef.current = false;
      setOpen(false);
      onMenuClose?.();
      playClose();
      animateIcon(false);
      animateColor(false);
      animateText(false);
    }
  }, [playClose, animateIcon, animateColor, animateText, onMenuClose]);

  // Click outside & Escape key listeners
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && openRef.current) {
        closeMenu();
      }
    };

    const handleClickOutside = (e) => {
      if (!closeOnClickAway || !openRef.current) return;
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [closeOnClickAway, closeMenu]);

  return (
    <div
      className={
        (className ? className + ' ' : '') +
        'staggered-menu-wrapper' +
        (isFixed ? ' fixed-wrapper' : '') +
        (open ? ' is-active' : '')
      }
      style={{
        ...(accentColor ? { ['--sm-accent']: accentColor } : {}),
        ...(panelBackground ? { ['--sm-panel-bg']: panelBackground } : {})
      }}
      data-position={position}
      data-open={open || undefined}
    >
      {/* Sliding prelayers / colored backdrop curtains */}
      <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
        {(() => {
          const raw = colors && colors.length ? colors.slice(0, 4) : ['#050505', '#07101C'];
          let arr = [...raw];
          if (arr.length >= 3) {
            const mid = Math.floor(arr.length / 2);
            arr.splice(mid, 1);
          }
          return arr.map((c, i) => (
            <div key={i} className="sm-prelayer" style={{ background: c }} />
          ));
        })()}
      </div>

      {/* Header bar hosting logo, optional extra controls, and animated toggle */}
      <header className="staggered-menu-header" aria-label="Main navigation header">
        <div className="sm-logo" aria-label="Logo">
          {logoContent ? (
            logoContent
          ) : logoUrl ? (
            <img
              src={logoUrl}
              alt="Logo"
              className="sm-logo-img"
              draggable={false}
              width={110}
              height={28}
            />
          ) : null}
        </div>

        <div className="sm-header-actions">
          {headerExtra && <div className="sm-header-extra">{headerExtra}</div>}

          <button
            ref={toggleBtnRef}
            className={`sm-toggle ${open ? 'is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="staggered-menu-panel"
            onClick={toggleMenu}
            onMouseEnter={ensureGsap}
            onTouchStart={ensureGsap}
            onFocus={ensureGsap}
            type="button"
          >
            <span ref={textWrapRef} className="sm-toggle-textWrap" aria-hidden="true">
              <span ref={textInnerRef} className="sm-toggle-textInner">
                {textLines.map((l, i) => (
                  <span className="sm-toggle-line" key={i}>
                    {l}
                  </span>
                ))}
              </span>
            </span>
            <span ref={iconRef} className="sm-icon" aria-hidden="true">
              <span ref={plusHRef} className="sm-icon-line" />
              <span ref={plusVRef} className="sm-icon-line sm-icon-line-v" />
            </span>
          </button>
        </div>
      </header>

      {/* Main sliding aside panel */}
      <aside
        id="staggered-menu-panel"
        ref={panelRef}
        className="staggered-menu-panel"
        aria-hidden={!open}
        {...(!open ? { inert: '' } : {})}
        data-lenis-prevent
      >
        <div className="sm-panel-inner">
          <ul
            className="sm-panel-list"
            role="list"
            data-numbering={displayItemNumbering || undefined}
          >
            {items && items.length > 0 ? (
              items.map((it, idx) => (
                <li className="sm-panel-itemWrap" key={it.label + idx}>
                  <a
                    className="sm-panel-item"
                    href={it.link || '#'}
                    aria-label={it.ariaLabel || it.label}
                    data-index={idx + 1}
                    onClick={(e) => {
                      if (it.onClick) {
                        it.onClick(e);
                      }
                      closeMenu();
                    }}
                  >
                    <span className="sm-panel-itemLabel">{it.label}</span>
                  </a>
                </li>
              ))
            ) : (
              <li className="sm-panel-itemWrap" aria-hidden="true">
                <span className="sm-panel-item">
                  <span className="sm-panel-itemLabel">No items</span>
                </span>
              </li>
            )}
          </ul>

          {/* Optional extra slot (e.g. CTA button, contact info) */}
          {extraContent && (
            <div className="sm-extra-slot">
              {typeof extraContent === 'function' ? extraContent({ closeMenu }) : extraContent}
            </div>
          )}

          {/* Social Links Section */}
          {displaySocials && socialItems && socialItems.length > 0 && (
            <div className="sm-socials" aria-label="Social links">
              <h3 className="sm-socials-title">{isRTL ? 'شبکه‌های اجتماعی' : 'Socials'}</h3>
              <ul className="sm-socials-list" role="list">
                {socialItems.map((s, i) => (
                  <li key={s.label + i} className="sm-socials-item">
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sm-socials-link"
                      onClick={(e) => {
                        if (s.onClick) s.onClick(e);
                      }}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default StaggeredMenu;
