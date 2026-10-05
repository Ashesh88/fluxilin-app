'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const navLinks = [
  { name: 'What We Do', href: '#services' },
  { name: 'Results', href: '#case-studies' },
  { name: 'Creators', href: '#roster' },
  { name: 'Process', href: '#process' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-base/90 backdrop-blur-xl border-b border-border-subtle py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="Fluxilin"
            width={36}
            height={36}
            priority
            className="h-9 w-9 object-contain"
          />
          <span className="text-lg font-bold tracking-tight text-main font-display">
            Fluxilin
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="text-sm text-muted hover:text-main transition-colors"
            >
              {l.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfpZkYNRiL5cxcQpjdPCJAILpUOpnjw0LM_M-8rqPIH3yk2xw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-main hover:bg-card-hover bg-card px-5 py-2.5 rounded-lg border border-border-subtle transition-colors"
          >
            For Creators
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1.5 bg-[#6366F1] hover:bg-[#4F46E5] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            For Brands
            <ArrowUpRight className="w-4 h-4 text-white" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-muted hover:text-main"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface border-b border-border-subtle px-6 py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-main font-medium py-1"
              >
                {l.name}
              </a>
            ))}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfpZkYNRiL5cxcQpjdPCJAILpUOpnjw0LM_M-8rqPIH3yk2xw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-center gap-2 bg-card border border-border-subtle text-main text-sm font-medium px-5 py-2.5 rounded-lg"
            >
              For Creators
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#6366F1] text-white text-sm font-semibold px-5 py-3 rounded-lg"
            >
              For Brands <ArrowUpRight className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
