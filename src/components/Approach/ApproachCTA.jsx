import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { EASING } from '../motion';
import CTA from '../Common/CTA';

export default function ApproachCTA() {
  const { t, isRTL, setIsModalOpen } = useLanguage();
  const c = t.approach?.closing || {};

  return (
    <section className="approach-closing-section" aria-label="Closing Statement and Strategic Project CTA">
      <div className="container approach-closing-container">
        
        {/* Section 16: Quiet, Powerful Closing Statement with breathing room */}
        <div className="approach-quiet-statement-zone">
          <motion.div 
            className="quiet-statement-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: EASING.PRIMARY }}
          >
            <div className="statement-subtle-glow" aria-hidden="true" />
            <blockquote className="quiet-statement-quote">
              {c.statement || `We don’t believe growth is a collection of tactics.\nWe believe it is a system of better decisions.`}
            </blockquote>
          </motion.div>
        </div>

        {/* Section 17: Strategic Action Trigger */}
        <div className="approach-final-cta-block">
          <motion.div
            className="final-cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASING.PRIMARY }}
          >
            <h2 className="final-cta-headline text-gradient-amber">
              {c.ctaHeadline || 'What needs to change?'}
            </h2>
            <p className="final-cta-subtext">
              {c.ctaSubtext || "Start with the real problem. We'll engineer the system together."}
            </p>

            {/* Triggers existing Project Discovery Experience directly */}
            <div className="final-cta-btn-wrap">
              <CTA
                variant="primary"
                onClick={() => setIsModalOpen(true)}
                trackingName="start_project"
                trackingLocation="approach_cta_section"
                ariaLabel={c.ctaButton || 'START A PROJECT'}
                className="approach-primary-cta"
              >
                {c.ctaButton || 'START A PROJECT'}
              </CTA>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
