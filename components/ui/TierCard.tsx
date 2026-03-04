// PATH: components/ui/TierCard.tsx

import { InvestmentTier } from "@/types";
import { Check } from "lucide-react";
import Button from "./Button";

interface TierCardProps {
  tier: InvestmentTier;
}

export default function TierCard({ tier }: TierCardProps) {
  return (
    <div
      className={`relative flex flex-col p-8 rounded-sm border transition-shadow duration-200 ${
        tier.recommended
          ? "border-black shadow-lg"
          : "border-gray-200 hover:border-gray-400"
      }`}
    >
      {tier.recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-black text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-sm">
            Recommended
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
        <div className="w-8 h-0.5 bg-black mb-5" />
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
          Minimum Investment
        </p>
        <p className="text-4xl font-bold tracking-tight">{tier.minimumInvestment}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
            Projected ROI
          </p>
          <p className="text-lg font-bold">{tier.projectedROI}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
            Duration
          </p>
          <p className="text-lg font-bold">{tier.duration}</p>
        </div>
      </div>

      <div className="mb-8 flex-1">
        <p className="text-xs font-bold tracking-widest uppercase mb-3 text-gray-500">
          Benefits
        </p>
        <ul className="space-y-2.5">
          {tier.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2.5">
              <Check size={15} className="text-black mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button href="/investor" variant={tier.recommended ? "primary" : "outline"} fullWidth>
        Get Started
      </Button>
    </div>
  );
}