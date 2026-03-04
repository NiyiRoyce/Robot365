// PATH: components/home/HeroSection.tsx

import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.95] mb-6 text-black">
          The Future Is
          <br />
          Autonomous.
        </h1>
        <p className="text-lg text-gray-500 font-medium mb-2">
          Own the Machines Building Tomorrow.
        </p>
        <p className="text-base text-gray-400 mb-10 max-w-lg mx-auto">
          Invest in next-generation AI robotics transforming global industries.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/investor" variant="primary" className="px-8 py-4 text-base">
            Become an Investor
          </Button>
          <Button href="/services" variant="outline" className="px-8 py-4 text-base">
            Explore Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
}