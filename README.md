# 🚀 Fluxilin — India's Influencer Marketing Agency

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=for-the-badge&logo=tailwind-css" />
  <img src="https://img.shields.io/badge/Framer_Motion-purple?style=for-the-badge&logo=framer" />
  <img src="https://img.shields.io/badge/Three.js-3D-black?style=for-the-badge&logo=three.js" />
  <img src="https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript" />
</p>

> **Fluxilin** connects ambitious Indian brands with verified creators across 8 regional languages. Data-driven influencer campaigns. Real ROAS. Not vanity metrics.

---

## ✨ Features

- 🌗 **Light & Dark Mode** — Seamless theme toggle with `next-themes`
- 🧊 **Interactive 3D Hero** — Draggable 3D scene with React Three Fiber
- 📊 **Animated Stats** — Scroll-triggered counters and data visualizations
- 💬 **Live Chatbot** — Built-in chat widget with WhatsApp redirect
- 📱 **Fully Responsive** — Mobile-first design across all sections
- ⚡ **Smooth Animations** — Framer Motion scroll-driven reveal animations
- 🎯 **10 Page Sections** — Hero, Services, Case Studies, Testimonials & more

---

## 🗂️ Project Structure

```
fluxilin-app/
├── src/
│   ├── app/
│   │   ├── globals.css        # Theme variables (light/dark)
│   │   ├── layout.tsx         # Root layout with providers
│   │   └── page.tsx           # Page composition
│   ├── components/
│   │   ├── 3d/                # Three.js / React Three Fiber
│   │   │   ├── HeroScene.tsx
│   │   │   └── CanvasContainer.tsx
│   │   ├── sections/          # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── WhatIsInfluencerMarketing.tsx
│   │   │   ├── DataStorySection.tsx
│   │   │   ├── InfluencerRoster.tsx
│   │   │   ├── ProcessTimeline.tsx
│   │   │   ├── ServicesBento.tsx
│   │   │   ├── CaseStudies.tsx
│   │   │   ├── TestimonialMarquee.tsx
│   │   │   ├── BrandEquitySection.tsx
│   │   │   ├── CampaignCalculatorCTA.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/                # Reusable UI components
│   │       ├── ThemeToggle.tsx
│   │       ├── ChatbotWidget.tsx
│   │       ├── StatCounter.tsx
│   │       └── SocialIcons.tsx
│   └── data/                  # Mock data layer
│       ├── stats.ts
│       ├── services.ts
│       ├── caseStudies.ts
│       ├── testimonials.ts
│       └── influencers.ts
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** (App Router) | Framework |
| **Tailwind CSS v4** | Styling |
| **Framer Motion** | Animations |
| **React Three Fiber** | 3D Scene |
| **@react-three/drei** | 3D Helpers |
| **next-themes** | Dark/Light Mode |
| **Lucide React** | Icons |
| **TypeScript** | Type Safety |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/Ashesh88/fluxilin-app.git
cd fluxilin-app

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📞 Contact

**Fluxilin Agency**
- 📱 WhatsApp: [+91 92146 45846](https://wa.me/919214645846)
- 🌐 Website: [fluxilin.vercel.app](https://fluxilin.vercel.app)
- 📋 Creator Form: [Apply Here](https://docs.google.com/forms/d/e/1FAIpQLSfpZkYNRiL5cxcQpjdPCJAILpUOpnjw0LM_M-8rqPIH3yk2xw/viewform)

---

## 📄 License

© 2026 Fluxilin. All rights reserved.
