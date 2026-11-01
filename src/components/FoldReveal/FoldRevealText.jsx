import React, { useId, useEffect, useRef, useCallback } from 'react';
import FoldText from '../FoldText';
import { useFoldReveal } from './FoldRevealContext';

export default function FoldRevealText({
  as: Component = 'span',
  text,
  children,
  delay = 0,
  duration = 0.7,
  stagger = 0.035,
  ease = 'power3.out',
  hinge = 'top',
  splitBy = 'word',
  perspective = 900,
  creaseShading = 0.25,
  italicWords = [],
  highlightWords = [],
  fontSize = 'inherit',
  fontWeight = 'inherit',
  color = 'inherit',
  className = '',
  style = {},
  trigger = 'auto',
  replay = true,
  ...props
}) {
  const context = useFoldReveal();
  const id = useId();
  const unregisterRef = useRef(null);
  const controllerRef = useRef(null);

  const rawText = text || (typeof children === 'string' ? children : '');

  const isManaged = Boolean(context?.isSectionManaged && trigger !== 'mount');
  const effectiveTrigger = isManaged ? 'manual' : (trigger === 'auto' ? 'enter' : trigger);
  const effectiveReplay = isManaged ? (context?.replay ?? replay) : replay;

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (unregisterRef.current) {
        unregisterRef.current();
        unregisterRef.current = null;
      }
    };
  }, []);

  const handleReady = useCallback((controller) => {
    controllerRef.current = controller;
    if (isManaged && context?.registerItem) {
      if (unregisterRef.current) {
        unregisterRef.current();
      }
      unregisterRef.current = context.registerItem(id, {
        play: (staggerDelay = 0) => controller.play(staggerDelay),
        reset: controller.reset
      });
    }
  }, [id, isManaged, context]);

  const foldTextElement = (
    <FoldText
      text={rawText}
      italicWords={italicWords}
      highlightWords={highlightWords}
      splitBy={splitBy}
      hinge={hinge}
      duration={duration}
      stagger={stagger}
      ease={ease}
      perspective={perspective}
      creaseShading={creaseShading}
      trigger={effectiveTrigger}
      replay={effectiveReplay}
      delay={delay}
      onReady={handleReady}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
    />
  );

  // If Component is 'span' and no outer props/class, return FoldText directly to keep DOM lean
  if (Component === 'span' && !className && Object.keys(style).length === 0 && Object.keys(props).length === 0) {
    return foldTextElement;
  }

  return (
    <Component className={className} style={style} {...props}>
      {foldTextElement}
    </Component>
  );
}
