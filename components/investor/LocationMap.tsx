// PATH: components/investor/LocationMap.tsx

import { MapPin } from "lucide-react";

export default function LocationMap() {
  return (
    <div className="bg-gray-100 rounded-sm overflow-hidden h-52 flex items-center justify-center border border-gray-200">
      <div className="text-center text-gray-400">
        <MapPin size={28} className="mx-auto mb-2" />
        <p className="text-sm">Los Angeles, California</p>
      </div>
    </div>
  );
}