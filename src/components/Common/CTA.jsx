import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useRouter } from '../../context/RouterContext';
import { trackCtaClick } from '../../utils/analytics';
import './CTA.css';

/**
 * Standard Arrow Icons for CTA System
 */
function ArrowForwardIcon({ isRTL }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {isRTL ? (
        <path d="M19 12H5M12 19l-7-7 7-7" />
      ) : (
        <path d="M5 12h14M12 5l7 7-7 7" />
      )}
    </svg>
  );
}

function ArrowUpRightIcon({ isRTL }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {isRTL ? (
        <path d="M17 17L7 7M17 7H7v10" />
      ) : (
        <path d="M7 17L17 7M7 7h10v10" />
      )}
    </svg>
  );
}

/**
 * Reusable Unified CTA Component
 * 
 * Supports:
 * - variant: 'primary' | 'secondary' | 'text'
 * - size: 'default' | 'compact'
 * - href: internal route string (handled via useRouter) or external url
 * - onClick: click handler
 * - trackingName & trackingLocation: GA4 analytics event tracking
 * - arrowDirection: 'forward' | 'up-right' | 'none'
 */
export default function CTA({
  variant = 'primary',
  size = 'default',
  href,
  onClick,
  trackingName,
  trackingLocation = 'unknown',
  external = false,
  icon,
  showArrow = true,
  arrowDirection = 'forward',
  fullWidth = false,
  disabled = false,
  type = 'button',
  ariaLabel,
  className = '',
  children,
  role,
  ...restProps
}) {
  const { isRTL } = useLanguage();
  const router = useRouter ? useRouter() : null;

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    // Trigger analytics tracking if configured
    if (trackingName) {
      trackCtaClick(trackingName, trackingLocation);
    }

    if (onClick) {
      onClick(e);
    }

    // Handle client-side routing for internal links when not already prevented
    if (href && !external && !e.defaultPrevented) {
      if (href.startsWith('#')) {
        // Hash link: default browser scroll or custom smooth scroll
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (router && router.navigate && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        e.preventDefault();
        router.navigate(href);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const classNames = [
    'mag-cta',
    `mag-cta--${variant}`,
    `mag-cta--size-${size}`,
    fullWidth ? 'mag-cta--full-width' : '',
    disabled ? 'is-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  // Determine icon to display
  let renderedIcon = null;
  if (icon) {
    renderedIcon = (
      <span className="mag-cta__icon" aria-hidden="true">
        {icon}
      </span>
    );
  } else if (showArrow && arrowDirection !== 'none') {
    const isUpRight = arrowDirection === 'up-right';
    renderedIcon = (
      <span
        className={`mag-cta__icon ${isUpRight ? 'mag-cta__icon--up-right' : 'mag-cta__icon--forward'}`}
        aria-hidden="true"
      >
        {isUpRight ? <ArrowUpRightIcon isRTL={isRTL} /> : <ArrowForwardIcon isRTL={isRTL} />}
      </span>
    );
  }

  // If href is specified and not disabled, render as <a>
  if (href && !disabled) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={classNames}
        aria-label={ariaLabel}
        role={role}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...restProps}
      >
        <span className="mag-cta__label">{children}</span>
        {renderedIcon}
      </a>
    );
  }

  // Otherwise render as standard semantic <button>
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={classNames}
      aria-label={ariaLabel}
      {...restProps}
    >
      <span className="mag-cta__label">{children}</span>
      {renderedIcon}
    </button>
  );
}
