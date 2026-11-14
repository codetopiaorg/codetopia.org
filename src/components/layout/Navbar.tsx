"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "@/assets/images/logos/Codetopia-Logo-TW.png";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Initiatives", href: "/initiatives" },
  { name: "About", href: "/about" },
  { name: "Partners", href: "/partners" },
  { name: "Blog", href: "/blog" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
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

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-colors duration-200",
          scrolled || menuOpen
            ? "bg-white/80 backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <nav
          aria-label="Main"
          className="mx-auto max-w-[1200px] px-6 h-16 flex items-center justify-between gap-8"
        >
          <Link href="/" className="shrink-0">
            <Image
              src={logo}
              alt="Codetopia"
              width={140}
              height={40}
              className="w-auto h-8 object-contain brightness-0"
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
                    ? "text-black"
                    : "text-zinc-500 hover:text-black",
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#contact"
              className="text-sm text-zinc-500 hover:text-black transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/partners"
              className="inline-flex h-9 items-center bg-black px-4 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
            >
              Partner with us
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden -mr-2 w-10 h-10 flex items-center justify-center text-black"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        inert={!menuOpen}
        className={cn(
          "fixed inset-0 z-40 bg-white flex flex-col transition-opacity duration-200 md:hidden",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div className="flex flex-col justify-between flex-1 px-6 pt-24 pb-10">
          <ul>
            {[...navLinks, { name: "Contact", href: "#contact" }].map(
              (link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between py-5 font-display text-3xl font-medium tracking-[-0.03em]",
                      isActive(link.href) ? "text-black" : "text-zinc-600",
                    )}
                  >
                    {link.name}
                    <ArrowRight size={20} className="text-zinc-400" />
                  </Link>
                </li>
              ),
            )}
          </ul>
          <Link
            href="/partners"
            onClick={() => setMenuOpen(false)}
            className="inline-flex h-12 items-center justify-center bg-black text-white font-medium"
          >
            Partner with us
          </Link>
        </div>
      </nav>
    </>
  );
};
