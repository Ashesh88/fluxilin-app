'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowUpRight, TrendingUp, Eye, Users, MapPin } from 'lucide-react';
import { INFLUENCERS, INFLUENCER_CATEGORIES, Influencer } from '@/data/influencers';
import { CreatorModal } from '@/components/ui/CreatorModal';

export function InfluencerRoster() {
  const [cat, setCat] = useState('All');
  const [active, setActive] = useState<Influencer | null>(null);

  const filtered = cat === 'All' ? INFLUENCERS : INFLUENCERS.filter((c) => c.category === cat);

  return (
    <section id="roster" className="py-28 bg-base relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6366F1]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#6366F1] mb-4">
              <div className="w-8 h-px bg-[#6366F1]" /> Creator Roster
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-main leading-tight">
              Top 1% creators.
              <br />
              <span className="text-muted">Zero bots. Real reach.</span>
            </h2>
          </div>
          <p className="text-muted max-w-sm text-sm">
            Every creator is fraud-screened across 45+ data points before entering our network.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {INFLUENCER_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                cat === c
                  ? 'bg-[#6366F1] text-main'
                  : 'bg-card text-muted hover:text-main border border-border-subtle hover:border-border'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((creator) => (
              <motion.div
                key={creator.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -4 }}
                onClick={() => setActive(creator)}
                className="group cursor-pointer bg-surface border border-border-subtle hover:border-[#6366F1]/40 rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={creator.avatar}
                    alt={creator.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F13] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="bg-black/70 backdrop-blur-sm text-main text-[10px] font-semibold px-2.5 py-1 rounded-full border border-border">
                      {creator.category}
                    </span>
                    {creator.badge && (
                      <span className="bg-[#6366F1]/80 backdrop-blur-sm text-main text-[10px] font-semibold px-2 py-1 rounded-full">
                        ⭐ {creator.badge.split(' ')[0]}
                      </span>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-display font-bold text-main text-base group-hover:text-[#818CF8] transition-colors">
                        {creator.name}
                      </h3>
                      <p className="text-subtle text-xs">{creator.handle}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted">
                      <Star className="w-3.5 h-3.5 text-[#A3E635] fill-[#A3E635]" />
                      {creator.rating}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="text-center p-2.5 rounded-xl bg-base border border-border-subtle">
                      <div className="font-display font-bold text-sm text-main">{creator.followers}</div>
                      <div className="text-[9px] text-subtle uppercase tracking-wide mt-0.5">Followers</div>
                    </div>
                    <div className="text-center p-2.5 rounded-xl bg-base border border-border-subtle">
                      <div className="font-display font-bold text-sm text-[#A3E635]">{creator.engagementRate}</div>
                      <div className="text-[9px] text-subtle uppercase tracking-wide mt-0.5">Engagement</div>
                    </div>
                    <div className="text-center p-2.5 rounded-xl bg-base border border-border-subtle">
                      <div className="font-display font-bold text-sm text-[#818CF8]">{creator.avgViews}</div>
                      <div className="text-[9px] text-subtle uppercase tracking-wide mt-0.5">Avg Views</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border-subtle flex items-center justify-between text-xs">
                    <span className="text-muted">Latest: <span className="text-[#A3E635] font-semibold">{creator.recentCampaign.roi}</span></span>
                    <span className="text-[#6366F1] group-hover:translate-x-0.5 transition-transform font-semibold inline-flex items-center gap-1">
                      View Profile <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <CreatorModal creator={active} onClose={() => setActive(null)} />
    </section>
  );
}
