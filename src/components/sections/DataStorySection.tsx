'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Globe, Zap, Award, Flame } from 'lucide-react';
import { MARKET_2026_STATS } from '@/data/stats';

const FEATURED = {
  metric: '₹3,480 Cr',
  label: "India's Creator Economy by 2026",
  growth: '+32.4% YoY',
  bullets: [
    '68% of fresh ad budgets shifting to creator-led social commerce',
    '8.2x faster checkout rate vs static display ads',
    '74% of growth coming from Tier 2/3 markets',
  ],
};

const iconMap: Record<string, React.ReactNode> = {
  'market-size': <Flame className="w-5 h-5" />,
  'roi-superiority': <TrendingUp className="w-5 h-5" />,
  'regional-power': <Globe className="w-5 h-5" />,
  'gen-z-engagement': <Zap className="w-5 h-5" />,
  'long-term-lift': <Award className="w-5 h-5" />,
};

export function DataStorySection() {
  return (
    <section id="roi-story" className="py-28 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A3E635]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#A3E635] mb-4">
            <div className="w-8 h-px bg-[#A3E635]" /> 2026 Market Data
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-main leading-tight">
            The numbers don't lie.
            <br />
            <span className="text-muted">Creator marketing wins.</span>
          </h2>
        </div>

        {/* Featured hero stat */}
        <div className="mb-8 p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-[#6366F1]/20 via-[#13131A] to-[#13131A] border border-[#6366F1]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#6366F1]/10 rounded-full blur-3xl" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm text-[#818CF8] font-semibold mb-3 uppercase tracking-widest">Industry Milestone</p>
              <div className="font-display text-5xl lg:text-7xl font-bold text-main mb-3">{FEATURED.metric}</div>
              <p className="text-lg text-muted mb-6">{FEATURED.label}</p>
              <div className="inline-flex items-center gap-2 bg-[#A3E635]/10 border border-[#A3E635]/30 text-[#A3E635] text-sm font-semibold px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4" />
                {FEATURED.growth}
              </div>
            </div>
            <div className="space-y-4">
              {FEATURED.bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#6366F1]/20 border border-[#6366F1]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#6366F1]" />
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MARKET_2026_STATS.slice(1).map((stat) => (
            <motion.div
              key={stat.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-2xl bg-card border border-border-subtle hover:border-border group transition-colors"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-9 h-9 rounded-lg bg-card group-hover:bg-[#6366F1]/20 text-[#6366F1] flex items-center justify-center transition-colors">
                  {iconMap[stat.id]}
                </div>
                <span className="text-[10px] font-semibold text-[#A3E635] bg-[#A3E635]/10 px-2 py-0.5 rounded-full">
                  {stat.trend}
                </span>
              </div>

              <div className="font-display text-3xl font-bold text-main mb-2">{stat.metric}</div>
              <p className="text-xs font-semibold text-muted mb-3 leading-snug">{stat.label}</p>
              <div className="text-[10px] text-subtle border-t border-border-subtle pt-3">{stat.source}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
