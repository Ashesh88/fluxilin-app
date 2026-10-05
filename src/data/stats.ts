export interface MarketStat {
  id: string;
  metric: string;
  label: string;
  subtext: string;
  source: string;
  trend: string;
  highlightColor: string;
}

export const HERO_STATS = [
  { value: 450, suffix: '+', label: 'Campaigns Orchestrated', sublabel: 'Across 18+ consumer verticals' },
  { value: 185, suffix: 'M+', label: 'Total Verified Reach', sublabel: 'High-intent Indian audiences' },
  { value: 94, suffix: '%', label: 'Brand Retention Rate', sublabel: 'Long-term creator ambassador ROI' },
  { value: 4.8, suffix: 'x', label: 'Average ROAS Delivered', sublabel: 'Performance-backed creator media' },
];

export const MARKET_2026_STATS: MarketStat[] = [
  {
    id: 'market-size',
    metric: '₹3,480 Cr',
    label: "India's Creator Economy by End of 2026",
    subtext: 'Exponential growth driven by regional short-form video and Tier 2/3 consumer commerce.',
    source: 'FICCI-EY & Influencer Intelligence 2026',
    trend: '+32.4% YoY',
    highlightColor: 'from-amber-400 to-amber-600',
  },
  {
    id: 'roi-superiority',
    metric: '84%',
    label: 'Marketers Reporting Higher ROI vs Traditional Ads',
    subtext: 'Creator-led trust narratives outperform static display and TV spots on bottom-funnel conversions.',
    source: 'Brand Growth Council India 2026',
    trend: '+18% vs 2024',
    highlightColor: 'from-orange-400 to-rose-500',
  },
  {
    id: 'regional-power',
    metric: '4.6x',
    label: 'Higher Conversion on Vernacular / Regional Creators',
    subtext: 'Tamil, Telugu, Bengali, Marathi and Hindi hyper-local creators build 78% deeper buyer affinity.',
    source: 'Next Billion Users Digital Study',
    trend: '70% Ad Spend Shift',
    highlightColor: 'from-amber-300 to-orange-500',
  },
  {
    id: 'gen-z-engagement',
    metric: '89%',
    label: 'Gen-Z Purchasing Triggered by Short-Form Creators',
    subtext: 'Reels and YouTube Shorts replace search engines for Gen-Z product discovery and social proof.',
    source: 'Creator Commerce Index 2026',
    trend: 'Dominant Discovery Channel',
    highlightColor: 'from-rose-400 to-amber-500',
  },
  {
    id: 'long-term-lift',
    metric: '3.8x',
    label: 'Higher LTV from Retained Brand Ambassadors',
    subtext: 'Ongoing 6-12 month creator equity partnerships surpass one-off sponsored posts in customer lifetime value.',
    source: 'Fluxilin Agency Benchmark Report',
    trend: 'Highest Compounding Value',
    highlightColor: 'from-yellow-400 to-amber-600',
  },
];

export const TRADITIONAL_VS_INFLUENCER = [
  {
    factor: 'Audience Trust & Social Proof',
    traditional: 'Low — 74% consumers actively skip TV ads and use AdBlockers on web',
    influencer: 'High — 82% view creator recommendations as word-of-mouth friend advice',
    advantage: 'Creator Advantage +420%',
  },
  {
    factor: 'Targeting & Demographics',
    traditional: 'Broad demographic estimates with wasted ad impressions',
    influencer: 'Hyper-segmented by micro-interests, language, city tier & intent',
    advantage: 'Zero Waste Precision',
  },
  {
    factor: 'Content Production Cost',
    traditional: 'Heavy studio overheads, celebrity retainers & delayed production timelines',
    influencer: 'Native, agile, multi-format assets ready in 48-72 hours',
    advantage: '65% Lower Asset Cost',
  },
  {
    factor: 'Performance & Attribution',
    traditional: 'Opaque estimates (GRPs, billboard impressions without direct click tracking)',
    influencer: 'Real-time UTM attribution, custom coupon codes, cart checkouts & ROAS',
    advantage: '100% Granular Tracking',
  },
  {
    factor: 'Organic Viral Compounding',
    traditional: 'Stops delivering value the second you turn off daily ad budgets',
    influencer: 'Evergreen social search rank, shares, saves, and algorithmic replay',
    advantage: 'Compounding Evergreen Lift',
  },
];
