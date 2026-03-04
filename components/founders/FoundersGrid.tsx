// PATH: components/founders/FoundersGrid.tsx

import { FOUNDERS } from "@/lib/constants";
import FounderCard from "./FounderCard";

export default function FoundersGrid() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {FOUNDERS.map((founder) => (
            <FounderCard key={founder.id} founder={founder} />
          ))}
        </div>
      </div>
    </section>
  );
}