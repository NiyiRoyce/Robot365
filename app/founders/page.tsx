// PATH: app/founders/page.tsx

import FoundersHero from "@/components/founders/FoundersHero";
import FoundersGrid from "@/components/founders/FoundersGrid";
import FoundersCTA from "@/components/founders/FoundersCTA";

export const metadata = {
  title: "Founders — Robot365",
  description: "Meet the team behind Robot365. World-class AI, robotics, and investment expertise.",
};

export default function FoundersPage() {
  return (
    <>
      <FoundersHero />
      <FoundersGrid />
      <FoundersCTA />
    </>
  );
}