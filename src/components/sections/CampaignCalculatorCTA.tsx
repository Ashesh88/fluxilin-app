'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, ArrowUpRight, ShieldCheck, Clock, PhoneCall, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

const GOALS = ['D2C Revenue & Orders', 'App Installs & CAC', 'Brand Awareness', 'Regional / Tier 2/3'];

export function CampaignCalculatorCTA() {
  const [budget, setBudget] = useState(10);
  const [goal, setGoal] = useState('D2C Revenue & Orders');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const reach = (budget * 1.85).toFixed(1);
  const creators = Math.max(4, Math.round(budget * 2.8));
  const roas = (3.8 + Math.min(2, budget / 25)).toFixed(1);
  const assets = Math.round(creators * 2.2);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 }, colors: ['#6366F1', '#A3E635', '#818CF8'] });
  };

  return (
    <section id="contact" className="py-28 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#6366F1]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#A3E635] mb-4">
            <div className="w-8 h-px bg-[#A3E635]" /> Get Started
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold text-main leading-tight mb-4">
            Ready to scale?
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Tell us your goal. We'll send a custom creator deck and ROAS forecast within 4 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ROI Estimator */}
          <div className="lg:col-span-5 p-7 bg-card border border-border-subtle rounded-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-5 bg-[#6366F1] rounded flex items-center justify-center">
                <span className="text-main text-[10px] font-bold">~</span>
              </div>
              <span className="text-sm font-semibold text-main">Campaign ROI Estimator</span>
              <span className="ml-auto text-[10px] text-[#A3E635] font-semibold bg-[#A3E635]/10 px-2 py-0.5 rounded-full">Live</span>
            </div>

            {/* Budget Slider */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-xs text-muted font-semibold uppercase tracking-wide">Campaign Budget</span>
                <span className="font-display text-lg font-bold text-main">₹{budget}L</span>
              </div>
              <input
                type="range" min="2" max="50" step="1" value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-white/10 accent-[#6366F1]"
              />
              <div className="flex justify-between mt-1 text-[10px] text-subtle">
                <span>₹2L</span><span>₹25L</span><span>₹50L+</span>
              </div>
            </div>

            {/* Goal selector */}
            <div className="mb-6">
              <p className="text-xs text-muted font-semibold uppercase tracking-wide mb-3">Primary Goal</p>
              <div className="grid grid-cols-2 gap-2">
                {GOALS.map((g) => (
                  <button key={g} onClick={() => setGoal(g)}
                    className={`p-2.5 rounded-xl text-xs font-medium text-left transition-all ${goal === g ? 'bg-[#6366F1]/20 border border-[#6366F1]/50 text-main' : 'bg-base border border-border-subtle text-muted hover:text-main'}`}>
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Forecast outputs */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Est. Reach', value: `${reach}M+`, color: 'text-main' },
                { label: 'Creators', value: `${creators}`, color: 'text-[#818CF8]' },
                { label: 'Target ROAS', value: `${roas}x`, color: 'text-[#A3E635]' },
                { label: 'UGC Assets', value: `${assets}`, color: 'text-main' },
              ].map((item) => (
                <div key={item.label} className="p-4 bg-base border border-border-subtle rounded-xl text-center">
                  <div className={`font-display text-2xl font-bold ${item.color}`}>{item.value}</div>
                  <div className="text-[10px] text-subtle mt-1 uppercase tracking-wide">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 p-7 bg-card border border-border-subtle rounded-2xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center py-12 text-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[#6366F1]/20 border border-[#6366F1]/40 flex items-center justify-center text-[#818CF8]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-main">Request Received!</h3>
                <p className="text-muted text-sm max-w-sm">
                  Our strategy team will send your custom creator shortlist and ROAS forecast to{' '}
                  <strong className="text-main">{form.email}</strong> within 4 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="text-sm text-[#6366F1] hover:text-[#818CF8] font-semibold transition-colors">
                  Submit another brief
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <h3 className="font-display font-bold text-xl text-main mb-6">Send Campaign Brief</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-muted uppercase tracking-wide block mb-1.5">Full Name *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Vikram Singhania"
                      className="w-full px-4 py-3 rounded-xl bg-base border border-border-subtle hover:border-border focus:border-[#6366F1] text-main placeholder-[#4B4B63] text-sm focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted uppercase tracking-wide block mb-1.5">Work Email *</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@brand.com"
                      className="w-full px-4 py-3 rounded-xl bg-base border border-border-subtle hover:border-border focus:border-[#6366F1] text-main placeholder-[#4B4B63] text-sm focus:outline-none transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-muted uppercase tracking-wide block mb-1.5">Company / Brand *</label>
                  <input type="text" required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="e.g. Acme D2C Brand"
                    className="w-full px-4 py-3 rounded-xl bg-base border border-border-subtle hover:border-border focus:border-[#6366F1] text-main placeholder-[#4B4B63] text-sm focus:outline-none transition-colors" />
                </div>

                <div>
                  <label className="text-xs font-semibold text-muted uppercase tracking-wide block mb-1.5">Campaign Brief</label>
                  <textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your target audience, product, and primary KPI..."
                    className="w-full px-4 py-3 rounded-xl bg-base border border-border-subtle hover:border-border focus:border-[#6366F1] text-main placeholder-[#4B4B63] text-sm focus:outline-none transition-colors resize-none" />
                </div>

                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#6366F1] hover:bg-[#4F46E5] text-main font-semibold py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#6366F1]/30">
                  Send Brief & Get Creator Deck
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-5 text-xs text-subtle pt-2">
                  <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#A3E635]" /> NDA Protected</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#6366F1]" /> 4-hour response</span>
                </div>

                <div className="mt-4 pt-4 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <span className="text-muted">Prefer to speak directly?</span>
                  <div className="flex items-center gap-3">
                    <a
                      href="tel:+919214645846"
                      className="inline-flex items-center gap-1.5 text-main hover:text-[#A3E635] bg-base border border-border px-3 py-1.5 rounded-lg transition-colors font-semibold"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-[#A3E635]" />
                      +91 92146 45846
                    </a>
                    <a
                      href="https://wa.me/919214645846?text=Hi%20Fluxilin%2C%20I%20want%20to%20discuss%20an%20influencer%20campaign"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#A3E635] hover:text-main bg-[#A3E635]/10 border border-[#A3E635]/20 px-3 py-1.5 rounded-lg transition-colors font-semibold"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
