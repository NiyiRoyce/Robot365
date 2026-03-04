// PATH: components/services/ServiceCard.tsx

import { Service } from "@/types";
import IconBox from "@/components/ui/IconBox";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-sm p-8 hover:border-gray-300 hover:shadow-sm transition-all duration-200 flex flex-col">
      <div className="mb-5">
        <IconBox name={service.icon} inverted size={22} />
      </div>
      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <div className="w-8 h-0.5 bg-black mb-4" />
      <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.description}</p>
      <ul className="space-y-2.5 mb-8 flex-1">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-700">
            <ArrowRight size={13} className="text-gray-400 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href="/investor"
        className="flex items-center gap-1.5 text-sm font-bold text-black hover:gap-2.5 transition-all duration-200"
      >
        Learn More <ArrowRight size={14} />
      </Link>
    </div>
  );
}