// PATH: lib/constants.ts

import { Founder, InvestmentTier, NavItem, Service } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Founders", href: "/founders" },
  { label: "Become an Investor", href: "/investor" },
];

export const STATS = [
  { value: "$847B", label: "Global Robotics Market" },
  { value: "286%", label: "Portfolio Growth Rate" },
  { value: "24/7", label: "Autonomous Operations" },
];

export const INDUSTRIES = [
  {
    icon: "building",
    title: "Infrastructure",
    description:
      "Autonomous construction and smart city systems redefining urban development.",
  },
  {
    icon: "cpu",
    title: "Manufacturing",
    description:
      "AI-powered production lines operating with unprecedented precision and efficiency.",
  },
  {
    icon: "zap",
    title: "Logistics",
    description:
      "Robotic warehouses and autonomous delivery transforming global supply chains.",
  },
  {
    icon: "bot",
    title: "Healthcare",
    description:
      "Surgical robots and AI diagnostics revolutionizing medical care worldwide.",
  },
];

export const WHY_INVEST_METRICS = [
  { icon: "trending-up", label: "Annual AI Growth Rate", value: "37%" },
  { icon: "globe", label: "AI Economic Impact 2030", value: "$15.7T" },
  { icon: "users", label: "New AI Jobs Created", value: "97M" },
  { icon: "bar-chart", label: "ROI Multiplier Potential", value: "12x" },
];

export const INVESTMENT_REASONS = [
  {
    title: "Early Adoption",
    description:
      "The AI revolution mirrors the internet boom of the 1990s. Early adopters captured generational wealth. The window is open — but closing.",
  },
  {
    title: "Market Expansion",
    description:
      "Global robotics market projected to reach $847B by 2030. Infrastructure, logistics, and healthcare are being rebuilt from the ground up.",
  },
  {
    title: "Scarcity Positioning",
    description:
      "Limited allocation available. As institutional capital floods in, individual access windows shrink. Act before the gates close.",
  },
];

export const INVESTMENT_TIERS: InvestmentTier[] = [
  {
    id: "starter",
    name: "Starter Access",
    minimumInvestment: "$25,000",
    projectedROI: "18-24%",
    duration: "24 months",
    benefits: [
      "Portfolio diversification",
      "Quarterly performance reports",
      "Investor community access",
      "Annual summit invitation",
    ],
  },
  {
    id: "growth",
    name: "Growth Portfolio",
    minimumInvestment: "$100,000",
    projectedROI: "24-32%",
    duration: "18 months",
    benefits: [
      "All Starter benefits",
      "Priority deal access",
      "Monthly strategy calls",
      "Dedicated relationship manager",
    ],
    recommended: true,
  },
  {
    id: "institutional",
    name: "Institutional Elite",
    minimumInvestment: "$500,000",
    projectedROI: "32-42%",
    duration: "12 months",
    benefits: [
      "All Growth benefits",
      "Direct founder access",
      "Custom portfolio design",
      "Board observer rights",
    ],
  },
  {
    id: "strategic",
    name: "Strategic Partner",
    minimumInvestment: "$2,000,000",
    projectedROI: "Custom",
    duration: "Flexible",
    benefits: [
      "Full institutional access",
      "White-glove concierge",
      "Co-development rights",
      "Equity partnership options",
    ],
  },
];

export const SERVICES: Service[] = [
  {
    id: "robotics-funding",
    icon: "settings",
    title: "AI Robotics Development Funding",
    description:
      "Direct investment in breakthrough robotics technology from prototype to production. We fund the machines that will automate the future.",
    features: [
      "Seed to Series B funding rounds",
      "Technical due diligence and validation",
      "Manufacturing scale-up support",
      "Strategic partnership facilitation",
      "Regulatory navigation assistance",
    ],
  },
  {
    id: "infrastructure",
    icon: "network",
    title: "Autonomous Infrastructure Projects",
    description:
      "Large-scale deployment capital for autonomous systems transforming logistics, transportation, and industrial operations.",
    features: [
      "Smart warehouse automation",
      "Autonomous vehicle fleets",
      "Robotic fulfillment centers",
      "AI-powered supply chain optimization",
      "Industrial IoT integration",
    ],
  },
  {
    id: "raas",
    icon: "rocket",
    title: "Robotics-as-a-Service Ventures",
    description:
      "Recurring revenue models delivering autonomous solutions without capital expenditure. The subscription economy meets robotics.",
    features: [
      "RaaS platform development",
      "Operational leasing structures",
      "Maintenance and upgrade services",
      "Performance-based pricing models",
      "Enterprise customer acquisition",
    ],
  },
  {
    id: "equity",
    icon: "shield",
    title: "Private AI Equity Access",
    description:
      "Exclusive access to pre-IPO opportunities in leading AI and robotics companies. Reserved allocations for qualified investors.",
    features: [
      "Pre-IPO equity placements",
      "Secondary market transactions",
      "SPAC merger opportunities",
      "Direct listing participation",
      "Carried interest structures",
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery",
    description: "Proprietary deal flow from top-tier founders and research labs",
  },
  {
    step: "02",
    title: "Validation",
    description: "Technical assessment by PhD-level robotics engineers",
  },
  {
    step: "03",
    title: "Structuring",
    description: "Custom investment vehicles optimized for tax and liquidity",
  },
  {
    step: "04",
    title: "Deployment",
    description: "Active value creation and strategic exit planning",
  },
];

export const FOUNDERS: Founder[] = [
  {
    id: "1",
    name: "Elon Musk",
    title: "Founding Partner",
    bio: "Entrepreneur and technology pioneer known for leading Tesla and SpaceX, driving global innovation in electric vehicles, aerospace, and AI.",
    credentials: [
      "CEO — Tesla",
      "Founder — SpaceX",
      "Co-Founder — Neuralink",
      "Co-Founder — OpenAI",
    ],
    linkedIn: "https://www.linkedin.com/company/spacex",
    twitter: "https://twitter.com/elonmusk",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
  },
  {
    id: "2",
    name: "Peter Thiel",
    title: "Founding Partner",
    bio: "Billionaire entrepreneur and venture capitalist. Co-founder of PayPal and Palantir Technologies and founder of Founders Fund.",
    credentials: [
      "Co-Founder — PayPal",
      "Co-Founder — Palantir",
      "First Outside Investor — Facebook",
      "Founder — Founders Fund",
    ],
    linkedIn: "https://www.linkedin.com/in/peterthiel",
    twitter: "https://x.com/peterthiel",
    imageUrl: "https://ui-avatars.com/api/?name=Peter+Thiel&size=400&background=0a0a0a&color=ffffff&bold=true&font-size=0.33",
  },
  {
    id: "3",
    name: "Dr. Yuki Tanaka",
    title: "Co-Founder & CTO",
    bio: "PhD in Artificial Intelligence from Stanford and former DeepMind researcher specializing in autonomous systems.",
    credentials: ["Stanford — PhD AI", "Ex-DeepMind", "23 Patents"],
    linkedIn: "#",
    twitter: "#",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: "4",
    name: "Rafael Dominguez",
    title: "Co-Founder & COO",
    bio: "Former SpaceX manufacturing operations leader scaling autonomous production systems for aerospace and defense.",
    credentials: [
      "Caltech — Aerospace Engineering",
      "Ex-SpaceX",
      "WEF Young Global Leader",
    ],
    linkedIn: "#",
    twitter: "#",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
];

export const CONTACT_INFO = {
  phone: "+1 (818) 265-8266",
  email: "invest@robot365.com",
  address: "1200 Innovation Drive\nLos Angeles, CA 90017",
};