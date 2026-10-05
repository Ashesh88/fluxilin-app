export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  logoText: string;
  quote: string;
  highlightMetric: string;
  campaignType: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Ananya Deshmukh',
    role: 'Chief Marketing Officer',
    company: 'NutriBowl',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    logoText: 'NutriBowl',
    quote: 'Fluxilin turned creator marketing from an unpredictable guess into our highest ROAS acquisition channel. Their vernacular matching algorithm unlocked Tier 2 India for us.',
    highlightMetric: '3.6x ROAS across 24 creators',
    campaignType: 'Vernacular D2C Expansion',
  },
  {
    id: 't-2',
    name: 'Kunal Singhal',
    role: 'Head of Growth',
    company: 'ZapKart',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    logoText: 'ZapKart',
    quote: 'When launching in 4 new cities, Fluxilin mobilized 15 local food & lifestyle creators in under 48 hours. Orders spiked 140% within the target pincodes.',
    highlightMetric: '140% Order Lift in 48h',
    campaignType: 'Hyperlocal Flash Campaign',
  },
  {
    id: 't-3',
    name: 'Pooja Kashyap',
    role: 'Brand Strategy',
    company: 'UrbanWeave',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    logoText: 'UrbanWeave',
    quote: 'The level of curation Fluxilin provides is excellent. They treat brand positioning with the exact aesthetic and editorial nuance our boutique label requires.',
    highlightMetric: '₹22 Lakh Apparel GMV',
    campaignType: 'Indie Fashion Lookbooks',
  },
  {
    id: 't-4',
    name: 'Devraj Kapoor',
    role: 'Co-Founder',
    company: 'FitAura',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    logoText: 'FITAURA',
    quote: 'The data attribution dashboard is what sets Fluxilin apart. We could pinpoint exactly which fitness reels were driving app subscriptions down to the city tier.',
    highlightMetric: '4.2K App Subscriptions',
    campaignType: 'Fitness Transformation Challenge',
  },
  {
    id: 't-5',
    name: 'Shreya Roy',
    role: 'Marketing Lead',
    company: 'BrewEstate',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    logoText: 'BrewEstate',
    quote: 'From coffee brewing ASMR to viral audio trends, Fluxilin moves at the speed of internet culture. They helped us tap directly into the Gen-Z market.',
    highlightMetric: '1.2M Organic Views in 7 Days',
    campaignType: 'Viral Moment Marketing',
  },
  {
    id: 't-6',
    name: 'Arjun Namboodiri',
    role: 'Director of Marketing',
    company: 'Zevia Wealth',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    logoText: 'ZEVIA',
    quote: 'The fin-fluencer network they have built is unmatched. No scripted promotional fluff — just deep financial teardowns that converted high-intent users on day one.',
    highlightMetric: '88% Positive Sentiment Score',
    campaignType: 'Fintech Trust Campaign',
  },
];
