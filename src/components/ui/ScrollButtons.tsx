'use client';

import React, { useEffect, useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export function ScrollButtons() {
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setShowUp(y > 300);
      setShowDown(y < max - 300);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToBottom = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });


  const btn =
    'w-11 h-11 rounded-full bg-card hover:bg-card-hover border border-border text-main flex items-center justify-center shadow-lg backdrop-blur transition-all duration-200 hover:-translate-y-0.5';

  return (
    <div className="fixed left-5 bottom-6 z-50 flex flex-col gap-3">
      {showUp && (
        <button onClick={scrollToTop} aria-label="Scroll to top" className={btn}>
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
      {showDown && (
        <button onClick={scrollToBottom} aria-label="Scroll to bottom" className={btn}>
          <ChevronDown className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
