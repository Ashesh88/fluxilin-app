export interface CaseStudy {
  id: string;
  client: string;
  clientCategory: string;
  title: string;
  tagline: string;
  heroImage: string;
  overview: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
    before: string;
    growth: string;
  }[];
  creatorsCount: number;
  platforms: string[];
  deliverables: string[];
  quote: {
    text: string;
    author: string;
    title: string;
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'lumiere-botanics',
    client: 'Lumiere Botanics',
    clientCategory: 'D2C Skincare',
    title: 'Vernacular Prestige: Transforming D2C Skincare in Tier 2 Metros',
    tagline: '2.4M Reach · 3.1x Direct ROAS · 12K New Customer Acquisitions',
    heroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80',
    overview: 'Lumiere Botanics wanted to break the perception that prestige skincare is solely for Tier 1 metros. Fluxilin orchestrated a 15-creator regional squad producing authentic ingredient breakdowns in Hindi, Marathi, and Telugu.',
    challenge: 'High customer acquisition cost (CAC) on Meta ads and consumer hesitation towards premium ₹1,200+ serums in emerging markets.',
    solution: 'Paired verified micro-influencer dermatologists with lifestyle storytellers for a "7-Day Barrier Repair" unboxing campaign with localized regional voiceovers.',
    metrics: [
      { label: 'Total Verified Reach', value: '2.4M', before: '380K', growth: '+531%' },
      { label: 'Campaign ROAS', value: '3.1x', before: '1.2x', growth: '+158%' },
      { label: 'Tier 2 Orders', value: '54%', before: '21%', growth: '+157%' },
      { label: 'UGC Video Views', value: '3.8M', before: '410K', growth: '+826%' },
    ],
    creatorsCount: 15,
    platforms: ['Instagram Reels', 'YouTube Shorts'],
    deliverables: ['45 Short-Form Reels', '5 Derm Ingredient Breakdowns'],
    quote: {
      text: 'Fluxilin completely rewritten our regional playbook. The authenticity and scientific rigor of creator matchmaking made our luxe tier explode in non-metro regions.',
      author: 'Radhika Malhotra',
      title: 'Co-Founder, Lumiere Botanics',
    },
  },
  {
    id: 'sonicgear-audio',
    client: 'SonicGear India',
    clientCategory: 'Consumer Tech & Audio',
    title: 'The Bass Drop: Dominating Gen-Z Audio Discovery in 72 Hours',
    tagline: '3.5M Impressions · ₹45 Lakh GMV · Trending Audio on Social Commerce',
    heroImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1400&q=80',
    overview: 'Launching SonicGear’s flagship ANC headphones targeting audiophiles and college gamers against established international heavyweights.',
    challenge: 'Standing out in a saturated wireless audio space with a limited performance marketing budget.',
    solution: 'Mobilized a hyper-focused squad of 25 tech reviewers, beatboxers, and gamers creating sync-sound bass reactions and ANC isolation challenges.',
    metrics: [
      { label: 'Total Social Impressions', value: '3.5M', before: '850K', growth: '+311%' },
      { label: '72-Hour Product GMV', value: '₹45L', before: '₹12L target', growth: '+275%' },
      { label: 'Average Engagement Rate', value: '7.8%', before: '2.9% Ind. Avg', growth: '+168%' },
      { label: 'Save-to-Watch Rate', value: '18.4%', before: '4.8%', growth: '+283%' },
    ],
    creatorsCount: 25,
    platforms: ['Instagram Reels', 'YouTube Tech Channels'],
    deliverables: ['60 Micro-Creator Drops', '6 Deep-Dive Benchmark Tests'],
    quote: {
      text: 'Fluxilin does not just find creators — they engineer cultural moments. Our flagship drop sold out twice over in 3 days.',
      author: 'Amanpreet Singh',
      title: 'Head of Growth, SonicGear',
    },
  },
  {
    id: 'investpe-wealth',
    client: 'InvestPe',
    clientCategory: 'Fintech & Wealth',
    title: 'Trust at Scale: Democratizing Alternative Assets for Millennials',
    tagline: '42% Reduction in CAC · 150K Qualified App Installs · 78% Retention',
    heroImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1400&q=80',
    overview: 'InvestPe introduced peer-to-peer investments yielding 9%+ returns, requiring deep consumer trust and zero regulatory ambiguity.',
    challenge: 'Fintech mistrust and complex financial concepts that regular display ads failed to explain convincingly.',
    solution: 'Curated 8 SEBI-compliant financial analysts and angel investors to conduct transparent case studies of portfolio allocation.',
    metrics: [
      { label: 'CAC Reduction', value: '-42%', before: '₹950 CAC', growth: '42% Saved' },
      { label: 'High-Intent Installs', value: '150K', before: '30K', growth: '+400%' },
      { label: 'Average Deposit Size', value: '₹45K', before: '₹12K', growth: '+275%' },
      { label: 'Compliance Pass Rate', value: '100%', before: '92%', growth: 'Zero Strikes' },
    ],
    creatorsCount: 8,
    platforms: ['YouTube Longform', 'LinkedIn', 'Instagram Carousels'],
    deliverables: ['8 White-Glove Deep Dives', '15 Infographic Carousels'],
    quote: {
      text: 'In fintech, trust is everything. Fluxilin vetted every single creator for compliance and financial acumen. The conversion quality was unmatched.',
      author: 'Siddharth Sen',
      title: 'CMO, InvestPe',
    },
  },
];
