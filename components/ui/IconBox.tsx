// PATH: components/ui/IconBox.tsx

"use client";

import {
  Building2,
  Cpu,
  Zap,
  Bot,
  TrendingUp,
  Globe,
  Users,
  BarChart3,
  Settings,
  Network,
  Rocket,
  Shield,
  FileText,
  Phone,
  Mail,
  MapPin,
  Check,
  ArrowRight,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  building: Building2,
  cpu: Cpu,
  zap: Zap,
  bot: Bot,
  "trending-up": TrendingUp,
  globe: Globe,
  users: Users,
  "bar-chart": BarChart3,
  settings: Settings,
  network: Network,
  rocket: Rocket,
  shield: Shield,
  "file-text": FileText,
  phone: Phone,
  mail: Mail,
  "map-pin": MapPin,
  check: Check,
  "arrow-right": ArrowRight,
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
};

interface IconBoxProps {
  name: string;
  size?: number;
  className?: string;
  inverted?: boolean;
}

export default function IconBox({
  name,
  size = 20,
  className = "",
  inverted = false,
}: IconBoxProps) {
  const Icon = iconMap[name] || Bot;

  if (inverted) {
    return (
      <div className={`w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0 ${className}`}>
        <Icon size={size} className="text-white" />
      </div>
    );
  }

  return <Icon size={size} className={className} />;
}