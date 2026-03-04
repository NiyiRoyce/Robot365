// PATH: components/ui/Logo.tsx

import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <div className="w-9 h-9 bg-black rounded-md flex items-center justify-center flex-shrink-0">
        <span className="text-white font-bold text-lg leading-none">R</span>
      </div>
      <span className="text-black font-semibold text-xl tracking-tight">
        <span className="font-bold">Robot</span>365
      </span>
    </Link>
  );
}