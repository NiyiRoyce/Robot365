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
    name: "Marcus Chen",
    title: "Co-Founder & CEO",
    bio: "Former Director of Autonomous Systems at Boston Dynamics. 15 years leading robotics R&D across defense, logistics, and manufacturing. Built and exited two robotics startups with combined $400M in returns.",
    credentials: ["MIT — Robotics Engineering", "Ex-Boston Dynamics", "Forbes 30 Under 30"],
    linkedIn: "#",
    twitter: "#",
    imageUrl: "/founders/marcus-chen.jpg",
  },
  {
    id: "2",
    name: "Serena Okafor",
    title: "Co-Founder & CIO",
    bio: "Previously Managing Director at Andreessen Horowitz, where she led a $2.1B deep tech portfolio. Pioneer in AI infrastructure investing with 12 successful exits across autonomous systems and machine learning platforms.",
    credentials: ["Harvard — Economics & CS", "Ex-a16z", "Bloomberg 50 2023"],
    linkedIn: "#",
    twitter: "#",
    imageUrl: "/founders/serena-okafor.jpg",
  },
  {
    id: "3",
    name: "Dr. Yuki Tanaka",
    title: "Co-Founder & CTO",
    bio: "PhD in Artificial Intelligence from Stanford. Former Principal Researcher at DeepMind. Holds 23 patents in autonomous decision-making systems. Published 40+ peer-reviewed papers on multi-agent robotics.",
    credentials: ["Stanford — PhD AI", "Ex-DeepMind", "23 Patents"],
    linkedIn: "#",
    twitter: "#",
    imageUrl: "/founders/yuki-tanaka.jpg",
  },
  {
    id: "4",
    name: "Rafael Dominguez",
    title: "Co-Founder & COO",
    bio: "Built operational infrastructure for SpaceX's manufacturing division scaling from 200 to 8,000 employees. Expert in deploying autonomous systems at industrial scale across aerospace, automotive, and defense sectors.",
    credentials: ["Caltech — Aerospace Engineering", "Ex-SpaceX", "World Economic Forum Young Leader"],
    linkedIn: "#",
    twitter: "#",
    imageUrl: "/founders/rafael-dominguez.jpg",
  },
];

export const CONTACT_INFO = {
  phone: "+1 (818) 265-8266",
  email: "invest@robot365.com",
  address: "1200 Innovation Drive\nLos Angeles, CA 90017",
};