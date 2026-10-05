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
    'w-14 h-14 rounded-full bg-[#6366F1] hover:bg-[#4F46E5] text-white flex items-center justify-center shadow-lg shadow-[#6366F1]/40 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#6366F1]/50';

  return (
    <div className="fixed left-5 bottom-6 z-50 flex flex-col gap-3">
      {showUp && (
        <button onClick={scrollToTop} aria-label="Scroll to top" className={btn}>
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
      {showDown && (
        <button onClick={scrollToBottom} aria-label="Scroll to bottom" className={btn}>
          <ChevronDown className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
