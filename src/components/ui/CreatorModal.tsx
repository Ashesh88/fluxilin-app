'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  X, TrendingUp, Users, Eye, MapPin, Star, Send, Sparkles, Award, Globe2, CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Influencer } from '@/data/influencers';

interface Props {
  creator: Influencer | null;
  onClose: () => void;
}

export function CreatorModal({ creator, onClose }: Props) {
  const [tab, setTab] = useState<'insights' | 'demographics' | 'book'>('insights');
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ brand: '', email: '', budget: '₹5L-₹15L', deliverable: '' });

  if (!creator) return null;

  const onBook = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
    confetti({ particleCount: 60, spread: 55, origin: { y: 0.6 }, colors: ['#6366F1', '#A3E635', '#818CF8'] });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto" onClick={onClose}>
      <div
        className="relative w-full max-w-2xl bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button onClick={onClose} className="absolute top-4 right-4 z-20 w-8 h-8 rounded-lg bg-card hover:bg-card-hover text-muted hover:text-main flex items-center justify-center transition-colors">
          <X className="w-4 h-4" />
        </button>

        {/* Cover */}
        <div className="relative h-44 overflow-hidden bg-card">
          {creator.coverImage && (
            <Image src={creator.coverImage} alt="" fill className="object-cover opacity-40" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F13] to-transparent" />
          <div className="absolute bottom-4 left-5 flex items-end gap-4">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-[#6366F1]/60">
              <Image src={creator.avatar} alt={creator.name} fill className="object-cover" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-main">{creator.name}</h3>
              <p className="text-xs text-[#6366F1]">{creator.handle} · {creator.category}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <MapPin className="w-3 h-3 text-muted" />
                <span className="text-xs text-muted">{creator.location}</span>
                <Star className="w-3 h-3 text-[#A3E635] fill-[#A3E635] ml-1" />
                <span className="text-xs text-main font-semibold">{creator.rating}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border-subtle px-5">
          {(['insights', 'demographics', 'book'] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`py-3.5 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors capitalize ${
                tab === t ? 'border-[#6366F1] text-[#818CF8]' : 'border-transparent text-subtle hover:text-main'
              }`}>
              {t === 'book' ? 'Book Creator' : t}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="p-6 max-h-[55vh] overflow-y-auto">
          {tab === 'insights' && (
            <div className="space-y-5">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Users, label: 'Followers', val: creator.followers, color: 'text-main' },
                  { icon: TrendingUp, label: 'Engagement', val: creator.engagementRate, color: 'text-[#A3E635]' },
                  { icon: Eye, label: 'Avg Views', val: creator.avgViews, color: 'text-[#818CF8]' },
                ].map((s) => (
                  <div key={s.label} className="p-4 bg-card border border-border-subtle rounded-xl text-center">
                    <s.icon className="w-4 h-4 text-muted mx-auto mb-2" />
                    <div className={`font-display font-bold text-xl ${s.color}`}>{s.val}</div>
                    <div className="text-[10px] text-subtle mt-0.5 uppercase tracking-wide">{s.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted leading-relaxed bg-card p-4 rounded-xl border border-border-subtle">{creator.bio}</p>
              <div className="p-5 bg-card border border-[#6366F1]/20 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#818CF8]">Latest Campaign</span>
                  <span className="text-xs font-bold text-[#A3E635] bg-[#A3E635]/10 px-2.5 py-0.5 rounded-full">{creator.recentCampaign.roi}</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div><span className="text-subtle block mb-0.5">Brand</span><span className="text-main font-semibold">{creator.recentCampaign.brand}</span></div>
                  <div><span className="text-subtle block mb-0.5">Views</span><span className="text-main font-semibold">{creator.recentCampaign.views}</span></div>
                  <div className="col-span-2"><span className="text-subtle block mb-0.5">Package</span><span className="text-[#818CF8]">{creator.recentCampaign.deliverable}</span></div>
                </div>
              </div>
              <div>
                <p className="text-xs text-subtle uppercase tracking-wide mb-2">Past Collaborations</p>
                <div className="flex flex-wrap gap-2">
                  {creator.featuredBrands.map((b) => (
                    <span key={b} className="text-xs px-2.5 py-1 rounded-lg bg-card border border-border-subtle text-muted">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === 'demographics' && (
            <div className="space-y-4">
              {[
                { label: 'Age Group', val: creator.demographics.ageGroup },
                { label: 'Gender Split', val: creator.demographics.genderRatio },
                { label: 'Language Affinity', val: creator.demographics.vernacularPreference },
              ].map((d) => (
                <div key={d.label} className="flex items-center justify-between p-4 bg-card border border-border-subtle rounded-xl text-sm">
                  <span className="text-muted">{d.label}</span>
                  <span className="font-semibold text-main">{d.val}</span>
                </div>
              ))}
              <div>
                <p className="text-xs text-subtle uppercase tracking-wide mb-3">Top Cities</p>
                <div className="grid grid-cols-2 gap-2">
                  {creator.demographics.topCities.map((c, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 bg-card border border-border-subtle rounded-xl text-xs">
                      <div className="w-5 h-5 rounded-full bg-[#6366F1]/20 flex items-center justify-center text-[10px] font-bold text-[#818CF8]">
                        {i + 1}
                      </div>
                      <span className="text-main font-medium">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === 'book' && (
            done ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#6366F1]/20 border border-[#6366F1]/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 text-[#818CF8]" />
                </div>
                <h4 className="font-display font-bold text-xl text-main">Booking Request Sent</h4>
                <p className="text-sm text-muted">Our team will send the rate card and availability for <strong className="text-main">{creator.name}</strong> within 2 hours.</p>
                <button onClick={() => setDone(false)} className="text-sm text-[#6366F1] hover:text-[#818CF8] font-semibold">Book another</button>
              </div>
            ) : (
              <form onSubmit={onBook} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-muted uppercase tracking-wide block mb-1.5">Brand Name *</label>
                    <input type="text" required value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })}
                      placeholder="Your brand"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-base border border-border-subtle focus:border-[#6366F1] text-main placeholder-[#4B4B63] text-sm focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted uppercase tracking-wide block mb-1.5">Work Email *</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@brand.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-base border border-border-subtle focus:border-[#6366F1] text-main placeholder-[#4B4B63] text-sm focus:outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted uppercase tracking-wide block mb-1.5">Budget Range</label>
                  <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-base border border-border-subtle focus:border-[#6366F1] text-main text-sm focus:outline-none transition-colors">
                    <option>₹2L-₹5L (Pilot)</option>
                    <option>₹5L-₹15L (Mid-Scale)</option>
                    <option>₹15L-₹35L (Full Launch)</option>
                    <option>₹35L+ (Retainer)</option>
                  </select>
                </div>
                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#6366F1] hover:bg-[#4F46E5] text-main font-semibold py-3 rounded-xl transition-colors">
                  Request Rate Card <Send className="w-4 h-4" />
                </button>
              </form>
            )
          )}
        </div>
      </div>
    </div>
  );
}
