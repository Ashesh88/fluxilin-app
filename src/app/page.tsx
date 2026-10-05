import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhatIsInfluencerMarketing } from '@/components/sections/WhatIsInfluencerMarketing';
import { DataStorySection } from '@/components/sections/DataStorySection';
import { InfluencerRoster } from '@/components/sections/InfluencerRoster';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { ServicesBento } from '@/components/sections/ServicesBento';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { TestimonialMarquee } from '@/components/sections/TestimonialMarquee';
import { CampaignCalculatorCTA } from '@/components/sections/CampaignCalculatorCTA';
import { BrandEquitySection } from '@/components/sections/BrandEquitySection';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO with 3D centerpiece and live stats */}
      <HeroSection />

      {/* 2. WHAT IS INFLUENCER MARKETING (Educational Section & Comparison) */}
      <WhatIsInfluencerMarketing />

      {/* 3. WHY INFLUENCER MARKETING = BEST ROI IN 2026 (Data Story Section) */}
      <DataStorySection />

      {/* 4. INFLUENCER ROSTER (Filterable, 3D tilt cards, Modal) */}
      <InfluencerRoster />

      {/* 5. HOW WE WORK (6-Phase Process Timeline) */}
      <ProcessTimeline />

      {/* 6. SERVICES (Bento-Grid layout) */}
      <ServicesBento />

      {/* 7. CASE STUDIES (Full-bleed interactive spotlights with before/after metrics) */}
      <CaseStudies />

      {/* 8. TESTIMONIALS (Infinite dual marquee) */}
      <TestimonialMarquee />

      {/* 9. BRAND EQUITY STATEMENT */}
      <BrandEquitySection />

      {/* 10. CTA / CONTACT (Interactive Calculator & Proposal Inquiry) */}
      <CampaignCalculatorCTA />
    </div>
  );
}
