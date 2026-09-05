import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { EASING } from '../motion';

export default function PrinciplesSection() {
  const { t, isRTL } = useLanguage();
  const p = t.approach?.principles || {};
  const list = p.list || [];

  return (
    <section className="approach-principles-section" aria-label="Our Operational Principles">
      <div className="container approach-principles-container">
        
        {/* Header Block */}
        <div className="principles-header-block">
          <span className="approach-tag-label">{p.badge || 'OUR MANIFESTO'}</span>
          <h2 className="principles-main-title">
            {p.headline || 'The Principles We Interrogate By'}
          </h2>
          <p className="principles-main-sub">
            {p.subheadline}
          </p>
        </div>

        {/* Vertical Editorial Sequence (Typography-led, progressive scroll reveal) */}
        <div className="principles-vertical-manifesto">
          {list.map((item, idx) => (
            <motion.div
              key={item.num}
              className="principle-manifesto-item"
              initial={{ opacity: 0, x: isRTL ? 24 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, delay: idx * 0.06, ease: EASING.PRIMARY }}
            >
              <div className="principle-num-housing">
                <span className="principle-badge-num">{item.num}</span>
                <div className="principle-stem-line" aria-hidden="true" />
              </div>

              <div className="principle-content-housing">
                <h3 className="principle-headline-title">
                  {item.title}
                </h3>
                <p className="principle-description-text">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
