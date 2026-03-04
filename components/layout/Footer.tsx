// PATH: components/layout/Footer.tsx

import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-white rounded-md flex items-center justify-center flex-shrink-0">
                <span className="text-black font-bold text-lg leading-none">R</span>
              </div>
              <span className="text-white font-semibold text-xl tracking-tight">
                <span className="font-bold">Robot</span>365
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Investing in the autonomous future. Positioning you ahead in the AI
              revolution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Founders", href: "/founders" },
                { label: "Become an Investor", href: "/investor" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-5">Legal</h4>
            <ul className="space-y-3">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Investment Disclaimer", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-5">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-gray-400 text-sm">
                <Phone size={14} />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400 text-sm">
                <Mail size={14} />
                <span>{CONTACT_INFO.email}</span>
              </li>
              <li className="flex items-start gap-2.5 text-gray-400 text-sm">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span className="whitespace-pre-line">{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Robot365. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-500 hover:text-white transition-colors duration-150">
              <Linkedin size={18} />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors duration-150">
              <Twitter size={18} />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors duration-150">
              <Github size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}