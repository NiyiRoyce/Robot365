// PATH: components/founders/FounderCard.tsx

import { Founder } from "@/types";
import { Linkedin, Twitter, User } from "lucide-react";
import Link from "next/link";

interface FounderCardProps {
  founder: Founder;
}

export default function FounderCard({ founder }: FounderCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-sm p-8 hover:border-gray-300 hover:shadow-md transition-all duration-200 flex flex-col">
      {/* Avatar */}
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6 flex-shrink-0">
        <User size={34} className="text-gray-400" />
      </div>

      {/* Name & title */}
      <div className="mb-4">
        <h3 className="text-xl font-bold leading-tight">{founder.name}</h3>
        <p className="text-gray-500 text-sm mt-0.5">{founder.title}</p>
      </div>

      {/* Divider */}
      <div className="w-8 h-0.5 bg-black mb-4" />

      {/* Credentials */}
      <div className="flex flex-wrap gap-2 mb-5">
        {founder.credentials.map((cred) => (
          <span
            key={cred}
            className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-sm font-medium"
          >
            {cred}
          </span>
        ))}
      </div>

      {/* Bio */}
      <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-6">{founder.bio}</p>

      {/* Social links */}
      <div className="flex items-center gap-3">
        {founder.linkedIn && (
          <Link
            href={founder.linkedIn}
            className="w-8 h-8 border border-gray-200 rounded-sm flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-all duration-150"
          >
            <Linkedin size={14} />
          </Link>
        )}
        {founder.twitter && (
          <Link
            href={founder.twitter}
            className="w-8 h-8 border border-gray-200 rounded-sm flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-all duration-150"
          >
            <Twitter size={14} />
          </Link>
        )}
      </div>
    </div>
  );
}