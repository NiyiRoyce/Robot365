// PATH: components/founders/FoundersCTA.tsx

import Button from "@/components/ui/Button";

export default function FoundersCTA() {
  return (
    <section className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          Invest Alongside
          <br />
          the Builders
        </h2>
        <p className="text-gray-500 mb-8 max-w-lg mx-auto text-base leading-relaxed">
          Our founders have built, scaled, and exited companies at the frontier of AI
          and robotics. Join their next chapter.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/investor" className="px-8 py-4 text-base">
            Become an Investor
          </Button>
          <Button href="/services" variant="outline" className="px-8 py-4 text-base">
            View Services
          </Button>
        </div>
      </div>
    </section>
  );
}