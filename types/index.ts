// PATH: types/index.ts

export interface Founder {
  id: string;
  name: string;
  title: string;
  bio: string;
  credentials: string[];
  linkedIn?: string;
  twitter?: string;
  imageUrl: string;
}

export interface InvestmentTier {
  id: string;
  name: string;
  minimumInvestment: string;
  projectedROI: string;
  duration: string;
  benefits: string[];
  recommended?: boolean;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface NavItem {
  label: string;
  href: string;
}