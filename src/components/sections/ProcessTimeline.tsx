'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    title: 'Brand Brief',
    desc: 'We unpack your CAC targets, audience tier (1/2/3), and primary KPI — GMV, installs, or authority building.',
    deliverables: ['Media mix blueprint', 'Competitor creator audit', 'Budget allocation model'],
  },
  {
    num: '02',
    title: 'Creator Shortlist',
    desc: 'Our 45-point screener eliminates fake engagement, bot audiences, and misaligned demographics.',
    deliverables: ['Fraud-screened creator deck', 'Audience overlap analysis', 'Rate negotiation'],
  },
  {
    num: '03',
    title: 'Creative Strategy',
    desc: 'We build hook frameworks that feel 100% native — not branded ad copy that audiences ignore.',
    deliverables: ['Custom scripts & storyboards', 'A/B hook variations', 'ASCI compliance check'],
  },
  {
    num: '04',
    title: 'Content Production',
    desc: 'Product seeding, shoot management, editorial feedback — handled entirely by our studio team.',
    deliverables: ['High-res master edits', 'Multi-format exports', 'Ad whitelisting approvals'],
  },
  {
    num: '05',
    title: 'Campaign Launch',
    desc: 'Synchronized publishing during peak hours to trigger algorithmic momentum across platforms.',
    deliverables: ['Live UTM dashboard', 'Promo code attribution', 'Real-time comment monitoring'],
  },
  {
    num: '06',
    title: 'ROI Report',
    desc: 'Board-ready ROAS analysis, top-performing asset breakdown, and the next-sprint playbook.',
    deliverables: ['Revenue attribution PDF', 'Asset rights for paid ads', 'Scaling recommendations'],
  },
];

export function ProcessTimeline() {
  return (
    <section id="process" className="py-28 bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#A3E635]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#A3E635] mb-4">
            <div className="w-8 h-px bg-[#A3E635]" /> Our Process
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-main leading-tight">
            From brief to ROAS.
            <br />
            <span className="text-muted">6 phases. Zero guesswork.</span>
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="p-6 bg-card border border-border-subtle hover:border-[#6366F1]/30 rounded-2xl group transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-display text-5xl font-bold text-main/5 group-hover:text-[#6366F1]/20 transition-colors leading-none">
                  {step.num}
                </span>
                <div className="w-2 h-2 rounded-full bg-[#6366F1] group-hover:bg-[#A3E635] transition-colors" />
              </div>

              <h3 className="font-display font-bold text-xl text-main mb-3 group-hover:text-[#818CF8] transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-5">{step.desc}</p>

              <div className="space-y-2 pt-4 border-t border-border-subtle">
                {step.deliverables.map((d, di) => (
                  <div key={di} className="flex items-center gap-2 text-xs text-muted">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A3E635] shrink-0" />
                    {d}
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
