import React, { useState, useEffect } from 'react';

/**
 * ScrollProgress Component
 * Renders a glowing progress bar at the very top of the window
 * indicating scroll depth across the portfolio page.
 */
export default function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollHeight > 0) {
        const percentage = (scrollTop / scrollHeight) * 100;
        setScrollWidth(percentage);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="scroll-progress-bar" 
      style={{ width: `${scrollWidth}%` }} 
      role="progressbar"
      aria-valuenow={Math.round(scrollWidth)}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Page scroll progress"
    />
  );
}
