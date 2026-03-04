# Robot365 — Invest in the Autonomous Future

A modern investment platform showcasing AI and robotics opportunities. Built with Next.js 14, React, TypeScript, and Tailwind CSS.

## 🏗️ Project Architecture

### Directory Structure

```
Robot365/
├── app/                           # Next.js App Router pages
│   ├── layout.tsx                 # Root layout with Navbar & Footer
│   ├── page.tsx                   # Home page
│   ├── globals.css                # Global styles
│   ├── founders/                  # Founders page
│   ├── investor/                  # Investor application page
│   └── services/                  # Services & investment process page
│
├── components/                    # Reusable React components
│   ├── layout/
│   │   ├── Navbar.tsx             # Navigation header
│   │   └── Footer.tsx             # Footer component
│   │
│   ├── home/                      # Homepage sections
│   │   ├── HeroSection.tsx
│   │   ├── StatsBar.tsx
│   │   ├── IndustryCards.tsx
│   │   ├── WhyInvestSection.tsx
│   │   ├── InvestmentTiers.tsx
│   │   ├── FoundersTeaser.tsx
│   │   ├── InvestmentReasons.tsx
│   │   └── MetricsGrid.tsx
│   │
│   ├── founders/                  # Founders page components
│   │   ├── FoundersHero.tsx
│   │   ├── FoundersGrid.tsx
│   │   ├── FounderCard.tsx
│   │   └── FoundersCTA.tsx
│   │
│   ├── investor/                  # Investor page components
│   │   ├── InvestorHero.tsx
│   │   ├── WhyPositionNow.tsx
│   │   ├── ContactInfo.tsx
│   │   ├── LocationMap.tsx
│   │   ├── InvestorQualificationForm.tsx
│   │   └── RiskDisclaimer.tsx
│   │
│   ├── services/                  # Services page components
│   │   ├── ServicesHero.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── InvestmentProcess.tsx
│   │   └── RequestDeckCTA.tsx
│   │
│   └── ui/                        # Shared UI components
│       ├── Button.tsx
│       ├── Logo.tsx
│       ├── IconBox.tsx
│       └── TierCard.tsx
│
├── lib/
│   └── constants.ts               # App-wide constants (NAV_ITEMS, founders, tiers, services)
│
├── types/
│   └── index.ts                   # TypeScript interfaces (Founder, InvestmentTier, Service, NavItem)
│
├── public/                        # Static assets
│   └── founders/                  # Founder images
│
├── config files
│   ├── next.config.js             # Next.js configuration with webpack alias
│   ├── tsconfig.json              # TypeScript config (paths: @/*)
│   ├── tailwind.config.ts         # Tailwind CSS configuration
│   ├── postcss.config.js          # PostCSS for Tailwind
│   └── package.json               # Dependencies & scripts
│
└── next-env.d.ts                  # TypeScript Next.js types
```

## 🔑 Key Features

- **Modular Architecture**: Components organized by page/feature for scalability
- **Type-Safe**: Full TypeScript support with shared interfaces
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Path Aliasing**: Import paths using `@/` for cleaner imports
- **Icon System**: Lucide React icons with custom `IconBox` component

## 📦 Dependencies

- **Framework**: Next.js 14.2.3 with React 18
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React
- **Language**: TypeScript 5

## 🚀 Getting Started

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Server runs on `http://localhost:3000`

### Build
```bash
npm run build
```

### Lint
```bash
npm run lint
```

## 📝 Component Organization

| Category | Purpose |
|----------|---------|
| **Layout** | Global app structure (Navbar, Footer) |
| **Home** | Landing page hero, stats, investment tiers |
| **Founders** | Team profiles and credentials |
| **Investor** | Investment application form & info |
| **Services** | Investment process & offerings |
| **UI** | Reusable widgets (buttons, cards, icons) |

## 🔗 Import Path Convention

All imports use the `@/` alias pointing to the project root:
```tsx
import Button from "@/components/ui/Button";
import { NAV_ITEMS } from "@/lib/constants";
import { Founder } from "@/types";
```

This improves clarity and makes refactoring easier.