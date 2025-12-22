"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import GradientButton from "./ui/gradientButton";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          <Image
            src="/lamps_logo.svg"
            alt="Logo"
            width={150}
            height={80}
          ></Image>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[15px] font-medium transition relative group ${
                  isActive ? "text-green-600" : "text-gray-700"
                }`}
              >
                {item.label}
                {/* hover underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <Link
          href="/contact"
          className="hidden md:block bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2.5 rounded-lg font-semibold shadow-[0_3px_10px_rgba(0,128,0,0.25)] hover:from-green-600 hover:to-green-700 hover:shadow-[0_4px_14px_rgba(0,128,0,0.4)] hover:scale-[1.05] active:scale-[0.98] transition-all duration-200"
        >
          Contact Us
        </Link>

        {/* Mobile Button */}
        <button
          className="md:hidden text-black text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white shadow-sm ${
          open ? "py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-2 text-lg border-b last:border-none ${
                  isActive ? "text-green-600 font-semibold" : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="hidden md:block bg-linear-to-r from-green-500 to-green-600 text-white px-6 py-2.5 rounded-lg font-semibold shadow-[0_3px_10px_rgba(0,128,0,0.25)] hover:from-green-600 hover:to-green-700 hover:shadow-[0_4px_14px_rgba(0,128,0,0.4)] hover:scale-[1.05] active:scale-[0.98] transition-all duration-200 w-full justify-center  "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
