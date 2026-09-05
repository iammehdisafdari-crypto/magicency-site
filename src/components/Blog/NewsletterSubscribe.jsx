import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function NewsletterSubscribe() {
  const { t, isRTL } = useLanguage();
  const n = t.blog?.newsletter || {};
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section className="newsletter-subscribe-section" aria-label="Newsletter Subscription">
      <div className="container">
        <div className="newsletter-card">
          <div className="newsletter-badge">
            <span className="newsletter-dot" />
            <span>{n.badge || 'DISPATCH'}</span>
          </div>

          <div className="newsletter-copy-wrap">
            <h2 className="newsletter-headline">{n.headline}</h2>
            <p className="newsletter-subline">{n.subline}</p>
          </div>

          <div className="newsletter-form-wrap">
            <AnimatePresence mode="wait">
              {isSubscribed ? (
                <motion.div
                  key="subscribed"
                  className="newsletter-success-box"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <span className="success-icon">✓</span>
                  <p>{n.successMsg || 'Thank you for subscribing to Magicency Dispatches.'}</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="newsletter-input-group"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={n.placeholder || 'ENTER YOUR EMAIL'}
                    className="newsletter-email-input"
                    aria-label="Email address for subscription"
                  />
                  <button
                    type="submit"
                    className="newsletter-submit-btn"
                    aria-label={n.button || 'SUBSCRIBE'}
                  >
                    <span>{n.button || 'SUBSCRIBE'}</span>
                    <span className="btn-arrow" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        {isRTL ? (
                          <path d="M19 12H5M12 19l-7-7 7-7" />
                        ) : (
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        )}
                      </svg>
                    </span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
