import React from 'react';
import { PROBLEM_INSIGHT_STEPS } from '../../data/problemInsightData';
import './ProblemInsight.css';

/**
 * ProblemInsightVisual
 * Renders the 5 production-optimized 3D object images:
 * - 11 -> THE PROBLEM (3D padlock)
 * - 12 -> MORE CHANNELS (3D antenna)
 * - 13 -> THE INSIGHT (3D magnifying glass)
 * - 14 -> CONNECTION (3D precision connectors)
 * - 15 -> GROWTH OPERATING SYSTEM (3D precision engine)
 * 
 * Follows the exact reference interaction architecture from https://scrollservices.framer.website/:
 * - Transitions between stages using smooth scale and rotational glide
 * - Inherits cursor parallax and floating micro-animation (__sp_icon_float)
 * - Explicit dimensions & responsive source set for optimal Core Web Vitals (LCP, CLS, payload)
 */
export default function ProblemInsightVisual({ stepIndex, currentProgress, isRTL, lang }) {
  const step = PROBLEM_INSIGHT_STEPS[stepIndex] || PROBLEM_INSIGHT_STEPS[0];
  const dist = Math.abs(stepIndex - currentProgress);
  const opacity = Math.max(0, Math.min(1, 1 - 1.6 * dist));
  const scale = Math.max(0.78, Math.min(1, 1 - 0.09 * dist));
  const rotation = (currentProgress - stepIndex) * 12;

  const style = {
    position: 'absolute',
    inset: 0,
    opacity,
    transform: `scale(${scale}) rotate(${rotation}deg)`,
    pointerEvents: opacity > 0.6 ? 'auto' : 'none',
    transition: 'opacity 0.05s linear'
  };

  const altText = step.imageAlt?.[lang] || step.imageAlt?.en || step.eyebrow?.en;

  return (
    <div style={style} className="pi-object-wrapper __sp_icon_float">
      <picture className="pi-3d-picture">
        <source
          media="(max-width: 809px)"
          srcSet={step.image400}
          type="image/webp"
        />
        <source
          srcSet={`${step.image400} 400w, ${step.image} 800w`}
          sizes="(max-width: 1199px) 380px, 390px"
          type="image/webp"
        />
        <source
          media="(max-width: 809px)"
          srcSet={step.imagePng}
          type="image/png"
        />
        <source
          srcSet={step.imagePng}
          type="image/png"
        />
        <img
          src={step.image400}
          srcSet={`${step.image400} 400w, ${step.image} 800w`}
          sizes="(max-width: 809px) 240px, (max-width: 1199px) 380px, 390px"
          alt={altText}
          className="pi-3d-object-img"
          width="400"
          height="400"
          loading="eager"
          decoding="async"
          fetchpriority={stepIndex === 0 ? 'high' : 'auto'}
        />
      </picture>
    </div>
  );
}
