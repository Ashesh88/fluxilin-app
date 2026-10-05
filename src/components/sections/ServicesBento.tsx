'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Sparkles, Video, Globe, BarChart3, Crown, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '@/data/services';

const icons: Record<string, React.ReactNode> = {
  Target: <Target className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Video: <Video className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
  Crown: <Crown className="w-5 h-5" />,
};

// Bento size mapping
const sizeMap: Record<string, string> = {
  'creator-matchmaking': 'md:col-span-8',
  'campaign-management': 'md:col-span-4',
  'ugc-studio': 'md:col-span-4',
  'regional-vernacular': 'md:col-span-8',
  'performance-analytics': 'md:col-span-6',
  'ambassador-programs': 'md:col-span-6',
};

export function ServicesBento() {
  return (
    <section id="services" className="py-28 bg-base relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#6366F1]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#6366F1] mb-4">
            <div className="w-8 h-px bg-[#6366F1]" /> Services
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-main leading-tight">
            Everything you need to
            <br />
            <span className="text-gradient-accent">dominate creator media.</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {SERVICES.map((s) => (
            <motion.div
              key={s.id}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className={`${sizeMap[s.id] || 'md:col-span-6'} p-7 bg-surface border border-border-subtle hover:border-[#6366F1]/35 rounded-2xl group transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#6366F1]/10 group-hover:bg-[#6366F1]/20 text-[#6366F1] flex items-center justify-center transition-colors">
                  {icons[s.iconName]}
                </div>
                <span className="text-xs font-bold text-[#A3E635] bg-[#A3E635]/10 px-3 py-1 rounded-full">
                  {s.metric}
                </span>
              </div>

              <p className="text-[10px] font-bold uppercase tracking-widest text-[#6366F1] mb-2">{s.tagline}</p>
              <h3 className="font-display font-bold text-xl text-main mb-3 leading-tight">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-6">{s.description}</p>

              <div className="space-y-2 pt-5 border-t border-border-subtle">
                {s.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-muted">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A3E635] shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
