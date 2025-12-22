"use client";

import Link from "next/link";
import { cn } from "@/lib/utils"; // optional helper, see below

interface GradientButtonProps {
  label: string;
  href: string;
  fullWidth?: boolean;
  className?: string;
}

export default function GradientButton({
  label,
  href,
  fullWidth,
  className,
}: GradientButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        `bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2.5 rounded-lg font-semibold shadow-[0_3px_10px_rgba(0,128,0,0.25)] hover:from-green-600 hover:to-green-700 hover:shadow-[0_4px_14px_rgba(0,128,0,0.4)] hover:scale-[1.05] active:scale-[0.98] transition-all duration-200`,
        fullWidth && "w-full flex justify-center",
        className
      )}
    >
      {label}
    </Link>
  );
}
