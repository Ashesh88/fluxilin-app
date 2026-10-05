export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  colSpan: string; // Tailwind grid span
  features: string[];
  metric: string;
  iconName: string;
  gradient: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'creator-matchmaking',
    title: 'AI-Powered Creator Matchmaking',
    tagline: 'Precision Audience Alignment',
    description: 'We analyze over 45+ data signals — engagement velocity, fake follower ratio, audience geography, comment sentiment, and category relevance — to pair your brand with creators that authentically move revenue.',
    colSpan: 'md:col-span-8',
    features: ['Fraud & Bot Screener (<2% Fake Followers)', 'Audience Overlap & Pincode Analysis', 'Historical Conversion Rate Benchmark'],
    metric: '99.4% Brand Safety Match',
    iconName: 'Target',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
  },
  {
    id: 'campaign-management',
    title: 'Full-Cycle Campaign Orchestration',
    tagline: 'Zero-Stress Execution',
    description: 'From customized creator contracts, brief curation, script feedback, product dispatch tracking to compliance clearances — we manage every touchpoint end-to-end.',
    colSpan: 'md:col-span-4',
    features: ['Pre-vetted Legal & ASCI Disclosures', 'Automated Logistics & Seeding', '24/7 Creator Liaison Team'],
    metric: '48h Launch Readiness',
    iconName: 'Sparkles',
    gradient: 'from-orange-500/20 via-rose-500/10 to-transparent',
  },
  {
    id: 'ugc-studio',
    title: 'High-Converting UGC & Content Lab',
    tagline: 'Native Assets That Convert Like Ads',
    description: 'Creator-produced UGC edited specifically for TikTok, Reels, YouTube Shorts, and Paid Meta Ads. High-hook retention rates, localized subtitles, and native trending soundscapes.',
    colSpan: 'md:col-span-4',
    features: ['Hook-Rate Optimization (>40% 3s Retention)', 'Multi-Aspect Ratio Exports (9:16, 1:1, 16:9)', 'Direct Ad Whitelisting & Paid Boosts'],
    metric: '3.4x Higher Paid CTR',
    iconName: 'Video',
    gradient: 'from-rose-500/20 via-amber-500/10 to-transparent',
  },
  {
    id: 'regional-vernacular',
    title: 'Regional & Vernacular Powerhouse',
    tagline: 'Unlock India’s Next 500 Million Consumers',
    description: 'Hyper-local storytelling across Tamil, Telugu, Hindi, Kannada, Malayalam, Marathi, and Bengali. Tap into the explosive purchasing power of Tier 2, 3, and 4 growth corridors.',
    colSpan: 'md:col-span-8',
    features: ['8+ Regional Dialect Capabilities', 'Local Cultural Nuances & Slang Adaptation', 'District-Level Micro-Influencer Squads'],
    metric: '4.6x Higher Buyer Trust',
    iconName: 'Globe',
    gradient: 'from-amber-500/20 via-yellow-600/10 to-transparent',
  },
  {
    id: 'performance-analytics',
    title: 'Real-Time ROI & Attribution Dashboard',
    tagline: 'Live Granular Tracking',
    description: 'Track link clicks, promo code usage, cart additions, ROAS, and demographic heatmaps in a single real-time executive dashboard. No vanity metrics — pure performance visibility.',
    colSpan: 'md:col-span-6',
    features: ['First-Party Pixel & Shopify Integration', 'Creator-Specific UTM Revenue Attribution', 'Downloadable Board-Ready Analytics PDF'],
    metric: '100% Granular Tracking',
    iconName: 'BarChart3',
    gradient: 'from-orange-500/20 via-amber-500/10 to-transparent',
  },
  {
    id: 'ambassador-programs',
    title: 'Brand Ambassador & Equity Alliances',
    tagline: 'Long-Term Compounding Affinity',
    description: 'Move beyond transactional one-off posts. We structure 6 to 12-month exclusive ambassadorships, product co-creations, and creator affiliate programs with built-in equity incentives.',
    colSpan: 'md:col-span-6',
    features: ['Category Exclusivity Clauses', 'Creator Capsule Collection Drops', 'Compounding Lifetime Customer Value'],
    metric: '3.8x LTV Multiplier',
    iconName: 'Crown',
    gradient: 'from-yellow-500/20 via-rose-500/10 to-transparent',
  },
];
