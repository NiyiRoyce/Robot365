// PATH: components/home/InvestmentTiers.tsx

import { INVESTMENT_TIERS } from "@/lib/constants";
import TierCard from "@/components/ui/TierCard";

export default function InvestmentTiers() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Investment Tiers
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Choose your position in the AI revolution. Each tier offers strategic
            access to next-generation robotics ventures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {INVESTMENT_TIERS.map((tier) => (
            <TierCard key={tier.id} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
}