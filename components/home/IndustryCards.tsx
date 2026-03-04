// PATH: components/home/IndustryCards.tsx

import { INDUSTRIES } from "@/lib/constants";
import IconBox from "@/components/ui/IconBox";

export default function IndustryCards() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            The AI Revolution
            <br />
            Is Already Here
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Artificial intelligence and robotics are reshaping logistics, healthcare, defense,
            manufacturing, and infrastructure. The question isn&apos;t if AI will dominate—it&apos;s
            whether you&apos;ll own a stake in the transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.title}
              className="bg-white border border-gray-100 rounded-sm p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
            >
              <div className="mb-4">
                <IconBox name={industry.icon} size={28} className="text-black" />
              </div>
              <h3 className="font-bold text-base mb-2">{industry.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}