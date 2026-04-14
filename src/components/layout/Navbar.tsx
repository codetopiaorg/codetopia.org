"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "@/assets/images/logos/Codetopia-Logo-TW.png";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Initiatives", href: "/initiatives" },
  { name: "Contact", href: "/#contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return pathname === href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 ${
        scrolled
          ? "py-4 bg-black/70 backdrop-blur-2xl border-b border-white/[0.06]"
          : "py-8 bg-black/20 backdrop-blur-sm border-b border-white/[0.04]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="opacity-90 hover:opacity-100 transition-opacity"
        >
          <Image
            src={logo}
            alt="Codetopia"
            width={140}
            height={40}
            className="w-auto h-7 md:h-8 object-contain brightness-0 invert"
            priority
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${
                isActive(link.href)
                  ? "text-white"
                  : "text-zinc-500 hover:text-zinc-200"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 text-zinc-500 hover:text-white transition-colors relative z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-12 transition-all duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-black uppercase tracking-widest transition-colors ${
              isActive(link.href)
                ? "text-white"
                : "text-zinc-600 hover:text-white"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
