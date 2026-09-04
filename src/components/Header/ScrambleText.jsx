import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const EN_CHARS = '01#$Ø%&*+?/<>=!XYZ';
const FA_CHARS = '۰۱۲۳۴۵۶۷۸۹#٪؟!*+ـ';

export default function ScrambleText({ text, className = '' }) {
  const { isRTL } = useLanguage();
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);
  const isAnimatingRef = useRef(false);

  // Synchronize when the target text changes (e.g. language switch)
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      isAnimatingRef.current = false;
    }
    setDisplayText(text);
  }, [text]);

  const handleMouseEnter = () => {
    // Respect prefers-reduced-motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    isAnimatingRef.current = true;
    const cipherSet = isRTL ? FA_CHARS : EN_CHARS;
    const originalText = text;
    const totalLength = originalText.length;
    const totalFrames = 10;
    const frameInterval = 32; // ~320ms total duration
    let frame = 0;

    intervalRef.current = setInterval(() => {
      frame++;
      
      const resolvedCount = Math.floor((frame / totalFrames) * totalLength);

      const nextText = originalText
        .split('')
        .map((char, index) => {
          // Preserve whitespace
          if (char === ' ') return ' ';
          
          // If character is resolved, show real character
          if (index < resolvedCount) {
            return originalText[index];
          }

          // Otherwise show rapid cipher character
          const randomIndex = Math.floor(Math.random() * cipherSet.length);
          return cipherSet[randomIndex];
        })
        .join('');

      setDisplayText(nextText);

      if (frame >= totalFrames) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        isAnimatingRef.current = false;
        setDisplayText(originalText);
      }
    }, frameInterval);
  };

  const handleMouseLeave = () => {
    // If mouse leaves before animation completes, ensure it cleanly resolves
    if (isAnimatingRef.current) {
      // Let it finish resolving quickly or resolve immediately
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        isAnimatingRef.current = false;
        setDisplayText(text);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <span
      className={`scramble-text-node ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={text}
    >
      {displayText}
    </span>
  );
}
