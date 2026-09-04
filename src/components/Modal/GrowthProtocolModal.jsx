import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { X, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import './GrowthProtocolModal.css';

export default function GrowthProtocolModal() {
  const { isModalOpen, setIsModalOpen, t, isRTL } = useLanguage();
  const [selectedStage, setSelectedStage] = useState(1);
  const [selectedObjective, setSelectedObjective] = useState(0);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isModalOpen, setIsModalOpen]);

  if (!isModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    
    // Trigger sophisticated subtle celebratory confetti
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#00F59B', '#2563EB', '#FFFFFF']
    });
  };

  return (
    <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button 
          type="button"
          onClick={() => setIsModalOpen(false)} 
          className="modal-close-btn"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="modal-header">
              <div className="modal-badge">
                <Zap size={13} className="modal-badge-icon" />
                <span>STRATEGIC PROTOCOL</span>
              </div>
              <h2 id="modal-title" className="modal-title">{t.modal.title}</h2>
              <p className="modal-subtitle">{t.modal.subtitle}</p>
            </div>

            {/* Stage Selector */}
            <div className="form-group">
              <label className="form-label">{t.modal.stageLabel}</label>
              <div className="options-grid">
                {t.modal.stages.map((stage, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`option-btn ${selectedStage === idx ? 'selected' : ''}`}
                    onClick={() => setSelectedStage(idx)}
                  >
                    <span className="option-indicator" />
                    <span>{stage}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Objective Selector */}
            <div className="form-group">
              <label className="form-label">{t.modal.objectiveLabel}</label>
              <div className="options-grid">
                {t.modal.objectives.map((obj, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`option-btn ${selectedObjective === idx ? 'selected' : ''}`}
                    onClick={() => setSelectedObjective(idx)}
                  >
                    <span className="option-indicator" />
                    <span>{obj}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Email Input */}
            <div className="form-group">
              <label className="form-label" htmlFor="client-email">{t.modal.emailLabel}</label>
              <div className="input-wrapper">
                <input
                  id="client-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="executive@domain.com"
                  className="strategic-input"
                />
              </div>
            </div>

            {/* Submit CTA */}
            <button type="submit" className="modal-submit-btn">
              <span>{t.modal.submitBtn}</span>
              <ArrowRight size={16} />
            </button>

            {/* Security Guarantee */}
            <div className="modal-footer-notice">
              <ShieldCheck size={14} className="security-icon" />
              <span>{t.modal.disclaimer}</span>
            </div>
          </form>
        ) : (
          <div className="modal-success-view">
            <div className="success-icon-box">
              <CheckCircle2 size={36} className="success-icon" />
            </div>
            <h3 className="success-title">{t.modal.successTitle}</h3>
            <p className="success-message">{t.modal.successMessage}</p>
            <div className="success-telemetry-tag">
              PARAM: STAGE_{selectedStage + 1} // OBJ_{selectedObjective + 1} // AUTH: CONFIRMED
            </div>
            <button 
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="modal-done-btn"
            >
              Return to Experience
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
