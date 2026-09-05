import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { POINT_OF_VIEW_DATA } from '../../data/projectsData';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Reveal, Stagger, editorialVariants, EASING } from '../motion';

export default function WorkPointOfView() {
  const { lang, isRTL } = useLanguage();
  const data = POINT_OF_VIEW_DATA[lang] || POINT_OF_VIEW_DATA.en;

  return (
    <section className="work-pov-section shared-section" aria-label="Point of View">
      <div className="container work-pov-container">

        {/* Section Header */}
        <div className="work-pov-header">
          <span className="work-section-eyebrow">{data.eyebrow}</span>
          <h2 className="work-pov-heading">{data.heading}</h2>
          <p className="work-pov-lead">{data.lead}</p>
        </div>

        {/* 3-Beat Conceptual Transformation Pipeline */}
        <Stagger stagger={0.12} className="work-pov-pipeline">
          {data.steps.map((step, idx) => (
            <motion.div 
              key={step.num}
              variants={editorialVariants}
              className="work-pov-step-card"
            >
              {/* Step Header */}
              <div className="work-pov-step-top">
                <span className="work-pov-step-num">{step.num}</span>
                <span className="work-pov-step-badge">{step.type}</span>
                {idx < data.steps.length - 1 && (
                  <span className="work-pov-step-connector" aria-hidden="true">
                    {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                  </span>
                )}
              </div>

              {/* Step Main Query / Quote */}
              <div className="work-pov-step-example">
                <h3>{step.example}</h3>
              </div>

              {/* Step Reality Diagnosis */}
              <div className="work-pov-step-body">
                <p className="work-pov-reality">{step.reality}</p>
                <div className="work-pov-insight-callout">
                  <span className="insight-indicator" />
                  <span className="insight-text">{step.insight}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </Stagger>

        {/* Bottom Epigram */}
        <div className="work-pov-epigram-strip">
          <div className="epigram-line" />
          <span className="epigram-text">
            {lang === 'fa' 
              ? 'مجیکنسـی فراتر از پوسته درخواست‌ها را تحلیل می‌کند تا معماری پایدار بیزنس ساخته شود.' 
              : 'Magicency looks beneath superficial requests to engineer foundational commercial leverage.'}
          </span>
          <div className="epigram-line" />
        </div>

      </div>
    </section>
  );
}
