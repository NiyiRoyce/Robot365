// PATH: app/page.tsx

import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import IndustryCards from "@/components/home/IndustryCards";
import WhyInvestSection from "@/components/home/WhyInvestSection";
import InvestmentTiers from "@/components/home/InvestmentTiers";
import FoundersTeaser from "@/components/home/FoundersTeaser";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <IndustryCards />
      <WhyInvestSection />
      <InvestmentTiers />
      <FoundersTeaser />
    </>
  );
}