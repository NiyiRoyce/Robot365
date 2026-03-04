// PATH: app/investor/page.tsx

import InvestorHero from "@/components/investor/InvestorHero";
import WhyPositionNow from "@/components/investor/WhyPositionNow";
import ContactInfo from "@/components/investor/ContactInfo";
import LocationMap from "@/components/investor/LocationMap";
import InvestorQualificationForm from "@/components/investor/InvestorQualificationForm";
import RiskDisclaimer from "@/components/investor/RiskDisclaimer";

export const metadata = {
  title: "Become an Investor — Robot365",
  description: "Secure your position in the AI era. Apply for investment access.",
};

export default function InvestorPage() {
  return (
    <>
      <InvestorHero />

      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column */}
          <div className="space-y-10">
            <WhyPositionNow />
            <ContactInfo />
            <LocationMap />
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <InvestorQualificationForm />
            <RiskDisclaimer />
          </div>
        </div>
      </section>
    </>
  );
}