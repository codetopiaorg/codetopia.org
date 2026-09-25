import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logos/Codetopia-Logo-TW.png";
import { cn } from "@/lib/utils";

interface Props {
  label: React.ReactNode;
  title: React.ReactNode;
  intro: React.ReactNode;
  link?: { href: string; label: string };
  /** Fill the viewport, pinning the intro row to the bottom. */
  fullHeight?: boolean;
}

// Shared opening for every page: headline, then a ruled row of label, intro and link.
export const PageHero = ({ label, title, intro, link, fullHeight }: Props) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden flex flex-col bg-[#080808] px-6 md:px-12 pt-32 md:pt-40",
        fullHeight ? "min-h-[100svh] pb-12 md:pb-16" : "pb-12 md:pb-14",
      )}
    >
      {/* The full logo, huge, as every page's backdrop */}
      <div className="absolute inset-x-0 top-20 md:top-24 bottom-6 flex justify-center px-6 md:px-12 pointer-events-none">
        <Image
          src={logo}
          alt=""
          aria-hidden="true"
          priority
          sizes="(min-width: 1280px) 1280px, 100vw"
          className="h-full w-auto max-w-full object-contain opacity-[0.08] select-none"
        />
      </div>
      <div className="relative max-w-7xl mx-auto w-full flex-1 flex flex-col">
        <h1 className="max-w-6xl text-balance font-display font-medium text-[clamp(40px,min(7.2vw,11vh),116px)] leading-[0.95] tracking-[-0.045em] text-white animate-fade-up">
          {title}
        </h1>

        <div
          className={cn(
            "animate-fade-up delay-200",
            fullHeight ? "mt-auto pt-20" : "mt-10 md:mt-12",
          )}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6 pt-8">
            <div className="md:col-span-3 text-sm text-zinc-400">{label}</div>
            <div className="md:col-span-6 space-y-5 text-lg md:text-xl leading-relaxed text-zinc-300">
              {intro}
            </div>
            {link && (
              <div className="md:col-span-3 md:justify-self-end">
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-3 text-sm text-white"
                >
                  {link.label}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
