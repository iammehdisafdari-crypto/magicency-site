import React, { useEffect, useState, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './ShowreelModal.css';

export default function ShowreelModal({ isOpen, onClose }) {
  const { t, isRTL, setIsModalOpen } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      code: 'PHASE 01',
      title: isRTL ? 'تحلیل سیگنال و استراتژی رشد' : 'Signal Capture & Strategy Architecture',
      desc: isRTL ? 'کشف گلوگاه‌های رشد و معماری اکوسیستم قبل از تخصیص سرمایه' : 'Pinpointing high-leverage growth constraints before capital deployment',
      tag: '01 / STRATEGY'
    },
    {
      code: 'PHASE 02',
      title: isRTL ? 'آزمایش پرسرعت سناریوهای خلاقانه' : 'High-Velocity Creative Experimentation',
      desc: isRTL ? 'اعتبارسنجی هوک‌ها، زوایای روان‌شناختی و زاویه دید مخاطب' : 'Algorithmic hook testing and emotional resonance mapping',
      tag: '02 / CREATIVE'
    },
    {
      code: 'PHASE 03',
      title: isRTL ? 'پرفورمنس و جذب الگوریتمی' : 'Algorithmic Performance Acquisition',
      desc: isRTL ? 'مدیریت و مقیاس هوشمند کانال‌های تبلیغاتی با کاهش CAC' : 'Multi-channel predictive media buying and intent demand capture',
      tag: '03 / PERFORMANCE'
    },
    {
      code: 'PHASE 04',
      title: isRTL ? 'فناوری تبدیل و اتوماسیون هوش مصنوعی' : 'Conversion Tech & AI Automation',
      desc: isRTL ? 'مسیرهای تبدیل اختصاصی و اتوماسیون داده برای هم‌افزایی درآمد' : '1-tap conversion architecture and closed-loop data telemetry',
      tag: '04 / TECHNOLOGY + AI'
    }
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setActiveStep(0);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying, steps.length]);

  if (!isOpen) return null;

  return (
    <div className="vm-reel-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="vm-reel-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header bar */}
        <div className="vm-reel-header">
          <div className="vm-reel-title-group">
            <span className="vm-reel-badge">✦ MAGICENCY GROWTH SHOWREEL</span>
            <span className="vm-reel-counter">{steps[activeStep].code} // 04</span>
          </div>
          <button 
            type="button" 
            onClick={onClose} 
            className="vm-reel-close-btn"
            aria-label="Close Showreel"
          >
            <X size={18} />
          </button>
        </div>

        {/* Cinematic Reel Screen Simulation */}
        <div className="vm-reel-screen">
          <div className="vm-reel-ambient-mesh" />
          
          {/* Central High-Tech Canvas Visual */}
          <div className="vm-reel-visual-frame">
            <div className={`vm-reel-step-display step-${activeStep}`}>
              <div className="vm-reel-step-tag">{steps[activeStep].tag}</div>
              <h3 className="vm-reel-step-title">{steps[activeStep].title}</h3>
              <p className="vm-reel-step-desc">{steps[activeStep].desc}</p>
            </div>

            {/* Dynamic Interactive Waveform */}
            <div className="vm-reel-waveform">
              {[40, 75, 30, 95, 60, 85, 45, 100, 70, 90, 35, 80, 55, 90, 65, 40].map((h, i) => (
                <span 
                  key={i} 
                  className={`wave-bar ${isPlaying ? 'is-animating' : ''}`}
                  style={{ 
                    height: `${isPlaying ? h : 20}%`, 
                    animationDelay: `${i * 0.08}s` 
                  }} 
                />
              ))}
            </div>
          </div>

          {/* Stepper Progress Bar */}
          <div className="vm-reel-progress-row">
            {steps.map((s, idx) => (
              <div 
                key={s.code} 
                className={`vm-reel-prog-seg ${idx === activeStep ? 'active' : idx < activeStep ? 'passed' : ''}`}
                onClick={() => setActiveStep(idx)}
              >
                <div className="vm-reel-prog-fill" />
              </div>
            ))}
          </div>
        </div>

        {/* Reel Controls and Actions */}
        <div className="vm-reel-footer">
          <div className="vm-reel-playback-btns">
            <button 
              type="button" 
              onClick={() => setIsPlaying(!isPlaying)}
              className="vm-reel-icon-btn"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={15} /> : <Play size={15} />}
            </button>
            <button 
              type="button" 
              onClick={() => setIsMuted(!isMuted)}
              className="vm-reel-icon-btn"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>
            <span className="vm-reel-status-text">
              {isPlaying ? (isRTL ? 'درحال پخش معماری سیستم رشد...' : 'STREAMING GROWTH ARCHITECTURE...') : (isRTL ? 'متوقف شد' : 'PAUSED')}
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              setIsModalOpen(true);
            }}
            className="vm-btn-primary"
          >
            <span>{t.nav.startProject || t.nav.startConversation}</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
