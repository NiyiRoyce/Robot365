// PATH: components/home/FoundersTeaser.tsx

import Link from "next/link";
import { FOUNDERS } from "@/lib/constants";
import { ArrowRight, User } from "lucide-react";

export default function FoundersTeaser() {
  const featured = FOUNDERS.slice(0, 3);

  return (
    <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
              Built by the Best
            </h2>
            <p className="text-gray-500 max-w-lg">
              Our leadership team brings decades of experience from the world&apos;s
              most respected institutions in AI, robotics, and venture capital.
            </p>
          </div>
          <Link
            href="/founders"
            className="flex items-center gap-2 text-sm font-semibold text-black hover:gap-3 transition-all duration-200 flex-shrink-0"
          >
            Meet the full team <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((founder) => (
            <div
              key={founder.id}
              className="bg-white border border-gray-100 rounded-sm p-7 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
            >
              {/* Avatar placeholder */}
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-5">
                <User size={28} className="text-gray-400" />
              </div>
              <h3 className="font-bold text-lg leading-tight">{founder.name}</h3>
              <p className="text-gray-500 text-sm mb-3">{founder.title}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {founder.credentials.map((cred) => (
                  <span
                    key={cred}
                    className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-sm font-medium"
                  >
                    {cred}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{founder.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}