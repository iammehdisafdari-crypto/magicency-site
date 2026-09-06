import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const p = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
        setProgress(p);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="about-scroll-progress-track"
      aria-hidden="true"
    >
      <div 
        className="about-scroll-progress-bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
