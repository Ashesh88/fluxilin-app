'use client';

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '@/data/testimonials';

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="w-[340px] sm:w-[380px] shrink-0 mx-3 p-6 rounded-2xl bg-surface border border-border-subtle hover:border-border transition-colors flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-display font-bold text-sm text-main">{item.logoText}</span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#A3E635] text-[#A3E635]" />)}
          </div>
        </div>
        <p className="text-sm text-muted leading-relaxed italic mb-5">"{item.quote}"</p>
      </div>
      <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-border">
            <Image src={item.avatar} alt={item.name} fill className="object-cover" />
          </div>
          <div>
            <div className="text-xs font-semibold text-main">{item.name}</div>
            <div className="text-[10px] text-subtle">{item.role}, {item.company}</div>
          </div>
        </div>
        <span className="text-[10px] font-bold text-[#A3E635] bg-[#A3E635]/10 px-2.5 py-1 rounded-full whitespace-nowrap">
          {item.highlightMetric}
        </span>
      </div>
    </div>
  );
}

export function TestimonialMarquee() {
  const row1 = TESTIMONIALS.slice(0, 3);
  const row2 = TESTIMONIALS.slice(3, 6);

  return (
    <section className="py-28 bg-base relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#6366F1] mb-4">
          <div className="w-8 h-px bg-[#6366F1]" /> Social Proof
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-main leading-tight">
          Trusted by growth teams
          <br />
          <span className="text-muted">at India's leading brands.</span>
        </h2>
      </div>

      <div className="overflow-hidden mb-5">
        <div className="animate-marquee">
          {row1.map((t, i) => <TestimonialCard key={`a-${i}`} item={t} />)}
          {row1.map((t, i) => <TestimonialCard key={`b-${i}`} item={t} />)}
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="animate-marquee-rev">
          {row2.map((t, i) => <TestimonialCard key={`c-${i}`} item={t} />)}
          {row2.map((t, i) => <TestimonialCard key={`d-${i}`} item={t} />)}
        </div>
      </div>
    </section>
  );
}
