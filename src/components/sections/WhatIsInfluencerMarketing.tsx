'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Compass, Lightbulb, UserCheck, Video, BarChart2 } from 'lucide-react';
import { TRADITIONAL_VS_INFLUENCER } from '@/data/stats';

const STEPS = [
  { icon: Compass, label: 'Audience Discovery', desc: 'Deep buyer mapping across city tiers, dialects, and purchase intent signals.' },
  { icon: Lightbulb, label: 'Campaign Strategy', desc: 'Non-salesy hook frameworks engineered for native virality, not ad blindness.' },
  { icon: UserCheck, label: 'Creator Match', desc: 'AI screening: 45+ data points — zero bots, demographic-perfect audiences.' },
  { icon: Video, label: 'Content Lab', desc: 'High-retention Reels and Shorts designed to stop the scroll organically.' },
  { icon: BarChart2, label: 'Performance Tracking', desc: 'Live UTM tracking, coupon codes, and verified ROAS — not impressions.' },
];

export function WhatIsInfluencerMarketing() {
  const [active, setActive] = useState(0);
  return (
    <section id="what-is-it" className="py-28 bg-base relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366F1]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#6366F1] mb-4">
            <div className="w-8 h-px bg-[#6366F1]" /> What We Do
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-main mb-4 leading-tight">
            Influencer marketing is not
            <br />
            <span className="text-gradient-accent">about followers. It's about trust.</span>
          </h2>
          <p className="text-muted max-w-xl text-lg">
            When creators talk, audiences listen. We engineer campaigns that turn creator trust into measurable revenue — not just brand awareness.
          </p>
        </div>

        {/* 5-step selector */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 mb-20">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const isActive = active === i;
            return (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 ${
                  isActive
                    ? 'bg-[#6366F1]/15 border-[#6366F1]/50 shadow-lg shadow-[#6366F1]/10'
                    : 'bg-surface border-border-subtle hover:border-border'
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-4 ${isActive ? 'bg-[#6366F1] text-main' : 'bg-card text-[#6366F1]'}`}>
                  <Icon className="w-4.5 h-4.5" size={18} />
                </div>
                <p className={`text-sm font-semibold mb-2 ${isActive ? 'text-main' : 'text-muted'}`}>{s.label}</p>
                <p className="text-xs text-subtle leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="bg-surface rounded-3xl border border-border-subtle overflow-hidden">
          <div className="grid grid-cols-3 bg-card px-6 py-4 text-xs font-semibold uppercase tracking-widest border-b border-border-subtle">
            <span className="text-muted">Factor</span>
            <span className="text-red-400">Traditional Ads</span>
            <span className="text-[#A3E635]">Fluxilin Creators</span>
          </div>
          {TRADITIONAL_VS_INFLUENCER.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 px-6 py-5 gap-4 text-sm border-b border-border-subtle last:border-0 ${
                i % 2 === 0 ? '' : 'bg-white/[0.02]'
              }`}
            >
              <div>
                <span className="font-semibold text-main text-sm">{row.factor}</span>
                <div className="mt-1 inline-block text-[10px] font-bold text-[#A3E635] bg-[#A3E635]/10 px-2 py-0.5 rounded-full">
                  {row.advantage}
                </div>
              </div>
              <div className="flex items-start gap-2 text-xs text-muted leading-relaxed">
                <X className="w-3.5 h-3.5 text-red-500 mt-0.5 shrink-0" />
                {row.traditional.split('—')[0]}
              </div>
              <div className="flex items-start gap-2 text-xs text-main leading-relaxed">
                <Check className="w-3.5 h-3.5 text-[#A3E635] mt-0.5 shrink-0" />
                {row.influencer.split('—')[0]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
