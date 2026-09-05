import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Reveal, RevealHeading, RevealStatement, RevealBody, ImageReveal, Parallax, EASING } from '../motion';
import './WhatWeDo.css';

// SVG Asterisk Icon matching Vivid Motion brand marker
const AsteriskIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14" aria-hidden="true">
    <path d="M7.98402 15.02C7.51602 15.02 7.1012 14.8605 6.73956 14.5414C6.37792 14.201 6.19711 13.7543 6.19711 13.2012C6.19711 12.8396 6.23965 12.5311 6.32474 12.2758C6.43111 11.9993 6.60129 11.6164 6.83529 11.1271C7.06929 10.6804 7.25011 10.2762 7.37774 9.91456C7.52665 9.53165 7.63301 9.09556 7.69683 8.60628C7.25011 8.9041 6.89911 9.20192 6.64383 9.49974C6.40983 9.79756 6.14392 10.1698 5.84611 10.6166C5.61211 10.9782 5.38874 11.276 5.17602 11.51C4.98456 11.744 4.72929 11.9567 4.4102 12.1482C4.09111 12.3396 3.78265 12.4354 3.48483 12.4354C3.16574 12.4354 2.86792 12.3503 2.59138 12.1801C2.31483 12.0099 2.09147 11.7866 1.92129 11.51C1.75111 11.2335 1.66602 10.9356 1.66602 10.6166C1.66602 10.2975 1.74047 9.99965 1.88938 9.7231C2.05956 9.44656 2.3042 9.22319 2.62329 9.05301C2.89983 8.88283 3.18702 8.77647 3.48483 8.73392C3.80392 8.6701 4.20811 8.62756 4.69738 8.60628C5.31429 8.56374 5.80356 8.51056 6.1652 8.44674C6.54811 8.38292 6.95229 8.24465 7.37774 8.03192C6.90974 7.81919 6.46302 7.68092 6.03756 7.6171C5.63338 7.53201 5.18665 7.47883 4.69738 7.45756C4.18683 7.41501 3.79329 7.37247 3.51674 7.32992C3.2402 7.2661 2.94238 7.1491 2.62329 6.97892C2.3042 6.78747 2.05956 6.55347 1.88938 6.27692C1.74047 6.00038 1.66602 5.71319 1.66602 5.41538C1.66602 5.07501 1.75111 4.76656 1.92129 4.49001C2.09147 4.23474 2.31483 4.02201 2.59138 3.85183C2.86792 3.68165 3.16574 3.59656 3.48483 3.59656C3.76138 3.59656 4.06983 3.68165 4.4102 3.85183C4.70802 4.04328 4.95265 4.26665 5.14411 4.52192C5.35683 4.75592 5.5802 5.06438 5.8142 5.44728C6.15456 5.95783 6.44174 6.36201 6.67574 6.65983C6.93102 6.93638 7.27138 7.22356 7.69683 7.52138C7.65429 6.98956 7.55856 6.53219 7.40965 6.14928C7.26074 5.7451 7.06929 5.31965 6.83529 4.87292C6.62256 4.42619 6.46302 4.06456 6.35665 3.78801C6.25029 3.51147 6.19711 3.19238 6.19711 2.83074C6.19711 2.27765 6.37792 1.83092 6.73956 1.49056C7.1012 1.15019 7.51602 0.980011 7.98402 0.980011C8.45202 0.980011 8.86683 1.15019 9.22847 1.49056C9.61138 1.83092 9.80283 2.27765 9.80283 2.83074C9.80283 3.19238 9.74965 3.53274 9.64329 3.85183C9.53692 4.14965 9.37738 4.49001 9.16465 4.87292C8.93065 5.34092 8.7392 5.76638 8.59029 6.14928C8.46265 6.53219 8.37756 6.98956 8.33501 7.52138C8.76047 7.22356 9.10083 6.9151 9.35611 6.59601C9.61138 6.27692 9.87729 5.88337 10.1538 5.41538C10.2177 5.33028 10.324 5.17074 10.4729 4.93674C10.6431 4.68147 10.8133 4.46874 10.9835 4.29856C11.1537 4.12837 11.3451 3.97947 11.5578 3.85183C11.9407 3.68165 12.2598 3.59656 12.5151 3.59656C12.8342 3.59656 13.132 3.68165 13.4086 3.85183C13.6851 4.02201 13.9085 4.23474 14.0787 4.49001C14.2488 4.83038 14.3339 5.13883 14.3339 5.41538C14.3339 5.71319 14.2488 6.00038 14.0787 6.27692C13.9297 6.55347 13.6957 6.78747 13.3767 6.97892C13.0363 7.17037 12.6959 7.29801 12.3556 7.36183C12.0152 7.42565 11.611 7.46819 11.143 7.48947C10.6537 7.51074 10.2177 7.56392 9.83474 7.64901C9.45183 7.71283 9.04765 7.84046 8.6222 8.03192C9.04765 8.22337 9.43056 8.35101 9.77092 8.41483C10.1326 8.47865 10.6112 8.53183 11.2068 8.57437C11.6748 8.59565 12.079 8.63819 12.4194 8.70201C12.7597 8.76583 13.0788 8.88283 13.3767 9.05301C13.6957 9.22319 13.9297 9.44656 14.0787 9.7231C14.2488 9.99965 14.3339 10.2975 14.3339 10.6166C14.3339 10.8718 14.2488 11.1696 14.0787 11.51C13.9085 11.7866 13.6851 12.0099 13.4086 12.1801C13.132 12.3503 12.8342 12.4354 12.5151 12.4354C12.2386 12.4354 11.9195 12.3396 11.5578 12.1482C11.26 11.978 11.0047 11.7759 10.792 11.5419C10.6006 11.3079 10.3878 10.9995 10.1538 10.6166C9.85602 10.1698 9.57947 9.79756 9.3242 9.49974C9.0902 9.20192 8.76047 8.9041 8.33501 8.60628C8.42011 9.43592 8.69665 10.2868 9.16465 11.159C9.37738 11.5419 9.53692 11.8929 9.64329 12.212C9.74965 12.5098 9.80283 12.8396 9.80283 13.2012C9.80283 13.7543 9.61138 14.201 9.22847 14.5414C8.86683 14.8605 8.45202 15.02 7.98402 15.02Z" />
  </svg>
);

export default function WhatWeDo() {
  const { t, isRTL } = useLanguage();
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [trailImages, setTrailImages] = useState([]);
  const itemRefs = useRef([]);
  const trailIdRef = useRef(0);
  const lastMousePosRef = useRef({ x: 0, y: 0 });

  const data = t.whatWeDo || {
    heading: 'What we do',
    introStatement: 'Strategy sets the direction. Performance and creative turn strategy into action. Technology, AI and automation make growth measurable and compounding.',
    pillars: []
  };

  const pillars = data.pillars || [];

  // Curated Image Pools for each of the 3 capability pillars
  const imagePools = [
    ['/whatwedo-1.jpg', '/project-1.jpg', '/reel-preview.jpg'],
    ['/whatwedo-2.jpg', '/project-2.jpg', '/project-3.jpg'],
    ['/whatwedo-3.jpg', '/project-4.jpg', '/whatwedo-1.jpg']
  ];

  // Scroll Spy to keep the current capability pillar actively highlighted
  useEffect(() => {
    const handleScroll = () => {
      const trigger = window.innerHeight * 0.45;
      itemRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= trigger && rect.bottom >= trigger) {
          setActiveGroupIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pillars.length]);

  // Handle cursor movement inside a capability group to spawn trailing images
  const handleMouseMoveGroup = (e, groupIdx) => {
    if (window.innerWidth < 992) return; // Disable trail on touch/small screens
    const currentPos = { x: e.clientX, y: e.clientY };
    const dist = Math.hypot(
      currentPos.x - lastMousePosRef.current.x,
      currentPos.y - lastMousePosRef.current.y
    );

    // Spawn image when cursor moves more than 90px
    if (dist > 90) {
      lastMousePosRef.current = currentPos;
      const pool = imagePools[groupIdx] || imagePools[0];
      const imgUrl = pool[Math.floor(Math.random() * pool.length)];

      const newTrailItem = {
        id: ++trailIdRef.current,
        x: currentPos.x,
        y: currentPos.y,
        src: imgUrl
      };

      setTrailImages((prev) => [...prev.slice(-6), newTrailItem]);

      // Remove after 750ms
      setTimeout(() => {
        setTrailImages((prev) => prev.filter((item) => item.id !== newTrailItem.id));
      }, 750);
    }
  };

  return (
    <section id="capabilities" className="shared-section vm-exact-wwd-section">
      <div className="container vm-wwd-main-container">
        
        {/* =========================================================
            01. SECTION INTRO (EXACT VIVID MOTION DOM: wwd-intro grid)
            ========================================================= */}
        <div className="wwd-intro grid">
          <div className="wwd-intro-heading">
            <RevealHeading as="h2" className="u-text-heading-xs" delay={0.0}>
              {data.heading || 'What we do'}
            </RevealHeading>
          </div>
          <div className="wwd-intro-description">
            <RevealStatement as="p" className="u-text-heading-sm leading-none" delay={0.12}>
              {data.introStatement}
            </RevealStatement>
          </div>
        </div>

        {/* =========================================================
            02. THREE MAJOR CAPABILITY GROUPS (wwd-list mt-32)
            01 Strategy & Growth
            02 Performance & Creative
            03 Technology, AI & Automation
            ========================================================= */}
        <div className="wwd-list mt-32">
          {pillars.map((pillar, groupIdx) => {
            const isActive = activeGroupIndex === groupIdx;
            const currentVisual = imagePools[groupIdx]?.[0] || pillar.image;

            return (
              <div
                key={pillar.number || groupIdx}
                ref={(el) => (itemRefs.current[groupIdx] = el)}
                className={`wwd-list-item ${isActive ? 'is-active-item' : 'is-inactive-item'}`}
                onMouseMove={(e) => handleMouseMoveGroup(e, groupIdx)}
              >
                {/* Header: Number + Category Title */}
                <div className="wwd-list-item-header grid">
                  <div className="wwd-list-item-no">{pillar.number}</div>
                  <h3 className="wwd-list-item-title">{pillar.title}</h3>
                </div>

                {/* Two-Column Editorial Composition: Left Visual Showcase, Right Services Set */}
                <div className="wwd-item-body-layout">
                  
                  {/* Visual Stage representing this capability */}
                  <div className="wwd-item-visual-column">
                    <div className="wwd-sticky-visual-wrapper">
                      <Parallax offset={16}>
                        <ImageReveal
                          src={currentVisual}
                          alt={pillar.title}
                          className="wwd-visual-media-frame"
                          imageClassName="wwd-visual-media-img"
                          delay={0.22}
                        >
                          <div className="wwd-visual-media-frame">
                            <img
                              src={currentVisual}
                              alt={pillar.title}
                              className="wwd-visual-media-img"
                              loading="lazy"
                            />
                            <div className="wwd-visual-media-overlay" />
                            <div className="wwd-visual-caption">
                              <span className="wwd-caption-dot" />
                              <span className="wwd-caption-tag">{pillar.tag}</span>
                            </div>
                          </div>
                        </ImageReveal>
                      </Parallax>
                      <RevealBody as="p" className="wwd-pillar-summary-text" delay={0.16}>
                        {pillar.description}
                      </RevealBody>
                    </div>
                  </div>

                  {/* Flowing Service Set with Sliding Hover Background & Running Marquee */}
                  <div className="wwd-list-item-set">
                    {pillar.services.map((serviceName, sIdx) => (
                      <div key={sIdx} className="wwd-list-item-set-row grid">
                        {/* Default Static Label */}
                        <div className="wwd-list-item-set-row-cell">
                          <span className="wwd-list-item-set-row-label">
                            <span className="wwd-row-counter">0{sIdx + 1}.</span>
                            <span>{serviceName}</span>
                          </span>
                        </div>

                        {/* Hover Running Marquee with High-Contrast Track */}
                        <div className="wwd-list-item-set-row-cell-hover" aria-hidden="true">
                          <div className="track">
                            <div className="track-group">
                              <span className="wwd-list-item-set-row-label-hover">{serviceName}</span>
                              <div className="wwd-list-item-set-row-label-icon-hover"><AsteriskIcon /></div>
                              <span className="wwd-list-item-set-row-label-hover">{serviceName}</span>
                              <div className="wwd-list-item-set-row-label-icon-hover"><AsteriskIcon /></div>
                            </div>
                            <div className="track-group">
                              <span className="wwd-list-item-set-row-label-hover">{serviceName}</span>
                              <div className="wwd-list-item-set-row-label-icon-hover"><AsteriskIcon /></div>
                              <span className="wwd-list-item-set-row-label-hover">{serviceName}</span>
                              <div className="wwd-list-item-set-row-label-icon-hover"><AsteriskIcon /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* =========================================================
          03. VIVID MOTION SIGNATURE IMAGE TRAIL OVERLAY
          ========================================================= */}
      <div className="wwd-trail-wrapper" aria-hidden="true">
        <AnimatePresence>
          {trailImages.map((item) => (
            <motion.div
              key={item.id}
              className="wwd-trail-pool-img-container"
              style={{
                left: item.x - 110,
                top: item.y - 80
              }}
              initial={{
                opacity: 0,
                scale: 0.2,
                clipPath: 'polygon(15% 0%, 85% 0%, 100% 85%, 0% 100%)'
              }}
              animate={{
                opacity: 1,
                scale: 1,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
              }}
              exit={{
                opacity: 0,
                scale: 0.6,
                transition: { duration: 0.35, ease: EASING.SECONDARY }
              }}
              transition={{
                duration: 0.45,
                ease: EASING.CINEMATIC
              }}
            >
              <img src={item.src} alt="" className="wwd-trail-inner-img" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
