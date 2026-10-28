'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2, ArrowUpRight, Zap, Globe, ShieldCheck,
  Smartphone, BarChart2, Headphones, Star, ChevronDown, ChevronUp
} from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';

/* ─── PRICING PLANS ──────────────────────────────────────────── */
const PLANS = [
  {
    name: 'Starter',
    tag: 'Perfect to launch fast',
    price: '6,999',
    color: '#6366F1',
    popular: false,
    features: [
      'Up to 5 pages',
      'Mobile responsive design',
      'Contact form integration',
      'Basic SEO setup',
      'WhatsApp chat button',
      '1 revision round',
      'Delivered in 5 days',
    ],
  },
  {
    name: 'Growth',
    tag: 'Most popular choice',
    price: '14,999',
    color: '#A3E635',
    popular: true,
    features: [
      'Up to 12 pages',
      'Custom UI/UX design',
      'Blog / CMS integration',
      'Advanced SEO + sitemap',
      'Google Analytics setup',
      'Social media links',
      '3 revision rounds',
      'Delivered in 10 days',
      'Free domain (.in) — 1 year',
    ],
  },
  {
    name: 'Pro',
    tag: 'For serious businesses',
    price: '29,999',
    color: '#F59E0B',
    popular: false,
    features: [
      'Unlimited pages',
      'Premium custom design',
      'E-commerce / store ready',
      'Payment gateway setup',
      'Speed & Core Web Vitals optimised',
      'Admin dashboard',
      'Unlimited revisions',
      'Delivered in 21 days',
      'Free domain + 1yr hosting',
      '3 months free support',
    ],
  },
];

/* ─── FEATURES ────────────────────────────────────────────────── */
const FEATURES = [
  { icon: <Smartphone className="w-6 h-6" />, title: 'Mobile First', desc: 'Every site is tested on real devices. 60%+ of traffic is mobile — we never cut corners.' },
  { icon: <Zap className="w-6 h-6" />, title: 'Lightning Fast', desc: '99+ PageSpeed score. Fast sites rank higher on Google and convert better.' },
  { icon: <Globe className="w-6 h-6" />, title: 'SEO Ready', desc: 'Meta tags, sitemaps, schema markup — your site will be discovered on Google from day one.' },
  { icon: <ShieldCheck className="w-6 h-6" />, title: 'Secure & Reliable', desc: 'SSL certified, daily backups, 99.9% uptime guaranteed on every plan.' },
  { icon: <BarChart2 className="w-6 h-6" />, title: 'Analytics Built-in', desc: 'Track every visitor, click, and conversion from the moment you go live.' },
  { icon: <Headphones className="w-6 h-6" />, title: 'After-Launch Support', desc: "We don't disappear after delivery. WhatsApp support is included in every plan." },
];

/* ─── PROCESS ─────────────────────────────────────────────────── */
const PROCESS = [
  { step: '01', title: 'Discovery Call', desc: 'We understand your business, goals, and target audience in a free 30-min call.' },
  { step: '02', title: 'Design Mockup', desc: 'You get a full design preview before we write a single line of code.' },
  { step: '03', title: 'Development', desc: 'We build your site with modern technology — fast, clean, and scalable.' },
  { step: '04', title: 'Review & Launch', desc: 'You review, we apply feedback, then we go live. Simple and transparent.' },
];

/* ─── FAQS ────────────────────────────────────────────────────── */
const FAQS = [
  { q: 'How long does it take to build my website?', a: 'Starter plan: 5 days. Growth plan: 10 days. Pro plan: 21 days. Rush delivery is also available on request.' },
  { q: 'Do I need any technical knowledge?', a: 'None at all! Just share your content and preferences — we handle everything from design to deployment.' },
  { q: 'Can I request changes after delivery?', a: 'Yes! You get 30 days of free revisions after delivery. After that, an affordable maintenance package is available.' },
  { q: 'How does payment work?', a: '50% upfront, 50% on delivery. We accept UPI, bank transfer, and all major payment methods.' },
  { q: 'Do I need to buy hosting separately?', a: 'Growth and Pro plans include hosting. For Starter, we guide you through the most affordable hosting options.' },
  { q: 'Can you build an online store?', a: 'Absolutely! The Pro plan includes a full e-commerce store with payment gateway integration (Razorpay / PayU).' },
];

/* ─── REVIEWS ─────────────────────────────────────────────────── */
const REVIEWS = [
  { name: 'Ritesh Sharma', biz: 'RK Sweets, Jaipur', stars: 5, text: 'Website went live and within 3 weeks we started getting online orders. The process was incredibly smooth!' },
  { name: 'Priya Mehta', biz: 'Studio Priya, Delhi', stars: 5, text: 'The design turned out exactly how I imagined. Clients now check my website before calling — that says it all.' },
  { name: 'Farhan Siddiqui', biz: 'TechFix Solutions, Pune', stars: 5, text: 'Very professional team. Revisions were done without any pushback. Highly recommend Fluxilin!' },
];

/* ─── FAQ Item ────────────────────────────────────────────────── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-6 py-5">
        <span className="font-semibold text-main text-base">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-muted flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted flex-shrink-0" />}
      </div>
      {open && (
        <div className="px-6 pb-5 text-muted text-sm leading-relaxed border-t border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.06)] pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

/* ─── MAIN PAGE ───────────────────────────────────────────────── */
export default function WebsitesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-base text-main overflow-hidden">

        {/* ── HERO ── */}
        <section className="relative pt-36 pb-24 px-6 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#6366F1]/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-[#A3E635]/8 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#6366F1]/10 text-[#6366F1] text-xs font-semibold px-4 py-2 rounded-full mb-8 border border-[#6366F1]/20"
            >
              <Zap className="w-3.5 h-3.5" /> Website Design & Development
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
            >
              Your Brand Deserves a{' '}
              <span className="relative inline-block">
                <span className="text-[#6366F1]">Website</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M0 6 Q50 0 100 4 Q150 8 200 2" stroke="#A3E635" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </span>{' '}
              That Sells.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              We design and build high-converting websites for Indian businesses.
              Fast. Modern. Affordable. Starting at just{' '}
              <span className="text-main font-bold">₹6,999.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="https://wa.me/919214645846?text=Hi%20Fluxilin!%20I%20want%20a%20website%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold px-8 py-4 rounded-xl text-base transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#6366F1]/30"
              >
                Get a Free Quote <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#pricing"
                className="flex items-center gap-2 border border-[rgba(0,0,0,0.12)] dark:border-[rgba(255,255,255,0.12)] text-main font-medium px-8 py-4 rounded-xl text-base hover:bg-card transition-all"
              >
                See Pricing ↓
              </a>
            </motion.div>

            {/* trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted"
            >
              {['50+ Sites Delivered', '5-Day Turnaround', '100% Satisfaction', 'EMI Available'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A3E635]" /> {t}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-24 px-6 bg-surface">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-[#6366F1] text-sm font-semibold uppercase tracking-widest mb-3">Why Choose Us</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold">Built to Perform.</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-card hover:bg-card-hover border border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.06)] rounded-2xl p-6 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#6366F1]/10 text-[#6366F1] flex items-center justify-center mb-4 group-hover:bg-[#6366F1]/20 transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-main mb-2">{f.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="pricing" className="py-24 px-6 bg-base relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.05) 0%, transparent 70%)' }}
          />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-[#6366F1] text-sm font-semibold uppercase tracking-widest mb-3">Transparent Pricing</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">Simple. No Hidden Charges.</h2>
              <p className="text-muted max-w-xl mx-auto">What you see is what you pay. No surprise bills.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {PLANS.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative rounded-3xl border-2 flex flex-col overflow-hidden transition-transform hover:-translate-y-1 ${
                    plan.popular
                      ? 'border-[#A3E635] shadow-xl shadow-[#A3E635]/10'
                      : 'border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)]'
                  } bg-surface`}
                >
                  {plan.popular && (
                    <div className="bg-[#A3E635] text-black text-xs font-bold tracking-widest uppercase text-center py-2 px-4">
                      ⭐ Most Popular
                    </div>
                  )}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="mb-6">
                      <span
                        className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{ background: plan.color + '18', color: plan.color }}
                      >
                        {plan.tag}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-main mb-1">{plan.name}</h3>
                    <div className="flex items-end gap-1 mb-8">
                      <span className="text-muted text-lg">₹</span>
                      <span className="font-display text-5xl font-bold text-main">{plan.price}</span>
                    </div>
                    <ul className="space-y-3 flex-1 mb-8">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: plan.color }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/919214645846?text=Hi%20Fluxilin!%20I'm%20interested%20in%20the%20${plan.name}%20website%20plan.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center py-3.5 px-6 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
                      style={{
                        background: plan.popular ? plan.color : 'transparent',
                        color: plan.popular ? '#000' : plan.color,
                        border: `2px solid ${plan.color}`,
                      }}
                    >
                      Get Started →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-muted text-sm mt-8">
              Need something custom?{' '}
              <a href="https://wa.me/919214645846" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] font-medium hover:underline">
                Chat with us on WhatsApp
              </a>{' '}
              for a tailored quote.
            </p>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="py-24 px-6 bg-surface">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-[#6366F1] text-sm font-semibold uppercase tracking-widest mb-3">How It Works</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold">4 Steps to Your Dream Website</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCESS.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="bg-card rounded-2xl p-6 h-full border border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.06)]">
                    <span className="font-display text-5xl font-bold text-[#6366F1]/15 block mb-3">{p.step}</span>
                    <h3 className="font-display font-bold text-lg text-main mb-2">{p.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
                  </div>
                  {i < PROCESS.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#6366F1]/30" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-24 px-6 bg-base">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-[#6366F1] text-sm font-semibold uppercase tracking-widest mb-3">Client Reviews</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold">Our Clients Love Us. 🤍</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {REVIEWS.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-surface border border-[rgba(0,0,0,0.07)] dark:border-[rgba(255,255,255,0.07)] rounded-2xl p-6"
                >
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-5">"{r.text}"</p>
                  <div>
                    <p className="text-main font-semibold text-sm">{r.name}</p>
                    <p className="text-subtle text-xs">{r.biz}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 px-6 bg-surface">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-[#6366F1] text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold">Common Questions</h2>
            </motion.div>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <FAQItem q={faq.q} a={faq.a} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-28 px-6 bg-base relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.12) 0%, transparent 65%)' }}
          />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              Ready to Go Live? <br />
              <span className="text-[#6366F1]">Let's Build Today.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-muted text-lg mb-10"
            >
              Start with a free consultation — no commitment, no pressure.
              One WhatsApp message is all it takes.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              href="https://wa.me/919214645846?text=Hi%20Fluxilin!%20I%20want%20to%20discuss%20my%20website%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#6366F1]/30"
            >
              Chat With Us on WhatsApp <ArrowUpRight className="w-5 h-5" />
            </motion.a>
            <p className="text-subtle text-sm mt-5">🕐 We typically reply within 30 minutes</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
