'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, LinkedinIcon, TwitterIcon } from '@/components/ui/SocialIcons';

const LINKS: Record<string, { name: string; href: string }[]> = {
  Company: [
    { name: 'About Us', href: '#about' },
    { name: 'Case Studies', href: '#case-studies' },
  ],
  Services: [
    { name: 'Creator Matchmaking', href: '#services' },
    { name: 'Vernacular Campaigns', href: '#services' },
    { name: 'UGC Lab', href: '#services' },
  ],
};

// Yahan apne real social profile URLs daalo (https:// ke saath)
const SOCIALS = [
  { Icon: InstagramIcon, href: '#', label: 'Instagram' },
  { Icon: YoutubeIcon, href: '#', label: 'YouTube' },
  { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { Icon: TwitterIcon, href: '#', label: 'Twitter' },
];

const LEGAL = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setDone(true);
  };

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    if (href === '#') return; // placeholder link, kuch mat karo
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    window.history.replaceState(
      null,
      '',
      window.location.pathname + window.location.search
    );
  };

  return (
    <footer className="bg-base border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-border-subtle">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <Image
                src="/logo.png"
                alt="Fluxilin"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="font-display text-lg font-bold text-main">Fluxilin</span>
            </Link>

            <p className="text-sm text-subtle leading-relaxed mb-6 max-w-xs">
              India's performance-first influencer marketing agency. Real reach. Verified ROAS. Zero vanity metrics.
            </p>

            <div className="flex items-center gap-3 mb-8">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  onClick={(e) => handleAnchorClick(e, href)}
                  {...(href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="w-8 h-8 rounded-lg bg-card hover:bg-[#6366F1]/20 border border-border-subtle hover:border-[#6366F1]/30 flex items-center justify-center text-subtle hover:text-[#818CF8] transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            {done ? (
              <div className="flex items-center gap-2 text-sm text-[#A3E635]">
                <CheckCircle2 className="w-4 h-4" />
                Subscribed. Welcome aboard.
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex gap-2 max-w-sm">
                <input
                  type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="Get monthly creator intel"
                  className="flex-grow px-3.5 py-2.5 rounded-xl bg-surface border border-border-subtle text-sm text-main placeholder-[#4B4B63] focus:outline-none focus:border-[#6366F1] transition-colors"
                />
                <button type="submit"
                  className="px-4 py-2.5 bg-[#6366F1] hover:bg-[#4F46E5] text-white text-sm font-semibold rounded-xl transition-colors whitespace-nowrap">
                  Join
                </button>
              </form>
            )}
          </div>

          {/* Nav columns */}
          {Object.entries(LINKS).map(([col, items]) => (
            <div key={col} className="lg:col-span-2">
              <h5 className="text-xs font-bold uppercase tracking-widest text-muted mb-5">{col}</h5>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => handleAnchorClick(e, item.href)}
                      className="text-sm text-subtle hover:text-main transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA */}
          <div className="lg:col-span-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-muted mb-5">Start Now</h5>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#A3E635]">
                <span className="w-2 h-2 rounded-full bg-[#A3E635] animate-pulse" />
                Q4 slots open
              </div>
              <a
                href="#contact"
                onClick={(e) => handleAnchorClick(e, '#contact')}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#6366F1] hover:bg-[#4F46E5] text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
              >
                Launch Campaign
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <div className="pt-2 border-t border-border-subtle space-y-1.5">
                <span className="text-[10px] text-muted uppercase font-bold tracking-wider block">Direct Line</span>
                <a href="tel:+919214645840" className="text-xs font-semibold text-main hover:text-[#A3E635] flex items-center gap-2 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#A3E635]" />
                  +91 92146 45840
                </a>
                <a href="https://wa.me/919214645840?text=Hi%20Fluxilin%2C%20I%20want%20to%20discuss%20an%20influencer%20campaign" target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-[#A3E635] flex items-center gap-2 transition-colors">
                  <MessageCircle className="w-3.5 h-3.5 text-[#A3E635]" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="text-[11px] text-subtle pt-1">
                headquarter : Noida
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-subtle">
          <div>© {new Date().getFullYear()} Fluxilin Media Pvt. Ltd. All rights reserved.</div>
          <div className="flex items-center gap-5">
            {LEGAL.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-main transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
