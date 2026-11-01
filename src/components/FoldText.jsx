import React, { useEffect, useMemo, useRef } from 'react';
import { getGsap, getGsapWithScrollTrigger } from '../utils/gsapLoader';
import './FoldText.css';

const HINGE_CONFIG = {
  top: { origin: '50% 0%', rotateX: -92, rotateY: 0 },
  bottom: { origin: '50% 100%', rotateX: 92, rotateY: 0 },
  left: { origin: '0% 50%', rotateX: 0, rotateY: 92 },
  right: { origin: '100% 50%', rotateX: 0, rotateY: -92 }
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const checkWordMatch = (word, wordList) => {
  if (!wordList || !wordList.length) return false;
  const cleanWord = word.trim().replace(/[.,!?;:،"”’'«»]/g, '');
  if (!cleanWord) return false;
  return wordList.some((phrase) => {
    if (!phrase) return false;
    const phraseWords = phrase
      .trim()
      .split(/\s+/)
      .map((w) => w.replace(/[.,!?;:،"”’'«»]/g, ''))
      .filter(Boolean);
    return phraseWords.includes(cleanWord);
  });
};

const renderWhitespace = (value, key) =>
  value.split(/(\n)/).map((part, index) => {
    if (part === '\n') return <br key={`${key}-br-${index}`} className="fold-text-break" />;
    if (!part) return null;

    return (
      <span className="fold-text-whitespace" key={`${key}-space-${index}`}>
        {part.includes('\u00A0') ? '\u00A0' : ' '}
      </span>
    );
  });

export default function FoldText({
  text = 'Design unfolds',
  italicWords = [],
  highlightWords = [],
  splitBy = 'char',
  hinge = 'top',
  duration = 0.65,
  stagger = 0.045,
  ease = 'power3.out',
  perspective = 700,
  creaseShading = 0.55,
  trigger = 'mount',
  replay = false,
  delay = 0,
  onReady = null,
  fontSize = 'inherit',
  fontWeight = 'inherit',
  color = 'inherit',
  className = '',
  style = {}
}) {
  const rootRef = useRef(null);
  const timelineRef = useRef(null);
  const hingeConfig = HINGE_CONFIG[hinge] || HINGE_CONFIG.top;
  const safeCrease = clamp(creaseShading, 0, 1);
  const safePerspective = Math.max(120, perspective);

  const segments = useMemo(() => {
    let segmentIndex = 0;

    const renderSegment = (content, key, isItalic = false, isHighlight = false, split = splitBy) => {
      segmentIndex += 1;
      let pieceClass = 'fold-text-piece';
      if (isItalic) pieceClass += ' italic-serif-word';
      if (isHighlight) pieceClass += ' highlight-pink';

      return (
        <span
          className="fold-text-segment"
          data-fold-split={split}
          key={key}
          style={{ '--fold-perspective': `${safePerspective}px` }}
        >
          <span
            className={pieceClass}
            data-fold-hinge={hinge}
            style={{ transformOrigin: hingeConfig.origin, '--fold-crease': 0 }}
          >
            {content || '\u00A0'}
          </span>
        </span>
      );
    };

    if (splitBy === 'line') {
      return text.split('\n').map((line, index) => (
        <span className="fold-text-line" key={`line-${index}`}>
          {renderSegment(line || '\u00A0', `segment-line-${index}`, false, false, 'line')}
        </span>
      ));
    }

    if (splitBy === 'word') {
      const lines = text.split('\n');
      if (lines.length > 1) {
        return lines.map((line, lineIndex) => {
          const words = line.split(/(\s+)/).flatMap((part, index) => {
            if (!part) return [];
            if (/^\s+$/.test(part)) return renderWhitespace(part, `l${lineIndex}-ws-${index}`);
            const isItalic = checkWordMatch(part, italicWords);
            const isHighlight = checkWordMatch(part, highlightWords);
            return renderSegment(part, `segment-word-${segmentIndex}`, isItalic, isHighlight);
          });

          return (
            <span
              className={`fold-text-line title-row row-${lineIndex + 1}`}
              key={`line-${lineIndex}`}
            >
              {words}
            </span>
          );
        });
      }

      return text.split(/(\s+)/).flatMap((part, index) => {
        if (!part) return [];
        if (/^\s+$/.test(part)) return renderWhitespace(part, `ws-${index}`);
        const isItalic = checkWordMatch(part, italicWords);
        const isHighlight = checkWordMatch(part, highlightWords);
        return renderSegment(part, `segment-word-${segmentIndex}`, isItalic, isHighlight);
      });
    }

    return Array.from(text).map((char, index) => {
      if (char === '\n') return <br key={`br-${index}`} className="fold-text-break" />;
      return renderSegment(char === ' ' ? '\u00A0' : char, `segment-char-${index}`);
    });
  }, [text, italicWords, splitBy, hinge, hingeConfig.origin, safePerspective]);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const root = rootRef.current;
    if (!root) return undefined;

    const pieces = Array.from(root.querySelectorAll('.fold-text-piece'));
    if (!pieces.length) return undefined;

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    const activeDuration = reduceMotion ? 0.01 : duration;
    const activeStagger = reduceMotion ? 0 : stagger;

    const fromVars = {
      opacity: reduceMotion ? 1 : 0,
      rotateX: reduceMotion ? 0 : hingeConfig.rotateX,
      rotateY: reduceMotion ? 0 : hingeConfig.rotateY,
      '--fold-crease': reduceMotion ? 0 : safeCrease,
      transformOrigin: hingeConfig.origin,
      force3D: true
    };

    const toVars = {
      opacity: 1,
      rotateX: 0,
      rotateY: 0,
      '--fold-crease': 0,
      duration: activeDuration,
      ease: reduceMotion ? 'none' : ease,
      stagger: activeStagger,
      clearProps: 'willChange'
    };

    let isCancelled = false;
    let scrollTriggerInstance = null;
    let hoverHandler = null;

    const killTimeline = (gsapInstance) => {
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
      if (gsapInstance) {
        gsapInstance.killTweensOf(pieces);
      }
    };

    const play = (gsapInstance, extraDelay = 0, repeat = false) => {
      killTimeline(gsapInstance);
      const effectiveDelay = Math.max(0, delay + extraDelay);
      timelineRef.current = gsapInstance.timeline({
        delay: effectiveDelay,
        repeat: repeat ? -1 : 0,
        repeatDelay: repeat ? 0.75 : 0
      });
      timelineRef.current.fromTo(pieces, fromVars, toVars);
      return timelineRef.current;
    };

    const reset = (gsapInstance) => {
      killTimeline(gsapInstance);
      if (!reduceMotion && gsapInstance) {
        gsapInstance.set(pieces, fromVars);
      }
    };

    const needsScrollTrigger = trigger === 'scroll' || trigger === 'enter';
    const loaderPromise = needsScrollTrigger
      ? getGsapWithScrollTrigger()
      : getGsap();

    loaderPromise.then((loaded) => {
      if (isCancelled || !loaded || !rootRef.current) return;
      const gsapInstance = loaded.gsap || loaded;
      const ScrollTriggerInstance = loaded.ScrollTrigger;

      if (trigger === 'manual') {
        if (typeof onReady === 'function') {
          onReady({
            play: (extraDelay = 0) => play(gsapInstance, extraDelay, false),
            reset: () => reset(gsapInstance)
          });
        }
      } else if (trigger === 'hover') {
        gsapInstance.set(pieces, {
          opacity: 1,
          rotateX: 0,
          rotateY: 0,
          '--fold-crease': 0,
          transformOrigin: hingeConfig.origin
        });
        hoverHandler = () => play(gsapInstance, 0, false);
        root.addEventListener('mouseenter', hoverHandler);
      } else if (needsScrollTrigger && ScrollTriggerInstance) {
        if (!reduceMotion) {
          gsapInstance.set(pieces, fromVars);
        }
        scrollTriggerInstance = ScrollTriggerInstance.create({
          trigger: root,
          start: 'top 82%',
          end: 'bottom 18%',
          once: !replay,
          onEnter: () => play(gsapInstance, 0, false),
          onLeave: () => {
            if (replay) reset(gsapInstance);
          },
          onEnterBack: () => {
            if (replay) play(gsapInstance, 0, false);
          },
          onLeaveBack: () => {
            if (replay) reset(gsapInstance);
          }
        });
      } else if (trigger === 'loop') {
        play(gsapInstance, 0, true);
      } else {
        // 'mount' (Hero and default)
        play(gsapInstance, 0, false);
      }
    });

    return () => {
      isCancelled = true;
      if (hoverHandler && root) {
        root.removeEventListener('mouseenter', hoverHandler);
      }
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
    };
  }, [
    text,
    italicWords,
    splitBy,
    hinge,
    duration,
    stagger,
    ease,
    perspective,
    safeCrease,
    trigger,
    replay,
    delay,
    onReady,
    hingeConfig.origin,
    hingeConfig.rotateX,
    hingeConfig.rotateY
  ]);

  const rootStyle = {
    ...(fontSize && fontSize !== 'inherit'
      ? { '--fold-text-font-size': typeof fontSize === 'number' ? `${fontSize}px` : fontSize }
      : {}),
    ...(fontWeight && fontWeight !== 'inherit'
      ? { '--fold-text-font-weight': fontWeight }
      : {}),
    ...(color && color !== 'inherit'
      ? { '--fold-text-color': color }
      : {}),
    ...style
  };

  return (
    <span ref={rootRef} className={`fold-text ${className}`.trim()} style={rootStyle}>
      <span
        className="fold-text-sr-only"
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0
        }}
      >
        {text.replace(/\n/g, ' ')}
      </span>
      <span className="fold-text-visual" aria-hidden="true">
        {segments}
      </span>
    </span>
  );
}
