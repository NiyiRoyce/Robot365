// PATH: components/investor/ContactInfo.tsx

import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
      <div className="w-8 h-0.5 bg-black mb-7" />
      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone size={16} className="text-white" />
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Phone</p>
            <p className="text-sm font-medium">{CONTACT_INFO.phone}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail size={16} className="text-white" />
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Email</p>
            <p className="text-sm font-medium">{CONTACT_INFO.email}</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin size={16} className="text-white" />
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Address</p>
            <p className="text-sm font-medium whitespace-pre-line">{CONTACT_INFO.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}