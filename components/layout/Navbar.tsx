// PATH: components/layout/Navbar.tsx

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-150 relative pb-0.5 ${
                  isActive
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Button href="/investor">Invest Now</Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-black py-1"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/investor" fullWidth>
            Invest Now
          </Button>
        </div>
      )}
    </header>
  );
}