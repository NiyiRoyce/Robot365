// PATH: components/services/InvestmentProcess.tsx

import { PROCESS_STEPS } from "@/lib/constants";

export default function InvestmentProcess() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Our Investment Process
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Institutional-grade due diligence meets venture agility. Every investment
            undergoes rigorous technical and financial validation.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-5 border border-white/20">
                <span className="text-xl font-black">{step.step}</span>
              </div>
              <h3 className="font-bold text-base mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}