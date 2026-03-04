// PATH: components/services/RequestDeckCTA.tsx

import { FileText } from "lucide-react";
import Button from "@/components/ui/Button";

export default function RequestDeckCTA() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-5">
          <FileText size={44} className="text-black" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          Request Investment Deck
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-8 leading-relaxed">
          Detailed portfolio performance metrics, market analysis, and current investment
          opportunities. Available to qualified investors.
        </p>
        <Button href="/investor" className="px-10 py-4 text-base">
          Get the Deck
        </Button>
      </div>
    </section>
  );
}