"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "@/assets/images/logos/Codetopia-Logo-TW.png";

const navLinks = [
  { name: "Initiatives", href: "/initiatives" },
  { name: "About", href: "/about" },
];

const WHITE_HERO_PAGES = ["/", "/about"];

export const Navbar = () => {
  const pathname = usePathname();
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const hasWhiteHero = WHITE_HERO_PAGES.includes(pathname);
  const isWhite = hasWhiteHero && !scrolledPastHero && !menuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastHero(window.scrollY > window.innerHeight - 80);
    };
    setScrolledPastHero(window.scrollY > window.innerHeight - 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-8 transition-all duration-500 ${
          isWhite
            ? "bg-white/95 border-b border-zinc-200/80"
            : "bg-[#080808]/95 border-b border-white/[0.06]"
        } backdrop-blur-md`}
      >
        <div className="max-w-7xl mx-auto h-16 md:h-[68px] flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
            <Image
              src={logo}
              alt="Codetopia"
              width={140}
              height={40}
              className={`w-auto h-[22px] md:h-6 object-contain brightness-0 transition-all duration-300 ${
                isWhite ? "" : "invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop — nav + CTA */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-[11px] font-medium uppercase tracking-[0.25em] transition-colors rounded-sm ${
                  isActive(link.href)
                    ? isWhite ? "text-black" : "text-white"
                    : isWhite
                      ? "text-zinc-400 hover:text-black"
                      : "text-zinc-500 hover:text-white"
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${isWhite ? "bg-black" : "bg-white"}`} />
                )}
              </Link>
            ))}

            <div className={`w-px h-4 mx-3 ${isWhite ? "bg-zinc-200" : "bg-white/[0.1]"}`} />

            <Link
              href="/#contact"
              className={`text-[11px] font-medium uppercase tracking-[0.25em] px-5 py-2.5 transition-all ${
                isWhite
                  ? "bg-black text-white hover:bg-zinc-800"
                  : "bg-white text-black hover:bg-zinc-100"
              }`}
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className={`md:hidden p-1.5 transition-colors ${
              menuOpen ? "text-zinc-400" : isWhite ? "text-zinc-500 hover:text-black" : "text-zinc-500 hover:text-white"
            }`}
          >
            {menuOpen ? <X size={18} strokeWidth={2} /> : <Menu size={18} strokeWidth={2} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#080808] flex flex-col transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-between flex-1 px-6 pt-24 pb-12">
          <div className="flex flex-col">
            {[...navLinks, { name: "Contact", href: "/#contact" }].map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-end justify-between py-7 border-b border-white/[0.07]"
              >
                <span
                  className={`text-[clamp(36px,9vw,52px)] font-normal tracking-tight leading-none transition-colors ${
                    isActive(link.href) ? "text-white" : "text-zinc-600 group-hover:text-white"
                  }`}
                >
                  {link.name}
                </span>
                <span className="font-sans text-sm text-zinc-600 mb-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </div>

          <div className="space-y-1.5">
            <p className="font-sans text-[9px] text-zinc-700 tracking-[0.35em] uppercase">Contact</p>
            <p className="text-sm text-zinc-500">hello@codetopia.org</p>
          </div>
        </div>
      </div>
    </>
  );
};
