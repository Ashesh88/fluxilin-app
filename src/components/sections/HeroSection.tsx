'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { StatCounter } from '@/components/ui/StatCounter';
import { CanvasContainer } from '@/components/3d/CanvasContainer';
import { HeroScene } from '@/components/3d/HeroScene';

const STATS = [
  { value: 68, suffix: '+', label: 'Campaigns Live' },
  { value: 12, suffix: 'M+', label: 'Verified Reach' },
  { value: 3.4, suffix: 'x', label: 'Avg ROAS', decimals: 1 },
  { value: 85, suffix: '%', label: 'Brand Retention' },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-base">
      {/* Grid lines background */}
      <div className="absolute inset-0 bg-grid-lines opacity-100 pointer-events-none" />

      {/* Radial glow top-center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#6366F1]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-[#A3E635]/5 blur-[100px] rounded-full pointer-events-none" />

      {/* 3D Canvas — right side */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 z-10 pointer-events-auto cursor-grab active:cursor-grabbing">
        <CanvasContainer cameraPosition={[0, 0, 7]} fov={45} className="w-full h-full">
          <HeroScene />
        </CanvasContainer>

      </div>

      {/* Content */}
      <div className="relative z-20 pointer-events-none flex flex-col justify-center flex-grow pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl pointer-events-auto">
          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#818CF8] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635] animate-pulse" />
            India's #1 Influencer Marketing Agency
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-main leading-[1.05] mb-6"
          >
            Creators That{' '}
            <span className="text-gradient-primary">Drive Revenue.</span>
            <br />
            Not Just Views.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted max-w-lg leading-relaxed mb-10"
          >
            We pair high-growth Indian brands with verified creators across
            8 regional languages. Every campaign tracked to the rupee.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#6366F1] hover:bg-[#4F46E5] text-main font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#6366F1]/30 hover:-translate-y-0.5"
            >
              Launch Your Campaign
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center gap-2 bg-card hover:bg-card-hover border border-border hover:border-white/20 text-main font-semibold px-7 py-3.5 rounded-xl transition-all duration-200"
            >
              View Case Studies
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border-subtle pointer-events-auto"
          >
            {STATS.map((s, i) => (
              <div key={i}>
                <div className="font-display text-3xl font-bold text-main counter-number">
                  <StatCounter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </div>
                <div className="text-sm text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    
    </section>
  );
}
