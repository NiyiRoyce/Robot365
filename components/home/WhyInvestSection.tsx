// PATH: components/home/WhyInvestSection.tsx

import { WHY_INVEST_METRICS, INVESTMENT_REASONS } from "@/lib/constants";
import IconBox from "@/components/ui/IconBox";

export default function WhyInvestSection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Why Invest in AI Now
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            The window for early adoption advantage is closing. Position yourself
            ahead of institutional capital.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {WHY_INVEST_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="bg-white/5 border border-white/10 rounded-sm p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-200"
            >
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <IconBox name={metric.icon} size={20} className="text-white" />
              </div>
              <p className="text-2xl font-black mb-1">{metric.value}</p>
              <p className="text-gray-400 text-xs leading-snug">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {INVESTMENT_REASONS.map((reason) => (
            <div
              key={reason.title}
              className="bg-white/5 border border-white/10 rounded-sm p-7 hover:bg-white/10 transition-colors duration-200"
            >
              <h3 className="text-lg font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}