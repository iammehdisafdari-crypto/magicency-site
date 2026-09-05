import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { X, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import './ProjectDiscovery.css';

export default function ProjectDiscovery() {
  const { isModalOpen, setIsModalOpen, t, isRTL } = useLanguage();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    challenge: '',
    needs: '',
    timeline: '',
    investment: '',
    brief: ''
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Reset state on open
      setStep(1);
      setDirection(1);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isModalOpen, setIsModalOpen]);

  if (!isModalOpen) return null;

  const data = t.projectDiscovery;
  if (!data) return null; // Safety

  const nextStep = () => {
    if (step < 8) {
      setDirection(1);
      setStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setDirection(-1);
      setStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    // Simulate submission
    setDirection(1);
    setStep(8);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#00F59B', '#2563EB', '#FFFFFF']
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Adjust motion direction based on RTL
  const xOffset = 60;
  const slideVariants = {
    enter: (dir) => {
      const isForward = dir > 0;
      const moveAmount = isRTL ? -xOffset : xOffset;
      return {
        x: isForward ? moveAmount : -moveAmount,
        opacity: 0,
        scale: 0.96
      };
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    },
    exit: (dir) => {
      const isForward = dir > 0;
      const moveAmount = isRTL ? -xOffset : xOffset;
      return {
        x: isForward ? -moveAmount : moveAmount,
        opacity: 0,
        scale: 0.96,
        transition: {
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.3 },
          scale: { duration: 0.3 }
        }
      };
    }
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        const step1 = data.steps.step1;
        return (
          <div className="pd-step-content">
            <h2 className="pd-step-title">{step1.title}</h2>
            <div className="pd-fields-grid">
              <div className="pd-input-group">
                <label>{step1.fields.name}</label>
                <input type="text" value={formData.name} onChange={e => handleInputChange('name', e.target.value)} />
              </div>
              <div className="pd-input-group">
                <label>{step1.fields.company}</label>
                <input type="text" value={formData.company} onChange={e => handleInputChange('company', e.target.value)} />
              </div>
              <div className="pd-input-group">
                <label>{step1.fields.role}</label>
                <input type="text" value={formData.role} onChange={e => handleInputChange('role', e.target.value)} />
              </div>
              <div className="pd-input-group">
                <label>{step1.fields.email}</label>
                <input type="email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} />
              </div>
            </div>
          </div>
        );
      case 2:
        const step2 = data.steps.step2;
        return (
          <div className="pd-step-content">
            <h2 className="pd-step-title">{step2.title}</h2>
            <div className="pd-options-list">
              {step2.options.map((opt, idx) => (
                <button 
                  key={idx} 
                  className={`pd-option-btn ${formData.challenge === opt.label ? 'active' : ''}`}
                  onClick={() => handleInputChange('challenge', opt.label)}
                >
                  <span className="pd-opt-label">{opt.label}</span>
                  <span className="pd-opt-desc">{opt.desc}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        const step3 = data.steps.step3;
        return (
          <div className="pd-step-content">
            <h2 className="pd-step-title">{step3.title}</h2>
            <div className="pd-options-list">
              {step3.options.map((opt, idx) => (
                <button 
                  key={idx} 
                  className={`pd-option-btn ${formData.needs === opt ? 'active' : ''}`}
                  onClick={() => handleInputChange('needs', opt)}
                >
                  <span className="pd-opt-label">{opt}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        const step4 = data.steps.step4;
        return (
          <div className="pd-step-content">
            <h2 className="pd-step-title">{step4.title}</h2>
            <div className="pd-options-list">
              {step4.options.map((opt, idx) => (
                <button 
                  key={idx} 
                  className={`pd-option-btn ${formData.timeline === opt ? 'active' : ''}`}
                  onClick={() => handleInputChange('timeline', opt)}
                >
                  <span className="pd-opt-label">{opt}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 5:
        const step5 = data.steps.step5;
        return (
          <div className="pd-step-content">
            <h2 className="pd-step-title">{step5.title}</h2>
            <div className="pd-options-list">
              {step5.options.map((opt, idx) => (
                <button 
                  key={idx} 
                  className={`pd-option-btn ${formData.investment === opt ? 'active' : ''}`}
                  onClick={() => handleInputChange('investment', opt)}
                >
                  <span className="pd-opt-label">{opt}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 6:
        const step6 = data.steps.step6;
        return (
          <div className="pd-step-content">
            <h2 className="pd-step-title">{step6.title}</h2>
            <div className="pd-input-group pd-textarea-group">
              <textarea 
                placeholder={step6.placeholder}
                value={formData.brief}
                onChange={e => handleInputChange('brief', e.target.value)}
              />
            </div>
          </div>
        );
      case 7:
        const step7 = data.steps.step7;
        return (
          <div className="pd-step-content pd-review-step">
            <h2 className="pd-step-title">{step7.title}</h2>
            <div className="pd-review-box">
              <h3 className="pd-review-title">{step7.summaryTitle}</h3>
              <div className="pd-review-items">
                <div className="pd-review-item"><span>{data.steps.step1.fields.name}:</span> <strong>{formData.name || '-'}</strong></div>
                <div className="pd-review-item"><span>{data.steps.step1.fields.email}:</span> <strong>{formData.email || '-'}</strong></div>
                <div className="pd-review-item"><span>{data.steps.step2.title}:</span> <strong>{formData.challenge || '-'}</strong></div>
                <div className="pd-review-item"><span>{data.steps.step3.title}:</span> <strong>{formData.needs || '-'}</strong></div>
                <div className="pd-review-item"><span>{data.steps.step4.title}:</span> <strong>{formData.timeline || '-'}</strong></div>
                <div className="pd-review-item"><span>{data.steps.step5.title}:</span> <strong>{formData.investment || '-'}</strong></div>
              </div>
            </div>
            <button className="pd-submit-action" onClick={handleSubmit}>
              <span>{step7.submitBtn}</span>
              {isRTL ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
            </button>
          </div>
        );
      case 8:
        const step8 = data.steps.step8;
        return (
          <div className="pd-step-content pd-success-content">
            <div className="pd-success-icon"><CheckCircle2 size={64} /></div>
            <h2 className="pd-step-title">{step8.successTitle}</h2>
            <p className="pd-success-msg">{step8.successMessage}</p>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="pd-overlay" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="pd-header">
        <div className="pd-step-indicator">{`0${Math.min(step, 8)} / 08`}</div>
        <div className="pd-brand-title">{data.title}</div>
        <button className="pd-close-btn" onClick={() => setIsModalOpen(false)}>
          <X size={24} />
        </button>
      </div>

      <div className="pd-main-area">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="pd-anim-container"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>

      {step < 8 && (
        <div className="pd-footer">
          <div className="pd-footer-controls">
            <button 
              className={`pd-nav-btn ${step === 1 ? 'disabled' : ''}`} 
              onClick={prevStep}
              disabled={step === 1}
            >
              {isRTL ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
              <span>{data.controls.prev}</span>
            </button>
            <div className="pd-progress-bar">
              <div className="pd-progress-fill" style={{ width: `${(step / 8) * 100}%` }}></div>
            </div>
            {step < 7 && (
              <button className="pd-nav-btn pd-next-btn" onClick={nextStep}>
                <span>{data.controls.next}</span>
                {isRTL ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
