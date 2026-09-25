"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "@/assets/images/logos/Codetopia-Logo-TW.png";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Initiatives", href: "/initiatives" },
  { name: "About", href: "/about" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: close the menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 px-6 md:px-12 transition-colors duration-300",
          scrolled || menuOpen
            ? "bg-[#080808]/90 backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <nav className="max-w-7xl mx-auto h-16 md:h-20 flex items-center justify-between gap-8">
          <Link
            href="/"
            className="shrink-0 opacity-90 hover:opacity-100 transition-opacity"
          >
            <Image
              src={logo}
              alt="Codetopia"
              width={140}
              height={40}
              className="w-auto h-9 object-contain brightness-0 invert"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm transition-colors",
                  isActive(link.href)
                    ? "text-white"
                    : "text-zinc-400 hover:text-white",
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="text-sm text-white hover:text-zinc-300 transition-colors"
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="md:hidden -mr-2 w-10 h-10 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-[#080808] flex flex-col transition-opacity duration-300 md:hidden",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div className="flex flex-col justify-between flex-1 px-6 pt-28 pb-12">
          <div className="flex flex-col">
            {[...navLinks, { name: "Contact", href: "#contact" }].map(
              (link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-end justify-between py-6"
                >
                  <span
                    className={cn(
                      "font-display text-[clamp(34px,9vw,48px)] font-medium tracking-[-0.03em] leading-none transition-colors",
                      isActive(link.href)
                        ? "text-white"
                        : "text-zinc-500 group-hover:text-white",
                    )}
                  >
                    {link.name}
                  </span>
                  <span className="text-sm text-zinc-600 mb-1 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              ),
            )}
          </div>

          <div className="space-y-1.5">
            <p className="text-xs text-zinc-600 tracking-[0.3em] uppercase">
              Contact
            </p>
            <p className="text-sm text-zinc-400">hello@codetopia.org</p>
          </div>
        </div>
      </div>
    </>
  );
};
