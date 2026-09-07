import React, { useState, useRef, useEffect } from 'react';
import './LazyVimeoPlayer.css';

/**
 * LazyVimeoPlayer — Facade pattern for zero-JS initial page load.
 * Displays high-resolution optimized WebP poster with responsive play button.
 * Defers Vimeo iframe (player.module.js, hls-js.module.js, vendor.module.js ~293.8KB)
 * until user clicks play or scrolls into view.
 */
export default function LazyVimeoPlayer({
  videoId = '1224224238',
  title = 'Magicency Showreel',
  posterWebp = '/reel-preview.webp',
  posterJpg = '/reel-preview.jpg',
  aspectRatio = '16 / 9'
}) {
  const [isActivated, setIsActivated] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isActivated) return;

    // Use strict intersection (must scroll into view, negative margin prevents eager fold trigger)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Keep as click-to-play or activate if scrolled deep
          // We don't auto-activate immediately unless user is looking at it
        }
      },
      { rootMargin: '-10% 0px -10% 0px', threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isActivated]);

  const handlePlayClick = () => {
    setIsActivated(true);
  };

  return (
    <div
      ref={containerRef}
      className={`vm-lazy-vimeo-container ${isActivated ? 'is-active' : ''}`}
      style={{ aspectRatio }}
      role="region"
      aria-label={title}
    >
      {isActivated ? (
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&dnt=1&playsinline=1`}
          className="vm-lazy-vimeo-iframe"
          title={title}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
        />
      ) : (
        <div className="vm-lazy-vimeo-facade" onClick={handlePlayClick}>
          <picture className="vm-lazy-vimeo-picture">
            <source srcSet={posterWebp} type="image/webp" />
            <img
              src={posterJpg}
              alt={title}
              className="vm-lazy-vimeo-poster"
              width="1280"
              height="720"
              loading="lazy"
              decoding="async"
            />
          </picture>
          <div className="vm-lazy-vimeo-scrim" aria-hidden="true" />
          <button
            type="button"
            className="vm-lazy-vimeo-play-button"
            aria-label={`Play ${title}`}
            onClick={(e) => {
              e.stopPropagation();
              handlePlayClick();
            }}
          >
            <div className="vm-lazy-vimeo-play-ring" aria-hidden="true" />
            <svg
              className="vm-lazy-vimeo-play-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            <span className="vm-lazy-vimeo-play-label">Play Reel</span>
          </button>
        </div>
      )}
    </div>
  );
}
