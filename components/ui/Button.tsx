// PATH: components/ui/Button.tsx

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  className?: string;
  type?: "button" | "submit";
  fullWidth?: boolean;
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  fullWidth = false,
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 font-semibold text-sm tracking-wide transition-all duration-200 rounded-sm cursor-pointer";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 active:scale-[0.98] disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400",
    outline:
      "bg-transparent text-black border border-black hover:bg-black hover:text-white active:scale-[0.98] disabled:bg-gray-50 disabled:text-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-50 disabled:hover:text-gray-400",
  };
  const widthClass = fullWidth ? "w-full" : "";
  const classes = `${base} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}