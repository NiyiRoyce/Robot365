// PATH: app/services/page.tsx

import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import InvestmentProcess from "@/components/services/InvestmentProcess";
import RequestDeckCTA from "@/components/services/RequestDeckCTA";

export const metadata = {
  title: "Services — Robot365",
  description: "Strategic capital deployment across the autonomous technology stack.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <InvestmentProcess />
      <RequestDeckCTA />
    </>
  );
}