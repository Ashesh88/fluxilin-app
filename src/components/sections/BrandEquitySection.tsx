'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const STATS = [
  { value: '40%', label: 'Lower CAC' },
  { value: '3.4x', label: 'Higher CTR' },
  { value: '68+', label: 'Brands Served' },
];

export function BrandEquitySection() {
  return (
    <section className="py-28 bg-base relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#6366F1]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">

        {/* Big headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-main leading-[1.1] mb-8"
        >
          Architecting Long-Term<br />
          Brand Equity Through{' '}
          <span className="text-gradient-accent">Creator Ecosystems.</span>
        </motion.h2>

        {/* Arrow + subtitle row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-start justify-center gap-5 mb-12"
        >
          {/* Curved arrow SVG */}
          <svg
            className="w-10 h-10 text-muted flex-shrink-0 mt-1"
            viewBox="0 0 40 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M30 44 C30 44 10 44 10 24 C10 10 22 6 30 4" />
            <path d="M26 1 L30 4 L27 8" />
          </svg>
          <p className="text-lg text-muted max-w-md leading-relaxed text-left">
            Move beyond one-off campaigns. Build an always-on creator engine
            that drives narrative consistency and compounding market share.
          </p>
        </motion.div>

        {/* CTA button — dashed border style */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-4 text-base font-semibold text-main border-2 border-dashed border-[#6366F1] hover:bg-[#6366F1]/10 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Consult with a Growth Strategist
            <ArrowUpRight className="w-4 h-4 text-[#6366F1]" />
          </a>
        </motion.div>

        {/* 3 circular stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-10"
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center justify-center w-44 h-44 rounded-full border-2 border-dashed border-[#6366F1]/40 hover:border-[#6366F1]/70 transition-colors group"
            >
              {/* Subtle fill on hover */}
              <div className="absolute inset-0 rounded-full bg-[#6366F1]/0 group-hover:bg-[#6366F1]/5 transition-colors" />
              <span className="font-display text-4xl font-bold text-main counter-number">
                {stat.value}
              </span>
              <span className="text-sm text-muted mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
