// PATH: components/services/ServicesGrid.tsx

import { SERVICES } from "@/lib/constants";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}