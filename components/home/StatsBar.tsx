// PATH: components/home/StatsBar.tsx

import { STATS } from "@/lib/constants";

export default function StatsBar() {
  return (
    <section className="border-t border-b border-gray-100 bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-3 divide-x divide-gray-100">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center px-6">
            <span className="text-4xl md:text-5xl font-black tracking-tight text-black">
              {stat.value}
            </span>
            <span className="text-xs text-gray-400 uppercase tracking-widest mt-1 text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}