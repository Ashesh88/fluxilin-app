'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from '@/data/caseStudies';

export function CaseStudies() {
  const [idx, setIdx] = useState(0);
  const study = CASE_STUDIES[idx];

  return (
    <section id="case-studies" className="py-28 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#6366F1]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#A3E635] mb-4">
              <div className="w-8 h-px bg-[#A3E635]" /> Case Studies
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-main leading-tight">
              Real campaigns.
              <br />
              <span className="text-muted">Verified results.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {CASE_STUDIES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === i ? 'w-8 bg-[#6366F1]' : 'w-2 bg-border'}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
            <div className="flex items-center gap-2 ml-2">
              <button onClick={() => setIdx((idx - 1 + CASE_STUDIES.length) % CASE_STUDIES.length)}
                className="w-9 h-9 rounded-lg border border-border hover:border-[#6366F1]/50 text-muted hover:text-main flex items-center justify-center transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={() => setIdx((idx + 1) % CASE_STUDIES.length)}
                className="w-9 h-9 rounded-lg border border-border hover:border-[#6366F1]/50 text-muted hover:text-main flex items-center justify-center transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Case Study Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl bg-card border border-border-subtle overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Image */}
              <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-[500px] overflow-hidden">
                <Image src={study.heroImage} alt={study.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#13131A] via-[#13131A]/30 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="text-xs font-semibold bg-black/70 backdrop-blur-sm border border-border text-main px-3 py-1.5 rounded-full">
                    {study.client} · {study.clientCategory}
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-black/80 backdrop-blur-md border border-border rounded-xl p-4 text-xs text-main">
                    <span className="text-[#818CF8] font-semibold block mb-1">Creator Squad</span>
                    <strong>{study.creatorsCount} creators</strong> across {study.platforms.slice(0, 2).join(', ')}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#6366F1] font-semibold uppercase tracking-widest mb-3">{study.tagline}</p>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-main mb-4 leading-tight">{study.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-8">{study.overview}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                    {study.metrics.map((m, i) => (
                      <div key={i} className="p-4 rounded-xl bg-base border border-border-subtle text-center">
                        <div className="text-[10px] text-subtle uppercase tracking-wide mb-1">{m.label}</div>
                        <div className="font-display text-xl font-bold text-main">{m.value}</div>
                        <div className="text-[10px] font-bold text-[#A3E635] mt-1">{m.growth}</div>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="p-5 rounded-xl bg-base border border-border-subtle">
                    <Quote className="w-4 h-4 text-[#6366F1] mb-2" />
                    <p className="text-sm text-muted italic leading-relaxed mb-3">"{study.quote.text}"</p>
                    <div className="text-xs">
                      <span className="font-semibold text-main">{study.quote.author}</span>
                      <span className="text-subtle ml-1">· {study.quote.title}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border-subtle">
                  <a href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#6366F1] hover:text-[#818CF8] transition-colors">
                    Replicate this campaign
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
