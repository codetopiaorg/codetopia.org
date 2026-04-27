import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { LogoBg } from "@/components/ui/LogoBg";
import { Reveal } from "@/components/ui/Reveal";
import { initiatives } from "@/lib/initiatives";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Initiatives | Codetopia",
  description:
    "Each Codetopia initiative is purpose-built to close a specific gap in the technology ecosystem. Independent in identity, unified in direction.",
  openGraph: {
    title: "Initiatives | Codetopia",
    description:
      "Each initiative is purpose-built to close a specific gap in the technology ecosystem. Independent in identity, unified in direction.",
    url: "https://codetopia.tech/initiatives",
    siteName: "Codetopia",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Codetopia Initiatives",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Initiatives | Codetopia",
    description:
      "Each initiative is purpose-built to close a specific gap in the technology ecosystem. Independent in identity, unified in direction.",
    images: ["/og.png"],
  },
};

export default function InitiativesPage() {
  return (
    <main className="min-h-screen bg-[#080808]">
      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-36 px-6 md:px-12 border-b border-white/[0.07] overflow-hidden">
        <div className="absolute inset-0 glow-top pointer-events-none" />
        <LogoBg invert opacity={0.06} />
        <div className="relative max-w-7xl mx-auto space-y-8">
          <p className="font-sans text-xs text-zinc-700 tracking-[0.4em] uppercase">
            {initiatives.filter((i) => i.status === "Active").length} Active ·{" "}
            {initiatives.filter((i) => i.status !== "Active").length} In
            Development
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-black tracking-tighter leading-[0.9] text-white max-w-4xl">
            What we&apos;re
            <br />
            building.
          </h1>
          <p className="text-zinc-500 leading-relaxed max-w-sm text-sm">
            Each initiative is purpose-built to close a specific gap in the
            technology ecosystem. Independent in identity, unified in direction.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {initiatives.map((initiative, i) => {
              const isActive = !!initiative.link;

              const card = (
                <div
                  className={cn(
                    "group relative flex flex-col p-8 md:p-10 border transition-all duration-300 overflow-hidden h-full",
                    isActive
                      ? "border-white/[0.08] hover:border-white/[0.22] cursor-pointer"
                      : "border-white/[0.04] opacity-40 pointer-events-none",
                  )}
                >
                  {/* Hover glow */}
                  {isActive && (
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,255,255,0.05), transparent)",
                      }}
                    />
                  )}

                  {/* Top: logo + status */}
                  <div className="relative flex items-start justify-between mb-10">
                    <div className="flex items-center gap-3">
                      <initiative.icon
                        size={16}
                        className={cn(
                          "text-zinc-500 shrink-0",
                          !isActive && "opacity-30",
                        )}
                      />
                      <Image
                        src={initiative.logo}
                        alt={initiative.name}
                        height={22}
                        className={cn(
                          "h-[22px] w-auto object-contain brightness-0 invert",
                          !isActive && "opacity-30",
                        )}
                      />
                    </div>
                    {initiative.status === "Active" ? (
                      <span className="flex items-center gap-1.5 font-sans text-xs text-zinc-400 shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                        Active
                      </span>
                    ) : (
                      <span className="font-sans text-xs text-zinc-700 shrink-0">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="relative text-sm text-zinc-500 leading-relaxed flex-1">
                    {initiative.description}
                  </p>

                  {/* Footer */}
                  <div className="relative mt-10 flex items-center justify-between">
                    <span className="font-sans text-xs text-zinc-800 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {isActive && (
                      <span className="flex items-center gap-1.5 text-xs text-zinc-700 group-hover:text-white transition-colors duration-200">
                        Visit site
                        <ArrowRight
                          size={11}
                          className="group-hover:translate-x-0.5 transition-transform duration-200"
                        />
                      </span>
                    )}
                  </div>
                </div>
              );

              return (
                <Reveal key={initiative.name} delay={i * 55} className="h-full">
                  {isActive && initiative.link ? (
                    <a
                      href={initiative.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      {card}
                    </a>
                  ) : (
                    card
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-28 md:py-44 px-6 md:px-12 border-t border-white/[0.07] overflow-hidden">
        <div className="absolute inset-0 glow-top pointer-events-none" />
        <Reveal>
          <div className="relative max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-12">
            <div className="space-y-6 max-w-xl">
              <p className="font-sans text-xs text-zinc-700 tracking-[0.4em] uppercase">
                More coming
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] text-white">
                More initiatives
                <br />
                are on the way.
              </h2>
              <p className="text-zinc-500 leading-relaxed text-sm">
                More are in development. Subscribe to The Dispatch to be the
                first to know when each one launches.
              </p>
            </div>
            <Link
              href="/#dispatch"
              className="inline-flex items-center gap-2.5 text-[10px] font-black uppercase tracking-[0.3em] text-black bg-white px-8 py-5 hover:bg-zinc-100 transition-colors shrink-0 group"
            >
              Subscribe to The Dispatch
              <ArrowRight
                size={11}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
